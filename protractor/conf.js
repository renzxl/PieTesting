exports.config ={
    directConnect:false,
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub', //you can change the default to something else if you want
    specs: [
        './smoke_tests/date-test-basic-specs.js',
        './smoke_tests/regress1-basic-specs.js'
    ], //you can list more than one specs
    suites: {
        smoke: './smoke_tests/*.specs.js',
        full: './**/*.specs.js', //run all of the tests that exists under protractor
        longRunning: './long_tests/long.test.specs.js' //specify specific file

    },
    multiCapabilities: [{
        'browserName': 'chrome'
    },
        //{
      //  'browserName': 'firefox'
    //}
    ],

    onPrepare: function () { //you can do other things, user login, screen setup

        browser.driver.manage().window().setPosition(0,0);
        browser.driver.manage().window().setSize(1280,720);
    },
    jasmineNodeOpts: { showColors: true }
};