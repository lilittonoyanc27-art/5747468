import { Question } from './types.ts';

export const QUESTION_BANK: Question[] = [
  // ================= TEMA 1: LA LITERATURA POPULAR =================
  {
    id: 't1_f_01',
    topicId: 'tema1',
    difficulty: 'facil',
    questionEs: '¿Cómo se transmitían tradicionalmente las obras de la literatura popular?',
    questionHy: 'Ինչպե՞ս էին ավանդաբար փոխանցվում ժողովրդական գրականության ստեղծագործությունները:',
    options: [
      { id: 'opt_1', textEs: 'De forma oral, de boca en boca a través de las generaciones', textHy: 'Բանավոր կերպով՝ բերանից բերան, սերնդեսերունդ' },
      { id: 'opt_2', textEs: 'Únicamente mediante libros impresos en imprenta', textHy: 'Բացառապես տպարանում տպագրված գրքերի միջոցով' },
      { id: 'opt_3', textEs: 'Por medio de cartas privadas selladas', textHy: 'Կնքված անձնական նամակների միջոցով' },
      { id: 'opt_4', textEs: 'En archivos digitales de internet', textHy: 'Համացանցի թվային արխիվներում' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'La literatura popular nació antes de la imprenta y se transmitía por la voz y la memoria del pueblo.',
    explanationHy: 'Ժողովրդական գրականությունը ծնվել է տպագրությունից առաջ և փոխանցվել է ժողովրդի ձայնով ու հիշողությամբ:',
    rememberRuleEs: 'Literatura popular = transmisión oral de generación en generación.',
    rememberRuleHy: 'Ժողովրդական գրականություն = բանավոր փոխանցում սերնդեսերունդ:',
    followUpExample: { es: 'Las canciones que las abuelas enseñan a los niños cantando.', hy: 'Երգերը, որ տատիկները երգելով սովորեցնում են երեխաներին:' }
  },
  {
    id: 't1_f_02',
    topicId: 'tema1',
    difficulty: 'facil',
    questionEs: '¿Quién es el autor de las canciones y cuentos populares tradicionales?',
    questionHy: 'Ո՞վ է ավանդական ժողովրդական երգերի և հեքիաթների հեղինակը:',
    options: [
      { id: 'opt_1', textEs: 'Son obras anónimas creadas por el pueblo', textHy: 'Դրանք անանուն ստեղծագործություններ են՝ ստեղծված ժողովրդի կողմից' },
      { id: 'opt_2', textEs: 'Un escritor famoso con nombre y apellidos', textHy: 'Անուն-ազգանունով հայտնի գրող' },
      { id: 'opt_3', textEs: 'El rey de España en la Edad Media', textHy: 'Միջնադարում Իսպանիայի թագավորը' },
      { id: 'opt_4', textEs: 'Un profesor de universidad', textHy: 'Համալսարանի պրոֆեսոր' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Al transmitirse oralmente sin firma, la autoría es colectiva y anónima.',
    explanationHy: 'Քանի որ փոխանցվում էր բանավոր՝ առանց ստորագրության, հեղինակությունը հավաքական է և անանուն:',
    rememberRuleEs: 'Las obras populares no tienen autor conocido: son anónimas.',
    rememberRuleHy: 'Ժողովրդական գործերը հայտնի հեղինակ չունեն. դրանք անանուն են:',
    followUpExample: { es: 'El romance "Fontefrida" no lleva firma de ningún poeta.', hy: '«Ֆոնտեֆրիդա» ռոմանսը որևէ բանաստեղծի ստորագրություն չի կրում:' }
  },
  {
    id: 't1_f_03',
    topicId: 'tema1',
    difficulty: 'facil',
    questionEs: '¿Por qué existen diferentes variantes de un mismo romance o cantar popular?',
    questionHy: 'Ինչո՞ւ են գոյություն ունենում նույն ռոմանսի կամ ժողովրդական երգի տարբեր տարբերակներ (վարիանտներ):',
    options: [
      { id: 'opt_1', textEs: 'Porque al transmitirse de memoria, cada persona olvida o añade palabras', textHy: 'Որովհետև հիշողությամբ փոխանցվելիս յուրաքանչյուր մարդ բառեր է մոռանում կամ ավելացնում' },
      { id: 'opt_2', textEs: 'Porque el autor las publicó en distintos periódicos', textHy: 'Որովհետև հեղինակը դրանք հրատարակել է տարբեր թերթերում' },
      { id: 'opt_3', textEs: 'Porque era obligatorio cambiar el final por ley', textHy: 'Որովհետև օրենքով պարտադիր էր փոխել ավարտը' },
      { id: 'opt_4', textEs: 'Porque se traducían a otros idiomas automáticamente', textHy: 'Որովհետև ինքնաբերաբար թարգմանվում էին այլ լեզուներով' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'La memoria oral no es fija; cada juglar o narrador introducía pequeñas modificaciones.',
    explanationHy: 'Բանավոր հիշողությունն անփոփոխ չէ. յուրաքանչյուր պատմող կատարում էր փոքր փոփոխություններ:',
    rememberRuleEs: 'Transmisión oral = existencia de variantes.',
    rememberRuleHy: 'Բանավոր փոխանցում = տարբերակների առկայություն:',
    followUpExample: { es: 'Un mismo romance se canta con ligeras diferencias en Burgos y en Sevilla.', hy: 'Նույն ռոմանսը Բուրգոսում և Սևիլիայում երգվում է փոքր տարբերություններով:' }
  },
  {
    id: 't1_m_01',
    topicId: 'tema1',
    difficulty: 'medio',
    questionEs: 'En el verso "¡Oíd, nobles señores, lo que os voy a relatar!", ¿qué rasgo de la literatura popular aparece?',
    questionHy: '«¡Oíd, nobles señores, lo que os voy a relatar!» տողում ժողովրդական գրականության ո՞ր հատկանիշն է առկա:',
    options: [
      { id: 'opt_1', textEs: 'Llamada de atención directa al receptor (oyente)', textHy: 'Ուղիղ կոչ ունկնդրին՝ նրա ուշադրությունը գրավելու համար' },
      { id: 'opt_2', textEs: 'Uso de cultismos latinos complejos', textHy: 'Բարդ լատինական գրական բառերի կիրառություն' },
      { id: 'opt_3', textEs: 'Rima consonante en versos alejandrinos', textHy: 'Կոնսոնանս հանգ ալեքսանդրյան տողերում' },
      { id: 'opt_4', textEs: 'Una metáfora pura de tipo B en lugar de A', textHy: 'Զուտ փոխաբերություն «B-ն A-ի փոխարեն» տեսակի' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Los juglares usaban llamadas directas ("¡Oíd!", "¡Mirad!") para mantener atento al público congregado.',
    explanationHy: 'Ժուգլյարներն օգտագործում էին ուղիղ կոչեր («Լսե՛ք», «Նայե՛ք»)՝ հավաքված լսարանի ուշադրությունը պահելու համար:',
    rememberRuleEs: 'Llamadas al oyente = recurso clave del juglar en la literatura popular.',
    rememberRuleHy: 'Կոչեր ունկնդրին = ժուգլյարի գլխավոր հնարքը ժողովրդական գրականության մեջ:',
    followUpExample: { es: '¡Escuchad con atención este cantar!', hy: 'Ուշադրությա՛մբ լսեք այս երգը:' }
  },
  {
    id: 't1_m_02',
    topicId: 'tema1',
    difficulty: 'medio',
    questionEs: '¿Qué tipo de vocabulario y estilo predomina en las obras de la literatura popular?',
    questionHy: 'Ինչպիսի՞ բառապաշար և ոճ է գերակշռում ժողովրդական գրականության գործերում:',
    options: [
      { id: 'opt_1', textEs: 'Lenguaje sencillo, expresiones coloquiales y fórmulas repetitivas', textHy: 'Պարզ լեզու, խոսակցական արտահայտություններ և կրկնվող բանաձևեր' },
      { id: 'opt_2', textEs: 'Vocabulario científico y tecnicismos modernos', textHy: 'Գիտական բառապաշար և ժամանակակից տերմիններ' },
      { id: 'opt_3', textEs: 'Sintaxis extremadamente difícil llena de hipérbatos cultos', textHy: 'Չափազանց բարդ շարահյուսություն՝ լի մշակված հիպերբատոններով' },
      { id: 'opt_4', textEs: 'Textos escritos sin ningún tipo de emoción ni diálogo', textHy: 'Առանց հույզերի և երկխոսությունների գրված տեքստեր' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'La literatura popular busca comunicarse de inmediato con cualquier persona, usando fórmulas claras.',
    explanationHy: 'Ժողովրդական գրականությունը ձգտում է անմիջապես հասկանալի լինել ցանկացած մարդու՝ պարզ ձևակերպումներով:',
    rememberRuleEs: 'Popular = sencillo, expresivo y cercano al habla cotidiana.',
    rememberRuleHy: 'Ժողովրդական = պարզ, արտահայտիչ և մոտ խոսակցականին:',
    followUpExample: { es: 'El uso de refranes y frases hechas.', hy: 'Ասացվածքների և կայուն արտահայտությունների կիրառումը:' }
  },
  {
    id: 't1_d_01',
    topicId: 'tema1',
    difficulty: 'dificil',
    questionEs: '¿Cómo se conservaron hasta hoy las obras de la literatura popular que nacieron en la Edad Media?',
    questionHy: 'Ինչպե՞ս են մինչ օրս պահպանվել միջնադարում ծնված ժողովրդական գրականության գործերը:',
    options: [
      { id: 'opt_1', textEs: 'Gracias a que eruditos y coleccionistas las recopilaron por escrito en cancioneros y romanceros', textHy: 'Շնորհիվ այն բանի, որ գիտնականներն ու հավաքորդները դրանք գրառել են երգարաններում և ռոմանսերոներում' },
      { id: 'opt_2', textEs: 'Porque los autores originales las registraron ante notario', textHy: 'Որովհետև սկզբնական հեղինակները դրանք նոտարով են գրանցել' },
      { id: 'opt_3', textEs: 'Se grabaron en discos de audio de la época medieval', textHy: 'Ձայնագրվել են միջնադարյան ձայնասկավառակների վրա' },
      { id: 'opt_4', textEs: 'Porque estaban esculpidas en todas las catedrales', textHy: 'Որովհետև քանդակված էին բոլոր տաճարներում' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Siglos después de transmitirse oralmente, escritores y estudiosos las pusieron por escrito en libros llamados Romanceros y Cancioneros.',
    explanationHy: 'Բանավոր փոխանցվելուց դարեր անց գրողներն ու ուսումնասիրողները դրանք գրի առան Ռոմանսերոներում և Երգարաններում:',
    rememberRuleEs: 'La literatura popular oral se salvó al recopilarse por escrito en romanceros y cancioneros.',
    rememberRuleHy: 'Բանավոր ժողովրդական գրականությունը փրկվեց գրառվելով երգարաններում և ռոմանսերոներում:',
    followUpExample: { es: 'El "Romancero Viejo" del siglo XV y XVI.', hy: '15-16-րդ դարերի «Հին ռոմանսերոն»:' }
  },

  // ================= TEMA 2: ROMANCE, LEYENDA, MITO Y CUENTO =================
  {
    id: 't2_f_01',
    topicId: 'tema2',
    difficulty: 'facil',
    questionEs: '¿Cuántas sílabas métricas tienen característicamente los versos de un romance?',
    questionHy: 'Քանի՞ վանկ ունեն բնորոշ կերպով ռոմանսի բանաստեղծական տողերը:',
    options: [
      { id: 'opt_1', textEs: 'Ocho sílabas (versos octosílabos)', textHy: 'Ութ վանկ (ութավանկ տողեր — octosílabos)' },
      { id: 'opt_2', textEs: 'Once sílabas (versos endecasílabos)', textHy: 'Տասնմեկ վանկ (տասնմեկավանկ — endecasílabos)' },
      { id: 'opt_3', textEs: 'Catorce sílabas (alejandrinos)', textHy: 'Տասնչորս վանկ (ալեքսանդրյան)' },
      { id: 'opt_4', textEs: 'Cuatro sílabas (tetrasílabos)', textHy: 'Չորս վանկ (քառավանկ)' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'El romance castellano se compone exclusivamente de versos de arte menor de ocho sílabas (octosílabos).',
    explanationHy: 'Իսպանական ռոմանսը կազմված է բացառապես ութավանկ տողերից (octosílabos):',
    rememberRuleEs: 'Romance = versos de 8 sílabas (octosílabos).',
    rememberRuleHy: 'Ռոմանս = 8 վանկանի տողեր (octosílabos):',
    followUpExample: { es: 'Que por ma-yo e-ra, por ma-yo (8 sílabas).', hy: 'Que por ma-yo e-ra, por ma-yo (8 վանկ):' }
  },
  {
    id: 't2_f_02',
    topicId: 'tema2',
    difficulty: 'facil',
    questionEs: '¿Cómo funciona la rima en un romance?',
    questionHy: 'Ինչպե՞ս է գործում հանգավորումը ռոմանսում:',
    options: [
      { id: 'opt_1', textEs: 'Rima asonante en los versos pares; los impares quedan sueltos (libres)', textHy: 'Ասոնանս հանգ զույգ տողերում, իսկ կենտ տողերն ազատ են (առանց հանգի)' },
      { id: 'opt_2', textEs: 'Rima consonante en todos los versos', textHy: 'Կոնսոնանս հանգ բոլոր տողերում' },
      { id: 'opt_3', textEs: 'Riman solo los versos impares en consonante', textHy: 'Հանգավորվում են միայն կենտ տողերը կոնսոնանսով' },
      { id: 'opt_4', textEs: 'No tiene ningún tipo de rima', textHy: 'Չունի ոչ մի տեսակի հանգ' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'La estructura métrica fundamental del romance es: 8-, 8a, 8-, 8a, 8-, 8a...',
    explanationHy: 'Ռոմանսի տաղաչափական հիմնական կառուցվածքն է՝ 8-, 8a, 8-, 8a, 8-, 8a...:',
    rememberRuleEs: 'Romance: rima asonante en versos PARES; impares SUELTOS.',
    rememberRuleHy: 'Ռոմանս՝ ասոնանս հանգ ԶՈՒՅԳ տողերում, կենտերը՝ ԱԶԱՏ:',
    followUpExample: { es: 'Verso 1 (-), Verso 2 (a), Verso 3 (-), Verso 4 (a).', hy: 'Տող 1 (-), Տող 2 (a), Տող 3 (-), Տող 4 (a):' }
  },
  {
    id: 't2_f_03',
    topicId: 'tema2',
    difficulty: 'facil',
    questionEs: '¿Cuál es el elemento principal que define a un mito?',
    questionHy: 'Ո՞րն է գլխավոր տարրը, որը բնորոշում է առասպելը (mito):',
    options: [
      { id: 'opt_1', textEs: 'Relato sagrado con dioses y seres sobrenaturales que explica el origen del mundo', textHy: 'Սրբազան պատմություն աստվածներով և գերբնական էակներով, որը բացատրում է աշխարհի ծագումը' },
      { id: 'opt_2', textEs: 'Una biografía exacta de un político contemporáneo', textHy: 'Ժամանակակից քաղաքական գործչի ճշգրիտ կենսագրություն' },
      { id: 'opt_3', textEs: 'Una noticia breve en el periódico', textHy: 'Կարճ լուր թերթում' },
      { id: 'opt_4', textEs: 'Un poema de amor de cuatro versos', textHy: 'Չորս տողանի սիրային բանաստեղծություն' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Los mitos responden a grandes preguntas sobre el cosmos a través de dioses, héroes y fuerzas sobrenaturales.',
    explanationHy: 'Առասպելները պատասխանում են տիեզերքի վերաբերյալ մեծ հարցերին՝ աստվածների, հերոսների և գերբնական ուժերի միջոցով:',
    rememberRuleEs: 'Mito = Dioses + Origen del mundo o de la naturaleza.',
    rememberRuleHy: 'Առասպել = Աստվածներ + Աշխարհի կամ բնության ծագում:',
    followUpExample: { es: 'El mito de Faetón conduciendo el carro del Sol.', hy: 'Ֆաետոնի առասպելը, որը վարում էր Արևի կառքը:' }
  },
  {
    id: 't2_f_04',
    topicId: 'tema2',
    difficulty: 'facil',
    questionEs: '¿Qué diferencia a una leyenda de un cuento puramente inventado?',
    questionHy: 'Ինչո՞վ է տարբերվում ավանդազրույցը (leyenda) զուտ հորինված հեքիաթից:',
    options: [
      { id: 'opt_1', textEs: 'La leyenda parte de un lugar o personaje histórico real con añadidos fantásticos', textHy: 'Ավանդազրույցը հիմնվում է իրական վայրի կամ պատմական անձի վրա՝ ֆանտաստիկ հավելումներով' },
      { id: 'opt_2', textEs: 'La leyenda nunca tiene misterio ni fantasía', textHy: 'Ավանդազրույցը երբեք չի ունենում առեղծված կամ երևակայություն' },
      { id: 'opt_3', textEs: 'El cuento siempre tiene más de quinientas páginas', textHy: 'Հեքիաթը միշտ ունենում է ավելի քան հինգ հարյուր էջ' },
      { id: 'opt_4', textEs: 'La leyenda está escrita en verso y el cuento en inglés', textHy: 'Ավանդազրույցը գրված է չափածոյով, իսկ հեքիաթը՝ անգլերենով' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'La leyenda se localiza en un lugar concreto (Toledo, Soria) o figura histórica (el Cid, don Rodrigo).',
    explanationHy: 'Ավանդազրույցը տեղայնացված է կոնկրետ վայրում (Տոլեդո, Սորիա) կամ պատմական անձի շուրջ (Սիդ, Դոն Ռոդրիգո):',
    rememberRuleEs: 'Leyenda = Base histórica real + Elementos fantásticos o misteriosos.',
    rememberRuleHy: 'Ավանդազրույց = Իրական պատմական հիմք + Ֆանտաստիկ կամ առեղծվածային տարրեր:',
    followUpExample: { es: 'La leyenda de la campana de Huesca.', hy: 'Ուեսկայի զանգի ավանդազրույցը:' }
  },
  {
    id: 't2_m_01',
    topicId: 'tema2',
    difficulty: 'medio',
    questionEs: '¿Cuáles son las tres partes fundamentales en la estructura argumental de un cuento?',
    questionHy: 'Որո՞նք են հեքիաթի/պատմվածքի սյուժետային կառուցվածքի երեք հիմնական մասերը:',
    options: [
      { id: 'opt_1', textEs: 'Introducción (planteamiento), Nudo (conflicto) y Desenlace (resolución)', textHy: 'Ներածություն (սկիզբ), Հանգույց (խնդիր/բախում) և Հանգուցալուծում (ավարտ)' },
      { id: 'opt_2', textEs: 'Tesis, Antítesis y Síntesis', textHy: 'Թեզ, Հակաթեզ և Համադրույթ' },
      { id: 'opt_3', textEs: 'Rima, Métrica y Ritmo', textHy: 'Հանգ, Տաղաչափություն և Ռիթմ' },
      { id: 'opt_4', textEs: 'Índice, Glosario y Bibliografía', textHy: 'Բովանդակություն, Բառարան և Գրականության ցանկ' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Todo relato clásico presenta a los personajes (planteamiento), desarrolla un problema (nudo) y lo resuelve (desenlace).',
    explanationHy: 'Յուրաքանչյուր դասական պատմվածք ներկայացնում է հերոսներին (սկիզբ), զարգացնում խնդիրը (հանգույց) և լուծում այն (հանգուցալուծում):',
    rememberRuleEs: 'Estructura narrativa: Introducción -> Nudo -> Desenlace.',
    rememberRuleHy: 'Պատմողական կառուցվածք՝ Ներածություն -> Հանգույց -> Հանգուցալուծում:',
    followUpExample: { es: 'Caperucita va al bosque (inicio), el lobo la engaña (nudo), el leñador la salva (desenlace).', hy: 'Կարմիր Գլխարկը գնում է անտառ (սկիզբ), գայլը խաբում է նրան (հանգույց), փայտահատը փրկում է (ավարտ):' }
  },
  {
    id: 't2_m_02',
    topicId: 'tema2',
    difficulty: 'medio',
    questionEs: 'Analiza el siguiente texto:\n\n«Paseábase el rey moro\npor la ciudad de Granada,\ndesde las puertas de Elvira\nhasta las de Baza.\n¡Ay de mi Alhama!\nCartas le fueron venidas\nque Alhama era ganada...»\n\n¿A qué género literario pertenece este texto?',
    questionHy: 'Վերլուծիր հետևյալ տեքստը.\n\n«Paseábase el rey moro\npor la ciudad de Granada,\ndesde las puertas de Elvira\nhasta las de Baza.\n¡Ay de mi Alhama!\nCartas le fueron venidas\nque Alhama era ganada...»\n\nՈ՞ր գրական ժանրին է պատկանում այս տեքստը:',
    options: [
      { id: 'opt_1', textEs: 'Romance histórico (poema épico en octosílabos con rima asonante en versos pares)', textHy: 'Պատմական ռոմանս (էպիկական պոեմ ութավանկ տողերով և զույգ տողերի ասոնանս հանգով)' },
      { id: 'opt_2', textEs: 'Mito griego sobre dioses olímpicos', textHy: 'Հունական առասպել օլիմպիական աստվածների մասին' },
      { id: 'opt_3', textEs: 'Cuento de hadas infantil en prosa', textHy: 'Մանկական հեքիաթ արձակով' },
      { id: 'opt_4', textEs: 'Leyenda en prosa sobre castillos franceses', textHy: 'Ավանդազրույց արձակով ֆրանսիական ամրոցների մասին' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Es el "Romance del rey moro que perdió Alhama". Es un romance porque está compuesto en versos octosílabos (8 sílabas), con rima asonante en los versos pares (Granada, Baza, ganada...) y con versos impares sueltos.',
    explanationHy: 'Սա «Ալհաման կորցրած մավր թագավորի ռոմանսն» է: Ռոմանս է, որովհետև կազմված է ութավանկ տողերից (8 վանկ), զույգ տողերի ասոնանս հանգով (Granada, Baza, ganada) և ազատ կենտ տողերով:',
    rememberRuleEs: 'Octosílabos + rima asonante en versos pares = Romance.',
    rememberRuleHy: 'Ութավանկ տողեր + զույգ տողերի ասոնանս հանգ = Ռոմանս:',
    followUpExample: { es: 'Fontefrida, Fontefrida / Fontefrida y con amor...', hy: 'Ֆոնտեֆրիդա, Ֆոնտեֆրիդա / Ֆոնտեֆրիդա և սիրով...' }
  },
  {
    id: 't2_m_03',
    topicId: 'tema2',
    difficulty: 'medio',
    questionEs: 'Lee el siguiente fragmento:\n\n«En la ciudad de Sevilla, en una noche oscura de invierno, don Juan Tenorio desafió a la estatua de piedra del comendador don Gonzalo en el cementerio. Para su espanto, la fría figura de mármol inclinó la cabeza y aceptó cenar con él, arrastrándolo finalmente a los abismos».\n\n¿Por qué este fragmento es una LEYENDA?',
    questionHy: 'Կարդա հետևյալ հատվածը.\n\n«Սևիլիա քաղաքում ձմռան մութ մի գիշեր Դոն Ժուան Տենորիոն գերեզմանատանը մարտահրավեր նետեց կոմանդոր Դոն Գոնսալոյի քարե արձանին: Ի զարմանս նրա՝ մարմարյա սառը արձանը խոնարհեց գլուխը և ընդունեց նրա հետ ընթրելու հրավերը՝ ի վերջո նրան տանելով անդունդը»:\n\nԻնչո՞ւ է այս հատվածը ԱՎԱՆԴԱԶՐՈՒՅՑ (Leyenda):',
    options: [
      { id: 'opt_1', textEs: 'Porque parte de una ciudad histórica real (Sevilla) con un suceso sobrenatural inexplicable (la estatua que cobra vida)', textHy: 'Որովհետև հիմնվում է իրական պատմական քաղաքի վրա (Սևիլիա)՝ գերբնական անբացատրելի երևույթով (կենդանացող արձան)' },
      { id: 'opt_2', textEs: 'Porque explica el origen del universo y las galaxias', textHy: 'Որովհետև բացատրում է տիեզերքի և գալակտիկաների ծագումը' },
      { id: 'opt_3', textEs: 'Porque está escrito en versos octosílabos con estribillos populares', textHy: 'Որովհետև գրված է ութավանկ տողերով և ժողովրդական կրկներգերով' },
      { id: 'opt_4', textEs: 'Porque es una noticia real comprobada por científicos', textHy: 'Որովհետև գիտնականների կողմից ստուգված իրական լուր է' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Combina un entorno histórico real y concreto (Sevilla, caballeros nobles) con un elemento mágico o sobrenatural tradicional (la estatua que habla). Eso es la esencia misma de la leyenda.',
    explanationHy: 'Միավորում է իրական կոնկրետ պատմական միջավայրը (Սևիլիա, ազնվական ասպետներ) և ավանդական գերբնական հրաշքը (խոսող արձանը): Սա ավանդազրույցի բուն էությունն է:',
    rememberRuleEs: 'Leyenda = marco histórico real + prodigio o misterio tradicional.',
    rememberRuleHy: 'Ավանդազրույց = իրական պատմական միջավայր + ավանդական հրաշք կամ առեղծված:',
    followUpExample: { es: 'La leyenda de Bécquer sobre el monte de las Ánimas.', hy: 'Բեկերի ավանդազրույցը Հոգիների բլրի մասին:' }
  },
  {
    id: 't2_d_01',
    topicId: 'tema2',
    difficulty: 'dificil',
    questionEs: 'Lee este relato:\n\n«Para castigar la soberbia del rey Minos, Poseidón hizo que la reina concibiera un ser monstruoso con cabeza de toro y cuerpo de hombre: el Minotauro. El rey ordenó al genial arquitecto Dédalo construir en Creta un laberinto tan intrincado que nadie pudiera escapar de él, hasta que el héroe Teseo penetró con el hilo mágico de Ariadna para derrotar a la bestia».\n\n¿Por qué este relato se clasifica como MITO y no como cuento?',
    questionHy: 'Կարդա այս պատմությունը.\n\n«Մինոս թագավորի գոռոզությունը պատժելու համար Պոսեյդոնն այնպես արեց, որ թագուհին ծնի հրեշավոր էակ՝ ցուլի գլխով և մարդու մարմնով՝ Մինոտավրոսին: Թագավորը հանճարեղ ճարտարապետ Դեդալոսին կարգադրեց Կրետեում կառուցել այնպիսի բարդ լաբիրինթոս, որ ոչ ոք չկարողանա փախչել, մինչև հերոս Թեսևսը մտավ Արիադնայի կախարդական թելով՝ հրեշին հաղթելու համար»:\n\nԻնչո՞ւ է այս պատմությունը դասակարգվում որպես ԱՌԱՍՊԵԼ (Mito), ոչ թե հեքիաթ:',
    options: [
      { id: 'opt_1', textEs: 'Porque interviene el dios Poseidón, héroes semidivinos de la mitología clásica y pertenece al sistema sagrado de creencias de una civilización antigua', textHy: 'Որովհետև միջամտում է Պոսեյդոն աստվածը, դասական դիցաբանության կիսաստված հերոսները, և պատկանում է հին քաղաքակրթության սրբազան հավատալիքներին' },
      { id: 'opt_2', textEs: 'Porque está escrito en verso alejandrino con rima consonante', textHy: 'Որովհետև գրված է ալեքսանդրյան տողերով և կոնսոնանս հանգով' },
      { id: 'opt_3', textEs: 'Porque ocurrió en España durante el siglo XX', textHy: 'Որովհետև տեղի է ունեցել Իսպանիայում 20-րդ դարում' },
      { id: 'opt_4', textEs: 'Porque su autor firmó el texto ante la corte real', textHy: 'Որովհետև հեղինակը ստորագրել է տեքստն արքունիքի առջև' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Los mitos forman parte de la religión y la cosmovisión sagrada de pueblos antiguos (Grecia), con dioses (Poseidón) y seres sobrenaturales que dan sentido a sus ritos e historia.',
    explanationHy: 'Առասպելները կազմում են հին ժողովուրդների (Հունաստան) կրոնի և սրբազան աշխարհայացքի մաս՝ աստվածներով (Պոսեյդոն) և գերբնական էակներով, որոնք իմաստավորում են նրանց ծեսերը:',
    rememberRuleEs: 'Mito = dioses + héroes clásicos + relato sagrado tradicional.',
    rememberRuleHy: 'Առասպել = աստվածներ + դասական հերոսներ + սրբազան ավանդական պատմություն:',
    followUpExample: { es: 'El mito de Dédalo e Ícaro escapando del laberinto volando.', hy: 'Դեդալոսի և Իկարոսի առասպելը՝ թռչելով լաբիրինթոսից փախչելու մասին:' }
  },
  {
    id: 't2_d_02',
    topicId: 'tema2',
    difficulty: 'dificil',
    questionEs: 'Lee atentamente estos dos textos breves:\n\nTEXTO 1: «Había una vez en una aldea lejana una niña con caperuza roja que llevaba una cesta con pastelillos a su abuela enferma por el sendero del bosque...»\n\nTEXTO 2: «Deméter, diosa de la fecundidad de la tierra, al ver que su hija Perséfone fue raptada por Hades al reino de los muertos, maldijo los campos impidiendo que brotara la hierba, originando el crudo invierno...»\n\n¿Cuál es la diferencia fundamental entre ambos tipos de texto?',
    questionHy: 'Ուշադիր կարդա այս երկու կարճ տեքստերը.\n\nՏԵՔՍՏ 1. «Había una vez en una aldea lejana una niña con caperuza roja que llevaba una cesta con pastelillos a su abuela enferma por el sendero del bosque...»\n\nՏԵՔՍՏ 2. «Deméter, diosa de la fecundidad de la tierra, al ver que su hija Perséfone fue raptada por Hades al reino de los muertos, maldijo los campos impidiendo que brotara la hierba, originando el crudo invierno...»\n\nՈ՞րն է այս երկու տեքստերի հիմնական տարբերությունը:',
    options: [
      { id: 'opt_1', textEs: 'El Texto 1 es un Cuento (ficción breve cotidiana para entretener) y el Texto 2 es un Mito (relato sagrado con dioses para explicar el origen del invierno)', textHy: 'Տեքստ 1-ը Հեքիաթ է (կարճ կենցաղային հորինվածք՝ զվարճացնելու համար), իսկ Տեքստ 2-ը՝ Առասպել (սրբազան պատմություն աստվածներով՝ ձմռան ծագումը բացատրելու համար)' },
      { id: 'opt_2', textEs: 'El Texto 1 es un romance en verso y el Texto 2 es una noticia de prensa', textHy: 'Տեքստ 1-ը չափածո ռոմանս է, իսկ Տեքստ 2-ը՝ մամուլի լուր' },
      { id: 'opt_3', textEs: 'Ambos son exactamente el mismo género literario sin ninguna diferencia', textHy: 'Երկուսն էլ ճիշտ նույն գրական ժանրն են՝ առանց որևէ տարբերության' },
      { id: 'opt_4', textEs: 'El Texto 1 es literatura culta y el Texto 2 es un tratado de medicina', textHy: 'Տեքստ 1-ը մշակված գրականություն է, իսկ Տեքստ 2-ը՝ բժշկական տրակտատ' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'El cuento busca divertir o educar con personajes humanos/animales ficticios (la niña, el lobo); el mito busca explicar las leyes y estaciones del universo (el invierno y la primavera) a través de divinidades sagradas.',
    explanationHy: 'Հեքիաթը ձգտում է զվարճացնել կամ խրատել հորինված մարդկային կերպարներով. առասպելը ձգտում է բացատրել տիեզերքի օրենքներն ու եղանակները (ձմեռ և գարուն) սրբազան աստվածների միջոցով:',
    rememberRuleEs: 'Cuento = ficción breve y entretenimiento. Mito = dioses y explicación cósmica del mundo.',
    rememberRuleHy: 'Հեքիաթ = կարճ հորինվածք և զվարճանք: Առասպել = աստվածներ և աշխարհի տիեզերական բացատրություն:',
    followUpExample: { es: 'Cuento de los tres cerditos vs Mito del origen del fuego de Prometeo.', hy: 'Երեք խոզուկների հեքիաթը ընդդեմ Պրոմեթևսի կրակի ծագման առասպելի:' }
  },

  // ================= TEMA 3: LA LITERATURA CULTA =================
  {
    id: 't3_f_01',
    topicId: 'tema3',
    difficulty: 'facil',
    questionEs: '¿Cuál es la diferencia primordial de autor entre la literatura popular y la literatura culta?',
    questionHy: 'Ո՞րն է հեղինակի հիմնական տարբերությունը ժողովրդական և մշակված (culta) գրականության միջև:',
    options: [
      { id: 'opt_1', textEs: 'La popular es anónima; la culta la crea un autor conocido con nombre y apellidos', textHy: 'Ժողովրդականն անանուն է. մշակվածը ստեղծում է հայտնի անուն-ազգանունով հեղինակը' },
      { id: 'opt_2', textEs: 'La popular tiene diez autores y la culta ninguno', textHy: 'Ժողովրդականն ունի տասը հեղինակ, իսկ մշակվածը՝ ոչ մեկը' },
      { id: 'opt_3', textEs: 'La literatura culta la escriben los niños', textHy: 'Մշակված գրականությունը գրում են երեխաները' },
      { id: 'opt_4', textEs: 'No existe ninguna diferencia', textHy: 'Ոչ մի տարբերություն գոյություն չունի' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'En la literatura culta siempre se conoce al escritor que ha ideado y redactado la obra.',
    explanationHy: 'Մշակված գրականության մեջ միշտ հայտնի է գրողը, ով մտահղացել և շարադրել է գործը:',
    rememberRuleEs: 'Popular = Anónimo. Culta = Autor conocido.',
    rememberRuleHy: 'Ժողովրդական = Անանուն: Մշակված = Հայտնի հեղինակ:',
    followUpExample: { es: 'Cervantes escribió El Quijote (literatura culta).', hy: 'Սերվանտեսը գրել է «Դոն Կիխոտը» (մշակված գրականություն):' }
  },
  {
    id: 't3_m_01',
    topicId: 'tema3',
    difficulty: 'medio',
    questionEs: '¿Por qué las obras de la literatura culta no sufren variantes con el paso del tiempo?',
    questionHy: 'Ինչո՞ւ մշակված գրականության գործերը ժամանակի ընթացքում տարբերակներ (վարիանտներ) ձեռք չեն բերում:',
    options: [
      { id: 'opt_1', textEs: 'Porque su difusión es escrita (libros) y el texto original queda fijado', textHy: 'Որովհետև դրանց տարածումը գրավոր է (գրքերով), և բնօրինակ տեքստը մնում է անփոփոխ' },
      { id: 'opt_2', textEs: 'Porque nadie las lee nunca', textHy: 'Որովհետև ոչ ոք դրանք երբեք չի կարդում' },
      { id: 'opt_3', textEs: 'Porque no tienen palabras poéticas', textHy: 'Որովհետև պոետիկ բառեր չունեն' },
      { id: 'opt_4', textEs: 'Porque están prohibidas las reimpresiones', textHy: 'Որովհետև վերահրատարակումներն արգելված են' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Al escribirse e imprimirse, la obra culta conserva exactamente las palabras que eligió su autor.',
    explanationHy: 'Գրավոր և տպագիր լինելով՝ մշակված գործը ճշգրտորեն պահպանում է հեղինակի ընտրած բառերը:',
    rememberRuleEs: 'Transmisión escrita = texto fijo e inalterable.',
    rememberRuleHy: 'Գրավոր փոխանցում = անփոփոխ և կայուն տեքստ:',
    followUpExample: { es: 'Leemos el poema de Garcilaso tal como él lo escribió en el siglo XVI.', hy: 'Մենք կարդում ենք Գարսիլասոյի բանաստեղծությունն այնպես, ինչպես նա գրել է 16-րդ դարում:' }
  },

  // ================= TEMA 4: EL LENGUAJE LITERARIO =================
  {
    id: 't4_f_01',
    topicId: 'tema4',
    difficulty: 'facil',
    questionEs: '¿Cuál es la función del lenguaje que predomina en los textos literarios?',
    questionHy: 'Լեզվի ո՞ր գործառույթն է գերակշռում գրական տեքստերում:',
    options: [
      { id: 'opt_1', textEs: 'Función estética o poética (busca la belleza, el ritmo y la emoción)', textHy: 'Գեղագիտական կամ պոետիկ գործառույթ (ձգտում է գեղեցկության, ռիթմի և հույզի)' },
      { id: 'opt_2', textEs: 'Función referencial pura (dar datos técnicos objetivos)', textHy: 'Զուտ տեղեկատվական գործառույթ (օբյեկտիվ տեխնիկական տվյալներ)' },
      { id: 'opt_3', textEs: 'Función fática (comprobar el micrófono)', textHy: 'Ֆատիկ (խոսակցական կապի ստուգում)' },
      { id: 'opt_4', textEs: 'Función metalingüística estricta de diccionario', textHy: 'Բառարանային զուտ լեզվաբանական գործառույթ' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'La literatura no busca solo informar, sino deleitar y emocionar por medio de la belleza de las palabras.',
    explanationHy: 'Գրականությունը չի ձգտում միայն տեղեկացնել, այլ հիացնել և հուզել բառերի գեղեցկության միջոցով:',
    rememberRuleEs: 'Literatura = Función estética / poética del lenguaje.',
    rememberRuleHy: 'Գրականություն = Լեզվի գեղագիտական / պոետիկ գործառույթ:',
    followUpExample: { es: 'No dice "amaneció", sino "la aurora descorrió su velo rosado".', hy: 'Չի ասում «լուսացավ», այլ «արշալույսը բացեց իր վարդագույն քողը»:' }
  },
  {
    id: 't4_f_02',
    topicId: 'tema4',
    difficulty: 'facil',
    questionEs: '¿En qué se diferencian la rima consonante y la rima asonante?',
    questionHy: 'Ինչո՞վ են տարբերվում կոնսոնանս (consonante) և ասոնանս (asonante) հանգերը:',
    options: [
      { id: 'opt_1', textEs: 'En la consonante riman vocales y consonantes; en la asonante SOLO riman las vocales', textHy: 'Կոնսոնանսում հանգավորվում են ձայնավորներն ու բաղաձայնները. ասոնանսում՝ ՄԻԱՅՆ ձայնավորները' },
      { id: 'opt_2', textEs: 'En la asonante riman todas las consonantes y ninguna vocal', textHy: 'Ասոնանսում հանգավորվում են բոլոր բաղաձայնները և ոչ մի ձայնավոր' },
      { id: 'opt_3', textEs: 'La consonante solo existe en inglés', textHy: 'Կոնսոնանսը գոյություն ունի միայն անգլերենում' },
      { id: 'opt_4', textEs: 'Son exactamente lo mismo sin ninguna diferencia', textHy: 'Դրանք ճիշտ նույնն են՝ առանց որևէ տարբերության' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'En consonante la igualdad es total desde la vocal tónica (flor / amor); en asonante coinciden solo vocales (casa / plata -> a-a).',
    explanationHy: 'Կոնսոնանսում նույնությունն ամբողջական է (flor / amor). ասոնանսում համընկնում են միայն ձայնավորները (casa / plata -> a-a):',
    rememberRuleEs: 'Consonante = Vocales + Consonantes. Asonante = SOLO Vocales.',
    rememberRuleHy: 'Կոնսոնանս = Ձայնավորներ + Բաղաձայններ: Ասոնանս = ՄԻԱՅՆ Ձայնավորներ:',
    followUpExample: { es: 'cielo / suelo (consonante: -elo); barco / claro (asonante: a-o).', hy: 'cielo / suelo (կոնսոնանս՝ -elo); barco / claro (ասոնանս՝ a-o):' }
  },

  // ================= TEMA 5: FIGURAS FÓNICAS =================
  {
    id: 't5_f_01',
    topicId: 'tema5',
    difficulty: 'facil',
    questionEs: '¿Qué figura literaria consiste en repetir sonidos consonánticos semejantes en un verso?',
    questionHy: 'Ո՞ր գեղարվեստական միջոցն է կայանում տողում նման բաղաձայն հնչյունների կրկնության մեջ:',
    options: [
      { id: 'opt_1', textEs: 'Aliteración', textHy: 'Ալիտերացիա (Aliteración)' },
      { id: 'opt_2', textEs: 'Pleonasmo', textHy: 'Պլեոնազմ' },
      { id: 'opt_3', textEs: 'Metáfora pura', textHy: 'Զուտ փոխաբերություն' },
      { id: 'opt_4', textEs: 'Asíndeton', textHy: 'Ասինդետոն' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'La aliteración busca un efecto rítmico o acústico mediante la reiteración de fonemas iguales.',
    explanationHy: 'Ալիտերացիան ձգտում է ռիթմիկ կամ ձայնային էֆեկտի՝ նույն հնչյունների կրկնության միջոցով:',
    rememberRuleEs: 'Aliteración = repetición de sonidos (acústica).',
    rememberRuleHy: 'Ալիտերացիա = հնչյունների կրկնություն (ձայնային):',
    followUpExample: { es: 'En el silencio solo se escuchaba un susurro.', hy: 'Լռության մեջ լսվում էր միայն շշուկը:' }
  },
  {
    id: 't5_f_02',
    topicId: 'tema5',
    difficulty: 'facil',
    questionEs: '¿Qué figura representa la palabra "¡Miau!" para referirse al sonido de un gato?',
    questionHy: 'Ի՞նչ գեղարվեստական միջոց է «¡Miau!» բառը՝ կատվի ձայնն արտահայտելու համար:',
    options: [
      { id: 'opt_1', textEs: 'Onomatopeya (imitación de un sonido real)', textHy: 'Օնոմատոպեա (իրական ձայնի նմանակում)' },
      { id: 'opt_2', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն' },
      { id: 'opt_3', textEs: 'Anáfora', textHy: 'Անաֆորա' },
      { id: 'opt_4', textEs: 'Polisíndeton', textHy: 'Պոլիսինդետոն' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Una onomatopeya es la recreación fonética directa de un sonido de la naturaleza o de los animales.',
    explanationHy: 'Օնոմատոպեան (բնաձայնությունը) բնության կամ կենդանիների ձայնի ուղղակի հնչյունական վերարտադրությունն է:',
    rememberRuleEs: 'Onomatopeya = imitación de ruidos o sonidos reales.',
    rememberRuleHy: 'Օնոմատոպեա = իրական աղմուկի կամ ձայների նմանակում:',
    followUpExample: { es: 'El tic-tac del reloj en la sala.', hy: 'Սենյակում ժամացույցի տիկ-տակը:' }
  },
  {
    id: 't5_m_01',
    topicId: 'tema5',
    difficulty: 'medio',
    questionEs: 'En la frase "Quien parte y reparte se lleva la mejor parte", ¿qué figura se emplea con "parte / reparte"?',
    questionHy: '«Quien parte y reparte se lleva la mejor parte» նախադասության մեջ «parte / reparte» բառերով ո՞ր միջոցն է գործածված:',
    options: [
      { id: 'opt_1', textEs: 'Paronomasia (palabras de sonido casi idéntico y significado distinto)', textHy: 'Պարոնոմազիա (գրեթե նույնահունչ, բայց տարբեր իմաստով բառեր)' },
      { id: 'opt_2', textEs: 'Asíndeton', textHy: 'Ասինդետոն' },
      { id: 'opt_3', textEs: 'Pleonasmo', textHy: 'Պլեոնազմ' },
      { id: 'opt_4', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'La paronomasia juega con términos fonéticamente afines (parónimos) para crear ingenio.',
    explanationHy: 'Պարոնոմազիան խաղում է հնչյունորեն մոտ բառերի հետ (հարանուններ)՝ սրամտություն ստեղծելու համար:',
    rememberRuleEs: 'Paronomasia = juego con palabras que suenan parecido.',
    rememberRuleHy: 'Պարոնոմազիա = նմանահունչ բառերով բառախաղ:',
    followUpExample: { es: 'Vendado que me has vendido.', hy: 'Աչքակապ, որ ինձ վաճառեցիր:' }
  },

  // ================= TEMA 6: FIGURAS MORFOSINTÁCTICAS =================
  {
    id: 't6_f_01',
    topicId: 'tema6',
    difficulty: 'facil',
    questionEs: '¿Qué figura literaria consiste en alterar el orden lógico de las palabras en una oración?',
    questionHy: 'Ո՞ր գեղարվեստական միջոցն է կայանում նախադասության մեջ բառերի տրամաբանական կարգը փոխելու մեջ:',
    options: [
      { id: 'opt_1', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն (Hipérbaton)' },
      { id: 'opt_2', textEs: 'Aliteración', textHy: 'Ալիտերացիա' },
      { id: 'opt_3', textEs: 'Onomatopeya', textHy: 'Օնոմատոպեա' },
      { id: 'opt_4', textEs: 'Metáfora', textHy: 'Փոխաբերություն' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'El hipérbaton invierte la estructura habitual (Sujeto + Verbo + Objeto), muy usado en poesía.',
    explanationHy: 'Հիպերբատոնը շրջում է սովորական կառուցվածքը (Ենթակա + Բայ + Խնդիր), շատ տարածված է պոեզիայում:',
    rememberRuleEs: 'Hipérbaton = cambio o desorden del orden habitual de las palabras.',
    rememberRuleHy: 'Հիպերբատոն = բառերի սովորական շարադասության փոփոխություն:',
    followUpExample: { es: 'Volverán las oscuras golondrinas.', hy: 'Ետ կդառնան մութ ծիծեռնակները:' }
  },
  {
    id: 't6_f_02',
    topicId: 'tema6',
    difficulty: 'facil',
    questionEs: '¿Qué figura literaria consiste en repetir la misma palabra al principio de varios versos?',
    questionHy: 'Ո՞ր գեղարվեստական միջոցն է կայանում միևնույն բառը մի քանի տողերի սկզբում կրկնելու մեջ:',
    options: [
      { id: 'opt_1', textEs: 'Anáfora', textHy: 'Անաֆորա (Anáfora)' },
      { id: 'opt_2', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' },
      { id: 'opt_3', textEs: 'Asíndeton', textHy: 'Ասինդետոն' },
      { id: 'opt_4', textEs: 'Pleonasmo', textHy: 'Պլեոնազմ' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'La anáfora es la repetición constante en la posición inicial de dos o más líneas.',
    explanationHy: 'Անաֆորան անընդհատ կրկնությունն է երկու կամ ավելի տողերի սկզբնական դիրքում:',
    rememberRuleEs: 'Anáfora = repetición al principio de versos.',
    rememberRuleHy: 'Անաֆորա = կրկնություն տողերի սկզբում:',
    followUpExample: { es: 'Dile que venga, / dile que espere.', hy: 'Ասա՛ նրան, որ գա, / ասա՛ նրան, որ սպասի:' }
  },
  {
    id: 't6_f_03',
    topicId: 'tema6',
    difficulty: 'facil',
    questionEs: 'En: "Lo vi con mis propios ojos", ¿qué figura se manifiesta?',
    questionHy: '«Lo vi con mis propios ojos» (տեսա իմ սեփական աչքերով) նախադասության մեջ ո՞ր միջոցն է դրսևորվում:',
    options: [
      { id: 'opt_1', textEs: 'Pleonasmo (uso de palabras redundantes para reforzar)', textHy: 'Պլեոնազմ (ավելորդ կրկնվող բառերի գործածություն՝ միտքն ուժեղացնելու համար)' },
      { id: 'opt_2', textEs: 'Asíndeton', textHy: 'Ասինդետոն' },
      { id: 'opt_3', textEs: 'Polisíndeton', textHy: 'Պոլիսինդետոն' },
      { id: 'opt_4', textEs: 'Metáfora', textHy: 'Փոխաբերություն' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Ver se hace necesariamente con los ojos; añadir "con mis propios ojos" es un pleonasmo expresivo.',
    explanationHy: 'Տեսնելը պարտադիր աչքերով է լինում. «իմ սեփական աչքերով» ավելացնելն արտահայտիչ պլեոնազմ է:',
    rememberRuleEs: 'Pleonasmo = insistencia redundante con palabras innecesarias.',
    rememberRuleHy: 'Պլեոնազմ = ավելորդ բառերով շեշտադրված կրկնություն:',
    followUpExample: { es: 'Bajar abajo al sótano.', hy: 'Իջնել ներքև՝ նկուղ:' }
  },
  {
    id: 't6_m_01',
    topicId: 'tema6',
    difficulty: 'medio',
    questionEs: '¿Qué figura literaria consiste en empezar y terminar el mismo verso con la misma palabra exacta?',
    questionHy: 'Ո՞ր գեղարվեստական միջոցն է կայանում նույն տողը ճիշտ նույն բառով սկսելու և ավարտելու մեջ:',
    options: [
      { id: 'opt_1', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս (Epanadiplosis)' },
      { id: 'opt_2', textEs: 'Anáfora', textHy: 'Անաֆորա' },
      { id: 'opt_3', textEs: 'Polisíndeton', textHy: 'Պոլիսինդետոն' },
      { id: 'opt_4', textEs: 'Paronomasia', textHy: 'Պարոնոմազիա' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'La epanadiplosis forma un marco circular: palabra al inicio + palabra idéntica al final.',
    explanationHy: 'Էպանադիպլոզիսը կազմում է շրջանաձև շրջանակ՝ նույն բառը սկզբում և նույնը վերջում:',
    rememberRuleEs: 'Epanadiplosis = Principio y final del MISMO verso iguales.',
    rememberRuleHy: 'Էպանադիպլոզիս = ՆՈՒՅՆ տողի սկիզբը և վերջը նույնական են:',
    followUpExample: { es: 'Verde que te quiero verde.', hy: 'Կանաչ, քեզ կանաչ եմ սիրում, կանաչ:' }
  },
  {
    id: 't6_m_02',
    topicId: 'tema6',
    difficulty: 'medio',
    questionEs: '¿Qué figura aparece en: "Y canta, y ríe, y salta, y llora de emoción"?',
    questionHy: 'Ո՞ր գեղարվեստական միջոցն է՝ «Y canta, y ríe, y salta, y llora de emoción»:',
    options: [
      { id: 'opt_1', textEs: 'Polisíndeton (repite muchas veces la conjunción "y")', textHy: 'Պոլիսինդետոն (բազմիցս կրկնում է «y» շաղկապը)' },
      { id: 'opt_2', textEs: 'Asíndeton', textHy: 'Ասինդետոն' },
      { id: 'opt_3', textEs: 'Aliteración', textHy: 'Ալիտերացիա' },
      { id: 'opt_4', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'La conjunción "y" se reitera antes de cada verbo creando un ritmo deliberadamente acumulativo.',
    explanationHy: '«Y» շաղկապը կրկնվում է յուրաքանչյուր բայից առաջ՝ ստեղծելով կուտակային ռիթմ:',
    rememberRuleEs: 'Polisíndeton = repetición intencionada de muchas conjunciones.',
    rememberRuleHy: 'Պոլիսինդետոն = բազմաթիվ շաղկապների նպատակային կրկնություն:',
    followUpExample: { es: 'Ni come, ni duerme, ni calla.', hy: 'Ո՛չ ուտում է, ո՛չ քնում, ո՛չ լռում:' }
  },

  // ================= TEMA 7: FIGURAS SEMÁNTICAS (METÁFORA) =================
  {
    id: 't7_f_01',
    topicId: 'tema7',
    difficulty: 'facil',
    questionEs: 'En la metáfora "Tus ojos son estrellas", ¿cuál es el Término Real (A)?',
    questionHy: '«Tus ojos son estrellas» փոխաբերության մեջ ո՞րն է Իրական Եզրը (Término Real A):',
    options: [
      { id: 'opt_1', textEs: 'Los ojos (lo que realmente existe en la persona)', textHy: 'Աչքերը (այն, ինչ իրականում գոյություն ունի մարդու մոտ)' },
      { id: 'opt_2', textEs: 'Las estrellas del espacio', textHy: 'Տիեզերքի աստղերը' },
      { id: 'opt_3', textEs: 'El verbo son', textHy: '«Son» բայը' },
      { id: 'opt_4', textEs: 'La noche oscura', textHy: 'Մութ գիշերը' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'El término real (A) es el objeto del mundo real que se quiere describir: los ojos.',
    explanationHy: 'Իրական եզրը (A) իրական աշխարհի առարկան է, որը ցանկանում են նկարագրել՝ աչքերը:',
    rememberRuleEs: 'Término Real (A) = la realidad existente de la que se habla.',
    rememberRuleHy: 'Իրական եզր (A) = գոյություն ունեցող իրականությունը, որի մասին խոսվում է:',
    followUpExample: { es: 'En "El sol es una moneda de oro", el término real es el sol.', hy: '«Արևը ոսկե դրամ է» նախադասության մեջ իրական եզրն արևն է:' }
  },
  {
    id: 't7_f_02',
    topicId: 'tema7',
    difficulty: 'facil',
    questionEs: 'En la metáfora "Tus ojos son estrellas", ¿cuál es el Término Imaginario (B)?',
    questionHy: '«Tus ojos son estrellas» փոխաբերության մեջ ո՞րն է Երևակայական Եզրը (Término Imaginario B):',
    options: [
      { id: 'opt_1', textEs: 'Las estrellas (la imagen poética con la que se compara)', textHy: 'Աստղերը (պոետիկ պատկերը, որի հետ նույնացվում է)' },
      { id: 'opt_2', textEs: 'Los ojos', textHy: 'Աչքերը' },
      { id: 'opt_3', textEs: 'La persona que mira', textHy: 'Նայող անձը' },
      { id: 'opt_4', textEs: 'El color negro', textHy: 'Սև գույնը' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'El término imaginario (B) es el elemento evocado por su semejanza estética: las estrellas.',
    explanationHy: 'Երևակայական եզրը (B) գեղագիտական նմանությամբ առաջ բերված տարրն է՝ աստղերը:',
    rememberRuleEs: 'Término Imaginario (B) = la imagen poética creada por el autor.',
    rememberRuleHy: 'Երևակայական եզր (B) = հեղինակի ստեղծած պոետիկ պատկերը:',
    followUpExample: { es: 'En "Tus labios son rubíes", rubíes es el término imaginario.', hy: '«Շուրթերդ սուտակներ են» արտահայտության մեջ սուտակները երևակայական եզրն է:' }
  },
  {
    id: 't7_m_01',
    topicId: 'tema7',
    difficulty: 'medio',
    questionEs: '¿Qué estructura metafórica presenta la frase: "Las perlas de su boca brillaban con la luz"?',
    questionHy: 'Ի՞նչ փոխաբերական կառուցվածք ունի նախադասությունը՝ «Las perlas de su boca brillaban con la luz»:',
    options: [
      { id: 'opt_1', textEs: 'Estructura "B de A" (término imaginario [perlas] + "de" + término real [boca/dientes])', textHy: '«B de A» կառուցվածք (երևակայական [մարգարիտներ] + «de» + իրական [բերան/ատամներ])' },
      { id: 'opt_2', textEs: 'Estructura "A es B"', textHy: '«A es B» կառուցվածք' },
      { id: 'opt_3', textEs: 'Metáfora pura sin término real', textHy: 'Զուտ փոխաբերություն առանց իրական եզրի' },
      { id: 'opt_4', textEs: 'Comparación con el nexo "como"', textHy: 'Համեմատություն «como» շաղկապով' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Conecta el término figurado (perlas) al real (su boca) mediante la preposición "de".',
    explanationHy: 'Փոխաբերական եզրը (մարգարիտներ) միացնում է իրականին (նրա բերանը) «de» նախդիրի միջոցով:',
    rememberRuleEs: 'B de A = Imaginario + de + Real.',
    rememberRuleHy: 'B de A = Երևակայական + de + Իրական:',
    followUpExample: { es: 'El fuego de su pasión (fuego [B] de pasión [A]).', hy: 'Նրա կրքի կրակը (կրակ [B] կրքի [A]):' }
  },
  {
    id: 't7_d_01',
    topicId: 'tema7',
    difficulty: 'dificil',
    questionEs: '¿Qué ocurre en una METÁFORA PURA (estructura "B en lugar de A")?',
    questionHy: 'Ի՞նչ է տեղի ունենում ԶՈՒՏ ՓՈԽԱԲԵՐՈՒԹՅԱՆ մեջ («B en lugar de A» կառուցվածք):',
    options: [
      { id: 'opt_1', textEs: 'El término real (A) se omite por completo y solo aparece el imaginario (B)', textHy: 'Իրական եզրը (A) լիովին բաց է թողնվում, և երևում է միայն երևակայականը (B)' },
      { id: 'opt_2', textEs: 'Aparecen los dos términos unidos por el verbo parecer', textHy: 'Երկու եզրերն էլ հայտնվում են՝ միացված «թվալ» բայով' },
      { id: 'opt_3', textEs: 'El poema no tiene ningún sentido literario', textHy: 'Բանաստեղծությունը չունի որևէ գրական իմաստ' },
      { id: 'opt_4', textEs: 'Se suprimen todas las vocales de la estrofa', textHy: 'Տնից հանվում են բոլոր ձայնավորները' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'En la metáfora pura el lector debe sobreentender el término real (ej. "el farol de la noche" para referirse a la luna).',
    explanationHy: 'Զուտ փոխաբերության մեջ ընթերցողն ինքը պետք է կռահի իրական եզրը (օր. «գիշերվա լապտերը»՝ նկատի ունենալով լուսինը):',
    rememberRuleEs: 'Metáfora pura = solo B (el término real A está ausente y se deduce).',
    rememberRuleHy: 'Զուտ փոխաբերություն = միայն B (իրական եզր A-ն բացակայում է և կռահվում է):',
    followUpExample: { es: 'Las perlas asomaron tras sus labios rojos. (perlas = dientes)', hy: 'Մարգարիտները երևացին կարմիր շուրթերի հետևից (մարգարիտներ = ատամներ):' }
  },
  // ================= ADICIONALES: TEMA 1 =================
  {
    id: 't1_m_03',
    topicId: 'tema1',
    difficulty: 'medio',
    questionEs: '¿Qué función cumplían las fórmulas repetitivas en los cantares y romances que recitaban los juglares?',
    questionHy: 'Ի՞նչ դեր ունեին կրկնվող բանաձևերը այն երգերում և ռոմանսներում, որ արտասանում էին գուսանները:',
    options: [
      { id: 'opt_1', textEs: 'Ayudar al juglar a recordar el texto y dar tiempo para improvisar el siguiente pasaje', textHy: 'Օգնել ժուգլյարին հիշել տեքստը և ժամանակ շահել հաջորդ հատվածը հորինելու համար' },
      { id: 'opt_2', textEs: 'Confundir a los espectadores del pueblo', textHy: 'Շփոթեցնել ժողովրդական հանդիսատեսին' },
      { id: 'opt_3', textEs: 'Cobrar el doble de monedas en la plaza', textHy: 'Հրապարակում կրկնակի շատ մետաղադրամ վաստակել' },
      { id: 'opt_4', textEs: 'Demostrar que sabían hablar en latín', textHy: 'Ապացուցել, որ գիտեին խոսել լատիներենով' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'En la literatura oral, las fórmulas fijas eran apoyos mnemotécnicos esenciales para la memoria del recitador.',
    explanationHy: 'Բանավոր գրականության մեջ կայուն բանաձևերը հիշողության համար էական հենարաններ էին:',
    rememberRuleEs: 'Fórmulas fijas = apoyo para la memoria oral del juglar.',
    rememberRuleHy: 'Կայուն բանաձևեր = հենարան ժուգլյարի բանավոր հիշողության համար:',
    followUpExample: { es: 'Fórmulas como "el que en buena hora nació".', hy: '«Բարի ժամին ծնվածը» բանաձևը:' }
  },
  // ================= ADICIONALES: TEMA 2 =================
  {
    id: 't2_d_02',
    topicId: 'tema2',
    difficulty: 'dificil',
    questionEs: 'En los versos del romance: "cuando los trigos encañan / y están los campos en flor", ¿qué tipo de rima presentan los versos pares?',
    questionHy: 'Ռոմանսի «cuando los trigos encañan / y están los campos en flor» տողերում զույգ տողերն ի՞նչ հանգ ունեն:',
    options: [
      { id: 'opt_1', textEs: 'Asonante (solo coinciden las vocales a partir de la última acentuada)', textHy: 'Ասոնանս (համընկնում են միայն ձայնավորները վերջին շեշտվածից սկսած)' },
      { id: 'opt_2', textEs: 'Consonante perfecta de tres sílabas', textHy: 'Կատարյալ կոնսոնանս երեք վանկերով' },
      { id: 'opt_3', textEs: 'Rima blanca o versos sueltos sin sonido en común', textHy: 'Ազատ տողեր առանց որևէ ընդհանուր հնչյունի' },
      { id: 'opt_4', textEs: 'Rima esdrújula en cuatrisílabo', textHy: 'Քառավանկ շեշտով հանգ' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Los romances castellanos se caracterizan siempre por la rima asonante en los versos pares.',
    explanationHy: 'Իսպանական ռոմանսները միշտ բնորոշվում են զույգ տողերի ասոնանս հանգով:',
    rememberRuleEs: 'Pares riman en asonante; impares quedan libres.',
    rememberRuleHy: 'Զույգերը հանգավորվում են ասոնանսով, կենտերն ազատ են:',
    followUpExample: { es: 'calor / flor (en o).', hy: 'calor / flor (-o հնչյունով):' }
  },
  // ================= ADICIONALES: TEMA 3 =================
  {
    id: 't3_d_02',
    topicId: 'tema3',
    difficulty: 'dificil',
    questionEs: '¿Qué son los "cultismos" que abundan en las obras de la literatura culta?',
    questionHy: 'Ի՞նչ են «կուլտիզմները» (cultismos), որոնք առատ են մշակված գրականության գործերում:',
    options: [
      { id: 'opt_1', textEs: 'Palabras tomadas directamente del latín o griego clásico que conservan casi intacta su forma original', textHy: 'Բառեր՝ վերցված անմիջապես լատիներենից կամ հունարենից, որոնք պահպանում են իրենց ձևը' },
      { id: 'opt_2', textEs: 'Insultos que decían los soldados en las tabernas', textHy: 'Վիրավորական խոսքեր, որ ասում էին զինվորները' },
      { id: 'opt_3', textEs: 'Frases inventadas por los niños en el recreo', textHy: 'Դասամիջոցին երեխաների հորինած արտահայտությունները' },
      { id: 'opt_4', textEs: 'Onomatopeyas de animales del campo', textHy: 'Դաշտային կենդանիների բնաձայնություններ' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Los escritores cultos introducían cultismos para enriquecer el idioma con términos nobles y sonoros del latín.',
    explanationHy: 'Մշակված գրողները կուլտիզմներ էին մուծում՝ լեզուն լատիներենի ազնիվ բառերով հարստացնելու համար:',
    rememberRuleEs: 'Cultismos = palabras doctas procedentes del latín sin evolución popular.',
    rememberRuleHy: 'Կուլտիզմներ = լատիներենից փոխառված գիտական, մշակված բառեր:',
    followUpExample: { es: 'Palabras como "aurora", "fulgor", "océano".', hy: '«Aurora», «fulgor» բառերը:' }
  },
  // ================= ADICIONALES: TEMA 4 =================
  {
    id: 't4_m_02',
    topicId: 'tema4',
    difficulty: 'medio',
    questionEs: '¿Qué es la SINALEFA en el cómputo silábico de los versos?',
    questionHy: 'Ի՞նչ է ՍԻՆԱԼԵՖԱՆ (sinalefa) չափածոյի վանկերի հաշվարկման ժամանակ:',
    options: [
      { id: 'opt_1', textEs: 'La unión en una sola sílaba métrica de la vocal final de una palabra con la vocal inicial de la siguiente', textHy: 'Մեկ բառի վերջին ձայնավորի և հաջորդ բառի սկզբնական ձայնավորի միացումը մեկ վանկի մեջ' },
      { id: 'opt_2', textEs: 'La separación obligatoria de todas las consonantes', textHy: 'Բոլոր բաղաձայնների պարտադիր բաժանումը' },
      { id: 'opt_3', textEs: 'La rima entre la primera y la última palabra', textHy: 'Առաջին և վերջին բառերի հանգավորումը' },
      { id: 'opt_4', textEs: 'Un tipo de cuento medieval anónimo', textHy: 'Անանուն միջնադարյան հեքիաթի տեսակ' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'En español, "la_ola" o "vino_a" se pronuncian y cuentan métricamente en una sola sílaba por sinalefa.',
    explanationHy: 'Իսպաներենում «la_ola» կամ «vino_a» ձայնավորները սինալեֆայի շնորհիվ հաշվվում են որպես մեկ վանկ:',
    rememberRuleEs: 'Sinalefa = unión métrica de vocal final + vocal inicial siguiente.',
    rememberRuleHy: 'Սինալեֆա = վերջին ձայնավորի և հաջորդի սկզբի միավորում մեկ վանկում:',
    followUpExample: { es: 'De_oro -> cuenta como 1 sílaba: deo-ro.', hy: 'De_oro -> հաշվվում է որպես 1 վանկ:' }
  },
  // ================= ADICIONALES: TEMA 5 =================
  {
    id: 't5_d_02',
    topicId: 'tema5',
    difficulty: 'dificil',
    questionEs: 'En los versos de Góngora: "Un hombre a una nariz pegado, / érase una nariz sayón y escriba", ¿qué figura fónica paronomástica o juego fonético se percibe?',
    questionHy: 'Գոնգորայի տողերում ո՞ր հնչյունային պատկերավորումն է դրսևորվում:',
    options: [
      { id: 'opt_1', textEs: 'Paronomasia y juego burlesco de palabras fonéticamente semejantes', textHy: 'Պարոնոմազիա և նմանահունչ բառերի հեգնական բառախաղ' },
      { id: 'opt_2', textEs: 'Onomatopeya de relinchos de caballo', textHy: 'Ձիու խրխնջոցի բնաձայնություն' },
      { id: 'opt_3', textEs: 'Rima consonante en prosa continua', textHy: 'Կոնսոնանս հանգ անընդմեջ արձակում' },
      { id: 'opt_4', textEs: 'Asíndeton sin comas', textHy: 'Ասինդետոն առանց ստորակետների' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Góngora juega con las semejanzas fonéticas para burlarse satíricamente de su rival Quevedo.',
    explanationHy: 'Գոնգորան խաղում է հնչյունական նմանությունների հետ՝ երգիծելով իր մրցակից Կևեդոյին:',
    rememberRuleEs: 'Juegos de palabras con fonemas parecidos = Paronomasia.',
    rememberRuleHy: 'Նման հնչյուններով բառախաղեր = Պարոնոմազիա:',
    followUpExample: { es: 'Cosas de casas y casas de cosas.', hy: 'Տների իրեր և իրերի տներ:' }
  },
  // ================= ADICIONALES: TEMA 6 =================
  {
    id: 't6_d_02',
    topicId: 'tema6',
    difficulty: 'dificil',
    questionEs: 'En el Cantar de mio Cid: "De los sos ojos tan fuertemente llorando", ¿qué figura morfosintáctica se observa al añadir "de los ojos" al acto de llorar?',
    questionHy: '«Սիդի երգում» լաց լինելուն «աչքերից» ավելացնելը ո՞ր գեղարվեստական միջոցն է:',
    options: [
      { id: 'opt_1', textEs: 'Pleonasmo épico (palabras redundantes para intensificar el dolor del Cid)', textHy: 'Էպիկական պլեոնազմ (ավելորդ բառեր՝ Սիդի ցավն ուժեղացնելու համար)' },
      { id: 'opt_2', textEs: 'Asíndeton sin nexos', textHy: 'Ասինդետոն առանց կապերի' },
      { id: 'opt_3', textEs: 'Epanadiplosis perfecta', textHy: 'Կատարյալ էպանադիպլոզիս' },
      { id: 'opt_4', textEs: 'Polisíndeton con muchas conjunciones', textHy: 'Պոլիսինդետոն բազմաթիվ շաղկապներով' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Llorar se hace obligatoriamente por los ojos; reiterarlo es un pleonasmo propio de la poesía épica.',
    explanationHy: 'Լացը պարտադիր աչքերով է լինում. դա կրկնելը էպիկական պոեզիային բնորոշ պլեոնազմ է:',
    rememberRuleEs: 'Pleonasmo = redundancia voluntaria y expresiva.',
    rememberRuleHy: 'Պլեոնազմ = կամավոր և արտահայտիչ ավելաբանություն:',
    followUpExample: { es: 'Lo vio con sus propios ojos.', hy: 'Իր սեփական աչքերով տեսավ:' }
  },
  // ================= ADICIONALES: TEMA 7 =================
  {
    id: 't7_d_03',
    topicId: 'tema7',
    difficulty: 'dificil',
    questionEs: 'En el verso "Nuestras vidas son los ríos que van a dar en la mar", ¿cuál es la relación de semejanza entre las vidas y los ríos?',
    questionHy: '«Մեր կյանքերը գետեր են, որ թափվում են ծովը» տողում ո՞րն է նմանության կապը կյանքերի և գետերի միջև:',
    options: [
      { id: 'opt_1', textEs: 'Ambos fluyen continuamente sin detenerse hasta llegar a su final (la muerte / el mar)', textHy: 'Երկուսն էլ անդադար հոսում են առանց կանգնելու մինչև իրենց ավարտը (մահը / ծովը)' },
      { id: 'opt_2', textEs: 'Que las personas están hechas de agua salada', textHy: 'Որ մարդիկ կազմված են աղի ջրից' },
      { id: 'opt_3', textEs: 'Que los ríos tienen peces y las vidas no', textHy: 'Որ գետերն ունեն ձկներ, իսկ կյանքը՝ ոչ' },
      { id: 'opt_4', textEs: 'No guardan ninguna semejanza', textHy: 'Ոչ մի նմանություն չունեն' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Jorge Manrique compara el curso constante e irreversible del agua con el paso temporal de la vida humana.',
    explanationHy: 'Խորխե Մանրիկեն ջրի անշրջելի հոսքը համեմատում է մարդկային կյանքի անցողիկության հետ:',
    rememberRuleEs: 'Metáfora: vida = río; muerte = mar.',
    rememberRuleHy: 'Փոխաբերություն՝ կյանք = գետ, մահ = ծով:',
    followUpExample: { es: 'El mar es el morir.', hy: 'Ծովը հենց մահն է:' }
  }
];
