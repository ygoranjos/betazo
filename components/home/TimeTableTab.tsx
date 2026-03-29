import Link from "next/link";

const TimeTableTab = ({ id }) => {
  return (
    <div className="world__point__table">
      <div className="world__point__tab">
        <ul className="nav nav-pills" id={`pills-pints${id}`} role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              data-bs-toggle="pill"
              data-bs-target={`#pointw1${id}`}
              type="button"
              role="tab"
              aria-selected="true"
            >
              <span>10:44</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="pill"
              data-bs-target={`#pointw2${id}`}
              type="button"
              role="tab"
              aria-selected="false"
            >
              <span>10:47</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="pill"
              data-bs-target={`#pointw3${id}`}
              type="button"
              role="tab"
              aria-selected="false"
            >
              <span>10:50</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="pill"
              data-bs-target={`#pointw4${id}`}
              type="button"
              role="tab"
              aria-selected="false"
            >
              <span>10:53</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="pill"
              data-bs-target={`#pointw5${id}`}
              type="button"
              role="tab"
              aria-selected="false"
            >
              <span>10:56</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="pill"
              data-bs-target={`#pointw6${id}`}
              type="button"
              role="tab"
              aria-selected="false"
            >
              <span>10:59</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="pill"
              data-bs-target={`#pointw7${id}`}
              type="button"
              role="tab"
              aria-selected="false"
            >
              <span>11:02</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="pill"
              data-bs-target={`#pointw8${id}`}
              type="button"
              role="tab"
              aria-selected="false"
            >
              <span>11:05</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="pill"
              data-bs-target={`#pointw9${id}`}
              type="button"
              role="tab"
              aria-selected="false"
            >
              <span>11:08</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="pill"
              data-bs-target={`#pointw10${id}`}
              type="button"
              role="tab"
              aria-selected="false"
            >
              <span>11:11</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id={`pills-tabContentpoint${id}`}>
        <div
          className="tab-pane fade active show"
          id={`pointw1${id}`}
          role="tabpanel"
          aria-labelledby={`pointw1${id}`}
          tabIndex="0"
        >
          <div className="world__point__text">
            <span>United States - Wales</span>
            <Link href="URL:void(0)">Bets closed</Link>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id={`pointw2${id}`}
          role="tabpanel"
          aria-labelledby={`pointw2${id}`}
          tabIndex="0"
        >
          <div className="world__point__text">
            <span>Portugal-Uruguay</span>
            <Link href="URL:void(0)">Bets closed</Link>
          </div>
          <div className="ecuador__match__fixing">
            <div className="equador__head">
              <span>Tunisia - France</span>
              <span>Bets closing in 3:08</span>
            </div>
            <div className="row g-4">
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title">Match Result</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Qatar 2.38</Link>
                      <Link href="URL:void(0)">X 3.25</Link>
                      <Link href="URL:void(0)">Ecuador 2.80</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Total Goals</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">0 12.00</Link>
                      <Link href="URL:void(0)">1 4.33</Link>
                      <Link href="URL:void(0)">2 3.20</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3 3.40</Link>
                      <Link href="URL:void(0)">4 5.00</Link>
                      <Link href="URL:void(0)"></Link>
                    </div>
                  </div>
                  <div className="match__box">
                    <span className="title mb__1">
                      Match Result and Both Teams to Score
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win and both teams to score</span>
                        <span className="poin">6.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win to nil</span>
                        <span className="poin">3.75</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>
                          Both teams to score and the match to end in a draw
                        </span>
                        <span className="poin">4.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Both teams not to score</span>
                        <span className="poin">10.00</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win and both teams to score</span>
                        <span className="poin">7.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win to nil</span>
                        <span className="poin">4.33</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">Correct Score</span>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1</Link>
                      <Link href="URL:void(0)">2</Link>
                      <Link href="URL:void(0)">3</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1-0 7.00</Link>
                      <Link href="URL:void(0)">0-0 10.00</Link>
                      <Link href="URL:void(0)">0-1 8.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-0 11.00</Link>
                      <Link href="URL:void(0)">1-1 6.00</Link>
                      <Link href="URL:void(0)">0-2 13.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-1 9.00</Link>
                      <Link href="URL:void(0)">1-2 10.00</Link>
                      <Link href="URL:void(0)">2-2 15.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">3-0 26.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">0-3 34.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3-1 21.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">1-3 26.00</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Double Chance</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Ecuador or X 1.33</Link>
                      <Link href="URL:void(0)">X or Senegal 1.44</Link>
                      <Link href="URL:void(0)">Ecuador or Senegal 1.25</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">0.5</Link>
                      <Link href="URL:void(0)">1.01</Link>
                      <Link href="URL:void(0)">12.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">1.5</Link>
                      <Link href="URL:void(0)">1.29</Link>
                      <Link href="URL:void(0)">3.25</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id={`pointw3${id}`}
          role="tabpanel"
          aria-labelledby={`pointw3${id}`}
          tabIndex="0"
        >
          <div className="world__point__text">
            <span>Ecuador - Senegal</span>
            <Link href="URL:void(0)">Bets closing in 3:08</Link>
          </div>
          <div className="ecuador__match__fixing">
            <div className="equador__head">
              <span>Ecuador - Senegal</span>
              <span>Bets closing in 3:08</span>
            </div>
            <div className="row g-4">
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title">Match Result</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Ecuador 2.40</Link>
                      <Link href="URL:void(0)">X 3.20</Link>
                      <Link href="URL:void(0)">Senegal 2.75</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Total Goals</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Ecuador 2.40</Link>
                      <Link href="URL:void(0)">4 6.00</Link>
                      <Link href="URL:void(0)"></Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Total Goals</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3 3.75</Link>
                    </div>
                  </div>
                  <div className="match__box">
                    <span className="title mb__1">
                      Match Result and Both Teams to Score
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win and both teams to score</span>
                        <span className="poin">6.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win to nil</span>
                        <span className="poin">3.75</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>
                          Both teams to score and the match to end in a draw
                        </span>
                        <span className="poin">4.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Both teams not to score</span>
                        <span className="poin">10.00</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win and both teams to score</span>
                        <span className="poin">7.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win to nil</span>
                        <span className="poin">4.33</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">Correct Score</span>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1</Link>
                      <Link href="URL:void(0)">2</Link>
                      <Link href="URL:void(0)">3</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1-0 7.00</Link>
                      <Link href="URL:void(0)">0-0 10.00</Link>
                      <Link href="URL:void(0)">0-1 8.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-0 11.00</Link>
                      <Link href="URL:void(0)">1-1 6.00</Link>
                      <Link href="URL:void(0)">0-2 13.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-1 9.00</Link>
                      <Link href="URL:void(0)">1-2 10.00</Link>
                      <Link href="URL:void(0)">2-2 15.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">3-0 26.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">0-3 34.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3-1 21.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">1-3 26.00</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Double Chance</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Ecuador or X 1.33</Link>
                      <Link href="URL:void(0)">X or Senegal 1.44</Link>
                      <Link href="URL:void(0)">Ecuador or Senegal 1.25</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">Half Time/Full Time</span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)">Ecuador / Ecuador 3.50</Link>
                      <Link href="URL:void(0)">Ecuador / Draw 15.00</Link>
                      <Link href="URL:void(0)">Ecuador/Senegal 67.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">Draw / Ecuador 6.50</Link>
                      <Link href="URL:void(0)">Draw / Senegal 7.00</Link>
                      <Link href="URL:void(0)">Draw / Draw 4.50</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Senegal / Ecuador 51.00</Link>
                      <Link href="URL:void(0)">Senegal / Draw 15.00</Link>
                      <Link href="URL:void(0)">Senegal / Senegal 4.00</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id={`pointw4${id}`}
          role="tabpanel"
          aria-labelledby={`pointw4${id}`}
          tabIndex="0"
        >
          <div className="world__point__text">
            <span>Portugal-Uruguay</span>
            <Link href="URL:void(0)">Bets closed</Link>
          </div>
          <div className="ecuador__match__fixing">
            <div className="equador__head">
              <span>Qatar - Ecuador</span>
              <span>Bets closing in 3:08</span>
            </div>
            <div className="row g-4">
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title">Match Result</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Qatar 2.38</Link>
                      <Link href="URL:void(0)">X 3.25</Link>
                      <Link href="URL:void(0)">Ecuador 2.80</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Total Goals</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">0 12.00</Link>
                      <Link href="URL:void(0)">1 4.33</Link>
                      <Link href="URL:void(0)">2 3.20</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3 3.40</Link>
                      <Link href="URL:void(0)">4 5.00</Link>
                      <Link href="URL:void(0)"></Link>
                    </div>
                  </div>
                  <div className="match__box">
                    <span className="title mb__1">
                      Match Result and Both Teams to Score
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win and both teams to score</span>
                        <span className="poin">6.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win to nil</span>
                        <span className="poin">3.75</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>
                          Both teams to score and the match to end in a draw
                        </span>
                        <span className="poin">4.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Both teams not to score</span>
                        <span className="poin">10.00</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win and both teams to score</span>
                        <span className="poin">7.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win to nil</span>
                        <span className="poin">4.33</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">Correct Score</span>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1</Link>
                      <Link href="URL:void(0)">2</Link>
                      <Link href="URL:void(0)">3</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1-0 7.00</Link>
                      <Link href="URL:void(0)">0-0 10.00</Link>
                      <Link href="URL:void(0)">0-1 8.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-0 11.00</Link>
                      <Link href="URL:void(0)">1-1 6.00</Link>
                      <Link href="URL:void(0)">0-2 13.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-1 9.00</Link>
                      <Link href="URL:void(0)">1-2 10.00</Link>
                      <Link href="URL:void(0)">2-2 15.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">3-0 26.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">0-3 34.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3-1 21.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">1-3 26.00</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Double Chance</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Ecuador or X 1.33</Link>
                      <Link href="URL:void(0)">X or Senegal 1.44</Link>
                      <Link href="URL:void(0)">Ecuador or Senegal 1.25</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">0.5</Link>
                      <Link href="URL:void(0)">1.01</Link>
                      <Link href="URL:void(0)">12.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">1.5</Link>
                      <Link href="URL:void(0)">1.29</Link>
                      <Link href="URL:void(0)">3.25</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id={`pointw5${id}`}
          role="tabpanel"
          aria-labelledby={`pointw5${id}`}
          tabIndex="0"
        >
          <div className="world__point__text">
            <span>Portugal-Uruguay</span>
            <Link href="URL:void(0)">Bets closed</Link>
          </div>
          <div className="ecuador__match__fixing">
            <div className="equador__head">
              <span>Portugal - Uruguay</span>
              <span>Bets closing in 3:08</span>
            </div>
            <div className="row g-4">
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title">Match Result</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Qatar 2.38</Link>
                      <Link href="URL:void(0)">X 3.25</Link>
                      <Link href="URL:void(0)">Ecuador 2.80</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Total Goals</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">0 12.00</Link>
                      <Link href="URL:void(0)">1 4.33</Link>
                      <Link href="URL:void(0)">2 3.20</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3 3.40</Link>
                      <Link href="URL:void(0)">4 5.00</Link>
                      <Link href="URL:void(0)"></Link>
                    </div>
                  </div>
                  <div className="match__box">
                    <span className="title mb__1">
                      Match Result and Both Teams to Score
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win and both teams to score</span>
                        <span className="poin">6.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win to nil</span>
                        <span className="poin">3.75</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>
                          Both teams to score and the match to end in a draw
                        </span>
                        <span className="poin">4.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Both teams not to score</span>
                        <span className="poin">10.00</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win and both teams to score</span>
                        <span className="poin">7.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win to nil</span>
                        <span className="poin">4.33</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">Correct Score</span>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1</Link>
                      <Link href="URL:void(0)">2</Link>
                      <Link href="URL:void(0)">3</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1-0 7.00</Link>
                      <Link href="URL:void(0)">0-0 10.00</Link>
                      <Link href="URL:void(0)">0-1 8.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-0 11.00</Link>
                      <Link href="URL:void(0)">1-1 6.00</Link>
                      <Link href="URL:void(0)">0-2 13.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-1 9.00</Link>
                      <Link href="URL:void(0)">1-2 10.00</Link>
                      <Link href="URL:void(0)">2-2 15.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">3-0 26.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">0-3 34.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3-1 21.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">1-3 26.00</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Double Chance</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Ecuador or X 1.33</Link>
                      <Link href="URL:void(0)">X or Senegal 1.44</Link>
                      <Link href="URL:void(0)">Ecuador or Senegal 1.25</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">0.5</Link>
                      <Link href="URL:void(0)">1.01</Link>
                      <Link href="URL:void(0)">12.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">1.5</Link>
                      <Link href="URL:void(0)">1.29</Link>
                      <Link href="URL:void(0)">3.25</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id={`pointw6${id}`}
          role="tabpanel"
          aria-labelledby={`pointw6${id}`}
          tabIndex="0"
        >
          <div className="world__point__text">
            <span>Portugal-Uruguay</span>
            <Link href="URL:void(0)">Bets closed</Link>
          </div>
          <div className="ecuador__match__fixing">
            <div className="equador__head">
              <span>Netherlands - Qatar</span>
              <span>Bets closing in 3:08</span>
            </div>
            <div className="row g-4">
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title">Match Result</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Qatar 2.38</Link>
                      <Link href="URL:void(0)">X 3.25</Link>
                      <Link href="URL:void(0)">Ecuador 2.80</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Total Goals</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">0 12.00</Link>
                      <Link href="URL:void(0)">1 4.33</Link>
                      <Link href="URL:void(0)">2 3.20</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3 3.40</Link>
                      <Link href="URL:void(0)">4 5.00</Link>
                      <Link href="URL:void(0)"></Link>
                    </div>
                  </div>
                  <div className="match__box">
                    <span className="title mb__1">
                      Match Result and Both Teams to Score
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win and both teams to score</span>
                        <span className="poin">6.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win to nil</span>
                        <span className="poin">3.75</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>
                          Both teams to score and the match to end in a draw
                        </span>
                        <span className="poin">4.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Both teams not to score</span>
                        <span className="poin">10.00</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win and both teams to score</span>
                        <span className="poin">7.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win to nil</span>
                        <span className="poin">4.33</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">Correct Score</span>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1</Link>
                      <Link href="URL:void(0)">2</Link>
                      <Link href="URL:void(0)">3</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1-0 7.00</Link>
                      <Link href="URL:void(0)">0-0 10.00</Link>
                      <Link href="URL:void(0)">0-1 8.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-0 11.00</Link>
                      <Link href="URL:void(0)">1-1 6.00</Link>
                      <Link href="URL:void(0)">0-2 13.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-1 9.00</Link>
                      <Link href="URL:void(0)">1-2 10.00</Link>
                      <Link href="URL:void(0)">2-2 15.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">3-0 26.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">0-3 34.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3-1 21.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">1-3 26.00</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Double Chance</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Ecuador or X 1.33</Link>
                      <Link href="URL:void(0)">X or Senegal 1.44</Link>
                      <Link href="URL:void(0)">Ecuador or Senegal 1.25</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">0.5</Link>
                      <Link href="URL:void(0)">1.01</Link>
                      <Link href="URL:void(0)">12.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">1.5</Link>
                      <Link href="URL:void(0)">1.29</Link>
                      <Link href="URL:void(0)">3.25</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id={`pointw${id}`}
          role="tabpanel"
          aria-labelledby={`pointw${id}`}
          tabIndex="0"
        >
          <div className="world__point__text">
            <span>Portugal-Uruguay</span>
            <Link href="URL:void(0)">Bets closed</Link>
          </div>
          <div className="ecuador__match__fixing">
            <div className="equador__head">
              <span>Ecuador - Senegal</span>
              <span>Bets closing in 3:08</span>
            </div>
            <div className="row g-4">
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title">Match Result</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Qatar 2.38</Link>
                      <Link href="URL:void(0)">X 3.25</Link>
                      <Link href="URL:void(0)">Ecuador 2.80</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Total Goals</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">0 12.00</Link>
                      <Link href="URL:void(0)">1 4.33</Link>
                      <Link href="URL:void(0)">2 3.20</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3 3.40</Link>
                      <Link href="URL:void(0)">4 5.00</Link>
                      <Link href="URL:void(0)"></Link>
                    </div>
                  </div>
                  <div className="match__box">
                    <span className="title mb__1">
                      Match Result and Both Teams to Score
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win and both teams to score</span>
                        <span className="poin">6.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win to nil</span>
                        <span className="poin">3.75</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>
                          Both teams to score and the match to end in a draw
                        </span>
                        <span className="poin">4.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Both teams not to score</span>
                        <span className="poin">10.00</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win and both teams to score</span>
                        <span className="poin">7.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win to nil</span>
                        <span className="poin">4.33</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">Correct Score</span>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1</Link>
                      <Link href="URL:void(0)">2</Link>
                      <Link href="URL:void(0)">3</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1-0 7.00</Link>
                      <Link href="URL:void(0)">0-0 10.00</Link>
                      <Link href="URL:void(0)">0-1 8.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-0 11.00</Link>
                      <Link href="URL:void(0)">1-1 6.00</Link>
                      <Link href="URL:void(0)">0-2 13.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-1 9.00</Link>
                      <Link href="URL:void(0)">1-2 10.00</Link>
                      <Link href="URL:void(0)">2-2 15.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">3-0 26.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">0-3 34.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3-1 21.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">1-3 26.00</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Double Chance</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Ecuador or X 1.33</Link>
                      <Link href="URL:void(0)">X or Senegal 1.44</Link>
                      <Link href="URL:void(0)">Ecuador or Senegal 1.25</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">0.5</Link>
                      <Link href="URL:void(0)">1.01</Link>
                      <Link href="URL:void(0)">12.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">1.5</Link>
                      <Link href="URL:void(0)">1.29</Link>
                      <Link href="URL:void(0)">3.25</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id={`pointw8${id}`}
          role="tabpanel"
          aria-labelledby={`pointw8${id}`}
          tabIndex="0"
        >
          <div className="world__point__text">
            <span>Portugal-Uruguay</span>
            <Link href="URL:void(0)">Bets closed</Link>
          </div>
          <div className="ecuador__match__fixing">
            <div className="equador__head">
              <span>Wales - England</span>
              <span>Bets closing in 3:08</span>
            </div>
            <div className="row g-4">
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title">Match Result</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Qatar 2.38</Link>
                      <Link href="URL:void(0)">X 3.25</Link>
                      <Link href="URL:void(0)">Ecuador 2.80</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Total Goals</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">0 12.00</Link>
                      <Link href="URL:void(0)">1 4.33</Link>
                      <Link href="URL:void(0)">2 3.20</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3 3.40</Link>
                      <Link href="URL:void(0)">4 5.00</Link>
                      <Link href="URL:void(0)"></Link>
                    </div>
                  </div>
                  <div className="match__box">
                    <span className="title mb__1">
                      Match Result and Both Teams to Score
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win and both teams to score</span>
                        <span className="poin">6.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win to nil</span>
                        <span className="poin">3.75</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>
                          Both teams to score and the match to end in a draw
                        </span>
                        <span className="poin">4.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Both teams not to score</span>
                        <span className="poin">10.00</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win and both teams to score</span>
                        <span className="poin">7.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win to nil</span>
                        <span className="poin">4.33</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">Correct Score</span>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1</Link>
                      <Link href="URL:void(0)">2</Link>
                      <Link href="URL:void(0)">3</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1-0 7.00</Link>
                      <Link href="URL:void(0)">0-0 10.00</Link>
                      <Link href="URL:void(0)">0-1 8.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-0 11.00</Link>
                      <Link href="URL:void(0)">1-1 6.00</Link>
                      <Link href="URL:void(0)">0-2 13.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-1 9.00</Link>
                      <Link href="URL:void(0)">1-2 10.00</Link>
                      <Link href="URL:void(0)">2-2 15.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">3-0 26.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">0-3 34.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3-1 21.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">1-3 26.00</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Double Chance</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Ecuador or X 1.33</Link>
                      <Link href="URL:void(0)">X or Senegal 1.44</Link>
                      <Link href="URL:void(0)">Ecuador or Senegal 1.25</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">0.5</Link>
                      <Link href="URL:void(0)">1.01</Link>
                      <Link href="URL:void(0)">12.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">1.5</Link>
                      <Link href="URL:void(0)">1.29</Link>
                      <Link href="URL:void(0)">3.25</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id={`pointw9${id}`}
          role="tabpanel"
          aria-labelledby={`pointw9${id}`}
          tabIndex="0"
        >
          <div className="world__point__text">
            <span>Portugal-Uruguay</span>
            <Link href="URL:void(0)">Bets closed</Link>
          </div>
          <div className="ecuador__match__fixing">
            <div className="equador__head">
              <span>Iran - United States</span>
              <span>Bets closing in 3:08</span>
            </div>
            <div className="row g-4">
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title">Match Result</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Qatar 2.38</Link>
                      <Link href="URL:void(0)">X 3.25</Link>
                      <Link href="URL:void(0)">Ecuador 2.80</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Total Goals</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">0 12.00</Link>
                      <Link href="URL:void(0)">1 4.33</Link>
                      <Link href="URL:void(0)">2 3.20</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3 3.40</Link>
                      <Link href="URL:void(0)">4 5.00</Link>
                      <Link href="URL:void(0)"></Link>
                    </div>
                  </div>
                  <div className="match__box">
                    <span className="title mb__1">
                      Match Result and Both Teams to Score
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win and both teams to score</span>
                        <span className="poin">6.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win to nil</span>
                        <span className="poin">3.75</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>
                          Both teams to score and the match to end in a draw
                        </span>
                        <span className="poin">4.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Both teams not to score</span>
                        <span className="poin">10.00</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win and both teams to score</span>
                        <span className="poin">7.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win to nil</span>
                        <span className="poin">4.33</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">Correct Score</span>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1</Link>
                      <Link href="URL:void(0)">2</Link>
                      <Link href="URL:void(0)">3</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1-0 7.00</Link>
                      <Link href="URL:void(0)">0-0 10.00</Link>
                      <Link href="URL:void(0)">0-1 8.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-0 11.00</Link>
                      <Link href="URL:void(0)">1-1 6.00</Link>
                      <Link href="URL:void(0)">0-2 13.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-1 9.00</Link>
                      <Link href="URL:void(0)">1-2 10.00</Link>
                      <Link href="URL:void(0)">2-2 15.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">3-0 26.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">0-3 34.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3-1 21.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">1-3 26.00</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Double Chance</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Ecuador or X 1.33</Link>
                      <Link href="URL:void(0)">X or Senegal 1.44</Link>
                      <Link href="URL:void(0)">Ecuador or Senegal 1.25</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">0.5</Link>
                      <Link href="URL:void(0)">1.01</Link>
                      <Link href="URL:void(0)">12.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">1.5</Link>
                      <Link href="URL:void(0)">1.29</Link>
                      <Link href="URL:void(0)">3.25</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id={`pointw10${id}`}
          role="tabpanel"
          aria-labelledby={`pointw10${id}`}
          tabIndex="0"
        >
          <div className="world__point__text">
            <span>Portugal-Uruguay</span>
            <Link href="URL:void(0)">Bets closed</Link>
          </div>
          <div className="ecuador__match__fixing">
            <div className="equador__head">
              <span>Tunisia - France</span>
              <span>Bets closing in 3:08</span>
            </div>
            <div className="row g-4">
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title">Match Result</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Qatar 2.38</Link>
                      <Link href="URL:void(0)">X 3.25</Link>
                      <Link href="URL:void(0)">Ecuador 2.80</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Total Goals</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">0 12.00</Link>
                      <Link href="URL:void(0)">1 4.33</Link>
                      <Link href="URL:void(0)">2 3.20</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3 3.40</Link>
                      <Link href="URL:void(0)">4 5.00</Link>
                      <Link href="URL:void(0)"></Link>
                    </div>
                  </div>
                  <div className="match__box">
                    <span className="title mb__1">
                      Match Result and Both Teams to Score
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win and both teams to score</span>
                        <span className="poin">6.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Ecuador to win to nil</span>
                        <span className="poin">3.75</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>
                          Both teams to score and the match to end in a draw
                        </span>
                        <span className="poin">4.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Both teams not to score</span>
                        <span className="poin">10.00</span>
                      </Link>
                    </div>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win and both teams to score</span>
                        <span className="poin">7.50</span>
                      </Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)" className="d__box">
                        <span>Senegal to win to nil</span>
                        <span className="poin">4.33</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="equator__match__result">
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">Correct Score</span>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1</Link>
                      <Link href="URL:void(0)">2</Link>
                      <Link href="URL:void(0)">3</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">1-0 7.00</Link>
                      <Link href="URL:void(0)">0-0 10.00</Link>
                      <Link href="URL:void(0)">0-1 8.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-0 11.00</Link>
                      <Link href="URL:void(0)">1-1 6.00</Link>
                      <Link href="URL:void(0)">0-2 13.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">2-1 9.00</Link>
                      <Link href="URL:void(0)">1-2 10.00</Link>
                      <Link href="URL:void(0)">2-2 15.00</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">3-0 26.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">0-3 34.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">3-1 21.00</Link>
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">1-3 26.00</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title">Double Chance</span>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">Ecuador or X 1.33</Link>
                      <Link href="URL:void(0)">X or Senegal 1.44</Link>
                      <Link href="URL:void(0)">Ecuador or Senegal 1.25</Link>
                    </div>
                  </div>
                  <div className="match__box mb__30">
                    <span className="title mb__1">
                      Over/Under - Total Goals
                    </span>
                    <div className="devaided__box mb__1 ">
                      <Link href="URL:void(0)"></Link>
                      <Link href="URL:void(0)">Over</Link>
                      <Link href="URL:void(0)">Under</Link>
                    </div>
                    <div className="devaided__box mb__1">
                      <Link href="URL:void(0)">0.5</Link>
                      <Link href="URL:void(0)">1.01</Link>
                      <Link href="URL:void(0)">12.00</Link>
                    </div>
                    <div className="devaided__box">
                      <Link href="URL:void(0)">1.5</Link>
                      <Link href="URL:void(0)">1.29</Link>
                      <Link href="URL:void(0)">3.25</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTableTab;
