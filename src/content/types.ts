import type { Locale } from '../i18n/types';

export type Localized<T> = Record<Locale, T>;

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'h3'; id: string; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'code'; label?: string; text: string };

export type DocSectionId = 'start' | 'work' | 'os' | 'platform';

export type DocProductId = 'overview' | 'work' | 'os' | 'platform';

export type BlogPost = {
  slug: string;
  date: string;
  readingMinutes: number;
  cover: string;
  banner: string;
  category: Localized<string>;
  author: { name: string; role: Localized<string> };
  title: Localized<string>;
  excerpt: Localized<string>;
  body: Localized<ArticleBlock[]>;
};

export function loc<T>(locale: Locale, value: Localized<T>): T {
  return value[locale];
}

export function headingsOf(blocks: ArticleBlock[]) {
  return blocks.filter(
    (block): block is Extract<ArticleBlock, { type: 'h2' | 'h3' }> =>
      block.type === 'h2' || block.type === 'h3',
  );
}
