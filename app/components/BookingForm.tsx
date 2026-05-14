"use client";

import { FormEvent, useRef, useState } from "react";

export function BookingForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const noticeRef = useRef<HTMLDivElement | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    formRef.current?.reset();

    window.requestAnimationFrame(() => {
      noticeRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="你的称呼" required />
      <input type="tel" name="phone" placeholder="联系电话" required />
      <select name="pet" required defaultValue="">
        <option value="">宠物类型</option>
        <option>小型犬</option>
        <option>中大型犬</option>
        <option>猫咪</option>
        <option>其他宠物</option>
      </select>
      <select name="service" required defaultValue="">
        <option value="">想预约的服务</option>
        <option>基础洗护</option>
        <option>精致美容</option>
        <option>皮毛 SPA</option>
        <option>接送服务</option>
      </select>
      <textarea
        name="message"
        placeholder="补充说明：宠物年龄、体重、是否怕水、是否打结等"
      />
      <div
        className="notice"
        ref={noticeRef}
        style={{ display: submitted ? "block" : undefined }}
      >
        预约信息已记录。演示页面不会真实提交，记得接入你的后台或表单服务哦。
      </div>
      <button className="button full" type="submit">
        提交预约
      </button>
    </form>
  );
}
