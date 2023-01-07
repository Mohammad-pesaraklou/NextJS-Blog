import { Typography } from "@mui/material";
import PostCard from "../components/PostCard";
import { getFeaturedPost } from "../services";
import styles from "../styles/Home.module.css";

function Home({ posts }) {

  
  return (
    <>
      <Typography
       className={styles.featuredText}
        variant="h2"
        sx={{ ml: { xs: "24px", sm: 0 } }}
        fontFamily={"Josefin Sans"}
        color={"#f59115"}
        mt={9}
      >
        Featured Posts
      </Typography>
      <PostCard posts={posts?.posts} />
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
