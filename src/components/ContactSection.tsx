import { useState, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { personalData } from "@/data/portfolio-data";
import { motion } from "framer-motion";
import { Send, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();

  // Estados para los campos del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");


  // Enviar datos al backend
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://gmail-services.onrender.com/api/emails/enviar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre:name,
          gmail: email,
          asunto: subject,
          mensaje:message,
        }),
      });
      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center mb-2">{t("contact.title")}</h2>
          <p className="text-center text-muted-foreground mb-4">{t("contact.subtitle")}</p>
          <div className="w-16 h-1 gradient-accent mx-auto rounded-full mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-4xl mx-auto">
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg gradient-accent">
                <MapPin className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-foreground">{t("contact.location")}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg gradient-accent">
                <Mail className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-foreground">{personalData.email}</span>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder={t("contact.name")}
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input
                type="email"
                required
                placeholder={t("contact.email")}
                className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              required
              placeholder={t("contact.subject")}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
            <textarea
              required
              rows={5}
              placeholder={t("contact.message")}
              className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-accent-foreground gradient-accent hover:opacity-90 transition-opacity disabled:opacity-60"
              style={{ boxShadow: "var(--shadow-button)" }}
            >
              <Send className="w-4 h-4" />
              {status === "sending" ? t("contact.sending") : t("contact.send")}
            </button>

            {status === "success" && <p className="text-sm text-accent font-medium">{t("contact.success")}</p>}
            {status === "error" && <p className="text-sm text-destructive font-medium">{t("contact.error")}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
