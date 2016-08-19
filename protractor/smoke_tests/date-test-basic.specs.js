
describe('Test date-test.html', function () {


    var DataPage = require('../date-test/pages/create_element_pages');

    beforeEach(function(){
        browser.get('http://localhost:3002/date-test.html');

    });



    //browser.waitForAngular();
    describe('new button', function() {

        var dataPage = new DataPage();

        it('new button should exist', function () {
            //expect(element(by.id('New')).isPresent()).toBe(true);

            expect(dataPage.New.isPresent()).toBe(true);
        });

        it('save button should exist', function () {
            expect(dataPage.Save.isPresent()).toBe(true);
        });


        it('Cancel button should exist', function(){
            expect(dataPage.Cancel.isPresent()).toBe(true);
        });

        it('Delete button should exist', function(){
            expect(dataPage.Delete.isPresent()).toBe(true);
        });

        it('First button should exist', function(){
            expect(dataPage.First.isPresent()).toBe(true);
        });

        it('Previous button should exist', function(){
            expect(dataPage.Previous.isPresent()).toBe(true);
        });

        it('Next button should exist', function(){
            expect(dataPage.Next.isPresent()).toBe(true);
        });

        it('Last button should exist', function(){
            expect(dataPage.Last.isPresent()).toBe(true);
        });
        //if do a click. must tell the browser browser.waitForAngular();

        it('The text box contains todays date', function() {


            dataPage.selectTodaysDate();

            var name = dataPage.dateBox;
            name.getAttribute('value').then(function(text){

                var now = new Date();
                var todayUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
                var todayUTCCompare = todayUTC.toISOString().substring(0, 10);
                expect(text).toEqual(todayUTCCompare);



            });




        });

    });



});