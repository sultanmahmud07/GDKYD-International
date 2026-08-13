"use client";
import { useState } from "react";
import Image from "next/image";
import notFoundImg from "../../../../../public/assets/services/product-not-found.png";
import ServiceCard from "./ServiceCard";

const AllServices = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);

  // Calculate total pages
  const totalPages = Math.ceil((products?.length || 0) / productsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
        {products?.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
              {currentProducts.map((product, i) => (
                <ServiceCard key={i} product={product}></ServiceCard>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center gap-3 my-5">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 border rounded-full  hover:border-blue-500 ${
                    currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-5 items-center py-5">
            <h3 className="text-xl md:text-2xl font-bold text-gray-500 text-center">
              Product Not Found In This Category!
            </h3>
            <Image
              src={notFoundImg}
              alt="not-found-image"
              width={200}
              className="w-16 md:w-24"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllServices;
