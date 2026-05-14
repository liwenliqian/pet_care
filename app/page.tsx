import Link from "next/link";

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">✨ 一对一安心洗护 · 透明可视</span>
            <h1>让每只毛孩子，干净得像刚从云朵里跑出来。</h1>
            <p>
              暖爪为猫咪和狗狗提供温柔、专业、低应激的洗护美容服务。从皮毛检测到造型修剪，每一步都以舒适和安全为先。
            </p>
            <div className="hero-actions">
              <Link className="button" href="/pricing">
                查看套餐
              </Link>
              <Link className="button secondary" href="/services">
                了解服务
              </Link>
            </div>
            <div className="arrival-prompt" aria-label="期望到店时间">
              <label>
                <span>期望到店时间</span>
                <input type="datetime-local" name="arrivalTime" />
              </label>
              <Link className="button" href="/booking">
                预约到店
              </Link>
            </div>
            <div className="stats" aria-label="门店数据">
              <div className="stat">
                <strong>4.9/5</strong>
                <span>顾客好评评分</span>
              </div>
              <div className="stat">
                <strong>6000+</strong>
                <span>宠物洗护经验</span>
              </div>
              <div className="stat">
                <strong>1v1</strong>
                <span>独立护理空间</span>
              </div>
            </div>
          </div>

          <div className="pet-card" aria-label="快乐小狗插画">
            <div className="bubble one">🛁</div>
            <div className="bubble two">🫧</div>
            <div className="bubble three">✂️</div>
            <div className="pet-illustration">
              <div className="pet-face">
                <span className="eye left" />
                <span className="eye right" />
                <span className="snout">
                  <span className="nose" />
                  <span className="smile" />
                </span>
              </div>
            </div>
            <div className="floating-note">
              今日预约享免费耳道检查与爪垫护理
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
