import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";
import styles from "./MarkdownRenderer.module.css";

/**
 * MarkdownRenderer - Renders markdown with dark theme optimizations
 * Supports GitHub Flavored Markdown (GFM) with syntax highlighting
 */
const MarkdownRenderer = ({ url }) => {
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMarkdown = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setMarkdown(response.data);
        setError(null);
      } catch (err) {
        setError(err);
        setMarkdown("");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarkdown();
  }, [url]);

  if (isLoading) {
    return (
      <div className={styles["markdown-loader"]}>
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles["markdown-error"]}>
        <p className={styles["error-title"]}>Error loading markdown</p>
        <p className={styles["error-message"]}>{error.message}</p>
      </div>
    );
  }

  return (
    <article className={styles["markdown-container"]}>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          // Enhance heading styling with better contrast
          h1: ({ node, ...props }) => <h1 className={styles["markdown-h1"]} {...props} />,
          h2: ({ node, ...props }) => <h2 className={styles["markdown-h2"]} {...props} />,
          h3: ({ node, ...props }) => <h3 className={styles["markdown-h3"]} {...props} />,
          h4: ({ node, ...props }) => <h4 className={styles["markdown-h4"]} {...props} />,
          h5: ({ node, ...props }) => <h5 className={styles["markdown-h5"]} {...props} />,
          h6: ({ node, ...props }) => <h6 className={styles["markdown-h6"]} {...props} />,

          // Paragraph with improved readability
          p: ({ node, ...props }) => <p className={styles["markdown-p"]} {...props} />,

          // Links with hover states
          a: ({ node, ...props }) => <a className={styles["markdown-a"]} {...props} />,

          // Code blocks with better visibility
          code: ({ node, inline, ...props }) =>
            inline ? (
              <code className={styles["markdown-code-inline"]} {...props} />
            ) : (
              <code className={styles["markdown-code-block"]} {...props} />
            ),

          // Pre blocks with dark theme support
          pre: ({ node, ...props }) => (
            <pre className={styles["markdown-pre"]} {...props} />
          ),

          // Lists with proper spacing
          ul: ({ node, ...props }) => <ul className={styles["markdown-ul"]} {...props} />,
          ol: ({ node, ...props }) => <ol className={styles["markdown-ol"]} {...props} />,
          li: ({ node, ...props }) => <li className={styles["markdown-li"]} {...props} />,

          // Blockquotes for emphasis
          blockquote: ({ node, ...props }) => (
            <blockquote className={styles["markdown-blockquote"]} {...props} />
          ),

          // Tables with striped rows
          table: ({ node, ...props }) => (
            <div className={styles["markdown-table-wrapper"]}>
              <table className={styles["markdown-table"]} {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => (
            <thead className={styles["markdown-thead"]} {...props} />
          ),
          tbody: ({ node, ...props }) => (
            <tbody className={styles["markdown-tbody"]} {...props} />
          ),
          tr: ({ node, ...props }) => <tr className={styles["markdown-tr"]} {...props} />,
          th: ({ node, ...props }) => <th className={styles["markdown-th"]} {...props} />,
          td: ({ node, ...props }) => <td className={styles["markdown-td"]} {...props} />,

          // Horizontal rule
          hr: ({ node, ...props }) => <hr className={styles["markdown-hr"]} {...props} />,

          // Images with responsive sizing
          img: ({ node, alt, ...props }) => (
            <img className={styles["markdown-img"]} alt={alt} {...props} />
          ),
        }}
      />
    </article>
  );
};

export default MarkdownRenderer;
