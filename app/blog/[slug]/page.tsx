import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PostCard } from "@/components/blog/post-card";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/ui/animated";
import { AbstractCover, GridBackdrop } from "@/components/ui/decor";
import { JsonLd } from "@/components/ui/json-ld";
import {
  getAuthor,
  getPost,
  getRelatedPosts,
  posts,
  type PostBlock,
} from "@/lib/constants/posts";
import { articleSchema, breadcrumbSchema, buildMetadata } from "@/lib/utils/seo";
import { formatDate } from "@/lib/utils/format";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return buildMetadata({
      title: "Article not found",
      description: "This article could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    article: {
      publishedTime: post.publishedAt,
      author: getAuthor(post.author).name,
      section: post.category,
    },
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);
  const author = getAuthor(post.author);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.excerpt,
            path: `/blog/${post.slug}`,
            publishedAt: post.publishedAt,
            author: getAuthor(post.author).name,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article>
        {/* Masthead */}
        <header className="relative overflow-hidden border-b border-line pb-12 pt-12 sm:pt-16">
          <GridBackdrop fade="radial" />

          <Container size="narrow" className="relative">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 py-1 text-[0.8125rem] text-fg-faint transition-colors hover:text-fg"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              All articles
            </Link>

            <Reveal>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.8125rem] text-fg-faint">
                <span className="rounded-full bg-brand-500/10 px-2.5 py-1 font-medium text-brand-200 ring-1 ring-inset ring-brand-500/20">
                  {post.category}
                </span>
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                <span aria-hidden="true">·</span>
                <span>{post.readingMinutes} min read</span>
                <span aria-hidden="true">·</span>
                <span>{author.name}</span>
              </div>

              <h1 className="mt-6 text-[2rem] font-semibold leading-[1.1] tracking-tightest text-fg sm:text-4xl lg:text-[3rem]">
                {post.title}
              </h1>

              <p className="mt-6 text-base leading-relaxed text-fg-muted sm:text-lg">
                {post.excerpt}
              </p>
            </Reveal>
          </Container>
        </header>

        {/* Cover */}
        <Container size="narrow" className="pt-10">
          <Reveal>
            <div className="aspect-16/9 overflow-hidden rounded-2xl border border-line">
              <AbstractCover
                palette={post.palette}
                seed={post.slug}
                variant="wave"
              />
            </div>
          </Reveal>
        </Container>

        {/* Body */}
        <Section spacing="md">
          <Container size="narrow">
            <div className="space-y-6">
              {post.body.map((block, index) => (
                <Block key={index} block={block} />
              ))}
            </div>

            {post.related.length > 0 ? (
              <Reveal>
                <aside
                  aria-labelledby="applies"
                  className="mt-14 rounded-xl border border-line bg-ink-900/50 p-6"
                >
                  <h2
                    id="applies"
                    className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint"
                  >
                    Where this applies
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {post.related.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-line px-3.5 py-2 text-sm text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
                        >
                          {link.label}
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </aside>
              </Reveal>
            ) : null}

            <Reveal>
              <div className="mt-6 flex gap-4 rounded-xl border border-line bg-ink-900/50 p-6">
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-linear-to-br from-brand-600/30 to-aqua-500/20 text-sm font-medium text-brand-100 ring-1 ring-inset ring-line"
                >
                  {author.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-fg">{author.name}</p>
                  <p className="text-xs text-fg-faint">{author.role}</p>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-fg-muted">
                    {author.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>
      </article>

      {/* Related */}
      {related.length > 0 ? (
        <Section tone="line" spacing="sm">
          <Container>
            <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-fg-faint">
              Related reading
            </h2>

            <div className="mt-6 divide-y divide-line border-t border-line">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} size="list" />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <CTASection
        title="Need this done rather than read about?"
        description="We build the things these articles describe. Tell us what you're working on."
        primary={{ label: "Start a Project", href: "/contact" }}
        secondary={{ label: "Explore services", href: "/services" }}
      />
    </>
  );
}

/**
 * Article body renderer. Content is a typed block array rather than raw HTML,
 * so nothing arbitrary is ever injected into the page — and the same contract
 * will hold when the source moves to a CMS.
 */
function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="pt-6 text-xl font-semibold tracking-tight text-fg sm:text-2xl">
          {block.text}
        </h2>
      );

    case "paragraph":
      return (
        <p className="text-base leading-[1.75] text-fg-muted sm:text-[1.0625rem]">
          {block.text}
        </p>
      );

    case "list":
      return (
        <ul className="space-y-3 pl-1">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex gap-3.5 text-base leading-[1.7] text-fg-muted"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-aqua-400/60"
              />
              {item}
            </li>
          ))}
        </ul>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-brand-500/50 py-1 pl-6 text-lg leading-relaxed text-fg sm:text-xl">
          {block.text}
        </blockquote>
      );
  }
}
