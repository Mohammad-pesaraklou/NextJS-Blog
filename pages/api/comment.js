import { gql, GraphQLClient } from "graphql-request";

const graphqlEndPoint = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

const graphCmsToken = process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN;

export default async function asynchandler(req, res) {
  
  const graphQLClient = new GraphQLClient(graphqlEndPoint, {
    headers: {
      authorization: `Bearer ${graphCmsToken}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $text: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          text: $text
          post: { connect: { slug: $slug } }
        }
      ) {
        id
      }
    }
  `;

  try {
    const result = await graphQLClient.request(query, req.body);
    return res.status(200).send(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}
