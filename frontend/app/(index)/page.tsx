import Header from "@/components/header/Header";
import HomeMain from "@/components/home/HomeMain";
import NavBar from "@/components/navBar/NavBar";

export default function Home() {
  return (
    <>
      {/* Nav Bar */}
      <NavBar />

      {/* Header */}
      <Header />

      {/* Home Main */}
      <HomeMain />
    </>
  );
}
