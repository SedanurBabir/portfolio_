import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { profile } from "../../data/content";

const Contact = () => {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => setSuccess(false), 4000);
    return () => clearTimeout(timer);
  }, [success]);

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(false), 4000);
    return () => clearTimeout(timer);
  }, [error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(() => {
        formRef.current?.reset();
        setSuccess(true);
        setError(false);
      })
      .catch(() => {
        setSuccess(false);
        setError(true);
      });
  };

  return (
    <div className="contact">
      <motion.div
        className="contact__intro"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span>Birlikte çalışalım</span>
        <h2>
          Yeni bir fikir, bakım isteyen bir ürün ya da ek güç arayan bir takım için buradayım.
          Hadi tanışalım.
        </h2>
        {/* <p>
          Formu doldurabilir ya da doğrudan {" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {" "} adresine yazabilirsiniz. Telefon: {profile.phone}
        </p> */}
      </motion.div>

      <motion.form
        ref={formRef}
        className="contact__form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <input type="hidden" name="to_name" value="Sedanur" />
        <input type="hidden" name="to_email" value={profile.email} />
        <input type="hidden" name="subject" value="sedanurbabir.com üzerinden yeni mesaj" />

        <label className="contact__field">
          <span>Adınız</span>
          <input type="text" name="from_name" placeholder="Adınız" required />
        </label>

        <label className="contact__field">
          <span>E-posta</span>
          <input type="email" name="reply_to" placeholder="ornek@posta.com" required />
        </label>

        <label className="contact__field">
          <span>Mesajınız</span>
          <textarea
            name="message"
            rows={6}
            placeholder="Projenizi veya ihtiyacınızı anlatın..."
            required
          />
        </label>

        <button type="submit" className="contact__submit">
          Mesaj gönder
        </button>

        {success && (
          <span className="contact__feedback success" role="status" aria-live="polite">
            Teşekkürler! Mesajınızı aldım, en kısa sürede dönüş yapacağım.
          </span>
        )}
        {error && (
          <span className="contact__feedback error" role="alert" aria-live="assertive">
            Bir sorun oluştu. Lütfen kısa süre sonra tekrar deneyin.
          </span>
        )}
      </motion.form>
    </div>
  );
};

export default Contact;
