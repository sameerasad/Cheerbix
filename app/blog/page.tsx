import type { Metadata } from "next";

import { PostCard } from "@/components/blog/post-card";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/animated";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";
import { featuredPost, postCategories, sortedPosts } from "@/lib/constants/posts";
import { breadcrumbSchema, buildMetadata } from "@/lib/utils/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "Practical writing on web development, AI automation, SEO, digital marketing, mobile and business technology from the Cherbix team.",
  path: "/blog",
});

export default function BlogPage() {
  const rest = sortedPosts.filter((post) => post.slug !== featuredPost?.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <PageHero
        eyebrow="Blog"
        title="Notes from the work."
        description="Practical writing on building, automating and growing digital products — the things we find ourselves explaining on calls often enough to be worth writing down."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
        aside={
          postCategories.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {postCategories.map((category) => (
                <li
                  key={category}
                  className="rounded-full border border-line bg-ink-900/60 px-3.5 py-1.5 text-[0.8125rem] text-fg-muted"
                >
                  {category}
                </li>
              ))}
            </ul>
          ) : undefined
        }
      />

      <Section>
        <Container>
          {sortedPosts.length === 0 ? (
            <EmptyBlog />
          ) : (
            <>
              {featuredPost ? (
                <Reveal className="mb-14">
                  <PostCard post={featuredPost} size="feature" />
                </Reveal>
              ) : null}

              {rest.length > 0 ? (
                <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post) => (
                    <StaggerItem key={post.slug}>
                      <PostCard post={post} />
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              ) : null}
            </>
          )}
        </Container>
      </Section>

      <CTASection
        title="Want this applied to your business?"
        description="The articles cover the principles. Tell us your situation and we'll tell you which of them actually matter for it."
        primary={{ label: "Start a Project", href: "/contact" }}
        secondary={{ label: "Explore services", href: "/services" }}
      />
    </>
  );
}

/** Rendered when nothing is published — a real state, not a placeholder. */
function EmptyBlog() {
  return (
    <div className="rounded-2xl border border-dashed border-line-strong px-6 py-20 text-center">
      <h2 className="text-lg font-medium text-fg">No articles published yet</h2>
      <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-fg-muted">
        We&apos;re working on the first pieces. In the meantime, the services pages
        cover how we approach each type of project.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/services" variant="secondary">
          Explore services
        </Button>
        <Button href="/contact">Start a project</Button>
      </div>
    </div>
  );
}
