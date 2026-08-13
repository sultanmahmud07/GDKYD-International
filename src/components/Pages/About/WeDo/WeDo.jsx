"use client";
import { 
  MdOutlineKeyboardDoubleArrowRight, 
  MdBusiness, 
  MdEngineering, 
  MdEco, 
  MdHandshake, 
  MdTrendingUp, 
  MdGavel, 
  MdDiamond 
} from "react-icons/md";

const WeDo = () => {
  
  return (
    <section className="py-10 md:py-20 bg-[#F9FAFB]">
      <div className="main_container">
        
        {/* --- ROW 1: Introduction (Company & What We Do) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Company */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-50 text-[#064a9b] rounded-lg">
                <MdBusiness size={24} />
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-[#252B42]">
                {"Company Culture"}
              </h4>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {"Creativity, collaboration, and continuous learning are the foundation of our company. We invest in our team’s growth, fostering an inclusive culture that encourages innovation and the sharing of ideas."}
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-primary/65 p-6 md:p-8 rounded-2xl shadow-sm text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-white/10 rounded-lg">
                <MdEngineering size={24} />
              </div>
              <h4 className="text-xl md:text-2xl font-bold">
                {"What We Do"}
              </h4>
            </div>
            <p className="text-blue-50 leading-relaxed">
              {"Since 1999, KYD has been a leader in manufacturing nonwoven fabric machinery. We specialize in creating customizable, high-performance machines that integrate ultrasonic and mechanical technologies, offering tailored solutions that meet the unique needs of our customers across the globe."}
            </p>
          </div>
        </div>

        {/* --- ROW 2: Core Values (Split into 4 cards) --- */}
        <div className="mb-6">
           <h4 className="text-xl md:text-2xl font-bold text-[#252B42] mb-4 flex items-center gap-2">
              <MdDiamond className="text-[#064a9b]" />
              {"Core Values"}
           </h4>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
                   <div className="mb-2 text-secondary">
                      <MdOutlineKeyboardDoubleArrowRight size={20} />
                   </div>
                   <p className="font-semibold text-gray-700">
                      {t(`CoreValues.list.para${num}`)}
                   </p>
                </div>
              ))}
           </div>
        </div>

        {/* --- ROW 3: Information Grid (Sustainability, Partners, Condition, Future) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
          
          {/* Sustainability */}
          <InfoCard 
            icon={<MdEco />} 
            title={"Sustainability Practices"} 
            desc={"We’re committed to reducing our environmental impact by adopting energy-efficient technologies and minimizing waste. Our efforts extend beyond our machines, as we continuously seek ways to make our operations more eco-friendly"} 
            color="text-green-600" 
            bgColor="bg-green-50"
          />

          {/* Our Partner */}
          <InfoCard 
            icon={<MdHandshake />} 
            title={"Our Partners"} 
            desc={"At KYD, we’re proud to work with some of the best in the industry, including Honeywell, WEGO, DJI, and Winner Medical. These partnerships help us provide innovative and reliable solutions that support our clients’ success worldwide."} 
            color="text-indigo-600" 
            bgColor="bg-indigo-50"
          />

          {/* Future */}
          <InfoCard 
            icon={<MdTrendingUp />} 
            title={"Future Vision"} 
            desc={"Looking ahead, KYD aims to expand our global reach and introduce new innovations that will keep our customers ahead in a competitive market. Our goal is to continue leading the nonwoven machinery industry while upholding our legacy of excellence."} 
            color="text-purple-600" 
            bgColor="bg-purple-50"
          />

           {/* Condition */}
           <InfoCard 
            icon={<MdGavel />} 
            title={"Certifications and Accreditations"} 
            desc={"Our quality commitment is recognized globally with certifications like ISO 9001 and CE Marking, along with industry-specific awards for innovation and performance."} 
            color="text-orange-600" 
            bgColor="bg-orange-50"
          />
        </div>

        {/* --- ROW 4: Services (Full Width Highlight) --- */}
        <div className="bg-white rounded-2xl p-6 md:p-10 border-t-4 border-[#064a9b] shadow-sm">
          <h4 className="text-2xl font-bold text-[#252B42] mb-4">
            {"Our Services"}
          </h4>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
                <p className="text-gray-600 mb-4 leading-relaxed">
                    {"We offer full support, from pre-sales consultation to after-sales service:"}
                </p>
                <p className="text-gray-600 leading-relaxed">
                    {"At KYD, we don’t just deliver machines—we build lasting partnerships with our customers through innovation, quality, and exceptional support."}
                </p>
            </div>
            
            <div className="lg:w-1/2 bg-gray-50 rounded-xl p-6">
                <h5 className="font-bold text-gray-800 mb-3 uppercase text-sm tracking-wider">Key Services</h5>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <span className="mt-1 text-[#064a9b]"><MdOutlineKeyboardDoubleArrowRight /></span>
                        <span className="text-gray-700 font-medium">{"Pre-Sales Support: Expert consultations, custom design drawings, and tailored production services."}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-1 text-[#064a9b]"><MdOutlineKeyboardDoubleArrowRight /></span>
                        <span className="text-gray-700 font-medium">{"After-Sales Support: One-year warranty, free training, comprehensive manuals, remote support, and on-site services."}</span>
                    </li>
                </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// --- Helper Component for the Info Grid ---
const InfoCard = ({ icon, title, desc, color, bgColor }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg ${bgColor} ${color} text-xl`}>
                    {icon}
                </div>
                <h4 className="text-lg font-bold text-[#252B42]">{title}</h4>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {desc}
            </p>
        </div>
    );
};

export default WeDo;