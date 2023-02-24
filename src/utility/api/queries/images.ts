import {gql} from 'graphql-request';

const frontPageImages = gql`
{
  pages(where: {slug: "home", market: en }) {
    blocks {
      ... on Block {
        images {
          title
          url
        }
      }
    }
  }
}`;

export {frontPageImages};
