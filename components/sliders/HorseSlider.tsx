"use client";

import Slider from "react-slick";

const HorseSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1243,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="horse__slide__wrap mb__30 owl-theme owl-carousel">
      <Slider {...settings}>
        <div className="horse__slide__items">
          <div className="horse__s__head">
            <h6>PAU 17:15</h6>
            <span className="miu">1m 1f 207y | EW 1/5 1-2-3</span>
          </div>
          <div className="horse__body__wrap">
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>1</span>
                  <span>2</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Borndlers</h5>
                  <span className="deg1">J: D Alberca-Gavilan</span>
                  <span className="deg2">T: JL Pelletan</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>2</span>
                  <span>2</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Grecian Bonanza</h5>
                  <span className="deg1">J: S Le Quilleuc</span>
                  <span className="deg2">T: JC Rouget</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>4</span>
                  <span>4</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Germinal</h5>
                  <span className="deg1">J: A Bendjama</span>
                  <span className="deg2">T: S Brogi</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
          </div>
          <p className="horse__s__footer">View full race (15 Runners)</p>
        </div>
        <div className="horse__slide__items">
          <div className="horse__s__head">
            <h6>KENILWORTH 17:15</h6>
            <span className="miu">7f 210y | EW 1/5 1-2-3</span>
          </div>
          <div className="horse__body__wrap">
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>1</span>
                  <span>2</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Miss New York</h5>
                  <span className="deg1">J: Devin Ashby</span>
                  <span className="deg2">T: Andries Steyn</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>2</span>
                  <span>2</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Fields Of Green</h5>
                  <span className="deg1">J: M Yeni</span>
                  <span className="deg2">T: Glen Kotzen Sanchez</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>4</span>
                  <span>4</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Be Hopeful</h5>
                  <span className="deg1">J: Craig Bantam</span>
                  <span className="deg2">T: Justin Snaith</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
          </div>
          <p className="horse__s__footer">View full race (15 Runners)</p>
        </div>
        <div className="horse__slide__items">
          <div className="horse__s__head">
            <h6>LINGFIELD 17:20</h6>
            <span className="miu">1m 1y | EW 1/4 1-2-3</span>
          </div>
          <div className="horse__body__wrap">
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>1</span>
                  <span>2</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Mcqueen</h5>
                  <span className="deg1">J: D Tudhope</span>
                  <span className="deg2">T: H Spiller</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>2</span>
                  <span>2</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Blue Collar Lad</h5>
                  <span className="deg1">J: William Carson</span>
                  <span className="deg2">T: R Brisland</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>4</span>
                  <span>4</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Dutugamunu</h5>
                  <span className="deg1">J: Joshua Bryan</span>
                  <span className="deg2">T:L Carter</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
          </div>
          <p className="horse__s__footer">View full race (15 Runners)</p>
        </div>
        <div className="horse__slide__items">
          <div className="horse__s__head">
            <h6>PAU 17:15</h6>
            <span className="miu">1m 1f 207y | EW 1/5 1-2-3</span>
          </div>
          <div className="horse__body__wrap">
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>1</span>
                  <span>2</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Joy De Montegut</h5>
                  <span className="deg1">J: A Werle</span>
                  <span className="deg2">T: T&G Lemer</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>2</span>
                  <span>2</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Saffwan</h5>
                  <span className="deg1">J: A Crastus</span>
                  <span className="deg2">T: JC Rouget</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>4</span>
                  <span>4</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Dhakir</h5>
                  <span className="deg1">J: M Forest</span>
                  <span className="deg2">T: Francisco Sanchez</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
          </div>
          <p className="horse__s__footer">View full race (15 Runners)</p>
        </div>
        <div className="horse__slide__items">
          <div className="horse__s__head">
            <h6>KENILWORTH 17:15</h6>
            <span className="miu">7f 210y | EW 1/5 1-2-3</span>
          </div>
          <div className="horse__body__wrap">
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>1</span>
                  <span>2</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Miss New York</h5>
                  <span className="deg1">J: Devin Ashby</span>
                  <span className="deg2">T: Andries Steyn</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>2</span>
                  <span>2</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Fields Of Green</h5>
                  <span className="deg1">J: M Yeni</span>
                  <span className="deg2">T: Glen Kotzen Sanchez</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
            <div className="horse__body">
              <div className="horse__s__left">
                <p>
                  <span>4</span>
                  <span>4</span>
                </p>
                <div className="icon">
                  <i className="icon-jersy"></i>
                </div>
                <div className="borndles">
                  <h5>Be Hopeful</h5>
                  <span className="deg1">J: Craig Bantam</span>
                  <span className="deg2">T: Justin Snaith</span>
                </div>
              </div>
              <span className="horse__sp">Sp</span>
            </div>
          </div>
          <p className="horse__s__footer">View full race (15 Runners)</p>
        </div>
      </Slider>
    </div>
  );
};

export default HorseSlider;
