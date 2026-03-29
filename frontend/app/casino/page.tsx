import CasinoMain from "@/components/casino/CasinoMain";
import Footer from "@/components/footer/Footer";
import SubHeader from "@/components/header/SubHeader";
import NavBar from "@/components/navBar/NavBar";

export default function Casino() {
  return (
    <>
      {/* Nav Bar */}
      <NavBar />

      {/* Sub Header */}
      <SubHeader active="all-games" />

      {/* Casino Main */}
      <CasinoMain />

      {/* Footer */}
      <Footer />
    </>
  );
}
