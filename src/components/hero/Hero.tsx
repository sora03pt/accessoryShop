import Image from "next/image";
import styles from "./Hero.module.scss";

export const Hero = () => {
  const handleScrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.textSide}>
        <h1 className={styles.title}>jewelry</h1>
        <p className={styles.subText}>TEST TEXT</p>
        <button className={styles.viewButton} onClick={handleScrollToProducts}>
          VIEW PRODUCTS
        </button>
      </div>
      <div className={styles.imageSide}>
        <Image src="/image/main.webp" alt="Jewelry Collection" fill className="object-cover" priority />
      </div>
    </section>
  );
};
