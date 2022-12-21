module.exports = {
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
