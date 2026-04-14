'use client';

import Link from 'next/link';
import Select from '../select/Select';
import { useSportMatches } from '@/hooks';
import { PreMatchRow, LoadingRow, EmptyRow } from './shared/MatchRow';

const gameLine = [
  { id: 1, name: 'Game Lines' },
  { id: 2, name: 'Game Lines 1' },
  { id: 3, name: 'Game Lines 2' },
  { id: 4, name: 'Game Lines 3' },
  { id: 5, name: 'Game Lines 4' },
];

const TrendingAmericanFootballTab = () => {
  const { preMatches, isLoading } = useSportMatches('american_football');

  return (
    <>
      <div className="section__head b__bottom">
        <div className="left__head">
          <span className="icons">
            <i className="icon-afootball"></i>
          </span>
          <span>American Football</span>
        </div>
        <div className="right__catagoris">
          <div className="right__cate__items">
            <Select data={gameLine} />
          </div>
        </div>
      </div>
      <div className="table__wrap">
        {isLoading && <LoadingRow />}
        {!isLoading && preMatches.length === 0 && (
          <EmptyRow message="Nenhum jogo de futebol americano disponível no momento." />
        )}
        {preMatches.map((match) => (
          <PreMatchRow key={match.id} match={match} />
        ))}

        <div className="table__footer">
          <Link href="#0" className="lobby text__opa">
            Open American Football lobby
          </Link>
          <Link href="#0" className="footerpoing">
            <span>{preMatches.length}</span>
            <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TrendingAmericanFootballTab;
