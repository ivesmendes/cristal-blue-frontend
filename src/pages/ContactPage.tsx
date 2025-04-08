import React from 'react';
import Header from '../components/Header';
import styles from '../styles/ContactPage.module.css';
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const whatsappLink =
    'https://wa.me/5586999458939?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20a%20Cristal%20Blue.';

  return (
    <>
      <Header />

      {/* Fundo com imagem + blur + overlay azul */}
      <div className={styles.backgroundBlur}>
        <div className={styles.overlay}></div>
      </div>

      <main className={styles.contactWrapper}>
        <div className={styles.contactContainer}>
          <h1 className={styles.title}>Fale com a Cristal Blue</h1>

          <p className={styles.description}>
            Nossa equipe está pronta para te ajudar com informações, dúvidas ou sugestões.
            Fale com a gente pelo WhatsApp ou visite nossa loja física.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <MessageCircle size={20} style={{ marginRight: '8px' }} />
            Falar no WhatsApp
          </a>

          <div className={styles.info}>
            <p><Phone size={16} /> (86) 1234-5678</p>
            <p><Mail size={16} /> contato@cristalblue.com.br</p>
            <p><MapPin size={16} /> R. Fenelon Silva, 1843 - Lourival Parente</p>
            <p><Clock size={16} /> Seg - Sex: 8h às 18h | Sáb: 9h às 14h</p>
          </div>

          <div className={styles.social}>
            <a
              href="https://www.instagram.com/cristalblueviagens_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>

          <div className={styles.mapContainer}>
            <iframe
              title='Localização Cristal Blue'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.4620018984565!2d-42.789704106161324!3d-5.128173995524672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x78e36d3b0346b1d%3A0xbde8af9ba3add6c7!2sR.%20Fenelon%20Silva%2C%201843%20-%20Lourival%20Parente%2C%20Teresina%20-%20PI%2C%2064023-290!5e0!3m2!1spt-BR!2sbr!4v1744118064848!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
