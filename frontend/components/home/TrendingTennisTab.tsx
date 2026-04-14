'use client';

import Link from 'next/link';
import Select from '../select/Select';
import { useSportMatches } from '@/hooks';
import { PreMatchRow, LoadingRow, EmptyRow } from './shared/MatchRow';

const categoris = [
  { id: 1, name: '2way - Who will win?' },
  { id: 2, name: '3way - Who will win?' },
  { id: 3, name: '4way - Who will win?' },
  { id: 4, name: '5way - Who will win?' },
];
const categoris2 = [
  { id: 1, name: 'Who will win the set?' },
  { id: 2, name: '....' },
  { id: 3, name: '....' },
  { id: 4, name: '....' },
];
const categoris3 = [
  { id: 1, name: 'Game Winner' },
  { id: 2, name: '....' },
  { id: 3, name: '....' },
  { id: 4, name: '....' },
];

const TrendingTennisTab = () => {
  const { preMatches, isLoading } = useSportMatches('tennis');

  return (
    <>
      <div className="section__head b__bottom">
        <div className="left__head">
          <span className="icons">
            <i className="icon-tennis"></i>
          </span>
          <span>Tennis</span>
        </div>
        <div className="right__catagoris">
          <div className="right__cate__items">
            <Select data={categoris} />
          </div>
          <div className="right__cate__items">
            <Select data={categoris2} />
          </div>
          <div className="right__cate__items">
            <Select data={categoris3} />
          </div>
        </div>
      </div>
      <div className="table__wrap">
        {isLoading && <LoadingRow />}
        {!isLoading && preMatches.length === 0 && (
          <EmptyRow message="Nenhum jogo de tênis disponível no momento." />
        )}
        {preMatches.map((match) => (
          <PreMatchRow key={match.id} match={match} />
        ))}

        <div className="table__footer">
          <Link href="#0" className="lobby text__opa">
            Open Tennis lobby
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

export default TrendingTennisTab;
