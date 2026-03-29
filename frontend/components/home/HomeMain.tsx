import Betslip from "../common/Betslip";
import FooterMobile from "../footer/FooterMobile";
import GlobalMain from "./GlobalMain";

const HomeMain = () => {
  return (
    <>
      <section className="main__body__area">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xxl-10 col-xl-9 col-lg-9">
              <div className="left__site__section">
                <div className="tab-content" id="myTabContentmain">
                  {/* Global Main Body */}
                  <GlobalMain />
                  {/* Global Main Body */}
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-3">
              {/* Right Side Bar */}
              <Betslip />
            </div>
          </div>
        </div>
        {/* footer Bottom Menu */}
        <FooterMobile />
        {/* footer Bottom Menu */}
      </section>
    </>
  );
};

export default HomeMain;
