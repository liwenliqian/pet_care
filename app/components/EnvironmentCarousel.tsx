"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { environmentSlides } from "@/app/data/site";

export function EnvironmentCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    const track = trackRef.current;
    const nextIndex =
      (index + environmentSlides.length) % environmentSlides.length;

    setCurrentSlide(nextIndex);
    track?.scrollTo({
      left: track.clientWidth * nextIndex,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const handleScroll = () => {
      const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
      setCurrentSlide(nextIndex);
    };

    track.addEventListener("scroll", handleScroll);
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [currentSlide]);

  return (
    <div className="env-carousel" aria-label="店内环境轮播">
      <div className="env-track" ref={trackRef}>
        {environmentSlides.map((slide) => (
          <article className="env-slide" key={slide.title}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 1160px) 100vw, 1160px"
              priority={slide === environmentSlides[0]}
            />
            <div className="env-caption">
              <span className="env-badge">{slide.badge}</span>
              <h3>{slide.title}</h3>
              <p>{slide.body}</p>
            </div>
          </article>
        ))}
      </div>
      <button
        className="env-control prev"
        type="button"
        aria-label="上一张店内环境图"
        onClick={() => goToSlide(currentSlide - 1)}
      >
        ‹
      </button>
      <button
        className="env-control next"
        type="button"
        aria-label="下一张店内环境图"
        onClick={() => goToSlide(currentSlide + 1)}
      >
        ›
      </button>
      <div className="env-dots" aria-label="店内环境轮播页码">
        {environmentSlides.map((slide, index) => (
          <button
            className={index === currentSlide ? "env-dot is-active" : "env-dot"}
            type="button"
            aria-label={`查看${slide.title}`}
            key={slide.title}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
