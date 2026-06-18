"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function Counter({ from = 0, to, duration = 2.5, suffix = "", className = "" }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const node = nodeRef.current;
    if (isInView && node) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = `${Math.round(value)}${suffix}`;
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration, suffix]);

  return (
    <span ref={nodeRef} className={className}>
      {from}{suffix}
    </span>
  );
}
