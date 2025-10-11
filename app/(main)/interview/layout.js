import { Suspense } from "react";
import BarLoader from "./../../../node_modules/react-spinners/esm/BarLoader";

const Layout = ({ children }) => {
  return (
    <div className="px-5">
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
