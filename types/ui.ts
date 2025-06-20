import type { BundledLanguage } from "shiki";

export interface CodeBlockProps {
  children: string;
  lang: BundledLanguage;
}