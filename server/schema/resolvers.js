const User = require('../models/User')
const Listing = require('../models/Listing');

const { sign } = require('jsonwebtoken')

const cookieOptions = {
  httpOnly: true,
  maxAge: 24 * 60 * 60 * 1000 //1 day expiration
}

function signToken(user_id) {
  return sign({
    user_id,

  }, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })
}

const resolvers = {
    Query: {
      getUser: async (_, __, context) => {
        if (!context.user_id)
          return null
        const user = await User.findById(context.user_id) //remember to populate, possibly
        console.log(user)
        return user
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
        console.log(args)
        const user = await User.create(args);
        const token = signToken(user._id);
        context.res.cookie('token', token, cookieOptions)
        return user;
      },
      createListing: async (parent, args, context, info) => {
        // Resolver logic for creating a listing
        const listing = await Listing.create(args); 

        return listing;
      },
      // Other mutation resolvers
      // deleteListing: async  (parent, args, context, info) => {
        
      //   await Listing.findByIdAndDelete
      // }
    },
    // Other resolvers for custom types or fields
  };

module.exports = resolvers;
