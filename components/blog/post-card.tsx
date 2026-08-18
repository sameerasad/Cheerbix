import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { AbstractCover } from "@/components/ui/decor";
import type { Post } from "@/lib/constants/posts";
import { cn } from "@/lib/utils/cn";
import { formatDate } from "@/lib/utils/format";

export function PostCard({
  post,
  className,
  size = "default",
}: {
  post: Post;
  className?: string;
  /** `feature` shows the cover and excerpt; `list` is a compact text row. */
  size?: "feature" | "default" | "list";
}) {
  if (size === "list") {
    return (
      <article className={cn("group", className)}>
        <Link
          href={`/blog/${post.slug}`}
          className="flex items-start justify-between gap-6 border-b border-line py-6 transition-colors"
        >
          <div className="min-w-0">
            <PostMeta post={post} />
            <h3 className="mt-3 text-lg font-medium text-fg transition-colors group-hover:text-brand-200">
              {post.title}
            </h3>
            <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-fg-muted">
              {post.excerpt}
            </p>
          </div>
          <ArrowUpRight
            size={17}
            aria-hidden="true"
            className="mt-1 shrink-0 text-fg-faint transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-200"
          />
        </Link>
      </article>
    );
  }

  return (
    <article className={cn("group h-full", className)}>
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-ink-850/50 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:bg-ink-800/60"
      >
        <div
          className={cn(
            "relative overflow-hidden",
            size === "feature" ? "aspect-16/9" : "aspect-16/10",
          )}
        >
          <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            <AbstractCover
              palette={post.palette}
              seed={post.slug}
              variant={size === "feature" ? "wave" : "grid"}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <PostMeta post={post} />

          <h3
            className={cn(
              "mt-4 font-medium text-fg transition-colors group-hover:text-brand-200",
              size === "feature" ? "text-xl sm:text-2xl" : "text-lg",
            )}
          >
            {post.title}
          </h3>

          <p className="mt-3 flex-1 text-[0.9375rem] leading-relaxed text-fg-muted">
            {post.excerpt}
          </p>

          <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors group-hover:text-fg">
            Read article
            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </Link>
    </article>
  );
}

function PostMeta({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.75rem] text-fg-faint">
      <span className="rounded-full bg-brand-500/10 px-2.5 py-1 font-medium text-brand-200 ring-1 ring-inset ring-brand-500/20">
        {post.category}
      </span>
      <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      <span aria-hidden="true">·</span>
      <span>{post.readingMinutes} min read</span>
    </div>
  );
}
