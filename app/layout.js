import Bootstrap from "@/components/bootstrap/Bootstrap";
import LeftBetsModal from "@/components/modals/LeftBetsModal";
import LoginModal from "@/components/modals/LoginModal";
import RightBetsModal from "@/components/modals/RightBetsModal";

// fonts
import "../public/vendor/glyphter-font/css/glyphter.css";
import "../public/vendor/webfonts/css/all.min.css";

// modal video
import "node_modules/react-modal-video/scss/modal-video.scss";

//slick carousel
import "slick-carousel/slick/slick.css";

//main css
import SignUpModal from "@/components/modals/SignUpModal";
import "../styles/main.scss";

export const metadata = {
  title: "Sports Betting React Nextjs Template",
  description: "Sports Betting React Nextjs Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Bootstrap>
          {children}

          {/* Login Modal */}
          <LoginModal />
          <SignUpModal />

          {/* Left Bets Modal */}
          <LeftBetsModal />

          {/* Right Bets Modal */}
          <RightBetsModal />
        </Bootstrap>
      </body>
    </html>
  );
}
