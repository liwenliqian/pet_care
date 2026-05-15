"use client";

import { FormEvent, useRef, useState } from "react";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function BookingForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const noticeRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [notice, setNotice] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setNotice("");

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          pet: formData.get("pet"),
          service: formData.get("service"),
          arrivalTime: formData.get("arrivalTime"),
          message: formData.get("message"),
        }),
      });

      const data = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(data.error ?? "预约提交失败，请稍后再试。");
      }

      setStatus("success");
      setNotice(data.message ?? "预约信息已提交，我们会尽快联系你确认。");
      form.reset();
    } catch (error) {
      setStatus("error");
      setNotice(
        error instanceof Error
          ? error.message
          : "预约提交失败，请稍后再试。",
      );
    }

    window.requestAnimationFrame(() => {
      noticeRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="你的称呼" required />
      <input type="tel" name="phone" placeholder="联系电话" required />
      <select name="pet" required defaultValue="">
        <option value="">宠物类型</option>
        <option>小型犬</option>
        <option>中大型犬</option>
        <option>猫咪</option>
        <option>其他宠物</option>
      </select>
      <select name="service" required defaultValue="">
        <option value="">想预约的服务</option>
        <option>基础洗护</option>
        <option>精致美容</option>
        <option>皮毛 SPA</option>
        <option>接送服务</option>
      </select>
      <label className="field-label full">
        <span>期望到店时间</span>
        <input type="datetime-local" name="arrivalTime" required />
      </label>
      <textarea
        name="message"
        maxLength={500}
        placeholder="补充说明：宠物年龄、体重、是否怕水、是否打结等"
      />
      <div
        className={`notice ${status === "error" ? "notice-error" : ""}`}
        ref={noticeRef}
        role="status"
        style={{ display: notice ? "block" : undefined }}
      >
        {notice}
      </div>
      <button className="button full" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "提交中..." : "提交预约"}
      </button>
    </form>
  );
}
