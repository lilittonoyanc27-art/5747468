import { Question } from './types.ts';

export interface GameDefinitionItem {
  id: string;
  termEs: string;
  termHy: string;
  correctDefEs: string;
  correctDefHy: string;
  wrongDefs: { es: string; hy: string }[];
}

export interface GameErrorItem {
  id: string;
  statementEs: string;
  statementHy: string;
  topic: string;
  correctCorrectionEs: string;
  correctCorrectionHy: string;
  wrongOptions: { es: string; hy: string }[];
  explanationEs: string;
  explanationHy: string;
}

export const GAME_FIGURES_QUESTIONS: Question[] = [
  {
    id: 'gfig_1',
    topicId: 'tema5',
    difficulty: 'facil',
    questionEs: '¿Qué figura literaria hay en: "El viento susurraba suavemente entre las sombras"?',
    questionHy: 'Ո՞ր գեղարվեստական միջոցն է՝ «El viento susurraba suavemente entre las sombras»:',
    options: [
      { id: 'opt_1', textEs: 'Aliteración (repetición del sonido /s/)', textHy: 'Ալիտերացիա (/s/ հնչյունի կրկնություն)' },
      { id: 'opt_2', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն' },
      { id: 'opt_3', textEs: 'Asíndeton', textHy: 'Ասինդետոն' },
      { id: 'opt_4', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Repite de forma insistente el sonido /s/ para evocar el sonido del viento.',
    explanationHy: 'Համառորեն կրկնում է /s/ հնչյունը՝ քամու ձայնը վերարտադրելու համար:',
    rememberRuleEs: 'Aliteración = repetición de sonidos consonánticos iguales.',
    rememberRuleHy: 'Ալիտերացիա = նույն բաղաձայն հնչյունների կրկնություն:',
    followUpExample: { es: 'Silba el suave susurro.', hy: 'Սուլում է մեղմ շշուկը:' }
  },
  {
    id: 'gfig_2',
    topicId: 'tema5',
    difficulty: 'facil',
    questionEs: '¿Qué figura aparece en: "El cristal de la ventana hizo ¡crac! con la piedra"?',
    questionHy: 'Ո՞ր պատկերավորման միջոցն է՝ «El cristal de la ventana hizo ¡crac! con la piedra»:',
    options: [
      { id: 'opt_1', textEs: 'Onomatopeya (imita el ruido del cristal roto con "¡crac!")', textHy: 'Օնոմատոպեա (կոտրվող ապակու ձայնն է նմանակում՝ «¡crac!»)' },
      { id: 'opt_2', textEs: 'Metáfora', textHy: 'Փոխաբերություն' },
      { id: 'opt_3', textEs: 'Pleonasmo', textHy: 'Պլեոնազմ' },
      { id: 'opt_4', textEs: 'Paronomasia', textHy: 'Պարոնոմազիա' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: '"¡Crac!" es una onomatopeya que reproduce el sonido del cristal al quebrarse.',
    explanationHy: '«¡Crac!»-ը բնաձայնություն է, որը նմանակում է ապակու ջարդվելու ձայնը:',
    rememberRuleEs: 'Onomatopeya = palabra que imita un sonido real.',
    rememberRuleHy: 'Օնոմատոպեա = բառ, որը նմանակում է իրական ձայնը:',
    followUpExample: { es: 'La puerta hizo ¡pum!', hy: 'Դուռը «դըմփ» արեց:' }
  },
  {
    id: 'gfig_3',
    topicId: 'tema6',
    difficulty: 'medio',
    questionEs: '¿Qué figura hay en: "Del salón en el ángulo oscuro, de su dueña tal vez olvidada, veíase el arpa"?',
    questionHy: 'Ո՞ր գեղարվեստական միջոցն է՝ «Del salón en el ángulo oscuro, de su dueña tal vez olvidada, veíase el arpa»:',
    options: [
      { id: 'opt_1', textEs: 'Hipérbaton (desordena la frase: "El arpa veíase en el ángulo...")', textHy: 'Հիպերբատոն (փոխում է կարգը. «El arpa veíase en el ángulo...»)' },
      { id: 'opt_2', textEs: 'Polisíndeton', textHy: 'Պոլիսինդետոն' },
      { id: 'opt_3', textEs: 'Onomatopeya', textHy: 'Օնոմատոպեա' },
      { id: 'opt_4', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Bécquer altera el orden habitual (Sujeto + Verbo + Complementos) colocando el complemento al principio.',
    explanationHy: 'Բեկերը խախտում է սովորական կարգը՝ լրացումը դնելով ամենասկզբում:',
    rememberRuleEs: 'Hipérbaton = cambio del orden lógico de las palabras.',
    rememberRuleHy: 'Հիպերբատոն = բառերի տրամաբանական կարգի փոփոխություն:',
    followUpExample: { es: 'Cansado vengo a mi hogar.', hy: 'Հոգնած եմ գալիս իմ տուն:' }
  },
  {
    id: 'gfig_4',
    topicId: 'tema6',
    difficulty: 'medio',
    questionEs: '¿Qué figura aparece en: "Entró adentro del castillo sin mirar atrás"?',
    questionHy: 'Ո՞ր պատկերավորման միջոցն է՝ «Entró adentro del castillo sin mirar atrás»:',
    options: [
      { id: 'opt_1', textEs: 'Pleonasmo ("entró adentro" es redundante)', textHy: 'Պլեոնազմ («entró adentro»-ն ավելորդ կրկնություն է)' },
      { id: 'opt_2', textEs: 'Asíndeton', textHy: 'Ասինդետոն' },
      { id: 'opt_3', textEs: 'Aliteración', textHy: 'Ալիտերացիա' },
      { id: 'opt_4', textEs: 'Paronomasia', textHy: 'Պարոնոմազիա' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Entrar ya significa ir hacia adentro; "adentro" es una redundancia enfática (pleonasmo).',
    explanationHy: 'Մտնելն արդեն նշանակում է ներս գնալ. «adentro»-ն ավելորդ կրկնություն է (պլեոնազմ):',
    rememberRuleEs: 'Pleonasmo = añadir palabras redundantes innecesarias.',
    rememberRuleHy: 'Պլեոնազմ = ավելորդ կրկնվող բառերի ավելացում:',
    followUpExample: { es: 'Subió arriba por la escalera.', hy: 'Աստիճաններով վերև բարձրացավ:' }
  },
  {
    id: 'gfig_5',
    topicId: 'tema7',
    difficulty: 'facil',
    questionEs: '¿Qué figura aparece en: "La luna es una moneda de plata en el cielo"?',
    questionHy: 'Ո՞ր պատկերավորման միջոցն է՝ «La luna es una moneda de plata en el cielo»:',
    options: [
      { id: 'opt_1', textEs: 'Metáfora (A es B: Luna = moneda de plata)', textHy: 'Փոխաբերություն (A es B. Լուսին = արծաթե դրամ)' },
      { id: 'opt_2', textEs: 'Anáfora', textHy: 'Անաֆորա' },
      { id: 'opt_3', textEs: 'Polisíndeton', textHy: 'Պոլիսինդետոն' },
      { id: 'opt_4', textEs: 'Paronomasia', textHy: 'Պարոնոմազիա' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Identifica la luna (término real) con una moneda de plata (término imaginario) mediante el verbo ser.',
    explanationHy: 'Լուսինը (իրական եզր) նույնացնում է արծաթե դրամի հետ (երևակայական) «լինել» բայի միջոցով:',
    rememberRuleEs: 'Metáfora = identificar término real con término imaginario.',
    rememberRuleHy: 'Փոխաբերություն = իրական եզրի նույնացում երևակայական եզրի հետ:',
    followUpExample: { es: 'El sol es un globo de fuego.', hy: 'Արևը կրակե գունդ է:' }
  }
];

export const GAME_DEFINITIONS_DATA: GameDefinitionItem[] = [
  {
    id: 'def_anafora',
    termEs: 'Anáfora',
    termHy: 'Անաֆորա',
    correctDefEs: 'Repetición de una o más palabras al comienzo de varios versos o frases consecutivas.',
    correctDefHy: 'Մեկ կամ մի քանի բառերի կրկնությունն է մի քանի հաջորդական տողերի կամ նախադասությունների սկզբում:',
    wrongDefs: [
      {
        es: 'Repetición de la misma palabra al principio y al final de un solo verso.',
        hy: 'Միևնույն բառի կրկնությունը մեկ տողի սկզբում և վերջում:'
      },
      {
        es: 'Supresión intencionada de todas las conjunciones para dar rapidez.',
        hy: 'Շաղկապների նպատակային բացթողումը՝ արագություն տալու համար:'
      },
      {
        es: 'Alteración del orden sintáctico habitual de la oración.',
        hy: 'Նախադասության մեջ բառերի սովորական շարադասության խախտումը:'
      }
    ]
  },
  {
    id: 'def_epanadiplosis',
    termEs: 'Epanadiplosis',
    termHy: 'Էպանադիպլոզիս',
    correctDefEs: 'Comenzar y terminar el mismo verso o enunciado con la misma palabra exacta.',
    correctDefHy: 'Միևնույն տողը կամ նախադասությունը ճիշտ նույն բառով սկսելն ու ավարտելը:',
    wrongDefs: [
      {
        es: 'Repetición de conjunciones como "y" o "ni" para dar lentitud.',
        hy: '«Y» կամ «ni» շաղկապների կրկնությունը՝ դանդաղություն տալու համար:'
      },
      {
        es: 'Uso de palabras redundantes como "subir arriba".',
        hy: 'Ավելորդ բառերի օգտագործումը, ինչպես օրինակ «վերև բարձրանալ»:'
      },
      {
        es: 'Imitación lingüística del sonido de un animal o ruido de la naturaleza.',
        hy: 'Կենդանու կամ բնական ձայնի լեզվական նմանակումը:'
      }
    ]
  },
  {
    id: 'def_asindeton',
    termEs: 'Asíndeton',
    termHy: 'Ասինդետոն',
    correctDefEs: 'Omisión de las conjunciones ("y", "e", "ni") entre palabras o frases, separadas solo por comas.',
    correctDefHy: 'Բառերի միջև շաղկապների («y», «ու») բացթողումը՝ դրանք անջատելով միայն ստորակետներով:',
    wrongDefs: [
      {
        es: 'Repetición continua y abundante de conjunciones en la oración.',
        hy: 'Նախադասության մեջ շաղկապների շարունակական և առատ կրկնությունը:'
      },
      {
        es: 'Identificación de un término real con uno imaginario.',
        hy: 'Իրական եզրի նույնացումը երևակայականի հետ:'
      },
      {
        es: 'Poema en octosílabos con rima asonante en los pares.',
        hy: 'Ութավանկ տողերով պոեմ՝ զույգ տողերի ասոնանս հանգով:'
      }
    ]
  },
  {
    id: 'def_polisindeton',
    termEs: 'Polisíndeton',
    termHy: 'Պոլիսինդետոն',
    correctDefEs: 'Repetición intencionada y abundante de conjunciones ("y", "ni") para frenar el ritmo y dar solemnidad.',
    correctDefHy: 'Շաղկապների («y», «ni») նպատակային և առատ կրկնությունը՝ ռիթմը դանդաղեցնելու և հանդիսավորություն տալու համար:',
    wrongDefs: [
      {
        es: 'Eliminación total de enlaces y conjunciones.',
        hy: 'Շաղկապների և կապերի լիակատար բացառումը:'
      },
      {
        es: 'Palabras semejantes en forma pero con significados totalmente distintos.',
        hy: 'Ձևով նման, բայց բոլորովին տարբեր իմաստ ունեցող բառերը:'
      },
      {
        es: 'Relato sagrado sobre dioses y el origen del universo.',
        hy: 'Սրբազան պատմություն աստվածների և տիեզերքի ծագման մասին:'
      }
    ]
  },
  {
    id: 'def_hiperbaton',
    termEs: 'Hipérbaton',
    termHy: 'Հիպերբատոն',
    correctDefEs: 'Alteración del orden sintáctico habitual o lógico de las palabras en una frase.',
    correctDefHy: 'Նախադասության մեջ բառերի սովորական կամ տրամաբանական շարադասության խախտումը:',
    wrongDefs: [
      {
        es: 'Repetición de sonidos consonánticos semejantes en un verso.',
        hy: 'Տողում նման բաղաձայն հնչյունների կրկնությունը:'
      },
      {
        es: 'Lista de elementos de la misma clase gramatical.',
        hy: 'Միևնույն քերականական դասի տարրերի ցուցակը:'
      },
      {
        es: 'Narración breve con inicio, nudo y desenlace.',
        hy: 'Կարճ պատմվածք՝ սկզբով, հանգույցով և հանգուցալուծմամբ:'
      }
    ]
  },
  {
    id: 'def_romance',
    termEs: 'Romance',
    termHy: 'Ռոմանս',
    correctDefEs: 'Composición poética en versos octosílabos (8) con rima asonante en los pares y versos impares sueltos.',
    correctDefHy: 'Բանաստեղծական գործ ութավանկ (8) տողերով՝ զույգ տողերի ասոնանս հանգով և կենտ ազատ տողերով:',
    wrongDefs: [
      {
        es: 'Relato en prosa con dioses griegos y romanos.',
        hy: 'Արձակ պատմվածք հունական և հռոմեական աստվածների մասին:'
      },
      {
        es: 'Obra escrita por autor conocido en verso de arte mayor.',
        hy: 'Հայտնի հեղինակի գրած գործ բարձր արվեստի չափերով:'
      },
      {
        es: 'Frase que repite palabras redundantes como "lo vi con mis ojos".',
        hy: 'Նախադասություն, որը կրկնում է ավելորդ բառեր, ինչպես «տեսա աչքերովս»:'
      }
    ]
  }
];

export const GAME_ERROR_ITEMS: GameErrorItem[] = [
  {
    id: 'err_1',
    statementEs: '«La anáfora consiste en repetir palabras al final de los versos para crear rima».',
    statementHy: '«Անաֆորան բառերի կրկնությունն է տողերի վերջում՝ հանգ ստեղծելու համար»:',
    topic: 'Anáfora',
    correctCorrectionEs: 'La anáfora repite palabras al PRINCIPIO de los versos, nunca al final.',
    correctCorrectionHy: 'Անաֆորան բառերը կրկնում է տողերի ՍԿԶԲՈՒՄ, ոչ երբեք վերջում:',
    wrongOptions: [
      {
        es: 'La anáfora solo se usa en prosa y no en versos.',
        hy: 'Անաֆորան օգտագործվում է միայն արձակում, ոչ երբեք չափածոյում:'
      },
      {
        es: 'La anáfora consiste en quitar las conjunciones coordinantes.',
        hy: 'Անաֆորան կայանում է համադասական շաղկապները հանելու մեջ:'
      },
      {
        es: 'La anáfora exige que los versos tengan más de 14 sílabas.',
        hy: 'Անաֆորան պահանջում է, որ տողերը ունենան 14-ից ավելի վանկ:'
      }
    ],
    explanationEs: 'La anáfora se ubica estrictamente al inicio de los versos. La repetición al final es otra figura distinta (epífora).',
    explanationHy: 'Անաֆորան գտնվում է բացառապես տողերի սկզբում: Վերջում կրկնությունը այլ գեղարվեստական միջոց է:'
  },
  {
    id: 'err_2',
    statementEs: '«El asíndeton consiste en repetir muchas veces la conjunción "y" para dar lentitud».',
    statementHy: '«Ասինդետոնը «y» (և) շաղկապի բազմիցս կրկնությունն է՝ դանդաղություն տալու համար»:',
    topic: 'Asíndeton y Polisíndeton',
    correctCorrectionEs: 'Eso es el polisíndeton; el asíndeton consiste en ELIMINAR las conjunciones para dar rapidez.',
    correctCorrectionHy: 'Դա պոլիսինդետոնն է. ասինդետոնը կայանում է շաղկապները ԲԱՑ ԹՈՂՆԵԼՈՒ մեջ՝ արագություն տալու համար:',
    wrongOptions: [
      {
        es: 'El asíndeton se refiere únicamente a la rima asonante de los romances.',
        hy: 'Ասինդետոնը վերաբերում է միայն ռոմանսների ասոնանս հանգին:'
      },
      {
        es: 'El asíndeton no usa comas bajo ninguna circunstancia.',
        hy: 'Ասինդետոնը ոչ մի պարագայում ստորակետներ չի օգտագործում:'
      },
      {
        es: 'El asíndeton es exclusivo de los mitos griegos.',
        hy: 'Ասինդետոնը բնորոշ է միայն հունական առասպելներին:'
      }
    ],
    explanationEs: 'El prefijo "a-" significa privación: sin conjunciones. Repetir muchas conjunciones es "poli-"síndeton.',
    explanationHy: '«Ա-» նախածանցը նշանակում է ժխտում՝ առանց շաղկապների: Շատ շաղկապներ կրկնելը «պոլի-»սինդետոնն է:'
  },
  {
    id: 'err_3',
    statementEs: '«La literatura popular se caracteriza por tener autores famosos que firman sus manuscritos».',
    statementHy: '«Ժողովրդական գրականությունը բնորոշվում է նրանով, որ ունի հայտնի հեղինակներ, ովքեր ստորագրում են իրենց ձեռագրերը»:',
    topic: 'Literatura Popular',
    correctCorrectionEs: 'La literatura popular es ANÓNIMA y se transmite oralmente; la que tiene autor conocido es la literatura culta.',
    correctCorrectionHy: 'Ժողովրդական գրականությունն ԱՆԱՆՈՒՆ է և փոխանցվում է բանավոր. հայտնի հեղինակ ունեցողը մշակված (culta) գրականությունն է:',
    wrongOptions: [
      {
        es: 'La literatura popular solo se escribe en latín por monjes.',
        hy: 'Ժողովրդական գրականությունը գրվում է միայն լատիներենով՝ վանականների կողմից:'
      },
      {
        es: 'La literatura popular nunca tiene canciones ni romances.',
        hy: 'Ժողովրդական գրականությունը երբեք չի ունենում երգեր կամ ռոմանսներ:'
      },
      {
        es: 'La literatura popular no cambia nunca de una generación a otra.',
        hy: 'Ժողովրդական գրականությունը սերնդեսերունդ երբեք չի փոփոխվում:'
      }
    ],
    explanationEs: 'El anonimato y la transmisión de viva voz son las marcas indispensables de lo popular.',
    explanationHy: 'Անանունությունը և կենդանի խոսքով փոխանցումը ժողովրդականի անբաժանելի հատկանիշներն են:'
  },
  {
    id: 'err_4',
    statementEs: '«El romance está formado por versos endecasílabos (11) con rima consonante en todos los versos».',
    statementHy: '«Ռոմանսը կազմված է տասնմեկավանկ (11) տողերից՝ բոլոր տողերի կոնսոնանս հանգով»:',
    topic: 'El Romance',
    correctCorrectionEs: 'El romance tiene versos OCTOSÍLABOS (8 sílabas) y rima ASONANTE solo en los versos pares.',
    correctCorrectionHy: 'Ռոմանսն ունի ՈՒԹԱՎԱՆԿ (8 վանկ) տողեր և ԱՍՈՆԱՆՍ հանգ միայն զույգ տողերում:',
    wrongOptions: [
      {
        es: 'El romance está escrito en prosa y no tiene versos.',
        hy: 'Ռոմանսը գրված է արձակով և չունի տողեր:'
      },
      {
        es: 'El romance siempre tiene rima en los versos impares y los pares quedan sueltos.',
        hy: 'Ռոմանսը միշտ հանգ ունի կենտ տողերում, իսկ զույգերն ազատ են:'
      },
      {
        es: 'El romance solo narra historias de ciencia ficción.',
        hy: 'Ռոմանսը պատմում է միայն գիտաֆանտաստիկ պատմություններ:'
      }
    ],
    explanationEs: 'Regla de oro del romance: versos octosílabos (8) + rima asonante en los pares (2, 4, 6...) + impares libres.',
    explanationHy: 'Ռոմանսի ոսկե կանոնը. ութավանկ (8) տողեր + ասոնանս հանգ զույգ տողերում + կենտ տողերն ազատ:'
  }
];

export const GAME_TEXT_TYPES_QUESTIONS: Question[] = [
  {
    id: 'gtt_1',
    topicId: 'tema2',
    difficulty: 'facil',
    questionEs: 'Lee el siguiente texto:\n\n«Zeus, padre de los dioses y señor del trueno en el monte Olimpo, arrojó su rayo celeste sobre los titanes rebeldes para restablecer el orden sagrado del cosmos y crear la luz de los mortales».\n\n¿Qué tipo de texto es y por qué?',
    questionHy: 'Կարդա հետևյալ տեքստը.\n\n«Զևսը՝ աստվածների հայրն ու շանթարձակ տերը Օլիմպոս լեռան վրա, իր երկնային կայծակը նետեց ապստամբ տիտանների վրա՝ վերականգնելու համար տիեզերքի սրբազան կարգը և ստեղծելու մահկանացուների լույսը»:\n\nԻ՞նչ տեսակի տեքստ է սա և ինչո՞ւ:',
    options: [
      { id: 'opt_1', textEs: 'Mito (protagonizado por dioses y explica el origen del cosmos)', textHy: 'Առասպել (հերոսներն աստվածներ են և բացատրում է տիեզերքի կարգը)' },
      { id: 'opt_2', textEs: 'Romance épico en verso octosílabo', textHy: 'Հերոսական ռոմանս ութավանկ տողերով' },
      { id: 'opt_3', textEs: 'Leyenda medieval con base histórica en España', textHy: 'Միջնադարյան ավանդազրույց՝ Իսպանիայի պատմական հիմքով' },
      { id: 'opt_4', textEs: 'Cuento moderno de ciencia ficción', textHy: 'Գիտաֆանտաստիկ ժամանակակից պատմվածք' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Es un MITO indiscutible: sus personajes son dioses (Zeus, Titanes), transcurre en un tiempo mítico sagrado (el Olimpo) y busca explicar el origen y orden del universo. No es romance (no está en verso), ni leyenda (no ocurre en un lugar histórico real de España ni tiene base verídica).',
    explanationHy: 'Սա անվիճելի ԱՌԱՍՊԵԼ է (Mito). կերպարներն աստվածներ են (Զևս, Տիտաններ), գործողությունը տեղի է ունենում սրբազան ժամանակում (Օլիմպոս) և բացատրում է տիեզերքի ծագումն ու կարգը: Ռոմանս չէ (չափածո չէ), ավանդազրույց չէ (Իսպանիայի իրական պատմական վայրում չէ):',
    rememberRuleEs: 'Dioses + Olimpo + origen del mundo y fenómenos celestes = MITO.',
    rememberRuleHy: 'Աստվածներ + Օլիմպոս + աշխարհի և բնության ծագման բացատրություն = ԱՌԱՍՊԵԼ (Mito):',
    followUpExample: { es: 'Poseidón agita con furia su tridente para provocar las tormentas marinas.', hy: 'Պոսեյդոնը զայրույթով թափահարում է եռաժանին՝ ծովային փոթորիկներ առաջացնելու համար:' }
  },
  {
    id: 'gtt_2',
    topicId: 'tema2',
    difficulty: 'facil',
    questionEs: 'Lee el siguiente fragmento poético:\n\n«Que por mayo era, por mayo,\ncuando hace la calor,\ncuando canta la calandria\ny responde el ruiseñor,\ncuando los enamorados\nvan a servir al amor...»\n\n¿Qué tipo de texto es?',
    questionHy: 'Կարդա հետևյալ բանաստեղծական հատվածը.\n\n«Que por mayo era, por mayo,\ncuando hace la calor,\ncuando canta la calandria\ny responde el ruiseñor,\ncuando los enamorados\nvan a servir al amor...»\n\nԻ՞նչ տեսակի տեքստ է սա:',
    options: [
      { id: 'opt_1', textEs: 'Romance (versos octosílabos con rima asonante en versos pares)', textHy: 'Ռոմանս (ութավանկ տողեր զույգ տողերի ասոնանս հանգով)' },
      { id: 'opt_2', textEs: 'Cuento breve en prosa con introducción y nudo', textHy: 'Կարճ պատմվածք արձակով՝ սկզբով և հանգույցով' },
      { id: 'opt_3', textEs: 'Mito griego sobre la primavera', textHy: 'Հունական առասպել գարնան մասին' },
      { id: 'opt_4', textEs: 'Leyenda caballeresca en prosa', textHy: 'Ասպետական ավանդազրույց արձակով' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Es el famoso "Romance del Prisionero". Cumple estrictamente las reglas del romance de la libreta escolar: versos octosílabos (8 sílabas métricas) con rima asonante en los versos pares (calor, ruiseñor, amor: terminación en -or) y versos impares que quedan libres.',
    explanationHy: 'Սա հայտնի «Բանտարկյալի ռոմանսն» է: Խստորեն համապատասխանում է տետրի կանոններին. ութավանկ տողեր (8 վանկ), զույգ տողերում ասոնանս հանգով (calor, ruiseñor, amor) և կենտ ազատ տողերով:',
    rememberRuleEs: 'Versos de 8 sílabas (octosílabos) + rima asonante en pares = ROMANCE.',
    rememberRuleHy: '8 վանկանի տողեր (octosílabos) + ասոնանս հանգ զույգ տողերում = ՌՈՄԱՆՍ (Romance):',
    followUpExample: { es: 'Fontefrida, Fontefrida, / Fontefrida y con amor...', hy: 'Ֆոնտեֆրիդա, Ֆոնտեֆրիդա, / Ֆոնտեֆրիդա և սիրով...' }
  },
  {
    id: 'gtt_3',
    topicId: 'tema2',
    difficulty: 'facil',
    questionEs: 'Lee el siguiente texto:\n\n«En la ciudad castellana de Soria, junto al río Duero, se alza el monte de las Ánimas. Cuentan los ancianos que en la noche de Todos los Santos, entre las ruinas del antiguo monasterio de los caballeros templarios, doblan solas las campanas y los esqueletos de los guerreros muertos salen de sus tumbas a luchar».\n\n¿Qué tipo de texto es?',
    questionHy: 'Կարդա հետևյալ տեքստը.\n\n«Կաստիլիայի Սորիա քաղաքում՝ Դուերո գետի ափին, վեր է խոյանում Հոգիների բլուրը: Ծերերն ասում են, որ Բոլոր Սրբերի գիշերը տամպլիեր ասպետների հին վանքի ավերակներում զանգերն ինքնուրույն ղողանջում են, իսկ մահացած ռազմիկների կմախքները դուրս են գալիս գերեզմաններից՝ կռվելու»:\n\nԻ՞նչ տեսակի տեքստ է սա:',
    options: [
      { id: 'opt_1', textEs: 'Leyenda (hecho en un lugar histórico real con elementos sobrenaturales y misterio)', textHy: 'Ավանդազրույց (իրական պատմական վայրում գերբնական առեղծվածով)' },
      { id: 'opt_2', textEs: 'Mito sagrado de la antigua Grecia', textHy: 'Հին Հունաստանի սրբազան առասպել' },
      { id: 'opt_3', textEs: 'Romance cantado en versos octosílabos', textHy: 'Ութավանկ տողերով երգվող ռոմանս' },
      { id: 'opt_4', textEs: 'Noticia periodística contemporánea', textHy: 'Ժամանակակից լրագրողական լուր' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Es una LEYENDA (de Gustavo Adolfo Bécquer): tiene una localización geográfica real (Soria, río Duero), alude a personajes históricos verídicos (los caballeros templarios) y añade fenómenos fantásticos y misteriosos (esqueletos, campanas que doblan solas en la noche de difuntos).',
    explanationHy: 'Սա ԱՎԱՆԴԱԶՐՈՒՅՑ է (Leyenda՝ Բեկերի հայտնի գործը). ունի իրական աշխարհագրական վայր (Սորիա, Դուերո գետ), պատմական իրական անձինք (տամպլիեր ասպետներ) և գերբնական առեղծված (մեռելոցի գիշերը կմախքների հարություն):',
    rememberRuleEs: 'Lugar geográfico real + misterio/fantasía popular tradicional = LEYENDA.',
    rememberRuleHy: 'Իրական աշխարհագրական վայր + ժողովրդական գերբնական առեղծված = ԱՎԱՆԴԱԶՐՈՒՅՑ (Leyenda):',
    followUpExample: { es: 'La leyenda de la dama blanca del castillo de Loarre.', hy: 'Լոարե ամրոցի սպիտակ տիկնոջ ավանդազրույցը:' }
  },
  {
    id: 'gtt_4',
    topicId: 'tema2',
    difficulty: 'facil',
    questionEs: 'Lee el siguiente texto:\n\n«Había una vez un bondadoso zapatero tan pobre que solo le quedaba cuero para un último par de zapatos. Los cortó por la noche y se fue a dormir. Por la mañana, ¡oh sorpresa!, encontró los zapatos perfectamente cosidos sobre su mesa. La escena se repitió hasta que una noche él y su esposa descubrieron a dos diminutos duendecillos trabajando alegremente...»\n\n¿A qué género corresponde?',
    questionHy: 'Կարդա հետևյալ տեքստը.\n\n«Լինում է, չի լինում մի բարի կոշկակար, այնքան աղքատ, որ մնացել էր միայն մի զույգ կոշկի կաշի: Գիշերը կտրեց կաշին ու գնաց քնելու: Առավոտյան, ի՜նչ զարմանք, տեսավ սեղանին դրված հիանալի կարված կոշիկները: Դա կրկնվեց, մինչև որ մի գիշեր նա և կինը տեսան ուրախ աշխատող երկու փոքրիկ թզուկների...»:\n\nՈ՞ր ժանրին է սա պատկանում:',
    options: [
      { id: 'opt_1', textEs: 'Cuento (narración breve ficticia en prosa con inicio, nudo y pocos personajes)', textHy: 'Հեքիաթ / Պատմվածք (կարճ հորինված արձակ պատմություն՝ սկզբով, հանգույցով և քիչ կերպարներով)' },
      { id: 'opt_2', textEs: 'Mito cosmogónico sobre el origen del calzado', textHy: 'Տիեզերածնական առասպել կոշիկի ծագման մասին' },
      { id: 'opt_3', textEs: 'Romance popular en verso octosílabo', textHy: 'Ժողովրդական ռոմանս ութավանկ տողերով' },
      { id: 'opt_4', textEs: 'Leyenda histórica fechada en un archivo de la corte', textHy: 'Պատմական ավանդազրույց՝ արքունական արխիվի տարեթվով' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Es un CUENTO tradicional: relato breve y ficticio escrito en prosa, con el inicio característico ("Había una vez..."), un número muy reducido de personajes (el zapatero, su esposa, los duendecillos) y una trama sencilla estructurada en planteamiento, nudo y desenlace.',
    explanationHy: 'Սա ավանդական ՀԵՔԻԱԹ է (Cuento). կարճ գեղարվեստական արձակ պատմություն՝ դասական սկզբով («Լինում է, չի լինում...»), քիչ թվով կերպարներով և պարզ սյուժեով (սկիզբ, հանգույց, ավարտ):',
    rememberRuleEs: '«Había una vez» + narración breve en prosa + pocos personajes = CUENTO.',
    rememberRuleHy: '«Լինում է, չի լինում» + կարճ արձակ պատմություն + քիչ կերպարներ = ՀԵՔԻԱԹ (Cuento):',
    followUpExample: { es: 'Caperucita Roja caminando por el bosque.', hy: 'Կարմիր Գլխարկը քայլում է անտառով:' }
  },
  {
    id: 'gtt_5',
    topicId: 'tema2',
    difficulty: 'medio',
    questionEs: 'Lee el siguiente texto:\n\n«Prometeo, compadecido de los seres humanos que temblaban de frío en la oscuridad, subió a escondidas al carro de fuego del Sol, encendió una caña con la llama sagrada de los dioses y la entregó a los mortales para enseñarles las artes y el fuego. Al enterarse, Zeus enfureció y lo encadenó a una roca del monte Cáucaso».\n\n¿Por qué este fragmento es un MITO?',
    questionHy: 'Կարդա հետևյալ տեքստը.\n\n«Պրոմեթևսը, խղճալով մթության մեջ մրսող մարդկանց, գաղտնի բարձրացավ Արևի հրեղեն կառքի մոտ, եղեգը վառեց աստվածների սրբազան կրակով և հանձնեց մահկանացուներին՝ նրանց արհեստներ սովորեցնելու համար: Իմանալով այդ մասին՝ Զևսը զայրացավ և նրան շղթայեց Կովկասի ժայռին»:\n\nԻնչո՞ւ է այս հատվածը ԱՌԱՍՊԵԼ (Mito):',
    options: [
      { id: 'opt_1', textEs: 'Porque explica el origen del fuego en la humanidad mediante dioses y titanes sobrenaturales', textHy: 'Որովհետև աստվածների և տիտանների միջոցով բացատրում է մարդկության մեջ կրակի ու արհեստների ծագումը' },
      { id: 'opt_2', textEs: 'Porque está escrito en versos octosílabos con rima asonante', textHy: 'Որովհետև գրված է ութավանկ տողերով և ասոնանս հանգով' },
      { id: 'opt_3', textEs: 'Porque ocurrió en un pueblo real de Andalucía en el siglo XIX', textHy: 'Որովհետև տեղի է ունեցել 19-րդ դարում Անդալուսիայի իրական գյուղում' },
      { id: 'opt_4', textEs: 'Porque es una canción cómica para hacer reír a los niños', textHy: 'Որովհետև ծիծաղելի երգ է երեխաներին զվարճացնելու համար' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Cumple exactamente la definición de la libreta: narración de carácter tradicional y maravilloso protagonizada por dioses, titanes o héroes sobrenaturales que busca explicar el origen de un elemento crucial de la naturaleza y de la civilización humana (el fuego sagrado).',
    explanationHy: 'Լիովին համապատասխանում է տետրի սահմանմանը. ավանդական սրբազան պատմություն աստվածների և տիտանների մասնակցությամբ, որը բացատրում է մարդկության համար կարևորագույն երևույթի (կրակի) ծագումը:',
    rememberRuleEs: 'Explicación del origen del fuego o de la vida mediante dioses = MITO.',
    rememberRuleHy: 'Կրակի կամ կյանքի ծագման բացատրություն աստվածների միջոցով = ԱՌԱՍՊԵԼ (Mito):',
    followUpExample: { es: 'Pandora abre la vasija que esparce las enfermedades por el mundo.', hy: 'Պանդորան բացում է անոթը, որը հիվանդություններ է տարածում աշխարհով մեկ:' }
  },
  {
    id: 'gtt_6',
    topicId: 'tema2',
    difficulty: 'medio',
    questionEs: 'Lee este fragmento:\n\n«¡Quién hubiese tal ventura\nsobre las aguas del mar\ncomo hubo el conde Arnaldos\nla mañana de San Juan!\nYendo a buscar la caza\npara su halcón cebar,\nvio venir una galera\nque la mar quiere llegar...»\n\n¿Qué tipo de texto es y qué rasgo métrico lo demuestra?',
    questionHy: 'Կարդա այս հատվածը.\n\n«¡Quién hubiese tal ventura\nsobre las aguas del mar\ncomo hubo el conde Arnaldos\nla mañana de San Juan!\nYendo a buscar la caza\npara su halcón cebar,\nvio venir una galera\nque la mar quiere llegar...»\n\nԻ՞նչ տեսակի տեքստ է սա և ո՞ր տաղաչափական հատկանիշն է դա ապացուցում:',
    options: [
      { id: 'opt_1', textEs: 'Romance (poema de versos octosílabos con rima asonante en versos pares: mar, Juan, cebar, llegar)', textHy: 'Ռոմանս (ութավանկ տողերով պոեմ՝ զույգ տողերի ասոնանս հանգով. mar, Juan, cebar, llegar)' },
      { id: 'opt_2', textEs: 'Leyenda en prosa sobre barcos piratas', textHy: 'Ավանդազրույց արձակով ծովահենների նավերի մասին' },
      { id: 'opt_3', textEs: 'Mito romano sobre Neptuno', textHy: 'Հռոմեական առասպել Նեպտունի մասին' },
      { id: 'opt_4', textEs: 'Cuento de hadas con animales parlantes', textHy: 'Հեքիաթ խոսող կենդանիներով' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Es el "Romance del Conde Arnaldos". Es un poema formado por versos de ocho sílabas (octosílabos) donde los versos pares riman en asonante en -a (mar, Juan, cebar, llegar) y los impares van libres.',
    explanationHy: 'Սա «Կոմս Առնալդոսի ռոմանսն» է: Կազմված է ութավանկ (8) տողերից, որտեղ զույգ տողերը հանգավորվում են ասոնանսով (mar, Juan, cebar, llegar), իսկ կենտ տողերն ազատ են:',
    rememberRuleEs: 'Octosílabos + rima en pares (-a) = ROMANCE.',
    rememberRuleHy: 'Ութավանկ տողեր + զույգերի հանգավորում = ՌՈՄԱՆՍ (Romance):',
    followUpExample: { es: 'La mañana de San Juan / salen las damas a pasear...', hy: 'Սուրբ Խուանի առավոտյան / տիկնայք դուրս են գալիս զբոսնելու...' }
  },
  {
    id: 'gtt_7',
    topicId: 'tema2',
    difficulty: 'medio',
    questionEs: 'Lee el siguiente texto:\n\n«En la villa aragonesa de Teruel, durante el siglo XIII, Diego de Marcilla partió a la guerra prometiendo regresar con honra y fortuna para casarse con doña Isabel de Segura. Al cumplirse los cinco años convenidos y creerlo muerto, el padre obligó a Isabel a casarse con otro. El mismo día de las nupcias Diego regresó, y al negarle Isabel el último beso, cayó fulminado de dolor. En su entierro, Isabel besó el cadáver de su amado y murió sobre su pecho. Hoy sus sepulcros de alabastro reposan juntos en la iglesia de San Pedro».\n\n¿Qué tipo de texto es?',
    questionHy: 'Կարդա հետևյալ տեքստը.\n\n«Արագոնի Տերուել քաղաքում 13-րդ դարում Դիեգո դե Մարսիլիան մեկնեց պատերազմ՝ խոստանալով վերադառնալ հարստությամբ և փառքով, որպեսզի ամուսնանա Իսաբելի հետ: 5 տարի անց՝ նրան մահացած համարելով, հայրն Իսաբելին ստիպեց ամուսնանալ ուրիշի հետ: Հարսանիքի օրը Դիեգոն վերադարձավ, և երբ Իսաբելը մերժեց նրան վերջին համբույրը, նա մահացավ վշտից: Թաղման ժամանակ Իսաբելը համբուրեց նրա մարմինը և նույնպես մահացավ: Այսօր նրանց դամբարանները կողք կողքի են Սան Պեդրոյի եկեղեցում»:\n\nԻ՞նչ տեսակի տեքստ է սա:',
    options: [
      { id: 'opt_1', textEs: 'Leyenda (parte de una ciudad real, una época histórica y sepulcros existentes con tradición popular)', textHy: 'Ավանդազրույց (հիմնված է իրական քաղաքի, պատմական դարաշրջանի և գոյություն ունեցող դամբարանների վրա)' },
      { id: 'opt_2', textEs: 'Mito sobre los dioses de la guerra', textHy: 'Առասպել պատերազմի աստվածների մասին' },
      { id: 'opt_3', textEs: 'Romance octosílabo con rima asonante', textHy: 'Ութավանկ ռոմանս ասոնանս հանգով' },
      { id: 'opt_4', textEs: 'Artículo científico sobre arquitectura medieval', textHy: 'Գիտական հոդված միջնադարյան ճարտարապետության մասին' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Es la celebérrima "Leyenda de los Amantes de Teruel": se apoya en un lugar histórico y geográfico auténtico (Teruel, siglo XIII, sepulcros medievales reales) pero la voz popular tradicional ha envuelto la historia en un halo trágico y legendario.',
    explanationHy: 'Սա «Տերուելի սիրահարների ավանդազրույցն» է (Leyenda). հիմնված է իրական վայրի և դարաշրջանի վրա (Տերուել, 13-րդ դար, իրական դամբարաններ), բայց ժողովրդական ավանդույթը պատմությանը տվել է առասպելական-ողբերգական շունչ:',
    rememberRuleEs: 'Lugar real (Teruel) + base histórica medieval + relato tradicional = LEYENDA.',
    rememberRuleHy: 'Իրական վայր (Տերուել) + միջնադարյան պատմական հիմք + ավանդական պատմություն = ԱՎԱՆԴԱԶՐՈՒՅՑ (Leyenda):',
    followUpExample: { es: 'La leyenda de la campana de Huesca.', hy: 'Ուեսկայի զանգի ավանդազրույցը:' }
  },
  {
    id: 'gtt_8',
    topicId: 'tema2',
    difficulty: 'medio',
    questionEs: 'Lee el siguiente texto:\n\n«Llegaron a la corte de un vanidoso rey tres pícaros tejedores que aseguraban confeccionar una tela tan mágica que solo las personas inteligentes y dignas de su cargo podían verla. El rey desfiló desnudo creyendo lucir un traje deslumbrante, y todos los cortesanos fingían admirarlo por miedo a parecer tontos, hasta que un niño gritó: "¡Pero si va desnudo!"».\n\n¿Qué tipo de texto es?',
    questionHy: 'Կարդա հետևյալ տեքստը.\n\n«Պարծենկոտ թագավորի պալատ եկան երեք խաբեբա ջուլհակներ, որոնք պնդում էին, թե հյուսում են այնպիսի կախարդական կտոր, որը միայն խելացի և իրենց պաշտոնին արժանի մարդիկ կարող են տեսնել: Թագավորը մերկ շքերթ արեց՝ կարծելով, թե շքեղ զգեստ է կրում, իսկ պալատականները ձևացնում էին, թե հիանում են՝ հիմար չերևալու վախից, մինչև մի երեխա բացականչեց. «Բայց չէ՞ որ նա մերկ է»»:\n\nԻ՞նչ տեսակի տեքստ է սա:',
    options: [
      { id: 'opt_1', textEs: 'Cuento (narración breve en prosa, argumento sencillo con introducción, nudo y desenlace)', textHy: 'Հեքիաթ / Պատմվածք (արձակ կարճ պատմություն, պարզ սյուժեով՝ սկիզբ, հանգույց և ավարտ)' },
      { id: 'opt_2', textEs: 'Mito que explica el origen de las telas en Grecia', textHy: 'Առասպել, որը բացատրում է գործվածքների ծագումը Հունաստանում' },
      { id: 'opt_3', textEs: 'Romance cantado por juglares medievales', textHy: 'Միջնադարյան ժուգլյարների երգած ռոմանս' },
      { id: 'opt_4', textEs: 'Leyenda sobre la conquista de Toledo', textHy: 'Ավանդազրույց Տոլեդոյի գրավման մասին' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Es un CUENTO (el clásico traje nuevo del emperador / ejemplo de El conde Lucanor): narración en prosa, breve, con planteamiento (llegada de los tejedores), nudo (el engaño colectivo) y desenlace (el grito del niño desvelando la verdad).',
    explanationHy: 'Սա ՀԵՔԻԱԹ / ՊԱՏՄՎԱԾՔ է (Cuento). արձակ կարճ պատմություն, ունի սկիզբ (ջուլհակների գալուստը), հանգույց (խաբեությունը) և հանգուցալուծում (երեխայի խոսքը, որը բացահայտում է ճշմարտությունը):',
    rememberRuleEs: 'Planteamiento + Nudo + Desenlace en prosa breve = CUENTO.',
    rememberRuleHy: 'Ներածություն + Հանգույց + Հանգուցալուծում կարճ արձակում = ՀԵՔԻԱԹ (Cuento):',
    followUpExample: { es: 'El cuento de la lechera y su cántaro de leche.', hy: 'Կաթնավաճառ աղջկա և կաթի կժի հեքիաթը:' }
  },
  {
    id: 'gtt_9',
    topicId: 'tema2',
    difficulty: 'medio',
    questionEs: 'Lee el siguiente texto:\n\n«Hades, dios de las profundidades subterráneas, raptó a Perséfone hacia el inframundo. Su madre Deméter, diosa de la agricultura y de la fertilidad de la tierra, cayó en una tristeza tan honda que los árboles perdieron sus hojas, las cosechas se secaron y el frío cubrió los campos. Cuando Zeus ordenó que Perséfone pasara seis meses en la superficie con su madre y seis meses bajo tierra, nacieron las estaciones del año: la primavera fértil y el crudo invierno».\n\n¿A qué género literario corresponde y por qué?',
    questionHy: 'Կարդա հետևյալ տեքստը.\n\n«Հադեսը՝ ստորգետնյա խորքերի աստվածը, Պերսեփոնեին փախցրեց անդրաշխարհ: Նրա մայրը՝ Դեմետրան՝ երկրագործության և հողի բերրիության աստվածուհին, ընկավ այնպիսի խոր վշտի մեջ, որ ծառերը կորցրին իրենց տերևները, բերքը չորացավ և ցուրտը պատեց դաշտերը: Երբ Զևսը կարգադրեց, որ Պերսեփոնեն վեց ամիս անցկացնի մոր հետ երկրի վրա, իսկ վեց ամիս՝ գետնի տակ, ծնվեցին տարվա եղանակները՝ ծաղկուն գարունը և դաժան ձմեռը»:\n\nՈ՞ր գրական ժանրին է սա պատկանում և ինչո՞ւ:',
    options: [
      { id: 'opt_1', textEs: 'Mito (explica el origen de las cuatro estaciones a través de dioses griegos)', textHy: 'Առասպել (հունական աստվածների միջոցով բացատրում է չորս եղանակների ծագումը)' },
      { id: 'opt_2', textEs: 'Leyenda histórica ambientada en Madrid', textHy: 'Պատմական ավանդազրույց՝ Մադրիդում տեղի ունեցած' },
      { id: 'opt_3', textEs: 'Romance popular en verso octosílabo', textHy: 'Ժողովրդական ռոմանս ութավանկ տողերով' },
      { id: 'opt_4', textEs: 'Cuento de misterio moderno', textHy: 'Ժամանակակից խորհրդավոր պատմվածք' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Es un MITO cosmogónico y natural: sus personajes son divinidades (Hades, Deméter, Zeus, Perséfone) y su función primordial es explicar de manera sagrada por qué existen las estaciones del año (el invierno cuando la diosa está triste, la primavera cuando recupera a su hija).',
    explanationHy: 'Սա բնության երևույթները բացատրող ԱՌԱՍՊԵԼ է (Mito). կերպարներն աստվածներ են (Հադես, Դեմետրա, Զևս, Պերսեփոնե), իսկ նպատակը տարվա եղանակների գոյությունը բացատրելն է (ձմեռը՝ աստվածուհու վիշտը, գարունը՝ աղջկա վերադարձը):',
    rememberRuleEs: 'Dioses + explicación de fenómenos naturales (las estaciones) = MITO.',
    rememberRuleHy: 'Աստվածներ + բնական երևույթների բացատրություն (եղանակներ) = ԱՌԱՍՊԵԼ (Mito):',
    followUpExample: { es: 'El mito de Apolo guiando la luz del Sol cada día.', hy: 'Ապոլոնի առասպելը, որն ամեն օր ուղղորդում է Արևի լույսը:' }
  },
  {
    id: 'gtt_10',
    topicId: 'tema2',
    difficulty: 'dificil',
    questionEs: 'Lee con atención los siguientes versos:\n\n«Pregonadas son las guerras\nde Francia con Aragón,\n¡ay de mí, que ya soy viejo\ny mis hijas mozas son!\nNo me llores, padre mío,\nque a la guerra me iré yo,\nvestiré cota de malla\ny a mi espalda el espadón...»\n\n¿Qué tipo de texto literario es y cómo reconoces su forma?',
    questionHy: 'Ուշադիր կարդա հետևյալ տողերը.\n\n«Pregonadas son las guerras\nde Francia con Aragón,\n¡ay de mí, que ya soy viejo\ny mis hijas mozas son!\nNo me llores, padre mío,\nque a la guerra me iré yo,\nvestiré cota de malla\ny a mi espalda el espadón...»\n\nԻ՞նչ տեսակի գրական տեքստ է սա և ինչպե՞ս ես ճանաչում դրա ձևը:',
    options: [
      { id: 'opt_1', textEs: 'Romance (versos octosílabos, impares sueltos y rima asonante en versos pares: Aragón, son, yo, espadón)', textHy: 'Ռոմանս (ութավանկ տողեր, կենտերն ազատ են, զույգ տողերի ասոնանս հանգով. Aragón, son, yo, espadón)' },
      { id: 'opt_2', textEs: 'Cuento popular en prosa sobre la guerra', textHy: 'Ժողովրդական արձակ հեքիաթ պատերազմի մասին' },
      { id: 'opt_3', textEs: 'Mito griego sobre la diosa Atenea', textHy: 'Հունական առասպել Աթենաս աստվածուհու մասին' },
      { id: 'opt_4', textEs: 'Leyenda escrita en latín por monjes', textHy: 'Վանականների կողմից լատիներենով գրված ավանդազրույց' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Es el "Romance de la Doncella Guerrera". Cumple la métrica exacta del romance: versos octosílabos (8 sílabas), versos pares con rima asonante en "o" (Aragón, son, yo, espadón) y versos impares que no riman (libres). Tiene temática épica y transmisión oral tradicional.',
    explanationHy: 'Սա «Ռազմիկ աղջկա ռոմանսն» է: Խստորեն պահպանում է ռոմանսի կանոնները. 8 վանկանի տողեր (octosílabos), զույգ տողերը հանգավորվում են ասոնանսով (o հնչյունով՝ Aragón, son, yo, espadón), իսկ կենտ տողերն ազատ են:',
    rememberRuleEs: 'Octosílabos (8) + pares asonantes + impares sueltos = ROMANCE.',
    rememberRuleHy: 'Ութավանկ (8) + զույգերի ասոնանս հանգ + կենտերն ազատ = ՌՈՄԱՆՍ (Romance):',
    followUpExample: { es: 'Romance del rey moro que perdió Alhama: ¡Ay de mi Alhama!', hy: 'Ալհաման կորցրած մավր թագավորի ռոմանսը. «¡Ay de mi Alhama!»:' }
  },
  {
    id: 'gtt_11',
    topicId: 'tema2',
    difficulty: 'dificil',
    questionEs: 'Lee este fragmento:\n\n«En la sobrecogedora penumbra de la Catedral gótica de Toledo, Pedro de Orellana avanzó sigiloso hacia la capilla mayor. Su amada María le había pedido la ajorca de oro que brillaba en el brazo de la Virgen del Sagrario. Cuando Pedro extendió su mano temblorosa y arrancó la joya, las estatuas de santos de piedra y caballeros de bronce cobraron vida, descendieron de sus pedestales y lo rodearon con miradas acusadoras. A la mañana siguiente, los sacerdotes lo encontraron tirado en las losas frías, loco de terror, repitiendo: "¡Suya es... suya es!"».\n\n¿Qué tipo de texto es y qué elementos lo definen?',
    questionHy: 'Կարդա այս հատվածը.\n\n«Տոլեդոյի գոթական տաճարի ահասարսուռ կիսախավարում Պեդրո դե Օրելյանան գաղտնի քայլեց դեպի գլխավոր մատուռ: Նրա սիրելի Մարիան խնդրել էր ոսկե ապարանջանը, որը փայլում էր Տիրամոր ձեռքին: Երբ Պեդրոն դողդոջուն ձեռքով պոկեց զարդը, քարե սրբերի և բրոնզե ասպետների արձանները կենդանացան, իջան իրենց պատվանդաններից և մեղադրական հայացքներով շրջապատեցին նրան: Հաջորդ առավոտյան քահանաները նրան գտան սառը սալաքարերին՝ սարսափից խելագարված, կրկնելով. «Նրանն է... նրանն է...»»:\n\nԻ՞նչ տեսակի տեքստ է սա և ի՞նչ տարրեր են այն բնորոշում:',
    options: [
      { id: 'opt_1', textEs: 'Leyenda (marco histórico y geográfico real en Toledo mezclado con misterio y apariciones sobrenaturales)', textHy: 'Ավանդազրույց (իրական պատմաաշխարհագրական միջավայր Տոլեդոյում՝ միահյուսված գերբնական առեղծվածով և արձանների կենդանացմամբ)' },
      { id: 'opt_2', textEs: 'Mito del dios del oro en el Olimpo', textHy: 'Օլիմպոսի ոսկու աստծո առասպել' },
      { id: 'opt_3', textEs: 'Romance lírico en versos de arte mayor', textHy: 'Քնարական ռոմանս բարձր արվեստի տողերով' },
      { id: 'opt_4', textEs: 'Biografía documental de Pedro de Orellana', textHy: 'Պեդրո դե Օրելյանայի փաստագրական կենսագրություն' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Es la famosa leyenda toledana "La ajorca de oro" de Bécquer. Posee todos los rasgos de la LEYENDA de la libreta: ambientada en una ciudad y monumento real (Catedral de Toledo), personajes humanos verosímiles pero con un suceso fantástico inexplicable (estatuas que cobran vida para castigar el sacrilegio) y finalidad didáctica/moral.',
    explanationHy: 'Սա Բեկերի «Ոսկե ապարանջանը» հայտնի ավանդազրույցն է (Leyenda). ունի տետրի բոլոր հատկանիշները՝ իրական քաղաք և շինություն (Տոլեդոյի տաճար), մարդկային հերոսներ, բայց գերբնական անբացատրելի երևույթ (արձանները կենդանանում են) և դաստիարակչական իմաստ:',
    rememberRuleEs: 'Monumento real histórico (Catedral de Toledo) + prodigio sobrenatural = LEYENDA.',
    rememberRuleHy: 'Իրական պատմական հուշարձան (Տոլեդոյի տաճար) + գերբնական հրաշք/առեղծված = ԱՎԱՆԴԱԶՐՈՒՅՑ (Leyenda):',
    followUpExample: { es: 'El rayo de luna de Bécquer en Soria.', hy: 'Բեկերի «Լուսնի շողը» ավանդազրույցը Սորիայում:' }
  },
  {
    id: 'gtt_12',
    topicId: 'tema2',
    difficulty: 'dificil',
    questionEs: 'Lee el siguiente texto:\n\n«Faetón, hijo del dios Sol Helios, suplicó a su padre que le dejara conducir por un solo día el carro celestial tirado por corceles de fuego. Cuando el joven tomó las riendas celestiales, los briosos caballos se desbocaron. El carro descendió demasiado cerca de la Tierra: los ríos se evaporaron, las selvas ardieron y amplias regiones de África quedaron calcinadas para siempre convertidas en desiertos de arena. Para impedir la destrucción total del universo, Zeus lanzó su rayo justiciero derribando a Faetón en el río Erídano».\n\n¿Por qué este relato es un MITO y no una leyenda?',
    questionHy: 'Կարդա հետևյալ տեքստը.\n\n«Ֆաետոնը՝ Արևի աստված Հելիոսի որդին, աղաչեց հորը, որ իրեն թույլ տա միայն մեկ օր վարել հրեղեն նժույգներով լծված երկնային կառքը: Երբ երիտասարդը ձեռքն առավ սանձերը, ձիերը խելագարվեցին: Կառքը չափազանց մոտեցավ Երկրին. գետերը գոլորշիացան, անտառներն այրվեցին, իսկ Աֆրիկայի հսկա տարածքներ մոխրացան՝ վերածվելով ավազոտ անապատների: Ողջ տիեզերքի կործանումը կանխելու համար Զևսը նետեց իր արդար կայծակը՝ Ֆաետոնին գահավիժեցնելով Էրիդանոս գետը»:\n\nԻնչո՞ւ է այս պատմությունը ԱՌԱՍՊԵԼ (Mito), ոչ թե ավանդազրույց (leyenda):',
    options: [
      { id: 'opt_1', textEs: 'Porque no ocurre en la historia humana real, participan dioses del Olimpo y explica el origen cósmico de los desiertos', textHy: 'Որովհետև տեղի չի ունենում իրական մարդկային պատմության մեջ, մասնակցում են Օլիմպոսի աստվածներ և բացատրում է անապատների ծագումը' },
      { id: 'opt_2', textEs: 'Porque está compuesto en verso octosílabo por campesinos', textHy: 'Որովհետև գյուղացիների կողմից հորինված է ութավանկ տողերով' },
      { id: 'opt_3', textEs: 'Porque tiene un autor español contemporáneo con nombre y apellidos', textHy: 'Որովհետև ունի անուն-ազգանունով ժամանակակից իսպանացի հեղինակ' },
      { id: 'opt_4', textEs: 'Porque es una noticia histórica verificada en periódicos', textHy: 'Որովհետև թերթերում հաստատված պատմական լուր է' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Es un MITO perfecto: sus personajes son deidades olímpicas (Helios, Faetón, Zeus), el escenario abarca todo el universo cósmico y su fin es dar una explicación sagrada al origen de elementos geográficos mundiales (los desiertos africanos provocados por el fuego del carro solar). Las leyendas, en cambio, tienen base histórica humana y local.',
    explanationHy: 'Սա կատարյալ ԱՌԱՍՊԵԼ է (Mito). կերպարները օլիմպիական աստվածներ են (Հելիոս, Ֆաետոն, Զևս), իսկ նպատակը տիեզերական երևույթների (Աֆրիկայի անապատների) ծագումը բացատրելն է: Ավանդազրույցները, ընդհակառակը, ունենում են տեղական պատմական մարդկային հիմք:',
    rememberRuleEs: 'Dioses + origen cósmico de desiertos y planetas = MITO (nunca leyenda).',
    rememberRuleHy: 'Աստվածներ + անապատների կամ մոլորակների տիեզերական ծագում = ԱՌԱՍՊԵԼ (երբեք ոչ ավանդազրույց):',
    followUpExample: { es: 'El mito de Narciso y el origen de la flor que lleva su nombre.', hy: 'Նարգիզի առասպելը և իր անունը կրող ծաղկի ծագումը:' }
  },
  {
    id: 'gtt_13',
    topicId: 'tema4',
    difficulty: 'facil',
    questionEs: 'Observa la disposición de las siguientes líneas:\n\n«Por una mirada, un mundo;\npor una sonrisa, un cielo;\npor un beso... ¡yo no sé\nqué te diera por un beso!»\n\n¿En qué forma literaria está escrito este texto?',
    questionHy: 'Ուշադիր նայիր հետևյալ տողերի դասավորությանը.\n\n«Por una mirada, un mundo;\npor una sonrisa, un cielo;\npor un beso... ¡yo no sé\nqué te diera por un beso!»\n\nԻ՞նչ գրական ձևով է գրված այս տեքստը:',
    options: [
      { id: 'opt_1', textEs: 'En verso (líneas cortas con métrica, ritmo musical y rima en las palabras finales)', textHy: 'Չափածո / Տողերով (կարճ տողեր՝ տաղաչափությամբ, երաժշտական ռիթմով և վերջին բառերի հանգով)' },
      { id: 'opt_2', textEs: 'En prosa narrativa continua hasta el borde de la página', textHy: 'Արձակ պատմողական ձևով՝ էջի եզրին հասնող անընդհատ տողերով' },
      { id: 'opt_3', textEs: 'En prosa científica sin figuras retóricas', textHy: 'Գիտական արձակով՝ առանց գեղարվեստական միջոցների' },
      { id: 'opt_4', textEs: 'En diálogo teatral sin verso ni ritmo', textHy: 'Թատերական երկխոսությամբ՝ առանց տողերի կամ ռիթմի' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Está escrito EN VERSO. Como explica la libreta escolar: las palabras reflejan una métrica y un ritmo determinados, no ocupan todo el ancho del renglón y se usan palabras finales repetidas para crear rima (cielo / beso, mundo / beso) y musicalidad.',
    explanationHy: 'Գրված է ՉԱՓԱԾՈՅՈՎ (Verso): Ինչպես նշված է տետրում. բառերն ունեն որոշակի տաղաչափություն և ռիթմ, չեն զբաղեցնում ամբողջ տողի լայնությունը, իսկ վերջին բառերը ստեղծում են հանգ և երաժշտականություն:',
    rememberRuleEs: 'Líneas cortas + métrica + ritmo y rima = TEXTO EN VERSO.',
    rememberRuleHy: 'Կարճ տողեր + տաղաչափություն + ռիթմ և հանգ = ՉԱՓԱԾՈ (Verso):',
    followUpExample: { es: 'Caminante, son tus huellas / el camino y nada más.', hy: 'Ճամփորդ, քո հետքերն են / ճանապարհը և ուրիշ ոչինչ:' }
  },
  {
    id: 'gtt_14',
    topicId: 'tema4',
    difficulty: 'facil',
    questionEs: 'Lee el siguiente texto:\n\n«En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, consumían las tres partes de su hacienda».\n\n¿En qué forma está escrito este texto y por qué?',
    questionHy: 'Կարդա հետևյալ տեքստը.\n\n«En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, consumían las tres partes de su hacienda».\n\nԻ՞նչ ձևով է գրված այս տեքստը և ինչո՞ւ:',
    options: [
      { id: 'opt_1', textEs: 'En prosa (lenguaje natural y continuo que llena los renglones hasta el margen sin medir sílabas ni buscar rima final)', textHy: 'Արձակ (բնական և շարունակական լեզու, որը լցնում է տողերը մինչև էջի լուսանցքը՝ առանց վանկերի հաշվարկի և վերջնահանգի)' },
      { id: 'opt_2', textEs: 'En verso alejandrino de catorce sílabas', textHy: 'Տասնչորս վանկանի ալեքսանդրյան չափածո տողերով' },
      { id: 'opt_3', textEs: 'En romance medieval con rima asonante en pares', textHy: 'Միջնադարյան ռոմանսով՝ զույգ տողերի ասոնանս հանգով' },
      { id: 'opt_4', textEs: 'En copla popular cantada en verso', textHy: 'Ժողովրդական չափածո երգվող քառյակով' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Está escrito EN PROSA: el comienzo universal de Don Quijote de la Mancha se escribe de forma continua de margen a margen, sin rima en las palabras finales ni medida fija de sílabas, empleando una cadencia natural y oraciones completas.',
    explanationHy: 'Գրված է ԱՐՁԱԿՈՎ (Prosa). «Դոն Կիխոտի» սկիզբը գրված է անընդհատ՝ լուսանցքից լուսանցք, առանց վերջնահանգի և առանց վանկերի հաշվարկի՝ օգտագործելով բնական խոսքի շարադրանք:',
    rememberRuleEs: 'Párrafos continuos hasta el margen + sin cómputo de sílabas ni rima = PROSA.',
    rememberRuleHy: 'Անընդհատ պարբերություններ մինչև լուսանցք + առանց վանկերի հաշվարկի և հանգի = ԱՐՁԱԿ (Prosa):',
    followUpExample: { es: 'Platero es pequeño, peludo, suave; tan blando por fuera que se diría todo de algodón.', hy: 'Պլատերոն փոքրիկ է, մազոտ, փափուկ. դրսից այնքան փափուկ, կարծես ամբողջը բամբակից լինի:' }
  },
  {
    id: 'gtt_15',
    topicId: 'tema1',
    difficulty: 'medio',
    questionEs: 'Lee esta composición tradicional:\n\n«¡Ay, que no, que no, que no!\n¡Que el barquito zozobró!\n¡Pim, pam, catapum en la mar!\n¡Oíd bien, marineros, lo que os he de contar:\nen las olas del estrecho\nun pececillo se puso a bailar!»\n\n¿A qué ámbito literario pertenece y qué rasgos lo delatan?',
    questionHy: 'Կարդա այս ավանդական ստեղծագործությունը.\n\n«¡Ay, que no, que no, que no!\n¡Que el barquito zozobró!\n¡Pim, pam, catapum en la mar!\n¡Oíd bien, marineros, lo que os he de contar:\nen las olas del estrecho\nun pececillo se puso a bailar!»\n\nԳրական ո՞ր բնագավառին է սա պատկանում և ո՞ր հատկանիշներն են դա մատնում:',
    options: [
      { id: 'opt_1', textEs: 'Literatura Popular (estribillo repetitivo, onomatopeyas "pim pam catapum", llamada al oyente "¡Oíd bien!" y carácter anónimo)', textHy: 'Ժողովրդական գրականություն (կրկներգ, «pim pam catapum» բնաձայնություններ, «¡Oíd bien!» կոչ ունկնդրին և անանուն բնույթ)' },
      { id: 'opt_2', textEs: 'Literatura Culta escrita en latín por un filósofo', textHy: 'Մշակված գրականություն՝ փիլիսոփայի կողմից լատիներենով գրված' },
      { id: 'opt_3', textEs: 'Mito clásico sobre el origen del océano', textHy: 'Դասական առասպել օվկիանոսի ծագման մասին' },
      { id: 'opt_4', textEs: 'Tratado científico de navegación moderna', textHy: 'Ժամանակակից նավագնացության գիտական տրակտատ' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Pertenece a la LITERATURA POPULAR: contiene los rasgos exactos de la libreta escolar: estribillos y repeticiones frecuentes, onomatopeyas o palabras que imitan sonidos («pim, pam, catapum»), llamadas directas de atención al receptor («¡Oíd bien!») y un tono coloquial y festivo propio de canciones tradicionales.',
    explanationHy: 'Պատկանում է ԺՈՂՈՎՐԴԱԿԱՆ ԳՐԱԿԱՆՈՒԹՅԱՆԸ. պարունակում է տետրի բոլոր հատկանիշները՝ հաճախակի կրկներգ, ձայներ նմանակող բնաձայնություններ («pim, pam, catapum»), ուղիղ կոչ ունկնդրին («¡Oíd bien!») և ժողովրդական երգին բնորոշ խոսակցական ոճ:',
    rememberRuleEs: 'Estribillos + Onomatopeyas («pim, pam») + Llamadas al oyente («¡Oíd!») = LITERATURA POPULAR.',
    rememberRuleHy: 'Կրկներգեր + Բնաձայնություններ + Կոչեր ունկնդրին («Լսե՛ք») = ԺՈՂՈՎՐԴԱԿԱՆ ԳՐԱԿԱՆՈՒԹՅՈՒՆ:',
    followUpExample: { es: 'Zamalacatín, chim pala, catachúmbala.', hy: 'Zamalacatín, chim pala, catachúmbala (տետրի օրինակը):' }
  },
  {
    id: 'gtt_16',
    topicId: 'tema3',
    difficulty: 'dificil',
    questionEs: 'Lee el siguiente soneto firmado por el ilustre poeta don Francisco de Quevedo:\n\n«Cerrar podrá mis ojos la postrera\nsombra que me llevare el blanco día,\ny podrá desatar esta alma mía\nhora a su afán ansioso lisonjera;\nmas no, de esotra parte, en la ribera,\ndejará la memoria, en donde ardía:\nnadar sabe mi llama la agua fría,\ny perder el respeto a ley severa».\n\n¿Por qué este texto es una muestra suprema de LITERATURA CULTA y no popular?',
    questionHy: 'Կարդա մեծահռչակ բանաստեղծ Դոն Ֆրանսիսկո դե Կևեդոյի ստորագրած հետևյալ սոնետը.\n\n«Cerrar podrá mis ojos la postrera\nsombra que me llevare el blanco día,\ny podrá desatar esta alma mía\nhora a su afán ansioso lisonjera;\nmas no, de esotra parte, en la ribera,\ndejará la memoria, en donde ardía:\nnadar sabe mi llama la agua fría,\ny perder el respeto a ley severa».\n\nԻնչո՞ւ է այս տեքստը ՄՇԱԿՎԱԾ (Culta) գրականության վառ օրինակ, ոչ թե ժողովրդական:',
    options: [
      { id: 'opt_1', textEs: 'Porque tiene un autor culto conocido (Quevedo), transmisión escrita e invariable en libros, léxico refinado y sintaxis compleja con hipérbatos', textHy: 'Որովհետև ունի հայտնի մշակված հեղինակ (Կևեդո), գրավոր անփոփոխ փոխանցում գրքերով, նուրբ բառապաշար և բարդ շարահյուսություն՝ հիպերբատոններով' },
      { id: 'opt_2', textEs: 'Porque es una canción anónima cantada en los mercados', textHy: 'Որովհետև շուկաներում երգվող անանուն երգ է' },
      { id: 'opt_3', textEs: 'Porque es un mito sobre la creación del sol', textHy: 'Որովհետև արևի արարման մասին առասպել է' },
      { id: 'opt_4', textEs: 'Porque es un cuento infantil con moraleja', textHy: 'Որովհետև մանկական հեքիաթ է՝ խրատով' }
    ],
    correctOptionId: 'opt_1',
    explanationEs: 'Es LITERATURA CULTA: obra de un autor célebre y consagrado (Francisco de Quevedo), difundida exclusivamente por escrito mediante imprenta, que utiliza una estructura métrica culta italiana (el soneto en endecasílabos), sintaxis elaboradísima con hipérbatos ("Cerrar podrá mis ojos la postrera sombra") y un léxico rico y reflexivo.',
    explanationHy: 'Սա ՄՇԱԿՎԱԾ ԳՐԱԿԱՆՈՒԹՅՈՒՆ է (Literatura culta). հայտնի մեծ հեղինակի (Կևեդո) գործ, տարածված բացառապես գրավոր տպագրությամբ, իտալական բարդ չափով (11 վանկանի սոնետ), շատ մշակված շարահյուսությամբ (հիպերբատոններ) և հարուստ խոհական բառապաշարով:',
    rememberRuleEs: 'Autor conocido (firmado) + texto escrito invariable + lenguaje elaborado y culto = LITERATURA CULTA.',
    rememberRuleHy: 'Հայտնի ստորագրված հեղինակ + գրավոր անփոփոխ տեքստ + մշակված գրական լեզու = ՄՇԱԿՎԱԾ ԳՐԱԿԱՆՈՒԹՅՈՒՆ (Culta):',
    followUpExample: { es: 'Góngora: Mientras por competir con tu cabello...', hy: 'Գոնգորա. «Քո վարսերի հետ մրցելու համար...»:' }
  }
];

