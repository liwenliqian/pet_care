import type { Metadata } from "next";
import { ProcessSteps } from "@/app/components/ProcessSteps";
import { SectionHeading } from "@/app/components/SectionHeading";

export const metadata: Metadata = {
  title: "护理流程 | 暖爪宠物洗护馆",
  description: "了解暖爪宠物洗护馆从到店评估到交付反馈的安心护理流程。",
};

export default function ProcessPage() {
  return (
    <main>
      <section>
        <div className="container">
          <SectionHeading
            title="安心护理流程"
            description="每次洗护都有清晰步骤，主人可以放心交给我们，毛孩子也能慢慢建立安全感。"
          />
          <ProcessSteps />
        </div>
      </section>
    </main>
  );
}
