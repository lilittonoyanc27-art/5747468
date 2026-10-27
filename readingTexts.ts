import { ReadingText } from './types.ts';

export const READING_TEXTS: ReadingText[] = [
  {
    id: 'text_1_leyenda_becquer',
    titleEs: 'El misterio del Monte de las Ánimas',
    titleHy: 'Հոգիների բլրի առեղծվածը',
    genre: 'leyenda',
    wordCount: 220,
    sentences: [
      {
        es: 'La noche de difuntos envolvía la antigua ciudad de Soria con una densa niebla fría.',
        hy: 'Մեռելոցի գիշերը խիտ ու սառը մառախուղով պատել էր հնագույն Սորիա քաղաքը:'
      },
      {
        es: 'Alonso y su prima Beatriz cabalgaban de regreso al palacio tras una larga jornada de caza por el espeso monte.',
        hy: 'Ալոնսոն և նրա զարմուհի Բեատրիսը ձիերով վերադառնում էին պալատ՝ խիտ անտառում որսի երկար օրվանից հետո:'
      },
      {
        es: '—Apresuremos el paso, Beatriz —dijo el joven caballero con voz inquieta—, pues se acerca la hora en que doblan las campanas.',
        hy: '—Եկ արագացնենք քայլերը, Բեատրի՛ս,— ասաց երիտասարդ ասպետը անհանգիստ ձայնով,— քանի որ մոտենում է ժամը, երբ կհնչեն զանգերը:'
      },
      {
        es: 'Cuentan los viejos pastores que en esta noche trágica los esqueletos de los caballeros templarios se levantan de sus tumbas cubiertas de musgo.',
        hy: 'Ծեր հովիվները պատմում են, որ այս ողբերգական գիշերը տամպլիեր ասպետների կմախքները հառնում են մամռապատ գերեզմաններից:'
      },
      {
        es: 'Dicen que corren a la par de las fieras aullando en la oscuridad entre las sombras de las encinas.',
        hy: 'Ասում են, որ նրանք վայրի գազանների հետ միասին վազում են՝ ոռնալով մթության մեջ կաղնիների ստվերների արանքում:'
      },
      {
        es: 'La hermosa doncella sonrió con desdén y orgullo, sin dar crédito a los antiguos temores del pueblo castellano.',
        hy: 'Գեղեցիկ օրիորդը արհամարհանքով և հպարտությամբ ժպտաց՝ չհավատալով կաստիլիական ժողովրդի հինավուրց վախերին:'
      },
      {
        es: 'Sin embargo, al llegar al castillo, Beatriz descubrió horrorizada que había extraviado en el monte su hermosa banda azul.',
        hy: 'Սակայն, ամրոց հասնելով, Բեատրիսը սարսափով հայտնաբերեց, որ բլրի վրա կորցրել է իր գեղեցիկ կապույտ ժապավենը:'
      },
      {
        es: 'Para demostrar su valentía inquebrantable, Alonso decidió volver solo en medio de la penumbra más helada.',
        hy: 'Իր անսասան քաջությունն ապացուցելու համար Ալոնսոն որոշեց միայնակ ետ վերադառնալ ամենասառցե խավարի մեջ:'
      },
      {
        es: 'El viento aullaba como un lobo hambriento y las ramas crujían bajo el galope desesperado de su caballo.',
        hy: 'Քամին ոռնում էր սոված գայլի պես, իսկ ճյուղերը ճռճռում էին նրա ձիու հուսահատ սրընթաց քայլերի տակ:'
      },
      {
        es: 'A la mañana siguiente, cuando despertó Beatriz, encontró la banda ensangrentada sobre su reclinatorio.',
        hy: 'Հաջորդ առավոտյան, երբ Բեատրիսն արթնացավ, իր աղոթարանի վրա գտավ արյունոտված ժապավենը:'
      }
    ],
    questions: [
      {
        id: 'q_becquer_1',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: '1. [Comprensión lectora] ¿Qué festividad o fecha marca el inicio del relato?',
        questionHy: '1. [Ընթերցանության ըմբռնում] Ո՞ր տոնն է նշում պատմության սկիզբը:',
        options: [
          { id: 'opt_1', textEs: 'La noche de difuntos (Todos los Santos)', textHy: 'Մեռելոցի գիշերը (Բոլոր Սրբերի տոնը)' },
          { id: 'opt_2', textEs: 'La víspera de Navidad', textHy: 'Սուրբ Ծննդյան նախօրյակը' },
          { id: 'opt_3', textEs: 'La noche de San Juan en pleno verano', textHy: 'Սուրբ Հովհաննեսի ամառային գիշերը' },
          { id: 'opt_4', textEs: 'El día de Pascua de Resurrección', textHy: 'Զատկի տոնի օրը' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'El texto comienza indicando: "La noche de difuntos envolvía la antigua ciudad de Soria...".',
        explanationHy: 'Տեքստը սկսվում է նշելով. «Մեռելոցի գիշերը պատել էր Սորիա քաղաքը...»:',
        rememberRuleEs: 'Fíjate en las primeras líneas para situar el tiempo de la narración.',
        rememberRuleHy: 'Ուշադրություն դարձրեք առաջին տողերին՝ պատմության ժամանակը որոշելու համար:',
        followUpExample: { es: 'La noche de difuntos es típica en las leyendas de Bécquer.', hy: 'Մեռելոցի գիշերը բնորոշ է Բեկերի ավանդազրույցներին:' }
      },
      {
        id: 'q_becquer_2',
        topicId: 'tema2',
        difficulty: 'medio',
        questionEs: '2. [Idea principal] ¿Cuál es la idea central de este fragmento?',
        questionHy: '2. [Գլխավոր միտք] Ո՞րն է այս հատվածի գլխավոր միտքը:',
        options: [
          { id: 'opt_1', textEs: 'Un joven caballero arriesga su vida en un monte misterioso para recuperar el lazo de su prima', textHy: 'Երիտասարդ ասպետը վտանգում է կյանքը խորհրդավոր բլրի վրա՝ զարմուհու ժապավենը գտնելու համար' },
          { id: 'opt_2', textEs: 'La celebración de una alegre fiesta medieval en el palacio real', textHy: 'Ուրախ միջնադարյան տոնակատարություն արքայական պալատում' },
          { id: 'opt_3', textEs: 'La construcción militar de un nuevo castillo en Soria', textHy: 'Սորիայում նոր ռազմական ամրոցի կառուցումը' },
          { id: 'opt_4', textEs: 'Un tratado de paz entre templarios y cazadores', textHy: 'Խաղաղության պայմանագիր տամպլիերների և որսորդների միջև' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Toda la tensión gira en torno al peligro del Monte de las Ánimas y el regreso nocturno de Alonso.',
        explanationHy: 'Ողջ լարվածությունը պտտվում է Հոգիների բլրի վտանգի և Ալոնսոյի գիշերային վերադարձի շուրջ:',
        rememberRuleEs: 'La idea principal sintetiza el conflicto dramático central.',
        rememberRuleHy: 'Գլխավոր միտքն ամփոփում է կենտրոնական դրամատիկ բախումը:',
        followUpExample: { es: 'El valor imprudente frente al peligro sobrenatural.', hy: 'Անխոհեմ քաջությունը գերբնական վտանգի առջև:' }
      },
      {
        id: 'q_becquer_3',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: '3. [Personajes] ¿Quiénes son los dos personajes que protagonizan el diálogo?',
        questionHy: '3. [Կերպարներ] Ովքե՞ր են երկխոսության երկու գլխավոր հերոսները:',
        options: [
          { id: 'opt_1', textEs: 'Alonso y su prima Beatriz', textHy: 'Ալոնսոն և նրա զարմուհի Բեատրիսը' },
          { id: 'opt_2', textEs: 'El rey Don Fernando y la reina Isabel', textHy: 'Դոն Ֆերնանդո արքան և Իսաբել թագուհին' },
          { id: 'opt_3', textEs: 'Dos pastores viejos del pueblo', textHy: 'Գյուղի երկու ծեր հովիվները' },
          { id: 'opt_4', textEs: 'El caballero Don Quijote y Sancho Panza', textHy: 'Ասպետ Դոն Կիխոտը և Սանչո Պանսան' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'El texto nombra expresamente a "Alonso y su prima Beatriz".',
        explanationHy: 'Տեքստում հստակ նշվում են «Alonso y su prima Beatriz»:',
        rememberRuleEs: 'Localiza los nombres propios de los personajes principales.',
        rememberRuleHy: 'Գտեք գլխավոր հերոսների հատուկ անունները:',
        followUpExample: { es: 'Alonso es el caballero valiente y Beatriz la doncella altiva.', hy: 'Ալոնսոն քաջ ասպետն է, իսկ Բեատրիսը՝ հպարտ օրիորդը:' }
      },
      {
        id: 'q_becquer_4',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: '4. [Información explícita] ¿Qué objeto exacto había perdido Beatriz en el monte?',
        questionHy: '4. [Բացահայտ տեղեկություն] Կոնկրետ ի՞նչ առարկա էր կորցրել Բեատրիսը բլրի վրա:',
        options: [
          { id: 'opt_1', textEs: 'Su hermosa banda azul', textHy: 'Իր գեղեցիկ կապույտ ժապավենը' },
          { id: 'opt_2', textEs: 'Un anillo de oro y esmeraldas', textHy: 'Ոսկե և զմրուխտե մատանի' },
          { id: 'opt_3', textEs: 'Un halcón blanco de caza', textHy: 'Որսի սպիտակ բազե' },
          { id: 'opt_4', textEs: 'Una espada toledana con gemas', textHy: 'Տոլեդոյի թուր՝ թանկարժեք քարերով' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'El texto indica claramente: "había extraviado en el monte su hermosa banda azul".',
        explanationHy: 'Տեքստում հստակ ասվում է՝ «կորցրել էր իր գեղեցիկ կապույտ ժապավենը»:',
        rememberRuleEs: 'La información explícita está escrita de forma literal en el texto.',
        rememberRuleHy: 'Բացահայտ տեղեկությունը բառացիորեն գրված է տեքստի մեջ:',
        followUpExample: { es: 'Banda azul = prenda femenina de adorno.', hy: 'Կապույտ ժապավեն = կանացի զարդարանք:' }
      },
      {
        id: 'q_becquer_5',
        topicId: 'tema2',
        difficulty: 'medio',
        questionEs: '5. [Inferencias] ¿Qué se puede deducir del hallazgo final de la banda ensangrentada?',
        questionHy: '5. [Եզրակացություն/Կռահում] Ի՞նչ կարելի է եզրակացնել արյունոտված ժապավենի վերջնական հայտնաբերումից:',
        options: [
          { id: 'opt_1', textEs: 'Que Alonso murió trágicamente a manos de las fuerzas sobrenaturales del monte', textHy: 'Որ Ալոնսոն ողբերգականորեն զոհվել է բլրի գերբնական ուժերի ձեռքով' },
          { id: 'opt_2', textEs: 'Que Alonso decidió huir a otra ciudad para no volver', textHy: 'Որ Ալոնսոն որոշել է փախչել այլ քաղաք, որպեսզի չվերադառնա' },
          { id: 'opt_3', textEs: 'Que los sirvientes del palacio gastaron una broma a Beatriz', textHy: 'Որ պալատի ծառաները կատակել են Բեատրիսի հետ' },
          { id: 'opt_4', textEs: 'Que el caballo se comió la banda por error', textHy: 'Որ ձին պատահաբար կերել է ժապավենը' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'La sangre en la banda dejada misteriosamente en la habitación infiere la muerte de Alonso en el monte.',
        explanationHy: 'Սենյակում խորհրդավոր կերպով հայտնված արյունոտ ժապավենը հուշում է Ալոնսոյի մահվան մասին:',
        rememberRuleEs: 'Hacer una inferencia es deducir algo que no se dice explícitamente a partir de pistas.',
        rememberRuleHy: 'Եզրակացություն անելը նշանակում է կռահել չասվածը՝ հիմնվելով հուշումների վրա:',
        followUpExample: { es: 'Banda con sangre + noche de difuntos = muerte del héroe.', hy: 'Արյունոտ ժապավեն + մեռելոցի գիշեր = հերոսի մահ:' }
      },
      {
        id: 'q_becquer_6',
        topicId: 'tema2',
        difficulty: 'medio',
        questionEs: '6. [Vocabulario] ¿Qué significa la palabra "desdén" en la frase: "La doncella sonrió con desdén y orgullo"?',
        questionHy: '6. [Բառապաշար] Ի՞նչ է նշանակում «desdén» բառը նախադասության մեջ՝ «La doncella sonrió con desdén y orgullo»:',
        options: [
          { id: 'opt_1', textEs: 'Menosprecio, desprecio o indiferencia burlona', textHy: 'Արհամարհանք, անտեսում կամ ծաղրական անտարբերություն' },
          { id: 'opt_2', textEs: 'Miedo extremo y pánico incontenible', textHy: 'Սաստիկ վախ և անզուսպ խուճապ' },
          { id: 'opt_3', textEs: 'Amabilidad exagerada y cariño sincero', textHy: 'Չափազանց բարություն և անկեղծ գորովանք' },
          { id: 'opt_4', textEs: 'Gran sorpresa o asombro repentino', textHy: 'Մեծ անակնկալ կամ հանկարծակի զարմանք' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: '"Desdén" es una actitud de indiferencia orgullosa y falta de consideración o estima.',
        explanationHy: '«Desdén» նշանակում է հպարտ արհամարհանք, թերագնահատում կամ ծաղրանք:',
        rememberRuleEs: 'Desdén = menosprecio, desprecio.',
        rememberRuleHy: 'Desdén = արհամարհանք, թերագնահատում:',
        followUpExample: { es: 'Miró a sus rivales con desdén.', hy: 'Արհամարհանքով նայեց իր մրցակիցներին:' }
      },
      {
        id: 'q_becquer_7',
        topicId: 'tema2',
        difficulty: 'medio',
        questionEs: '7. [Categorías gramaticales] En la expresión "la penumbra más helada", la palabra "helada" funciona como...',
        questionHy: '7. [Քերականական կարգեր] «la penumbra más helada» արտահայտության մեջ «helada» բառը գործում է որպես...',
        options: [
          { id: 'opt_1', textEs: 'Adjetivo calificativo femenino singular', textHy: 'Որակական ածական՝ իգական սեռ, եզակի թիվ' },
          { id: 'opt_2', textEs: 'Verbo conjugado en pretérito perfecto', textHy: 'Բայ՝ անցյալ կատարյալ ժամանակով' },
          { id: 'opt_3', textEs: 'Adverbio de cantidad o modo', textHy: 'Քանակի կամ ձևի մակբայ' },
          { id: 'opt_4', textEs: 'Preposición propia invariable', textHy: 'Անփոփոխ նախդիր' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: '"Helada" concuerda en género femenino y número singular con el sustantivo "penumbra", describiendo su cualidad.',
        explanationHy: '«Helada» բառը համաձայնում է «penumbra» գոյականի հետ սեռով և թվով՝ նկարագրելով նրա որակը:',
        rememberRuleEs: 'El adjetivo concuerda en género y número con el sustantivo al que acompaña.',
        rememberRuleHy: 'Ածականը համաձայնում է գոյականի հետ սեռով և թվով:',
        followUpExample: { es: 'La noche fría (fría = adjetivo).', hy: 'Սառը գիշերը (սառը = ածական):' }
      },
      {
        id: 'q_becquer_8',
        topicId: 'tema5',
        difficulty: 'facil',
        questionEs: '8. [Figuras literarias] En la frase: "El viento aullaba como un lobo hambriento", ¿qué figura literaria aparece?',
        questionHy: '8. [Գեղարվեստական միջոցներ] «El viento aullaba como un lobo hambriento» նախադասության մեջ ո՞ր միջոցն է առկա:',
        options: [
          { id: 'opt_1', textEs: 'Comparación o símil (utiliza el nexo "como" para relacionar el viento y el lobo)', textHy: 'Համեմատություն (օգտագործում է «como» շաղկապը՝ քամին և գայլը կապելու համար)' },
          { id: 'opt_2', textEs: 'Asíndeton sin comas', textHy: 'Ասինդետոն առանց ստորակետների' },
          { id: 'opt_3', textEs: 'Polisíndeton con la conjunción "ni"', textHy: 'Պոլիսինդետոն «ni» շաղկապով' },
          { id: 'opt_4', textEs: 'Paronomasia estricta', textHy: 'Խիստ պարոնոմազիա' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'La presencia de la palabra "como" establece una comparación explícita (símil) entre el ruido del viento y el aullido del lobo.',
        explanationHy: '«Como» (ինչպես) բառի առկայությունը հաստատում է բացահայտ համեմատություն քամու և գայլի ոռնոցի միջև:',
        rememberRuleEs: 'Si relaciona dos realidades usando "como", es una COMPARACIÓN (símil).',
        rememberRuleHy: 'Եթե երկու իրականություն կապվում են «como»-ով, ապա դա ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ է (símil):',
        followUpExample: { es: 'Corría como el rayo.', hy: 'Վազում էր կայծակի պես:' }
      },
      {
        id: 'q_becquer_9',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: '9. [Tipo de texto] ¿A qué género narrativo pertenece este relato?',
        questionHy: '9. [Տեքստի տեսակ] Պատմողական ո՞ր ժանրին է պատկանում այս ստեղծագործությունը:',
        options: [
          { id: 'opt_1', textEs: 'Leyenda (combina un marco geográfico real en Soria con sucesos misteriosos y terroríficos)', textHy: 'Ավանդազրույց (միավորում է Սորիայի իրական աշխարհագրությունը առեղծվածային և սարսափելի դեպքերի հետ)' },
          { id: 'opt_2', textEs: 'Mito griego cosmogónico con dioses del Olimpo', textHy: 'Հունական տիեզերածնական առասպել՝ Օլիմպոսի աստվածներով' },
          { id: 'opt_3', textEs: 'Romance octosílabo en verso con rima asonante', textHy: 'Ութավանկ ռոմանս չափածոյով և ասոնանս հանգով' },
          { id: 'opt_4', textEs: 'Fábula animal con moraleja explícita al final', textHy: 'Կենդանական առակ՝ վերջում բարոյախոսությամբ' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Es la célebre leyenda romántica de Gustavo Adolfo Bécquer ("El Monte de las Ánimas").',
        explanationHy: 'Սա Գուստավո Ադոլֆո Բեկերի հայտնի ռոմանտիկական ավանդազրույցն է («Հոգիների բլուրը»):',
        rememberRuleEs: 'Lugar real (Soria) + fantasmas / misterio = Leyenda.',
        rememberRuleHy: 'Իրական վայր (Սորիա) + ուրվականներ / առեղծված = Ավանդազրույց:',
        followUpExample: { es: 'Las leyendas de Bécquer son el ejemplo cumbre de este género en 1.º de ESO.', hy: 'Բեկերի ավանդազրույցները 1-ին դասարանի (1.º ESO) այս ժանրի գլխավոր օրինակն են:' }
      },
      {
        id: 'q_becquer_10',
        topicId: 'tema3',
        difficulty: 'medio',
        questionEs: '10. [Características literarias] ¿Por qué este texto es una muestra de LITERATURA CULTA y no popular?',
        questionHy: '10. [Գրական առանձնահատկություններ] Ինչո՞ւ է այս տեքստը ՄՇԱԿՎԱԾ (CULTA) գրականության նմուշ, ոչ թե ժողովրդական:',
        options: [
          { id: 'opt_1', textEs: 'Porque fue redactado por un autor conocido (Bécquer), con lenguaje muy cuidado y difusión escrita en libro', textHy: 'Որովհետև գրվել է հայտնի հեղինակի կողմից (Բեկեր), շատ մշակված լեզվով և գրավոր տարածմամբ' },
          { id: 'opt_2', textEs: 'Porque es un cantar de corro anónimo transmitido por niños', textHy: 'Որովհետև երեխաների կողմից փոխանցվող անանուն շուրջպարի երգ է' },
          { id: 'opt_3', textEs: 'Porque no tiene ningún personaje humano', textHy: 'Որովհետև չունի ոչ մի մարդկային կերպար' },
          { id: 'opt_4', textEs: 'Porque fue inventado en la prehistoria oralmente', textHy: 'Որովհետև հորինվել է նախապատմական շրջանում բանավոր' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Pertenece a la literatura culta del siglo XIX: autor individual consagrado, léxico selecto y publicación impresa.',
        explanationHy: 'Պատկանում է 19-րդ դարի մշակված գրականությանը. հայտնի հեղինակ, ընտիր բառապաշար և տպագիր հրատարակություն:',
        rememberRuleEs: 'Autor consagrado + prosa elaborada = Literatura Culta.',
        rememberRuleHy: 'Հայտնի հեղինակ + մշակված արձակ = Մշակված գրականություն:',
        followUpExample: { es: 'Las obras de Bécquer, Lorca o Cervantes son literatura culta.', hy: 'Բեկերի, Լորկայի կամ Սերվանտեսի գործերը մշակված գրականություն են:' }
      }
    ]
  },
  {
    id: 'text_2_romance_prisionero',
    titleEs: 'Romance del Prisionero',
    titleHy: 'Բանտարկյալի ռոմանսը',
    genre: 'romance',
    wordCount: 160,
    sentences: [
      {
        es: 'Que por mayo era, por mayo, cuando hace la calor.',
        hy: 'Մայիսն էր, մայիսը, երբ տաքությունն է սկսվում:'
      },
      {
        es: 'Cuando canta la calandria y responde el ruiseñor.',
        hy: 'Երբ երգում է արտույտը, և պատասխանում է սոխակը:'
      },
      {
        es: 'Cuando los enamorados van a servir al amor.',
        hy: 'Երբ սիրահարները գնում են սիրուն ծառայելու:'
      },
      {
        es: 'Sino yo, triste, cuitado, que yago en esta prisión.',
        hy: 'Բացի ինձնից՝ տխուր, վշտահար, որ ընկած եմ այս բանտում:'
      },
      {
        es: 'Que ni sé cuándo es de día ni cuándo las noches son.',
        hy: 'Որ չգիտեմ ո՛չ երբ է ցերեկը, ո՛չ երբ են գիշերները:'
      },
      {
        es: 'Sino por una avecilla que me cantaba al albor.',
        hy: 'Եթե ոչ մի փոքրիկ թռչնակի շնորհիվ, որ երգում էր ինձ այգաբացին:'
      },
      {
        es: 'Matómela un ballestero; dele Dios mal galardón.',
        hy: 'Մի նետաձիգ սպանեց նրան. թող Աստված չար հատուցում տա նրան:'
      }
    ],
    questions: [
      {
        id: 'q_pris_1',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: '1. [Comprensión lectora] ¿Dónde se encuentra el protagonista de este romance?',
        questionHy: '1. [Ընթերցանության ըմբռնում] Որտե՞ղ է գտնվում այս ռոմանսի գլխավոր հերոսը:',
        options: [
          { id: 'opt_1', textEs: 'Encerrado en una oscura prisión', textHy: 'Փակված մութ բանտում' },
          { id: 'opt_2', textEs: 'Paseando libre por un campo florecido', textHy: 'Ազատ զբոսնելիս ծաղկած դաշտում' },
          { id: 'opt_3', textEs: 'Navegando en un barco hacia América', textHy: 'Նավարկելիս նավով դեպի Ամերիկա' },
          { id: 'opt_4', textEs: 'En una boda en el castillo', textHy: 'Ամրոցում հարսանիքի ժամանակ' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'El texto dice: "que yago en esta prisión", lo que explica su dolor y aislamiento.',
        explanationHy: 'Տեքստում ասվում է՝ «ընկած եմ այս բանտում», ինչը բացատրում է նրա վիշտը և մեկուսացումը:',
        rememberRuleEs: 'El prisionero sufre la pérdida de la libertad.',
        rememberRuleHy: 'Բանտարկյալը տառապում է ազատության կորստից:',
        followUpExample: { es: 'La prisión simboliza la tristeza frente a la primavera.', hy: 'Բանտը խորհրդանշում է տխրությունը գարնան դիմաց:' }
      },
      {
        id: 'q_pris_2',
        topicId: 'tema2',
        difficulty: 'medio',
        questionEs: '2. [Idea principal] ¿Cuál es el contraste principal que presenta el poema?',
        questionHy: '2. [Գլխավոր միտք] Ո՞րն է բանաստեղծության ներկայացրած գլխավոր հակադրությունը:',
        options: [
          { id: 'opt_1', textEs: 'La alegría luminosa de la primavera exterior frente a la triste soledad del cautivo', textHy: 'Արտաքին գարնան պայծառ ուրախությունն ընդդեմ գերու տխուր մենության' },
          { id: 'opt_2', textEs: 'La guerra entre dos reinos medievales vecinos', textHy: 'Պատերազմ երկու հարևան միջնադարյան թագավորությունների միջև' },
          { id: 'opt_3', textEs: 'El precio del trigo y los cereales en mayo', textHy: 'Ցորենի և հացահատիկի գինը մայիսին' },
          { id: 'opt_4', textEs: 'La técnica de tiro de los ballesteros', textHy: 'Նետաձիգների նետ արձակելու տեխնիկան' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Mayo trae vida, amor y cantos, mientras el prisionero ni siquiera ve la luz del sol.',
        explanationHy: 'Մայիսը բերում է կյանք, սեր և երգեր, մինչդեռ բանտարկյալը նույնիսկ արևի լույսը չի տեսնում:',
        rememberRuleEs: 'Contraste poético: mundo libre y feliz vs hombre preso y desdichado.',
        rememberRuleHy: 'Պոետիկ հակադրություն՝ ազատ ու երջանիկ աշխարհ ընդդեմ բանտարկված մարդու:',
        followUpExample: { es: 'La primavera acentúa la amargura del encierro.', hy: 'Գարունն ավելի է ընդգծում փակված լինելու դառնությունը:' }
      },
      {
        id: 'q_pris_3',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: '3. [Personajes] ¿Quién era el único consuelo que tenía el prisionero para saber cuándo amanecía?',
        questionHy: '3. [Կերպարներ] Ո՞վ էր բանտարկյալի միակ մխիթարությունը՝ իմանալու, թե երբ է լուսաբացը:',
        options: [
          { id: 'opt_1', textEs: 'Una avecilla (pajarillo) que cantaba al albor', textHy: 'Մի փոքրիկ թռչնակ, որ երգում էր այգաբացին' },
          { id: 'opt_2', textEs: 'El carcelero que le llevaba pan fresco', textHy: 'Բանտապահը, որ թարմ հաց էր բերում' },
          { id: 'opt_3', textEs: 'Un reloj de arena en su celda', textHy: 'Ավազե ժամացույց իր խցում' },
          { id: 'opt_4', textEs: 'Su perro fiel que ladraba a las cinco', textHy: 'Իր հավատարիմ շունը, որ հաչում էր ժամը հինգին' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'El romance dice: "Sino por una avecilla que me cantaba al albor".',
        explanationHy: 'Ռոմանսում ասվում է՝ «բացի մի փոքրիկ թռչնակից, որ երգում էր ինձ այգաբացին»:',
        rememberRuleEs: 'El pajarillo era su único vínculo con el tiempo y el exterior.',
        rememberRuleHy: 'Թռչնակը նրա միակ կապն էր ժամանակի և արտաքին աշխարհի հետ:',
        followUpExample: { es: 'El ave representa la esperanza inocente.', hy: 'Թռչունը ներկայացնում է անմեղ հույսը:' }
      },
      {
        id: 'q_pris_4',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: '4. [Información explícita] ¿Qué le ocurrió a la avecilla que cantaba al alba?',
        questionHy: '4. [Բացահայտ տեղեկություն] Ի՞նչ պատահեց լուսաբացին երգող թռչնակին:',
        options: [
          { id: 'opt_1', textEs: 'La mató un ballestero', textHy: 'Նրան սպանեց նետաձիգը' },
          { id: 'opt_2', textEs: 'Voló hacia tierras lejanas para no volver', textHy: 'Թռավ հեռու երկրներ և այլևս չվերադարձավ' },
          { id: 'opt_3', textEs: 'El prisionero la adoptó dentro de su jaula', textHy: 'Բանտարկյալը նրան պահեց իր վանդակում' },
          { id: 'opt_4', textEs: 'Se transformó en una princesa encantada', textHy: 'Վերածվեց կախարդված արքայադստեր' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'El penúltimo verso dice tajantemente: "Matómela un ballestero".',
        explanationHy: 'Նախավերջին տողը կտրուկ ասում է՝ «Matómela un ballestero» (նրան սպանեց նետաձիգը):',
        rememberRuleEs: 'Ballestero = soldado armado con ballesta.',
        rememberRuleHy: 'Ballestero = արբալետով (նետասարքով) զինված զինվոր:',
        followUpExample: { es: 'El ballestero destruye su última ilusión.', hy: 'Նետաձիգը ոչնչացնում է նրա վերջին պատրանքը:' }
      },
      {
        id: 'q_pris_5',
        topicId: 'tema2',
        difficulty: 'medio',
        questionEs: '5. [Inferencias] ¿Qué sentimiento expresa el verso final: "dele Dios mal galardón"?',
        questionHy: '5. [Եզրակացություն] Ի՞նչ զգացմունք է արտահայտում վերջին տողը՝ «dele Dios mal galardón» (թող Աստված չար հատուցում տա նրան):',
        options: [
          { id: 'opt_1', textEs: 'Una maldición de rabia y dolor hacia el hombre que le arrebató su única alegría', textHy: 'Զայրույթի և վշտի անեծք այն մարդուն, ով խլեց իր միակ ուրախությունը' },
          { id: 'opt_2', textEs: 'Un agradecimiento sincero y una bendición', textHy: 'Անկեղծ երախտագիտություն և օրհնություն' },
          { id: 'opt_3', textEs: 'Paz y resignación cristiana absoluta', textHy: 'Խաղաղություն և քրիստոնեական բացարձակ հաշտություն' },
          { id: 'opt_4', textEs: 'Alegría por quedarse solo', textHy: 'Ուրախություն միայնակ մնալու համար' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: '"Mal galardón" significa mal premio o castigo divino para quien cometió esa crueldad.',
        explanationHy: '«Mal galardón» նշանակում է վատ հատուցում կամ աստվածային պատիժ դաժանություն գործողին:',
        rememberRuleEs: 'Mal galardón = castigo o desgracia merecida.',
        rememberRuleHy: 'Mal galardón = արժանի պատիժ կամ դժբախտություն:',
        followUpExample: { es: 'El prisionero maldice al agresor del ave.', hy: 'Բանտարկյալն անիծում է թռչնին սպանողին:' }
      },
      {
        id: 'q_pris_6',
        topicId: 'tema2',
        difficulty: 'medio',
        questionEs: '6. [Vocabulario] En el texto, ¿qué significa la palabra "cuitado" en "yo, triste, cuitado"?',
        questionHy: '6. [Բառապաշար] Տեքստում ի՞նչ է նշանակում «cuitado» բառը՝ «yo, triste, cuitado»:',
        options: [
          { id: 'opt_1', textEs: 'Afligido, desdichado y lleno de pesadumbre', textHy: 'Վշտահար, դժբախտ և տառապանքով լի' },
          { id: 'opt_2', textEs: 'Valiente y dispuesto para la batalla', textHy: 'Քաջ և ճակատամարտին պատրաստ' },
          { id: 'opt_3', textEs: 'Muy rico y dueño de tierras', textHy: 'Շատ հարուստ և հողատեր' },
          { id: 'opt_4', textEs: 'Divertido y alegre como un juglar', textHy: 'Զվարճալի և ուրախ, ինչպես ժուգլյարը' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: '"Cuitado" procede de "cuita" (pena, aflicción profunda). Es un adjetivo medieval frecuente.',
        explanationHy: '«Cuitado» առաջացել է «cuita» (խորը վիշտ, տառապանք) բառից: Միջնադարյան ածական է:',
        rememberRuleEs: 'Cuitado = desdichado, desgraciado.',
        rememberRuleHy: 'Cuitado = դժբախտ, վշտահար:',
        followUpExample: { es: '¡Ay de mí, triste cuitado!', hy: 'Վա՜յ ինձ՝ տխուր վշտահարիս:' }
      },
      {
        id: 'q_pris_7',
        topicId: 'tema6',
        difficulty: 'medio',
        questionEs: '7. [Categorías gramaticales] En "ni sé cuándo es de día ni cuándo las noches son", la palabra "ni" funciona como...',
        questionHy: '7. [Քերականական կարգեր] «ni sé cuándo es de día ni cuándo las noches son» արտահայտության մեջ «ni» բառը գործում է որպես...',
        options: [
          { id: 'opt_1', textEs: 'Conjunción coordinante copulativa discontinua (negativa)', textHy: 'Համադասական ժխտական շաղկապ (ոչ)' },
          { id: 'opt_2', textEs: 'Sustantivo común masculino', textHy: 'Հասարակ արական գոյական' },
          { id: 'opt_3', textEs: 'Verbo en modo imperativo', textHy: 'Հրամայական եղանակի բայ' },
          { id: 'opt_4', textEs: 'Adjetivo determinativo demostrativo', textHy: 'Ցուցական ածական' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: '"Ni" enlaza dos oraciones coordinadas en sentido negativo.',
        explanationHy: '«Ni» շաղկապը կապում է երկու նախադասություններ ժխտական իմաստով:',
        rememberRuleEs: '"Y", "e", "ni" son conjunciones copulativas.',
        rememberRuleHy: '«Y», «e», «ni»-ն համադասական միավորիչ շաղկապներ են:',
        followUpExample: { es: 'Ni come ni bebe.', hy: 'Ո՛չ ուտում է, ո՛չ խմում:' }
      },
      {
        id: 'q_pris_8',
        topicId: 'tema6',
        difficulty: 'medio',
        questionEs: '8. [Figuras literarias] En los primeros versos: "Que por mayo era, por mayo / cuando hace la calor / cuando canta la calandria...", ¿qué figuras destacan?',
        questionHy: '8. [Գեղարվեստական միջոցներ] Առաջին տողերում ո՞ր պատկերավորման միջոցներն են աչքի ընկնում:',
        options: [
          { id: 'opt_1', textEs: 'Anáfora (repite "cuando" al inicio) y epanadiplosis/reduplicación en "por mayo era, por mayo"', textHy: 'Անաֆորա («cuando»-ի կրկնությամբ սկզբում) և կրկնություն («por mayo era, por mayo»)' },
          { id: 'opt_2', textEs: 'Metáfora pura exclusivamente', textHy: 'Բացառապես զուտ փոխաբերություն' },
          { id: 'opt_3', textEs: 'Asíndeton sin comas', textHy: 'Ասինդետոն առանց ստորակետների' },
          { id: 'opt_4', textEs: 'Onomatopeyas de animales salvajes', textHy: 'Վայրի կենդանիների բնաձայնություններ' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'La repetición de "cuando" al frente de los versos es una anáfora lírica muy bella.',
        explanationHy: 'Տողերի սկզբում «cuando» բառի կրկնությունը շատ գեղեցիկ քնարական անաֆորա է:',
        rememberRuleEs: 'Repetición al comienzo de varios versos = Anáfora.',
        rememberRuleHy: 'Կրկնություն մի քանի տողերի սկզբում = Անաֆորա:',
        followUpExample: { es: 'Cuando sale el sol / cuando canta el gallo.', hy: 'Երբ ծագում է արևը / երբ կանչում է աքաղաղը:' }
      },
      {
        id: 'q_pris_9',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: '9. [Tipo de texto] ¿Qué forma métrica y composición literaria tiene esta obra?',
        questionHy: '9. [Տեքստի տեսակ] Ի՞նչ տաղաչափական ձև և գրական բնույթ ունի այս ստեղծագործությունը:',
        options: [
          { id: 'opt_1', textEs: 'Romance lírico tradicional en verso octosílabo con rima asonante en -or en los pares', textHy: 'Ավանդական քնարական ռոմանս ութավանկ տողերով և զույգ տողերի -or ասոնանս հանգով' },
          { id: 'opt_2', textEs: 'Soneto barroco de catorce versos endecasílabos', textHy: 'Բարոկկոյի սոնետ՝ տասնչորս տասնմեկավանկ տողերով' },
          { id: 'opt_3', textEs: 'Cuento en prosa dividido en tres capítulos', textHy: 'Արձակ պատմվածք՝ բաժանված երեք գլուխների' },
          { id: 'opt_4', textEs: 'Mito griego sobre el nacimiento de los pájaros', textHy: 'Հունական առասպել թռչունների ծննդյան մասին' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Es el Romance del Prisionero, una de las joyas de la lírica tradicional española.',
        explanationHy: 'Սա «Բանտարկյալի ռոմանսն» է՝ իսպանական ավանդական քնարերգության գոհարներից մեկը:',
        rememberRuleEs: 'Versos de 8 sílabas con rima en los pares = Romance.',
        rememberRuleHy: '8 վանկանի տողեր զույգերի հանգավորմամբ = Ռոմանս:',
        followUpExample: { es: 'Calor, ruiseñor, amor, prisión, son, albor, galardón.', hy: 'Զույգ տողերի հանգավորումը -or հնչյունով:' }
      },
      {
        id: 'q_pris_10',
        topicId: 'tema1',
        difficulty: 'medio',
        questionEs: '10. [Características literarias] ¿A qué corriente literaria pertenece este romance de origen medieval?',
        questionHy: '10. [Գրական առանձնահատկություններ] Գրական ո՞ր ուղղությանն է պատկանում միջնադարյան ծագում ունեցող այս ռոմանսը:',
        options: [
          { id: 'opt_1', textEs: 'Literatura popular y tradicional (anónima, transmitida por juglares de viva voz)', textHy: 'Ժողովրդական և ավանդական գրականություն (անանուն, փոխանցված գուսանների կողմից)' },
          { id: 'opt_2', textEs: 'Literatura culta renacentista firmada por Garcilaso', textHy: 'Վերածննդի մշակված գրականություն՝ ստորագրված Գարսիլասոյի կողմից' },
          { id: 'opt_3', textEs: 'Teatro cómico del siglo XXI', textHy: '21-րդ դարի կատակերգական թատրոն' },
          { id: 'opt_4', textEs: 'Novela de caballerías en prosa', textHy: 'Ասպետական վեպ արձակով' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Forma parte del Romancero Viejo popular anónimo que el pueblo memorizó y cantó durante siglos.',
        explanationHy: 'Այն կազմում է անանուն ժողովրդական «Հին ռոմանսերոյի» մաս, որը ժողովուրդը դարերով երգել է:',
        rememberRuleEs: 'Romancero Viejo = literatura popular tradicional y anónima.',
        rememberRuleHy: 'Հին ռոմանսերո = ավանդական և անանուն ժողովրդական գրականություն:',
        followUpExample: { es: 'Los romances viejos no tienen autor individual.', hy: 'Հին ռոմանսները անհատ հեղինակ չունեն:' }
      }
    ]
  },
  {
    id: 'text_3_mito_icaro',
    titleEs: 'El vuelo sagrado de Ícaro',
    titleHy: 'Իկարոսի սրբազան թռիչքը',
    genre: 'mito',
    wordCount: 215,
    sentences: [
      {
        es: 'Dédalo, el sabio arquitecto que construyó el laberinto de Creta, anhelaba escapar de la isla con su joven hijo Ícaro.',
        hy: 'Դեդալոսը՝ իմաստուն ճարտարապետը, որ կառուցել էր Կրետեի լաբիրինթոսը, փափագում էր իր երիտասարդ որդու՝ Իկարոսի հետ փախչել կղզուց:'
      },
      {
        es: 'El rey Minos vigilaba por tierra y por mar todas las naves, impidiéndoles cualquier posible huida humana.',
        hy: 'Մինոս արքան ցամաքից և ծովից հսկում էր բոլոր նավերը՝ թույլ չտալով մարդկային որևէ փախուստ:'
      },
      {
        es: 'Entonces, Dédalo reunió plumas de gaviotas y las unió pacientemente con hilos y cera de abejas dorada.',
        hy: 'Այդժամ Դեդալոսը հավաքեց ճայերի փետուրներ և դրանք համբերատար միացրեց թելերով ու մեղրամոմով:'
      },
      {
        es: 'Creó dos pares de alas prodigiosas que imitaban a la perfección el vuelo natural de las aves del cielo.',
        hy: 'Նա ստեղծեց երկու զույգ հրաշալի թևեր, որոնք կատարելապես նմանակում էին երկնքի թռչունների բնական թռիչքը:'
      },
      {
        es: 'Antes de elevarse, el padre advirtió con voz grave: —Hijo mío, vuela siempre a media altura; ni muy bajo rozando las olas, ni muy alto desafiando a Helios.',
        hy: 'Վեր սավառնելուց առաջ հայրը լուրջ ձայնով զգուշացրեց. —Որդի՛ս, թռիր միջին բարձրությամբ. ոչ շատ ցածր՝ ալիքներին դիպչելով, ոչ շատ բարձր՝ Հելիոսին մարտահրավեր նետելով:'
      },
      {
        es: 'Si subes demasiado, el calor del dios Sol derretirá la cera de tus alas y caerás al abismo.',
        hy: 'Եթե չափազանց բարձրանաս, Արև աստծո տապը կհալեցնի քո թևերի մոմը, և դու կընկնես անդունդը:'
      },
      {
        es: 'Emprendieron el vuelo y el joven Ícaro sintió en su pecho una euforia desmedida e invencible.',
        hy: 'Նրանք սկսեցին թռիչքը, և պատանի Իկարոսն իր կրծքում զգաց անչափելի ու անհաղթահարելի ցնծություն:'
      },
      {
        es: 'Embriagado por la libertad celestial, olvidó las palabras paternales y ascendió hacia el resplandor de los dioses.',
        hy: 'Երկնային ազատությունից արբեցած՝ նա մոռացավ հայրական խոսքերը և բարձրացավ դեպի աստվածների շողշողյունը:'
      },
      {
        es: 'Los rayos abrasadores derritieron la cera, las plumas se dispersaron por el viento y el joven cayó al inmenso mar.',
        hy: 'Այրող ճառագայթները հալեցրին մոմը, փետուրները ցրվեցին քամուց, և պատանին ընկավ անծայրածիր ծովը:'
      }
    ],
    questions: [
      {
        id: 'q_icaro_1',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: '1. [Comprensión lectora] ¿Por qué construyó Dédalo las alas de plumas y cera?',
        questionHy: '1. [Ընթերցանության ըմբռնում] Ինչո՞ւ Դեդալոսը կառուցեց փետուրներից և մոմից թևերը:',
        options: [
          { id: 'opt_1', textEs: 'Para escapar volando de la isla de Creta porque el rey vigilaba el mar', textHy: 'Կրետե կղզուց թռչելով փախչելու համար, որովհետև արքան հսկում էր ծովը' },
          { id: 'opt_2', textEs: 'Para competir en una carrera aérea contra los dioses', textHy: 'Աստվածների դեմ օդային մրցավազքի մասնակցելու համար' },
          { id: 'opt_3', textEs: 'Para cazar pájaros gigantes en la cima de los montes', textHy: 'Լեռների գագաթին հսկա թռչուններ որսալու համար' },
          { id: 'opt_4', textEs: 'Para protegerse de la lluvia invernal', textHy: 'Ձմեռային անձրևից պաշտպանվելու համար' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'El rey Minos controlaba barcos y caminos, por lo que la única vía de escape era el cielo.',
        explanationHy: 'Մինոս արքան վերահսկում էր նավերն ու ճանապարհները, ուստի փրկության միակ ճանապարհը երկինքն էր:',
        rememberRuleEs: 'El motivo central de la fuga aérea.',
        rememberRuleHy: 'Օդային փախուստի գլխավոր դրդապատճառը:',
        followUpExample: { es: 'Dédalo usó su ingenio arquitectónico.', hy: 'Դեդալոսն օգտագործեց իր ճարտարապետական հնարամտությունը:' }
      },
      {
        id: 'q_icaro_2',
        topicId: 'tema2',
        difficulty: 'medio',
        questionEs: '2. [Idea principal] ¿Qué advertencia moral o enseñanza central transmite este relato mítico?',
        questionHy: '2. [Գլխավոր միտք] Ի՞նչ բարոյախոսական նախազգուշացում է փոխանցում այս առասպելը:',
        options: [
          { id: 'opt_1', textEs: 'El peligro de la desobediencia imprudente y el orgullo de querer igualar a los dioses', textHy: 'Անխոհեմ անհնազանդության և աստվածներին հավասարվելու հպարտության վտանգը' },
          { id: 'opt_2', textEs: 'La importancia de utilizar pegamento moderno en vez de cera', textHy: 'Մոմի փոխարեն ժամանակակից սոսինձ օգտագործելու կարևորությունը' },
          { id: 'opt_3', textEs: 'Que los laberintos son fáciles de resolver', textHy: 'Որ լաբիրինթոսները հեշտ է լուծել' },
          { id: 'opt_4', textEs: 'Que las gaviotas son los animales más rápidos', textHy: 'Որ ճայերն ամենաարագ կենդանիներն են' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'El mito de Ícaro simboliza la hybris (arrogancia) y las consecuencias trágicas de ignorar los límites.',
        explanationHy: 'Իկարոսի առասպելը խորհրդանշում է մեծամտությունը և սահմաններն անտեսելու ողբերգական հետևանքները:',
        rememberRuleEs: 'Mito de Ícaro = castigo a la soberbia imprudente.',
        rememberRuleHy: 'Իկարոսի առասպել = անխոհեմ գոռոզության պատիժ:',
        followUpExample: { es: 'No volar demasiado cerca del Sol.', hy: 'Չթռչել Արևին չափազանց մոտ:' }
      },
      {
        id: 'q_icaro_3',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: '3. [Personajes] ¿Quién era el dios del Sol mencionado en la advertencia de Dédalo?',
        questionHy: '3. [Կերպարներ] Ո՞վ էր Արևի աստվածը, որը հիշատակվում էր Դեդալոսի զգուշացման մեջ:',
        options: [
          { id: 'opt_1', textEs: 'Helios (la divinidad solar)', textHy: 'Հելիոսը (արևային աստվածությունը)' },
          { id: 'opt_2', textEs: 'Poseidón (dios del mar)', textHy: 'Պոսեյդոնը (ծովի աստվածը)' },
          { id: 'opt_3', textEs: 'Hades (señor del inframundo)', textHy: 'Հադեսը (ստորգետնյա աշխարհի տիրակալը)' },
          { id: 'opt_4', textEs: 'Ares (dios de la guerra)', textHy: 'Արեսը (պատերազմի աստվածը)' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'En la mitología griega, Helios es el dios solar que recorre el firmamento con su carro llameante.',
        explanationHy: 'Հունական դիցաբանության մեջ Հելիոսն արևի աստվածն է, որն իր կրակե կառքով անցնում է երկնքով:',
        rememberRuleEs: 'Helios = dios del Sol en la tradición mitológica griega.',
        rememberRuleHy: 'Հելիոս = Արևի աստվածը հունական դիցաբանության մեջ:',
        followUpExample: { es: 'Apolo también fue asociado a la luz solar.', hy: 'Ապոլոնը նույնպես նույնացվել է արևի լույսի հետ:' }
      },
      {
        id: 'q_icaro_4',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: '4. [Información explícita] ¿Qué material usó Dédalo para pegar las plumas a las alas?',
        questionHy: '4. [Բացահայտ տեղեկություն] Ի՞նչ նյութ օգտագործեց Դեդալոսը փետուրները թևերին կպցնելու համար:',
        options: [
          { id: 'opt_1', textEs: 'Cera de abejas dorada e hilos', textHy: 'Մեղրամոմ և թելեր' },
          { id: 'opt_2', textEs: 'Hierro fundido al rojo vivo', textHy: 'Շիկացած հալած երկաթ' },
          { id: 'opt_3', textEs: 'Barro seco del río', textHy: 'Գետի չորացած կավ' },
          { id: 'opt_4', textEs: 'Cuerdas de cáñamo sin ningún pegamento', textHy: 'Կանեփի պարաններ առանց որևէ սոսնձի' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'El texto cita textualmente: "las unió pacientemente con hilos y cera de abejas dorada".',
        explanationHy: 'Տեքստում բառացի ասվում է՝ «միացրեց թելերով ու մեղրամոմով»:',
        rememberRuleEs: 'La cera es el elemento vulnerable al calor solar.',
        rememberRuleHy: 'Մեղրամոմը արևի տապի նկատմամբ խոցելի տարրն է:',
        followUpExample: { es: 'La cera se derrite con el calor intenso.', hy: 'Մեղրամոմը հալչում է ուժեղ տաքությունից:' }
      },
      {
        id: 'q_icaro_5',
        topicId: 'tema2',
        difficulty: 'medio',
        questionEs: '5. [Inferencias] ¿Qué provocó que Ícaro olvidara las recomendaciones de su padre?',
        questionHy: '5. [Եզրակացություն/Կռահում] Ի՞նչը ստիպեց Իկարոսին մոռանալ հոր խորհուրդները:',
        options: [
          { id: 'opt_1', textEs: 'La euforia desmedida de sentirse libre y poderoso como un dios volando en el cielo', textHy: 'Երկնքում թռչելիս աստծո պես ազատ ու հզոր զգալու անչափելի ցնծությունը' },
          { id: 'opt_2', textEs: 'Un fuerte ataque de sueño repentino', textHy: 'Հանկարծակի ուժեղ քնկոտության նոպան' },
          { id: 'opt_3', textEs: 'Que las gaviotas lo atacaron ferozmente', textHy: 'Որ ճայերը կատաղի հարձակվեցին նրա վրա' },
          { id: 'opt_4', textEs: 'Una tormenta de nieve con vientos helados', textHy: 'Ձնաբուք՝ սառցե քամիներով' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'El texto señala que estaba "embriagado por la libertad celestial", sintiéndose invencible.',
        explanationHy: 'Տեքստը նշում է, որ նա «արբեցած էր երկնային ազատությունից»՝ իրեն անհաղթ զգալով:',
        rememberRuleEs: 'La euforia juvenil lo llevó a desafiar la sensatez.',
        rememberRuleHy: 'Երիտասարդական ցնծությունը նրան մղեց անտեսելու ողջամտությունը:',
        followUpExample: { es: 'La soberbia ciega el peligro.', hy: 'Գոռոզությունը կուրացնում է վտանգի առջև:' }
      },
      {
        id: 'q_icaro_6',
        topicId: 'tema2',
        difficulty: 'medio',
        questionEs: '6. [Vocabulario] ¿Qué significa el adjetivo "prodigiosas" en la frase: "Creó dos pares de alas prodigiosas"?',
        questionHy: '6. [Բառապաշար] Ի՞նչ է նշանակում «prodigiosas» ածականը «dos pares de alas prodigiosas» արտահայտության մեջ:',
        options: [
          { id: 'opt_1', textEs: 'Extraordinarias, maravillosas y casi milagrosas', textHy: 'Արտասովոր, հրաշալի և գրեթե հրաշագործ' },
          { id: 'opt_2', textEs: 'Pesadas y difíciles de transportar', textHy: 'Ծանր և դժվար տեղափոխելի' },
          { id: 'opt_3', textEs: 'Rotas y en mal estado', textHy: 'Կոտրված և վատ վիճակում' },
          { id: 'opt_4', textEs: 'Comunes y corrientes como las de una gallina', textHy: 'Սովորական, ինչպես հավի թևերը' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: '"Prodigioso" califica a algo que causa asombro por su carácter extraordinario o sobrenatural.',
        explanationHy: '«Prodigioso» նշանակում է հրաշագեղ, զարմանահրաշ, արտասովոր:',
        rememberRuleEs: 'Prodigioso = maravilloso, extraordinario.',
        rememberRuleHy: 'Prodigioso = հրաշալի, արտասովոր:',
        followUpExample: { es: 'Un invento prodigioso que cambió la historia.', hy: 'Հրաշալի մի գյուտ, որը փոխեց պատմությունը:' }
      },
      {
        id: 'q_icaro_7',
        topicId: 'tema2',
        difficulty: 'medio',
        questionEs: '7. [Categorías gramaticales] En la oración "Los rayos abrasadores derritieron la cera", ¿qué función sintáctica cumple "la cera"?',
        questionHy: '7. [Քերականական կարգեր] «Los rayos abrasadores derritieron la cera» նախադասության մեջ ի՞նչ շարահյուսական պաշտոն ունի «la cera»:',
        options: [
          { id: 'opt_1', textEs: 'Complemento Directo (CD)', textHy: 'Ուղիղ խնդիր (Complemento Directo — CD)' },
          { id: 'opt_2', textEs: 'Sujeto paciente de pasiva', textHy: 'Կրավորական ենթակա' },
          { id: 'opt_3', textEs: 'Complemento Circunstancial de Lugar', textHy: 'Տեղի պարագա' },
          { id: 'opt_4', textEs: 'Atributo con verbo copulativo', textHy: 'Ստորոգյալի մաս' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Responde a "¿qué derritieron los rayos?" y se puede sustituir por el pronombre "la": "la derritieron".',
        explanationHy: 'Պատասխանում է «ի՞նչը հալեցրին» հարցին և փոխարինվում է «la» դերանունով՝ «la derritieron»:',
        rememberRuleEs: 'Complemento Directo = sustituible por lo, la, los, las.',
        rememberRuleHy: 'Ուղիղ խնդիր = փոխարինելի է lo, la, los, las դերանուններով:',
        followUpExample: { es: 'Dédalo construyó las alas (las construyó -> las alas = CD).', hy: 'Դեդալոսը կառուցեց թևերը (թևերը = ուղիղ խնդիր):' }
      },
      {
        id: 'q_icaro_8',
        topicId: 'tema6',
        difficulty: 'medio',
        questionEs: '8. [Figuras literarias] En la frase "ni muy bajo rozando las olas, ni muy alto desafiando a Helios", ¿qué figura se identifica?',
        questionHy: '8. [Գեղարվեստական միջոցներ] «ni muy bajo rozando las olas, ni muy alto desafiando a Helios» արտահայտության մեջ ո՞ր միջոցն է առկա:',
        options: [
          { id: 'opt_1', textEs: 'Polisíndeton / Anáfora (repite la estructura negativa "ni muy...")', textHy: 'Պոլիսինդետոն / Անաֆորա (կրկնում է «ni muy...» ժխտական կառույցը)' },
          { id: 'opt_2', textEs: 'Onomatopeya de olas', textHy: 'Ալիքների բնաձայնություն' },
          { id: 'opt_3', textEs: 'Paronomasia estricta', textHy: 'Խիստ պարոնոմազիա' },
          { id: 'opt_4', textEs: 'Pleonasmo innecesario', textHy: 'Ավելորդ պլեոնազմ' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Reitera la conjunción negativa "ni" emparejada con "muy", generando un paralelismo rítmico.',
        explanationHy: 'Կրկնում է «ni» ժխտական շաղկապը «muy» բառի հետ՝ ստեղծելով ռիթմիկ զուգահեռականություն:',
        rememberRuleEs: 'La repetición de "ni... ni..." estructura el ritmo bimembre.',
        rememberRuleHy: '«Ni... ni...»-ի կրկնությունը կազմակերպում է երկանդամ ռիթմը:',
        followUpExample: { es: 'Ni de día ni de noche.', hy: 'Ո՛չ ցերեկը, ո՛չ գիշերը:' }
      },
      {
        id: 'q_icaro_9',
        topicId: 'tema2',
        difficulty: 'facil',
        questionEs: '9. [Tipo de texto] ¿Por qué este texto es exactamente un MITO y no una leyenda ni un cuento de hadas?',
        questionHy: '9. [Տեքստի տեսակ] Ինչո՞ւ է այս տեքստը հենց ԱՌԱՍՊԵԼ (MITO), ոչ թե ավանդազրույց կամ հեքիաթ:',
        options: [
          { id: 'opt_1', textEs: 'Porque intervienen dioses (Helios), explica el origen de un fenómeno/mar y se sitúa en un tiempo mítico sagrado', textHy: 'Որովհետև գործում են աստվածներ (Հելիոս), բացատրում է երևույթի/ծովի ծագումը և տեղի է ունենում առասպելական ժամանակում' },
          { id: 'opt_2', textEs: 'Porque está escrito en verso octosílabo con rima asonante', textHy: 'Որովհետև գրված է ութավանկ չափածոյով և ասոնանս հանգով' },
          { id: 'opt_3', textEs: 'Porque ocurrió en España durante el siglo XIX con documentos históricos', textHy: 'Որովհետև տեղի է ունեցել Իսպանիայում 19-րդ դարում՝ պատմական փաստաթղթերով' },
          { id: 'opt_4', textEs: 'Porque tiene un autor contemporáneo registrado en la imprenta', textHy: 'Որովհետև ունի տպարանում գրանցված ժամանակակից հեղինակ' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'Los relatos tradicionales de dioses y héroes que fundan mares (el mar Icario) pertenecen al mito universal.',
        explanationHy: 'Աստվածների և հերոսների ավանդական պատմությունները պատկանում են համաշխարհային առասպելին:',
        rememberRuleEs: 'Dioses + tiempo cósmico sagrado = Mito.',
        rememberRuleHy: 'Աստվածներ + սրբազան տիեզերական ժամանակ = Առասպել:',
        followUpExample: { es: 'El mito de Faetón o el de Prometeo.', hy: 'Ֆաետոնի կամ Պրոմեթևսի առասպելը:' }
      },
      {
        id: 'q_icaro_10',
        topicId: 'tema2',
        difficulty: 'medio',
        questionEs: '10. [Características literarias] Según la tradición, ¿qué nombre geográfico real dio la caída de Ícaro a las aguas?',
        questionHy: '10. [Գրական առանձնահատկություններ] Ըստ ավանդույթի՝ Իկարոսի անկումն ի՞նչ իրական աշխարհագրական անուն տվեց այդ ջրերին:',
        options: [
          { id: 'opt_1', textEs: 'El mar Icario (cerca de la isla de Icaria en el mar Egeo)', textHy: 'Իկարիական ծովը (Իկարիա կղզու մոտ՝ Եգեյան ծովում)' },
          { id: 'opt_2', textEs: 'El océano Atlántico', textHy: 'Ատլանտյան օվկիանոսը' },
          { id: 'opt_3', textEs: 'El río Tajo en Toledo', textHy: 'Տախո գետը Տոլեդոյում' },
          { id: 'opt_4', textEs: 'El mar Cantábrico', textHy: 'Կանտաբրիական ծովը' }
        ],
        correctOptionId: 'opt_1',
        explanationEs: 'El mito explicaba a los antiguos griegos por qué ese sector del Egeo se llamaba mar de Icaria.',
        explanationHy: 'Առասպելը հին հույներին բացատրում էր, թե ինչու էր Եգեյան ծովի այդ հատվածը կոչվում Իկարիայի ծով:',
        rememberRuleEs: 'Muchos mitos explican el origen etiológico de nombres geográficos.',
        rememberRuleHy: 'Շատ առասպելներ բացատրում են աշխարհագրական անունների ծագումը:',
        followUpExample: { es: 'El estrecho del Bósforo (el paso de la vaca Io).', hy: 'Բոսֆորի նեղուցը (Իոյի անցումը):' }
      }
    ]
  }
];
