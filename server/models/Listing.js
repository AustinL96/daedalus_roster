const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');



const listingSchema = new Schema({
  jobName: {
    type: String,
    required: true,
    trim: true
  },
  companyName: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },  
  salary: {
    type: String,
    required: true,
    trim: true
  },
  datePosted: {
    type: String,
    // required: true,
    trim: true
  },
  jobDetails: {
    type: String,
    required: true,
    trim: true
  },
  jobDescription: {
    type: String,
    required: true,
    trim: true
  },
  appliedUser: [
    {
      type: String,
      trim:true
    }
  ],
  creatorId: {
    type: Schema.Types.ObjectId
  }
  // appliedUser: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'user'
  //   }
  // ]
});


const Listing = model('listing', listingSchema);


module.exports = Listing;