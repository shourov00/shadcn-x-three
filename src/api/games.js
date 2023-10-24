import { gql } from "@apollo/client";

export const getGame = gql`
  query Game($gameId: ID!) {
    game(id: $gameId) {
      id
      title
      platform
      reviews {
        rating
        content
        author {
          name
        }
      }
    }
  }
`;
