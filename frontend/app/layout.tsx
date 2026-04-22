import type { Metadata } from "next";
import Bootstrap from "@/components/bootstrap/Bootstrap";
import LeftBetsModal from "@/components/modals/LeftBetsModal";
import LoginModal from "@/components/modals/LoginModal";
import RightBetsModal from "@/components/modals/RightBetsModal";
import SignUpModal from "@/components/modals/SignUpModal";
import { QueryClientProvider } from "@/components/providers/QueryProvider";
import { AuthProvider } from "@/components/providers/AuthProvider";
import { ToastContainer } from "@/components/common";

// fonts
import "../public/vendor/glyphter-font/css/glyphter.css";
import "../public/vendor/webfonts/css/all.min.css";

// slick carousel
import "slick-carousel/slick/slick.css";

//main css
import "../styles/main.scss";

export const metadata: Metadata = {
  title: "Betazo",
  description: "Betazo",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider>
          <AuthProvider>
            <Bootstrap>
              {children}
              <LoginModal />
              <SignUpModal />
              <LeftBetsModal />
              <RightBetsModal />
              <ToastContainer />
            </Bootstrap>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
