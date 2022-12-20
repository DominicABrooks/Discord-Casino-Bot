module.exports = {
    getRndInteger: function (min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    },
    rollDice: function (number, sides) {
        const diceRolls = [];
        for (let i = 0; i < number; i++) {
          diceRolls.push(Math.floor(Math.random() * sides) + 1);
        }
        return diceRolls;
    }
};
