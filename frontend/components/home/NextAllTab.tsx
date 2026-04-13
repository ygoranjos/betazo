'use client';

import Link from 'next/link';
import { useAllLiveMatches } from '@/hooks';
import { NextToGoRow, LoadingRow, EmptyRow } from './shared/MatchRow';

const NextAllTab = () => {
  const { preMatches, isLoading } = useAllLiveMatches();

  return (
    <div className="table__wrap">
      {isLoading && <LoadingRow />}
      {!isLoading && preMatches.length === 0 && (
        <EmptyRow message="Nenhum próximo jogo disponível no momento." />
      )}
      {preMatches.map((match) => (
        <NextToGoRow key={match.id} match={match} />
      ))}

      <div className="table__footer table__footer__nextgo">
        <Link href="#0" className="lobby">
          <span>Show more</span>
          <span className="icons">
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NextAllTab;
