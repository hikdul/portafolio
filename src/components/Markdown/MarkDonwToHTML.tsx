// pages/ejemplo.tsx
import { GetStaticProps } from 'next';
import { MarkdownViewer } from './MarkdownViewer';
import { markdownToHtml } from '@/lib/markdownFromString';
//import { markdownToHtml } from '../lib/markdownFromString';
//import { MarkdownViewer } from '../components/MarkdownViewer';

const markdownString = `
# Título dinámico

Este contenido viene de un **string** en Markdown.

- Uno
- Dos
- Tres
`;

interface Props {
  contentHtml: string;
}

export default function Ejemplo({ contentHtml }: Props) {
  return <MarkdownViewer contentHtml={contentHtml} />;
}

const getStaticProps: GetStaticProps = async ({markdownString}:{markdownString:string}) => {
  const contentHtml = await markdownToHtml(markdownString);

  return {
    props: {
      contentHtml,
    },
  };
};
