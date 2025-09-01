const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/Listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listing.js");

const multer = require('multer');
const {storage} = require("../config/cloudConfig.js");
const upload = multer({ storage });

router
    .route("/")
    .get(wrapAsync(listingController.index)) // Index route
    .post( // Create route
        isLoggedIn, 
        // validateListing, 
        upload.single('listing[image]'),
        wrapAsync(listingController.createListing)
    );

// New Route
router.get(
    "/new", 
    isLoggedIn, 
    listingController.renderNewForm
);

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing)) // Show route
    .put( // Update Route
        isLoggedIn, 
        isOwner,
        upload.single('listing[image]'),
        // validateListing, 
        wrapAsync(listingController.updateListing)
    )
    .delete( // Delete Route
        isLoggedIn, 
        isOwner, 
        wrapAsync(listingController.destroyListing)
    );

// Edit Route
router.get(
    "/:id/edit", 
    isLoggedIn, 
    isOwner, 
    wrapAsync(listingController.renderEditForm)
);

module.exports = router;
