// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    description: String
    authors: [String]
    bookId: String
    image: String
    link: String
    title: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookDetails): User
    removeBook(bookId: String): User 
    deleteUser(userId: String): User
  }

  input bookDetails {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
`;

// export the typeDefs
module.exports = typeDefs;

//saveBook(authors:[String],bookId: String, image: String,link: String,title: String): User