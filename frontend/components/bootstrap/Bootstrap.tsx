"use client";

import { useEffect } from "react";

const Bootstrap = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <>{children}</>;
};

export default Bootstrap;
