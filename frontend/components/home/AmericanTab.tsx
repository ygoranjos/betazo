'use client';

import Link from 'next/link';
import FooterHome from '../footer/FooterHome';
import Select from '../select/Select';
import { useSportMatches } from '@/hooks';
import { PreMatchRow, LoadingRow, EmptyRow } from './shared/MatchRow';

const categoris = [
  { id: 1, name: 'Game Lines' },
  { id: 2, name: 'Game Lines 2' },
  { id: 3, name: 'Game Lines 3' },
  { id: 4, name: 'Game Lines 4' },
];

const AmericanTab = () => {
  const { preMatches, isLoading } = useSportMatches('american_football');

  return (
    <div
      className="tab-pane mt__30 text-white fade"
      id="mainTab9"
      role="tabpanel"
      tabIndex={0}
    >
      <div className="main__body__wrap left__right__space pb-60">
        <div className="live__heightlight">
          <div className="height__table">
            <div className="main__table treanding__table main__basketballtable">
              <div className="section__head b__bottom">
                <div className="left__head">
                  <span className="icons">
                    <i className="icon-afootball"></i>
                  </span>
                  <span>American Football</span>
                </div>
                <div className="right__catagoris">
                  <div className="right__cate__items">
                    <Select data={categoris} />
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

export default AmericanTab;
