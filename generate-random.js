module.exports = {
    getRndInteger: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    },
};
