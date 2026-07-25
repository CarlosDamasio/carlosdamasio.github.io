import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import MarkdownRenderer from "./MarkdownRenderer";
import styles from "./MarkdownRenderer.module.css";

jest.mock("axios");

test("renders markdown content without forcing horizontal overflow", async () => {
  axios.get.mockResolvedValue({ data: "# Hello\n\nThis is a long markdown line that should wrap cleanly on small screens." });

  const { container } = render(<MarkdownRenderer url="/sample.md" />);

  await waitFor(() => expect(screen.getByText("Hello")).toBeInTheDocument());

  const article = container.querySelector("article");
  expect(article.className).toContain(styles["markdown-container"]);
  const image = container.querySelector("img");
  expect(image).toBeNull();
});
