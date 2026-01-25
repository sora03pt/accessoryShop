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
        <Image src="/accessoryShop/image/main.webp" alt="Jewelry Collection" width={1600}
          height={1067} />
      </div>
    </section >
  );
};
