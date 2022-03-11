const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/more-accounts-answer', function (req, res) {

    // Make a variable and give it the value from 'moreUsers'
    var moreUsers = req.session.data['more-users']

    // Check whether the variable matches a condition
    if (moreUsers == "yes"){
      res.redirect('/vendor-account-management/manage-users/add-user')
    } else {
      res.redirect('/vendor-account-management/account-home/account-home')
    }
  
  })






// Add your routes here - above the module.exports line
router.post('/vendor-account-management/product-details/pricing/commitment-step-1-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var pricingPeriod = req.session.data['commitment-period'] 

  // Check whether the variable matches a condition
  if (pricingPeriod  == "monthly"){
    // Send user to next page
    res.redirect('commitment/commitment-monthly')
  } else if (pricingPeriod  == "annually"){
      // Send user to next page
      res.redirect('commitment/commitment-annually')
  } else {
    // Send user to ineligible page
    res.redirect('commitment/commitment-all-answers')
  }


})



// Add your routes here - above the module.exports line
router.post('/vendor-account-management/product-details/pricing/trial-step-1-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var pricingPeriod1 = req.session.data['trial-period'] 

  // Check whether the variable matches a condition
  if (pricingPeriod1  == "yes"){
    // Send user to next page
    res.redirect('trial/trial-duration')
  } else {
    // Send user to ineligible page
    res.redirect('../pricing/pricing-url')
  }


})

// Add your routes here - above the module.exports line
router.post('/vendor-account-management/product-details/pricing/discount-step-1-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var pricingPeriod2 = req.session.data['discount-period'] 

  // Check whether the variable matches a condition
  if (pricingPeriod2  == "yes"){
    // Send user to next page
    res.redirect('discounts/discount-duration')
  } else {
    // Send user to ineligible page
    res.redirect('../pricing/pricing-url')
  }


})



// Add your routes here - above the module.exports line
router.post('/vendor-account-management/product-details/pricing/additional-step-1-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var pricingPeriod7 = req.session.data['additional-step'] 

  // Check whether the variable matches a condition
  if (pricingPeriod7  == "yes"){
    // Send user to next page
    res.redirect('additional/additional-step-1-yes')
  } else {
    // Send user to ineligible page
    res.redirect('../pricing/pricing-url')
  }


})




// Add your routes here - above the module.exports line
router.post('/vendor-account-management/product-details/pricing/add-discount-step-1-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var pricingPeriod3 = req.session.data['add-discount-period'] 

  // Check whether the variable matches a condition
  if (pricingPeriod3  == "yes"){
    // Send user to next page
    res.redirect('additionaldiscounts/add-discount-contract-duration')
  } else {
    // Send user to ineligible page
    res.redirect('../pricing/pricing-url')
  }


})




// Add your routes here - above the module.exports line
router.post('/vendor-account-management/product-details/pricing/add-discount-contract-step-1-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var pricingPeriod6 = req.session.data['add-discount-duration'] 

  // Check whether the variable matches a condition
  if (pricingPeriod6  == "yes"){
    // Send user to next page
    res.redirect('additionaldiscounts/add-discount-duration')
  } else {
    // Send user to ineligible page
    res.redirect('../pricing/pricing-url')
  }


})



// Add your routes here - above the module.exports line
router.post('/vendor-account-management/product-details/pricing/add-discount-terms-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var pricingPeriod4 = req.session.data['add-discount-terms'] 

  // Check whether the variable matches a condition
  if (pricingPeriod4  == "yes"){
    // Send user to next page
    res.redirect('additionaldiscounts/add-discount-duration-period')
  } else {
    // Send user to ineligible page
    res.redirect('../pricing/pricing-url')
  }


})



// Add your routes here - above the module.exports line
router.post('/vendor-account-management/product-details/pricing/licence-step-1-answer', function (req, res) {

  // Make a variable and give it the value from 'new-to-software'
  var pricingPeriod5 = req.session.data['licence-period'] 

  // Check whether the variable matches a condition
  if (pricingPeriod5  == "yes"){
    // Send user to next page
    res.redirect('additionaldiscounts/add-discount-ranges')
  } else {
    // Send user to ineligible page
    res.redirect('../pricing/pricing-url')
  }


})






module.exports = router
