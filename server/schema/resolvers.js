const User = require('../models/User')
const Listing = require('../models/Listing');

const resolvers = {
    Query: {
      getUser: async (parent, args, context, info) => {
        //blahblah
        const user = await User.findById(args.id);

        return user;
      },
      getListing: async (parent, args, context, info) => {
        // Resolver logic for retrieving a listing
        const listing = await Listing.findById(args.id);

        return listing;
      },
      getAllListing: async (parent, args, context, info) => {
        // Resolver logic for retrieving a listing
        const listings = await Listing.find();

        return listings;
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
      deleteListing: async  (parent, args, context, info) => {
        
        await Listing.findByIdAndDelete
      }
    },
    // Other resolvers for custom types or fields
  };

module.export = resolvers;