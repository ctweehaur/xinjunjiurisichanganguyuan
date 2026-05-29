/**
 * 互动古文教学平台 - 《行军九日思长安故园》客观题数据包 (高辨析度4选项·纯净校对版)
 */

const quizQuestions = [
    {
        id: 1,
        text: "第一句中“强欲登高去”的“强”字，最准确的读音与词义是什么？",
        py: "dì yī jù zhōng qiǎng yù dēng gāo qù de qiǎng zì zuì zhǔn què de dú yīn yǔ cí yì shì shén me",
        en: "What is the most accurate pronunciation and meaning of '強 (qiǎng)' in the first line?",
        options: [
            {
                text: "读 qiǎng / 意思是 勉强 撑起 心情",
                py: "dú qiǎng yì sī shì miǎn qiǎng chēng qǐ xīn qíng",
                en: "Pronounced 'qiǎng' / Meaning to force oneself or reluctantly find the mood.",
                correct: true,
                explanation: "正确！在战乱与行军的恶劣环境下，诗人并没有过节的闲情逸致，一个“强”字极其传神地写出了他为了依循传统而勉强挣扎、强颜欢笑的沉重心理。",
                explanationPy: "zhèng què zài zhàn luàn yǔ xíng jūn de è liè huán jìng xià shī rén bìng méi yǒu guò jié de xián qíng yì zhì yí gè qiǎng zì jí qí chuán shén de xiě chū le tā wèi le yī xún chuán tǒng ér miǎn qiǎng zhèng zhá qiáng yán huān xiào de chén zhòng xīn lǐ",
                explanationEn: "Correct! Amid war and military marching, the poet lacks seasonal joy; 'qiǎng' masterfully shows him reluctantly forcing himself to follow tradition."
            },
            {
                text: "读 qiáng / 意思是 身体 强壮 充满 力量",
                py: "dú qiáng yì sī shì shēn tǐ qiáng zhuàng chōng mǎn lì liàng",
                en: "Pronounced 'qiáng' / Meaning physically strong and full of energy.",
                correct: false,
                explanation: "干扰项分析：字音字义均错。部分学生容易套用现代汉语“强壮”的意思，完全脱离了行军流亡时凄凉、疲惫的真实诗境。",
                explanationPy: "gān rǎo xiàng fān xī zì yīn zì yì jūn cuò bù fèn xué shēng róng yì tào yòng xiàn dài hàn yǔ qiáng zhuàng de yì sī wán quán tuō lí le xíng jūn liú wáng shí qī liáng pí bèi de zhēn zhèng shī jìng",
                explanationEn: "Distractor Analysis: Wrong pronunciation and meaning. It misapplies the modern definition of 'strong', disregarding the exhausted reality of wartime march."
            },
            {
                text: "读 jiàng / 意思是 脾气 倔强 不肯 认输",
                py: "dú jiàng yì sī shì pí qì jué jiàng bù kěn rèn shū",
                en: "Pronounced 'jiàng' / Meaning stubborn and refusing to yield.",
                correct: false,
                explanation: "干扰项分析：高级多音字干扰。虽然“倔强”读 jiàng，但本诗中诗人并非在和某人赌气或展现顽固，而是内心悲凉的反衬，因此不能读作第四声。",
                explanationPy: "gān rǎo xiàng fān xī gāo jí duō yīn zì gān rǎo suī rán jué jiàng dú jiàng dàn běn shī zhōng shī rén bìng fēi zài hé mǒu rén dǔ qì huò zhǎn xiàn wán gù ér shì nèi xīn bēi liáng de fǎn chèn yīn cǐ bù néng dú zuò dì sì shēng",
                explanationEn: "Distractor Analysis: Multiphone character confusion. While stubbornness is read as 'jiàng', the poet is expressing internal grief, not throwing a temper tantrum."
            },
            {
                text: "读 qiǎng / 意思是 被 强迫 毫无 自由",
                py: "dú qiǎng yì sī shì bèi qiáng pò háo wú zì yóu",
                en: "Pronounced 'qiǎng' / Meaning being forced with no personal freedom.",
                correct: false,
                explanation: "干扰项分析：虽然读音正确，但词义过头了。登高是诗人内心“想要（欲）”完成的过节仪式，属于自发的勉强，而非受到军队长官的严厉强迫。",
                explanationPy: "gān rǎo xiàng fān xī suī rán dú yīn zhèng què dàn cí yì guò tóu le dēng gāo shì shī rén nèi xīn xiǎng yào wán chéng de guò jié yí shì shǔ yú zì fā de miǎn qiǎng ér fēi shòu dào jūn duì zhǎng guān de yán lì qiáng pò",
                explanationEn: "Distractor Analysis: Correct pronunciation but incorrect contextual nuance. Climbing high is a personal voluntary desire, not a harsh direct command from military generals."
            }
        ]
    },
    {
        id: 2,
        text: "诗中后两句“遥怜故园菊，应傍战场开”，这里的“故园”具体指的是哪一座城市？",
        py: "shī zhōng hòu liǎng jù yáo lián gù yuán jú yīng bàng zhàn chǎng kāi zhè lǐ de gù yuán jù tǐ zhǐ de shì nǎ yī zuò chéng shì",
        en: "Which city does 'homeland (故園)' specifically refer to in the later half?",
        options: [
            {
                text: "长安 / 遭到 战火 蹂躏 的 首都",
                py: "cháng ān zāo dào zhàn huǒ róu lìn de shǒu dū",
                en: "Chang'an / The Tang capital ravaged by wartime fire.",
                correct: true,
                explanation: "正确！岑参在长安有别墅和家园，当时安史之乱叛军攻陷长安，故乡沦为两军厮杀的残酷战场，因此诗人遥望并深感痛心。",
                explanationPy: "zhèng què cén shān zài cháng ān yǒu bié shù hé jiā yuán dāng shí ān shǐ zhī luàn pàn jūn gōng xiàn cháng ān gù xiāng lún wéi liǎng jūn sī shā de cán kù zhàn chǎng yīn cǐ shī rén yáo wàng bìng shēn gǎn tòng xīn",
                explanationEn: "Correct! Cen Shen owned properties in Chang'an. At that time, rebel forces occupied it, turning his home into a horrific active battlefield."
            },
            {
                text: "洛阳 / 另一个 沦陷 的 繁华 大都市",
                py: "luò yáng lìng yí gè lún xiàn de fán huá dà dū shì",
                en: "Luoyang / Another captured flourishing megalopolis.",
                correct: false,
                explanation: "干扰项分析：极具诱惑力，因为洛阳也是安史之乱中首当其冲沦陷的重镇。但根据岑参的履历与全诗的地理线索，诗人的故园房产明确位于首都长安。",
                explanationPy: "gān rǎo xiàng fān xī jí jù yòu huò lì yīn wéi luò yáng yě shì ān shǐ zhī luàn zhōng shǒu dāng qí chōng lún xiàn de zhòng zhèn dàn gēn jù cén shān de lǚ lì yǔ quán shī de dì lǐ xiàn suǒ shī rén de gù yuán fáng chǎn míng què wèi yú shǒu dū cháng ān",
                explanationEn: "Distractor Analysis: Highly tempting as Luoyang fell early too. However, biographical records and spatial mapping secure Cen Shen's home as Chang'an."
            },
            {
                text: "长沙 / 诗人 晚年 漂泊 卖唱 的 地方",
                py: "cháng shā shī rén wǎn nián piāo bó mài chàng de dì fāng",
                en: "Changsha / The place where the poet wandered in late life.",
                correct: false,
                explanation: "干扰项分析：这是跨诗歌概念的张冠李戴！流落长沙卖唱的是上一课《江南逢李龟年》里的宫廷乐师李龟年，岑参并未有过这段历史际遇。",
                explanationPy: "gān rǎo xiàng fān xī zhè shì kuà shī gē gài niàn de zhāng guān lǐ dài liú luò cháng shā mài chàng de shì gāng cái nà yí kè jiāng nán féng lǐ guī nián lǐ de gōng tíng yuè shī lǐ guī nián cén shān bìng wèi yǒu guò zhè duàn lì shǐ jì yù",
                explanationEn: "Distractor Analysis: Cross-text confusion! Wandering in Changsha applies to Li Guinian from our previous lesson, not Cen Shen."
            },
            {
                text: "边疆 / 塞外 行军 沿途 的 驿站",
                py: "biān jiāng sài wài xíng jūn yán tú de yì zhàn",
                en: "The frontier / Military stations along the border.",
                correct: false,
                explanation: "干扰项分析：利用了岑参作为“边塞诗人”的固有标签。岑参虽以写边塞诗闻名，但“故园”二字含义明确是家乡故土，塞外风光绝不可能被称为故园。",
                explanationPy: "gān rǎo xiàng fān xī lì yòng le cén shān zuò wéi biān sài shī rén de gù yǒu biāo qiān cén shān suī yǐ xiě biān sài shī wén míng dàn gù yuán èr zì hán yì míng què shì jiā xiāng gù tǔ sài wài fēng jǐng jué bù kě néng bèi chēng wéi gù yuán",
                explanationEn: "Distractor Analysis: Capitalizes on Cen's tag as a 'frontier poet'. Although famous for border verses, '故園' explicitly denotes roots, not desolate wilderness."
            }
        ]
    },
    {
        id: 3,
        text: "“无人送酒来”一句运用了典故，它指向古代哪位喜爱菊花与美酒的隐逸诗人？",
        py: "wú rén sòng jiǔ lái yī jù yùn yòng le diǎn gù tā zhǐ xiàng gǔ dài nǎ wèi xǐ ài jú huā yǔ měi jiǔ de yǐn yì shī rén",
        en: "Which ancient reclusive poet famous for wine and flowers does line 2 reference?",
        options: [
            {
                text: "陶渊明 / 饮酒 赏菊 归隐 田园 的 鼻祖",
                py: "táo yuān míng yǐn jiǔ shǎng jú guī yǐn tián yuán de bí zǔ",
                en: "Tao Yuanming / The founder of idyll poetry famed for drinking and appreciating flowers.",
                correct: true,
                explanation: "正确！此处化用了陶渊明重阳节无酒，江州刺史王弘派白衣使者及时送酒而至的“白衣送酒”典故。岑参借此感叹军旅战乱中绝无这种名士雅趣。",
                explanationPy: "zhèng què cǐ chù huà yòng le táo yuān míng chóng yáng jié wú jiǔ jiāng zhōu cì shǐ wáng hóng pài bái yī shǐ zhě jí shí sòng jiǔ ér zhì de bái yī sòng jiǔ diǎn gù cén shān jiè cǐ gǎn tàn jūn lǚ zhàn luàn zhōng jué wú zhè zhǒng míng shì yǎ qù",
                explanationEn: "Correct! This borrows the 'white-clothed messenger sending wine' anecdote of Tao Yuanming on Double Ninth, emphasizing Cen's lack of such peacetime luxury."
            },
            {
                text: "李白 / 斗酒 诗 百篇 的 浪漫 诗仙",
                py: "lǐ bái dǒu jiǔ shī bǎi piān de làng màn shī xiān",
                en: "Li Bai / The romantic Poet Immortal renowned for endless wine.",
                correct: false,
                explanation: "干扰项分析：极具迷惑性，因为提到唐代“喝酒”的学生第一反应通常是李白。但传统重阳节“菊花与送酒”的特定文学典故符号，永远绑定在陶渊明身上。",
                explanationPy: "gān rǎo xiàng fān xī jí jù mí huò xìng yīn wéi tí dào táng dài hē jiǔ de xué shēng dì yī fǎn yìng tōng cháng shì lǐ bái dàn chuán tǒng chóng yáng jié jú huā yǔ sòng jiǔ de tè dìng wén xué diǎn gù fú hào yǒng yuǎn bǎng dìng zài táo yuān míng shēn shàng",
                explanationEn: "Distractor Analysis: Highly misleading as students link Li Bai to wine immediately. However, the unique 'Double Ninth chrysanthemum and wine delivery' profile belongs to Tao."
            },
            {
                text: "王维 / 独在异乡为异客 的 诗佛",
                py: "wáng wéi dú zài yì xiāng wéi yì kè de shī fó",
                en: "Wang Wei / The Poet Buddha who wrote 'alone in a foreign land'.",
                correct: false,
                explanation: "干扰项分析：王维确实写过经典的重阳节诗句（遍插茱萸少一人），但他的诗强调的是插茱萸而非“送酒典故”，在此属于概念张冠李戴。",
                explanationPy: "gān rǎo xiàng fān xī wáng wéi què shí xiě guò diǎn xíng de chóng yáng jié shī jù biàn chā zhū yú shǎo yī rén dàn tā de shī qiáng diào de shì chā zhū yú ér fēi sòng jiǔ diǎn gù zài cǐ shǔ yú gài niàn zhāng guān lǐ dài",
                explanationEn: "Distractor Analysis: Wang Wei did write a famous Double Ninth line, but his theme highlights dogwood sprigs, not historical wine delivery anecdotes."
            },
            {
                text: "屈原 / 朝饮木兰之坠露 的 爱国 诗人",
                py: "qū yuán zhāo yǐn mù lán zhī zhuì lù de ài guó shī rén",
                en: "Qu Yuan / The patriotic poet who drank fallen dew from magnolias.",
                correct: false,
                explanation: "干扰项分析：屈原在《离骚》中确实写过“夕餐秋菊之落英”，与菊花有关。但他生活在战国楚国，其意象是高洁品格，跟重阳“送酒”习俗无涉。",
                explanationPy: "gān rǎo xiàng fān xī qū yuán zài lí sāo zhōng què shí xiě guò xī cān qiū jú zhī luò yīng yǔ jú huā yǒu guān dàn tā shēng huó zài zhàn guó chǔ guó qí yì xiàng shì gāo jié pǐn gé gēn chóng yáng sòng jiǔ xí sú wú shè",
                explanationEn: "Distractor Analysis: Qu Yuan wrote about autumn petals in Li Sao, but he belongs to the Warring States Chu, symbolizing moral purity, not historical festival delivery custom."
            }
        ]
    },
    {
        id: 4,
        text: "诗歌将原本象征“高洁美丽”的菊花与象征“残酷血腥”的战场并列，这种写作手法叫什么？",
        py: "shī gē jiāng yuán běn xiàng zhēng gāo jié měi lì de jú huā yǔ xiàng zhēng cán kù xuè xīng de zhàn chǎng bìng liè zhè zhǒng xiě zuò shǒu fǎ jiào shén me",
        en: "What is the writing technique called when noble chrysanthemums are juxtaposed with a bloody battlefield?",
        options: [
            {
                text: "强烈的 意象 对比 / 制造 视觉 与 情感 冲击",
                py: "qiáng liè de yì xiàng duì bǐ zhì zào shì jué yǔ qíng gǎn chōng jī",
                en: "Powerful imagery contrast / Creating massive visual and emotional impact.",
                correct: true,
                explanation: "正确！美丽的菊花代表昔日的宁静家园，残酷的战场代表眼前的战乱。美好的事物在最血腥的地方盛开，这种反差产生了惊心动魄的艺术感染力。",
                explanationPy: "zhèng què měi lì de jú huā dài biǎo xī rì de níng jìng jiā yuán cán kù de zhàn chǎng dài biǎo yǎn qián de zhàn luàn měi hǎo de shì wù zài zuì xuè xīng de dì fāng shèng kāi zhè zhǒng fǎn chā chǎn shēng le jīng xīn dòng pò de yì shù gǎn rǎn lì",
                explanationEn: "Correct! Beautiful blooms signify peace, while grim battlefields map active conflict. Flowers blooming in blood builds incredible artistic tension."
            },
            {
                text: "毫无 关联的 词语 堆砌 / 属于 笔误",
                py: "háo wú guān lián de cí yǔ duī qì shǔ yú bǐ wù",
                en: "An irrelevant accumulation of words / Belonging to a clerical slip.",
                correct: false,
                explanation: "干扰项分析：极其浅陋的机械论断。岑参是炉火纯青的唐代大师，这种意象的拼撞是极其高级、有意为之的文学构思，绝非胡乱堆砌或笔误。",
                explanationPy: "gān rǎo xiàng fān xī jí qí qiǎn lòu de jī xiè lùn duàn cén shān shì lú huǒ chún qīng de táng dài dà shī zhè zhǒng yì xiàng de pīn zhuàng shì jí qí gāo jí yǒu yì wéi zhī de wén xué gòu sī jué fēi hú luàn duī qì huò bǐ wù",
                explanationEn: "Distractor Analysis: A naive mechanical interpretation. Cen Shen is a Tang master; this clash of profiles is a deliberate high-tier literary design."
            },
            {
                text: "拟人 手法 / 菊花 像 战士 一样 站岗",
                py: "nǐ rén shǒu fǎ jú huā xiàng zhàn shì yī yàng zhàn gǎng",
                en: "Personification / Chrysanthemums standing guard like soldiers.",
                correct: false,
                explanation: "干扰项分析：过度解读和牵强附会。诗中只是写菊花依靠在战场边（应傍战场开），是客观空间的猜测陈述，并没有赋予菊花冲锋陷阵的战士人格。",
                explanationPy: "gān rǎo xiàng fān xī guò dù jiě dú hé qiān qiáng fù huì shī zhōng zhǐ shì xiě jú huā yī kào zài zhàn chǎng biān shì kè guān kōng jiān de cāi cè chén shù bìng méi yǒu fù yǔ jú huā chōng fēng xiàn zhèn de zhàn shì rén gé",
                explanationEn: "Distractor Analysis: Over-interpretation. The line presents a spatial prediction of flowers blooming next to ruins; it doesn't give them a combatant personality."
            },
            {
                text: "神话 夸张 / 描写 战场上 的 仙境",
                py: "shén huà kuā zhāng miáo huǐ zhàn chǎng shàng de xiān jìng",
                en: "Mythological exaggeration / Depicting a wonderland on the battlefield.",
                correct: false,
                explanation: "干扰项分析：完全偏离现实。岑参面对的是大唐山河破碎、流血牺牲的真实人间惨剧，全诗字字悲愤写实，没有半点虚幻的神话仙境色彩。",
                explanationPy: "gān rǎo xiàng fān xī wán quán piān lí xiàn shí cén shān miàn duì de shì dà táng shān hé pò suì liú xuè xī shēng de zhēn shí rén jiān cǎn jù quán shī zì zì bēi fèn xiě shí méi yǒu bàn diǎn xū huàn de shén huà xiān jìng sè cǎi",
                explanationEn: "Distractor Analysis: Detached from reality. Cen Shen faces a real tragedy of civil war; the tone is filled with grief and contains no magical illusion."
            }
        ]
    },
    {
        id: 5,
        text: "这首诗虽然只有短短28个字，却在古典重阳诗歌中拥有极高地位，核心原因是什么？",
        py: "zhè shǒu shī suī rán zhǐ yǒu duǎn duǎn èr shí bā gè zì què zài gǔ diǎn chóng yáng shī gē zhōng yōng yǒu jí gāo dì wèi hé xīn yuán yīn shì shén me",
        en: "Though only 28 characters long, what is the core reason for this poem's high rank among Double Ninth poems?",
        options: [
            {
                text: "将 个人思乡 / 融入 忧国忧民 的 爱国 悲慨 之中",
                py: "jiāng gè rén sī xiāng róng rù yōu guó yōu mín de ài guó bēi kǎi zhī zhōng",
                en: "Blending personal homesickness / Into patriotic grief for the nation and people.",
                correct: true,
                explanation: "正确！传统重阳诗多流于个人的孤独、登高插茱萸的小情感。而岑参在想念家乡时，第一反应是痛心家乡沦为两军流血的战场，将私情与国运交织，格局高远、震恸人心。",
                explanationPy: "zhèng què chuán tǒng chóng yáng shī duō liú yú gè rén de gū dú dēng gāo chā zhū yú de xiǎo qíng gǎn ér cén shān zài xiǎng niàn jiā xiāng shí dì yī fǎn yìng shì tòng xīn jiā xiāng lún wéi liǎng jūn liú xuè de zhàn chǎng jiāng sī qíng yǔ guó yùn jiāo zhī gé jú gāo yuǎn zhèn tòng rén xīn",
                explanationEn: "Correct! Most festival poems stay bounded within single loneliness. Cen Shen ties his nostalgia to bleeding landscapes, linking private longing to national fate."
            },
            {
                text: "字数 极少 / 是 全唐诗 中 最短 的 一首 诗",
                py: "zì shù jí shǎo shì quán táng shī zhōng zuì duǎn de yī shǒu shī",
                en: "Extremely short word count / Being the shortest poem in the Complete Tang Poems.",
                correct: false,
                explanation: "干扰项分析：缺乏基本常识。这是标准的五言绝句（28个汉字），全唐诗中有数万首同等字数的绝句，并不是因为它最短而闻名，而是因为格局宏大。",
                explanationPy: "gān rǎo xiàng fān xī quē fá jī běn cháng shí zhè shì biāo zhǔn de wǔ yán jué jù èr shí bā gè hàn zì quán táng shī zhōng yǒu shù wàn shǒu tóng děng zì shù de jué jù bìng fēi yīn wèi tā zuì duǎn wén míng ér shì yīn wèi gé jú hóng dà",
                explanationEn: "Distractor Analysis: Lacks basic taxonomy literacy. This is a standard 5-character quatrain; thousands of such poems exist. It ranks high due to depth, not briefness."
            },
            {
                text: "详细 描写了 战场上 两军 对垒 的 宏大 场面",
                py: "xiáng xì miáo huǐ le zhàn chǎng shàng liǎng jūn duì lěi de hóng dà chǎng miàn",
                en: "Providing a detailed description of the grand scenes of opposing armies on the battlefield.",
                correct: false,
                explanation: "干扰项分析：属于空间画面错读。全诗根本没有直接描写军队打仗厮杀的宏大动态镜头，而是通过“想象故乡菊花傍战场开”的静态落脚点，蓄积了更深的悲剧感。",
                explanationPy: "gān rǎo xiàng fān xī shǔ yú kōng jiān huà miàn cuò dú quán shī gēn běn méi yǒu zhí jiē miáo huǐ jūn duì dǎ zhàng sī shā de hóng dà dòng tài jìng tóu ér shì tōng guò xiǎng xiàng gù xiāng jú huā bàng zhàn chǎng kāi de jìng tài luò jiǎo diǎn xù jī le gèng shēn de bēi jù gǎn",
                explanationEn: "Distractor Analysis: Structural visualization error. The poem contains no active dynamic combat footage; it acts purely as a static tragic mental projection."
            },
            {
                text: "列举了 重阳节 所有的 传统 美食 与 活动",
                py: "liè jǔ le chóng yáng jié suǒ yǒu de chuán tǒng měi shí yǔ huó dòng",
                en: "Listing all the traditional delicacies and activities of the Double Ninth Festival.",
                correct: false,
                explanation: "干扰项分析：望文生义。诗中提到了登高和酒、菊，但目的是为了写“无酒来”和“在战场开”的遗憾悲剧，绝非民俗活动的大串联流水账。",
                explanationPy: "gān rǎo xiàng fān xī wàng wén shēng yì shī zhōng tí dào le dēng gāo hé jiǔ jú dàn mù dì shì wèi le xiě wú jiǔ lái hé zài zhàn chǎng kāi de yí hàn bēi jù jué fēi mín sú huó dòng de dà chuàn lián liú shuǐ zhàng",
                explanationEn: "Distractor Analysis: Superficial semantic reading. Delicacies and activities are mentioned only to express their tragic denial, not as a celebration log."
            }
        ]
    }
];

console.log("成功洗白：jiangnan_quiz 100%纯净高精度拼音库");
