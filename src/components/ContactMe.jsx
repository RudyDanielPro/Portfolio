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
        <section className="flex flex-col md:flex-row items-start w-full min-h-screen bg-gray-800 pl-4 md:pl-[16.666%] pr-4 md:pr-[5%] pt-24 md:pt-[2%] ml-0 md:ml-10 relative">
            {showAlert && (
                <div className={`fixed top-5 right-5 z-50 flex items-center p-4 rounded-lg shadow-lg transform transition-all duration-300 ${alertType === 'success' ? 'bg-emerald-500' : 'bg-red-500'}`}>
                    {alertType === 'success' ? (
                        <FaCheckCircle className="mr-3 text-2xl text-white" />
                    ) : (
                        <FaTimesCircle className="mr-3 text-2xl text-white" />
                    )}
                    <span className="font-medium text-white">{alertMessage}</span>
                    <button 
                        onClick={() => setShowAlert(false)}
                        className="ml-4 text-white hover:text-gray-200"
                    >
                        &times;
                    </button>
                </div>
            )}

            <div className="w-full h-auto gap-5 mb-8 md:w-1/2 md:mb-0">
                <h1 className="mb-6 text-2xl font-bold text-center md:mb-8 md:text-3xl text-emerald-400">Contact Me</h1>
                
                <div className="mb-6 text-center md:mb-10">
                    <div className="flex justify-center mb-2 md:mb-3">
                        <FaPhone className="text-2xl md:text-3xl text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-medium md:text-2xl text-emerald-400">Mobile no</h3>
                    <p className="mt-1 text-lg font-normal text-white md:mt-2 md:text-2xl">+53 56498546</p>
                </div>

                <div className="mb-6 text-center md:mb-10">
                    <div className="flex justify-center mb-2 md:mb-3">
                        <FaMapMarkerAlt className="text-2xl md:text-3xl text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-medium md:text-2xl text-emerald-400">Location</h3>
                    <p className="mt-1 text-lg font-normal text-white md:mt-2 md:text-2xl">Havana - Cuba</p>
                </div>

                <div className="mb-6 text-center md:mb-10">
                    <div className="flex justify-center mb-2 md:mb-3">
                        <FaEnvelope className="text-2xl md:text-3xl text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-medium md:text-2xl text-emerald-400">Email</h3>
                    <p className="mt-1 text-lg font-normal text-white md:mt-2 md:text-2xl">rudydanielcarballo@gmail.com</p>
                </div>

                <div className="mb-6 text-center md:mb-10">
                    <div className="flex justify-center mb-2 md:mb-3">
                        <FaGlobe className="text-2xl md:text-3xl text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-medium md:text-2xl text-emerald-400">Website</h3>
                    <p className="mt-1 text-lg font-normal text-white md:mt-2 md:text-2xl"></p>
                </div>
            </div>

            <div className="w-full pr-0 md:w-1/2 md:pr-10">
                <h2 className="mb-6 text-2xl font-bold md:mb-8 md:text-3xl text-emerald-400">Send me a message</h2>
                
                <form ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-col gap-4 mb-4 md:flex-row md:gap-6 md:mb-6">
                        <div className="w-full md:w-1/2">
                            <label className="block mb-1 text-base text-white md:mb-2 md:text-lg">Name</label>
                            <input 
                                type="text" 
                                name="user_name"
                                className="w-full p-2 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg md:p-3 md:text-base focus:outline-none focus:border-emerald-400"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <label className="block mb-1 text-base text-white md:mb-2 md:text-lg">Email</label>
                            <input 
                                type="email" 
                                name="user_email"
                                className="w-full p-2 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg md:p-3 md:text-base focus:outline-none focus:border-emerald-400"
                                placeholder="Your email"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <textarea 
                            rows="6"
                            name="message"
                            className="w-full p-2 text-sm text-white bg-gray-700 border border-gray-600 rounded-lg md:p-3 md:text-base focus:outline-none focus:border-emerald-400"
                            placeholder="Type your message here"
                            required
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit"
                        disabled={isSending}
                        className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium text-gray-800 transition-colors rounded-lg md:px-6 md:py-3 md:text-base bg-emerald-400 hover:bg-emerald-300 disabled:bg-gray-500 md:w-auto"
                    >
                        {isSending ? (
                            <>
                                <svg className="w-5 h-5 mr-2 -ml-1 text-gray-800 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </>
                        ) : (
                            <>
                                <FaPaperPlane />
                                Send
                            </>
                        )}
                    </button>
                </form>
                
                <div className="flex justify-center gap-3 mt-8 md:justify-start md:gap-5 md:mt-12">
                    <Link to='https://www.facebook.com/rudydaniel.carballo' className="text-gray-400 transition-colors hover:text-emerald-400">
                        <FaFacebook size={20} />
                    </Link>
                    <Link to='https://www.instagram.com/rudydanielcarballo?igsh=dW43eWc1aXRhOWZ1' className="text-gray-400 transition-colors hover:text-emerald-400">
                        <FaInstagram size={20} />
                    </Link>
                    <Link to='https://www.linkedin.com/in/rudy-carballo-357239315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="text-gray-400 transition-colors hover:text-emerald-400">
                        <FaLinkedin size={20} />
                    </Link>
                    <Link to='https://t.me/Rudydanielcarballo' className="text-gray-400 transition-colors hover:text-emerald-400">
                        <FaTelegram size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}