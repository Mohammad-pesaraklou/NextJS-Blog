import request, { gql } from "graphql-request";

const END_POINT =
  "https://api-us-west-2.hygraph.com/v2/clc392yl62mde01tec19x5nrg/master";

export const getFeaturedPost = async () => {
  const FeaturedQuery = gql`
    query MyQuery {
      posts(where: { featuredPost: true }) {
        slug
        title
        text {
          html
        }
        photoCover {
          url
        }
      }
    }
  `;

  const result = await request(END_POINT, FeaturedQuery);

  console.log(result);

  return result;
};
