import React from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
const htmlParser = require('react-markdown/plugins/html-parser');

const Content = ({content}) => {

  const parseHtml = htmlParser({
    isValidNode: node => node.type !== 'script',
    processingInstructions: [/* ... */]
  });

  return (
    <ReactMarkdown
      source={content}
      escapeHtml={false}
      astPlugins={[parseHtml]}
      renderers={{ code: CodeBlock }}
    />
  );
};

export default Content;

