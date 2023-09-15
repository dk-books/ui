import {gql} from 'graphql-request';

const fullLanguagesQuery = gql`
{
  sites(where: {key: 'efe'}) {
    markets(where: {key: 'en'}) {
      header {
        menu {
          submenus(where: {title: 'Change Language'}) {
            submenus {
              title
              path
            }
          }
        }
      }
   }
 }
}`;

export {fullLanguagesQuery};
