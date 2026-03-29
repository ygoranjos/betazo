import type { Metadata } from "next";
import Bootstrap from "@/components/bootstrap/Bootstrap";
import LeftBetsModal from "@/components/modals/LeftBetsModal";
import LoginModal from "@/components/modals/LoginModal";
import RightBetsModal from "@/components/modals/RightBetsModal";
import SignUpModal from "@/components/modals/SignUpModal";

// fonts
import "../public/vendor/glyphter-font/css/glyphter.css";
import "../public/vendor/webfonts/css/all.min.css";

// slick carousel
import "slick-carousel/slick/slick.css";

//main css
import "../styles/main.scss";

export const metadata: Metadata = {
  title: "Sports Betting React Nextjs Template",
  description: "Sports Betting React Nextjs Template",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Bootstrap>
          {children}
          <LoginModal />
          <SignUpModal />
          <LeftBetsModal />
          <RightBetsModal />
        </Bootstrap>
      </body>
    </html>
  );
}
