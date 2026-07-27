import { getCollection, render } from 'astro:content';
import { estimateReadingTime, extractHeadings, type Heading } from './blog-utils';

export interface BlogPostData {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  author: string;
  tags: string[];
  image?: string;
  lang: 'en' | 'pt' | 'es' | 'fr' | 'de' | 'ru';
  readingTime?: number;
}

export interface BlogPost {
  id: string;
  data: BlogPostData;
  body?: string;
  collection: 'blog';
  rendered?: { html: string; metadata?: Record<string, unknown> };
  filePath?: string;
}

export function getReadingTime(body: string): number {
  return estimateReadingTime(body);
}

export function getHeadings(body: string): Heading[] {
  return extractHeadings(body);
}

export async function getBlogPosts(lang?: string): Promise<BlogPost[]> {
  const posts = await getCollection('blog' as never);
  const all = posts as unknown as BlogPost[];
  if (lang) {
    return all.filter((p) => p.data.lang === lang);
  }
  return all;
}

export async function renderBlogPost(post: BlogPost) {
  return render(post as any);
}

/**
 * Extract the URL slug from a blog post ID.
 * Post IDs include the language prefix (e.g., "en/10-privacy-tools-2026").
 * This returns just the slug part (e.g., "10-privacy-tools-2026").
 */
export function getPostSlug(post: BlogPost): string {
  const parts = post.id.split('/');
  return parts.length > 1 ? parts.slice(1).join('/') : post.id;
}
