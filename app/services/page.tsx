import type { Metadata } from "next";
import { SectionHeading } from "@/app/components/SectionHeading";
import { ServiceCards } from "@/app/components/ServiceCards";

export const metadata: Metadata = {
  title: "服务项目 | 暖爪宠物洗护馆",
  description: "查看暖爪宠物洗护馆的深层沐浴、美容造型、猫咪低应激洗护和皮毛养护服务。",
};

export default function ServicesPage() {
  return (
    <main>
      <section>
        <div className="container">
          <SectionHeading
            title="精细洗护服务"
            description="按宠物体型、毛发状态和性格定制护理方案，减少等待与交叉接触，让洗澡不再是一场“史诗大战”。"
          />
          <ServiceCards />
        </div>
      </section>
    </main>
  );
}
