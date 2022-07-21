const moment = require('moment');

module.exports = {
    // register new function
    ifCond: function(v1, operator, v2, options) {
        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '!=':
                return (v1 != v2) ? options.fn(this) : options.inverse(this);
            case '!==':
                return (v1 !== v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            case 'includes':
                return (v1 && v1.includes(v2)) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    },

    if_even: function(conditional) {
        if((conditional % 2) == 0) {
          return 'odd'
        } else {
          return 'even'
        }
    },

    formatDateTime: function(str, type) {
        let date;
        if (type === 1) {
            date = moment(str).format('DD.MM.YYYY');
        } else if (type === 2) {
            date = moment(str).format('DD.MM.YYYY, HH:mm');
        } else date = moment(str).format('DD.MM.YYYY, HH:mm:ss');


        return date;
    },

}
