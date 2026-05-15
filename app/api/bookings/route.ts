import { NextResponse } from "next/server";
import { createPostgresPool } from "@/app/lib/postgres";

export const runtime = "nodejs";

const petTypes = new Set(["小型犬", "中大型犬", "猫咪", "其他宠物"]);
const serviceTypes = new Set(["基础洗护", "精致美容", "皮毛 SPA", "接送服务"]);

type BookingPayload = {
  name?: unknown;
  phone?: unknown;
  pet?: unknown;
  service?: unknown;
  arrivalTime?: unknown;
  message?: unknown;
};

function toText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parseShanghaiDateTime(value: string) {
  const normalized = value.length === 16 ? `${value}:00` : value;
  const date = new Date(`${normalized}+08:00`);

  return Number.isNaN(date.getTime()) ? null : date;
}

function validateBooking(payload: BookingPayload) {
  const name = toText(payload.name);
  const phone = toText(payload.phone);
  const pet = toText(payload.pet);
  const service = toText(payload.service);
  const arrivalTimeText = toText(payload.arrivalTime);
  const message = toText(payload.message);
  const arrivalTime = parseShanghaiDateTime(arrivalTimeText);

  if (!name || name.length > 80) {
    return { error: "请填写 80 个字以内的称呼。" };
  }

  if (!/^[\d+\-\s()]{5,30}$/.test(phone)) {
    return { error: "请填写正确的联系电话。" };
  }

  if (!petTypes.has(pet)) {
    return { error: "请选择宠物类型。" };
  }

  if (!serviceTypes.has(service)) {
    return { error: "请选择预约服务。" };
  }

  if (!arrivalTime) {
    return { error: "请选择期望到店时间。" };
  }

  if (message.length > 500) {
    return { error: "补充说明请控制在 500 个字以内。" };
  }

  return {
    data: {
      name,
      phone,
      pet,
      service,
      arrivalTime,
      message: message || null,
    },
  };
}

export async function POST(request: Request) {
  let payload: BookingPayload;

  try {
    payload = (await request.json()) as BookingPayload;
  } catch {
    return NextResponse.json({ error: "提交内容格式不正确。" }, { status: 400 });
  }

  const result = validateBooking(payload);

  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const pool = createPostgresPool();

  try {
    const insertResult = await pool.query<{ id: string }>(
      `insert into public.bookings (
        customer_name,
        phone,
        pet_type,
        service_type,
        arrival_time,
        message
      ) values ($1, $2, $3, $4, $5, $6)
      returning id`,
      [
        result.data.name,
        result.data.phone,
        result.data.pet,
        result.data.service,
        result.data.arrivalTime,
        result.data.message,
      ],
    );

    return NextResponse.json(
      {
        id: insertResult.rows[0]?.id,
        message: "预约信息已提交，我们会尽快联系你确认。",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to create booking", error);

    if (process.env.NODE_ENV === "development") {
      const detail =
        error instanceof Error
          ? error.message
          : "Unknown database error";
      const code =
        typeof error === "object" && error !== null && "code" in error
          ? String(error.code)
          : undefined;

      return NextResponse.json(
        {
          error: "预约提交失败，请稍后再试或电话联系我们。",
          detail,
          code,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { error: "预约提交失败，请稍后再试或电话联系我们。" },
      { status: 500 },
    );
  } finally {
    await pool.end().catch(() => undefined);
  }
}
