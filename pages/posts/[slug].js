import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Container,
  Grid,
} from "@mui/material";
import Aos from "aos";
import Link from "next/link";
import { useRouter } from "next/router";
import moment from "moment";
// data
import { getPostDetails, getPosts } from "../../services";
// style
import styles from "./PostDetail.module.css";
// component
import CommentForm from "../../components/comment/CommentForm";
import Comments from "../../components/comment/Comments";
// context
import { ThemeContext } from "../../context/ThemeContextProvider";

const PostDetails = ({ data }) => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { setActiveNav } = useContext(ThemeContext);

  const themeHandler = (e) => {
    setActiveNav(e.target.textContent);
    setToggle(true);
  };

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <Container>
      <div className={styles.container}>
        <Grid
          container
          spacing={20}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { md: "column", lg: "row" },
            alignItems: { xs: "center", lg: "flex-start" },
          }}
        >
          <Grid item md={12} lg={6}>
            <Card
              sx={{ maxWidth: 1000, mb: 3, mt: 5, minWidth: { lg: 550 } }}
              data-aos="fade-left"
              className={styles.cardContainer}
            >
              <CardMedia sx={{ height: 500 }} image={data?.photoCover.url} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ my: 3 }}
                >
                  {data?.title}
                </Typography>
                <div className={styles.authorSection}>
                  <h5
                    style={{
                      display: "flex",
                      gap: "5px",
                      fontFamily: "Josefin Sans",
                      color: "#f59115",
                      flexWrap: "wrap",
                    }}
                  >
                    Created By:
                    <Link
                      className={styles.linkText}
                      href={`/authors/${data.author.slug}`}
                    >
                      <p style={{ color: "#212120" }}>{data.author.name}</p>
                    </Link>
                  </h5>
                  <h5
                    style={{
                      display: "flex",
                      gap: "5px",
                      fontFamily: "Josefin Sans",
                      color: "#f59115",
                      flexWrap: "wrap",
                    }}
                  >
                    Created At:{" "}
                    <p style={{ color: "#212120" }}>
                      {moment(data.createdAt).format("MMM DD, Y")}
                    </p>
                  </h5>
                </div>
                <p style={{ fontFamily: "Josefin Sans", lineHeight: "30px" }}>
                  {data?.text.text}
                </p>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <Link href={"/"}>
                  {toggle ? (
                    <Button
                      variant="disabled"
                      sx={{ fontFamily: "Josefin Sans" }}
                    >
                      Pending..
                    </Button>
                  ) : (
                    <Button
                      color="secondary"
                      size="medium"
                      variant="contained"
                      sx={{ fontFamily: "Josefin Sans", color: "wheat" }}
                    >
                      back
                      <span
                        onClick={themeHandler}
                        style={{ marginLeft: "3px" }}
                        value="Home"
                      >
                        Home
                      </span>
                    </Button>
                  )}
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item={12}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              flexDirection: { xs: "column", md: "row", lg: "column" },
            }}
          >
            <CommentForm slug={data.slug} />
            <Comments slug={data.slug} />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  let data = null;
  try {
    data = await getPostDetails(params.slug);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const posts = (await getPosts()) || [];

  const paths = posts?.posts.map((item) => {
    return {
      params: {
        slug: item.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
