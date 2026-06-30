import removeMd from "remove-markdown";

export function getPlainTextFromMarkdown(markdown: string): string {
  if (!markdown || !markdown.length) return "";

  try {
    // 見出し行（# で始まる行）を除去
    const withoutHeadings = markdown
      .split("\n")
      .filter((line) => !/^#{1,6}\s/.test(line))
      .join("\n");

    const plainText = removeMd(withoutHeadings);
    return plainText;
  } catch (e) {
    console.error("Could not extract plain text from markdown: ", e);
    return "";
  }
}