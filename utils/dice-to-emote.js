const genRandom = require('./generate-random.js');


module.exports = {
    toEmoteRolling: function() {
        random = genRandom.getRndInteger(1,6);
        // @TODO: make prettier using array and index later.
        switch(random)
        {
            case 1:
                roll_gif = "<a:rolling:1054957668097339462>";
                break;
            case 2:
                roll_gif = "<a:rolling2:1055106503952060536>";
                break;
            case 3:
                roll_gif = "<a:rolling3:1055107508664029224>";
                break;
            case 4:
                roll_gif = "<a:rolling4:1055104192735346719>";
                break;
            case 5:
                roll_gif = "<a:rolling5:1055104194085933097>";
                break;
            case 6:
                roll_gif = "<a:rolling6:1055104194954145824>";
                break;
            default:
                console.log("Invalid Face - " + face);
        }
        return roll_gif;
    },
    toEmote: function (face) {
        switch(face) 
        {
            case 1:
                face_emote = "<:1_:1054951696612196452>";
                break;
            case 2:
                face_emote = "<:2_:1054954108525760533>";
                break;
            case 3:
                face_emote = "<:3_:1054954158849003632>";
                break;
            case 4:
                face_emote = "<:4_:1054954191447130215>";
                break;
            case 5:
                face_emote = "<:5_:1054954223936217108>";
                break;
            case 6:
                face_emote = "<:6_:1054954250511327252>";
                break;
            default:
                console.log("Invalid Face - " + face);
        } 
        return face_emote;
    },
};
