module.exports = function() {
    this.New = element(by.id('New'));
    this.Save = element(by.id('Save'));

    this.Cancel = element(by.id('Cancel'));

    this.Delete = element(by.id('Delete'));
    this.First = element(by.id('First'));
    this.Previous = element(by.id('Previous'));
    this.Next = element(by.id('Next'));
    this.Last = element(by.id('Last'));
    this.datePicker  = element(by.css('[ng-click="dp_date_Arrival___sDate_open()"]'));
    this.dateBox = element(by.model("sourceManager.get('p_content').scratch['Arrival___sDate']"));

    this.selectTodaysDate = function(){
        this.datePicker.click();//click the date picker

        var enter = browser.actions().sendKeys(protractor.Key.ENTER);
        enter.perform(); //hit enter key. This will get today's date
    }
};
