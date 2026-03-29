import Footer from "@/components/footer/Footer";
import SubHeader from "@/components/header/SubHeader";
import LivecasinoMain from "@/components/livecasino/LivecasinoMain";
import NavBar from "@/components/navBar/NavBar";

export default function Livecasino() {
  return (
    <>
      {/* Nav Bar */}
      <NavBar />

      {/* Sub Header */}
      <SubHeader active="live-games" />

      {/* Livecasino Main */}
      <LivecasinoMain />

      {/* Footer */}
      <Footer />
    </>
  );
}
