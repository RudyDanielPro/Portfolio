import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaGlobe, FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export function ContactMe() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setShowAlert(false);

        emailjs.sendForm(
            'service_pzch4lh',
            'template_m2cy8m2',
            form.current,
            '3KHFIYuUSG3iRVKum'
        )
            .then((result) => {
                console.log(result.text);
                setAlertType('success');
                setAlertMessage('Message sent successfully! I will contact you soon.');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setAlertType('error');
                setAlertMessage('Error sending message. Please try again later.');
            })
            .finally(() => {
                setIsSending(false);
                setShowAlert(true);
                setTimeout(() => {
                    setShowAlert(false);
                }, 5000);
            });
    };

    return (
        <section className="flex flex-col w-full mb-4 md:flex-row md:mb-6 lg:mb-8">
            {showAlert && (
                <div className={`fixed top-5 right-5 z-50 flex items-center p-3 rounded-lg shadow-lg transform transition-all duration-300 ${alertType === 'success' ? 'bg-emerald-500' : 'bg-red-500'} max-w-[90vw] sm:max-w-md`}>
                    {alertType === 'success' ? (
                        <FaCheckCircle className="flex-shrink-0 mr-2 text-xl text-white" />
                    ) : (
                        <FaTimesCircle className="flex-shrink-0 mr-2 text-xl text-white" />
                    )}
                    <span className="text-sm font-medium text-white break-words">{alertMessage}</span>
                    <button
                        onClick={() => setShowAlert(false)}
                        className="flex-shrink-0 ml-3 text-white hover:text-gray-200"
                    >
                        &times;
                    </button>
                </div>
            )}

            <div className="w-full mb-6 md:w-1/2 md:mb-0 md:pr-4">
                <h1 className="mb-4 text-2xl font-bold text-left md:mb-5 md:text-3xl text-emerald-400">Contact Me</h1>

                {/* Versión móvil */}
                <div className="grid grid-cols-1 gap-4 mb-5 sm:grid-cols-2 md:hidden">
                    <div className="text-left">
                        <div className="flex items-center mb-2">
                            <FaPhone className="mr-2 text-lg text-emerald-400 sm:text-xl" />
                            <h3 className="text-base font-medium text-emerald-400 sm:text-lg">Mobile no</h3>
                        </div>
                        <p className="text-sm font-normal text-white ml-7 sm:ml-8 sm:text-base">+33 56498546</p>
                    </div>

                    <div className="text-left">
                        <div className="flex items-center mb-2">
                            <FaEnvelope className="mr-2 text-lg text-emerald-400 sm:text-xl" />
                            <h3 className="text-base font-medium text-emerald-400 sm:text-lg">Email</h3>
                        </div>
                        <p className="text-sm font-normal text-white break-words ml-7 sm:ml-8 sm:text-base">nadydanielcarballo@gmail.com</p>
                    </div>

                    <div className="text-left">
                        <div className="flex items-center mb-2">
                            <FaMapMarkerAlt className="mr-2 text-lg text-emerald-400 sm:text-xl" />
                            <h3 className="text-base font-medium text-emerald-400 sm:text-lg">Location</h3>
                        </div>
                        <p className="text-sm font-normal text-white ml-7 sm:ml-8 sm:text-base">Havana - Cuba</p>
                    </div>

                    <div className="text-left">
                        <div className="flex items-center mb-2">
                            <FaGlobe className="mr-2 text-lg text-emerald-400 sm:text-xl" />
                            <h3 className="text-base font-medium text-emerald-400 sm:text-lg">Website</h3>
                        </div>
                        <p className="text-sm font-normal text-white break-words ml-7 sm:ml-8 sm:text-base">https://v0-portfolio-rho-one-22.vercel.app/</p>
                    </div>
                </div>

                {/* Versión PC */}
                <div className="hidden md:block">
                    <div className="mb-5 text-left">
                        <div className="flex items-center mb-2">
                            <FaPhone className="mr-3 text-xl text-emerald-400" />
                            <h3 className="text-lg font-medium text-emerald-400">Mobile no</h3>
                        </div>
                        <p className="text-base font-normal text-white ml-9">+53 56498546</p>
                    </div>

                    <div className="mb-5 text-left">
                        <div className="flex items-center mb-2">
                            <FaEnvelope className="mr-3 text-xl text-emerald-400" />
                            <h3 className="text-lg font-medium text-emerald-400">Email</h3>
                        </div>
                        <p className="text-base font-normal text-white break-words ml-9">rudydanielcarballo@gmail.com</p>
                    </div>

                    <div className="mb-5 text-left">
                        <div className="flex items-center mb-2">
                            <FaMapMarkerAlt className="mr-3 text-xl text-emerald-400" />
                            <h3 className="text-lg font-medium text-emerald-400">Location</h3>
                        </div>
                        <p className="text-base font-normal text-white ml-9">Havana - Cuba</p>
                    </div>

                    <div className="text-left">
                        <div className="flex items-center mb-2">
                            <FaGlobe className="mr-3 text-xl text-emerald-400" />
                            <h3 className="text-lg font-medium text-emerald-400">Website</h3>
                        </div>
                        <p className="text-base font-normal text-white break-words ml-9">https://portfolio-n71a.ornender.com</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <h2 className="mb-4 text-xl font-bold text-left md:mb-5 md:text-2xl text-emerald-400">Send me a message</h2>

                <form ref={form} onSubmit={sendEmail} className="w-full">
                    <div className="flex flex-col gap-4 mb-4 sm:flex-row sm:gap-4">
                        <div className="w-full sm:w-1/2">
                            <label className="block mb-1 text-sm text-left text-white md:mb-2 md:text-base">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                className="w-full p-2 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg md:p-2.5 focus:outline-none focus:border-emerald-400"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="w-full sm:w-1/2">
                            <label className="block mb-1 text-sm text-left text-white md:mb-2 md:text-base">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                className="w-full p-2 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg md:p-2.5 focus:outline-none focus:border-emerald-400"
                                placeholder="Your email"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-sm text-left text-white md:mb-2 md:text-base">Message</label>
                        <textarea
                            rows="5"
                            name="message"
                            className="w-full p-2 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg md:p-2.5 focus:outline-none focus:border-emerald-400"
                            placeholder="Type your message here"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSending}
                        className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-gray-800 transition-colors rounded-lg md:px-5 md:py-2.5 md:text-sm bg-emerald-400 hover:bg-emerald-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
                    >
                        {isSending ? (
                            <>
                                <svg className="w-4 h-4 mr-1 -ml-1 text-gray-800 animate-spin md:w-5 md:h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            <>
                                <FaPaperPlane className="text-sm md:text-base" />
                                Send
                            </>
                        )}
                    </button>
                </form>

                <div className="flex justify-start gap-3 mt-5 md:gap-4 md:mt-6">
                    <Link to='https://www.facebook.com/rudydaniel.carballo' className="text-gray-400 transition-colors hover:text-emerald-400">
                        <FaFacebook size={18} className="md:text-xl" />
                    </Link>
                    <Link to='https://www.instagram.com/rudydanielcarballo?igsh=dW43eWc1aXRhOWZ1' className="text-gray-400 transition-colors hover:text-emerald-400">
                        <FaInstagram size={18} className="md:text-xl" />
                    </Link>
                    <Link to='https://www.linkedin.com/in/rudy-carballo-357239315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="text-gray-400 transition-colors hover:text-emerald-400">
                        <FaLinkedin size={18} className="md:text-xl" />
                    </Link>
                    <Link to='https://t.me/Rudydanielcarballo' className="text-gray-400 transition-colors hover:text-emerald-400">
                        <FaTelegram size={18} className="md:text-xl" />
                    </Link>
                </div>
            </div>
        </section>
    );
}