"use client"
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdSecurity, MdArrowForward } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import NumberWithCountry from "../../../../Shared/NumberWithCountry/NumberWithCountry";
import { BASEURL } from "../../../../../../Constant";

const ProductDetails = ({ configurations, product, productInfo, aboutProduct }) => {
  const [activeTab, setActiveTab] = useState("introduction");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    businessName: "",
    notes: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  // Check if configurations exist
  const configurationsArray = configurations
    ? Object.entries(configurations).map(([key, value]) => ({
      [key]: value,
    }))
    : null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const postData = {
      ...formData,
      productRef: product?._id,
    };

    try {
      const response = await axios.post(`${BASEURL}/query/create`, postData);

      // Trigger GA generate_lead event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: `Inline Quote: ${product?.title_en || 'General'}`,
          value: 1.0
        });
      }

      toast.success('Your quote request has been submitted successfully!');
      router.push('/success');
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || 'Failed to submit quote request!');
    } finally {
      setSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: `WhatsApp Quote: ${product?.title_en || 'General'}`,
        value: 1.0
      });
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?phone=8613902617335&text=${encodeURIComponent(
    `Hello, I am interested in your "${product?.title_en}". Could you please provide a quote?`
  )}`;

  return (
    <div className="py-3 md:py-5">
      {/* Tabs */}
      <div className="flex gap-2 border-b mb-2 md:mb-6">
        <button
          onClick={() => setActiveTab("introduction")}
          className={`px-4 py-2 font-semibold rounded-t-md text-sm cursor-pointer ${activeTab === "introduction"
            ? "bg-[#064a9b] text-white"
            : "bg-[#E4E5DF] text-[#333333]"
            }`}
        >
          Product Introduction
        </button>
        <button
          onClick={() => setActiveTab("related")}
          className={`px-4 py-2 font-semibold rounded-t-md text-sm cursor-pointer ${activeTab === "related"
            ? "bg-[#064a9b] text-white"
            : "bg-[#E4E5DF] text-[#333333]"
            }`}
        >
          Related Products
        </button>
      </div>

      {activeTab === "introduction" && (
        <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
          {/* Left Section - Specifications Table */}
          <div className="w-full lg:w-3/5">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 md:mb-4">
              {productInfo}: <span className="font-bold text-gray-900">{product?.title_en}</span>
            </h3>

            {configurationsArray ? (
              <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm mb-6 bg-white">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left font-bold text-gray-700">Specification</th>
                      <th scope="col" className="px-4 py-3 text-left font-bold text-gray-700">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {configurationsArray.map((config, index) => {
                      const key = Object.keys(config)[0];
                      const val = Object.values(config)[0];
                      return (
                        <tr key={index} className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-semibold text-gray-700 capitalize">{key}</td>
                          <td className="px-4 py-3 text-gray-600">{val}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-red-600 mb-6">Configurations not found.</p>
            )}

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-700">{aboutProduct}:</h4>
              <p className="text-gray-600 mt-2 leading-relaxed">
                {product?.subTitle_en}
              </p>
            </div>
          </div>

          {/* Right Section - Conversion Funnel (WhatsApp + Quote Form) */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6">
            {/* WhatsApp Quote Box */}
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-200 p-6 flex flex-col gap-4">
              <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <FaWhatsapp className="text-[#25D366] text-xl" />
                <span>Instant B2B Quote</span>
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Connect directly with our sales team via WhatsApp for instant machinery quotes and technical specs.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd59] text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <FaWhatsapp size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Inline Request Quote Form */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.02)] p-6">
              <h4 className="text-lg font-bold text-[#252B42] mb-1">Request a Quote</h4>
              <p className="text-xs text-gray-500 mb-4">Complete this form and our engineers will get back to you with pricing details.</p>

              <form onSubmit={handleFormSubmit} className="space-y-3 text-start">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full text-xs rounded-lg border border-gray-200 bg-white p-2.5 outline-none focus:border-[#064a9b] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Business Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter business email"
                    className="w-full text-xs rounded-lg border border-gray-200 bg-white p-2.5 outline-none focus:border-[#064a9b] transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
                  <NumberWithCountry
                    value={formData.contact || undefined}
                    onChange={(val) => setFormData({ ...formData, contact: val || "" })}
                    className="w-full text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Company <span className="text-gray-400 font-normal">(optional)</span></label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    placeholder="Company name"
                    className="w-full text-xs rounded-lg border border-gray-200 bg-white p-2.5 outline-none focus:border-[#064a9b] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Message / Requirements <span className="text-gray-400 font-normal">(optional)</span></label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Specify capacity, speed, or other custom requirements..."
                    rows={3}
                    className="w-full text-xs rounded-lg border border-gray-200 bg-white p-2.5 outline-none focus:border-[#064a9b] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#252B42] hover:bg-[#064a9b] disabled:bg-gray-400 text-white py-3 px-4 rounded-xl font-bold text-xs shadow-md transition-all duration-300 mt-2"
                >
                  {submitting ? "Submitting..." : "Send Inquiry"}
                  <MdArrowForward />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {activeTab === "related" && (
        <div className="">
          <h5 className="capitalize font-semibold text-xl md:text-2xl text-black ">here is some Related products:</h5>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
