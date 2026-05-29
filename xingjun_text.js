/**
 * 互动古文教学平台 - 《行军九日思长安故园》原文核心词解数据包
 */

const poemData = [
    // 第一句：强欲登高去，
    { text: "强", py: "qiǎng", zh: "勉强。这里指诗人在战乱、行军中勉强撑起心情，依循重阳节的习俗去登高。", en: "Reluctantly / forcing oneself", exam: true },
    { text: "欲", py: "yù", zh: "想要、准备。", en: "want to" },
    { text: "登高", py: "dēng gāo", zh: "中国传统节日重阳节（九月九日）的习俗，人们登高远眺、插茱萸、祈求平安。", en: "climb a high place (Double Ninth Festival tradition)", exam: true },
    { text: "去", py: "qù", zh: "前往、前去。", en: "to go" },
    { text: "，", punc: true },

    // 第二句：无人送酒来。
    { text: "无人", py: "wú rén", zh: "没有亲朋好友。暗示身处战乱军旅之中，孤独凄凉。", en: "no one" },
    { text: "送酒", py: "sòng jiǔ", zh: "典出“白衣送酒”。指重阳节没有像当年陶渊明那样，有王弘派白衣使者送酒来的名士雅趣。", en: "send wine (allusion to Tao Yuanming)", exam: true },
    { text: "来", py: "lái", zh: "送过来。", en: "to come" },
    { text: "。", punc: true },

    // 第三句：遥怜故园菊，
    { text: "遥", py: "yáo", zh: "遥远地。形容行军途中与家乡长安之间相隔千山万水。", en: "from afar" },
    { text: "怜", py: "lián", zh: "怜惜、怀念、想念。表达诗人对饱受战火摧残的家乡的深切同情与眷恋。", en: "pity / yearningly cherish", exam: true },
    { text: "故园", py: "gù yuán", zh: "故乡、家园，这里特指当时正被安史之乱叛军占领的国都长安。", en: "hometown / homeland (referring to Chang'an)", exam: true },
    { text: "菊", py: "jú", zh: "菊花。重阳节赏菊是传统，这里的菊花凝聚了诗人的思乡之情。", en: "chrysanthemums" },
    { text: "，", punc: true },

    // 第四句：应傍战场开。
    { text: "应", py: "yīng", zh: "应该、大概、一定是。透露出一种无可奈何的猜测与痛心。", en: "must be / probably" },
    { text: "傍", py: "bàng", zh: "靠近、依傍。这里指菊花开在战场旁边。", en: "beside / next to", exam: true },
    { text: "战场", py: "zhàn chǎng", zh: "指当时沦为安史之乱两军厮杀之地的长安。将美好的菊花与残酷的战场并提，惊心动魄。", en: "battlefield", exam: true },
    { text: "开", py: "kāi", zh: "开放、盛开。", en: "bloom" },
    { text: "。", punc: true }
];

console.log("成功加载：xingjun_text 原文数据包");
