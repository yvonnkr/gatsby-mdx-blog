import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import PostList from "./../components/PostList";

const getPosts = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;

const IndexPage = () => {
  const response = useStaticQuery(getPosts);
  const posts = response.allMdx.edges;
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  );
};

export default IndexPage;
