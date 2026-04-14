'use client';

import Link from 'next/link';
import Select from '../select/Select';
import { useSportMatches } from '@/hooks';
import { LiveMatchRow, LoadingRow, EmptyRow } from './shared/MatchRow';

const categoris1 = [
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

const LiveFootballTab = ({ thead = true }: { thead?: boolean }) => {
  const { liveMatches, isLoading } = useSportMatches('football');

  return (
    <>
      <div className="section__head b__bottom">
        <div className="left__head">
          <span className="icons">
            <i className="icon-football"></i>
          </span>
          <span>Football</span>
        </div>
        <div className="right__catagoris">
          <div className="right__cate__items">
            <Select data={categoris1} />
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
        {thead && (
          <div className="table__items table__pointnone__items">
            <div className="t__items">
              <div className="t__items__left"></div>
            </div>
            <div className="cart__point"></div>
            <div className="mart__point__items">
              <Link href="#0" className="twing opo twing__right">
                <i className="icon-twer"></i>
              </Link>
              <Link href="#0" className="mart opo">
                <i className="icon-pmart"></i>
              </Link>
              <Link href="#0box" className="point__box bg__none">1</Link>
              <Link href="#0box" className="point__box bg__none">X</Link>
              <Link href="#0box" className="point__box bg__none">2</Link>
            </div>
            <div className="cart__point cart__point__two">Goals</div>
            <div className="mart__point__two">
              <div className="mart__point__left">
                <Link href="#0" className="point__box bg__none">Over</Link>
                <Link href="#0" className="point__box bg__none">Under</Link>
              </div>
            </div>
          </div>
        )}

        {isLoading && <LoadingRow />}
        {!isLoading && liveMatches.length === 0 && (
          <EmptyRow message="Nenhum jogo ao vivo no momento." />
        )}

        {liveMatches.map((match) => (
          <LiveMatchRow key={match.id} match={match} />
        ))}

        <div className="table__footer">
          <Link href="#0" className="lobby">
            Open Football lobby
          </Link>
          <Link href="#0" className="footerpoing">
            <span>{liveMatches.length}</span>
            <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LiveFootballTab;
