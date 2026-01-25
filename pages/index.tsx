import Head from "next/head";
import { Footer } from "@/components/footer/Footer";
import { BrandConcept } from "@/components/brand-concept/BrandConcept";
import { Hero } from "@/components/hero/Hero";
import { ProductGrid } from "@/components/product-grid/ProductGrid";
import { Features } from "@/components/features/Features";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Jewelry Collection | 高品質なアクセサリーコレクション</title>
        <meta name="description" content="上質なジュエリーとアクセサリーを揃えたコレクション。送料無料、金属アレルギー対応、海外発送対応です。" />
        <meta name="keywords" content="ジュエリー,アクセサリー,送料無料,金属アレルギー対応,高品質" />
        <meta property="og:title" content="Jewelry Collection | 高品質なアクセサリーコレクション" />
        <meta property="og:description" content="上質なジュエリーとアクセサリーを揃えたコレクション。送料無料、金属アレルギー対応、海外発送対応です。" />
        <meta property="og:image" content="/accessoryShop/image/main.webp" />
        <meta property="og:url" content="https://sora03pt.github.io/accessoryShop/" />
        <meta name="twitter:title" content="Jewelry Collection | 高品質なアクセサリーコレクション" />
        <meta name="twitter:description" content="上質なジュエリーとアクセサリーを揃えたコレクション。" />
        <meta name="twitter:image" content="/accessoryShop/image/main.webp" />
      </Head>
      <main>
        <Hero />
        <BrandConcept />
        <ProductGrid />
        <Features />
        <Footer />
      </main>
    </>
  );
}
