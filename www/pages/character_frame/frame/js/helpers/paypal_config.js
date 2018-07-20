var paypal_config = {
    user : {
        email : "idnovant.it@gmail.com",
        username : "idnovant.it_api1.gmail.com",
        password : "4FR3KWDM8RAQQFU4",
        signature : "AFcWxV21C7fd0v3bYYYRCpSSRl31AYvt78F4Gc1wnnS2Yy6SSp93oYY8",
        access_token:"access_token$sandbox$5dqfmfmnkq4mw8mk$78185c463aa8d6dd2358287c877aa725",
    },
    facilitator : {
        email : "idnovant.it-facilitator@gmail.com",
        username : "idnovant.it-facilitator_api1.gmail.com",
        password : "PMVJYG5B6GB9F8CA",
        signature : "AFcWxV21C7fd0v3bYYYRCpSSRl31AuayZh1gs4R1NqSwSQWJw3Eiaaij"
    },
    app_sandbox : {
        email : "idnovant.it-facilitator@gmail.com",
        client_id : "AbfnFFUjG3tt0MG2jflZacgFqjD5YBEWBTZ-EoTtjt-2H5qNwnYjH7AkLN_7STqv_TCljCoyW2x365HJ",
        secret : "EGrxeC9tfst-WkvFHfjPGPcbYT6pzkbWs7k9VBYsXgan91z2hUpiiC5elC2YUefV_KGgUE2dPdhamuhv",
        return_url : "http://www.landscape-viewer.com/paypal/payment"
    },
    init:function(){
        var clientIDs = {
            "PayPalEnvironmentProduction": "YOUR_PRODUCTION_CLIENT_ID",
            "PayPalEnvironmentSandbox": "AbfnFFUjG3tt0MG2jflZacgFqjD5YBEWBTZ-EoTtjt-2H5qNwnYjH7AkLN_7STqv_TCljCoyW2x365HJ"
        };
        PayPalMobile.init(clientIDs, paypal_config.onPayPalMobileInit);
    },
    onPayPalMobileInit : function(){
        PayPalMobile.prepareToRender("PayPalEnvironmentSandbox", paypal_config.configuration(), paypal_config.onPrepareRender);
    },
    configuration : function () {
        // for more options see `paypal-mobile-js-helper.js`
        var config = new PayPalConfiguration({merchantName: "My test shop", merchantPrivacyPolicyURL: "https://idkids.landscape-viewer.com/policy", merchantUserAgreementURL: "https://idkids.landscape-viewer.com/api/nse/agreement"});
        return config;
    },
    onPrepareRender : function() {
        console.log('onPrepareRender');
        // buttons defined in index.html
        //  <button id="buyNowBtn"> Buy Now !</button>
        //  <button id="buyInFutureBtn"> Pay in Future !</button>
        //  <button id="profileSharingBtn"> ProfileSharing !</button>
        //  <button id="cardScanBtn">Advanced: Use card.io scan only</button>
        
        // single payment
        //PayPalMobile.renderSinglePaymentUI(paypal_config.createPayment("5.00", "USD", "TS_WHITE", "0.00", "0.00"), paypal_config.onSuccesfulPayment, paypal_config.onUserCanceled);
        
        /* NOTE :USD ONLY DONT KNOW WHY HAVE TO MAKE CONVERSION BEFORE SEND REQUEST */
        
        // future payment
        //PayPalMobile.renderFuturePaymentUI(app.onAuthorizationCallback, app.onUserCanceled);

        // profile sharing
        //PayPalMobile.renderProfileSharingUI(["profile", "email", "phone", "address", "futurepayments", "paypalattributes"], app.onAuthorizationCallback, app.onUserCanceled);
        

        // card.io scanning independent of paypal payments. 
        // This is used for cases where you only need to scan credit cards and not use PayPal as funding option.
        /*CardIO.scan(
        {
        "requireExpiry": true,
        "requireCVV": false,
        "requirePostalCode": false,
        "restrictPostalCodeToNumericOnly": true
        },
        app.onCardIOComplete,
        app.onUserCanceled
        );*/
    },
    createPayment : function (amount, devise, product_name, amount_2, amount_3) {
        // for simplicity use predefined amount
        // optional payment details for more information check [helper js file](https://github.com/paypal/PayPal-Cordova-Plugin/blob/master/www/paypal-mobile-js-helper.js)
        //devise : "USD"
        // amount : "50.00"
        var paymentDetails = new PayPalPaymentDetails(amount, amount_2, amount_3);
        var payment = new PayPalPayment(amount, devise, product_name, "Sale", paymentDetails);
        return payment;
    },
    onSuccesfulPayment : function(payment) {
        console.log("payment success: " + JSON.stringify(payment, null, 4));
    },
    onAuthorizationCallback : function(authorization) {
        console.log("authorization: " + JSON.stringify(authorization, null, 4));
    },
    onUserCanceled : function(result) {
        console.log("onUserCanceled : ", result);
    },
    onCardIOComplete: function(card) {
        console.log("Card Scanned success: " + JSON.stringify(card, null, 4));
    }
}