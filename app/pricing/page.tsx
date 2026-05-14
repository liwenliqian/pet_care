import type { Metadata } from "next";
import { PricingCards } from "@/app/components/PricingCards";
import { SectionHeading } from "@/app/components/SectionHeading";

export const metadata: Metadata = {
  title: "套餐价格 | 暖爪宠物洗护馆",
  description: "查看暖爪宠物洗护馆基础洗护、精致美容和皮毛 SPA 套餐价格。",
};

export default function PricingPage() {
  return (
    <main>
      <section>
        <div className="container">
          <SectionHeading
            title="热门套餐"
            description="价格会根据体型、毛量、打结程度微调；预约前可先发送照片给我们估价。"
          />
          <PricingCards />
        </div>
      </section>
    </main>
  );
}
