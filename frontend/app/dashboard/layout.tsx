import Footer from "@/components/footer/Footer";
import type { LayoutProps } from "@/types";

const DashboardLayout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default DashboardLayout;
