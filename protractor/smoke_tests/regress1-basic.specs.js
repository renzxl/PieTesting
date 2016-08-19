describe('Test regress1.html', function () {

    var RegressPage = require('../regress1/pages/create_element_pages');
    beforeEach(function(){
        browser.get('http://localhost:3002/regress1.html');
    });

    //browser.get('http://localhost:3002/regress1.html');
    //browser.waitForAngular();
    describe('check basic functionality', function () {

        var regressPage = new RegressPage();
        it('new button should exist', function () {
            expect(regressPage.button1.isPresent()).toBe(true);
        });

        it('Panel0', function(){
            expect(regressPage.Panel0.isPresent()).toBe(true);
        });

        it('Panel1', function(){
            expect(regressPage.Panel1.isPresent()).toBe(true);
        });



        it('check for input', function(){
            expect(regressPage.edit0.isPresent()).toBe(true);
            expect(regressPage.edit1.isPresent()).toBe(true);
            expect(regressPage.edit2.isPresent()).toBe(true);
            expect(regressPage.checkbox3.isPresent()).toBe(true);
            expect(regressPage.scleaning.isPresent()).toBe(true);


        });



        it('check for buttons', function(){

            expect(regressPage.state_buttons.isPresent()).toBe(true);
            expect(regressPage.New.isPresent()).toBe(true);
            expect(regressPage.Save.isPresent()).toBe(true);
            expect(regressPage.Cancel.isPresent()).toBe(true);
            expect(regressPage.Delete.isPresent()).toBe(true);

            expect(regressPage.nav_sbuttons.isPresent()).toBe(true);
            expect(regressPage.First.isPresent()).toBe(true);
            expect(regressPage.Previous.isPresent()).toBe(true);
            expect(regressPage.Next.isPresent()).toBe(true);
            expect(regressPage.Last.isPresent()).toBe(true);

            expect(regressPage.state_sbuttons0.isPresent()).toBe(true);
            expect(regressPage.New_0.isPresent()).toBe(true);
            expect(regressPage.Save_0.isPresent()).toBe(true);
            expect(regressPage.Cancel_0.isPresent()).toBe(true);
            expect(regressPage.Delete_0.isPresent()).toBe(true);

            expect(regressPage.state_sbuttons0.isPresent()).toBe(true);
            expect(regressPage.First_0.isPresent()).toBe(true);
            expect(regressPage.Previous_0.isPresent()).toBe(true);
            expect(regressPage.Next_0.isPresent()).toBe(true);
            expect(regressPage.Last_0.isPresent()).toBe(true);

        });
    });
});
