
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { useBlogStore, BlogPost } from "@/store/useBlogStore";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts } = useBlogStore();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentPost = posts.find(p => p.id === Number(id));

    if (currentPost) {
      setPost(currentPost);
      const related = posts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);

      setRelatedPosts(related);
    } else {
      navigate("/blog");
    }
  }, [id, posts, navigate]);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <p>Loading post...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="outline"
            size="sm"
            className="mb-6"
            onClick={() => navigate("/blog")}
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Button>

          <div className="mb-8">
            <Badge className="mb-3">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
            </div>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>

          <div
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {relatedPosts.length > 0 && (
            <>
              <Separator className="my-10" />

              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="group block"
                    >
                      <div className="aspect-video rounded-lg overflow-hidden mb-3">
                        <img
                          src={relatedPost.imageUrl}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <h3 className="font-medium group-hover:text-shop-blue transition-colors">
                        {relatedPost.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostPage;