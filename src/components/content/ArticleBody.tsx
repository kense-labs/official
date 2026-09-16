import type { ArticleBlock } from '../../content/types';

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="article-prose">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'p':
            return <p key={index}>{block.text}</p>;
          case 'h2':
            return (
              <h2 key={block.id} id={block.id}>
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={block.id} id={block.id}>
                {block.text}
              </h3>
            );
          case 'ul':
            return (
              <ul key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={index}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case 'callout':
            return (
              <aside key={index} className="article-callout">
                {block.text}
              </aside>
            );
          case 'code':
            return (
              <pre key={index} className="article-code">
                {block.label ? <span className="article-code-label">{block.label}</span> : null}
                <code>{block.text}</code>
              </pre>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
