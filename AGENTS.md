# 项目说明

## 用户偏好

- 用户叫技术爬爬虾。
- 用户擅长 Python、Java。
- 用户对 CSS 不熟，解释网页样式时要用大白话，不要只堆专业术语。

## 项目概览

- 这是一个宠物洗护馆官网项目，品牌名是「暖爪宠物洗护馆」。
- 网站语言是中文，页面面向猫咪和狗狗洗护、美容、低应激护理、预约到店等场景。
- 技术栈是 Next.js + React + TypeScript。
- 使用 App Router，页面都放在 `app/` 目录下。
- 目前样式集中写在 `app/globals.css`，没有使用 Tailwind 或组件库。

## 主要命令

- `npm run dev`：启动本地开发服务器。
- `npm run build`：构建生产版本。
- `npm run start`：启动生产服务。
- `npm run lint`：运行 ESLint 检查。

## 目录结构

- `app/layout.tsx`：全站布局，包含顶部导航、页脚、站点 metadata。
- `app/page.tsx`：首页，包含主视觉、快捷预约时间、核心数据展示。
- `app/services/page.tsx`：服务项目页面。
- `app/process/page.tsx`：护理流程页面。
- `app/pricing/page.tsx`：套餐价格页面。
- `app/environment/page.tsx`：店内环境页面。
- `app/reviews/page.tsx`：客户评价页面。
- `app/location/page.tsx`：门店信息页面。
- `app/booking/page.tsx`：预约到店页面。
- `app/components/`：可复用组件。
- `app/data/site.ts`：站点主要业务数据，包括服务、流程、价格、环境图、评价。
- `app/globals.css`：全站 CSS 样式和响应式布局。
- `public/assets/environment/`：页面使用的店内环境图片。
- `assets/environment/`：同名环境图片资源备份或源资源。
- `index.html`：旧版或静态单页文件，当前 Next.js 应用主要使用 `app/` 下的代码。

## 页面和组件关系

- `SectionHeading`：通用栏目标题组件，接收 `title` 和 `description`。
- `ServiceCards`：读取 `services`，展示服务卡片。
- `ProcessSteps`：读取 `processSteps`，展示护理流程步骤。
- `PricingCards`：读取 `pricingPlans`，展示价格套餐，`featured` 套餐会高亮。
- `EnvironmentCarousel`：客户端组件，读取 `environmentSlides`，使用 `next/image` 展示环境轮播图，支持自动轮播、左右切换和圆点切换。
- `ReviewsContent`：展示评分、精选评价、服务承诺和横向滚动评价列表。
- `LocationInfo`：用 CSS 画了一个简化地图，并展示营业时间、电话、地址和温馨提示。
- `BookingForm`：客户端组件，表单提交时不会真的发请求，只是在页面内显示提示并重置表单。

## 业务内容

- 服务项目包括：深层沐浴、美容造型、基础护理、猫咪低应激洗护、皮毛养护 SPA、附近接送。
- 护理流程包括：到店评估、温和清洁、护理修整、交付反馈。
- 套餐包括：基础洗护 ¥88 起、精致美容 ¥168 起、皮毛 SPA ¥238 起。
- 店内环境轮播使用三张图：独立洗护间、恒温烘干区、前厅可视区。
- 门店信息中写有电话 `188-0000-6688`，地址是上海市宜川路街道陕西北路 1620 号。

## 样式说明

- 整体风格是温暖、柔和、宠物友好的中文官网。
- 主色调是奶油底色、珊瑚橙、薄荷绿，文字主色是深灰蓝。
- 大部分布局通过 CSS Grid 和 Flex 实现。
- `.container` 控制页面内容最大宽度。
- `.button` 是全站主要按钮样式。
- `.card`、`.price-card`、`.step`、`.review-card` 是主要卡片样式。
- 响应式断点主要是 `920px` 和 `640px`：小屏幕会隐藏导航链接，并把多列布局改成单列或双列。

## 开发注意事项

- 中文文件内容是 UTF-8。PowerShell 直接 `Get-Content` 时可能显示乱码，但文件本身不是乱码；需要确认中文时可以用 Node 以 UTF-8 读取。
- 修改业务文案、价格、服务、评价时，优先改 `app/data/site.ts`。
- 修改全站视觉样式时，优先看 `app/globals.css`。
- 添加新页面时，按 App Router 规则在 `app/新路径/page.tsx` 中创建页面。
- 使用路径别名 `@/*`，例如 `@/app/components/SectionHeading`。
- `BookingForm` 当前只是前端演示表单，没有后端接口或真实提交逻辑。
- 当前仓库里有用户已有改动，工作时不要随意回滚不属于自己的修改。
