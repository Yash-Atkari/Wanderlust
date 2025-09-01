const { required } = require("joi");
const mongoose = require("mongoose");
const { type } = require("os");
const { comment } = require("postcss");
const Schema = mongoose.Schema;

const reviewSchema = Schema({
    comment: String,
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    cretedAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Review = mongoose.model("Review", reviewSchema); // Model
module.exports = Review;
