import { Box, Container, List } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout";
import ListItem from "../../components/ListItem";
import HeaderBlog from "../../components/HeaderBlog"
import { getAllPostsMetadata } from "../../lib/posts";

const Blog = ({ posts }) => {
    return (
        <Layout>
            <HeaderBlog title='Nos derniers articles' imageUrl="https://wallpapercave.com/wp/wp7110622.jpg" />
            <Container maxWidth="lg"sx={{minHeight:'80vh', mt:10}}>
                <List>
                    {posts.map((post, k) => (
                        <ListItem
                            key={k}
                            title={post.title}
                            imageUrl={post.imageUrl}
                            description={post.description}
                            date={post.date}
                            id={post.id}
                        />
                    ))}
                </List>
            </Container>
        </Layout>
    );
};

export default Blog;

export const getStaticProps = async () => {
    const posts = getAllPostsMetadata();
    return {
        props: { posts },
    };
};
