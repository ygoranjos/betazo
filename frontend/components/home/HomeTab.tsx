import FooterHome from "../footer/FooterHome";
import MatchFixingSlider from "../sliders/MatchFixingSlider";
import LiveHeightlight from "./LiveHeightlight";
import NextToGo from "./NextToGo";
import Trending from "./Trending";

const HomeTab = () => {
  return (
    <div
      className="tab-pane text-white fade show active"
      id="mainTab"
      role="tabpanel"
      tabIndex="0"
    >
      {/* Match Fixing Slider */}
      <MatchFixingSlider />
      {/* Match Fixing Slider */}

      {/* Main body */}
      <div className="main__body__wrap left__right__space">
        {/* Live__heightlight Here */}
        <div className="live__heightlight mb__30">
          <div className="section__title">
            <h4>Live Highlights</h4>
          </div>

          {/* Live Height light */}
          <LiveHeightlight />
        </div>
        {/* Live__heightlight End */}

        {/* Next-To-Go Here */}
        <div className="live__heightlight mb__30">
          <div className="section__title">
            <h4>Next To Go</h4>
          </div>

          {/* Next To Go */}
          <NextToGo />
        </div>
        {/* Next-To-Go End */}

        {/* Trending section Here */}
        <div className="live__heightlight trending__now">
          <div className="section__title">
            <h4>Trending Now</h4>
          </div>

          {/* Trending */}
          <Trending />
        </div>
        {/* Trending section End */}

        {/* Footer Content Here */}
        <div className="footer__content__section pt-60 pb-60">
          <div className="footer__content__items">
            <h5>Sports Betting at Sportingbet</h5>
            <p>
              Nulla facilisis scelerisque leo, nec accumsan metus. Vestibulum
              molestie augue vel erat molestie accumsan. In placerat dolor ut
              leo porttitor facilisis in a ante. Quisque vitae nibh arcu. Nam
              vitae cursus purus. Suspendisse sit amet auctor massa. Nulla ac
              urna in erat molestie maximus. Aliquam a velit vitae ex vehicula
              suscipit non in enim. Phasellus iaculis libero non dui consequat,
              vitae vulputate ipsum posuere. Praesent sagittis ipsum venenatis
              pharetra eleifend. Maecenas commodo mauris vitae leo faucibus
              fermentum at quis arcu. Nunc malesuada purus ex, vitae posuere
              turpis pellentesque eget. Curabitur rutrum a tellus et suscipit.
              Phasellus rhoncus dui et enim aliquet, et tincidunt mi laoreet.
              Nulla sagittis nibh purus, quis commodo nulla molestie nec. Donec
              et purus accumsan, sodales nunc at, pretium orci.
            </p>
          </div>
          <div className="footer__content__items">
            <h5>Bet online at Sportingbet</h5>
            <p>
              Nulla facilisis scelerisque leo, nec accumsan metus. Vestibulum
              molestie augue vel erat molestie accumsan. In placerat dolor ut
              leo porttitor facilisis in a ante. Quisque vitae nibh arcu. Nam
              vitae cursus purus. Suspendisse sit amet auctor massa. Nulla ac
              urna in erat molestie maximus. Aliquam a velit vitae ex vehicula
              suscipit non in enim. Phasellus iaculis libero non dui consequat,
              vitae vulputate ipsum posuere. Praesent sagittis ipsum venenatis
              pharetra eleifend. Maecenas commodo mauris vitae leo faucibus
              fermentum at quis arcu. Nunc malesuada purus ex, vitae posuere
              turpis pellentesque eget. Curabitur rutrum a tellus et suscipit.
              Phasellus rhoncus dui et enim aliquet, et tincidunt mi laoreet.
              Nulla sagittis nibh purus, quis commodo nulla molestie nec. Donec
              et purus accumsan, sodales nunc at, pretium orci.
            </p>
          </div>
          <div className="footer__content__items">
            <h5>Bet on Football</h5>
            <p>
              Nulla facilisis scelerisque leo, nec accumsan metus. Vestibulum
              molestie augue vel erat molestie accumsan. In placerat dolor ut
              leo porttitor facilisis in a ante. Quisque vitae nibh arcu. Nam
              vitae cursus purus. Suspendisse sit amet auctor massa. Nulla ac
              urna in erat molestie maximus. Aliquam a velit vitae ex vehicula
              suscipit non in enim. Phasellus iaculis libero non dui consequat,
              vitae vulputate ipsum posuere. Praesent sagittis ipsum venenatis
              pharetra eleifend. Maecenas commodo mauris vitae leo faucibus
              fermentum at quis arcu. Nunc malesuada purus ex, vitae posuere
              turpis pellentesque eget. Curabitur rutrum a tellus et suscipit.
              Phasellus rhoncus dui et enim aliquet, et tincidunt mi laoreet.
              Nulla sagittis nibh purus, quis commodo nulla molestie nec. Donec
              et purus accumsan, sodales nunc at, pretium orci.
            </p>
          </div>
        </div>
        {/* Footer Content End */}
      </div>
      {/* Main body */}

      {/* Footer Start */}
      <FooterHome />
      {/* Footer End */}
    </div>
  );
};

export default HomeTab;
