import type { Metadata } from "next";
import { BookingForm } from "@/app/components/BookingForm";

export const metadata: Metadata = {
  title: "预约到店 | 暖爪宠物洗护馆",
  description: "提交暖爪宠物洗护馆预约信息，店员会在营业时间内联系确认。",
};

export default function BookingPage() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="booking">
            <h2>预约一次香香软软的变身</h2>
            <p>留下信息后，店员会在营业时间内联系你确认时间、体型和护理需求。</p>
            <BookingForm />
          </div>
        </div>
      </section>
    </main>
  );
}
