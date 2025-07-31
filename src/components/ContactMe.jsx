import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaGlobe, FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

export function ContactMe() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState(''); // 'success' o 'error'
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
            setAlertMessage('¡Mensaje enviado correctamente! Pronto me pondré en contacto contigo.');
            form.current.reset();
        }, (error) => {
            console.log(error.text);
            setAlertType('error');
            setAlertMessage('Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
        })
        .finally(() => {
            setIsSending(false);
            setShowAlert(true);
            // Ocultar la alerta después de 5 segundos
            setTimeout(() => {
                setShowAlert(false);
            }, 5000);
        });
    };

    return (
        <section className="flex items-start w-full h-screen bg-gray-800 pl-[16.666%] pr-[5%] pt-[2%] ml-10 relative">
            {/* Alertas flotantes */}
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

            {/* Columna izquierda - Info de contacto */}
            <div className="w-1/2 h-full gap-5">
                <h1 className="mb-8 text-3xl font-bold text-center text-emerald-400 md:text-5xl">Contact Me</h1>
                
                <div className="mb-10 text-center">
                    <div className="flex justify-center mb-3">
                        <FaPhone className="text-3xl text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-medium text-emerald-400">Mobile no</h3>
                    <p className="mt-2 text-2xl font-normal text-white">+53 56498546</p>
                </div>

                <div className="mb-10 text-center">
                    <div className="flex justify-center mb-3">
                        <FaMapMarkerAlt className="text-3xl text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-medium text-emerald-400">Location</h3>
                    <p className="mt-2 text-2xl font-normal text-white">La Habana - Cuba</p>
                </div>

                <div className="mb-10 text-center">
                    <div className="flex justify-center mb-3">
                        <FaEnvelope className="text-3xl text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-medium text-emerald-400">Email</h3>
                    <p className="mt-2 text-2xl font-normal text-white">rudydanielcarballo@gmail.com</p>
                </div>

                <div className="mb-10 text-center">
                    <div className="flex justify-center mb-3">
                        <FaGlobe className="text-3xl text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-medium text-emerald-400">Website</h3>
                    <p className="mt-2 text-2xl font-normal text-white"></p>
                </div>
            </div>

            {/* Columna derecha - Formulario */}
            <div className="w-1/2 pr-10">
                <h2 className="mb-8 text-3xl font-bold text-emerald-400">Send me a message</h2>
                
                <form ref={form} onSubmit={sendEmail}>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block mb-2 text-lg text-white">Name</label>
                            <input 
                                type="text" 
                                name="user_name"
                                className="w-full p-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-emerald-400"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-lg text-white">Email</label>
                            <input 
                                type="email" 
                                name="user_email"
                                className="w-full p-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-emerald-400"
                                placeholder="Your email"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="mb-4">
                        <textarea 
                            rows="6"
                            name="message"
                            className="w-full p-3 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-emerald-400"
                            placeholder="Type your message here"
                            required
                        ></textarea>
                    </div>
                    
                    <button 
                        type="submit"
                        disabled={isSending}
                        className="flex items-center gap-2 px-6 py-3 font-medium text-gray-800 transition-colors rounded-lg bg-emerald-400 hover:bg-emerald-300 disabled:bg-gray-500"
                    >
                        {isSending ? (
                            <>
                                <svg className="w-5 h-5 mr-2 -ml-1 text-gray-800 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Enviando...
                            </>
                        ) : (
                            <>
                                <FaPaperPlane />
                                Send
                            </>
                        )}
                    </button>
                </form>
                
                {/* Redes sociales */}
                <div className="flex gap-5 mt-12">
                    <Link to='https://www.facebook.com/rudydaniel.carballo' className="text-gray-400 transition-colors hover:text-emerald-400">
                        <FaFacebook size={24} />
                    </Link>
                    <Link to='https://www.instagram.com/rudydanielcarballo?igsh=dW43eWc1aXRhOWZ1' className="text-gray-400 transition-colors hover:text-emerald-400">
                        <FaInstagram size={24} />
                    </Link>
                    <Link to='https://www.linkedin.com/in/rudy-carballo-357239315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="text-gray-400 transition-colors hover:text-emerald-400">
                        <FaLinkedin size={24} />
                    </Link>
                    <Link to='https://t.me/Rudydanielcarballo' className="text-gray-400 transition-colors hover:text-emerald-400">
                        <FaTelegram size={24} />
                    </Link>
                </div>
            </div>
        </section>
    )
}