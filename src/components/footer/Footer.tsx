import React from "react";
import styles from "./Footer.module.scss";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* SNS Icons */}
        <div className={styles.social}>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>

        {/* Links */}
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">企業情報</a>
            </li>
            <li>
              <a href="#">利用規約</a>
            </li>
            <li>
              <a href="#">プライバシーポリシー</a>
            </li>
            <li>
              <a href="#">セキュリティーポリシー</a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className={styles.copyright}>&copy; 2023 sample, INC.</p>
      </div>
    </footer>
  );
};
