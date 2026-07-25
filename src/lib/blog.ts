import { getCollection } from 'astro:content';

export interface BlogPostData {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  author: string;
  tags: string[];
  image?: string;
}

export interface BlogPost {
  id: string;
  data: BlogPostData;
  body?: string;
  collection: 'blog';
  rendered?: { html: string; metadata?: Record<string, unknown> };
  filePath?: string;
  render(): Promise<{
    Content: import('astro').AstroComponentFactory;
    headings: import('astro').MarkdownHeading[];
  }>;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog' as never);
  return posts as unknown as BlogPost[];
}
