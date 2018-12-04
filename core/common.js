const common = {
  useStringFormat() {
    console.info("String class is added 'format' function. Use like '{0} of {1}'.format('The king', 'fighter')");
    String.prototype.format = function() {
      let formatted = this;
      for (var arg in arguments) {
        formatted = formatted.replace('{' + arg + '}', arguments[arg]);
      }
      return formatted;
    };
  }
};

module.exports = common;
