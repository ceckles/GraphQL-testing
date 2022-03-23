const { gql } = require('apollo-server');

const typeDefs = gql `

    type User{
        id: ID!
        name: String!
        username: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favoriteMovies: [Movie]
    }

    type Movie{
        id: ID!
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }


    type Query{
        users: [User!]!
        user(id: ID!): User!

        movies: [Movie!]!
        movie(name: String!): Movie!
    }


    input CreateUserInput {
        name: String!
        username: String!
        age: Int!
        nationality: Nationality = UNITED_STATES
    }
    input UpdateUserInput {
        id: ID!
        name: String
        username: String
        age: Int!
        nationality: Nationality
    }

    input CreateMovieInput {
        name: String!
        yearOfPublication: Int!
        isInTheaters: Boolean!
    }
    input UpdateMovieInput {
        id: ID!
        name: String
        yearOfPublication: Int
        isInTheaters: Boolean
    }

    type Mutation {

        createUser(input: CreateUserInput!): User!
        updateUser(input: UpdateUserInput!): User!

        createMovie(input: CreateMovieInput!): Movie!
        updateMovie(input: UpdateMovieInput!): Movie!
    }


    enum Nationality{
        BRAZIL
        CANADA
        MEXICO
        UNITED_STATES
    }

`;
module.exports = { typeDefs };