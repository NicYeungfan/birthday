// 2024/03/02 https://github.com/AJLoveChina/birthday
var config = {
    // Memory to Nic&&Vicky (杨帆&&毛倩)
    // 
    texts: [
        "TO",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "MY DEAR",  // 同上...
        "LOVE",
        "WE",
        "WILL",
        "BE",
        "HAPPY",
        "YOU",
        "WILL",
        "BE",
        "LUCKY~~",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "LOVE": "./imgs/xiaokeai.png",
        // "LUCKY": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "YOU&&ME",
        story: "A MESSAGE FOR YOU",
    }
};
