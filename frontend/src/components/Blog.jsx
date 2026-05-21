import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import "../styles/Blog.css";
import { getCdnImage } from "../utils/imageLoader";

const blogPosts = [
  {
    title: "The Future of 3D Printing",
    image: "3d-printing.avif",
    description: "How 3D printing is revolutionizing the manufacturing industry.",
    link: "/blog/future-of-3D-printing",
  },
  {
    title: "Eco-Friendly Printing Solutions",
    image: "eco-printing.webp",
    description: "Sustainable printing methods that help save the environment.",
    link: "/blog/eco-friendly-printing-solutions",
  },
  {
    title: "Top Business Card Designs in 2025",
    image: "business-card-design.webp",
    description: "Explore the latest trends in business card design for professionals.",
    link: "/blog/business-card-trends",
  },
];

const Blog = () => {
  return (
    <Box className="blog-page" sx={{ marginTop: "50px", paddingBottom: "50px" }} aria-label="Blog Section">
      <Typography className="blog-title" sx={{ fontWeight: "bolder" }}>
        Latest from Our Blog
      </Typography>
      <Box className="blog-container" sx={{ marginTop: "50px" }}>
        {blogPosts.map((post, index) => (
          <Card className="blog-card" key={index}>
            <CardMedia 
              component="img" 
              image={getCdnImage(post.image, { width: 600, quality: 80 })} 
              alt={post.title} 
              className="blog-image" 
              loading="lazy"
            />
            <CardContent>
              <Typography className="blog-heading">{post.title}</Typography>
              <Typography className="blog-description">{post.description}</Typography>
              <a href={post.link} className="blog-read-more" aria-label={`Read more about ${post.title}`}>Read More</a>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Blog;