let Images = [
    "https://media.discordapp.net/attachments/1019310937955647599/1027737617430757467/downtime_1.jpg",
    "https://media.discordapp.net/attachments/1019310937955647599/1027737617787273286/watchingtv_1.jpg",
    "https://media.discordapp.net/attachments/1019310937955647599/1027737618026336287/dollar_1.webp",
    "https://media.discordapp.net/attachments/1019310937955647599/1027737618428989481/global.png",
    "https://media.discordapp.net/attachments/1019310937955647599/1027737619087503491/Skins.jpg",
    "https://media.discordapp.net/attachments/1019310937955647599/1027737619334971462/Cosmetics.jpg",
    "https://media.discordapp.net/attachments/1019310937955647599/1027737619662123059/FortniteMP1.webp?width=1202&height=676"
]

let RandomTitles = [
    "RYLAND SMELLS LIKE CHEESE",
    "FUNNY MAN RUNS INFRONT OF TRAIN",
    "WOW VERY COOL SAUCE CODE"
]

const imgs = document.getElementsByTagName("img")

// Youtube Thumbnail Title
const yttext = document.getElementsByTagName("yt-formatted-string")

setTimeout(function () {
    for (let i = 0; i < imgs.length; i++) {
        const randomImg = Math.floor(Math.random() * Images.length);
        imgs[i].src = Images[randomImg];
    }

    for (let i = 0; i < yttext.length; i++) {
        const randomstring = Math.floor(Math.random() * RandomTitles.length);
        yttext[i].innerText = RandomTitles[randomstring];
    }
}, 3000);

