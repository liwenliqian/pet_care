import type { Metadata } from "next";
import { LocationInfo } from "@/app/components/LocationInfo";
import { SectionHeading } from "@/app/components/SectionHeading";

export const metadata: Metadata = {
  title: "门店信息 | 暖爪宠物洗护馆",
  description: "查看暖爪宠物洗护馆营业时间、联系电话和上海门店地址。",
};

export default function LocationPage() {
  return (
    <main>
      <section>
        <div className="container">
          <SectionHeading
            title="门店信息"
            description="欢迎提前预约到店参观护理区，也可以先电话沟通宠物情况。"
          />
          <LocationInfo />
        </div>
      </section>
    </main>
  );
}
