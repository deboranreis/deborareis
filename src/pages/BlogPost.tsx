import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Artigo não encontrado</h1>
          <Button asChild variant="outline">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao blog
          </Link>

          {/* Header */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
          </div>

          {/* Content */}
          <article className="prose prose-neutral dark:prose-invert max-w-none animate-fade-in">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content.trim()}
            </ReactMarkdown>
          </article>


          {/* Footer */}
          <div className="mt-12 pt-8 border-t">
            <Button asChild variant="outline">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ver todos os artigos
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
