const User = require('../models/User')
const Listing = require('../models/Listing');

const resolvers = {
    Query: {
      getUser: (parent, args, context, info) => {
        //blahblah
      },
      getListing: (parent, args, context, info) => {
        // Resolver logic for retrieving a listing
      },
      getAllListing: (parent, args, context, info) => {
        // Resolver logic for retrieving a listing
      },
      // Other query resolvers
    },
    Mutation: {
      createUser: async (parent, args, context, info) => {
        // Resolver logic for creating a user
        const user = await User.create({args});
        return user;
      },
      createListing: async (parent, args, context, info) => {
        // Resolver logic for creating a listing
        const listing = await Listing.create({args}); 

      },
      // Other mutation resolvers
    },
    // Other resolvers for custom types or fields
  };

