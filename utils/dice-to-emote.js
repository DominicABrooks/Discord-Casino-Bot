const genRandom = require('./generate-random.js');


module.exports = {
    toEmoteRolling: function() {
        random = genRandom.getRndInteger(1,6);
        // @TODO: make prettier using array and index later.
        // @TODO: make function take optional argument to generate multiple unique so no two gif are same utilizing new Set()
        switch(random)
        {
            case 1:
                roll_gif = "<a:rolling1:1055953312555475056>";
                break;
            case 2:
                roll_gif = "<a:rolling2:1055953313813770250>";
                break;
            case 3:
                roll_gif = "<a:rolling3:1055953314900095117>";
                break;
            case 4:
                roll_gif = "<a:rolling4:1055953316376494152>";
                break;
            case 5:
                roll_gif = "<a:rolling5:1055953317399908382>";
                break;
            case 6:
                roll_gif = "<a:rolling6:1055953356268511242>";
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
                face_emote = "<:1_:1055953194435477607>";
                break;
            case 2:
                face_emote = "<:2_:1055953195672813658>";
                break;
            case 3:
                face_emote = "<:3_:1055953197254070332>";
                break;
            case 4:
                face_emote = "<:4_:1055953198524923964>";
                break;
            case 5:
                face_emote = "<:5_:1055953199435092129>";
                break;
            case 6:
                face_emote = "<:6_:1055953200559169636>";
                break;
            default:
                console.log("Invalid Face - " + face);
        } 
        return face_emote;
    },
};
