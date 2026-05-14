import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const navItems = [
  { href: "/services", label: "服务项目" },
  { href: "/process", label: "护理流程" },
  { href: "/pricing", label: "套餐价格" },
  { href: "/environment", label: "店内环境" },
  { href: "/reviews", label: "客户评价" },
  { href: "/booking", label: "预约到店" },
];

export const metadata: Metadata = {
  title: "暖爪宠物洗护馆 | 专业宠物美容洗护",
  description: "暖爪宠物洗护馆为猫咪和狗狗提供温柔、专业、低应激的洗护美容服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="nav">
          <div className="container nav-inner">
            <Link className="brand" href="/" aria-label="暖爪宠物洗护馆首页">
              <span className="brand-mark">🐾</span>
              <span>暖爪宠物洗护馆</span>
            </Link>
            <nav className="nav-links" aria-label="主导航">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link className="button" href="/booking">
              立即预约
            </Link>
          </div>
        </header>
        {children}
        <footer>
          <div className="container">
            © 2026 暖爪宠物洗护馆 · 给毛孩子一场温柔的清洁仪式
          </div>
        </footer>
      </body>
    </html>
  );
}
