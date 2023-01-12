import { Container, Grid, Typography } from "@mui/material";
// GraphQL Data
import { getPosts } from "../services";
// styles
import styles from "../styles/Home.module.css";
// components
import PostCard from "../components/PostCard.jsx";
import LandingPosts from "../components/LandingPosts";
import Category from "../components/Category";
import Author from "../components/Author/Author";
import { useRouter } from "next/router";
import Loader from "../components/Loader";

function Home({ mainPosts }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <Container>
      <div>
        <Typography
          className={styles.featuredText}
          variant="h2"
          sx={{ ml: { sm: "24px", sm: 0 } }}
          fontFamily={"Josefin Sans"}
          color={"#f59115"}
          mt={9}
        >
          Featured Posts
        </Typography>
        <PostCard />
      </div>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <Grid item sm={12} md={6}>
          <LandingPosts mainPosts={mainPosts.posts} />
        </Grid>
        <Grid item sm={12} md={6}>
          <Category />
          <Author />
        </Grid>
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const mainPosts = (await getPosts()) || [];

  return {
    props: {
      mainPosts,
    },
  };
}

export default Home;
