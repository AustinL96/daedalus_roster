// Importing required modules and models
const User = require('../models/User'); // Importing User model
const Listing = require('../models/Listing'); // Importing Listing model
const { GraphQLError } = require('graphql'); // Importing GraphQLError from GraphQL
const { sign } = require('jsonwebtoken'); // Importing sign function from jsonwebtoken

// Configuration for the token cookie
const cookieOptions = {
  httpOnly: true, // Ensures the cookie is accessible only through HTTP(S) requests, not JavaScript
  maxAge: 24 * 60 * 60 * 1000, // Cookie expiration time set to 1 day (24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
};

// Function to sign a JWT token
function signToken(user_id) {
  return sign(
    {
      user_id,
    },
    process.env.JWT_SECRET, // JWT secret key used for signing the token
    {
      expiresIn: '1d', // Token expiration set to 1 day
    }
  );
}

// GraphQL resolvers
const resolvers = {
  Query: {
    // Resolver for retrieving a user
    getUser: async (_, __, context) => {
      if (!context.user_id)
        return null; // If user_id is not available in the context, return null
      const user = await User.findById(context.user_id); // Find the user by user_id (assuming it's a MongoDB ObjectId)
      console.log(user);
      return user; // Return the retrieved user
    },
    // Resolver for retrieving a single listing
    getListing: async (parent, args, context, info) => {
      const listing = await Listing.findById(args.id); // Find the listing by its ID
      return listing; // Return the retrieved listing
    },
    // Resolver for retrieving all listings
    getAllListing: async () => {
      try {
        const listings = await Listing.find();
        return listings; // Return the listings array
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch listings');
      }
    }
    // Other query resolvers
  },
  Mutation: {
    // Resolver for creating a user
    createUser: async (parent, args, context, info) => {
      console.log(args);
      try {
        const user = await User.create(args); // Create a new user with the provided arguments
        const token = signToken(user._id); // Sign a JWT token using the user's ID
        context.res.cookie('token', token, cookieOptions); // Set the token as a cookie in the response with the specified options
        return user; // Return the created user
      } catch (error) {
        console.log(error);
        throw new GraphQLError('Email already in use'); // Throw a GraphQLError if the email is already in use
      }
    },
    // Resolver for user login
    loginUser: async (_, args, context) => {
      const user = await User.findOne({
        email: args.email, // Find a user with the provided email
      });
      if (!user)
        throw new GraphQLError('No user found with that email'); // Throw a GraphQLError if no user is found with the provided email
      const validPass = await user.validatePass(args.password); // Validate the provided password
      if (!validPass)
        throw new GraphQLError('Passwords do not match'); // Throw a GraphQLError if the passwords do not match

      const token = signToken(user._id); // Sign a JWT token using the user's ID
      context.res.cookie('token', token, cookieOptions)
      return user; // Return the authenticated user
    },
    // Resolver for user logout
    logoutUser: async (_, args, context) => {
      context.res.clearCookie('token'); // Clear the 'token' cookie in the response
      return true; // Return true to indicate successful logout
    },
    // Resolver for creating a listing
    createListing: async (parent, args, context, info) => {
      const listing = await Listing.create(args); // Create a new listing with the provided arguments
      return listing; // Return the created listing
    },
    updateUser: async (_, args, context, ____) => {
      try {
        if (!context.user_id) {
          return null;
        }
        const user = await User.findById(context.user_id);
        // console.log('******************************')
        // console.log(args);

        user.aboutMe = args.aboutMe;
        user.experience = args.experience;
        user.skills = args.skills;
        user.EduAndLic = args.EduAndLic;

        await user.save();
        console.log(user);
        return user;
      } catch (error) {
        console.error('Error updating the user:', error);
        throw new Error('Failed to update the user\'s fields');
      }
    }
  },
  // Other resolvers for custom types or fields
};

module.exports = resolvers;