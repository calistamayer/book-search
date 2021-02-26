// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        // bookId: not the _id but the book's id value returned from Google's Book API
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Auth {
        token: String
        user: User
    }

    type Query {
        me: User
    }
`;

// export the typeDefs
module.exports = typeDefs;