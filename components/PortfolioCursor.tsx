"use client";

import { useEffect, useRef } from "react";

const nativeCursor = 'input, textarea, select, [contenteditable="true"], iframe, :disabled, [aria-disabled="true"]';
const interactive = 'a[href], button, summary, [role="button"], [role="link"]';

export function PortfolioCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cursor.current;
    const dotPosition = dot.current;
    const ringPosition = ring.current;
    if (!element || !dotPosition || !ringPosition) return;

    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) and (forced-colors: none)",
    );
    const controller = new AbortController();
    const options = { passive: true, signal: controller.signal };
    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;
    let previousTime = 0;

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
    };

    const hide = () => {
      stop();
      element.removeAttribute("data-visible");
    };

    const follow = (time: number) => {
      const seconds = previousTime ? Math.min((time - previousTime) / 1000, 0.05) : 1 / 60;
      // Use elapsed time so the trail feels the same at different refresh rates.
      const progress = 1 - Math.exp(-14 * seconds);
      ringX += (x - ringX) * progress;
      ringY += (y - ringY) * progress;

      if (Math.hypot(x - ringX, y - ringY) < 0.1) {
        ringX = x;
        ringY = y;
        frame = 0;
        previousTime = 0;
      } else {
        previousTime = time;
        frame = requestAnimationFrame(follow);
      }

      dotPosition.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ringPosition.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    };

    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse" || !(event.target instanceof Element) || event.target.closest(nativeCursor)) {
        hide();
        return;
      }

      x = event.clientX;
      y = event.clientY;
      if (!element.hasAttribute("data-visible")) {
        ringX = x;
        ringY = y;
        dotPosition.style.transform = ringPosition.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        element.setAttribute("data-visible", "");
      }
      element.toggleAttribute("data-interactive", Boolean(event.target.closest(interactive)));
      if (!frame && (x !== ringX || y !== ringY)) frame = requestAnimationFrame(follow);
    };

    window.addEventListener("pointermove", move, options);
    window.addEventListener("pointerover", move, options);
    window.addEventListener("pointerout", (event) => {
      if (!event.relatedTarget) hide();
    }, options);
    window.addEventListener("pointercancel", hide, options);
    window.addEventListener("blur", hide, options);
    media.addEventListener("change", hide, options);

    return () => {
      controller.abort();
      stop();
    };
  }, []);

  return (
    <div ref={cursor} className="portfolio-cursor" aria-hidden="true">
      <div ref={ring} className="portfolio-cursor-position">
        <span className="portfolio-cursor-ring" />
      </div>
      <div ref={dot} className="portfolio-cursor-position">
        <span className="portfolio-cursor-dot" />
      </div>
    </div>
  );
}
