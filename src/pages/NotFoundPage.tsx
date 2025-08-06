import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>The page you are looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>
        ← Go back to Home Page
      </Link>
    </div>
  );
};

import type { CSSProperties } from "react";

const styles = {
  container: {
    textAlign: "center",
    padding: "80px 20px",
    color: "#fff",
  },
  title: {
    fontSize: "72px",
    marginBottom: "20px",
  },
  message: {
    fontSize: "18px",
    marginBottom: "30px",
  },
  link: {
    textDecoration: "none",
    color: "#007bff",
    fontWeight: "bold",
  },
} as { [key: string]: CSSProperties };

export default NotFoundPage;
