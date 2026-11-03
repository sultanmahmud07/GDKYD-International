import NavLink from "./NavLink";

const SubMenuBar = ({ setNavToggle, allCategories }) => {
  return (
    <div className="sub_nav_manu main_container rounded-b-md py-6 px-6 md:px-8 z-10 shadow-xl absolute top-full left-0 right-0 w-full bg-secondary text-white whitespace-normal normal-case">
      <div>
        <div className="relative">
          <span className="absolute z-50 top-[-30px] left-1/2 rotate-45 bg-[#465267] h-5 w-5"></span>
        </div>
        <div className="grid grid-cols-4 gap-6 items-start">
          {allCategories?.map((service, i) => {
            return (
              <div key={service?._id || i} className="w-full min-w-0 flex flex-col p-1">
                <NavLink
                  onClick={() => setNavToggle(false)}
                  href={`/category/${service?.slug || service?._id}`}
                  className="text-xs font-bold uppercase tracking-wider block pb-2.5 mb-2 border-b border-white/20 text-white hover:text-[#50d6f7] transition-colors break-words"
                >
                  {service?.name_en}
                </NavLink>
                <ul className="flex flex-col gap-1 py-1">
                  {service?.products?.map((product, j) => {
                    return (
                      <li
                        key={product?._id || j}
                        className="w-full rounded hover:bg-[#50d6f730] transition-colors"
                      >
                        <NavLink
                          onClick={() => setNavToggle(false)}
                          href={`/product/${product?.slug || product?._id}`}
                          className="text-xs block px-3 py-1.5 text-white/90 hover:text-white leading-relaxed break-words normal-case"
                        >
                          {product?.title_en}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubMenuBar;
