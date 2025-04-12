
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPost } from "@/store/useBlogStore";

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <Badge className="absolute top-3 right-3 bg-indigo-500 text-white">{post.category}</Badge>
            </div>
            <CardHeader className="pb-2">
                <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar size={14} />
                    {post.date}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="pt-0">
                <div className="flex justify-between items-center w-full">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Link
                        to={`/blog/${post.id}`}
                        className="text-indigo-500 hover:text-indigo-500 font-medium text-sm"
                    >
                        Read more
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
};

export default BlogCard;