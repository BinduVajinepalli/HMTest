var nextCommands = {
    isValueInEstimatedRange: function(minValue, maxValue) {
      return (minValue < parseInt('@estimatedAmount') < maxValue);
    }
};

module.exports = {
    commands: [nextCommands],
    elements: {
      body: 'body',
      estimatedAmount: {
          selector: "h1.pricing-hero-unit_price-heading"
      }
    }
};
