tarteaucitron.init({
	
    "privacyUrl": privacy_policy_page_url[0], /* Privacy policy url - Get the slug from wp_localize_script in functions.php */
    "bodyPosition": "bottom", /* or top to bring it as first element for accessibility */

    "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
    "cookieName": "tarteaucitron", /* Cookie name */
    
    "orientation": "middle", /* Banner position (top - bottom) */
       
    "groupServices": false, /* Group services by category */
    "showDetailsOnClick": true, /* Click to expand the description */
    "serviceDefaultState": "wait", /* Default state (true - wait - false) */
                           
    "showAlertSmall": false, /* Show the small banner on bottom right */
    "cookieslist": false, /* Show the cookie list */
                           
    "closePopup": false, /* Show a close X on the banner */

    "showIcon": true, /* Show cookie icon to manage cookies */
    //"iconSrc": "", /* Optionnal: URL or base64 encoded image */
    "iconPosition": "BottomRight", /* BottomRight, BottomLeft, TopRight and TopLeft */

    "adblocker": false, /* Show a Warning if an adblocker is detected */
                           
    "DenyAllCta" : true, /* Show the deny all button */
    "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
    "highPrivacy": true, /* HIGHLY RECOMMANDED Disable auto consent */
                           
    "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */

    "removeCredit": true, /* Remove credit link */
    "moreInfoLink": true, /* Show more info link */

    "useExternalCss": true, /* If false, the tarteaucitron.css file will be loaded */
    "useExternalJs": false, /* If false, the tarteaucitron.js file will be loaded */

    //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */
                          
    "readmoreLink": "", /* Change the default readmore link */

    "mandatory": true, /* Show a message about mandatory cookies */
    "mandatoryCta": true, /* Show the disabled accept button when mandatory on */
    
    //"customCloserId": "", /* Optional a11y: Custom element ID used to open the panel */
          
    "googleConsentMode": false, /* Enable Google Consent Mode v2 for Google ads and GA4 */
          
    "partnersList": false /* Show the number of partners on the popup/middle banner */
    
});

/***** HANDLE GA4 *****/
tarteaucitron.user.gtagUa = 'G-MJ7EC5VL60';
tarteaucitron.user.gtagMore = function () { /* add here your optionnal gtag() */ };
(tarteaucitron.job = tarteaucitron.job || []).push('gtag');

/***** HANDLE YOUTUBE *****/
(tarteaucitron.job = tarteaucitron.job || []).push('youtube');
