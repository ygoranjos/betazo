'use client';

import Link from 'next/link';
import FooterHome from '../footer/FooterHome';
import Select from '../select/Select';
import { useSportMatches } from '@/hooks';
import { PreMatchRow, LoadingRow, EmptyRow } from './shared/MatchRow';

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

const HandballTab = () => {
  const { preMatches, isLoading } = useSportMatches('handball');

  return (
    <div
      className="tab-pane mt__30 text-white fade"
      id="mainTab8"
      role="tabpanel"
      tabIndex={0}
    >
      <div className="main__body__wrap left__right__space pb-60">
        <div className="live__heightlight">
          <div className="height__table">
            <div className="main__table treanding__table">
              <div className="section__head b__bottom">
                <div className="left__head">
                  <span className="icons">
                    <i className="icon-handball"></i>
                  </span>
                  <span>Handball</span>
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
                  <EmptyRow message="Nenhum jogo de handebol disponível no momento." />
                )}
                {preMatches.map((match) => (
                  <PreMatchRow key={match.id} match={match} />
                ))}

                <div className="table__footer">
                  <Link href="#0" className="lobby text__opa">
                    Open Handball lobby
                  </Link>
                  <Link href="#0" className="footerpoing">
                    <span>{preMatches.length}</span>
                    <span><i className="fas fa-angle-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterHome />
    </div>
  );
};

export default HandballTab;
