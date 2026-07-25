import { getCollection, render } from 'astro:content';

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
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog' as never);
  return posts as unknown as BlogPost[];
}

export async function renderBlogPost(post: BlogPost) {
  return render(post as any);
}
