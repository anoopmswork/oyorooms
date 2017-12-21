var express = require('express');
var router = express.Router();
const expressJwt = require('express-jwt');  
const authenticate = expressJwt({secret : 'server secret'});

var hotel_controller =require('../controllers/hotel/hotelController');

//Amenity routes
router.post('/amenity',authenticate,hotel_controller.create_amenity);
router.get('/amenity',authenticate,hotel_controller.get_amenities);
router.get('/amenity/:amenityId',authenticate,hotel_controller.specific_amenity);
router.delete('/amenity/:amenityId',authenticate,hotel_controller.delete_amenity);

//Hotel routes
router.post('/hotel',authenticate,hotel_controller.create_hotel);

module.exports = router;