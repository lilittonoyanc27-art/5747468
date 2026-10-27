import { TheoryTopic } from './types.ts';

export const THEORY_TOPICS: TheoryTopic[] = [
  {
    id: 'tema1',
    number: 1,
    title: 'La Literatura Popular',
    titleHy: 'Ժողովրդական գրականություն',
    subtitle: 'Tradición oral, anonimato y transmisión colectiva',
    subtitleHy: 'Բանավոր ավանդույթ, անանունություն և հավաքական փոխանցում',
    summaryEs: 'La literatura popular nace del pueblo y se transmite oralmente de generación en generación. Sus obras no tienen un autor conocido y cambian con el paso del tiempo.',
    summaryHy: 'Ժողովրդական գրականությունը ծնվում է ժողովրդից և բանավոր կերպով փոխանցվում սերնդեսերունդ: Այդ ստեղծագործությունները չունեն հայտնի հեղինակ և ժամանակի ընթացքում փոփոխվում են:',
    concepts: [
      {
        id: 'c1_def',
        name: '¿Qué es la Literatura Popular?',
        nameHy: 'Ի՞նչ է ժողովրդական գրականությունը',
        stageEntender: {
          es: 'Es el conjunto de obras literarias (canciones, romances, cuentos) creadas por el pueblo para entretener, educar o expresar emociones.',
          hy: 'Սա գրական ստեղծագործությունների (երգեր, ռոմանսներ, հեքիաթներ) ամբողջությունն է, որոնք ստեղծվել են ժողովրդի կողմից՝ զվարճացնելու, ուսուցանելու կամ հույզեր արտահայտելու համար:'
        },
        stageRecordar: {
          keys: [
            { es: 'Origen en el pueblo', hy: 'Ծագումը ժողովրդի մեջ' },
            { es: 'Transmisión oral', hy: 'Բանավոր փոխանցում' },
            { es: 'Colectiva y compartida', hy: 'Հավաքական և ընդհանուր' }
          ]
        },
        stageReconocer: {
          textEs: 'Una canción de cuna que canta una abuela a su nieto sin saber quién la inventó.',
          highlightEs: 'sin saber quién la inventó',
          explanationEs: 'Es literatura popular porque se aprende en familia por la voz, sin libros.',
          textHy: 'Օրորոցային երգ, որը տատիկը երգում է թոռնիկին՝ չիմանալով, թե ով է այն հորինել:',
          highlightHy: 'չիմանալով, թե ով է այն հորինել',
          explanationHy: 'Սա ժողովրդական գրականություն է, որովհետև ընտանիքում սովորում են բանավոր՝ առանց գրքերի:'
        },
        examplesSimple: [
          { es: 'Que llueva, que llueva, la Virgen de la Cueva...', hy: 'Անձրև՛ արի, անձրև՛ արի, Քարանձավի Տիրամայր...' },
          { es: 'Cinco lobitos tiene la loba, blancos y negros detrás de la escoba.', hy: 'Գայլուհին հինգ գայլուկ ունի՝ սպիտակ ու սև, ավելի հետևում:' }
        ],
        examplesComplex: [
          { es: 'Romance del conde Olinos, que madrugaba a pasear...', hy: 'Կոմս Օլինոսի ռոմանսը, ով վաղ առավոտյան զբոսնելու էր ելել...' },
          { es: 'Estaba el señor Don Gato sentadito en su tejado...', hy: 'Պարոն Կատուն նստած էր իր տանիքին...' }
        ]
      },
      {
        id: 'c1_caract',
        name: 'Transmisión Oral y Obras Anónimas',
        nameHy: 'Բանավոր փոխանցում և անանուն ստեղծագործություններ',
        stageEntender: {
          es: 'Las obras populares se transmiten de boca en boca (oralidad). Al no registrarse por escrito al principio, no se conoce al autor original: son anónimas.',
          hy: 'Ժողովրդական ստեղծագործությունները փոխանցվում են բերանից բերան (բանավոր): Սկզբում չգրառվելու պատճառով սկզբնական հեղինակը հայտնի չէ. դրանք անանուն են:'
        },
        stageRecordar: {
          keys: [
            { es: 'De boca en boca', hy: 'Բերանից բերան' },
            { es: 'Autor anónimo', hy: 'Անանուն հեղինակ' },
            { es: 'Generación en generación', hy: 'Սերնդեսերունդ' }
          ]
        },
        stageReconocer: {
          textEs: 'Un romance medieval conservado por los campesinos durante siglos sin firma de autor.',
          highlightEs: 'sin firma de autor',
          explanationEs: 'La falta de autor individual demuestra su carácter anónimo y popular.',
          textHy: 'Միջնադարյան ռոմանս, որը դարեր շարունակ պահպանվել է գյուղացիների կողմից՝ առանց հեղինակի ստորագրության:',
          highlightHy: 'առանց հեղինակի ստորագրության',
          explanationHy: 'Հեղինակի բացակայությունն ապացուցում է դրա անանուն և ժողովրդական բնույթը:'
        },
        examplesSimple: [
          { es: 'El cantar de corro que cantan los niños en el patio.', hy: 'Երեխաների շուրջպարի երգը բակում:' },
          { es: 'Los refranes populares transmitidos por los abuelos.', hy: 'Տատիկ-պապիկներից փոխանցված ժողովրդական ասացվածքները:' }
        ],
        examplesComplex: [
          { es: 'Los cantares de gesta que recitaban los juglares de pueblo en pueblo.', hy: 'Հերոսական երգերը (cantares de gesta), որոնք ժուգլյարները (գուսանները) արտասանում էին գյուղից գյուղ:' },
          { es: 'Las coplas tradicionales transmitidas durante la vendimia.', hy: 'Ավանդական քառյակները, որոնք երգվում էին խաղողաքաղի ժամանակ:' }
        ]
      },
      {
        id: 'c1_variantes',
        name: 'Modificaciones y Variantes',
        nameHy: 'Փոփոխություններ և տարբերակներ (վարիանտներ)',
        stageEntender: {
          es: 'Al transmitirse de memoria, cada persona olvida o añade detalles. Por eso existen diferentes versiones (variantes) de una misma obra popular.',
          hy: 'Հիշողությամբ փոխանցվելիս յուրաքանչյուր մարդ ինչ-որ մանրուք մոռանում է կամ ավելացնում: Ահա թե ինչու նույն ժողովրդական ստեղծագործությունն ունենում է տարբեր տարբերակներ (վարիանտներ):'
        },
        stageRecordar: {
          keys: [
            { es: 'Memoria humana', hy: 'Մարդկային հիշողություն' },
            { es: 'Multiplicidad de versiones', hy: 'Տարբերակների բազմազանություն' },
            { es: 'Evolución continua', hy: 'Շարունակական զարգացում' }
          ]
        },
        stageReconocer: {
          textEs: 'En Castilla dicen "blanca me era yo", y en Andalucía "morena me era yo" en el mismo romance.',
          highlightEs: 'diferentes palabras en cada región',
          explanationEs: 'Son variantes regionales producidas por la transmisión oral.',
          textHy: 'Կաստիլիայում ասում են «ես սպիտակամորթ էի», իսկ Անդալուսիայում՝ «ես թխահեր էի» նույն ռոմանսում:',
          highlightHy: 'տարբեր բառեր յուրաքանչյուր շրջանում',
          explanationHy: 'Դրանք տարածաշրջանային տարբերակներ են՝ առաջացած բանավոր փոխանցման հետևանքով:'
        },
        examplesSimple: [
          { es: 'Dos pueblos cantan la misma jota con distinta letra.', hy: 'Երկու գյուղ երգում են նույն խոտան՝ տարբեր բառերով:' },
          { es: 'Caperucita Roja contada con diferentes finales según la región.', hy: 'Կարմիր Գլխարկի հեքիաթը՝ պատմված տարբեր ավարտներով՝ ըստ տարածաշրջանի:' }
        ],
        examplesComplex: [
          { es: 'Las distintas versiones del Romance del Prisionero recogidas en el siglo XVI.', hy: '16-րդ դարում գրառված «Բանտարկյալի ռոմանսի» տարբեր տարբերակները:' },
          { es: 'Cancioncillas sefardíes conservadas con cambios léxicos en los Balcanes.', hy: 'Սեֆարդյան երգերը, որոնք պահպանվել են Բալկաններում բառային փոփոխություններով:' }
        ]
      },
      {
        id: 'c1_lenguaje',
        name: 'Lenguaje Popular y Recursos Orales',
        nameHy: 'Ժողովրդական լեզու և բանավոր միջոցներ',
        stageEntender: {
          es: 'Utiliza expresiones coloquiales, onomatopeyas y llamadas directas de atención al receptor ("¡Mirad!", "¡Oíd!") para mantener despierto al público.',
          hy: 'Օգտագործում է խոսակցական արտահայտություններ, բնաձայնություններ (onomatopeyas) և ունկնդրին ուղղված ուղիղ կոչեր («Նայե՛ք», «Լսե՛ք»), որպեսզի գրավի լսարանի ուշադրությունը:'
        },
        stageRecordar: {
          keys: [
            { es: 'Expresiones coloquiales', hy: 'Խոսակցական արտահայտություններ' },
            { es: 'Onomatopeyas', hy: 'Բնաձայնություններ' },
            { es: 'Llamadas al receptor (¡Oíd!)', hy: 'Ուղղված կոչեր ունկնդրին (Լսե՛ք)' }
          ]
        },
        stageReconocer: {
          textEs: '¡Bien oiréis lo que decía el buen rey don Fernando!',
          highlightEs: '¡Bien oiréis...!',
          explanationEs: 'Es una llamada al oyente propia del juglar para captar su atención.',
          textHy: '«Լա՛վ լսեք, թե ինչ էր ասում բարի արքա Դոն Ֆերնանդոն»:',
          highlightHy: '«Լա՛վ լսեք...»',
          explanationHy: 'Սա ժուգլյարի (երգչի) կոչն է ունկնդրին՝ նրա ուշադրությունը գրավելու համար:'
        },
        examplesSimple: [
          { es: '¡Escuchad, señores, esta historia!', hy: 'Լսե՛ք, պարոնայք, այս պատմությունը:' },
          { es: 'Y el lobo hizo: ¡zas! y saltó la valla.', hy: 'Եվ գայլը՝ շա՜խկ, ու թռավ ցանկապատի վրայով:' }
        ],
        examplesComplex: [
          { es: '¡Quién hubiese tal ventura sobre las aguas del mar!', hy: 'Երանի՜ նրան, ով նման բախտ կունենար ծովի ալիքների վրա:' },
          { es: 'Tic-tac, tic-tac, cantaba el viejo reloj del molino.', hy: 'Տիկ-տակ, տիկ-տակ, երգում էր ջրաղացի հին ժամացույցը:' }
        ]
      }
    ],
    comparativeTable: [
      {
        aspect: 'Autor',
        aspectHy: 'Հեղինակ',
        popular: 'Anónimo (el pueblo)',
        popularHy: 'Անանուն (ժողովուրդ)',
        culta: 'Autor conocido con nombre',
        cultaHy: 'Հայտնի անունով հեղինակ'
      },
      {
        aspect: 'Transmisión',
        aspectHy: 'Փոխանցում',
        popular: 'Oral (de boca en boca)',
        popularHy: 'Բանավոր (բերանից բերան)',
        culta: 'Escrita (libros, manuscritos)',
        cultaHy: 'Գրավոր (գրքեր, ձեռագրեր)'
      },
      {
        aspect: 'Versiones',
        aspectHy: 'Տարբերակներ',
        popular: 'Múltiples variantes cambiantes',
        popularHy: 'Բազմաթիվ փոփոխվող տարբերակներ',
        culta: 'Texto original e invariable',
        cultaHy: 'Բնօրինակ անփոփոխ տեքստ'
      },
      {
        aspect: 'Lenguaje',
        aspectHy: 'Լեզու',
        popular: 'Sencillo, coloquial y directo',
        popularHy: 'Պարզ, խոսակցական և անմիջական',
        culta: 'Elaborado, culto y complejo',
        cultaHy: 'Մշակված, գրական և բարդ'
      }
    ]
  },
  {
    id: 'tema2',
    number: 2,
    title: 'Romance, Leyenda, Mito y Cuento',
    titleHy: 'Ռոմանս, Ավանդազրույց, Առասպել և Հեքիաթ',
    subtitle: 'Los 4 grandes géneros narrativos y poéticos tradicionales',
    subtitleHy: 'Ավանդական պատմողական և պոետիկ 4 հիմնական ժանրերը',
    summaryEs: 'Aprende a diferenciar con exactitud entre un romance (poema épico-lírico en verso octosílabo), una leyenda (con base histórica y mágica), un mito (dioses y origen del mundo) y un cuento (narración breve con moraleja o ficción).',
    summaryHy: 'Սովորիր հստակ տարբերել ռոմանսը (ութավանկ տողերով պոեմ), ավանդազրույցը (պատմական հիմքով և կախարդանքով), առասպելը (աստվածներ և աշխարհի ծագում) և հեքիաթը (կարճ պատմվածք):',
    concepts: [
      {
        id: 'c2_romance',
        name: 'Romance',
        nameHy: 'Ռոմանս (Romance)',
        stageEntender: {
          es: 'Es un poema característico de la literatura hispánica. Está compuesto por una serie indefinida de versos de ocho sílabas (octosílabos) con rima asonante en los versos pares, mientras que los versos impares quedan sueltos (sin rima).',
          hy: 'Սա իսպանական գրականությանը բնորոշ բանաստեղծական տեսակ է: Այն կազմված է ութավանկ (octosílabos) տողերի շարքից, որտեղ զույգ տողերը (2, 4, 6...) ունեն ասոնանս հանգ (rima asonante), իսկ կենտ տողերը (1, 3, 5...) մնում են ազատ (առանց հանգի):'
        },
        stageRecordar: {
          keys: [
            { es: 'Versos octosílabos (8 sílabas)', hy: 'Ութավանկ տողեր (8 վանկ)' },
            { es: 'Rima asonante en versos pares (2, 4, 6...)', hy: 'Ասոնանս հանգ զույգ տողերում (2, 4, 6...)' },
            { es: 'Versos impares sueltos (sin rima)', hy: 'Կենտ տողերն ազատ են (առանց հանգի)' }
          ]
        },
        stageReconocer: {
          textEs: 'Que por mayo era, por mayo, (8 -) / cuando hace la calor, (8 a) / cuando los trigos encañan (8 -) / y están los campos en flor. (8 a)',
          highlightEs: 'calor / flor (versos pares riman en asonante: o)',
          explanationEs: 'Mide 8 sílabas por verso. Riman los pares en asonante y los impares van libres.',
          textHy: 'Երբ մայիսն էր, մայիսը, / երբ տաքությունն է սկսվում, / երբ ցորենն է հասկակալում, / և դաշտերն են ծաղկում:',
          highlightHy: 'calor / flor (զույգ տողերը հանգավորվում են)',
          explanationHy: 'Յուրաքանչյուր տողն ունի 8 վանկ: Զույգ տողերը հանգավորվում են, կենտ տողերն ազատ են:'
        },
        examplesSimple: [
          { es: 'Fontefrida, Fontefrida, / Fontefrida y con amor...', hy: 'Ֆոնտեֆրիդա, Ֆոնտեֆրիդա, / Ֆոնտեֆրիդա և սիրով...' },
          { es: 'Verde que te quiero verde. / Verde viento. Verdes ramas.', hy: 'Կանաչ, քեզ կանաչ եմ սիրում: / Կանաչ քամի: Կանաչ ճյուղեր:' }
        ],
        examplesComplex: [
          { es: 'Romance del conde Arnaldos: ¡Quién hubiese tal ventura / sobre las aguas del mar!', hy: 'Կոմս Առնալդոսի ռոմանսը. «Երանի՜ նրան, ով նման բախտ կունենար ծովի ջրերի վրա...»' },
          { es: 'Caminaba el caballero / por la orilla del río; / llevaba su espada al cinto / y el corazón malherido.', hy: 'Քայլում էր ասպետը / գետափով. / թուրն էր կապել գոտուն, / իսկ սիրտը՝ վիրավոր:' }
        ]
      },
      {
        id: 'c2_leyenda',
        name: 'Leyenda',
        nameHy: 'Ավանդազրույց (Leyenda)',
        stageEntender: {
          es: 'Es una narración sobre hechos con cierta base histórica real (un personaje, un castillo, una batalla) pero mezclada con elementos fantásticos o sobrenaturales.',
          hy: 'Պատմություն է, որն ունի որոշակի իրական պատմական հիմք (պատմական անձ, ամրոց, ճակատամարտ), բայց միահյուսված է ֆանտաստիկ կամ գերբնական տարրերով:'
        },
        stageRecordar: {
          keys: [
            { es: 'Base histórica real (lugar o fecha verídica)', hy: 'Իրական պատմական հիմք (տեղանք, անձ)' },
            { es: 'Elementos fantásticos o misteriosos', hy: 'Ֆանտաստիկ կամ խորհրդավոր տարրեր' },
            { es: 'Ligada a un lugar concreto', hy: 'Կապված է որոշակի վայրի հետ' }
          ]
        },
        stageReconocer: {
          textEs: 'La leyenda de Bécquer sobre el monte de las Ánimas en Soria, donde los esqueletos de los templarios se levantan en la noche de difuntos.',
          highlightEs: 'esqueletos de los templarios en un lugar real (Soria)',
          explanationEs: 'Combina un lugar real (Soria) y caballeros históricos (templarios) con fantasmas.',
          textHy: 'Բեկերի ավանդազրույցը Սորիայի Հոգիների բլրի մասին, որտեղ տամպլիերների կմախքները հառնում են մեռելոցի գիշերը:',
          highlightHy: 'տամպլիերների կմախքներ իրական վայրում (Սորիա)',
          explanationHy: 'Միավորում է իրական վայրը (Սորիա) և պատմական ասպետներին ուրվականների հետ:'
        },
        examplesSimple: [
          { es: 'La leyenda del Cid Campeador ganando una batalla después de muerto.', hy: 'Սիդ Կամպեադորի ավանդազրույցը՝ մահից հետո ճակատամարտ հաղթելու մասին:' },
          { es: 'El beso, de Gustavo Adolfo Bécquer en una iglesia de Toledo.', hy: '«Համբույրը» (Գուստավո Ադոլֆո Բեկեր)՝ Տոլեդոյի եկեղեցում:' }
        ],
        examplesComplex: [
          { es: 'La leyenda de los amantes de Teruel, basada en sepulcros medievales reales.', hy: 'Տերուելի սիրահարների ավանդազրույցը՝ հիմնված իրական միջնադարյան դամբարանների վրա:' },
          { es: 'El callejón del beso: una historia popular ambientada en una callejuela angosta.', hy: '«Համբույրի նրբանցքը»՝ ժողովրդական պատմություն նեղլիկ փողոցում:' }
        ]
      },
      {
        id: 'c2_mito',
        name: 'Mito',
        nameHy: 'Առասպել (Mito)',
        stageEntender: {
          es: 'Relato sagrado y tradicional protagonizado por dioses, semidioses o héroes legendarios que explica el origen del mundo, los fenómenos de la naturaleza o la creación humana.',
          hy: 'Ավանդական սրբազան պատմություն, որի գլխավոր հերոսներն են աստվածները, կիսաստվածները կամ լեգենդար հերոսները, և որը բացատրում է աշխարհի ծագումը, բնության երևույթները կամ մարդու արարումը:'
        },
        stageRecordar: {
          keys: [
            { es: 'Protagonizado por dioses y seres sobrenaturales', hy: 'Գլխավոր հերոսները՝ աստվածներ և գերբնական էակներ' },
            { es: 'Explica el origen del universo o la naturaleza', hy: 'Բացատրում է տիեզերքի կամ բնության ծագումը' },
            { es: 'Tiempo mítico y sagrado (fuera del tiempo histórico)', hy: 'Առասպելական սուրբ ժամանակ (պատմական ժամանակից դուրս)' }
          ]
        },
        stageReconocer: {
          textEs: 'El mito de Dédalo e Ícaro o el mito de Perséfone que explica por qué existen las cuatro estaciones del año.',
          highlightEs: 'explica el origen de las estaciones mediante dioses',
          explanationEs: 'Es un mito porque no tiene fecha histórica y explica el orden cósmico.',
          textHy: 'Պերսեփոնեի առասպելը, որը բացատրում է, թե ինչու են գոյություն ունեն տարվա չորս եղանակները:',
          highlightHy: 'բացատրում է եղանակների ծագումն աստվածների միջոցով',
          explanationHy: 'Սա առասպել է, որովհետև չունի պատմական տարեթիվ և բացատրում է տիեզերական կարգը:'
        },
        examplesSimple: [
          { es: 'El mito de Hércules y sus doce trabajos heroicos.', hy: 'Հերկուլեսի և նրա տասներկու հերոսական սխրանքների առասպելը:' },
          { es: 'Prometeo robando el fuego sagrado a los dioses del Olimpo para dárselo a los humanos.', hy: 'Պրոմեթևսը, որը գողացավ սրբազան կրակն Օլիմպոսի աստվածներից՝ մարդկանց տալու համար:' }
        ],
        examplesComplex: [
          { es: 'El mito de Apolo conduciendo el carro del Sol para dar luz al mundo cada día.', hy: 'Ապոլոնի առասպելը, որն արևի կառքով երկնքով անցնելով լույս է բերում աշխարհին:' },
          { es: 'El mito de Pandora abriendo la caja que contenía todos los males de la humanidad.', hy: 'Պանդորայի առասպելը, որը բացեց մարդկության բոլոր չարիքները պարունակող արկղը:' }
        ]
      },
      {
        id: 'c2_cuento',
        name: 'Cuento',
        nameHy: 'Հեքիաթ / Պատմվածք (Cuento)',
        stageEntender: {
          es: 'Es una narración breve de ficción con pocos personajes y un argumento sencillo que sigue una estructura clásica: Introducción (planteamiento), Nudo (conflicto) y Desenlace (resolución).',
          hy: 'Կարճ գեղարվեստական պատմություն է՝ քիչ կերպարներով և պարզ սյուժեով, որը հետևում է դասական կառուցվածքին՝ Ներածություն (սկիզբ), Հանգույց (խնդիր/կոնֆլիկտ) և Հանգուցալուծում (ավարտ):'
        },
        stageRecordar: {
          keys: [
            { es: 'Narración breve y ficticia', hy: 'Կարճ և հորինված պատմություն' },
            { es: 'Pocos personajes', hy: 'Քիչ կերպարներ' },
            { es: 'Estructura: Introducción, Nudo y Desenlace', hy: 'Կառուցվածք՝ Ներածություն, Հանգույց և Հանգուցալուծում' }
          ]
        },
        stageReconocer: {
          textEs: 'Había una vez tres cerditos que querían construir sus casas para protegerse del lobo.',
          highlightEs: 'Había una vez... argumento sencillo',
          explanationEs: 'Inicio típico de cuento infantil con estructura lineal y personajes arquetípicos.',
          textHy: 'Լինում են, չեն լինում երեք խոզուկներ, որոնք ուզում էին տներ կառուցել գայլից պաշտպանվելու համար:',
          highlightHy: 'Լինում են, չեն լինում... պարզ սյուժե',
          explanationHy: 'Մանկական հեքիաթի տիպիկ սկիզբ՝ պարզ կառուցվածքով:'
        },
        examplesSimple: [
          { es: 'El cuento de Blancanieves y los siete enanitos.', hy: 'Սպիտակաձյունիկի և յոթ թզուկների հեքիաթը:' },
          { es: 'El patito feo que se convierte en un hermoso cisne.', hy: 'Տգեղ բադիկը, որը վերածվում է գեղեցիկ կարապի:' }
        ],
        examplesComplex: [
          { es: 'Los cuentos de don Juan Manuel en El conde Lucanor (siglo XIV).', hy: 'Դոն Խուան Մանուելի խրատական պատմվածքները «Կոմս Լուկանոր» գրքում:' },
          { es: 'Cuentos maravillosos tradicionales recogidos por los hermanos Grimm.', hy: 'Գրիմ եղբայրների գրառած ավանդական հրաշապատում հեքիաթները:' }
        ]
      }
    ]
  },
  {
    id: 'tema3',
    number: 3,
    title: 'La Literatura Culta',
    titleHy: 'Գրական (մշակված) գրականություն',
    subtitle: 'Autor conocido, difusión escrita y perfección lingüística',
    subtitleHy: 'Հայտնի հեղինակ, գրավոր տարածում և լեզվական կատարելություն',
    summaryEs: 'A diferencia de la literatura popular, la literatura culta la escribe un autor conocido con nombre y apellidos, se transmite por escrito mediante libros y utiliza un lenguaje elaborado y rico en recursos literarios.',
    summaryHy: 'Ի տարբերություն ժողովրդականի՝ մշակված (culta) գրականությունը գրվում է կոնկրետ հայտնի հեղինակի կողմից, տարածվում է գրքերով և օգտագործում է հարուստ, մշակված գրական լեզու:',
    concepts: [
      {
        id: 'c3_def',
        name: 'Características de la Literatura Culta',
        nameHy: 'Մշակված գրականության առանձնահատկությունները',
        stageEntender: {
          es: 'Nace de un autor individual que firma su obra. Se transmite por la escritura (manuscritos, imprenta, libros), por lo que su texto permanece fijo sin sufrir cambios involuntarios.',
          hy: 'Ծնվում է անհատ հեղինակից, ով ստորագրում է իր գործը: Տարածվում է գրավոր ճանապարհով (ձեռագրեր, գրքեր), ուստի տեքստը մնում է անփոփոխ՝ առանց պատահական փոփոխությունների:'
        },
        stageRecordar: {
          keys: [
            { es: 'Autor conocido y firmado', hy: 'Հայտնի և ստորագրված հեղինակ' },
            { es: 'Transmisión escrita (sin variantes)', hy: 'Գրավոր փոխանցում (առանց փոփոխությունների)' },
            { es: 'Lenguaje muy elaborado y culto', hy: 'Շատ մշակված և գրական լեզու' }
          ]
        },
        stageReconocer: {
          textEs: 'Don Quijote de la Mancha, escrito y firmado por Miguel de Cervantes en 1605.',
          highlightEs: 'firmado por Miguel de Cervantes',
          explanationEs: 'Es literatura culta porque conocemos al autor y el texto se conserva tal como él lo escribió.',
          textHy: '«Դոն Կիխոտ», գրված և ստորագրված Միգել դե Սերվանտեսի կողմից 1605 թվականին:',
          highlightHy: 'ստորագրված Միգել դե Սերվանտեսի կողմից',
          explanationHy: 'Սա մշակված գրականություն է, քանի որ հեղինակը հայտնի է, և տեքստը պահպանվել է այնպես, ինչպես նա է գրել:'
        },
        examplesSimple: [
          { es: 'Un libro de poemas publicado por Federico García Lorca.', hy: 'Ֆեդերիկո Գարսիա Լորկայի հրատարակած բանաստեղծությունների գիրքը:' },
          { es: 'Las novelas de aventuras escritas por Julio Verne.', hy: 'Ժյուլ Վեռնի գրած արկածային վեպերը:' }
        ],
        examplesComplex: [
          { es: 'Las Soledades de Luis de Góngora, con metáforas complejas y cultismos.', hy: 'Լուիս դե Գոնգորայի «Մենությունները»՝ բարդ փոխաբերություններով և մշակված բառապաշարով:' },
          { es: 'Coplas a la muerte de su padre, obra maestra culta de Jorge Manrique.', hy: 'Խորխե Մանրիկեի գլուխգործոցը՝ «Քառյակներ հոր մահվան առթիվ»:' }
        ]
      }
    ],
    comparativeTable: [
      {
        aspect: 'Creación',
        aspectHy: 'Ստեղծում',
        popular: 'Espontánea, colectiva, del pueblo',
        popularHy: 'Ինքնաբուխ, հավաքական, ժողովրդի կողմից',
        culta: 'Reflexiva, planificada, de un escritor',
        cultaHy: 'Մտածված, ծրագրված, գրողի կողմից'
      },
      {
        aspect: 'Conservación',
        aspectHy: 'Պահպանում',
        popular: 'En la memoria de la gente',
        popularHy: 'Մարդկանց հիշողության մեջ',
        culta: 'En bibliotecas, libros y documentos',
        cultaHy: 'Գրադարաններում, գրքերում և փաստաթղթերում'
      },
      {
        aspect: 'Estilo',
        aspectHy: 'Ոճ',
        popular: 'Frases cortas, repeticiones, directo',
        popularHy: 'Կարճ նախադասություններ, կրկնություններ, անմիջական',
        culta: 'Sintaxis compleja, gran riqueza léxica',
        cultaHy: 'Բարդ շարահյուսություն, բառային մեծ հարստություն'
      }
    ]
  },
  {
    id: 'tema4',
    number: 4,
    title: 'El Lenguaje Literario',
    titleHy: 'Գրական լեզու',
    subtitle: 'Función estética, prosa vs verso, rima y métrica',
    subtitleHy: 'Գեղագիտական գործառույթ, արձակ և չափածո, հանգ և տաղաչափություն',
    summaryEs: 'El lenguaje literario busca la belleza formal y la emoción (función estética o poética), diferenciándose del lenguaje cotidiano. Se expresa en prosa o en verso mediante recursos rítmicos y sonoros.',
    summaryHy: 'Գրական լեզուն ձգտում է ձևի գեղեցկության և հուզականության (գեղագիտական կամ պոետիկ գործառույթ)՝ տարբերվելով առօրյա խոսքից: Այն արտահայտվում է արձակով կամ չափածոյով:',
    concepts: [
      {
        id: 'c4_estetica',
        name: 'Función Estética y Lenguaje Poético',
        nameHy: 'Գեղագիտական գործառույթ և պոետիկ լեզու',
        stageEntender: {
          es: 'Mientras que el lenguaje cotidiano busca informar rápido y de forma práctica, el lenguaje literario busca crear arte, transmitir belleza y sorprender al lector utilizando recursos estilísticos.',
          hy: 'Մինչդեռ առօրյա լեզուն նպատակ ունի արագ և գործնական տեղեկացնել, գրական լեզուն ձգտում է արվեստ ստեղծել, գեղեցկություն փոխանցել և զարմացնել ընթերցողին՝ օգտագործելով գեղարվեստական միջոցներ:'
        },
        stageRecordar: {
          keys: [
            { es: 'Función estética (crear belleza)', hy: 'Գեղագիտական գործառույթ (գեղեցկություն ստեղծել)' },
            { es: 'Expresividad y emoción', hy: 'Արտահայտչականություն և հույզ' },
            { es: 'Diferente al lenguaje práctico cotidiano', hy: 'Տարբերվում է առօրյա գործնական լեզվից' }
          ]
        },
        stageReconocer: {
          textEs: 'Cotidiano: "Llueve mucho". Literario: "El cielo llora lágrimas de cristal sobre la tierra dormida".',
          highlightEs: 'El cielo llora lágrimas de cristal...',
          explanationEs: 'Usa personificación y metáfora para embellecer un mensaje sencillo.',
          textHy: 'Առօրյա՝ «Ուժեղ անձրև է գալիս»: Գրական՝ «Երկինքը բյուրեղյա արցունքներ է թափում քնած երկրի վրա»:',
          highlightHy: '«Երկինքը բյուրեղյա արցունքներ է թափում...»',
          explanationHy: 'Օգտագործում է մարմնավորում և փոխաբերություն՝ պարզ միտքը գեղեցկացնելու համար:'
        },
        examplesSimple: [
          { es: 'Cotidiano: Se apagó la luz. Literario: La noche vistió su manto de sombras.', hy: 'Առօրյա՝ Լույսը մարեց: Գրական՝ Գիշերը հագավ իր ստվերների թիկնոցը:' },
          { es: 'Cotidiano: Tienes ojos verdes. Literario: Dos esmeraldas brillan bajo tu frente.', hy: 'Առօրյա՝ Կանաչ աչքեր ունես: Գրական՝ Ճակատիդ տակ շողում են երկու զմրուխտներ:' }
        ],
        examplesComplex: [
          { es: 'Nuestras vidas son los ríos que van a dar en la mar, que es el morir...', hy: 'Մեր կյանքերը գետեր են, որոնք թափվում են ծովը, որն էլ հենց մահն է...' },
          { es: 'El rumor de las hojas tejía una sinfonía secreta en la espesura del bosque.', hy: 'Տերևների շրշյունը գաղտնի սիմֆոնիա էր հյուսում անտառի խորքում:' }
        ]
      },
      {
        id: 'c4_prosa_verso',
        name: 'Prosa frente a Verso',
        nameHy: 'Արձակն ընդդեմ չափածոյի (Prosa vs Verso)',
        stageEntender: {
          es: 'La prosa ocupa todo el renglón de margen a margen y no tiene un número fijo de sílabas ni rima obligatoria. El verso se escribe en líneas cortas, tiene ritmo musical marcado, medida de sílabas y suele llevar rima.',
          hy: 'Արձակը (prosa) զբաղեցնում է տողն ամբողջությամբ՝ լուսանցքից լուսանցք, և չունի վանկերի հաստատուն թիվ կամ պարտադիր հանգ: Չափածոն (verso) գրվում է կարճ տողերով, ունի ընդգծված երաժշտական ռիթմ, վանկերի չափ և սովորաբար հանգավորվում է:'
        },
        stageRecordar: {
          keys: [
            { es: 'Prosa: ocupa todo el renglón continuo', hy: 'Արձակ՝ զբաղեցնում է ամբողջ տողը' },
            { es: 'Verso: líneas cortas e independientes', hy: 'Չափածո՝ կարճ և առանձին տողեր' },
            { es: 'Ritmo, métrica y rima en el verso', hy: 'Ռիթմ, չափ և հանգ չափածոյում' }
          ]
        },
        stageReconocer: {
          textEs: 'Verso:\nPor una mirada, un mundo;\npor una sonrisa, un cielo;\npor un beso... ¡yo no sé\nqué te diera por un beso!',
          highlightEs: 'Líneas cortas con ritmo y rima (Bécquer)',
          explanationEs: 'Está escrito en verso: cada línea es una unidad melódica corta.',
          textHy: 'Չափածո՝\nՄի հայացքի համար՝ մի ողջ աշխարհ,\nմի ժպիտի համար՝ երկինք,\nիսկ մեկ համբույրի համար... չգիտեմ,\nթե ինչ կտայի ես:',
          highlightHy: 'Կարճ տողեր ռիթմով և հանգով (Բեկեր)',
          explanationHy: 'Գրված է չափածոյով. յուրաքանչյուր տող կարճ մեղեդային միավոր է:'
        },
        examplesSimple: [
          { es: 'Prosa: El niño caminaba despacio por la calle solitaria mientras caía la nieve.', hy: 'Արձակ՝ Երեխան դանդաղ քայլում էր ամայի փողոցով, մինչ ձյուն էր տեղում:' },
          { es: 'Verso: Caminante, no hay camino, / se hace camino al andar.', hy: 'Չափածո՝ Ճամփորդ, ճանապարհ չկա, / ճանապարհը բացվում է քայլելիս:' }
        ],
        examplesComplex: [
          { es: 'Prosa poética: Platero es pequeño, peludo, suave; tan blando por fuera que se diría todo de algodón.', hy: 'Պոետիկ արձակ՝ Պլատերոն փոքրիկ է, մազոտ, փափուկ. դրսից այնքան նուրբ, որ կարծես բամբակից լինի:' },
          { es: 'Verso culto: Érase un hombre a una nariz pegado, / érase una nariz superlativa...', hy: 'Չափածո՝ Կար-չկար մի մարդ՝ կպած մի քթի, / կար-չկար աննախադեպ մի մեծ քիթ...' }
        ]
      },
      {
        id: 'c4_rima',
        name: 'Rima Asonante frente a Rima Consonante',
        nameHy: 'Ասոնանս և Կոնսոնանս հանգ (Rima Asonante vs Consonante)',
        stageEntender: {
          es: 'La rima es la repetición de sonidos al final de dos o más versos a partir de la última vocal acentuada. En la consonante coinciden vocales y consonantes (cielo / suelo). En la asonante solo coinciden las vocales (barco / claro -> a-o).',
          hy: 'Հանգը հնչյունների կրկնությունն է երկու կամ ավելի տողերի վերջում՝ սկսած վերջին շեշտված ձայնավորից: Կոնսոնանսի (լրիվ) դեպքում համընկնում են և՛ ձայնավորները, և՛ բաղաձայնները (cielo / suelo): Ասոնանսի (ոչ լրիվ) դեպքում համընկնում են միայն ձայնավորները (barco / claro -> a-o):'
        },
        stageRecordar: {
          keys: [
            { es: 'Consonante: coinciden vocales Y consonantes', hy: 'Կոնսոնանս՝ համընկնում են ձայնավորները ԵՎ բաղաձայնները' },
            { es: 'Asonante: coinciden SOLO las vocales', hy: 'Ասոնանս՝ համընկնում են ՄԻԱՅՆ ձայնավորները' },
            { es: 'Siempre a partir de la última vocal tónica', hy: 'Միշտ վերջին շեշտված ձայնավորից սկսած' }
          ]
        },
        stageReconocer: {
          textEs: 'Consonante: estrella / doncella (ella / ella). Asonante: rama / plata (a-a / a-a).',
          highlightEs: 'rama / plata -> riman solo a-a',
          explanationEs: 'En rama y plata las consonantes m y t son distintas: solo riman las vocales a-a.',
          textHy: 'Կոնսոնանս՝ estrella / doncella (ella / ella): Ասոնանս՝ rama / plata (a-a / a-a):',
          highlightHy: 'rama / plata -> հանգավորվում են միայն a-a',
          explanationHy: 'rama և plata բառերում m և t բաղաձայնները տարբեր են, համընկնում են միայն a-a ձայնավորները:'
        },
        examplesSimple: [
          { es: 'Consonante: gato / pato (ato = ato)', hy: 'Կոնսոնանս՝ gato / pato (ato = ato)' },
          { es: 'Asonante: casa / mapa (a-a = a-a)', hy: 'Ասոնանս՝ casa / mapa (a-a = a-a)' }
        ],
        examplesComplex: [
          { es: 'Consonante: La primavera ha venido / nadie sabe cómo ha sido. (ido / ido)', hy: 'Կոնսոնանս՝ Գարունն եկավ, / ոչ ոք չգիտի, թե ինչպես եղավ (ido / ido)' },
          { es: 'Asonante: A las cinco de la tarde / un niño trajo la blanca sábana. (a-e)', hy: 'Ասոնանս՝ Կեսօրից հետո ժամը հինգին / երեխան բերեց սպիտակ սավանը (a-e)' }
        ]
      }
    ]
  },
  {
    id: 'tema5',
    number: 5,
    title: 'Figuras Literarias — Nivel Fónico',
    titleHy: 'Գրական պատկերավորման միջոցներ — Հնչյունային մակարդակ',
    subtitle: 'Aliteración, Onomatopeya y Paronomasia',
    subtitleHy: 'Ալիտերացիա (բաղաձայնույթ), Օնոմատոպեա (բնաձայնություն) և Պարոնոմազիա (հարանունություն)',
    summaryEs: 'Las figuras fónicas juegan con los sonidos de las palabras para lograr musicalidad, imitar ruidos del mundo real o crear contrastes expresivos.',
    summaryHy: 'Հնչյունային պատկերավորման միջոցները խաղում են բառերի հնչյունների հետ՝ երաժշտականություն հաղորդելու, իրական աշխարհի ձայները նմանակելու կամ արտահայտիչ հակադրություններ ստեղծելու համար:',
    concepts: [
      {
        id: 'c5_aliteracion',
        name: 'Aliteración',
        nameHy: 'Ալիտերացիա — Բաղաձայնույթ (Aliteración)',
        stageEntender: {
          es: 'Consiste en la repetición intencionada de uno o varios sonidos iguales o parecidos (generalmente consonantes) a lo largo de un verso o frase para evocar una sensación o ritmo.',
          hy: 'Միևնույն կամ նման հնչյունների (հատկապես բաղաձայնների) նպատակադրված կրկնությունն է տողում կամ նախադասության մեջ՝ որոշակի զգացողություն կամ ռիթմ արթնացնելու համար:'
        },
        stageRecordar: {
          keys: [
            { es: 'Repetición de sonidos parecidos', hy: 'Նման հնչյունների կրկնություն' },
            { es: 'Especialmente consonantes', hy: 'Հատկապես բաղաձայնների' },
            { es: 'Crea un efecto acústico (el silbido, el viento)', hy: 'Ստեղծում է ձայնային ազդեցություն (շշուկ, քամի)' }
          ]
        },
        stageReconocer: {
          textEs: 'En el silencio solo se escuchaba / un susurro de abejas que sonaba.',
          highlightEs: 'Repetición de la "s": silencio, solo, se, susurro, sonaba',
          explanationEs: 'La repetición insistente de la "s" imita el zumbido suave de las abejas.',
          textHy: 'Լռության մեջ լսվում էր միայն / մեղուների շշուկը, որ հնչում էր:',
          highlightHy: '«s» հնչյունի կրկնությունը՝ silencio, solo, se, susurro, sonaba',
          explanationHy: '«s» հնչյունի համառ կրկնությունը նմանակում է մեղուների նուրբ բզզոցը:'
        },
        examplesSimple: [
          { es: 'Tres tristes tigres comen trigo en un trigal. (repetición de tr/t)', hy: 'Երեք տխուր վագրեր ցորեն են ուտում ցորենի դաշտում (tr/t-ի կրկնություն)' },
          { es: 'Mi mamá me mima mucho. (repetición de la m)', hy: 'Իմ մայրիկն ինձ շատ է փայփայում (m-ի կրկնություն)' },
          { es: 'El perro de San Roque no tiene rabo. (repetición de la r)', hy: 'Սան Ռոկեի շունը պոչ չունի (r-ի կրկնություն)' },
          { es: 'Rueda la rueda en el rápido río. (repetición de r/d)', hy: 'Պտտվում է անիվն արագահոս գետում (r/d-ի կրկնություն)' },
          { es: 'Bajo el ala leve del leve abanico. (repetición de l/b)', hy: 'Թեթև հովհարի թեթև թևի տակ (l/b-ի կրկնություն)' }
        ],
        examplesComplex: [
          { es: 'Con el ala aleve del leve abanico. (Rubén Darío)', hy: 'Թեթև հովհարի դավադիր թևով (Ռուբեն Դարիո)' },
          { es: 'El trueno horrendo que en fragor revienta. (José Joaquín de Olmedo, repetición de r)', hy: 'Սոսկալի որոտը, որ աղմուկով պայթում է (r հնչյունի կրկնություն)' },
          { es: 'Infame turba de nocturnas aves. (Luis de Góngora, repetición de t/u/r)', hy: 'Գիշերային թռչունների անարգ երամը (t/u/r հնչյունների կրկնություն)' },
          { es: 'La libélula vaga de la vaga ilusión. (Rubén Darío, repetición de l/v)', hy: 'Անորոշ պատրանքի թափառող ճպուռը (l/v հնչյունների կրկնություն)' },
          { es: 'Claras clavellinas clavadas en el cristal. (repetición de cl/cr)', hy: 'Պարզ մեխակներ՝ գամված բյուրեղապակու մեջ' }
        ]
      },
      {
        id: 'c5_onomatopeya',
        name: 'Onomatopeya',
        nameHy: 'Օնոմատոպեա — Բնաձայնություն (Onomatopeya)',
        stageEntender: {
          es: 'Palabra o expresión que imita o reproduce el sonido de una acción, un animal, un objeto o un fenómeno de la naturaleza.',
          hy: 'Բառ կամ արտահայտություն, որը նմանակում կամ վերարտադրում է գործողության, կենդանու, առարկայի կամ բնական երևույթի ձայնը:'
        },
        stageRecordar: {
          keys: [
            { es: 'Imita sonidos reales', hy: 'Նմանակում է իրական ձայներ' },
            { es: 'Sonidos de animales, golpes o ruidos', hy: 'Կենդանիների ձայներ, հարվածներ կամ աղմուկ' },
            { es: 'Frecuente en cómics y lengua oral', hy: 'Հաճախակի է կոմիքսներում և խոսակցականում' }
          ]
        },
        stageReconocer: {
          textEs: 'El reloj de la pared hacía tictac, tictac sin parar en la noche.',
          highlightEs: 'tictac, tictac',
          explanationEs: 'Imita con letras el sonido mecánico que produce el reloj.',
          textHy: 'Պատի ժամացույցը գիշերը անդադար տիկ-տակ, տիկ-տակ էր անում:',
          highlightHy: 'տիկ-տակ, տիկ-տակ (tictac)',
          explanationHy: 'Տառերով նմանակում է ժամացույցի մեխանիկական ձայնը:'
        },
        examplesSimple: [
          { es: '¡Miau!, maullaba el gato hambriento.', hy: '«Միա՛ու», մլավում էր սոված կատուն:' },
          { es: '¡Guau, guau!, ladró el perro al cartero.', hy: '«Հա՛ֆ-հա՛ֆ», հաչեց շունը փոստատարի վրա:' },
          { es: '¡Pum! La puerta se cerró de golpe.', hy: '«Դըմփ»: Դուռը թրմփոցով փակվեց:' },
          { es: 'El cristal hizo ¡crac! al romperse.', hy: 'Ապակին կոտրվելիս «չրը՛խկ» արեց:' },
          { es: '¡Chof! El niño cayó en el charco de agua.', hy: '«Չո՛փ»: Երեխան ընկավ ջրափոսի մեջ:' }
        ],
        examplesComplex: [
          { es: 'El chisporroteo del fuego en la chimenea alegraba la velada.', hy: 'Բուխարու մեջ կրակի ճարճատյունն ուրախացնում էր երեկոն:' },
          { es: 'Zumbaba el abejorro entre los pétalos de jazmín.', hy: 'Բզզում էր իշամեղուն հասմիկի թերթիկների միջև:' },
          { es: 'El chasquido del látigo resonó en todo el valle solitario.', hy: 'Մտրակի շրխկոցն արձագանքեց ողջ ամայի հովտում:' },
          { es: 'Burbujeaba el agua hirviendo en la gran cazuela de barro.', hy: 'Կավե մեծ կաթսայում եռացող ջուրը պղպջում էր:' },
          { es: 'Un murmullo suave de hojas acariciadas por la brisa.', hy: 'Զեփյուռից շոյված տերևների մեղմ շշուկ:' }
        ]
      },
      {
        id: 'c5_paronomasia',
        name: 'Paronomasia',
        nameHy: 'Պարոնոմազիա — Հարանունություն (Paronomasia)',
        stageEntender: {
          es: 'Consiste en emplear en una misma frase palabras muy parecidas en su pronunciación o forma, pero con significados totalmente diferentes.',
          hy: 'Միևնույն նախադասության մեջ արտասանությամբ կամ գրությամբ շատ նման, բայց բոլորովին տարբեր իմաստ ունեցող բառերի գործածությունն է:'
        },
        stageRecordar: {
          keys: [
            { es: 'Palabras casi idénticas en sonido', hy: 'Հնչյունով գրեթե նույնական բառեր' },
            { es: 'Significados totalmente distintos', hy: 'Բոլորովին տարբեր իմաստներ' },
            { es: 'Juego de palabras inteligente', hy: 'Խելացի բառախաղ' }
          ]
        },
        stageReconocer: {
          textEs: 'Quien parte y reparte se queda con la mejor parte.',
          highlightEs: 'parte / reparte',
          explanationEs: 'Parte y reparte suenan casi igual, pero una es dividir y otra distribuir.',
          textHy: 'Ով բաժանում է և վերաբաժանում, իրեն է պահում լավագույն բաժինը:',
          highlightHy: 'parte / reparte (բաժանում / վերաբաժանում)',
          explanationHy: 'Parte և reparte հնչում են գրեթե նույն կերպ, բայց իմաստները տարբեր են:'
        },
        examplesSimple: [
          { es: 'Vendado que me has vendido. (vendado / vendido)', hy: 'Աչքակապ, որ ինձ վաճառեցիր (vendado / vendido)' },
          { es: 'Cosas de casas y casas de cosas.', hy: 'Տների իրեր և իրերի տներ (cosas / casas)' },
          { es: 'Con dados ganan condados. (con dados / condados)', hy: 'Զառերով շահում են կոմսություններ (con dados / condados)' },
          { es: 'Mora que mora en el castillo.', hy: 'Մավրուհին, ով ապրում է (mora) ամրոցում' },
          { es: 'Tanta tinta tonta que te atonta.', hy: 'Այնքան հիմար թանաք, որ քեզ հիմարացնում է' }
        ],
        examplesComplex: [
          { es: 'Presidiendo la pena de mi propia persona.', hy: 'Ղեկավարելով իմ սեփական անձի վիշտը (pena / persona)' },
          { es: 'Un hombre a una nariz pegado, érase una nariz sayón y escriba. (Góngora)', hy: 'Մի մարդ՝ կպած քթին, կար-չկար մի քիթ՝ դահիճ ու դպիր' },
          { es: 'Milicias que van a las malicias del mundo.', hy: 'Զորքեր (milicias), որոնք գնում են աշխարհի չարիքներին (malicias)' },
          { es: 'Erizada de risas la sala entera aplaudía.', hy: 'Ծիծաղից ցնցված (erizada / risas) ողջ դահլիճը ծափահարում էր' },
          { es: 'El erizo se eriza, se riza de risa.', hy: 'Ոզնին փշոտվում է, ծիծաղից գանգրանում է (eriza / riza / risa)' }
        ]
      }
    ]
  },
  {
    id: 'tema6',
    number: 6,
    title: 'Figuras Literarias — Nivel Morfosintáctico',
    titleHy: 'Գրական պատկերավորման միջոցներ — Ձևաբանական-շարահյուսական մակարդակ',
    subtitle: 'Hipérbaton, Anáfora, Asíndeton, Polisíndeton, Enumeración, Pleonasmo, Epanadiplosis',
    subtitleHy: 'Շրջադասություն, Անաֆորա, Ասինդետոն, Պոլիսինդետոն, Թվարկում, Պլեոնազմ, Էպանադիպլոզիս',
    summaryEs: 'Las figuras morfosintácticas alteran el orden habitual de las palabras, suprimen elementos conectores o los repiten intencionadamente para dar fuerza expresiva al texto.',
    summaryHy: 'Ձևաբանական-շարահյուսական միջոցները փոխում են բառերի սովորական շարադասությունը, բաց են թողնում շաղկապները կամ դրանք նպատակադրված կրկնում են:',
    concepts: [
      {
        id: 'c6_hiperbaton',
        name: 'Hipérbaton',
        nameHy: 'Հիպերբատոն — Շրջադասություն (Hipérbaton)',
        stageEntender: {
          es: 'Consiste en alterar el orden lógico o habitual que tienen las palabras en una frase (Sujeto + Verbo + Complementos) para destacar una palabra o dar un tono poético.',
          hy: 'Նախադասության մեջ բառերի սովորական կամ տրամաբանական կարգի (Ենթակա + Բայ + Լրացումներ) խախտումն է՝ որևէ բառ ընդգծելու կամ բանաստեղծական շունչ հաղորդելու համար:'
        },
        stageRecordar: {
          keys: [
            { es: 'Alteración del orden habitual', hy: 'Սովորական կարգի խախտում' },
            { es: 'Destaca elementos al principio', hy: 'Ընդգծում է սկզբում դրված բառերը' },
            { es: 'Orden lógico: Sujeto + Verbo + Objeto', hy: 'Տրամաբանական կարգ՝ Ենթակա + Բայ + Խնդիր' }
          ]
        },
        stageReconocer: {
          textEs: 'Volverán las oscuras golondrinas en tu balcón sus nidos a colgar.',
          highlightEs: 'Orden habitual: "Las golondrinas oscuras volverán a colgar sus nidos en tu balcón"',
          explanationEs: 'Bécquer cambia el orden para poner primero el verbo "Volverán" y dotar al verso de misterio.',
          textHy: 'Ետ կդառնան մութ ծիծեռնակները քո պատշգամբում իրենց բները կախելու:',
          highlightHy: 'Սովորական կարգ՝ «Մութ ծիծեռնակները ետ կդառնան...»',
          explanationHy: 'Բեկերը փոխում է կարգը՝ առաջին պլան մղելով «Volverán» (ետ կդառնան) բայը:'
        },
        examplesSimple: [
          { es: 'A Dios gracias damos hoy. (Orden normal: Damos gracias a Dios hoy)', hy: 'Աստծուն շնորհակալություն ենք հայտնում այսօր (Սովորական՝ Այսօր շնորհակալություն ենք հայտնում Աստծուն)' },
          { es: 'De verdes sauces hay una espesura. (Hay una espesura de sauces verdes)', hy: 'Կանաչ ուռիների կա մի թավուտ (Կա կանաչ ուռիների մի թավուտ)' },
          { es: 'Cansado vengo del largo viaje. (Vengo cansado del largo viaje)', hy: 'Հոգնած եմ գալիս երկար ճանապարհից' },
          { es: 'Suave brisa soplaba en el jardín. (Una brisa suave soplaba...)', hy: 'Մեղմ զեփյուռ էր փչում պարտեզում' },
          { es: 'Del salón en el ángulo oscuro... (En el ángulo oscuro del salón)', hy: 'Սրահի մութ անկյունում...' }
        ],
        examplesComplex: [
          { es: 'Pasos de un peregrino son, errante, cuantos me dictó versos dulce Musa. (Góngora)', hy: 'Ուխտավորի քայլերն են, թափառական, որքան բանաստեղծություններ որ ինձ թելադրեց քաղցր Մուսան' },
          { es: 'Cerca del Tajo, en soledad amena, de verdes sauces hay una espesura. (Garcilaso)', hy: 'Տախոյի մոտ, հաճելի մենության մեջ, կանաչ ուռիների մի թավուտ կա' },
          { es: 'Pálido el rostro tenía la doncella del castillo.', hy: 'Գունատ էր ամրոցի օրիորդի դեմքը' },
          { es: 'Por ti la verde hierba, el fresco viento, el blanco lirio y colorada rosa. (Garcilaso)', hy: 'Քեզ համար է կանաչ խոտը, զով քամին, սպիտակ շուշանն ու կարմիր վարդը' },
          { es: 'Inés, tus bellos ojos ya no me miran como antes.', hy: 'Ինե՛ս, գեղեցիկ աչքերդ այլևս ինձ առաջվա պես չեն նայում' }
        ]
      },
      {
        id: 'c6_anafora',
        name: 'Anáfora',
        nameHy: 'Անաֆորա — Սկզբնակրկնություն (Anáfora)',
        stageEntender: {
          es: 'Consiste en repetir la misma palabra o grupo de palabras al principio de dos o más versos o frases consecutivas.',
          hy: 'Միևնույն բառի կամ բառախմբի կրկնությունն է երկու կամ ավելի հաջորդական տողերի կամ նախադասությունների սկզբում:'
        },
        stageRecordar: {
          keys: [
            { es: 'Repetición obligatoria', hy: 'Պարտադիր կրկնություն' },
            { es: 'Al principio de versos o frases', hy: 'Տողերի կամ նախադասությունների սկզբում' },
            { es: 'Da ritmo y enfatiza la idea', hy: 'Տալիս է ռիթմ և շեշտում է միտքը' }
          ]
        },
        stageReconocer: {
          textEs: 'Temprano levantó la muerte el vuelo,\ntemprano madrugó la madrugada,\ntemprano estás rodando por el suelo.',
          highlightEs: 'Repetición de "Temprano" al principio de cada verso',
          explanationEs: 'La palabra "temprano" abre tres versos seguidos con doloroso énfasis (Miguel Hernández).',
          textHy: 'Վաղ թռիչք առավ մահը,\nվաղ լուսացավ այգաբացը,\nվաղ ես գլորվում գետնին:',
          highlightHy: '«Temprano» (վաղ) բառի կրկնությունը յուրաքանչյուր տողի սկզբում',
          explanationHy: '«Temprano» բառը բացում է երեք հաջորդական տողերը (Միգել Էռնանդես):'
        },
        examplesSimple: [
          { es: 'Por una mirada, un mundo; / por una sonrisa, un cielo...', hy: 'Մի հայացքի համար՝ աշխարհ, / մի ժպիտի համար՝ երկինք...' },
          { es: 'Verde que te quiero verde. / Verde viento. Verdes ramas.', hy: 'Կանաչ, քեզ կանաչ եմ սիրում: / Կանաչ քամի: Կանաչ ճյուղեր:' },
          { es: 'Lloran los niños, / lloran las flores, / llora la tierra.', hy: 'Լալիս են երեխաները, / լալիս են ծաղիկները, / լալիս է երկիրը:' },
          { es: 'Aquí me quedo, / aquí te espero, / aquí resisto.', hy: 'Այստեղ եմ մնում, / այստեղ եմ քեզ սպասում, / այստեղ եմ դիմանում:' },
          { es: 'No duerme nadie por el cielo. Nadie, nadie. / No duerme nadie.', hy: 'Ոչ ոք չի քնում երկնքի տակ: Ոչ ոք, ոչ ոք: / Ոչ ոք չի քնում:' }
        ],
        examplesComplex: [
          { es: 'Dile que la quiero, / dile que me muero, / dile que no puedo vivir sin su amor.', hy: 'Ասա՛ նրան, որ սիրում եմ, / ասա՛ նրան, որ մեռնում եմ, / ասա՛ նրան, որ չեմ կարող ապրել առանց իր սիրո:' },
          { es: 'Pena con pena y pena desayuno, / pena es mi paz y pena mi batalla.', hy: 'Վիշտը վշտով և վիշտ եմ նախաճաշում, / վիշտն է իմ խաղաղությունը, և վիշտն է իմ պայքարը:' },
          { es: 'Bate, bate, chocolate, con arroz y con tomate.', hy: 'Հարի՛ր, հարի՛ր, շոկոլադ, բրնձով և լոլիկով:' },
          { es: 'Mientras el corazón y la cabeza batallando prosigan; / mientras haya unos ojos que devuelvan los ojos que los miran...', hy: 'Քանի դեռ սիրտն ու գլուխը կշարունակեն պայքարել, / քանի դեռ կլինեն աչքեր, որ կպատասխանեն նայող աչքերին...' },
          { es: 'Ni esperanza ni miedo / ni reposo ni paz.', hy: 'Ո՛չ հույս, ո՛չ վախ, / ո՛չ հանգիստ, ո՛չ խաղաղություն:' }
        ]
      },
      {
        id: 'c6_epanadiplosis',
        name: 'Epanadiplosis',
        nameHy: 'Էպանադիպլոզիս — Շրջափակող կրկնություն (Epanadiplosis)',
        stageEntender: {
          es: 'Consiste en comenzar y terminar el mismo verso o frase con la misma palabra exacta. (X ......... X)',
          hy: 'Միևնույն տողը կամ նախադասությունը ճիշտ նույն բառով սկսելն ու ավարտելն է: (X ......... X)'
        },
        stageRecordar: {
          keys: [
            { es: 'Misma palabra al principio Y al final', hy: 'Նույն բառը սկզբում ԵՎ վերջում' },
            { es: 'En el mismo verso o enunciado', hy: 'Նույն տողում կամ նախադասության մեջ' },
            { es: 'Estructura circular: Palabra ... Palabra', hy: 'Շրջանաձև կառուցվածք՝ Բառ ... Բառ' }
          ]
        },
        stageReconocer: {
          textEs: 'Verde que te quiero verde.',
          highlightEs: '"Verde" al principio y "verde" al final del verso',
          explanationEs: 'Empieza por "Verde" y termina por "verde" en la misma línea (Federico García Lorca).',
          textHy: 'Կանաչ, քեզ կանաչ եմ սիրում, կանաչ (Verde que te quiero verde):',
          highlightHy: '«Verde» սկզբում և «verde» տողի վերջում',
          explanationHy: 'Տողը սկսվում է «Verde» բառով և ավարտվում «verde»-ով (Լորկա):'
        },
        examplesSimple: [
          { es: 'Palabras, solo palabras.', hy: 'Բառեր, միայն բառեր:' },
          { es: 'Silencio, la noche pide silencio.', hy: 'Լռություն, գիշերը պահանջում է լռություն:' },
          { es: 'Hurra, los campeones gritan hurra.', hy: 'Ուռա՜, չեմպիոնները գոռում են ուռա՜:' },
          { es: 'Amor, todo se resume en amor.', hy: 'Սեր, ամեն ինչ ամփոփվում է սիրո մեջ:' },
          { es: 'Perdón, te suplico perdón.', hy: 'Ներում, քեզնից աղերսում եմ ներում:' }
        ],
        examplesComplex: [
          { es: 'Cómo era, Dios mío, cómo era. (Juan Ramón Jiménez)', hy: 'Ինչպիսի՜ն էր, Տե՛ր իմ, ինչպիսի՜ն էր:' },
          { es: 'Zarza que eres tan dulce como zarza. (Rubén Darío)', hy: 'Մորենի, որ դու այնքան քաղցր ես որպես մորենի:' },
          { es: 'Perderte quiero si tengo que perderte.', hy: 'Քեզ կորցնել եմ ուզում, եթե ստիպված եմ քեզ կորցնել:' },
          { es: 'Dueño no tengo, de nadie soy dueño.', hy: 'Տեր չունեմ ես, ոչ ոքի տեր չեմ:' },
          { es: 'Vencerás porque tienes que vencer.', hy: 'Կհաղթես, որովհետև դու պետք է հաղթես:' }
        ]
      },
      {
        id: 'c6_asindeton',
        name: 'Asíndeton',
        nameHy: 'Ասինդետոն — Անշաղկապություն (Asíndeton)',
        stageEntender: {
          es: 'Consiste en eliminar intencionadamente las conjunciones ("y", "e", "ni", "o") entre palabras o frases, separándolas solo por comas para dar rapidez, dinamismo y urgencia.',
          hy: 'Բառերի կամ նախադասությունների միջև շաղկապների («և», «ու», «կամ») նպատակադրված բացթողումն է՝ դրանք անջատելով միայն ստորակետներով՝ խոսքին արագություն և դինամիզմ հաղորդելու համար:'
        },
        stageRecordar: {
          keys: [
            { es: 'Sin conjunciones (omisión de "y", "ni", "o")', hy: 'Առանց շաղկապների («և», «ոչ» բացակայություն)' },
            { es: 'Solo comas entre elementos', hy: 'Միայն ստորակետներ տարրերի միջև' },
            { es: 'Sensación de velocidad y agilidad', hy: 'Արագության և ճկունության զգացողություն' }
          ]
        },
        stageReconocer: {
          textEs: 'Llegué, vi, vencí.',
          highlightEs: 'Separado por comas sin la "y"',
          explanationEs: 'La famosa frase de Julio César suprime la conjunción para mostrar rapidez absoluta.',
          textHy: 'Եկա, տեսա, հաղթեցի (Llegué, vi, vencí):',
          highlightHy: 'Ստորակետներով առանց «y»-ի',
          explanationHy: 'Հուլիոս Կեսարի հայտնի խոսքն առանց շաղկապների է՝ բացարձակ արագություն ցույց տալու համար:'
        },
        examplesSimple: [
          { es: 'Corre, salta, vuela, escapa.', hy: 'Վազի՛ր, թռի՛ր, սավառնի՛ր, փախի՛ր:' },
          { es: 'Día, noche, poniente, madrugada.', hy: 'Ցերեկ, գիշեր, մայրամուտ, այգաբաց:' },
          { es: 'Rendí, rompí, derribé, rajé.', hy: 'Նվաճեցի, կոտրեցի, տապալեցի, ճեղքեցի:' },
          { es: 'Hombres, mujeres, niños gritaban al unísono.', hy: 'Տղամարդիկ, կանայք, երեխաներ բղավում էին միաձայն:' },
          { es: 'Fuego, humo, ceniza cubrían la colina.', hy: 'Կրակ, ծուխ, մոխիր ծածկում էին բլուրը:' }
        ],
        examplesComplex: [
          { es: 'En tierra, en humo, en polvo, en sombra, en nada. (Luis de Góngora)', hy: 'Հող, ծուխ, փոշի, ստվեր, ոչինչ (Գոնգորա)' },
          { es: 'Acude, corre, vuela, traspasa la alta sierra, ocupa el llano. (Fray Luis de León)', hy: 'Հասի՛ր, վազի՛ր, թռի՛ր, անցի՛ր բարձր լեռը, զբաղեցրո՛ւ դաշտավայրը' },
          { es: 'Desmayarse, atreverse, estar furioso, áspero, tierno, liberal, esquivo... (Lope de Vega)', hy: 'Ուշաթափվել, համարձակվել, կատաղել, կոպիտ, քնքուշ, ազատամիտ, խուսափող...' },
          { es: 'Mira, calla, aguarda, siente el palpitar del mundo.', hy: 'Նայի՛ր, լռի՛ր, սպասի՛ր, զգա՛ աշխարհի բաբախյունը:' },
          { es: 'Grita, llora, patalea, nada calma su llanto.', hy: 'Գոռում է, լալիս է, ոտքերով հարվածում է, ոչինչ չի հանդարտեցնում նրա լացը:' }
        ]
      },
      {
        id: 'c6_polisindeton',
        name: 'Polisíndeton',
        nameHy: 'Պոլիսինդետոն — Բազմաշաղկապություն (Polisíndeton)',
        stageEntender: {
          es: 'Consiste en repetir muchas conjunciones (generalmente "y" o "ni") entre palabras o frases donde no serían gramaticalmente necesarias, para dar lentitud, solemnidad o peso.',
          hy: 'Բառերի կամ նախադասությունների միջև շաղկապների (հատկապես «y» կամ «ni») չափազանց շատ կրկնությունն է, որտեղ դրանք քերականորեն պարտադիր չէին՝ խոսքին ծանրություն, հանդիսավորություն կամ դանդաղություն տալու համար:'
        },
        stageRecordar: {
          keys: [
            { es: 'Repetición insistente de "y", "ni", "o"', hy: '«y», «ni» շաղկապների համառ կրկնություն' },
            { es: 'Efecto de lentitud y acumulación pesada', hy: 'Դանդաղության և ծանր կուտակման ազդեցություն' },
            { es: 'Lo contrario exacto del asíndeton', hy: 'Ասինդետոնի ճիշտ հակառակը' }
          ]
        },
        stageReconocer: {
          textEs: 'Y sueña, y ama, y canta, y ríe, y llora.',
          highlightEs: 'Repetición constante de la conjunción "y"',
          explanationEs: 'Une cada verbo con "y" para dar sensación de acumulación infinita.',
          textHy: 'Եվ երազում է, և սիրում է, և երգում է, և ծիծաղում է, և լալիս է:',
          highlightHy: '«Y» (և) շաղկապի անընդհատ կրկնություն',
          explanationHy: 'Յուրաքանչյուր բայ միացնում է «և» շաղկապով՝ անվերջ կուտակման զգացողություն ստեղծելով:'
        },
        examplesSimple: [
          { es: 'Ni tú, ni yo, ni nadie sabe la verdad.', hy: 'Ո՛չ դու, ո՛չ ես, ո՛չ ոք չգիտի ճշմարտությունը:' },
          { es: 'Y ríe, y salta, y baila toda la tarde.', hy: 'Եվ ծիծաղում է, և ցատկում է, և պարում է ողջ կեսօրը:' },
          { es: 'Hay pan y queso y vino y fruta en la mesa.', hy: 'Սեղանին կա հաց, և՛ պանիր, և՛ գինի, և՛ միրգ:' },
          { es: 'Ni come, ni duerme, ni descansa.', hy: 'Ո՛չ ուտում է, ո՛չ քնում է, ո՛չ հանգստանում:' },
          { es: 'Y los ríos y las montañas y los valles se cubrieron de nieve.', hy: 'Եվ գետերը, և լեռները, և հովիտները ծածկվեցին ձյունով:' }
        ],
        examplesComplex: [
          { es: 'Oigo un suspiro, y otro, y el latido del corazón, y el viento en la ventana.', hy: 'Լսում եմ մի հառաչանք, և մեկ ուրիշը, և սրտի զարկը, և քամին պատուհանի մոտ:' },
          { es: 'El prado y valle y gruta y río y fuente responden a mi llanto. (Garcilaso)', hy: 'Մարգագետինը, և հովիտը, և քարայրը, և գետը, և աղբյուրը պատասխանում են իմ լացին:' },
          { es: 'Porque es pura y es blanca y es graciosa y es leve como un rayo de sol.', hy: 'Որովհետև նա մաքուր է, և սպիտակ է, և նազելի է, և թեթև է, ինչպես արևի շողը:' },
          { es: 'Ni los libros, ni las cartas, ni las viejas fotos pudieron consolarlo.', hy: 'Ո՛չ գրքերը, ո՛չ նամակները, ո՛չ հին լուսանկարները չկարողացան մխիթարել նրան:' },
          { es: 'Y camina y camina bajo la lluvia sin mirar atrás.', hy: 'Եվ քայլում է, ու քայլում անձրևի տակ՝ հետ չնայելով:' }
        ]
      },
      {
        id: 'c6_enumeracion',
        name: 'Enumeración',
        nameHy: 'Թվարկում (Enumeración)',
        stageEntender: {
          es: 'Consiste en la acumulación sucesiva de palabras o elementos que pertenecen a un mismo conjunto, tema o categoría gramatical para describir una realidad con detalle.',
          hy: 'Միևնույն խմբին, թեմային կամ քերականական կարգին պատկանող բառերի կամ տարրերի հաջորդական կուտակումն է՝ իրականությունն ավելի մանրամասն նկարագրելու համար:'
        },
        stageRecordar: {
          keys: [
            { es: 'Serie de elementos de la misma clase', hy: 'Նույն դասի տարրերի շարք' },
            { es: 'Describe acumulando detalles', hy: 'Նկարագրում է մանրամասները կուտակելով' },
            { es: 'Puede ser ordenada (caótica o graduada)', hy: 'Կարող է լինել կարգավորված կամ քաոսային' }
          ]
        },
        stageReconocer: {
          textEs: 'En la mochila llevaba cuadernos, lápices, gomas, libros y una manzana.',
          highlightEs: 'cuadernos, lápices, gomas, libros, manzana (elementos escolares)',
          explanationEs: 'Enumera una lista de objetos concretos para describir el contenido de la mochila.',
          textHy: 'Պայուսակում կար տետրեր, մատիտներ, ռետիններ, գրքեր և մի խնձոր:',
          highlightHy: 'տետրեր, մատիտներ, ռետիններ, գրքեր, խնձոր',
          explanationHy: 'Թվարկում է առարկաների ցանկը՝ պայուսակի պարունակությունը նկարագրելու համար:'
        },
        examplesSimple: [
          { es: 'Compró manzanas, peras, plátanos y uvas.', hy: 'Գնեց խնձորներ, տանձեր, բանաններ և խաղող:' },
          { es: 'Era alto, moreno, simpático y muy educado.', hy: 'Նա բարձրահասակ էր, թխամորթ, համակրելի և շատ դաստիարակված:' },
          { es: 'El jardín tenía rosas, lirios, claveles y jazmines.', hy: 'Պարտեզում կային վարդեր, շուշաններ, մեխակներ և հասմիկներ:' },
          { es: 'Vimos leones, tigres, elefantes y jirafas en el parque.', hy: 'Այգում տեսանք առյուծներ, վագրեր, փղեր և ընձուղտներ:' },
          { es: 'Revisó cajones, armarios, estanterías y cajas.', hy: 'Ստուգեց դարակները, պահարանները, դարակաշարերը և արկղերը:' }
        ],
        examplesComplex: [
          { es: 'Aspiro la fragancia de la leña, el pan recién horneado, la tierra mojada y el café caliente.', hy: 'Ներշնչում եմ փայտի, թարմ թխված հացի, խոնավ հողի և տաք սուրճի բույրը:' },
          { es: 'Había cuadros polvorientos, sillas rotas, relojes parados y candelabros oxidados.', hy: 'Կային փոշոտ նկարներ, կոտրված աթոռներ, կանգնած ժամացույցներ և ժանգոտ մոմակալներ:' },
          { es: 'El desfile traía soldados, tambores, banderas, caballos y trompetas.', hy: 'Շքերթը բերում էր զինվորներ, թմբուկներ, դրոշներ, ձիեր և շեփորներ:' },
          { es: 'Sintió miedo, rabia, tristeza y una infinita soledad.', hy: 'Զգաց վախ, զայրույթ, տխրություն և անսահման մենություն:' },
          { es: 'Viento, lluvia, relámpagos y truenos azotaron la costa.', hy: 'Քամի, անձրև, կայծակներ և որոտներ հարվածեցին ափին:' }
        ]
      },
      {
        id: 'c6_pleonasmo',
        name: 'Pleonasmo',
        nameHy: 'Պլեոնազմ — Ավելաբանություն (Pleonasmo)',
        stageEntender: {
          es: 'Consiste en utilizar palabras innecesarias que repiten una idea ya dicha, para reforzar el mensaje, darle expresividad o insistir con emoción.',
          hy: 'Ավելորդ բառերի գործածությունն է, որոնք կրկնում են արդեն ասված միտքը՝ հաղորդագրությունն ուժեղացնելու կամ հուզականորեն շեշտելու համար:'
        },
        stageRecordar: {
          keys: [
            { es: 'Palabras redundantes (innecesarias)', hy: 'Ավելորդ (կրկնվող) բառեր' },
            { es: 'Refuerza la emoción o la certeza', hy: 'Ուժեղացնում է հույզը կամ համոզվածությունը' },
            { es: 'Ejemplo clásico: "subir arriba", "lo vi con mis ojos"', hy: 'Դասական օրինակ՝ «վերև բարձրանալ», «սեփական աչքերով տեսա»' }
          ]
        },
        stageReconocer: {
          textEs: 'Lo vi con mis propios ojos, nadie me lo puede negar.',
          highlightEs: '"con mis propios ojos" (ver ya implica usar los ojos)',
          explanationEs: 'Añade "con mis propios ojos" para certificar sin duda que fue testigo directo.',
          textHy: 'Սեփական աչքերովս տեսա, ոչ ոք չի կարող հերքել:',
          highlightHy: '«սեփական աչքերովս» (տեսնելն ինքնին աչքերով է լինում)',
          explanationHy: 'Ավելացնում է «սեփական աչքերովս»՝ հաստատելու, որ անձամբ է ականատես եղել:'
        },
        examplesSimple: [
          { es: 'Subir arriba de la colina. (Subir ya indica ir arriba)', hy: 'Բարձրանալ բլրի վերևը (Բարձրանալն արդեն դեպի վեր է)' },
          { es: 'Bajar abajo al sótano. (Bajar ya es ir hacia abajo)', hy: 'Իջնել ներքև՝ նկուղ (Իջնելն արդեն դեպի ցած է)' },
          { es: 'Salir afuera al patio. (Salir ya es ir hacia fuera)', hy: 'Դուրս գալ բակ (Դուրս գալն արդեն դեպի դուրս է)' },
          { es: 'Entrar adentro de la cueva.', hy: 'Ներս մտնել քարանձավ (Մտնելն արդեն ներս է)' },
          { es: 'Lo escuché con mis propios oídos.', hy: 'Իմ սեփական ականջներով լսեցի:' }
        ],
        examplesComplex: [
          { es: 'Lloran de sus ojos tan fuertemente llorando. (Cantar de mio Cid)', hy: 'Լալիս են իրենց աչքերից՝ այդքան ուժգին լաց լինելով (Սիդի երգը)' },
          { es: 'Temprano madrugó la madrugada. (Madrugar ya implica hacerlo de madrugada)', hy: 'Վաղ լուսացավ այգաբացը (Այգաբացն արդեն վաղ առավոտ է)' },
          { es: 'Calla la boca y escucha con atención.', hy: 'Լռեցրո՛ւ բերանդ և լսի՛ր ուշադրությամբ:' },
          { es: 'Me parece a mí personalmente que tienes razón.', hy: 'Ինձ անձամբ թվում է, որ դու ճիշտ ես:' },
          { es: 'Justicia justa es lo que reclama el pueblo.', hy: 'Արդար արդարադատություն է այն, ինչ պահանջում է ժողովուրդը:' }
        ]
      }
    ]
  },
  {
    id: 'tema7',
    number: 7,
    title: 'Figuras Literarias — Nivel Semántico (La Metáfora)',
    titleHy: 'Գրական պատկերավորման միջոցներ — Իմաստային մակարդակ (Փոխաբերություն)',
    subtitle: 'Término Real, Término Imaginario y las 3 Estructuras Básicas',
    subtitleHy: 'Իրական եզր, Երևակայական եզր և 3 հիմնական կառուցվածքները',
    summaryEs: 'La metáfora identifica dos realidades distintas basándose en una semejanza. Para dominarla en el examen debes reconocer siempre el Término Real (A), el Término Imaginario (B) y su estructura exacta: "A es B", "B de A" o "B en lugar de A".',
    summaryHy: 'Փոխաբերությունը (metáfora) նույնացնում է երկու տարբեր իրականություններ՝ հիմնվելով նմանության վրա: Քննությանը փայլելու համար պետք է ճանաչել Իրական եզրը (A), Երևակայական եզրը (B) և 3 կառուցվածքները:',
    concepts: [
      {
        id: 'c7_meta_def',
        name: '¿Qué es una Metáfora? Término Real e Imaginario',
        nameHy: 'Ի՞նչ է փոխաբերությունը: Իրական և երևակայական եզրեր',
        stageEntender: {
          es: 'Una metáfora consiste en nombrar un objeto o idea real con el nombre de otro imaginario con el que guarda una relación de parecido o semejanza.',
          hy: 'Փոխաբերությունը իրական առարկան կամ գաղափարն անվանելն է մեկ այլ երևակայական առարկայի անունով, որի հետ այն ունի նմանություն:'
        },
        stageRecordar: {
          keys: [
            { es: 'Término Real (A): lo que existe de verdad (ojos, dientes, sol)', hy: 'Իրական եզր (A)՝ այն, ինչ իրականում գոյություն ունի (աչքեր, ատամներ, արև)' },
            { es: 'Término Imaginario (B): la imagen poética (estrellas, perlas, moneda de oro)', hy: 'Երևակայական եզր (B)՝ պոետիկ պատկերը (աստղեր, մարգարիտներ, ոսկեդրամ)' },
            { es: 'Relación de semejanza: lo que tienen en común (brillo, blancura)', hy: 'Նմանության կապ՝ այն ընդհանուրը, ինչ կա (փայլ, սպիտակություն)' }
          ]
        },
        stageReconocer: {
          textEs: 'Tus ojos son estrellas.',
          highlightEs: 'Término Real (A) = ojos; Término Imaginario (B) = estrellas; Semejanza = brillan',
          explanationEs: 'Identifica directamente los ojos con las estrellas por su brillo en la oscuridad.',
          textHy: 'Քո աչքերը աստղեր են (Tus ojos son estrellas):',
          highlightHy: 'Իրական (A) = աչքեր; Երևակայական (B) = աստղեր; Նմանություն = փայլում են',
          explanationHy: 'Ուղղակիորեն նույնացնում է աչքերն աստղերի հետ՝ մթության մեջ նրանց փայլի պատճառով:'
        },
        examplesSimple: [
          { es: 'El sol es una moneda de oro. (A = sol, B = moneda de oro)', hy: 'Արևը ոսկե դրամ է (A = արև, B = ոսկե դրամ)' },
          { es: 'Tus dientes son perlas. (A = dientes, B = perlas)', hy: 'Քո ատամները մարգարիտներ են (A = ատամներ, B = մարգարիտներ)' },
          { es: 'El tiempo es oro. (A = tiempo, B = oro, semejanza = valor incalculable)', hy: 'Ժամանակը ոսկի է (A = ժամանակ, B = ոսկի)' },
          { es: 'Sus cabellos son hilos de oro. (A = cabellos, B = hilos de oro)', hy: 'Նրա մազերը ոսկե թելեր են (A = մազեր, B = ոսկե թելեր)' },
          { es: 'La luna es un farol en la noche. (A = luna, B = farol)', hy: 'Լուսինը գիշերային լապտեր է (A = լուսին, B = լապտեր)' }
        ],
        examplesComplex: [
          { es: 'Nuestras vidas son los ríos. (Jorge Manrique: A = vidas, B = ríos, semejanza = transcurso)', hy: 'Մեր կյանքերը գետեր են (A = կյանքեր, B = գետեր)' },
          { es: 'La guitarra es un pozo con viento en vez de agua. (Gerardo Diego)', hy: 'Կիթառը հոր է՝ ջրի փոխարեն քամով' },
          { es: 'El cielo de la tarde era un lienzo de púrpura.', hy: 'Երեկոյան երկինքը ծիրանագույն կտավ էր' },
          { es: 'Su corazón de piedra no sentía compasión.', hy: 'Նրա քարե սիրտը գթասրտություն չէր զգում' },
          { es: 'La nube es un rebaño de ovejas blancas en el azul.', hy: 'Ամպը սպիտակ ոչխարների հոտ է կապույտ երկնքում' }
        ],
        metaStructures: [
          {
            type: 'Estructura 1: A es B (Metáfora impura / atribuida)',
            descriptionEs: 'Aparecen los dos términos unidos por el verbo "ser" u otro verbo copulativo. Es la más explícita y fácil de reconocer.',
            descriptionHy: 'Երկու եզրերն էլ առկա են՝ միացված «լինել» (ser) բայով: Ամենապարզ և հեշտ ճանաչելի տեսակն է:',
            exampleEs: 'Tus ojos son estrellas.',
            exampleHy: 'Քո աչքերը աստղեր են:',
            realTerm: 'ojos (աչքեր)',
            imagTerm: 'estrellas (աստղեր)'
          },
          {
            type: 'Estructura 2: B de A (Metáfora preposicional)',
            descriptionEs: 'El término imaginario (B) va unido al término real (A) mediante la preposición "de".',
            descriptionHy: 'Երևակայական եզրը (B) միանում է իրական եզրին (A) «de» նախդիրի միջոցով:',
            exampleEs: 'Las perlas de tu boca / El fuego de su pasión.',
            exampleHy: 'Քո բերանի մարգարիտները (ատամները) / Նրա կրքի կրակը:',
            realTerm: 'tu boca/dientes (բերան/ատամներ) / pasión (կիրք)',
            imagTerm: 'perlas (մարգարիտներ) / fuego (կրակ)'
          },
          {
            type: 'Estructura 3: B en lugar de A (Metáfora pura)',
            descriptionEs: 'El término real (A) desaparece por completo y solo aparece el término imaginario (B). El lector debe deducir A por el contexto.',
            descriptionHy: 'Իրական եզրը (A) լիովին բացակայում է, երևում է միայն երևակայականը (B): Ընթերցողն ինքը պետք է կռահի A-ն ենթատեքստից:',
            exampleEs: 'Las perlas de su sonrisa iluminaron la sala.',
            exampleHy: 'Նրա ժպիտի մարգարիտները լուսավորեցին սենյակը (մարգարիտներ = ատամներ):',
            realTerm: 'dientes (ատամներ - չի նշվում)',
            imagTerm: 'perlas (մարգարիտներ - նշվում է)'
          }
        ]
      }
    ]
  }
];

export interface NotebookVocabItem {
  es: string;
  hy: string;
  contextEs?: string;
  contextHy?: string;
}

export const NOTEBOOK_VOCABULARY: NotebookVocabItem[] = [
  { es: 'recuperar', hy: 'վերականգնել', contextEs: 'Recuperar la memoria de los romances antiguos.', contextHy: 'Վերականգնել հին ռոմանսների հիշողությունը:' },
  { es: 'comprender', hy: 'հասկանալ', contextEs: 'Comprender la diferencia exacta entre mito y leyenda.', contextHy: 'Հասկանալ առասպելի և ավանդազրույցի ճշգրիտ տարբերությունը:' },
  { es: 'haber = hay', hy: 'կա, գոյություն ունի', contextEs: 'En el romance hay versos octosílabos con rima asonante.', contextHy: 'Ռոմանսում կան ութավանկ տողեր՝ ասոնանս հանգով:' },
  { es: 'protagonista', hy: 'գլխավոր հերոս', contextEs: 'El protagonista del mito es un dios o héroe sobrenatural.', contextHy: 'Առասպելի գլխավոր հերոսն աստված կամ գերբնական հերոս է:' },
  { es: 'distraer', hy: 'շեղել', contextEs: 'El juglar no quería distraer al público reunido.', contextHy: 'Ժուգլյարը չէր ցանկանում շեղել հավաքված լսարանին:' },
  { es: 'un favor', hy: 'մի լավություն', contextEs: 'Hazme el favor de memorizar las tres estructuras de la metáfora.', contextHy: 'Լավություն արա՝ մտապահիր փոխաբերության երեք կառուցվածքները:' },
  { es: 'fíjate', hy: 'ուշադրություն դարձրո՛ւ / նայի՛ր', contextEs: 'Fíjate en las palabras finales de los versos pares.', contextHy: 'Ուշադրություն դարձրու զույգ տողերի վերջին բառերին:' },
  { es: 'de repente', hy: 'հանկարծ', contextEs: 'De repente las estatuas de piedra de la catedral cobraron vida.', contextHy: 'Հանկարծ տաճարի քարե արձանները կենդանացան:' },
  { es: 'dar consejos', hy: 'խորհուրդ տալ', contextEs: 'El conde Lucanor pide a Patronio que le dé consejos sabios.', contextHy: 'Կոմս Լուկանորը Պատրոնիոյին խնդրում է իմաստուն խորհուրդ տալ:' },
  { es: 'cancelar', hy: 'չեղարկել', contextEs: 'Cancelar las dudas antes del examen escolar.', contextHy: 'Չեղարկել կասկածները դպրոցական քննությունից առաջ:' },
  { es: 'Lo mejor es hablar directamente con ella', hy: 'Ամենալավն այն է, որ ուղիղ խոսես նրա հետ', contextEs: 'Fórmula de consejo práctico en la libreta escolar.', contextHy: 'Գործնական խորհրդի բանաձև դպրոցական տետրից:' },
  { es: 'Es mejor que hables con ella', hy: 'Ավելի լավ է դու խոսես նրա հետ', contextEs: 'Recomendación expresada con subjuntivo.', contextHy: 'Առաջարկություն՝ արտահայտված ըղձականով:' },
  { es: '¡Yo que tú!', hy: 'Քո տեղը լինեի՛!', contextEs: '¡Yo que tú repasaría el asíndeton y el polisíndeton hoy mismo!', contextHy: 'Քո տեղը լինեի՝ հենց այսօր կկրկնեի ասինդետոնն ու պոլիսինդետոնը:' }
];

