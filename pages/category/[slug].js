import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import Aos from "aos";
import { useRouter } from "next/router";
// data
import { getCategory, getCategoryPost } from "../../services";
// styles
import styles from "./slug.module.css";
// components
import MainCard from "../../components/MainCard";
import Category from "../../components/Category";

const CategoryPosts = ({ posts }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <Container>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <MainCard posts={posts} />
            </Grid>
            <Grid item sm={12} md={6}>
              <Category />
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default CategoryPosts;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}
export async function getStaticPaths() {
  const data = (await getCategory()) || [];

  const paths = data.categories.map((item) => {
    return {
      params: {
        slug: item?.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
