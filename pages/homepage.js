var nextCommands = {
    selectPostCode: function(postCode) {
      return this.waitForElementVisible('@body', 1000)
          .setValue('@txtPostCode', postCode);
    },

    selectAddress: function(address) {
      return this.waitForElementPresent('@mnuPostCode', 1000)
                .click('@mnuPostCode');
    },

    selectNumberOfBedrooms: function(noOfBedrooms) {
      if(noOfBedrooms == "2 bedrooms")
        this.click('@mnuTwoBedOption');
    },

    enterEmailAddress: function(email) {
      return this.setValue('@txtEmailAddress', email);
    },

    clickCalculate: function() {
      return this.click('@btnCalculate');
    },

    isValueInEstimatedRange: function(minValue, maxValue) {
      return (minValue < parseInt('@estimatedAmount') < maxValue);
    }
};

module.exports = {
    url: 'https://www.hostmaker.com',
    commands: [nextCommands],
    elements: {
        body: 'body',
        hostmakerLogo: {
          selector: "img.nav_logo"
        },
        txtPostCode: {
            selector: "input#calculator-street-address"
        },
        mnuPostCode: {
            selector: "div.pac-item"
        },
        mnuTwoBedOption: {
            selector: "select#calculator-bedrooms"
        },
        txtEmailAddress: {
            selector: "input#calculator-email"
        },
        btnCalculate: {
            selector: "button#calculate-income"
        },
        estimatedAmount: {
            selector: "h1.pricing-hero-unit_price-heading"
        }
    }
};
