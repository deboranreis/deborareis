import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

const Blog = () => {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Reflexões, guias práticos e análises sobre cibersegurança, 
            compliance e gestão de riscos.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <BlogCard {...featuredPost} featured />
        </div>

        {/* Other Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPosts.map((post, index) => (
            <div
              key={post.slug}
              className="animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
