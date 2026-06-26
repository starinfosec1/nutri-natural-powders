import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | NNP Products Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-background min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Back button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          ← Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-12 text-center">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Published on {post.date}
          </p>
        </header>

        {/* Post Hero Image */}
        <div className="relative w-full rounded-3xl overflow-hidden mb-12 shadow-xl flex justify-center bg-muted/30">
          <img
            src={post.image}
            alt={post.title}
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Post Content */}
        <div className="prose prose-lg md:prose-xl max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80">
          {(() => {
            const lines = post.content.split('\n');
            const blocks: React.ReactNode[] = [];
            let listItems: string[] = [];
            let listType: 'ul' | 'ol' | null = null;

            const flushList = () => {
              if (listItems.length > 0) {
                if (listType === 'ul') {
                  blocks.push(
                    <ul key={`ul-${blocks.length}`} className="list-disc pl-6 my-6 space-y-2 text-muted-foreground marker:text-primary">
                      {listItems.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') }} />)}
                    </ul>
                  );
                } else if (listType === 'ol') {
                  blocks.push(
                    <ol key={`ol-${blocks.length}`} className="list-decimal pl-6 my-6 space-y-2 text-muted-foreground marker:text-primary marker:font-bold">
                      {listItems.map((item, i) => <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') }} />)}
                    </ol>
                  );
                }
                listItems = [];
                listType = null;
              }
            };

            lines.forEach((line, i) => {
              const trimmed = line.trim();
              if (!trimmed) {
                flushList();
                return;
              }

              if (trimmed.startsWith('### ')) {
                flushList();
                blocks.push(<h3 key={`h3-${i}`} className="text-2xl md:text-3xl font-bold text-foreground mt-10 mb-5">{trimmed.replace('###', '').trim()}</h3>);
              } else if (trimmed.startsWith('- ')) {
                if (listType && listType !== 'ul') flushList();
                listType = 'ul';
                listItems.push(trimmed.replace('- ', ''));
              } else if (trimmed.match(/^\d+\.\s/)) {
                if (listType && listType !== 'ol') flushList();
                listType = 'ol';
                listItems.push(trimmed.replace(/^\d+\.\s*/, ''));
              } else {
                flushList();
                blocks.push(<p key={`p-${i}`} className="mb-6 text-muted-foreground leading-relaxed">{trimmed}</p>);
              }
            });
            flushList();

            return blocks;
          })()}
        </div>

      </div>
    </article>
  );
}
