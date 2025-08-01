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
            <section className="flex flex-col items-start w-full min-h-screen bg-gray-800 pl-4 md:pl-[16.666%] pr-4 md:pr-[5%] pt-24 md:pt-[4%] ml-0 md:ml-10">
                <h1 className="mb-6 text-2xl font-bold md:mb-8 md:text-3xl text-emerald-400">Services</h1>
                
                <div className="flex flex-col flex-wrap w-full gap-4 md:flex-row">
                    <div className="flex flex-col items-center p-4 md:p-6 transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group w-full md:w-[calc(50%-0.5rem)]">
                        <FaCode className="w-8 h-8 mb-3 md:w-10 md:h-10 text-emerald-400 group-hover:text-white" />
                        <h2 className="mb-2 text-lg font-bold md:text-xl text-emerald-400 group-hover:text-white">Web Development</h2>
                        <p className="text-sm text-center text-gray-300 md:text-base group-hover:text-white">
                            Custom website development with modern technologies like ReactJS and Tailwind CSS.
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 md:p-6 transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group w-full md:w-[calc(50%-0.5rem)]">
                        <FaPalette className="w-8 h-8 mb-3 md:w-10 md:h-10 text-emerald-400 group-hover:text-white" />
                        <h2 className="mb-2 text-lg font-bold md:text-xl text-emerald-400 group-hover:text-white">Web Design</h2>
                        <p className="text-sm text-center text-gray-300 md:text-base group-hover:text-white">
                            Beautiful, intuitive UI/UX design that enhances user experience.
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 md:p-6 transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group w-full md:w-[calc(50%-0.5rem)]">
                        <FaLaptopCode className="w-8 h-8 mb-3 md:w-10 md:h-10 text-emerald-400 group-hover:text-white" />
                        <h2 className="mb-2 text-lg font-bold md:text-xl text-emerald-400 group-hover:text-white">Software Development</h2>
                        <p className="text-sm text-center text-gray-300 md:text-base group-hover:text-white">
                            Custom software solutions for your business needs.
                        </p>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 md:p-6 transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group w-full md:w-[calc(50%-0.5rem)]">
                        <FaPaintBrush className="w-8 h-8 mb-3 md:w-10 md:h-10 text-emerald-400 group-hover:text-white" />
                        <h2 className="mb-2 text-lg font-bold md:text-xl text-emerald-400 group-hover:text-white">Graphic Design</h2>
                        <p className="text-sm text-center text-gray-300 md:text-base group-hover:text-white">
                            Professional branding, logos, and marketing materials.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}