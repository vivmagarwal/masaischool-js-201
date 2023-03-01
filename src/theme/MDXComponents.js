import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import {Multicolumn} from '@site/src/components/HomepageFeatures';
import {
  Table,
  Tr,
  Td,
  Markdown
} from '@site/src/components/HomepageFeatures';

// https://rsuitejs.com/components/table/

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  columns: Multicolumn,
  table: Table,
  tr: Tr,
  tc: Td,
  md: Markdown,
};