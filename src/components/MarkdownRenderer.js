import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";

const MarkdownRenderer = ({ url }) => {
  const [markdown, setMarkdown] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await axios.get(url);
        setMarkdown(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchMarkdown();
  }, [url]);

  if (error) return <div>Error fetching markdown: {error.message}</div>;
  if (!markdown) return <Spinner animation="border" variant="secondary" />;

  return <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />;
};

export default MarkdownRenderer;
