import NavLink from './Shared/Navbar/NavLink';

const TestNavbar = () => {
    const navData = {
        menu1: { path: "/", title: "Home" },
        menu2: { path: "/product", title: "Product" },
        menu3: { path: "/about", title: "About Us" },
        menu4: { path: "/process", title: "Process" },
        menu5: { path: "/portfolio", title: "Portfolio" },
        menu6: { path: "/news", title: "News" }
    };
    const keys = ['menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6'];
    return (
        <div className="bg-white shadow-sm">
            <div className="mx-auto flex max-w-2xl items-end justify-between">
                <nav className="flex gap-6 pt-6">
                    {
                        keys.map((key, index) => {
                            return(
                                <NavLink
                                key={index}
                                href={navData[key].path}
                              >
                                {navData[key].title}
                              </NavLink>
                            )
                        })
                    }
                </nav>
            </div>
        </div>
    )
}

export default TestNavbar;