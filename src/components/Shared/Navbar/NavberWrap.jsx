import Navbar from "./Navbar";
import getAllCategories from "../../../lib/getAllCategories";

const NavbarWrap = async () => {
        const allCategories = await getAllCategories()
          return <Navbar allCategories={allCategories?.data}></Navbar>;
};

export default NavbarWrap;
