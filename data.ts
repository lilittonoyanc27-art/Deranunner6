import { GrammarSection, GameInfo, QuizQuestion } from './types';

export const GRAMMAR_DATA: GrammarSection[] = [
  {
    id: 1,
    title: "Անձնական դերանուններ",
    titleEs: "Pronombres personales sujeto",
    introduction: "Սրանք ցույց են տալիս՝ ով է կատարում գործողությունը։",
    description: "Իսպաներենում անձնական դերանունները հետևյալն են՝",
    tableHeaders: ["Իսպաներեն", "Հայերեն"],
    tableRows: [
      ["yo", "ես"],
      ["tú", "դու"],
      ["él", "նա՝ արական"],
      ["ella", "նա՝ իգական"],
      ["usted", "Դուք՝ հարգանքով"],
      ["nosotros/as", "մենք (արական / իգական)"],
      ["vosotros/as", "դուք՝ Իսպանիա, ոչ պաշտոնական"],
      ["ellos", "նրանք՝ արական կամ խառը"],
      ["ellas", "նրանք՝ իգական"],
      ["ustedes", "Դուք / դուք՝ մի քանի հոգի"]
    ],
    examples: [
      { es: "Yo estudio.", hy: "Ես սովորում եմ։" },
      { es: "Tú comes.", hy: "Դու ուտում ես։" },
      { es: "Ella vive en Madrid.", hy: "Նա ապրում է Մադրիդում։" },
      { es: "Nosotros hablamos español.", hy: "Մենք իսպաներեն ենք խոսում։" }
    ],
    tips: [
      "Իսպաներենում nosotros, vosotros և ellos ունեն իգական ձևեր՝ nosotras (մենք - միայն աղջիկներ), vosotras (դուք - միայն աղջիկներ), և ellas (նրանք - միայն աղջիկներ): Եթե խումբը խառն է, օգտագործվում է արական ձևը։"
    ]
  },
  {
    id: 2,
    title: "Դերանունները և բայի խոնարհումը",
    titleEs: "Pronombres y conjugación verbal",
    introduction: "Իսպաներենում բայը փոխվում է ըստ դերանունի։",
    description: "Օրինակ՝ hablar — խոսել բայի խոնարհումը ներկա ժամանակում (Presente)՝",
    tableHeaders: ["Դերանուն", "Բայ", "Հայերեն"],
    tableRows: [
      ["yo", "hablo", "ես խոսում եմ"],
      ["tú", "hablas", "դու խոսում ես"],
      ["él / ella / usted", "habla", "նա / Դուք խոսում է / եք"],
      ["nosotros/as", "hablamos", "մենք խոսում ենք"],
      ["vosotros/as", "habláis", "դուք խոսում եք"],
      ["ellos / ellas / ustedes", "hablan", "նրանք / Դուք խոսում են / եք"]
    ],
    tips: [
      "Շատ կարևոր է՝ usted օգտագործում է նույն բայի ձևը, ինչ él / ella։",
      "Usted habla español. — Դուք իսպաներեն եք խոսում։ Բայց բայը՝ habla, նույնն է, ինչ él habla / ella habla։"
    ]
  },
  {
    id: 3,
    title: "Ուղիղ խնդիրի դերանուններ",
    titleEs: "Pronombres de objeto directo",
    introduction: "Սրանք պատասխանում են հարցին՝ ո՞ւմ / ի՞նչ (ուղիղ խնդիր):",
    description: "Դերանունների համապատասխան ձևերն են՝",
    tableHeaders: ["Իսպաներեն", "Հայերեն"],
    tableRows: [
      ["me", "ինձ"],
      ["te", "քեզ"],
      ["lo", "նրան / դա՝ արական"],
      ["la", "նրան / դա՝ իգական"],
      ["nos", "մեզ"],
      ["os", "ձեզ"],
      ["los", "նրանց / դրանք՝ արական կամ խառը"],
      ["las", "նրանց / դրանք՝ իգական"]
    ],
    examples: [
      { es: "Veo a Carlos.", hy: "Ես տեսնում եմ Կառլոսին։" },
      { es: "Lo veo.", hy: "Ես նրան տեսնում եմ։ (lo = Կառլոսին)" },
      { es: "Veo a Lucía.", hy: "Ես տեսնում եմ Լուսիային։" },
      { es: "La veo.", hy: "Ես նրան տեսնում եմ։ (la = Լուսիային)" },
      { es: "Compro el libro.", hy: "Ես գնում եմ գիրքը։" },
      { es: "Lo compro.", hy: "Ես այն գնում եմ։ (lo = գիրքը)" },
      { es: "Compro la camisa.", hy: "Ես գնում եմ վերնաշապիկը։" },
      { es: "La compro.", hy: "Ես այն գնում եմ։ (la = վերնաշապիկը)" }
    ]
  },
  {
    id: 4,
    title: "Անուղղակի խնդիրի դերանուններ",
    titleEs: "Pronombres de objeto indirecto",
    introduction: "Սրանք պատասխանում են հարցին՝ ո՞ւմ / ում համար (անուղղակի խնդիր):",
    description: "Դերանունների համապատասխան ձևերն են՝",
    tableHeaders: ["Իսպաներեն", "Հայերեն"],
    tableRows: [
      ["me", "ինձ"],
      ["te", "քեզ"],
      ["le", "նրան / Ձեզ"],
      ["nos", "մեզ"],
      ["os", "ձեզ"],
      ["les", "նրանց / Ձեզ՝ հոգնակի"]
    ],
    examples: [
      { es: "Doy el libro a Carlos.", hy: "Ես գիրքը տալիս եմ Կառլոսին։" },
      { es: "Le doy el libro.", hy: "Ես նրան տալիս եմ գիրքը։ (le = Կառլոսին)" },
      { es: "Escribo a mi madre.", hy: "Ես գրում եմ մայրիկիս։" },
      { es: "Le escribo.", hy: "Ես նրան գրում եմ։ (le = մայրիկիս)" },
      { es: "Compramos regalos a los niños.", hy: "Մենք երեխաների համար նվերներ ենք գնում։" },
      { es: "Les compramos regalos.", hy: "Մենք նրանց համար նվերներ ենք գնում։ (les = երեխաներին)" }
    ]
  },
  {
    id: 5,
    title: "Ուղիղ և անուղղակի դերանունների տարբերությունը",
    titleEs: "Diferencia entre objeto directo e indirecto",
    introduction: "Ինչպես հեշտ տարբերակել ուղիղ և անուղղակի դերանունները։",
    description: "Դիտարկենք հետևյալ համեմատությունը և հարցադրումները՝",
    tableHeaders: ["Տեսակ", "Օրինակ", "Հայերեն", "Բացատրություն"],
    tableRows: [
      ["Ուղիղ խնդիր", "Lo veo.", "Ես նրան տեսնում եմ։", "lo = Կառլոսին։ Հարցը՝ ո՞ւմ/ինչն եմ տեսնում։"],
      ["Անուղղակի խնդիր", "Le doy un libro.", "Ես նրան գիրք եմ տալիս։", "le = Կառլոսին։ Հարցը՝ ո՞ւմ (ում համար) եմ տալիս։"]
    ],
    tips: [
      "Եթե գործողությունը ուղղված է անմիջապես առարկային կամ անձին (ինչին/ում), ապա դա ուղիղ խնդիր է (me, te, lo, la, nos, os, los, las):",
      "Եթե գործողությունը ինչ-որ բան է անում մեկ ուրիշի հասցեով կամ համար (ում հասցեով/ում համար), ապա դա անուղղակի խնդիր է (me, te, le, nos, os, les):"
    ]
  },
  {
    id: 6,
    title: "Երկու դերանուն միասին",
    titleEs: "Dos pronombres juntos",
    introduction: "Երբ մեկ նախադասության մեջ կա երկու դերանուն, հերթականությունը միշտ այսպես է՝",
    description: "անուղղակի + ուղղակի (Indirecto + Directo)",
    tableHeaders: ["Հերթականություն", "Օգտագործվող դերանուններ"],
    tableRows: [
      ["Անուղղակի (առաջին)", "me / te / se / nos / os"],
      ["Ուղղակի (երկրորդ)", "lo / la / los / las"]
    ],
    examples: [
      { es: "Me lo das.", hy: "Դու դա ինձ տալիս ես։ (me = ինձ, lo = դա)" },
      { es: "Te la compro.", hy: "Ես դա քեզ համար գնում եմ։ (te = քեզ համար, la = դա/իգական)" },
      { es: "Nos los envían.", hy: "Նրանք դրանք մեզ ուղարկում են։ (nos = մեզ, los = դրանք/արական)" }
    ]
  },
  {
    id: 7,
    title: "Ինչու է le / les դառնում se",
    titleEs: "Cambio de le/les a se",
    introduction: "Կարևոր կանոն երկու դերանուններ միասին օգտագործելիս։",
    description: "Երբ le կամ les դերանունը գալիս է lo / la / los / las-ից անմիջապես առաջ, այն հնչյունական պատճառներով (կակոֆոնիայից խուսափելու համար) դառնում է se։",
    tableHeaders: ["Սխալ ձև ❌", "Ճիշտ ձև  ✅"],
    tableRows: [
      ["le lo", "se lo"],
      ["le la", "se la"],
      ["le los", "se los"],
      ["le las", "se las"],
      ["les lo", "se lo"],
      ["les la", "se la"],
      ["les los", "se los"],
      ["les las", "se las"]
    ],
    examples: [
      { es: "Doy el libro a Carlos.", hy: "Ես գիրքը տալիս եմ Կառլոսին։" },
      { es: "Le doy el libro.", hy: "Ես նրան տալիս եմ գիրքը։ (le = Կառլոսին)" },
      { es: "Lo doy a Carlos.", hy: "Ես դա տալիս եմ Կառլոսին։ (lo = դա/գիրքը)" },
      { es: "Se lo doy.", hy: "Ես դա նրան տալիս եմ։ (se = նրան [le-ի փոխարեն], lo = դա) | Ոչ թե՝ Le lo doy ❌" }
    ]
  },
  {
    id: 8,
    title: "Վերադարձական դերանուններ",
    titleEs: "Pronombres reflexivos",
    introduction: "Վերադարձական դերանունները ցույց են տալիս, որ մարդը գործողությունը անում է իր վրա / իր համար։",
    description: "Դերանունների և վերադարձական մասնիկների համապատասխանությունը՝",
    tableHeaders: ["Դերանուն", "Reflexivo մասնիկ", "Հայերեն իմաստ"],
    tableRows: [
      ["yo", "me", "ինձ (իմ վրա)"],
      ["tú", "te", "քեզ (քո վրա)"],
      ["él / ella / usted", "se", "իրեն / Ձեզ"],
      ["nosotros/as", "nos", "մեզ (մեր վրա)"],
      ["vosotros/as", "os", "ձեզ (ձեր վրա)"],
      ["ellos / ellas / ustedes", "se", "իրենց / Ձեզ"]
    ],
    examples: [
      { es: "Me ducho.", hy: "Ես ցնցուղ եմ ընդունում։ (իմ վրա)" },
      { es: "Te vistes.", hy: "Դու հագնվում ես։ (ինքդ քեզ)" },
      { es: "Ella se acuesta temprano.", hy: "Նա շուտ է պառկում։ (իրեն պառկեցնում է)" }
    ],
    subsections: [
      {
        title: "Օրինակ՝ levantarse — վեր կենալ բայի խոնարհումը",
        description: "",
        examples: [
          { es: "yo me levanto", hy: "ես վեր եմ կենում" },
          { es: "tú te levantas", hy: "դու վեր ես կենում" },
          { es: "él / ella / usted se levanta", hy: "նա / Դուք վեր է կենում / եք" },
          { es: "nosotros/as nos levantamos", hy: "մենք վեր ենք կենում" },
          { es: "vosotros/as os levantáis", hy: "դուք վեր եք կենում" },
          { es: "ellos / ellas / ustedes se levantan", hy: "նրանք / Դուք վեր են կենում / եք" }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Նախդիրից հետո օգտագործվող դերանուններ",
    titleEs: "Pronombres después de preposición",
    introduction: "Նախդիրներից հետո, օրինակ՝ a, de, para, con, sin, օգտագործվում են հատուկ դերանվանական ձևեր։",
    description: "Դերանունների ձևերը նախդրից հետո՝",
    tableHeaders: ["Իսպաներեն", "Հայերեն"],
    tableRows: [
      ["mí", "ինձ / ես՝ նախդիրից հետո"],
      ["ti", "քեզ"],
      ["él", "նրան (արական)"],
      ["ella", "նրան (իգական)"],
      ["usted", "Ձեզ (հարգական)"],
      ["nosotros/as", "մեզ"],
      ["vosotros/as", "ձեզ"],
      ["ellos / ellas / ustedes", "նրանց / Ձեզ"]
    ],
    examples: [
      { es: "para mí", hy: "ինձ համար" },
      { es: "para ti", hy: "քեզ համար" },
      { es: "con él", hy: "նրա հետ" },
      { es: "sin ella", hy: "առանց նրա" },
      { es: "de nosotros", hy: "մեր մասին / մեզանից" }
    ],
    tips: [
      "Բայց կա երկու հատուկ ձև con (հետ) նախդիրի դեպքում՝",
      "con + mí = conmigo (իմ հետ / ինձ հետ)",
      "con + ti = contigo (քո հետ / քեզ հետ)",
      "Օրինակներ՝ Ven conmigo. (Արի ինձ հետ։) | Quiero hablar contigo. (Ուզում եմ խոսել քեզ հետ։)"
    ]
  },
  {
    id: 10,
    title: "Սեփականության դերանուններ",
    titleEs: "Pronombres posesivos",
    introduction: "Սրանք ցույց են տալիս՝ ում է պատկանում առարկան։",
    description: "Իսպաներենում կան սեփականության դերանունների կարճ և երկար ձևեր՝",
    subsections: [
      {
        title: "Կարճ ձևեր՝ գոյականից առաջ (Adjetivos posesivos)",
        description: "Ուղեկցում են գոյականին և դրվում դրա նախորդող մասում՝",
        examples: [
          { es: "mi / mis", hy: "իմ (եզակի / հոգնակի)" },
          { es: "tu / tus", hy: "քո (եզակի / հոգնակի)" },
          { es: "su / sus", hy: "նրա / Ձեր / նրանց (եզակի / հոգնակի)" },
          { es: "nuestro/a/os/as", hy: "մեր" },
          { es: "vuestro/a/os/as", hy: "ձեր՝ Իսպանիա" },
          { es: "su / sus", hy: "նրանց / Ձեր (հոգնակի)" }
        ]
      },
      {
        title: "Կարճ ձևերի կիրառման օրինակներ",
        description: "",
        examples: [
          { es: "mi casa", hy: "իմ տունը" },
          { es: "mis libros", hy: "իմ գրքերը" },
          { es: "tu amigo", hy: "քո ընկերը" },
          { es: "sus padres", hy: "նրա / նրանց / Ձեր ծնողները" },
          { es: "nuestra clase", hy: "մեր դասը" }
        ]
      },
      {
        title: "Երկար ձևեր՝ գոյականից հետո կամ առանց գոյականի (Pronombres posesivos)",
        description: "Օգտագործվում են առանց գոյականի կամ դրանից հետո շեշտադրման համար՝",
        examples: [
          { es: "mío / mía / míos / mías", hy: "իմը (ըստ սեռի և թվի)" },
          { es: "tuyo / tuya / tuyos / tuyas", hy: "քոնը" },
          { es: "suyo / suya / suyos / suyas", hy: "նրանը / Ձերը / նրանցը" },
          { es: "nuestro/a/os/as", hy: "մերը" },
          { es: "vuestro/a/os/as", hy: "ձերը" }
        ]
      },
      {
        title: "Երկար ձևերի կիրառման օրինակներ",
        description: "",
        examples: [
          { es: "Este libro es mío.", hy: "Այս գիրքը իմն է։" },
          { es: "La casa es nuestra.", hy: "Տունը մերն է։" },
          { es: "Estos zapatos son tuyos.", hy: "Այս կոշիկները քոնն են։" }
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Ցուցական դերանուններ",
    titleEs: "Pronombres demostrativos",
    introduction: "Սրանք ցույց են տալիս՝ այս, այդ, այն՝ կախված խոսողից ունեցած հեռավորությունից։",
    description: "Ցուցական դերանունների ձևերը՝",
    tableHeaders: ["Մոտավորություն", "Արական (եզակի / հոգնակի)", "Իգական (եզակի / հոգնակի)", "Հայերեն իմաստ"],
    tableRows: [
      ["Մոտ (այս)", "este / estos", "esta / estas", "այս / այսոնք"],
      ["Միջին (այդ)", "ese / esos", "esa / esas", "այդ / այդոնք"],
      ["Հեռու (այն)", "aquel / aquellos", "aquella / aquellas", "այն / այնոնք"]
    ],
    examples: [
      { es: "este libro", hy: "այս գիրքը" },
      { es: "esta casa", hy: "այս տունը" },
      { es: "ese coche", hy: "այդ մեքենան" },
      { es: "aquella ciudad", hy: "այն քաղաքը" }
    ],
    tips: [
      "Ցուցականները կարող են նաև լինել առանց գոյականի, որպես դերանուն՝",
      "Quiero este. — Ես այս մեկն եմ ուզում։",
      "Prefiero esa. — Ես այդ մեկն եմ նախընտրում։"
    ]
  },
  {
    id: 12,
    title: "Հարցական դերանուններ",
    titleEs: "Pronombres interrogativos",
    introduction: "Սրանք օգտագործվում են հարցեր ձևակերպելու համար։ Բոլոր հարցական դերանունները գրվում են շեշտանշանով (tilde):",
    description: "Հիմնական հարցական դերանունները՝",
    tableHeaders: ["Իսպաներեն", "Հայերեն"],
    tableRows: [
      ["qué", "ինչ"],
      ["quién / quiénes", "ով / ովքեր"],
      ["cuál / cuáles", "որը / որոնք"],
      ["cuánto/a/os/as", "որքան / քանի (փոփոխվում է ըստ սեռի և թվի)"],
      ["dónde", "որտեղ"],
      ["cuándo", "երբ"],
      ["cómo", "ինչպես"],
      ["por qué", "ինչու"]
    ],
    examples: [
      { es: "¿Qué haces?", hy: "Ի՞նչ ես անում։" },
      { es: "¿Quién es ella?", hy: "Ո՞վ է նա։" },
      { es: "¿Cuál prefieres?", hy: "Ո՞րն ես նախընտրում։" },
      { es: "¿Cuántos años tienes?", hy: "Քանի՞ տարեկան ես։" },
      { es: "¿Dónde vives?", hy: "Որտե՞ղ ես ապրում։" }
    ]
  },
  {
    id: 13,
    title: "Անորոշ դերանուններ",
    titleEs: "Pronombres indefinidos",
    introduction: "Սրանք ցույց են տալիս ոչ հստակ մարդ, բան կամ քանակ։",
    description: "Հիմնական անորոշ դերանուններ՝",
    tableHeaders: ["Իսպաներեն", "Հայերեն"],
    tableRows: [
      ["alguien", "ինչ-որ մեկը"],
      ["nadie", "ոչ ոք"],
      ["algo", "ինչ-որ բան"],
      ["nada", "ոչինչ"],
      ["alguno/a", "ինչ-որ մեկը / որոշ"],
      ["ninguno/a", "ոչ մեկը"],
      ["todo/a/os/as", "ամեն ինչ / բոլոր"],
      ["mucho/a/os/as", "շատ"],
      ["poco/a/os/as", "քիչ"],
      ["otro/a/os/as", "ուրիշ"]
    ],
    examples: [
      { es: "Alguien llama.", hy: "Ինչ-որ մեկը զանգում է։" },
      { es: "No veo a nadie.", hy: "Ես ոչ ոքի չեմ տեսնում։" },
      { es: "Quiero algo frío.", hy: "Ես ինչ-որ սառը բան եմ ուզում։" },
      { es: "No quiero nada.", hy: "Ես ոչինչ չեմ ուզում։" }
    ]
  },
  {
    id: 14,
    title: "Հարաբերական դերանուններ",
    titleEs: "Pronombres relativos",
    introduction: "Սրանք կապում են գլխավոր նախադասությունը երկրորդականի հետ։",
    description: "Հիմնական հարաբերական դերանուններն են՝",
    tableHeaders: ["Իսպաներեն", "Հայերեն"],
    tableRows: [
      ["que", "որը / ով / ինչ"],
      ["quien / quienes", "ով / ովքեր"],
      ["el que / la que", "այն, որը"],
      ["el cual / la cual", "որը՝ ավելի պաշտոնական"],
      ["cuyo/a/os/as", "որի (սեփականության իմաստով)"]
    ],
    examples: [
      { es: "El chico que habla es Carlos.", hy: "Տղան, որը խոսում է, Կառլոսն է։" },
      { es: "La casa que compré es grande.", hy: "Տունը, որը գնեցի, մեծ է։" },
      { es: "La profesora, quien vive aquí, enseña español.", hy: "Ուսուցչուհին, ով այստեղ է ապրում, իսպաներեն է դասավանդում։" }
    ]
  },
  {
    id: 15,
    title: "Դերանունների տեղը նախադասության մեջ",
    titleEs: "Posición de los pronombres",
    introduction: "Դերանունների ճիշտ տեղը նախադասության մեջ ամենակարևոր թեմաներից է։",
    description: "Կախված բայի ձևից, դերանունը կարող է գրվել բայից առաջ կամ կպչել բային՝",
    subsections: [
      {
        title: "1. Սովորական խոնարհված բայի հետ — Դերանունը բայից ԱՌԱՋ",
        description: "Օրինակներ՝",
        examples: [
          { es: "Lo veo.", hy: "Ես նրան / դա տեսնում եմ։" },
          { es: "Le escribo.", hy: "Ես նրան գրում եմ։" },
          { es: "Me levanto.", hy: "Ես վեր եմ կենում։" }
        ]
      },
      {
        title: "2. Անորոշ դերբայի (Infinitivo) հետ — Երկու տարբերակ",
        description: "Դերանունը կարող է լինել առաջ կամ ձուլվել (կպչել) անորոշ դերբայի վերջին՝",
        examples: [
          { es: "Lo voy a comprar. / Voy a comprarlo.", hy: "Ես պատրաստվում եմ դա գնել։" },
          { es: "Me voy a levantar. / Voy a levantarme.", hy: "Ես պատրաստվում եմ վեր կենալ։" }
        ]
      },
      {
        title: "3. Դերբայի (Gerundio) հետ — Երկու տարբերակ",
        description: "Դերանունը կարող է լինել առաջ կամ ձուլվել (կպչել) դերբային վերջից՝",
        examples: [
          { es: "Lo estoy leyendo. / Estoy leyéndolo.", hy: "Ես դա կարդում եմ։" },
          { es: "Me estoy duchando. / Estoy duchándome.", hy: "Ես ցնցուղ եմ ընդունում։" }
        ]
      },
      {
        title: "4. Դրական հրամայականում (Imperativo Afirmativo) — Կպչում է վերջում",
        description: "Դերանունը պարտադիր կերպով ձուլվում է բայի վերջին՝",
        examples: [
          { es: "Dámelo.", hy: "Տուր դա ինձ։ (da = տուր, me = ինձ, lo = դա)" },
          { es: "Ayúdame.", hy: "Օգնիր ինձ։" },
          { es: "Levántate.", hy: "Վեր կաց։" }
        ]
      },
      {
        title: "5. Բացասական հրամայականում (Imperativo Negativo) — Բայից ԱՌԱՋ",
        description: "Դերանունը գրվում է բայից առանձին և դրա նախորդող դիրքում՝",
        examples: [
          { es: "No me lo des.", hy: "Մի տուր դա ինձ։" },
          { es: "No me ayudes.", hy: "Մի օգնիր ինձ։" },
          { es: "No te levantes.", hy: "Վեր մի կաց։" }
        ]
      }
    ]
  },
  {
    id: 16,
    title: "Ամփոփում և Ամենակարևորը հիշելու համար",
    titleEs: "Resumen y puntos clave",
    introduction: "Ամփոփիչ աղյուսակ արագ կրկնության համար։",
    description: "Դերանունների բոլոր հիմնական դասերը՝",
    tableHeaders: ["Տեսակ", "Օրինակ", "Հայերեն"],
    tableRows: [
      ["Անձնական (Sujeto)", "yo, tú, él", "ես, դու, նա"],
      ["Ուղիղ խնդիր (OD)", "me, te, lo, la", "ինձ, քեզ, նրան / դա"],
      ["Անուղղակի խնդիր (OI)", "me, te, le", "ինձ, քեզ, նրան / ում համար"],
      ["Վերադարձական (Reflexivo)", "me, te, se", "ինձ, քեզ, իրեն (վերադարձ)` me levanto"],
      ["Նախդիրից հետո", "mí, ti, él", "ինձ, քեզ, նրան (para mí, con él)"],
      ["Սեփականության", "mi, tu, su", "իմ, քո, նրա (mi casa, el libro es mío)"],
      ["Ցուցական", "este, ese, aquel", "այս, այդ, այն (este libro, esa ciudad)"],
      ["Հարցական", "qué, quién, cuál", "ինչ, ով, որը"],
      ["Անորոշ", "alguien, nadie", "ինչ-որ մեկը, ոչ ոք (alguien llama, nada)"],
      ["Հարաբերական", "que, quien", "որը, ով (el chico que habla)"]
    ],
    tips: [
      "Yo, tú, él… — ով է անում գործողությունը։",
      "Me, te, lo, la… — ում / ինչին է վերաբերում գործողությունը։",
      "Le, les — ում / ում համար։",
      "Me, te, se… — վերադարձական բայերի հետ։",
      "Mí, ti — նախդիրներից հետո։",
      "Mi, tu, su — իմ, քո, նրա։",
      "Կարևոր կիրառություն՝ Yo te lo doy. — Ես դա քեզ տալիս եմ։ (yo — ես | te — քեզ | lo — դա | doy — տալիս եմ)"
    ]
  }
];

export const GAMES_LIST: GameInfo[] = [
  {
    id: "pronoun-match",
    title: "1. Դերանունների Զույգեր",
    subtitle: "Pronoun Matching",
    description: "Համապատասխանեցրեք իսպաներեն և հայերեն դերանունները արագ քարտերով ճնշման տակ։",
    difficulty: "Հեշտ"
  },
  {
    id: "verb-conjugation",
    title: "2. Բայի Խոնարհողը",
    subtitle: "Conjugation Mastery",
    description: "Լրացրեք բայերի ճիշտ խոնարհումը կամ համապատասխան սուբյեկտները Presente-ում (hablar-ի և levantarse-ի օրինակով)։",
    difficulty: "Միջին"
  },
  {
    id: "direct-indirect",
    title: "3. Ուղիղ VS Անուղղակի",
    subtitle: "Direct vs Indirect Object",
    description: "Սովորեք ճիշտ ընտրել 'lo/la' (ուղիղ խնդիր, ում/ինչ) կամ 'le' (անուղղակի խնդիր, ում համար)։",
    difficulty: "Միջին"
  },
  {
    id: "double-pronouns",
    title: "4. Երկու դերանուն միասին (se lo)",
    subtitle: "Double Pronouns Engine",
    description: "Փորձարկեք 'անուղղակի + ուղղակի' կառուցվածքը և le lo -> se lo կանոնը։",
    difficulty: "Դժվար"
  },
  {
    id: "prepositions",
    title: "5. Նախդիրային Կապ",
    subtitle: "Prepositional Pronouns",
    description: "Կիրառեք mí, ti, contigo, conmigo և այլ դերանուններ նախդիրներից հետո:",
    difficulty: "Հեշտ"
  },
  {
    id: "possessive-demostrative",
    title: "6. Ցուցական և Տիրական",
    subtitle: "Possessives & Demonstratives",
    description: "Տիրապետեք mi/mío, tu/tuyo, este/ese/aquel տարբերություններին:",
    difficulty: "Միջին"
  }
];

export const QUIZ_QUESTIONS: Record<string, QuizQuestion[]> = {
  "verb-conjugation": [
    {
      id: "vc1",
      type: "multiple-choice",
      instruction: "Ընտրեք ճիշտ խոնարհված բայը",
      prompt: "Yo ___ español. (ես խոսում եմ)",
      options: ["hablo", "hablas", "habla", "hablamos"],
      correctAnswer: "hablo",
      explanation: "yo-ի դեպքում hablar բայը խոնարհվում է դառնալով 'hablo' (ես խոսում եմ)։"
    },
    {
      id: "vc2",
      type: "multiple-choice",
      instruction: "Ընտրեք համապատասխան դերանունը",
      prompt: "___ habլas español. (դու խոսում ես)",
      options: ["yo", "él", "tú", "nosotros"],
      correctAnswer: "tú",
      explanation: "hablas-ը համապատասխանում է երկրորդ դեմքին՝ tú (դու)։"
    },
    {
      id: "vc3",
      type: "multiple-choice",
      instruction: "Ընտրեք ճիշտ տարբերակը",
      prompt: "Usted ___ español. (Դուք խոսում եք)",
      options: ["hablo", "hablas", "habla", "hablan"],
      correctAnswer: "habla",
      explanation: "Usted-ը (հարգական Դուք) օգտագործում է նույն բայի ձևը, ինչ él / ella-ն (habla)։"
    },
    {
      id: "vc4",
      type: "multiple-choice",
      instruction: "Ընտրեք ճիշտ տարբերակը",
      prompt: "Nosotros ___ español. (Մենք խոսում ենք)",
      options: ["hablamos", "habláis", "hablan", "hablo"],
      correctAnswer: "hablamos",
      explanation: "Nosotros դերանվան հետ hablar բայը խոնարհվում է որպես 'hablamos'։"
    },
    {
      id: "vc5",
      type: "multiple-choice",
      instruction: "Ընտրեք ճիշտ տարբերակը",
      prompt: "Vosotros ___ español. (Դուք խոսում եք)",
      options: ["hablamos", "habláis", "hablan", "hablas"],
      correctAnswer: "habláis",
      explanation: "Vosotros դերանվան հետ (դուք՝ Իսպանիայում) hablar բայը դառնում է 'habláis'։"
    },
    {
      id: "vc6",
      type: "multiple-choice",
      instruction: "Վերադարձական բայի լրացում",
      prompt: "Yo ___ levanto temprano. (ես վեր եմ կենում)",
      options: ["me", "te", "se", "nos"],
      correctAnswer: "me",
      explanation: "yo դերանվան վերադարձական (reflexivo) մասնիկն է 'me'՝ me levanto (ես վեր եմ կենում)։"
    },
    {
      id: "vc7",
      type: "multiple-choice",
      instruction: "Վերադարձական բայի լրացում",
      prompt: "Ellos ___ levantan a las 8:00.",
      options: ["me", "te", "se", "os"],
      correctAnswer: "se",
      explanation: "Ellos/ellas/ustedes-ի վերադարձական մասնիկն է 'se'՝ se levantan (նրանք վեր են կենում)։"
    },
    {
      id: "vc8",
      type: "multiple-choice",
      instruction: "Լրացրեք ճիշտ վերադարձական ձևը",
      prompt: "Nosotros ___ levantamos temprano.",
      options: ["me", "se", "nos", "os"],
      correctAnswer: "nos",
      explanation: "Nosotros դերանվան հետ օգտագործվում է 'nos' վերադարձական մասնիկը՝ nos levantamos (մենք վեր ենք կենում)։"
    },
    {
      id: "vc9",
      type: "multiple-choice",
      instruction: "Ընտրեք ճիշտ խոնարհումը",
      prompt: "Tú ___ vistes muy bien. (Դու հագնվում ես)",
      options: ["me", "te", "se", "nos"],
      correctAnswer: "te",
      explanation: "Tú դերանվան հետ համապատասխանում է 'te' մասնիկը՝ te vistes (դու հագնվում ես)։"
    },
    {
      id: "vc10",
      type: "multiple-choice",
      instruction: "Ընտրեք ճիշտ տարբերակը",
      prompt: "Ella ___ acuesta temprano.",
      options: ["me", "te", "se", "os"],
      correctAnswer: "se",
      explanation: "Ella դերանվան վերադարձական ձևն է 'se acuesta' (նա շուտ է պառկում)։"
    }
  ],
  "direct-indirect": [
    {
      id: "di1",
      type: "multiple-choice",
      instruction: "Փոխարինեք ուղիղ խնդիրը (Carlos-ին)",
      prompt: "Veo a Carlos. -> ___ veo. (Ես նրան տեսնում եմ)",
      options: ["Lo", "La", "Le", "Me"],
      correctAnswer: "Lo",
      explanation: "Carlos-ը (արական, եզակի) ուղիղ խնդիր է, պատասխանում է 'ո՞ւմ' հարցին։ Փոխարինվում է 'lo' դերանունով։"
    },
    {
      id: "di2",
      type: "multiple-choice",
      instruction: "Փոխարինեք ուղիղ խնդիրը (Lucía-ին)",
      prompt: "Veo a Lucía. -> ___ veo. (Ես նրան տեսնում եմ)",
      options: ["Lo", "La", "Le", "Nos"],
      correctAnswer: "La",
      explanation: "Lucía-ն (իգական, եզակի) ուղիղ խնդիր է: Փոխարինվում է 'la' դերանունով։"
    },
    {
      id: "di3",
      type: "multiple-choice",
      instruction: "Փոխարինեք առարկան (el libro)",
      prompt: "Compro el libro. -> ___ compro. (Ես այն գնում եմ)",
      options: ["Lo", "La", "Le", "Los"],
      correctAnswer: "Lo",
      explanation: "El libro (արական, եզակի) ուղիղ խնդիր է (ինչը՞ գնել)՝ lo compro (ես այն գնում եմ)։"
    },
    {
      id: "di4",
      type: "multiple-choice",
      instruction: "Փոխարինեք առարկան (la camisa)",
      prompt: "Compro la camisa. -> ___ compro. (Ես այն գնում եմ)",
      options: ["Lo", "La", "Las", "Le"],
      correctAnswer: "La",
      explanation: "La camisa (իգական, եզակի) ուղիղ խնդիր է՝ la compro (ես այն գնում եմ)։"
    },
    {
      id: "di5",
      type: "multiple-choice",
      instruction: "Փոխարինեք անուղղակի խնդիրը (Carlos-ին. ում տալ?)",
      prompt: "Doy el libro a Carlos. -> ___ doy el libro. (Ես նրան տալիս եմ գիրքը)",
      options: ["Lo", "La", "Le", "Les"],
      correctAnswer: "Le",
      explanation: "Այստեղ Carlos-ը անուղղակի խնդիր է (ում հասցեով է գործողությունը՝ ում տալ գիրքը)։ Փոխարինվում է 'le' դերանունով։"
    },
    {
      id: "di6",
      type: "multiple-choice",
      instruction: "Փոխարինեք անուղղակի խնդիրը (մայրիկիս)",
      prompt: "Escribo a mi madre. -> ___ escribo. (Ես նրան գրում եմ)",
      options: ["La", "Le", "Lo", "Me"],
      correctAnswer: "Le",
      explanation: "'Գրում եմ մայրիկիս' (ում՞) անուղղակի խնդիր է։ Իսպաներենում թե՛ արական, թե՛ իգական անուղղակի դերանունը եզակիում 'le' է։"
    },
    {
      id: "di7",
      type: "multiple-choice",
      instruction: "Փոխարինեք անուղղակի խնդիրը (երեխաներին)",
      prompt: "Compramos regalos a los niños. -> ___ compramos regalos.",
      options: ["Los", "Las", "Les", "Se"],
      correctAnswer: "Les",
      explanation: "Los niños (երեխաներին) հոգնակի անուղղակի խնդիր է (ում համար գնել)՝ 'les' compramos regalos։"
    },
    {
      id: "di8",
      type: "multiple-choice",
      instruction: "Որոշեք դերանվան տեսակը 'Veo a mis amigos. -> Los veo.' նախադասության մեջ։",
      prompt: "mis amigos-ին փոխարինող 'Los'-ը ի՞նչ դերանուն է։",
      options: ["Անուղղակի խնդրի (Objeto Indirecto)", "Ուղիղ խնդրի (Objeto Directo)", "Վերադարձական (Reflexivo)"],
      correctAnswer: "Ուղիղ խնդրի (Objeto Directo)",
      explanation: "'Veo a mis amigos' (տեսնում եմ ընկերներիս) պատասխանում է ո՞ւմ հարցին (ուղղակիորեն տեսնել): Ուստի դա ուղիղ խնդիր է (Los veo)։"
    }
  ],
  "double-pronouns": [
    {
      id: "dp1",
      type: "multiple-choice",
      instruction: "Փոփոխեք 'le lo' կազմությունը",
      prompt: "Doy el libro a Carlos. (le doy el libro + lo doy = Le lo doy ❌) -> ___ doy.",
      options: ["Le lo", "Se lo", "Te lo", "Me lo"],
      correctAnswer: "Se lo",
      explanation: "Le-ն lo-ից առաջ դառնում է 'se'։ Ճիշտ ձևն է 'Se lo doy' (Ես դա նրան տալիս եմ)։"
    },
    {
      id: "dp2",
      type: "multiple-choice",
      instruction: "Ընտրեք ճիշտ հաջորդականությունը (դա ինձ տալ)",
      prompt: "Դու դա ինձ տալիս ես (me + lo):",
      options: ["Lo me das.", "Me lo das.", "Se lo das.", "Le lo das."],
      correctAnswer: "Me lo das.",
      explanation: "Հաջորդականությունը միշտ էլ 'անուղղակի + ուղղակի' է (me + lo)՝ Me lo das:"
    },
    {
      id: "dp3",
      type: "multiple-choice",
      instruction: "Ընտրեք ճիշտ տարբերակը",
      prompt: "Ես դա քեզ համար գնում եմ (te + la/camisa):",
      options: ["La te compro.", "Se la compro.", "Te la compro.", "Te le compro."],
      correctAnswer: "Te la compro.",
      explanation: "Անուղղակի (te) + ուղղակի (la) -> Te la compro:"
    },
    {
      id: "dp4",
      type: "multiple-choice",
      instruction: "Ընտրեք ճիշտ տարբերակը",
      prompt: "Նրանք դրանք մեզ ուղարկում են (nos + los):",
      options: ["Nos los envían.", "Los nos envían.", "Se los envían.", "Nos le envían."],
      correctAnswer: "Nos los envían.",
      explanation: "Անուղղակի (nos) + ուղղակի (los) -> 'Nos los envían' (Նրանք դրանք մեզ ուղարկում են)։"
    },
    {
      id: "dp5",
      type: "multiple-choice",
      instruction: "Կիրառեք se lo / se la կանոնը (նրանց համար նվերներ գնել)",
      prompt: "Compro regalos a los niños. -> (les + los) -> ___ compro.",
      options: ["Les los", "Se los", "Los les", "Te los"],
      correctAnswer: "Se los",
      explanation: "Les (անուղղակի) + los (ուղղակի) -> les los-ը դառնում է 'se los'՝ Se los compro (Ես դրանք նրանց համար գնում եմ)։"
    },
    {
      id: "dp6",
      type: "multiple-choice",
      instruction: "Դրական հրամայականի հետ կպչող դերանուններ",
      prompt: "Տուր դա ինձ! (դա = lo, ինձ = me | da = տուր):",
      options: ["Damelme", "Dámelo", "Lodame", "Sedame"],
      correctAnswer: "Dámelo",
      explanation: "Դրական հրամայականում դերանունները կպչում են բային վերջից (imperativo + անուղղակի + ուղղակի)՝ Dámelo:"
    },
    {
      id: "dp7",
      type: "multiple-choice",
      instruction: "Բացասական հրամայականի հետ դերանուններ",
      prompt: "Մի տուր դա ինձ! (no + me + lo + des)",
      options: ["No dámelo.", "No me lo des.", "No lo me des.", "No se lo des."],
      correctAnswer: "No me lo des.",
      explanation: "Բացասական հրամայականի դեպքում դերանունները գրվում են բայից առաջ, անջատ՝ 'No me lo des' (Մի տուր դա ինձ)։"
    }
  ],
  "prepositions": [
    {
      id: "pr1",
      type: "multiple-choice",
      instruction: "Ընտրեք ճիշտ նախդիրային ձևը (ինձ համար)",
      prompt: "para ___ (ինձ համար)",
      options: ["yo", "mí", "me", "conmigo"],
      correctAnswer: "mí",
      explanation: "para (համար) նախդիրից հետո yo-ն դառնում է հատուկ շեշտված ձև՝ mí (para mí)։"
    },
    {
      id: "pr2",
      type: "multiple-choice",
      instruction: "Ընտրեք ճիշտ նախդիրային ձևը (քեզ համար)",
      prompt: "para ___ (քեզ համար)",
      options: ["tú", "te", "ti", "contigo"],
      correctAnswer: "ti",
      explanation: "Նախդիրից հետո tú-ի համապատասխան ձևն է 'ti'՝ para ti (քեզ համար)։"
    },
    {
      id: "pr3",
      type: "multiple-choice",
      instruction: "Ընտրեք հատուկ միացյալ ձևը (իմ հետ)",
      prompt: "Արի իմ հետ: -> Ven ___.",
      options: ["con mí", "con me", "conmigo", "contigo"],
      correctAnswer: "conmigo",
      explanation: "con + mí կազմությունը դառնում է մեկ հատուկ բառ՝ 'conmigo' (իմ հետ / ինձ հետ)։"
    },
    {
      id: "pr4",
      type: "multiple-choice",
      instruction: "Ընտրեք հատուկ միացյալ ձևը (քո հետ)",
      prompt: "Ուզում եմ խոսել քո հետ: -> Quiero hablar ___.",
      options: ["con ti", "contigo", "conmigo", "con te"],
      correctAnswer: "contigo",
      explanation: "con + ti կազմությունը դառնում է մեկ հատուկ բառ՝ 'contigo' (քո հետ / քեզ հետ)։"
    },
    {
      id: "pr5",
      type: "multiple-choice",
      instruction: "Ընտրեք ճիշտ տարբերակը",
      prompt: "առանց նրա (իգական): -> sin ___",
      options: ["mí", "ella", "ti", "la"],
      correctAnswer: "ella",
      explanation: "Մյուս բոլոր դերանունները (él, ella, usted, nosotros, vosotros, ellos, ellas, ustedes) նախդիրից հետո պահպանում են իրենց սովորական սուբյեկտային ձևը՝ sin ella (առանց նրա)։"
    },
    {
      id: "pr6",
      type: "multiple-choice",
      instruction: "Ընտրեք ճիշտ տարբերակը",
      prompt: "նրա հետ (արական): -> con ___",
      options: ["él", "mí", "conmigo", "lo"],
      correctAnswer: "él",
      explanation: "con նախդրից հետո él դերանունը մնում է նույնը՝ con él (նրա հետ)։"
    }
  ],
  "possessive-demostrative": [
    {
      id: "pd1",
      type: "multiple-choice",
      instruction: "Սեփականություն (ինձ պատկանող, եզակի)",
      prompt: "___ casa (իմ տունը - գոյականից առաջ)",
      options: ["mi", "mis", "mío", "tu"],
      correctAnswer: "mi",
      explanation: "Գոյականից առաջ իմաստը փոխանցելու համար օգտագործվում է կարճ ձևը՝ 'mi casa'։"
    },
    {
      id: "pd2",
      type: "multiple-choice",
      instruction: "Սեփականություն (հոգնակի առարկաներ)",
      prompt: "___ libros (իմ գրքերը)",
      options: ["mi", "mis", "míos", "tus"],
      correctAnswer: "mis",
      explanation: "Քանի որ libros-ը հոգնակի է, 'mi'-ն նույնպես դառնում է հոգնակի՝ 'mis' (mis libros)։"
    },
    {
      id: "pd3",
      type: "multiple-choice",
      instruction: "Սեփականություն (երկար ձև՝ գոյականից հետո)",
      prompt: "Este libro es ___ (Այս գիրքը իմն է)։",
      options: ["mi", "tuyo", "mío", "mía"],
      correctAnswer: "mío",
      explanation: "Գոյականից հետո կամ առանց գոյականի օգտագործվում է երկար ձևը. 'libro'-ն արական եզակի է, ուստի՝ 'mío':"
    },
    {
      id: "pd4",
      type: "multiple-choice",
      instruction: "Սեփականություն (մեր տունը)",
      prompt: "La casa es ___ (Տունը մերն է)։",
      options: ["nuestro", "nuestra", "mi", "vuestro"],
      correctAnswer: "nuestra",
      explanation: "Casa-ն իգական եզակի է, ուստի սեփականության երկար ձևը համապատասխանում է՝ 'nuestra' (La casa es nuestra)։"
    },
    {
      id: "pd5",
      type: "multiple-choice",
      instruction: "Ցուցական դերանուն (մոտիկ, արական)",
      prompt: "___ libro (այս գիրքը - մոտ խոսողին)",
      options: ["este", "esta", "ese", "aquel"],
      correctAnswer: "este",
      explanation: "libro-ն արական է, 'այս' (մոտիկ) տարբերակն է 'este' (este libro)։"
    },
    {
      id: "pd6",
      type: "multiple-choice",
      instruction: "Ցուցական դերանուն (միջին հեռավորություն, իգական)",
      prompt: "___ casa (այդ տունը - միջին հեռավորություն)",
      options: ["esta", "esa", "aquella", "ese"],
      correctAnswer: "esa",
      explanation: "'այդ' (միջին հեռավորության) իգական ձևն է 'esa' (esa casa)։"
    },
    {
      id: "pd7",
      type: "multiple-choice",
      instruction: "Ցուցական դերանուն (հեռու, իգական)",
      prompt: "___ ciudad (այն քաղաքը - հեռու խոսողից)",
      options: ["esta", "esa", "aquella", "aquel"],
      correctAnswer: "aquella",
      explanation: "'այն' (հեռու տեղադրության) իգական ձևն է 'aquella' (aquella ciudad)։"
    },
    {
      id: "pd8",
      type: "multiple-choice",
      instruction: "Ցուցական դերանուն առանց գոյականի",
      prompt: "Prefiero ___ (Ես այդ մեկն եմ նախընտրում - իգական)։",
      options: ["este", "esta", "esa", "aquel"],
      correctAnswer: "esa",
      explanation: "Առանց գոյականի 'esa'-ն նշանակում է 'այդ մեկը' (իգական)՝ Prefiero esa."
    }
  ]
};

export const PRONOUN_MATCH_CARDS = [
  { es: "yo", hy: "ես" },
  { es: "tú", hy: "դու" },
  { es: "él", hy: "նա (արական)" },
  { es: "ella", hy: "նա (իգական)" },
  { es: "usted", hy: "Դուք (հարգական)" },
  { es: "nosotros", hy: "մենք (արական)" },
  { es: "vosotros", hy: "դուք (իսպանիա)" },
  { es: "ellos", hy: "նրանք (արական)" },
  { es: "ellas", hy: "նրանք (իգական)" },
  { es: "ustedes", hy: "Դուք (հոգնակի)" },
  { es: "me", hy: "ինձ / ինձ վրա" },
  { es: "te", hy: "քեզ / քեզ վրա" },
  { es: "lo", hy: "նրան / դա (արական OD)" },
  { es: "la", hy: "նրան / դա (իգական OD)" },
  { es: "le", hy: "նրան (OI)" },
  { es: "nos", hy: "մեզ / մեզ վրա" },
  { es: "os", hy: "ձեզ / ձեզ վրա" },
  { es: "se", hy: "իրեն / իրենց (վերադարձ)" },
  { es: "conmigo", hy: "իմ հետ" },
  { es: "contigo", hy: "քո հետ" },
  { es: "mí", hy: "ինձ (նախդիրից հետո)" },
  { es: "ti", hy: "քեզ (նախդիրից հետո)" },
  { es: "mi", hy: "իմ (գոյականից առաջ)" },
  { es: "mío", hy: "իմը" },
  { es: "tu", hy: "քո (գոյականից առաջ)" },
  { es: "tuyo", hy: "քոնն" },
  { es: "su", hy: "նրա / նրանց / Ձեր" },
  { es: "suyo", hy: "նրանը / իրենը" },
  { es: "este", hy: "այս" },
  { es: "ese", hy: "այդ" },
  { es: "aquel", hy: "այն" }
];
