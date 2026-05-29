/**
 * 互动古文教学平台 - 《行军九日思长安故园》简答题特训题库 (5题高阶全引导·纯净终极版)
 */

const shortQData = [
    {
        id: "T1",
        qZh: "诗人在第一句中写到重阳节想去登高，却用了一个“强”字，请引导学生思考这个字背后的沉重心情。",
        qPy: "shī rén zài dì yī jù zhōng xiě dào chóng yáng jié xiǎng qù dēng gāo què yòng le yí gè qiǎng zì qǐng yǐn dǎo xué shēng sī kǎo zhè gè zì bèi hòu de chén zhòng xīn lǐ",
        qEn: "The poet writes about climbing high in line 1 but deploys the modifier 'qiǎng (强)'. Please guide students to realize the profound grief behind this choice.",
        sZh: [
            "1. 第一步：正常大平盛世的重阳节，人们去登高远眺时心情应该是怎样的？",
            "2. 第二步：结合安史之乱的历史背景，诗人此时正在随军远征，一路上会看到哪些景象？",
            "3. 第三步：在如此内忧外患、身心俱疲的情况下，这个“强（勉强）”字反映了他怎样的内心挣扎？"
        ],
        sPy: [
            "yī dì yī bù zhèng cháng dà píng shèng shì de chóng yáng jié rén men qù dēng gāo yuǎn tiào shí xīn qíng yīng gāi shì zěn yàng de",
            "èr dì èr bù jié hé ān shǐ zhī luàn de lì shǐ bèi jǐng shī rén cǐ shí zhèng suí jūn yuǎn zhēng yí lù shàng huì kàn dào nǎ xiē jǐng xiàng",
            "sān dì sān bù zài rú cǐ nèi yōu wài huàn shēn xīn jù pí de qíng kuàng xià zhè gè qiǎng miǎn qiǎng zì fǎn yìng le tā zěn yàng de nèi xīn zhèng zhá"
        ],
        sEn: "Step 1: In a peaceful era, what should people's emotional state be when climbing mountains during festivals?<br>Step 2: Tied to the rebellion background, the poet is on a harsh military march. What sights surround him?<br>Step 3: Trapped in national turmoil and total exhaustion, what mental struggle does this word 'qiǎng' reveal?",
        aZh: "一个“强”字极为沉重。在太平盛世，重阳登高是欢快自如的；但在安史之乱的战火硝烟与艰苦行军中，诗人颠沛流离、国破家亡。此时他根本没有过节的闲情逸致，却为了依循传统而“勉强”撑起精神前去。这个字反衬出他内心的极度凄凉、沉重与万般无奈。",
        aPy: "yí gè qiǎng zì jí wéi chén zhòng zài tài píng shèng shì chóng yáng dēng gāo shì huān kuài zì rú de dàn zài ān shǐ zhī luàn de zhàn huǒ xiāo yān yǔ jiān kǔ xíng jūn zhōng shī rén diān pèi liú lí guó pò jiā wáng cǐ shí tā gēn běn méi yǒu guò jié de xián qíng yì zhì què wèi le yī xún chuán tǒng ér miǎn qiǎng chēng qǐ jīng shén qián qù zhè gè zì fǎn chèn chū tā nèi xīn de jí dù qī liáng chén zhòng yǔ wàn bān wú nài",
        aEn: "The single word 'qiǎng' carries immense weight. During peacetime, festival hiking is joyful; but under the fires of rebellion and brutal marches, Cen Shen is displaced and broken. He lacks any true casual spirit but 'forces' his consciousness to preserve tradition, reflecting severe emotional grief and helplessness."
    },
    {
        id: "T2",
        qZh: "如何理解“无人送酒来”一句中所使用的文学典故及其传递的孤独感？",
        qPy: "rú hé lǐ jiě wú rén sòng jiǔ lái yī jù zhōng suǒ shǐ yòng de wén xué diǎn gù jí qí chu端 dì de gū dú gǎn",
        qEn: "How should we unpack the historical allusion utilized in 'no one to bring wine' and the isolation it conveys?",
        sZh: [
            "1. 第一步：这句诗化用了古代哪位隐逸名人重阳节有白衣使者及时送酒的温情故事？",
            "2. 第二步：诗人在战场军旅的艰苦环境下，能够享受到这种名士清高、老友送酒的雅趣吗？",
            "3. 第三步：“无人”两个字，除了写没有酒喝，更深刻地戳中了诗人在异乡战乱中的什么处境？"
        ],
        sPy: [
            "yī dì yī bù zhè jù shī huà yòng le gǔ dài nǎ wèi yǐn yì míng rén chóng yáng jié yǒu bái yī shǐ zhě jí shí sòng jiǔ de wén qíng gù指示",
            "èr dì èr bù shī rén zài zhàn chǎng jūn lǚ de jiān kǔ huán jìng xià néng gòu xiǎng shòu dào zhè zhǒng míng shì qīng gāo lǎo yǒu sòng jiǔ de yǎ qù ma",
            "sān dì sān bù wú rén liǎng gè zì chú le xiě méi yǒu jiǔ hē gèng shēn kè de chuō zhòng le shī rén zài yì xiāng zhàn luàn zhōng de shén me chǔ jìng"
        ],
        sEn: "Step 1: Which recluse's touching legend of a messenger arriving with wine on Double Ninth does this borrow?<br>Step 2: Under raw military marching, can Cen Shen experience such elite peacetime aesthetic connections?<br>Step 3: Beyond lacking wine, what deep existential trauma of the poet does 'wú rén (no one)' expose?",
        aZh: "此句深层化用了晋代隐士陶渊明在重阳节无酒时，江州刺史王弘特派“白衣使者”及时送美酒而至的清高典故。岑参身处金戈铁马、风沙蔽日的艰苦军旅中，残酷的战乱斩断了所有的名士风流与亲友温情。一个“无人”不仅写出了无酒可饮的节日遗憾，更深刻刻画了战火中举目无亲、孤独伶仃的漂泊处境。",
        aPy: "cǐ jù shēn céng huà yòng le jìn dài yǐn shì táo yuān míng zài chóng yáng jié wú jiǔ shí jiāng zhōu cì shǐ wáng hóng tè pài bái yī shǐ zhě jí shí sòng měi jiǔ ér zhì de qīng gāo diǎn gù cén shān shēn chǔ jīn gē tiě mǎ fēng shā bì rì de jiān kǔ jūn lǚ zhōng cán kù de zhàn luàn zhǎn duàn le suǒ yǒu de míng shì fēng liú yǔ qīn yǒu wén qíng yí gè wú rén bù jǐn xiě chū le wú jiǔ kě yǐn de jié rì yí hàn gèng shēn kè kè huà le zhàn huǒ zhōng jǔ mù wú qīn gū dú líng dīng de piāo bó chǔ jìng",
        aEn: "This invokes Tao Yuanming's famous historical episode where an official dispatched a messenger with wine. Locked in bleak, dusty military camps, Cen Shen's wartime existence strips away all refined leisure and friendship. 'No one' registers more than missing wine; it flags his profound, absolute isolation amidst a world on fire."
    },
    {
        id: "T3",
        qZh: "品读“遥怜故园菊”一句，其中一个“怜”字（怜惜/怀念）浸透了诗人怎样的复杂情感？",
        qPy: "pǐn dú yáo lián gù yuán jú yī jù qǐng fān xī qī zhōng yí gè lián zì zài shū qíng shàng de jīng miào zhī chù",
        qEn: "Appreciate line 3's 'pity/yearn (怜)'. What intricate layering of feelings does this single character compress?",
        sZh: [
            "1. 第一步：“遥怜”说明家乡就在眼前，还是在极度遥远、无法回去的战火沦陷区？",
            "2. 第二步：诗人“怜惜”的仅仅是那一朵朵美丽的菊花吗？菊花在诗中代表着什么？",
            "3. 第三步：对家乡菊花的这份爱怜，实际上转移并升华成了对家乡什么人和国家的什么情感？"
        ],
        sPy: [
            "yī dì yī bù yáo lián shuō míng jiā xiāng jiù zài yǎn qián hái shì zài jí dù yáo yuǎn wú fǎ huí qù de zhàn huǒ lún xiàn qū",
            "èr dì èr bù shī rén lián xī de jǐn jǐn shì nà yī duǒ duǒ měi lì de jú huā ma jú huā zài shī zhōng dài biǎo zhe shén me",
            "sān dì sān bù duì jiā xiāng jú huā de zhè fèn ài lián shí jì shàng zhuǎn yí bìng shēng huá chéng le duì jiā xiāng shén me rén hé guó jiā de shén me qíng gǎn"
        ],
        sEn: "Step 1: Does '遥' map a home right nearby, or a distant, unreachable zone captured by enemies?<br>Step 2: Is the poet merely pitying literal flowers? What do those hometown blooms represent in this context?<br>Step 3: Who and what does his tender pity for the flowers ultimately elevate and transform into?",
        aZh: "一个“怜”字包含了思念、痛惜与悲伤等多重情感。首先，“遥”字点明身处相隔千里的西征途中，只能隔空怀念。其次，诗人怜惜的不仅是深秋中无家主照料的菊花，更是借由菊花这个核心意象，去寄托对满目疮痍、惨遭蹂躏的故乡长安的痛苦牵挂，以及对战火中挣扎的父老乡亲的深切同情。",
        aPy: "yí gè lián zì bāo hán le sī niàn tòng xī yǔ bēi shāng děng duō chóng qíng gǎn shǒu xiān yáo zì diǎn míng shēn chǔ xiāng gé qiān lǐ de xī zhēng tú zhōng zhǐ néng gé kōng huái niàn qí cì shī rén lián xī de bù jǐn shì shēn qiū zhōng wú jiā zhǔ zhào liào de jú huā gèng shì jiè yóu jú huā zhè gè hé xīn yì xiàng qù jì tuō duì mǎn mù chuāng yí cǎn zāo róu lìn de gù xiāng cháng ān de tòng kǔ qiān guà yǐ jí duì zhàn huǒ zhōng zhèng zhá de fù lǎo xiāng qīn de shēn qiè tóng qíng",
        aEn: "The word 'lián' compresses longing, profound grief, and empathy. The '遥' locates him thousands of miles away on a march, unable to return. He pities the autumn blooms left untended, but through them, he projects a shattering anxiety for devastated Chang'an and a heavy wave of sympathy for its suffering citizens."
    },
    {
        id: "T4",
        qZh: "品析最后一句“应傍战场开”，分析“菊花”与“战场”这两个强烈对立的意象并列时所产生的艺术震撼力。",
        qPy: "pǐn xī zuui hòu yí jù yīng bàng zhàn chǎng kāi fān xī jú huā yǔ zhàn chǎng zhè liǎng gè qiáng liè duì lì de yì xiàng bìng liè chǎn shēng de yì shù zhèn hàn lì",
        qEn: "Analyze the last line 'blooming beside battlefields'. What immense artistic shock waves form when noble flowers clash with a horrific battlefield?",
        sZh: [
            "1. 第一步：在中国传统文化中，菊花通常象征着什么样的人格、生活和美丽？",
            "2. 第二步：而“战场”在学生的脑海中会唤起什么样的画面？（鲜血、厮杀、死亡、破败）",
            "3. 第三步：将极致的生命之美与极致的残酷毁灭并列在一起，带给你心灵怎样的震撼？"
        ],
        sPy: [
            "yī dì yī bù zài zhōng guó chuán tǒng wén huà zhōng jú huā tōng cháng xiàng zhēng zhe shén me yàng de rén gé shēng huó yǔ měi lì",
            "èr dì èr bù ér zhàn chǎng zài xué shēng de nǎo hǎi zhōng huì huàn qǐ shén me yàng de huà miàn xiān xuè sī shā sǐ wáng pò bài",
            "sān dì sān bù jiāng jí zhì de shēng mìng zhī měi yǔ jí zhì de cán kù huǐ miè bìng liè zài yī qǐ dài gěi nǐ xīn líng zěn yàng de zhèn hàn"
        ],
        sEn: "Step 1: In Chinese culture, what kind of moral character, peace, and beauty do chrysanthemums represent?<br>Step 2: What explicit mental pictures does the word 'battlefield' trigger? (Blood, death, devastation)<br>Step 3: What existential emotional impact forms when peak natural beauty is chained directly to peak destruction?",
        aZh: "这句诗制造了极为震撼的“反差艺术”。菊花在中国传统文化中象征着清高、高洁与宁静祥和的盛世生活；而战场则充斥着流血、死亡与血腥毁灭。诗人打破常规，将最圣洁的美丽与最残酷的毁灭钉在同一个空间。这种巨大的冲突，将盛世的坍塌、人命如草芥的真实惨烈，以极其惊心动魄的视觉张力呈现了出来。",
        aPy: "zhè jù shī zhì zào le jí wéi zhèn hàn de fǎn chā yì shù jú huā zài zhōng guó chuán tǒng wén huà zhōng xiàng zhēng zhe qīng gāo gāo jié yǔ níng jìng xiáng hé de shèng shì shēng huó ér zhàn chǎng zé chōng chì zhe liú xuè sǐ wáng yǔ xuè xīng huǐ miè shī rén dǎ pò cháng guī jiāng zuì shèng jié de měi lì yǔ zuì cán kù de huǐ miè dīng zài tóng yí gè kōng jiān zhè zhǒng jù dà de chōng tū jiāng shèng shì de tān tā rén mìng rú cǎo jiè de zhēn shí cǎn liè yǐ jí qí jīng xīn dòng pò de shì jué zhāng lì chéng xiàn le chū lái",
        aEn: "This establishes a brilliant study in contrast. Chrysanthemums anchor serenity, moral beauty, and peaceful life; battlefields embody slaughter, chaos, and ruin. Forcing the purest elegance onto the grimmest wreckage generates immense narrative tension, charting an empire's ruin with absolute cinematic shock value."
    },
    {
        id: "T5",
        qZh: "这首诗是如何突破传统重阳节思乡诗的“小格局”，从而展现出忧国忧民的宏大悲慨的？",
        qPy: "shī jiāng gè rén sī xiāng róng rù yōu guó yōu mín de ài guó bēi kǎi zhī zhōng",
        qEn: "How does this piece break through the narrow sentimental boundaries of standard festival homesickness to broadcast grand patriotic grief?",
        sZh: [
            "1. 第一步：普通的重阳诗一般只关注个人的什么情绪？（比如王维的“少一人”，多围绕亲情和个人孤独）",
            "2. 第二步：在这首诗的前半部分，诗人看似在抱怨什么？（无酒可喝、行军艰苦）",
            "3. 第三步：最后一句突然拉大镜头到什么场面？这说明诗人的终极关怀是自己的口腹之欲，还是国家命运？"
        ],
        sPy: [
            "yī dì yī bù pǔ tōng de chóng yáng shī yī bān zhǐ guān zhù gè rén de shén me qíng xù bǐ rú wáng wéi de shǎo yī rén duō wéi rào qīn qíng hé gè rén gū dú",
            "èr dì èr bù zài zhè shǒu shī de qián bàn bù fèn shī rén kàn sì zài bào yuàn shén me wú jiǔ kě hē xíng jūn jiān kǔ",
            "sān dì sān bù zuì hòu yí jù tū rán lā dà jìng tóu dào shén me chǎng miàn zhè shuō míng shī rén de zhōng jí guān huái shì zì jǐ de kǒu fù zhī yù hái shì guó jiā mìng yùn"
        ],
        sEn: "Step 1: What micro-emotions do typical festival verses center on? (e.g., Wang Wei's missing relatives)<br>Step 2: In the first half, what superficial complaints does the poet seem to level? (Lack of wine, grueling march)<br>Step 3: What massive widescreen visualization dominates the last line? What does this declare about his focus?",
        aZh: "普通重阳诗多围绕“个人孤独、怀念亲人”的私情展开。本诗前半部分看似在感叹无酒、登高的节日遗憾；但最后一句镜头骤然拉大，推向了血流成河的“战场”。这表明诗人在忍受个人痛苦的同时，灵魂深处时刻挂念着国家的安危与黎民百姓的生死。他将小我之思无缝升华为忧国忧民的爱国悲慨，格局宏大，气象万千。",
        aPy: "pǔ tōng chóng yáng shī duō wéi rào gè rén gū dú huái niàn qīn rén de sī qíng zhǎn kāi běn shī qián bàn bù fèn kàn sì zài gǎn tàn wú jiǔ dēng gāo de jié rì yí hàn dàn zuì hòu yí jù jìng tóu zhòu rán lā dà tuī xiàng le xuè liú chéng hé de zhàn chǎng zhè biǎo míng shī rén zài rěn shòu gè rén tòng kǔ de tóng shí líng hún shēn chù shí kè guà niàn zhe guó jiā de ān wēi yǔ lí mín bǎi xìng de shēng sǐ tā jiāng xiǎo wǒ zhī sī wú féng shēng huá wéi yōu guó yōu mín de ài guó bēi kǎi gé jú hóng dà qì xiàng wàn qiān",
        aEn: "Typical quatrains dwell inside private walls. The first half hints at petty individual regrets; but the final line drops a cinematic bombshell by showing wide active battlefields. Cen Shen channels his isolation into systemic worry over his fracturing nation, upgrading casual homesickness into timeless patriotic literature."
    }
];

console.log("成功加载：xingjun_shortq 5题高阶全引导数据包");
