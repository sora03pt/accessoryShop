import styles from './BrandConcept.module.scss';

export const BrandConcept = () => {
  return (
    <section className={styles.concept}>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            TIMELESS<br />BEAUTY,<br />DELICATELY<br />WORN.
          </h2>
          <p className={styles.description}>
            私たちのジュエリーは、華美に主張するのではなく、身につける人の日常にそっと寄り添う存在でありたいと考えています。繊細なデザインと洗練された佇まいは、どんな瞬間にも自然に溶け込み、身につけるほどにその人らしさと重なっていきます。
          </p>
        </div>
        <div className={styles.imageContent}>
          <img src="/image/concept.webp" alt="Concept" />
        </div>
      </div>
    </section>
  );
};