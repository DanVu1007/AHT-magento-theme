var config = {
    map: {
        '*': {
            'scriptName': 'AHT_StyleGuide_theme/js/scriptname'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/model/shipping-save-processor/payload-extender': {
                'AHT_StyleGuide_theme/js/model/shipping-save-processor/payload-extender-mixin': true
            }
        }
    },
    paths: {
        slick: 'js/slick.min'
    },
    shim: {
        slick: {
            deps: ['jquery']
        }
    }

};