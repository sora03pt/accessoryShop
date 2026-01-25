import styles from './Features.module.scss';
import { FaTruck, FaGlobe, FaShieldAlt, FaStar } from 'react-icons/fa';

const features = [
  { label: '送料無料', icon: <FaTruck /> },
  { label: '海外発送対応', icon: <FaGlobe /> },
  { label: '金属アレルギー対応', icon: <FaShieldAlt /> },
  { label: '限定商品', icon: <FaStar /> },
];

export const Features = () => {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        {features.map((f, i) => (
          <div key={i} className={styles.featureItem}>
            <span className={styles.icon}>{f.icon}</span>
            <span className={styles.label}>{f.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
