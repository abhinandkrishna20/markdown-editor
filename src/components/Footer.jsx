import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Made with ❤️ by <b>Abhinand Krishna</b> | © 2025 All Rights Reserved.</p>
      <div style={styles.socialIcons}>
        <a href="https://www.linkedin.com/in/abhinandkrishna/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
        </a>
        <a href="https://github.com/abhinandkrishna20" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
        </a>
        <a href="https://x.com/AbhinandCoder" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#f8f9fa",
    marginTop: "20px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
};

export default Footer;
