var express = require('express');
var promotionController = require('../controllers/promotionController.js');
var userController = require('../controllers/userController.js');
var router = express.Router();

/*
 * GET
 */
router.get('/participation/info', promotionController.participationInfo);



/*
 * POST
 */
router.post('/participate', promotionController.doParticipate);


/*
 * POST
 */
router.post('/user/:userId/enablepush', userController.enablePushForUser);


/*
 * POST
 */
router.post('/report/:userId/:promoId', promotionController.reportPromotion);


/*
 * PUT
 */
router.put('/update-profile/:userId', userController.updateProfile);


/*
 * POST
 */
router.put('/update-profile-settings/:userId', userController.updateProfileSettings);


module.exports = router;