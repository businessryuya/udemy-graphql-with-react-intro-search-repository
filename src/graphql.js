import gql from 'graphql-tag';

export const ME = gql`
query me {
  user(login: "businessryuya") {
    name
    avatarUrl
  }
}
`