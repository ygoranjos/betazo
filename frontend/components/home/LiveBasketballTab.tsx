'use client';

import Link from 'next/link';
import Select from '../select/Select';
import { useSportMatches } from '@/hooks';
import { LiveMatchRow, LoadingRow, EmptyRow } from './shared/MatchRow';

const categoris = [
  { id: 1, name: 'Result 1X2' },
  { id: 2, name: 'Result 1X3' },
  { id: 3, name: 'Result 1X4' },
  { id: 4, name: 'Result 1X5' },
];
const categoris2 = [
  { id: 1, name: 'Over/Under' },
  { id: 2, name: '....' },
  { id: 3, name: '....' },
  { id: 4, name: '....' },
];
const categoris3 = [
  { id: 1, name: 'Both teams to score?' },
  { id: 2, name: '....' },
  { id: 3, name: '....' },
  { id: 4, name: '....' },
];

const LiveBasketballTab = ({ thead = true }: { thead?: boolean }) => {
  const { liveMatches, isLoading } = useSportMatches('basketball');

  return (
    <>
      <div className="section__head b__bottom">
        <div className="left__head">
          <span className="icons">
            <i className="icon-basketball"></i>
          </span>
          <span>Basketball</span>
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

      {thead && (
        <div className="heght__table__points tennis__table__points">
          <span>Spread</span>
          <span>Total</span>
          <span>Money Line</span>
        </div>
      )}

      <div className="table__wrap">
        {isLoading && <LoadingRow />}
        {!isLoading && liveMatches.length === 0 && (
          <EmptyRow message="Nenhum jogo de basquete ao vivo no momento." />
        )}
        {liveMatches.map((match) => (
          <LiveMatchRow key={match.id} match={match} />
        ))}

        <div className="table__footer">
          <Link href="#0" className="lobby">Open Basketball lobby</Link>
          <Link href="#0" className="footerpoing">
            <span>{liveMatches.length}</span>
            <span><i className="fas fa-angle-right"></i></span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LiveBasketballTab;
