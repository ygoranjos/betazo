import Footer from "@/components/footer/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default DashboardLayout;
