import styles from './ProductGrid.module.scss';
import Image from 'next/image';

const products = Array(6).fill({
  name: 'ITEM NAME',
  price: '¥20,000',
});

export const ProductGrid = () => {
  return (
    <section id="products" className={styles.productGrid}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          Upcoming Selections
        </h2>
        <div className={styles.grid}>
          {products.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.imageWrapper}>
                <Image src="/accessoryShop/image/item.webp" alt={item.name} width={373}
                  height={373} />
              </div>
              <p className={styles.category}>ITEM</p>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.price}>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
