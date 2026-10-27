import { ConfusionItem, Question } from './types.ts';

export const CONFUSION_PAIRS: ConfusionItem[] = [
  {
    id: 'anafora_vs_epanadiplosis',
    title: 'Anáfora vs Epanadiplosis',
    titleHy: 'Անաֆորա ընդդեմ Էպանադիպլոզիսի',
    termA: {
      name: 'Anáfora',
      nameHy: 'Անաֆորա (սկզբնակրկնություն)',
      defEs: 'Repetición de la misma palabra al PRINCIPIO de varios versos o frases consecutivas.',
      defHy: 'Նույն բառի կրկնությունն է մի քանի հաջորդական տողերի ՍԿԶԲՈՒՄ:',
      keys: ['Varios versos seguidos', 'Siempre al comienzo (X... / X...)', 'Efecto de eco rítmico'],
      keysHy: ['Մի քանի տողեր իրար ետևից', 'Միշտ սկզբում (X... / X...)', 'Ռիթմիկ արձագանքի էֆեկտ'],
      example: {
        es: 'Temprano levantó la muerte...\nTemprano madrugó...',
        hy: 'Վաղ թռիչք առավ մահը...\nՎաղ լուսացավ...'
      }
    },
    termB: {
      name: 'Epanadiplosis',
      nameHy: 'Էպանադիպլոզիս (շրջափակող կրկնություն)',
      defEs: 'Comienza y termina el MISMO verso o frase con la misma palabra exacta.',
      defHy: 'ՄԻԵՎՆՈՒՅՆ տողը սկսվում և ավարտվում է ճիշտ նույն բառով:',
      keys: ['En un solo verso o enunciado', 'Principio y final (X ......... X)', 'Estructura de círculo cerrado'],
      keysHy: ['Մեկ տողի կամ նախադասության մեջ', 'Սկզբում և վերջում (X ......... X)', 'Փակ շրջանի կառուցվածք'],
      example: {
        es: 'Verde que te quiero verde.',
        hy: 'Կանաչ, քեզ կանաչ եմ սիրում, կանաչ:'
      }
    },
    keyDifferenceEs: 'La anáfora repite palabras al principio de versos distintos. La epanadiplosis abre y cierra un mismo verso con la misma palabra.',
    keyDifferenceHy: 'Անաֆորան բառերը կրկնում է տարբեր տողերի սկզբում: Էպանադիպլոզիսը նույն տողը սկսում և ավարտում է նույն բառով:',
    questions: [
      {
        id: 'conf_ae_1',
        topicId: 'tema6',
        difficulty: 'facil',
        questionEs: '¿Qué figura aparece en: "Palabras, se las lleva el viento, solo palabras"?',
        questionHy: 'Ո՞ր պատկերավորման միջոցն է առկա՝ «Palabras, se las lleva el viento, solo palabras»:',
        options: [
          { id: 'opt_1', textEs: 'Epanadiplosis (empieza y acaba con "palabras")', textHy: 'Էպանադիպլոզիս (սկսվում և ավարտվում է «palabras»-ով)' },
          { id: 'opt_2', textEs: 'Anáfora', textHy: 'Անաֆորա' },
          { id: 'opt_3', textEs: 'Asíndeton', textHy: 'Ասինդետոն' },
          { id: 'opt_4', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Es epanadiplosis porque la misma frase empieza con "Palabras" y termina con "palabras".',
        explanationHy: 'Սա էպանադիպլոզիս է, քանի որ նույն նախադասությունը սկսվում է «Palabras»-ով և ավարտվում «palabras»-ով:',
        rememberRuleEs: 'Epanadiplosis = empieza y termina con la misma palabra (X...X).',
        rememberRuleHy: 'Էպանադիպլոզիս = սկսվում և ավարտվում է նույն բառով (X...X):',
        followUpExample: { es: 'Silencio, la noche pide silencio.', hy: 'Լռություն, գիշերը պահանջում է լռություն:' }
      },
      {
        id: 'conf_ae_2',
        topicId: 'tema6',
        difficulty: 'facil',
        questionEs: '¿Qué figura aparece en:\n"Por una mirada, un mundo;\npor una sonrisa, un cielo"?',
        questionHy: 'Ո՞ր պատկերավորման միջոցն է առկա:\n«Por una mirada, un mundo;\npor una sonrisa, un cielo»',
        options: [
          { id: 'opt_1', textEs: 'Anáfora (repite "por una" al principio de cada verso)', textHy: 'Անաֆորա (կրկնում է «por una»-ն յուրաքանչյուր տողի սկզբում)' },
          { id: 'opt_2', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' },
          { id: 'opt_3', textEs: 'Polisíndeton', textHy: 'Պոլիսինդետոն' },
          { id: 'opt_4', textEs: 'Aliteración', textHy: 'Ալիտերացիա' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Es anáfora porque repite "por una" al principio de dos versos consecutivos.',
        explanationHy: 'Սա անաֆորա է, որովհետև «por una» բառակապակցությունը կրկնվում է երկու հաջորդական տողերի սկզբում:',
        rememberRuleEs: 'Anáfora = repetición al comienzo de varios versos.',
        rememberRuleHy: 'Անաֆորա = կրկնություն մի քանի տողերի սկզբում:',
        followUpExample: { es: 'Dile que venga, / dile que espere.', hy: 'Ասա՛ նրան, որ գա, / ասա՛ նրան, որ սպասի:' }
      },
      {
        id: 'conf_ae_3',
        topicId: 'tema6',
        difficulty: 'medio',
        questionEs: 'En el verso "Cómo era, Dios mío, cómo era", ¿qué recurso se emplea?',
        questionHy: '«Cómo era, Dios mío, cómo era» տողում ո՞ր գեղարվեստական միջոցն է գործածված:',
        options: [
          { id: 'opt_1', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' },
          { id: 'opt_2', textEs: 'Anáfora', textHy: 'Անաֆորա' },
          { id: 'opt_3', textEs: 'Pleonasmo', textHy: 'Պլեոնազմ' },
          { id: 'opt_4', textEs: 'Metáfora', textHy: 'Փոխաբերություն' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'El verso abre con "Cómo era" y concluye con "cómo era" en la misma línea.',
        explanationHy: 'Տողը բացվում է «Cómo era»-ով և ավարտվում «cómo era»-ով նույն տողում:',
        rememberRuleEs: 'Si empieza y termina igual en una sola línea, es epanadiplosis.',
        rememberRuleHy: 'Եթե մեկ տողում սկիզբն ու վերջը նույնն են, դա էպանադիպլոզիս է:',
        followUpExample: { es: 'Zarza tan dulce como zarza.', hy: 'Մորենի՝ այնքան քաղցր, որքան մորենին:' }
      },
      {
        id: 'conf_ae_4',
        topicId: 'tema6',
        difficulty: 'medio',
        questionEs: 'Lee: "Lloran las piedras, / lloran los árboles, / llora el arroyo". ¿Por qué NO es epanadiplosis?',
        questionHy: 'Կարդա. «Lloran las piedras, / lloran los árboles, / llora el arroyo»: Ինչո՞ւ սա էպանադիպլոզիս ՉԷ:',
        options: [
          { id: 'opt_1', textEs: 'Porque la repetición está al principio de varios versos, no al final del mismo', textHy: 'Որովհետև կրկնությունը մի քանի տողերի սկզբում է, ոչ թե նույն տողի վերջում' },
          { id: 'opt_2', textEs: 'Porque son versos octosílabos', textHy: 'Որովհետև ութավանկ տողեր են' },
          { id: 'opt_3', textEs: 'Porque no tiene rima consonante', textHy: 'Որովհետև կոնսոնանս հանգ չունի' },
          { id: 'opt_4', textEs: 'Porque es una prosa poética', textHy: 'Որովհետև պոետիկ արձակ է' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Es una anáfora perfecta. Para ser epanadiplosis tendría que terminar el verso con la palabra inicial.',
        explanationHy: 'Սա կատարյալ անաֆորա է: Էպանադիպլոզիս լինելու համար տողը պետք է ավարտվեր սկզբնական բառով:',
        rememberRuleEs: 'Anáfora = inicio de versos. Epanadiplosis = inicio + final de 1 verso.',
        rememberRuleHy: 'Անաֆորա = տողերի սկիզբ: Էպանադիպլոզիս = 1 տողի սկիզբ + ավարտ:',
        followUpExample: { es: 'Aquí nací, / aquí crecí.', hy: 'Այստեղ ծնվեցի, / այստեղ մեծացա:' }
      }
    ]
  },
  {
    id: 'asindeton_vs_polisindeton',
    title: 'Asíndeton vs Polisíndeton',
    titleHy: 'Ասինդետոն ընդդեմ Պոլիսինդետոնի',
    termA: {
      name: 'Asíndeton',
      nameHy: 'Ասինդետոն (առանց շաղկապների)',
      defEs: 'Supresión total de conjunciones ("y", "e", "ni"). Solo se usan comas para dar rapidez.',
      defHy: 'Շաղկապների («y», «e», «ni») բացարձակ բացթողում: Կիրառվում են միայն ստորակետներ՝ արագություն տալու համար:',
      keys: ['CERO conjunciones', 'Comas continuas (, , ,)', 'Ritmo rápido, ágil y urgente'],
      keysHy: ['ԶՐՈ շաղկապ', 'Անընդմեջ ստորակետներ (, , ,)', 'Արագ, ճկուն և հրատապ ռիթմ'],
      example: {
        es: 'Llegué, vi, vencí.',
        hy: 'Եկա, տեսա, հաղթեցի:'
      }
    },
    termB: {
      name: 'Polisíndeton',
      nameHy: 'Պոլիսինդետոն (շատ շաղկապներով)',
      defEs: 'Repetición intencionada de muchas conjunciones ("y... y... y..." o "ni... ni... ni...").',
      defHy: 'Բազմաթիվ շաղկապների նպատակային կրկնություն («y... y... y...» կամ «ni... ni... ni...»):',
      keys: ['MUCHAS conjunciones repetidas', 'Une cada elemento con "y" o "ni"', 'Ritmo lento, pesado y solemne'],
      keysHy: ['ՇԱՏ կրկնվող շաղկապներ', 'Յուրաքանչյուր բառ միացնում է «y» կամ «ni»-ով', 'Դանդաղ, ծանր և հանդիսավոր ռիթմ'],
      example: {
        es: 'Y ríe, y salta, y canta, y llora.',
        hy: 'Եվ ծիծաղում է, և ցատկում է, և երգում է, և լալիս է:'
      }
    },
    keyDifferenceEs: 'El asíndeton QUITA las conjunciones (da velocidad). El polisíndeton REPITE muchas conjunciones (da lentitud). Son opuestos exactos.',
    keyDifferenceHy: 'Ասինդետոնը ՀԱՆՈՒՄ Է շաղկապները (արագացնում է): Պոլիսինդետոնը ԿՐԿՆՈՒՄ Է բազմաթիվ շաղկապներ (դանդաղեցնում է): Դրանք ճիշտ հակառակն են:',
    questions: [
      {
        id: 'conf_ap_1',
        topicId: 'tema6',
        difficulty: 'facil',
        questionEs: '¿Qué figura hay en: "Ni come, ni duerme, ni habla, ni descansa"?',
        questionHy: 'Ո՞ր գեղարվեստական միջոցն է՝ «Ni come, ni duerme, ni habla, ni descansa»:',
        options: [
          { id: 'opt_1', textEs: 'Polisíndeton (repite la conjunción "ni")', textHy: 'Պոլիսինդետոն (կրկնում է «ni» շաղկապը)' },
          { id: 'opt_2', textEs: 'Asíndeton', textHy: 'Ասինդետոն' },
          { id: 'opt_3', textEs: 'Aliteración', textHy: 'Ալիտերացիա' },
          { id: 'opt_4', textEs: 'Epanadiplosis', textHy: 'Էպանադիպլոզիս' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'La repetición de la conjunción "ni" ante cada verbo es un polisíndeton claro.',
        explanationHy: 'Յուրաքանչյուր բայից առաջ «ni» շաղկապի կրկնությունը ակնհայտ պոլիսինդետոն է:',
        rememberRuleEs: 'Polisíndeton = Poli (muchas) conjunciones.',
        rememberRuleHy: 'Պոլիսինդետոն = Պոլի (շատ) շաղկապներ:',
        followUpExample: { es: 'Y habla y ríe y salta sin parar.', hy: 'Եվ խոսում է, և ծիծաղում, և անդադար ցատկոտում:' }
      },
      {
        id: 'conf_ap_2',
        topicId: 'tema6',
        difficulty: 'facil',
        questionEs: '¿Qué figura hay en: "Corre, salta, vuela, esquiva el peligro"?',
        questionHy: 'Ո՞ր պատկերավորման միջոցն է՝ «Corre, salta, vuela, esquiva el peligro»:',
        options: [
          { id: 'opt_1', textEs: 'Asíndeton (no hay conjunciones, solo comas)', textHy: 'Ասինդետոն (չկան շաղկապներ, միայն ստորակետներ)' },
          { id: 'opt_2', textEs: 'Polisíndeton', textHy: 'Պոլիսինդետոն' },
          { id: 'opt_3', textEs: 'Pleonasmo', textHy: 'Պլեոնազմ' },
          { id: 'opt_4', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'No hay ninguna "y" ni enlace entre los verbos; se enlazan solo con comas para dar velocidad.',
        explanationHy: 'Բայերի միջև չկա ոչ մի «y» կամ կապ. դրանք միացված են միայն ստորակետներով՝ արագություն տալու համար:',
        rememberRuleEs: 'Asíndeton = A (sin) síndeton (enlaces).',
        rememberRuleHy: 'Ասինդետոն = Ա (առանց) շաղկապների:',
        followUpExample: { es: 'Rendí, rompí, vencí.', hy: 'Նվաճեցի, կոտրեցի, հաղթեցի:' }
      },
      {
        id: 'conf_ap_3',
        topicId: 'tema6',
        difficulty: 'medio',
        questionEs: '¿Cuál es el efecto expresivo del asíndeton en un texto?',
        questionHy: 'Ո՞րն է ասինդետոնի արտահայտչական ազդեցությունը տեքստում:',
        options: [
          { id: 'opt_1', textEs: 'Dar dinamismo, rapidez y sensación de urgencia', textHy: 'Հաղորդել դինամիզմ, արագություն և հրատապության զգացում' },
          { id: 'opt_2', textEs: 'Dar lentitud y tono pesado', textHy: 'Հաղորդել դանդաղություն և ծանր երանգ' },
          { id: 'opt_3', textEs: 'Imitar el sonido de animales', textHy: 'Նմանակել կենդանիների ձայները' },
          { id: 'opt_4', textEs: 'Crear rima consonante', textHy: 'Ստեղծել կոնսոնանս հանգ' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Al quitar las conjunciones, las acciones se suceden sin pausa, transmitiendo gran velocidad.',
        explanationHy: 'Շաղկապները հանելով՝ գործողությունները հաջորդում են առանց դադարի՝ փոխանցելով մեծ արագություն:',
        rememberRuleEs: 'Asíndeton acelera el ritmo; polisíndeton lo frena.',
        rememberRuleHy: 'Ասինդետոնն արագացնում է ռիթմը, պոլիսինդետոնը՝ դանդաղեցնում:',
        followUpExample: { es: 'Acude, corre, vuela.', hy: 'Հասի՛ր, վազի՛ր, թռի՛ր:' }
      }
    ]
  },
  {
    id: 'mito_vs_leyenda',
    title: 'Mito vs Leyenda',
    titleHy: 'Առասպել ընդդեմ Ավանդազրույցի',
    termA: {
      name: 'Mito',
      nameHy: 'Առասպել (Mito)',
      defEs: 'Relato sagrado protagonizado por dioses o semidioses que explica el origen del universo o de la naturaleza.',
      defHy: 'Սրբազան պատմություն աստվածների մասին, որը բացատրում է տիեզերքի կամ բնության երևույթների ծագումը:',
      keys: ['Dioses, titanes y héroes sobrenaturales', 'Explica el origen del mundo / estaciones', 'Tiempo sagrado, fuera de la historia humana'],
      keysHy: ['Աստվածներ, տիտաններ և գերբնական հերոսներ', 'Բացատրում է աշխարհի / եղանակների ծագումը', 'Սրբազան ժամանակ՝ մարդկային պատմությունից դուրս'],
      example: {
        es: 'Apolo y el carro del Sol.',
        hy: 'Ապոլոնը և Արևի կառքը:'
      }
    },
    termB: {
      name: 'Leyenda',
      nameHy: 'Ավանդազրույց (Leyenda)',
      defEs: 'Relato con base histórica real (un personaje, castillo o pueblo existente) mezclado con elementos fantásticos.',
      defHy: 'Իրական պատմական հիմքով պատմություն (իրական անձ, ամրոց կամ գյուղ), որը միահյուսված է կախարդական տարրերով:',
      keys: ['Base histórica real (castillos, reyes, caballeros)', 'Lugar geográfico concreto (Soria, Toledo)', 'Fantasmas, apariciones o milagros'],
      keysHy: ['Իրական պատմական հիմք (ամրոցներ, արքաներ)', 'Կոնկրետ աշխարհագրական վայր (Սորիա, Տոլեդո)', 'Ուրվականներ, հայտնություններ կամ հրաշքներ'],
      example: {
        es: 'El monte de las Ánimas de Bécquer en Soria.',
        hy: 'Բեկերի «Հոգիների բլուրը» Սորիայում:'
      }
    },
    keyDifferenceEs: 'El mito está protagonizado por DIOSES y explica el cosmos. La leyenda parte de un HECHO O LUGAR HISTÓRICO REAL con añadidos mágicos.',
    keyDifferenceHy: 'Առասպելի հերոսներն ԱՍՏՎԱԾՆԵՐՆ են և բացատրում են տիեզերքը: Ավանդազրույցը հիմնվում է ԻՐԱԿԱՆ ՊԱՏՄԱԿԱՆ ՎԱՅՐԻ ԿԱՄ ԴԵՄՔԻ վրա:',
    questions: [
      {
        id: 'conf_ml_1',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: 'Una historia que explica por qué llueve mediante la tristeza de la diosa Deméter es un...',
        questionHy: 'Պատմությունը, որը բացատրում է անձրևի պատճառը Դեմետրա աստվածուհու տխրությամբ, դա...',
        options: [
          { id: 'opt_1', textEs: 'Mito (protagonizado por una diosa y explica un fenómeno natural)', textHy: 'Առասպել (գլխավոր հերոսն աստվածուհի է և բացատրում է բնության երևույթ)' },
          { id: 'opt_2', textEs: 'Leyenda', textHy: 'Ավանդազրույց' },
          { id: 'opt_3', textEs: 'Romance', textHy: 'Ռոմանս' },
          { id: 'opt_4', textEs: 'Cuento de hadas', textHy: 'Հեքիաթ' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Los relatos con dioses que explican fenómenos cósmicos o de la naturaleza son mitos.',
        explanationHy: 'Աստվածների մասնակցությամբ պատմությունները, որոնք բացատրում են բնության երևույթները, առասպելներ են:',
        rememberRuleEs: 'Dioses + explicación del mundo = Mito.',
        rememberRuleHy: 'Աստվածներ + աշխարհի բացատրություն = Առասպել (Mito):',
        followUpExample: { es: 'El mito de Ícaro y el Sol.', hy: 'Իկարոսի և Արևի առասպելը:' }
      },
      {
        id: 'conf_ml_2',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: 'Una narración sobre un caballero medieval en el castillo de Toledo que ve el fantasma de una dama es una...',
        questionHy: 'Պատմություն Տոլեդոյի ամրոցի միջնադարյան ասպետի մասին, ով տեսնում է տիկնոջ ուրվականը, դա...',
        options: [
          { id: 'opt_1', textEs: 'Leyenda (lugar histórico real + elementos sobrenaturales)', textHy: 'Ավանդազրույց (իրական պատմական վայր + գերբնական տարրեր)' },
          { id: 'opt_2', textEs: 'Mito', textHy: 'Առասպել' },
          { id: 'opt_3', textEs: 'Fábula', textHy: 'Առակ' },
          { id: 'opt_4', textEs: 'Poema lírico', textHy: 'Քնարական բանաստեղծություն' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Tiene marco histórico real (Toledo, época medieval) mezclado con misterio: es una leyenda.',
        explanationHy: 'Ունի իրական պատմական շրջանակ (Տոլեդո, միջնադար)՝ միահյուսված առեղծվածի հետ. դա ավանդազրույց է:',
        rememberRuleEs: 'Lugar real + misterio sobrenatural = Leyenda.',
        rememberRuleHy: 'Իրական վայր + գերբնական առեղծված = Ավանդազրույց (Leyenda):',
        followUpExample: { es: 'La leyenda de los amantes de Teruel.', hy: 'Տերուելի սիրահարների ավանդազրույցը:' }
      }
    ]
  },
  {
    id: 'popular_vs_culta',
    title: 'Literatura Popular vs Literatura Culta',
    titleHy: 'Ժողովրդական գրականություն ընդդեմ Մշակված գրականության',
    termA: {
      name: 'Literatura Popular',
      nameHy: 'Ժողովրդական գրականություն',
      defEs: 'Obras de origen tradicional, creadas por el pueblo, anónimas y transmitidas oralmente con variantes.',
      defHy: 'Ժողովրդի կողմից ստեղծված ավանդական գործեր, անանուն են, փոխանցվում են բանավոր՝ տարբերակներով:',
      keys: ['Autor anónimo', 'Transmisión oral (de boca en boca)', 'Existen muchas variantes'],
      keysHy: ['Անանուն հեղինակ', 'Բանավոր փոխանցում (բերանից բերան)', 'Կան բազմաթիվ տարբերակներ'],
      example: {
        es: 'Canciones populares y romances anónimos.',
        hy: 'Ժողովրդական երգեր և անանուն ռոմանսներ:'
      }
    },
    termB: {
      name: 'Literatura Culta',
      nameHy: 'Մշակված գրականություն',
      defEs: 'Obras creadas por un autor conocido, transmitidas por escrito en libros y con lenguaje muy elaborado.',
      defHy: 'Հայտնի հեղինակի կողմից ստեղծված գործեր, տարածվում են գրքերով և ունեն շատ մշակված լեզու:',
      keys: ['Autor conocido con nombre', 'Transmisión escrita (fija, sin variantes)', 'Lenguaje elaborado y recursos complejos'],
      keysHy: ['Հայտնի հեղինակ անունով', 'Գրավոր փոխանցում (անփոփոխ)', 'Մշակված լեզու և բարդ պատկերավորում'],
      example: {
        es: 'Don Quijote de la Mancha de Cervantes.',
        hy: 'Սերվանտեսի «Դոն Կիխոտը»:'
      }
    },
    keyDifferenceEs: 'La popular es anónima y oral con variantes. La culta tiene autor conocido y se transmite fija por escrito.',
    keyDifferenceHy: 'Ժողովրդականն անանուն է, բանավոր և տարբերակներով: Մշակվածն ունի հայտնի հեղինակ և փոխանցվում է գրավոր:',
    questions: [
      {
        id: 'conf_pc_1',
        topicId: 'tema3',
        difficulty: 'facil',
        questionEs: 'Si una obra se transmite oralmente de abuelos a nietos y no tiene autor conocido, pertenece a la...',
        questionHy: 'Եթե ստեղծագործությունը բանավոր փոխանցվում է պապիկներից թոռներին և չունի հայտնի հեղինակ, այն պատկանում է...',
        options: [
          { id: 'opt_1', textEs: 'Literatura popular', textHy: 'Ժողովրդական գրականությանը' },
          { id: 'opt_2', textEs: 'Literatura culta', textHy: 'Մշակված գրականությանը' },
          { id: 'opt_3', textEs: 'Novela moderna', textHy: 'Ժամանակակից վեպին' },
          { id: 'opt_4', textEs: 'Crónica periodística', textHy: 'Լրագրողական քրոնիկոնին' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'La transmisión oral y el anonimato son los dos rasgos definitivos de la literatura popular.',
        explanationHy: 'Բանավոր փոխանցումը և անանունությունը ժողովրդական գրականության երկու գլխավոր հատկանիշներն են:',
        rememberRuleEs: 'Oral + Anónimo = Literatura Popular.',
        rememberRuleHy: 'Բանավոր + Անանուն = Ժողովրդական գրականություն:',
        followUpExample: { es: 'Refranes y canciones de cuna.', hy: 'Ասացվածքներ և օրորոցայիններ:' }
      },
      {
        id: 'conf_pc_2',
        topicId: 'tema3',
        difficulty: 'medio',
        questionEs: '¿Por qué las obras de literatura popular presentan variantes y las cultas no?',
        questionHy: 'Ինչո՞ւ ժողովրդական գրականության գործերն ունեն տարբերակներ, իսկ մշակվածները՝ ոչ:',
        options: [
          { id: 'opt_1', textEs: 'Porque la memoria oral modifica el texto con el tiempo, mientras la escrita queda fija', textHy: 'Որովհետև բանավոր հիշողությունը ժամանակի ընթացքում փոխում է տեքստը, իսկ գրավորը մնում է անփոփոխ' },
          { id: 'opt_2', textEs: 'Porque en la literatura culta no se usan metáforas', textHy: 'Որովհետև մշակված գրականության մեջ փոխաբերություններ չեն օգտագործվում' },
          { id: 'opt_3', textEs: 'Porque las populares siempre riman en consonante', textHy: 'Որովհետև ժողովրդականները միշտ կոնսոնանս են հանգավորվում' },
          { id: 'opt_4', textEs: 'Porque la literatura culta solo se canta', textHy: 'Որովհետև մշակված գրականությունը միայն երգվում է' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'La transmisión oral depende de la memoria y la gente añade o cambia versos; el libro escrito fija el texto para siempre.',
        explanationHy: 'Բանավոր փոխանցումը կախված է հիշողությունից, և մարդիկ փոխում են տողերը, մինչդեռ գիրքը տեքստն անփոփոխ է պահում:',
        rememberRuleEs: 'Oral = Variantes. Escrito = Texto fijo.',
        rememberRuleHy: 'Բանավոր = Տարբերակներ: Գրավոր = Անփոփոխ տեքստ:',
        followUpExample: { es: 'Dos pueblos cantan el mismo romance con letras distintas.', hy: 'Երկու գյուղ երգում են նույն ռոմանսը՝ տարբեր բառերով:' }
      }
    ]
  },
  {
    id: 'prosa_vs_verso',
    title: 'Prosa vs Verso',
    titleHy: 'Արձակ ընդդեմ Չափածոյի',
    termA: {
      name: 'Prosa',
      nameHy: 'Արձակ (Prosa)',
      defEs: 'Forma natural de expresión que ocupa todo el renglón de margen a margen, sin número fijo de sílabas ni rima.',
      defHy: 'Արտահայտման բնական ձև, որը զբաղեցնում է ամբողջ տողը լուսանցքից լուսանցք՝ առանց վանկերի հաստատուն թվի կամ հանգի:',
      keys: ['Ocupa todo el renglón continuo', 'Párrafos y puntos', 'Sin métrica silábica fija'],
      keysHy: ['Զբաղեցնում է ամբողջ տողը', 'Պարբերություններ և վերջակետեր', 'Առանց հաստատուն վանկաչափի'],
      example: {
        es: 'El río bajaba crecido y los pastores recogieron el rebaño con prisa.',
        hy: 'Գետը վարարել էր, և հովիվներն արագ հավաքեցին հոտը:'
      }
    },
    termB: {
      name: 'Verso',
      nameHy: 'Չափածո (Verso)',
      defEs: 'Forma poética escrita en líneas cortas que tienen un ritmo musical propio, medida silábica y a menudo rima.',
      defHy: 'Կարճ տողերով գրված պոետիկ ձև, որն ունի յուրահատուկ երաժշտական ռիթմ, վանկերի չափ և հաճախ՝ հանգ:',
      keys: ['Líneas cortas independientes', 'Ritmo y musicalidad', 'Frecuentemente con rima (asonante o consonante)'],
      keysHy: ['Կարճ առանձին տողեր', 'Ռիթմ և երաժշտականություն', 'Հաճախ հանգավորված (ասոնանս կամ կոնսոնանս)'],
      example: {
        es: 'Caminante, son tus huellas / el camino y nada más.',
        hy: 'Ճամփորդ, քո հետքերն են / ճանապարհը և ոչինչ ավելին:'
      }
    },
    keyDifferenceEs: 'La prosa no se mide en sílabas y ocupa el renglón completo. El verso se escribe en renglones cortos con ritmo y cómputo silábico.',
    keyDifferenceHy: 'Արձակը վանկերով չի չափվում և զբաղեցնում է ողջ տողը: Չափածոն գրվում է կարճ տողերով՝ ռիթմով և վանկերի հաշվարկով:',
    questions: [
      {
        id: 'conf_pv_1',
        topicId: 'tema4',
        difficulty: 'facil',
        questionEs: '¿Qué rasgo distingue visualmente al verso en una página?',
        questionHy: 'Ո՞ր հատկանիշն է էջի վրա տեսողականորեն տարբերում չափածոն:',
        options: [
          { id: 'opt_1', textEs: 'Se escribe en líneas cortas que no ocupan todo el renglón', textHy: 'Գրվում է կարճ տողերով, որոնք չեն զբաղեցնում ամբողջ տողը' },
          { id: 'opt_2', textEs: 'Siempre lleva letras mayúsculas al final', textHy: 'Միշտ վերջում մեծատառեր ունի' },
          { id: 'opt_3', textEs: 'No tiene puntos ni comas', textHy: 'Չունի վերջակետեր կամ ստորակետներ' },
          { id: 'opt_4', textEs: 'Solo se escribe en latín', textHy: 'Գրվում է միայն լատիներենով' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'El verso se dispone en líneas cortas (versos) agrupadas en estrofas.',
        explanationHy: 'Չափածոն դասավորվում է կարճ տողերով (versos)՝ խմբավորված տների մեջ:',
        rememberRuleEs: 'Verso = líneas cortas con ritmo.',
        rememberRuleHy: 'Չափածո = կարճ տողեր ռիթմով:',
        followUpExample: { es: 'Verde viento. Verdes ramas.', hy: 'Կանաչ քամի: Կանաչ ճյուղեր:' }
      }
    ]
  },
  {
    id: 'asindeton_vs_enumeracion',
    title: 'Asíndeton vs Enumeración',
    titleHy: 'Ասինդետոն ընդդեմ Թվարկման',
    termA: {
      name: 'Asíndeton',
      nameHy: 'Ասինդետոն',
      defEs: 'Omisión estricta de las conjunciones coordinantes ("y", "o", "ni") para acelerar el ritmo.',
      defHy: 'Համադասական շաղկապների («y», «ու») խիստ բացթողում՝ ռիթմն արագացնելու համար:',
      keys: ['Suprime enlaces habituales', 'Foco en la velocidad y dinamismo', 'Separa con comas'],
      keysHy: ['Բաց է թողնում սովորական կապերը', 'Կենտրոնանում է արագության վրա', 'Անջատում է ստորակետներով'],
      example: {
        es: 'Rendí, rompí, derribé.',
        hy: 'Նվաճեցի, կոտրեցի, տապալեցի:'
      }
    },
    termB: {
      name: 'Enumeración',
      nameHy: 'Թվարկում',
      defEs: 'Lista acumulativa de elementos pertenecientes a un mismo campo o categoría (puede llevar "y" al final).',
      defHy: 'Միևնույն ոլորտի տարրերի կուտակային ցանկ (կարող է վերջում ունենալ «y» շաղկապ):',
      keys: ['Acumulación descriptiva de objetos/cualidades', 'Pertenecen a una misma familia de ideas', 'Suele cerrar con "y" (A, B, C y D)'],
      keysHy: ['Առարկաների կամ հատկանիշների նկարագրական կուտակում', 'Պատկանում են նույն իմաստային դաշտին', 'Սովորաբար փակվում է «y»-ով (A, B, C y D)'],
      example: {
        es: 'Había mesas, sillas, platos y vasos.',
        hy: 'Կային սեղաններ, աթոռներ, ափսեներ և բաժակներ:'
      }
    },
    keyDifferenceEs: 'La enumeración hace una lista descriptiva (suele llevar "y" al final). El asíndeton PROHÍBE las conjunciones para dar urgencia.',
    keyDifferenceHy: 'Թվարկումը նկարագրական ցանկ է կազմում (հաճախ վերջում «y»-ով): Ասինդետոնը ԽԻՍՏ ԲԱՑԱՌՈՒՄ Է շաղկապները:',
    questions: [
      {
        id: 'conf_ae_enum_1',
        topicId: 'tema6',
        difficulty: 'medio',
        questionEs: 'En: "Compró manzanas, peras, plátanos y uvas", ¿por qué NO es asíndeton?',
        questionHy: '«Compró manzanas, peras, plátanos y uvas» նախադասության մեջ ինչո՞ւ սա ասինդետոն ՉԷ:',
        options: [
          { id: 'opt_1', textEs: 'Porque incluye la conjunción "y" antes de "uvas" en una enumeración normal', textHy: 'Որովհետև սովորական թվարկման մեջ ներառում է «y» շաղկապը «uvas»-ից առաջ' },
          { id: 'opt_2', textEs: 'Porque son frutas y no personas', textHy: 'Որովհետև մրգեր են, ոչ թե մարդիկ' },
          { id: 'opt_3', textEs: 'Porque es una metáfora', textHy: 'Որովհետև սա փոխաբերություն է' },
          { id: 'opt_4', textEs: 'Porque no tiene adjetivos', textHy: 'Որովհետև ածականներ չունի' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Es una enumeración ordinaria cerrada con la conjunción "y". En el asíndeton se habría dicho: "manzanas, peras, plátanos, uvas".',
        explanationHy: 'Սա սովորական թվարկում է՝ փակված «y» շաղկապով: Ասինդետոնում կլիներ՝ «manzanas, peras, plátanos, uvas» (առանց y-ի):',
        rememberRuleEs: 'Si lleva "y" al final, es enumeración normal, no asíndeton.',
        rememberRuleHy: 'Եթե վերջում ունի «y», ապա սովորական թվարկում է, ոչ թե ասինդետոն:',
        followUpExample: { es: 'Día, noche, aurora. (Asíndeton puro)', hy: 'Ցերեկ, գիշեր, արշալույս (զուտ ասինդետոն):' }
      }
    ]
  },
  {
    id: 'metafora_estructuras',
    title: 'Metáfora: A es B vs B de A vs B en lugar de A',
    titleHy: 'Փոխաբերության 3 կառուցվածքները',
    termA: {
      name: 'A es B / B de A (Impura / Preposicional)',
      nameHy: 'A es B / B de A (Ակնհայտ փոխաբերություն)',
      defEs: 'Aparecen explícitamente tanto el término real (A) como el imaginario (B).',
      defHy: 'Բացահայտ նշվում են և՛ իրական եզրը (A), և՛ երևակայականը (B):',
      keys: ['A es B: "Tus ojos (A) son estrellas (B)"', 'B de A: "Las perlas (B) de tu boca (A)"', 'Fácil de identificar ambos términos'],
      keysHy: ['A es B՝ «Քո աչքերը (A) աստղեր են (B)»', 'B de A՝ «Քո բերանի (A) մարգարիտները (B)»', 'Հեշտ է ճանաչել երկու եզրերը'],
      example: {
        es: 'Tus ojos son luceros / El oro de tus cabellos.',
        hy: 'Քո աչքերը լուսատուներ են / Քո մազերի ոսկին:'
      }
    },
    termB: {
      name: 'B en lugar de A (Metáfora Pura)',
      nameHy: 'B en lugar de A (Զուտ փոխաբերություն)',
      defEs: 'Solo aparece el término imaginario (B). El término real (A) se oculta por completo.',
      defHy: 'Նշվում է ՄԻԱՅՆ երևակայական եզրը (B): Իրական եզրը (A) լիովին թաքնված է:',
      keys: ['Solo se lee B en el texto', 'A se deduce por el contexto', 'Máximo valor poético y sugerencia'],
      keysHy: ['Տեքստում կարդացվում է միայն B-ն', 'A-ն կռահվում է ենթատեքստից', 'Բարձրագույն բանաստեղծական արժեք'],
      example: {
        es: 'Las perlas brillaban cuando sonreía. (perlas = dientes)',
        hy: 'Մարգարիտները շողում էին, երբ նա ժպտում էր (մարգարիտներ = ատամներ):'
      }
    },
    keyDifferenceEs: 'En "A es B" y "B de A" ves los dos términos escritos. En la metáfora pura (B en lugar de A) el término real no se escribe.',
    keyDifferenceHy: '«A es B» և «B de A» ձևերում երկու եզրերն էլ գրված են: Զուտ փոխաբերության մեջ (B en lugar de A) իրական եզրը չի գրվում:',
    questions: [
      {
        id: 'conf_meta_1',
        topicId: 'tema7',
        difficulty: 'medio',
        questionEs: 'En: "Las perlas de tu boca me deslumbraron", ¿qué estructura de metáfora se utiliza?',
        questionHy: '«Las perlas de tu boca me deslumbraron» նախադասության մեջ փոխաբերության ո՞ր կառուցվածքն է օգտագործված:',
        options: [
          { id: 'opt_1', textEs: 'Estructura "B de A" (perlas [B] de tu boca [A])', textHy: '«B de A» կառուցվածք (perlas [B] de tu boca [A])' },
          { id: 'opt_2', textEs: 'Estructura "A es B"', textHy: '«A es B» կառուցվածք' },
          { id: 'opt_3', textEs: 'Metáfora pura (B en lugar de A)', textHy: 'Զուտ փոխաբերություն (B-ն A-ի փոխարեն)' },
          { id: 'opt_4', textEs: 'Comparación con "como"', textHy: 'Համեմատություն «como»-ով' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Une el término imaginario (perlas) al real (boca/dientes) mediante la preposición "de".',
        explanationHy: 'Միացնում է երևակայական եզրը (perlas) իրականին (boca/dientes) «de» նախդիրի միջոցով:',
        rememberRuleEs: 'Término B + de + Término A = Estructura B de A.',
        rememberRuleHy: 'B եզր + de + A եզր = «B de A» կառուցվածք:',
        followUpExample: { es: 'El fuego de su pasión.', hy: 'Նրա կրքի կրակը:' }
      },
      {
        id: 'conf_meta_2',
        topicId: 'tema7',
        difficulty: 'dificil',
        questionEs: 'En el verso "El manto blanco cubrió la ciudad", donde "manto blanco" se refiere a la nieve sin nombrarla, ¿qué tipo es?',
        questionHy: '«El manto blanco cubrió la ciudad» տողում, որտեղ «manto blanco» (սպիտակ թիկնոց) վերաբերում է ձյանը՝ առանց այն նշելու, ո՞ր տեսակն է:',
        options: [
          { id: 'opt_1', textEs: 'Metáfora pura (B en lugar de A, la nieve no se nombra)', textHy: 'Զուտ փոխաբերություն (B-ն A-ի փոխարեն, ձյունը չի նշվում)' },
          { id: 'opt_2', textEs: 'Estructura A es B', textHy: '«A es B» կառուցվածք' },
          { id: 'opt_3', textEs: 'Aliteración', textHy: 'Ալիտերացիա' },
          { id: 'opt_4', textEs: 'Hipérbaton', textHy: 'Հիպերբատոն' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Es metáfora pura porque el término real (nieve) no aparece en el texto, solo el imaginario (manto blanco).',
        explanationHy: 'Սա զուտ փոխաբերություն է, որովհետև իրական եզրը (nieve - ձյուն) բացակայում է, կա միայն երևակայականը (manto blanco):',
        rememberRuleEs: 'Si el término real desaparece por completo = Metáfora pura.',
        rememberRuleHy: 'Եթե իրական եզրը լիովին բացակայում է = Զուտ փոխաբերություն (Metáfora pura):',
        followUpExample: { es: 'La nave dorada surca el cielo. (nave dorada = sol)', hy: 'Ոսկե նավը ճեղքում է երկինքը (ոսկե նավ = արև):' }
      }
    ]
  }
];
