import React, { useState } from "react";
import styles from "./Certificates.module.css";
import certificates from "../../data/certificates";

export const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = (e) => {
    e.stopPropagation(); 
    setSelectedImage(null);
  };

  return (
    <section className={styles.container} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.grid}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.card}>
            <div 
              className={styles.imageContainer} 
              onClick={() => openModal(cert.imageSrc)}
            >
              <img
                src={cert.imageSrc}
                alt={cert.title}
                className={styles.image}
              />
            </div>
            <div className={styles.details}>
              <h3>{cert.title}</h3>
              <p><b>{cert.place}</b></p>
              <p>{cert.issuer}</p>
              <p>{cert.date}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying the full-size image */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Full size certificate" 
              className={styles.fullSizeImage}
            />
            <button 
              className={styles.closeButton} 
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
