const { User, Book } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: { 
        // get a single user by either their id or their username
        user: async (parent, { username, _id }) => {
            return User.findOne({ username })
                .select('-__v -password');
        }
    }
};

module.exports = resolvers;