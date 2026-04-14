'use client';

import { useEffect, useRef, useState } from 'react';

interface OddButtonProps {
  price: string;
}

export function OddButton({ price }: OddButtonProps) {
  const prevPrice = useRef<string | null>(null);
  const [flash, setFlash] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    if (prevPrice.current === null) {
      prevPrice.current = price;
      return;
    }

    if (price !== '-' && prevPrice.current !== '-') {
      const prev = parseFloat(prevPrice.current);
      const curr = parseFloat(price);
      if (curr > prev) setFlash('up');
      else if (curr < prev) setFlash('down');
    }

    prevPrice.current = price;
  }, [price]);

  useEffect(() => {
    if (!flash) return;
    const timer = setTimeout(() => setFlash(null), 1000);
    return () => clearTimeout(timer);
  }, [flash]);

  const flashClass =
    flash === 'up' ? ' odd--flash-up' : flash === 'down' ? ' odd--flash-down' : '';

  return (
    <a href="#0" className={`point__box${flashClass}`}>
      {price}
    </a>
  );
}
