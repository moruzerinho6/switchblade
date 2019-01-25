const Intl = require('intl')
Intl.__disableRegExpRestore()

module.exports = class MiscUtils {
  static findArrayDuplicates (arr) {
    return arr.filter((value, index) => {
      return arr.indexOf(value) !== index
    })
  }
  
  formatNumber (value, language = 'en-US') {
    const formatter = new Intl.NumberFormat(language)
    return formatter.format(value)
  }
}
