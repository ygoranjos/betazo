'use client';

import Link from 'next/link';
import { useSportMatches } from '@/hooks';
import { NextToGoRow, LoadingRow, EmptyRow } from './shared/MatchRow';

const NextAmericanFootballTab = () => {
  const { preMatches, isLoading } = useSportMatches('american_football');

  return (
    <div className="table__wrap">
      {isLoading && <LoadingRow />}
      {!isLoading && preMatches.length === 0 && (
        <EmptyRow message="Nenhum próximo jogo de futebol americano disponível." />
      )}
      {preMatches.map((match) => (
        <NextToGoRow key={match.id} match={match} />
      ))}

      <div className="table__footer table__footer__nextgo">
        <Link href="#0" className="lobby">
          <span>Show more</span>
          <span className="icons">
            <i className="fas fa-chevron-down"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NextAmericanFootballTab;
