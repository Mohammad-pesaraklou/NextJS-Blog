import React, { useEffect } from "react";
import { getPostDetails, getPosts } from "../../services";
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
import moment from "moment";
// style
import styles from "./PostDetail.module.css";
import CommentForm from "../../components/CommentForm";

const PostDetails = ({ data }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  console.log(data);

  return (
    <Container>
      <div className={styles.container}>
        <Grid
          container
          spacing={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { sm: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Grid item sm={12} md={6}>
            <Card
              sx={{ maxWidth: 845, mb: 3, mt: 5 }}
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
                  <Button
                    size="medium"
                    variant="contained"
                    sx={{ fontFamily: "Josefin Sans" }}
                    color="warning"
                  >
                    Back Home
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item sm={12} md={6}>
            <CommentForm slug={data.slug} />
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
        slug: item.id,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
