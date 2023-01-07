import { Typography } from "@mui/material";
import { Inter } from "@next/font/google";
import PostCard from "../components/PostCard";
import { getFeaturedPost } from "../services";
import styles from "../styles/Home.module.css";

function Home({ posts }) {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ ml: { xs: "24px", sm: 0 } }}
        fontFamily={"Josefin Sans"}
        color={"#f59115"}
        mt={9}
      >
        Authors of This Blogs
      </Typography>
      {posts.posts.map((item) => {
        return <PostCard posts={item} key={item.slug} />;
      })}
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getFeaturedPost()) || [];

  return {
    props: {
      posts,
    },
  };
}
export default Home;
