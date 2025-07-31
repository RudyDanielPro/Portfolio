import { Nav_Var } from "../components/Nav_Var";
import { 
  FaCode, 
  FaPalette, 
  FaLaptopCode, 
  FaPaintBrush,
  FaMobileAlt,
  FaServer
} from "react-icons/fa";

export function Services() {
    return (
        <>
            <Nav_Var />
            <section className="flex flex-col items-start w-full h-screen bg-gray-800 pl-[16.666%] pr-[5%] pt-[4%] ml-10">
                <h1 className="mb-8 text-3xl font-bold text-emerald-400 md:text-5xl"> Services</h1>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Service 1 */}
                    <div className="flex flex-col items-center p-8 transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group">
                        <FaCode className="w-12 h-12 mb-4 text-emerald-400 group-hover:text-white" />
                        <h2 className="mb-2 text-xl font-bold text-emerald-400 group-hover:text-white">Web Development</h2>
                        <p className="text-center text-gray-300 group-hover:text-white">
                            Custom website development with modern technologies like ReactJS, and Tailwind CSS. 
                            We build fast, responsive, and SEO-friendly websites tailored to your needs.
                        </p>
                    </div>
                    
                    {/* Service 2 */}
                    <div className="flex flex-col items-center p-8 transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group">
                        <FaPalette className="w-12 h-12 mb-4 text-emerald-400 group-hover:text-white" />
                        <h2 className="mb-2 text-xl font-bold text-emerald-400 group-hover:text-white">Web Design</h2>
                        <p className="text-center text-gray-300 group-hover:text-white">
                            Beautiful, intuitive UI/UX design that enhances user experience. 
                            We focus on clean aesthetics, usability, and brand consistency.
                        </p>
                    </div>
                    
                    {/* Service 3 */}
                    <div className="flex flex-col items-center p-8 transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group">
                        <FaLaptopCode className="w-12 h-12 mb-4 text-emerald-400 group-hover:text-white" />
                        <h2 className="mb-2 text-xl font-bold text-emerald-400 group-hover:text-white">Software Development</h2>
                        <p className="text-center text-gray-300 group-hover:text-white">
                            Custom software solutions for your business needs. 
                            From desktop applications to complex enterprise systems.
                        </p>
                    </div>
                    
                    {/* Service 4 */}
                    <div className="flex flex-col items-center p-8 transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group">
                        <FaPaintBrush className="w-12 h-12 mb-4 text-emerald-400 group-hover:text-white" />
                        <h2 className="mb-2 text-xl font-bold text-emerald-400 group-hover:text-white">Graphic Design</h2>
                        <p className="text-center text-gray-300 group-hover:text-white">
                            Professional branding, logos, and marketing materials. 
                            We create visual identities that make your brand stand out.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}