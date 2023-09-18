import {gql} from 'graphql-request';

const frontPageImages: any = gql`
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
