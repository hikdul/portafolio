
interface Props {
    contentHtml: string;
}

export const MarkdownViewer: React.FC<Props> = ({ contentHtml }: Props) => (<div dangerouslySetInnerHTML={{ __html: contentHtml }} />)
