"use client";

import { useEffect, useState } from "react";
import { cn } from "../../../app/lib/utils";

export default function CountAnimation({
  number,
  className
}: {
  number: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = number / steps;
    const stepDuration = duration / steps;
    
    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [number]);

  return <span className={cn(className)}>{count}</span>;
}
