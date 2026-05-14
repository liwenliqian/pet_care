import type { Metadata } from "next";
import { EnvironmentCarousel } from "@/app/components/EnvironmentCarousel";
import { SectionHeading } from "@/app/components/SectionHeading";

export const metadata: Metadata = {
  title: "店内环境 | 暖爪宠物洗护馆",
  description: "查看暖爪宠物洗护馆独立洗护间、恒温烘干区和前厅可视区。",
};

export default function EnvironmentPage() {
  return (
    <main>
      <section>
        <div className="container">
          <SectionHeading
            title="店内环境"
            description="干净、明亮、低应激：我们把“看得见的卫生”和“毛孩子的安全感”放在第一位。"
          />
          <EnvironmentCarousel />
        </div>
      </section>
    </main>
  );
}
