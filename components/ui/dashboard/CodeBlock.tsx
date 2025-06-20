'use server';

import type { CodeBlockProps } from "@/types/ui";
import { codeToHtml } from "shiki";

export async function CodeBlock(props: CodeBlockProps) {
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    theme: "slack-dark",
    colorReplacements: {
      "#222222": "#1e2939",
    },
  });

  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}