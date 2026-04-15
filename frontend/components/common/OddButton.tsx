'use client';

import { useEffect, useRef, useState } from 'react';
import { useBetslipStore, type BetslipSelection } from '@/store';

interface OddButtonProps {
  price: string;
  selection?: Omit<BetslipSelection, 'currentOdd'>;
}

export function OddButton({ price, selection }: OddButtonProps) {
  const prevPrice = useRef<string | null>(null);
  const [flash, setFlash] = useState<'up' | 'down' | null>(null);
  const { toggleSelection, selections } = useBetslipStore();

  const isSelected = selection
    ? selections.some((s) => s.selectionId === selection.selectionId)
    : false;

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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!selection || price === '-') return;
    toggleSelection({ ...selection, currentOdd: parseFloat(price) });
  };

  const flashClass =
    flash === 'up' ? ' odd--flash-up' : flash === 'down' ? ' odd--flash-down' : '';
  const activeClass = isSelected ? ' active' : '';

  return (
    <a
      href="#0"
      className={`point__box${flashClass}${activeClass}`}
      onClick={handleClick}
    >
      {price}
    </a>
  );
}
