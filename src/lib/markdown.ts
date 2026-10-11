import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import MarkdownWrapper from '../components/MarkdownWrapper';

// Renders data.json markdown to HTML at build time (from getStaticProps only),
// so react-markdown never ships to the browser.
export function renderMarkdown(content: string): string {
  return renderToStaticMarkup(createElement(MarkdownWrapper, { content }));
}
