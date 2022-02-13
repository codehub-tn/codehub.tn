import { Container, styled } from "@mui/material";
import React from "react";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Header from "../../components/HeaderBlog";

const StyledContent = styled("div")({
    "& h2":{
        fontFamily: "'Cairo', sans-serif",
        fontSize:"35px",
        margin:'35px 0 0px 0'
    },
    "& p": {
        fontSize: "19px",
        fontWeight:'300',
        margin:"8px 0"
    },
    "& p img":{
        display:"block",
        width:"500px",
        maxWidth:'100%',
        margin:'30px auto',
    }
});

const Post = ({ title, description, date, contentHtml, imageUrl }) => {
    return (
        <Layout title={title} description={description}>
            <Header title={title} imageUrl={imageUrl} />
            <Container maxWidth="md" sx={{mt:10}}>
                <StyledContent dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </Container>
        </Layout>
    );
};

export const getStaticProps = async ({ params }) => {
    const data = await getPostData(params.id);
    return { props: data };
};

export const getStaticPaths = () => {
    const paths = getAllPostIds();
    return { paths, fallback: false };
};

export default Post;
