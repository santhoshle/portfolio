import React from 'react';
import ReactMarkdown from 'react-markdown';

interface MarkdownWrapperProps {
    content: string
}

const preprocessMarkdown = (text: string) => {
    // Insert newline before each "- " if it's not already on a new line
    return text?.replace(/(?<!\n)- /g, '\n- ') || '';
};

export default function MarkdownWrapper({ content }: MarkdownWrapperProps) {
    return(
        <ReactMarkdown components={{
            ul: ({ ...props }) => (
              <ul className="list-disc pl-5 mb-4" {...props} />
            ),
            li: ({ ...props }) => (
              <li className="mb-1" {...props} />
            ),
        }}>
            {preprocessMarkdown(content)}
        </ReactMarkdown>
    )
}