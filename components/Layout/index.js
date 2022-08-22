import Navbar from "../Navbar";

const Layout = ({ children, router }) => {
  return (
    <>
      <Navbar path={router.asPath} />
      {children}
    </>
  );
};

export default Layout;
