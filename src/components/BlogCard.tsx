import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  featured?: boolean;
}

export function BlogCard({
  slug,
  title,
  excerpt,
  date,
  category,
  featured = false,
}: BlogCardProps) {
  return (
    <Link
      to={`/blog/${slug}`}
      className={cn(
        "group block rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50",
        featured && "md:col-span-2 bg-gradient-to-br from-card to-accent/30"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
            {category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {date}
          </span>
        </div>

        <h3 className={cn(
          "font-semibold mb-2 group-hover:text-primary transition-colors",
          featured ? "text-xl md:text-2xl" : "text-lg"
        )}>
          {title}
        </h3>

        <p className="text-muted-foreground text-sm flex-1 line-clamp-3">
          {excerpt}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          Ler artigo
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
