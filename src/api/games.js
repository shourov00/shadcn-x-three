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

export const getGames = gql`
  query Games {
    games {
      id
      title
    }
  }
`;

export const deleteGame = gql`
  mutation DeleteMutation($deleteGameId: ID!) {
    deleteGame(id: $deleteGameId) {
      response {
        code
        success
        message
      }
    }
  }
`;

export const addGame = gql`
  mutation AddMutation($game: AddGameInput!) {
    addGame(game: $game) {
      response {
        code
        success
        message
      }
      game {
        id
        title
      }
    }
  }
`;
