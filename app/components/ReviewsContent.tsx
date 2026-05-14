import Link from "next/link";
import { reviews } from "@/app/data/site";

export function ReviewsContent() {
  return (
    <>
      <div className="review-head" aria-label="评价概览">
        <div className="review-score">
          <span className="stars" aria-hidden="true">
            ★★★★★
          </span>
          <span>4.9 / 5</span>
          <span style={{ fontWeight: 800, color: "var(--muted)" }}>
            近 30 天回访统计
          </span>
        </div>
        <Link className="button secondary" href="/booking">
          我也想预约
        </Link>
      </div>

      <div className="split" aria-label="精选评价与服务承诺">
        <article className="card testimonial">
          <div className="quote">
            “我家小狗以前洗澡像拆迁队，这次居然摇着尾巴出来。毛特别蓬，香味也很清爽。”
          </div>
          <div className="customer">
            <span className="avatar">🐶</span>
            <span>布丁妈妈 · 柯基 3 岁</span>
          </div>
        </article>
        <article className="card">
          <div className="icon">💛</div>
          <h3>我们承诺这些细节</h3>
          <ul>
            <li>美容师持证上岗，熟悉不同犬猫毛发护理。</li>
            <li>一宠一消毒，浴巾、工具和护理台严格分区。</li>
            <li>全程可视，支持拍照反馈，不让主人“盲盒式等待”。</li>
            <li>不强推办卡，先把每一次体验做好。</li>
          </ul>
        </article>
      </div>

      <div className="review-grid" aria-label="更多客户评价">
        {reviews.map((review) => (
          <article className="review-card" key={review.name}>
            <div className="review-meta">
              <span className="stars" aria-label="评分 5 分">
                ★★★★★
              </span>
              <span>{review.name}</span>
            </div>
            <p>{review.body}</p>
            <div className="review-tags" aria-label="评价标签">
              {review.tags.map((tag) => (
                <span className="pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
