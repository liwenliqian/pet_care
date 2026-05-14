import type { Metadata } from "next";
import { ReviewsContent } from "@/app/components/ReviewsContent";
import { SectionHeading } from "@/app/components/SectionHeading";

export const metadata: Metadata = {
  title: "客户评价 | 暖爪宠物洗护馆",
  description: "阅读暖爪宠物洗护馆近期客户评价和服务承诺。",
};

export default function ReviewsPage() {
  return (
    <main>
      <section>
        <div className="container">
          <SectionHeading
            title="客户评价"
            description="我们认真对待每一次“洗香香”的体验，也欢迎你把真实感受告诉我们。"
          />
          <ReviewsContent />
        </div>
      </section>
    </main>
  );
}
