import React from 'react'
import Link from 'next/link'
import getProducts from '../../../../lib/getProducts'
import ProductCard from './ProductCard' 
import { MdArrowForward } from "react-icons/md";

const TopProducts = async () => {
    const searchParams = { limit: 8, page: 1, viewOnHomepage: "true" };
    const res = await getProducts(searchParams);
    const products = res?.data?.data || [];

    const topProducts = products;
    const sectionTitle = "Our Top Selling Machinery";
    const sectionDesc = "Discover our most popular automated solutions, trusted by manufacturers worldwide for their precision and speed.";
    const viewAllText = "View All Products";
    return (
        <section className="py-8 md:py-16 bg-white">
            <div className="main_container">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-4 md:mb-12 gap-4">
                    <div className="w-full md:max-w-2xl">
                        <span className="text-[#064a9b] font-bold tracking-wider uppercase text-sm mb-2 block">
                            {"Best Sellers"}
                        </span>
                        <h2 className="text-2xl md:text-4xl font-bold text-[#252B42] mb-3">
                            {sectionTitle}
                        </h2>
                        {/* <p className="text-gray-500">
                            {sectionDesc}
                        </p> */}
                    </div>

                    <Link href="/product" className="hidden md:flex items-center border border-secondary p-2 md:px-5 hover:text-white hover:bg-secondary gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                        {viewAllText} <MdArrowForward />
                    </Link>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                    {topProducts.map((item) => (
                        <ProductCard key={item._id} product={item} />
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-5 md:hidden text-center">
                    <Link href="/product">
                        <button className="w-full py-2 border border-[#064a9b] text-[#064a9b] text-xs rounded font-semibold hover:bg-[#064a9b] hover:text-white transition-colors">
                            {viewAllText}
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default TopProducts