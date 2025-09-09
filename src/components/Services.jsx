import { 
  FaCode, 
  FaPalette, 
  FaLaptopCode, 
  FaPaintBrush
} from "react-icons/fa";

export function Services() {
    return(
        <section className="flex flex-col items-start w-full">
            <h1 className="w-full mb-8 text-2xl font-bold md:text-3xl text-emerald-400">Services</h1>
            
            <div className="grid w-full h-full grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col p-6 transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group min-h-[200px]">
                    <div className="flex items-center gap-4 mb-4">
                        <FaCode className="w-6 h-6 text-emerald-400 group-hover:text-white" />
                        <h2 className="text-lg font-bold md:text-xl text-emerald-400 group-hover:text-white">
                            Web Development
                        </h2>
                    </div>
                    <p className="text-gray-300 md:text-base group-hover:text-white">
                        Custom website development with modern technologies like ReactJS and Tailwind CSS.
                    </p>
                </div>
                
                <div className="flex flex-col p-6 transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group min-h-[200px]">
                    <div className="flex items-center gap-4 mb-4">
                        <FaPalette className="w-6 h-6 text-emerald-400 group-hover:text-white" />
                        <h2 className="text-lg font-bold md:text-xl text-emerald-400 group-hover:text-white">
                            Web Design
                        </h2>
                    </div>
                    <p className="text-gray-300 md:text-base group-hover:text-white">
                        Beautiful, intuitive UI/UX design that enhances user experience.
                    </p>
                </div>
                
                <div className="flex flex-col p-6 transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group min-h-[200px]">
                    <div className="flex items-center gap-4 mb-4">
                        <FaLaptopCode className="w-6 h-6 text-emerald-400 group-hover:text-white" />
                        <h2 className="text-lg font-bold md:text-xl text-emerald-400 group-hover:text-white">
                            Software Development
                        </h2>
                    </div>
                    <p className="text-gray-300 md:text-base group-hover:text-white">
                        Custom software solutions for your business needs.
                    </p>
                </div>
                
                <div className="flex flex-col p-6 transition-all duration-300 bg-slate-950 hover:bg-emerald-900 rounded-xl group min-h-[200px]">
                    <div className="flex items-center gap-4 mb-4">
                        <FaPaintBrush className="w-6 h-6 text-emerald-400 group-hover:text-white" />
                        <h2 className="text-lg font-bold md:text-xl text-emerald-400 group-hover:text-white">
                            Graphic Design
                        </h2>
                    </div>
                    <p className="text-gray-300 md:text-base group-hover:text-white">
                        Professional branding, logos, and marketing materials.
                    </p>
                </div>
            </div>
        </section>
    );
}