const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');
const home = client.page.homepage();
const estimationPage = client.page.estimationPage();

defineSupportCode(({ Given, Then, When }) => {

  Given(/^I am on Hostmaker website$/, () => {
      return home
        .navigate()
        .waitForElementVisible('@body', 1000)
        .assert.elementPresent('@hostmakerLogo');
  });

  When(/^I enter my postcode "(.*?)"$/, (postCode) => {
      return home
            .selectPostCode(postCode);
  });

  When(/^I select "(.*?)" as my address$/, (address) => {
      return home
            .selectAddress(address);
  });

  When(/^I select "(.*?)" from the number of bedrooms option$/, (noOfBedrooms) => {
      return home
            .selectNumberOfBedrooms(noOfBedrooms);
  });

  When(/^I enter email address as "(.*?)"$/, (email) => {
      return home
            .enterEmailAddress(email);
  });

  When(/^I click calculate$/, () => {
      home.clickCalculate();
      return estimationPage
              .waitForElementVisible('@body', 1000);
  });

  Then(/^I should see the estimate value is between "(.*?)" and "(.*?)"$/, (minEstimateValue, maxEstimateValue) => {
    result = estimationPage.isValueInEstimatedRange(minEstimateValue, maxEstimateValue);
    return estimationPage
            .assert.equal(result, true);
  });

});
