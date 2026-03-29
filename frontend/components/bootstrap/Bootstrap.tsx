"use client";

import { useEffect } from "react";

const Bootstrap = ({ children }) => {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <>{children}</>;
};

export default Bootstrap;
