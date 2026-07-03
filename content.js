// محتوى تأسيسي A1 - بيانات المنهج الكامل
const CHAPTERS = [
{
  id: 1, titleDe: "Buchstaben & Zahlen", titleAr: "الحروف والأرقام",
  icon: "Abc", color: "#B3311B",
  lesen: {
    textDe: `Das deutsche Alphabet hat 26 Buchstaben und vier Sonderzeichen: Ä, Ö, Ü und ß.
A wie Apfel, B wie Ball, C wie Cola, D wie Danke.
Die Zahlen von 0 bis 20: null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf, dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn, zwanzig.
Ab 21 sagt man die Einer zuerst: einundzwanzig (21), zweiundzwanzig (22).
Die Zehner: zwanzig (20), dreißig (30), vierzig (40), fünfzig (50), sechzig (60), siebzig (70), achtzig (80), neunzig (90), hundert (100).`,
    explainAr: `الأبجدية الألمانية فيها 26 حرف زي الإنجليزية، بالإضافة لأربع حروف خاصة: Ä (a-Umlaut) وÖ (o-Umlaut) وÜ (u-Umlaut) وß (اس-تسيت، بتتنطق زي SS مشددة).
الأرقام من 0 لـ 20 لازم تتحفظ عن ظهر قلب لأنها أساس كل حاجة. من 21 وطالع، النظام بيتقلب: بيتقال الآحاد الأول بعدين العشرات، يعني 21 = eins + und + zwanzig = "واحد وعشرين" بالظبط زي العربي!`,
    vocab: [
      ["das Alphabet","الأبجدية"], ["der Buchstabe","الحرف"], ["die Zahl","الرقم"],
      ["null","صفر"], ["eins","واحد"], ["zwei","اثنان"], ["drei","ثلاثة"], ["zehn","عشرة"],
      ["zwanzig","عشرون"], ["hundert","مئة"]
    ]
  },
  hoeren: {
    scriptDe: `— Guten Tag! Wie ist Ihre Telefonnummer?
— Meine Nummer ist null-eins-fünf-zwei... drei-vier-sieben-acht-neun.
— Können Sie das bitte wiederholen?
— Ja, natürlich: null, eins, fünf, zwei, drei, vier, sieben, acht, neun.
— Danke schön!`,
    explainAr: `استمعي/استمع للحوار ده بصوت عالٍ (اقرأيه لنفسك ببطء وكأنك بتسمعيه). ده حوار بسيط عن تبادل رقم تليفون. لاحظي إزاي بيتقال كل رقم منفصل عند إملاء رقم التليفون، مش زي الأرقام العادية اللي بتتقال مجمعة.`,
    questions: [
      {q:"كام رقم قال في النص؟", a:["9 أرقام","7 أرقام","5 أرقام"], correct:0}
    ]
  },
  sprechen: {
    promptAr: `تمرين محادثة: اتمرني على نطق الأرقام من 0 لـ 100 بصوت عالٍ بالعشرات (20, 30, 40...). بعدين جربي تقولي رقم تليفونك بالألماني رقم رقم.`,
    dialogDe: [
      ["A:","Wie heißt du?"], ["B:","Ich heiße Sara. Und du?"],
      ["A:","Ich heiße Tom. Wie alt bist du?"], ["B:","Ich bin fünfundzwanzig Jahre alt."]
    ],
    explainAr: `حاولي تمثلي الحوار ده مع صديق أو بصوتك لوحدك، غيري الاسم والعمر بمعلوماتك انتي.`
  },
  schreiben: {
    taskAr: `اكتبي جملتين: الأولى تقولي فيها اسمك وعمرك بالألماني، والتانية تكتبي فيها رقم تليفون وهمي بالكلمات الألمانية (مش أرقام).`,
    exampleDe: `Ich heiße Anna. Ich bin dreißig Jahre alt.
Meine Nummer ist null-sieben-zwei-eins-acht.`
  }
},
{
  id: 2, titleDe: "Begrüßung & Vorstellung", titleAr: "التحية والتعارف",
  icon: "Handshake", color: "#1B4B8A",
  lesen: {
    textDe: `Guten Morgen! Guten Tag! Guten Abend! Gute Nacht!
Hallo, ich bin Lisa. Ich komme aus Deutschland. Ich wohne in Berlin.
— Wer bist du? — Ich bin Ahmed. Ich komme aus Ägypten. Ich wohne in Kairo.
Woher kommst du? Wo wohnst du? Wie geht es dir? — Danke, gut. Und dir?`,
    explainAr: `التحية في الألماني بتختلف حسب وقت اليوم: Guten Morgen للصباح، Guten Tag لباقي اليوم، Guten Abend للمسا، وGute Nacht بس وقت النوم مش للسلام العادي.
لما تقدمي نفسك، بتستخدمي "Ich bin" (أنا) أو "Ich heiße" (اسمي)، وللأصل بتستخدمي "Ich komme aus" (أنا جاي من).`,
    vocab: [
      ["die Begrüßung","التحية"], ["kommen aus","يأتي من"], ["wohnen in","يسكن في"],
      ["woher","من أين"], ["wie geht es dir","إزيك"], ["danke, gut","شكرًا، بخير"]
    ]
  },
  hoeren: {
    scriptDe: `— Hallo, ich bin Peter. Wie heißt du?
— Ich heiße Nour. Freut mich!
— Freut mich auch! Woher kommst du, Nour?
— Ich komme aus Marokko. Und du, Peter?
— Ich komme aus Österreich, aber ich wohne jetzt in München.`,
    explainAr: `حوار تعارف بين شخصين. "Freut mich" معناها "تشرفت بمعرفتك" وبتتقال أول ما حد يتعرف على حد جديد.`,
    questions: [
      {q:"من أين نور؟", a:["المغرب","مصر","النمسا"], correct:0},
      {q:"بيتر بيسكن فين دلوقتي؟", a:["فيينا","ميونخ","برلين"], correct:1}
    ]
  },
  sprechen: {
    promptAr: `اتمرني تقدمي نفسك بالكامل: اسمك، من أين أنت، وفين بتسكني دلوقتي. بعدين اسألي حد تاني نفس الأسئلة.`,
    dialogDe: [
      ["A:","Guten Tag! Ich bin Karim."], ["B:","Guten Tag, Karim! Ich bin Julia."],
      ["A:","Woher kommst du, Julia?"], ["B:","Ich komme aus der Schweiz. Und du?"]
    ],
    explainAr: `مثلي الحوار وغيري بلد المتكلم لدول مختلفة كل مرة عشان تتمرني على أسماء البلاد.`
  },
  schreiben: {
    taskAr: `اكتبي فقرة قصيرة (3-4 جمل) تعرفي بيها نفسك: اسمك، بلدك، مدينتك، وعمرك.`,
    exampleDe: `Hallo! Ich heiße Mona. Ich komme aus Ägypten. Ich wohne in Alexandria. Ich bin achtundzwanzig Jahre alt.`
  }
},
{
  id: 3, titleDe: "Familie", titleAr: "العائلة",
  icon: "Users", color: "#2E7D4F",
  lesen: {
    textDe: `Das ist meine Familie. Das ist mein Vater. Das ist meine Mutter.
Ich habe einen Bruder und eine Schwester. Mein Bruder heißt Max, meine Schwester heißt Lena.
Meine Eltern heißen Peter und Anna. Meine Großeltern wohnen in Hamburg.
Hast du Geschwister? — Ja, ich habe zwei Brüder. / Nein, ich bin Einzelkind.`,
    explainAr: `كلمة "mein" معناها "بتاعي (مذكر)" و"meine" معناها "بتاعتي (مؤنث)" — ده أول تعرف على مفهوم الـ Genus (النوع النحوي) اللي هيرافقك طول تعلم الألماني. لاحظي: der Vater (الأب) مذكر فبنقول mein Vater، لكن die Mutter (الأم) مؤنث فبنقول meine Mutter.`,
    vocab: [
      ["die Familie","العائلة"], ["der Vater","الأب"], ["die Mutter","الأم"],
      ["der Bruder","الأخ"], ["die Schwester","الأخت"], ["die Eltern","الوالدين"],
      ["die Großeltern","الأجداد"], ["das Einzelkind","الابن الوحيد"]
    ]
  },
  hoeren: {
    scriptDe: `— Hast du Geschwister, Lea?
— Ja, ich habe einen Bruder. Er heißt David und ist zwanzig Jahre alt.
— Und deine Eltern? Wo wohnen sie?
— Meine Eltern wohnen in Köln. Mein Vater arbeitet dort als Lehrer.`,
    explainAr: `النص عن عائلة ليا: عندها أخ اسمه ديفيد عمره عشرين سنة، ووالديها ساكنين في كولن.`,
    questions: [
      {q:"عمر David كام؟", a:["عشرين سنة","ثلاثين سنة","خمستاشر سنة"], correct:0},
      {q:"والد ليا شغلته إيه؟", a:["طبيب","معلم","مهندس"], correct:1}
    ]
  },
  sprechen: {
    promptAr: `اتكلمي عن عائلتك: كام أخ وأخت عندك، أسماءهم، وأعمارهم لو تعرفي تقوليها بالألماني.`,
    dialogDe: [
      ["A:","Hast du Geschwister?"], ["B:","Ja, ich habe eine Schwester. Und du?"],
      ["A:","Ich habe keine Geschwister. Ich bin Einzelkind."]
    ],
    explainAr: `"keine" معناها "لا يوجد/ولا واحد" وبتستخدم في النفي مع الأسماء اللي مش معرفة بـ der/die/das.`
  },
  schreiben: {
    taskAr: `ارسمي شجرة عائلة بسيطة في ذهنك واكتبي 4 جمل تصفي بيها أفراد عائلتك بالألماني.`,
    exampleDe: `Meine Familie ist groß. Ich habe zwei Brüder und eine Schwester. Mein Vater heißt Karl. Meine Mutter heißt Rosa.`
  }
},
{
  id: 4, titleDe: "Uhrzeit & Wochentage", titleAr: "الوقت وأيام الأسبوع",
  icon: "Clock", color: "#B3311B",
  lesen: {
    textDe: `Die Woche hat sieben Tage: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag.
Wie spät ist es? — Es ist neun Uhr. Es ist halb zehn. Es ist Viertel nach acht. Es ist Viertel vor elf.
Am Montag habe ich Deutschunterricht. Am Wochenende (Samstag und Sonntag) arbeite ich nicht.`,
    explainAr: `طريقة قول الوقت في الألماني مختلفة عن العربي شوية: "halb zehn" حرفيًا يعني "نص العشرة" لكنها بتعبر عن الساعة 9:30 (نص قبل العشرة مش نص بعد التسعة)! وده لازم تنتبهي له كويس. "Viertel nach" = وربع، "Viertel vor" = إلا ربع.`,
    vocab: [
      ["die Woche","الأسبوع"], ["der Tag","اليوم"], ["die Uhrzeit","التوقيت"],
      ["Montag","الاثنين"], ["Freitag","الجمعة"], ["das Wochenende","نهاية الأسبوع"],
      ["halb","نص"], ["Viertel","ربع"]
    ]
  },
  hoeren: {
    scriptDe: `— Entschuldigung, wie spät ist es?
— Es ist Viertel nach drei.
— Und wann beginnt der Unterricht?
— Der Unterricht beginnt um halb vier, also in fünfzehn Minuten.
— Danke!`,
    explainAr: `حوار عن سؤال حد عن الوقت. لاحظي استخدام "um" قبل الوقت للتعبير عن "في الساعة كذا".`,
    questions: [
      {q:"الساعة كام دلوقتي في الحوار؟", a:["3:15","3:30","4:15"], correct:0},
      {q:"الدرس هيبدأ إمتى؟", a:["3:15","3:30","4:00"], correct:1}
    ]
  },
  sprechen: {
    promptAr: `اتمرني تسألي وتجاوبي عن الوقت الحالي والأيام. جربي تقولي جدولك الأسبوعي بجمل بسيطة.`,
    dialogDe: [
      ["A:","Welcher Tag ist heute?"], ["B:","Heute ist Mittwoch."],
      ["A:","Wie spät ist es?"], ["B:","Es ist zwanzig Uhr."]
    ],
    explainAr: `الألمان بيستخدموا نظام 24 ساعة كتير في المواعيد الرسمية زي القطارات والمواعيد.`
  },
  schreiben: {
    taskAr: `اكتبي جدول يومك: إيه بتعمليه في كل يوم من أيام الأسبوع، بجملة واحدة لكل يوم.`,
    exampleDe: `Am Montag habe ich Deutschunterricht. Am Dienstag arbeite ich. Am Wochenende bin ich frei.`
  }
},
{
  id: 5, titleDe: "Essen & Trinken", titleAr: "الأكل والشرب",
  icon: "UtensilsCrossed", color: "#2E7D4F",
  lesen: {
    textDe: `Zum Frühstück esse ich Brot mit Käse und trinke Kaffee.
Zum Mittagessen esse ich oft Reis mit Hähnchen. Zum Abendessen esse ich Suppe.
Ich mag Äpfel, aber ich mag keine Tomaten.
Was isst du gern? — Ich esse gern Pizza und Pasta.
Möchten Sie etwas trinken? — Ja, ein Glas Wasser, bitte.`,
    explainAr: `فعل "mögen" (يحب) بيتصرف "ich mag" (أنا بحب)، ولنفي حاجة بتحبيهاش بنستخدم "keine/kein" قبل الاسم. عبارة "Was isst du gern?" معناها "إيه اللي بتحبي تاكليه؟" وهي طريقة شائعة جدًا للسؤال عن التفضيلات.`,
    vocab: [
      ["das Frühstück","الفطار"], ["das Mittagessen","الغدا"], ["das Abendessen","العشا"],
      ["das Brot","الخبز"], ["der Käse","الجبنة"], ["das Wasser","المياه"],
      ["mögen","يحب"], ["gern","بحب (فعل)"]
    ]
  },
  hoeren: {
    scriptDe: `— Was möchten Sie bestellen?
— Ich hätte gern einen Salat und ein Glas Orangensaft, bitte.
— Und für Sie?
— Ich nehme die Suppe und ein Wasser, bitte.
— Kommt sofort!`,
    explainAr: `حوار في مطعم بين نادل وزبونين. "Ich hätte gern" و"Ich nehme" طريقتين مهذبتين لطلب الأكل في المطعم.`,
    questions: [
      {q:"الشخص الأول طلب إيه؟", a:["سلطة وعصير برتقال","شوربة ومياه","بيتزا وقهوة"], correct:0},
      {q:"الشخص التاني طلب إيه للشرب؟", a:["عصير","قهوة","مياه"], correct:2}
    ]
  },
  sprechen: {
    promptAr: `اتخيلي إنك في مطعم واطلبي وجبة كاملة بالألماني: فطار أو غدا، ومشروب.`,
    dialogDe: [
      ["Kellner:","Was möchten Sie essen?"], ["Gast:","Ich möchte ein Schnitzel mit Kartoffeln."],
      ["Kellner:","Und zu trinken?"], ["Gast:","Ein Bier, bitte."]
    ],
    explainAr: `"Kellner" = جرسون، "Gast" = ضيف/زبون. اتمرني تلعبي الدورين.`
  },
  schreiben: {
    taskAr: `اكتبي إيه بتاكليه وبتشربيه عادة في الفطار والغدا والعشا (جملة لكل وجبة).`,
    exampleDe: `Zum Frühstück esse ich Eier. Zum Mittagessen esse ich Reis mit Gemüse. Zum Abendessen trinke ich Tee.`
  }
},
{
  id: 6, titleDe: "Wohnung & Zuhause", titleAr: "السكن والمنزل",
  icon: "Home", color: "#1B4B8A",
  lesen: {
    textDe: `Ich wohne in einer kleinen Wohnung. Die Wohnung hat zwei Zimmer, eine Küche und ein Bad.
Im Wohnzimmer gibt es ein Sofa und einen Fernseher. Im Schlafzimmer steht ein Bett.
Meine Wohnung ist im dritten Stock. Es gibt keinen Aufzug, nur eine Treppe.
Wo ist die Küche? — Die Küche ist neben dem Wohnzimmer.`,
    explainAr: `عبارة "es gibt" معناها "يوجد" وهي من أكتر التعبيرات استخدامًا في الألماني، وبتيجي دايمًا مع حالة الـ Akkusativ. كلمة "Stock" معناها "طابق"، و"im dritten Stock" يعني "في الدور التالت".`,
    vocab: [
      ["die Wohnung","الشقة"], ["das Zimmer","الغرفة"], ["die Küche","المطبخ"],
      ["das Bad","الحمام"], ["das Wohnzimmer","غرفة المعيشة"], ["das Schlafzimmer","غرفة النوم"],
      ["der Stock","الدور/الطابق"], ["es gibt","يوجد"]
    ]
  },
  hoeren: {
    scriptDe: `— Wie ist deine neue Wohnung?
— Sie ist klein, aber gemütlich. Sie hat ein Schlafzimmer und eine Küche.
— Gibt es einen Balkon?
— Ja, es gibt einen kleinen Balkon mit Blick auf den Park.`,
    explainAr: `حوار عن شقة جديدة. "gemütlich" كلمة ألمانية مهمة جدًا معناها "مريح ودافي وحلو الجو" ومفيش ليها ترجمة حرفية دقيقة بالعربي.`,
    questions: [
      {q:"الشقة فيها إيه بره الغرف؟", a:["حديقة","بلكونة","مسبح"], correct:1},
      {q:"البلكونة مطلة على إيه؟", a:["الشارع","البحر","الحديقة العامة"], correct:2}
    ]
  },
  sprechen: {
    promptAr: `اوصفي بيتك أو شقتك: كام غرفة فيها، وفين كل غرفة بالنسبة للتانية.`,
    dialogDe: [
      ["A:","Wie viele Zimmer hat deine Wohnung?"], ["B:","Sie hat drei Zimmer und eine Küche."],
      ["A:","Hast du einen Garten?"], ["B:","Nein, aber ich habe einen Balkon."]
    ],
    explainAr: `"wie viele" معناها "كام" وبتستخدم للسؤال عن عدد حاجات."`
  },
  schreiben: {
    taskAr: `اكتبي وصف قصير لبيتك: عدد الغرف، وإيه اللي موجود في كل غرفة رئيسية.`,
    exampleDe: `Meine Wohnung hat vier Zimmer. Im Wohnzimmer gibt es ein Sofa und einen Tisch. Die Küche ist groß und modern.`
  }
},
{
  id: 7, titleDe: "Einkaufen", titleAr: "التسوق",
  icon: "ShoppingBag", color: "#B3311B",
  lesen: {
    textDe: `Ich gehe heute einkaufen. Ich brauche Brot, Milch und Obst.
— Was kostet das Brot? — Das kostet zwei Euro fünfzig.
— Haben Sie auch Äpfel? — Ja, ein Kilo kostet drei Euro.
Das ist zu teuer! Haben Sie etwas Billigeres?
Ich bezahle mit Karte. / Ich bezahle bar.`,
    explainAr: `العملة الألمانية هي اليورو، وبنقول السعر بالطريقة دي: "zwei Euro fünfzig" يعني 2.50 يورو (اليورو الأول، بعدين السنتات). "teuer" = غالي، "billig" = رخيص، و"billiger/etwas Billigeres" = حاجة أرخص.`,
    vocab: [
      ["einkaufen","يتسوق"], ["kosten","يكلف"], ["der Euro","اليورو"],
      ["teuer","غالي"], ["billig","رخيص"], ["bezahlen","يدفع"],
      ["bar","نقدًا"], ["die Karte","الكارت/البطاقة"]
    ]
  },
  hoeren: {
    scriptDe: `— Guten Tag, was kostet dieses T-Shirt?
— Das T-Shirt kostet fünfzehn Euro.
— Und die Hose dort?
— Die Hose kostet fünfundzwanzig Euro. Sie ist im Angebot.
— Gut, ich nehme beide. Kann ich mit Karte bezahlen?
— Ja, natürlich.`,
    explainAr: `حوار تسوق ملابس. "im Angebot" معناها "في عرض/تخفيض". "beide" معناها "الاتنين".`,
    questions: [
      {q:"سعر التيشيرت كام؟", a:["15 يورو","25 يورو","40 يورو"], correct:0},
      {q:"البنطلون كان في إيه؟", a:["سعر عادي","عرض تخفيض","نفذت الكمية"], correct:1}
    ]
  },
  sprechen: {
    promptAr: `اتخيلي إنك في محل واسألي عن أسعار 3 حاجات مختلفة، وقرري هتشتري إيه.`,
    dialogDe: [
      ["Kunde:","Entschuldigung, was kostet diese Tasche?"], ["Verkäufer:","Sie kostet vierzig Euro."],
      ["Kunde:","Das ist etwas teuer. Haben Sie eine günstigere?"], ["Verkäufer:","Ja, diese hier kostet zwanzig Euro."]
    ],
    explainAr: `"Kunde" = عميل، "Verkäufer" = بائع. اتمرني الحوار بدور كل شخص."`
  },
  schreiben: {
    taskAr: `اكتبي قائمة تسوق من 5 حاجات محتاجاها، وحطي سعر تخيلي لكل واحدة باليورو.`,
    exampleDe: `Ich brauche: Brot (zwei Euro), Milch (ein Euro fünfzig), Äpfel (drei Euro), Käse (vier Euro), Wasser (ein Euro).`
  }
},
{
  id: 8, titleDe: "Verkehr & Wege", titleAr: "المواصلات والاتجاهات",
  icon: "Bus", color: "#2E7D4F",
  lesen: {
    textDe: `Ich fahre mit dem Bus zur Arbeit. Manchmal nehme ich die U-Bahn.
Wie komme ich zum Bahnhof? — Gehen Sie geradeaus, dann links, dann rechts.
Der Bus fährt alle zehn Minuten. Die nächste Haltestelle heißt Marktplatz.
Entschuldigung, wo ist die Post? — Die Post ist gegenüber der Bank.`,
    explainAr: `كلمات الاتجاهات أساسية جدًا: "geradeaus" = دغري، "links" = شمال، "rechts" = يمين، "gegenüber" = مقابل. فعل "fahren" بيستخدم للمواصلات (السيارة، الأتوبيس، القطار) بينما "gehen" للمشي.`,
    vocab: [
      ["der Bus","الأتوبيس"], ["die U-Bahn","المترو"], ["der Bahnhof","محطة القطار"],
      ["die Haltestelle","المحطة/الموقف"], ["geradeaus","دغري"], ["links","شمال"],
      ["rechts","يمين"], ["gegenüber","مقابل"]
    ]
  },
  hoeren: {
    scriptDe: `— Entschuldigung, wie komme ich zum Museum?
— Gehen Sie hier geradeaus bis zur Ampel, dann rechts.
— Ist es weit von hier?
— Nein, es ist nur fünf Minuten zu Fuß.
— Vielen Dank!`,
    explainAr: `حوار عن السؤال على الاتجاهات للمتحف. "Ampel" = إشارة المرور، "zu Fuß" = مشيًا على الأقدام.`,
    questions: [
      {q:"لازم تمشي فين الأول؟", a:["يمين", "شمال","دغري لحد الإشارة"], correct:2},
      {q:"المتحف بعيد قد إيه؟", a:["5 دقايق مشي","10 دقايق مشي","بعيد، محتاج مواصلة"], correct:0}
    ]
  },
  sprechen: {
    promptAr: `اتمرني تسألي عن الطريق لمكان معين، وجاوبي بردك بإرشادات باستخدام "geradeaus, links, rechts".`,
    dialogDe: [
      ["A:","Wie komme ich zur Universität?"], ["B:","Nehmen Sie den Bus Nummer sieben."],
      ["A:","Wie lange dauert die Fahrt?"], ["B:","Ungefähr zwanzig Minuten."]
    ],
    explainAr: `"dauert" من فعل "dauern" (يستغرق وقت)، و"ungefähr" معناها "تقريبًا"."`
  },
  schreiben: {
    taskAr: `اكتبي إرشادات بسيطة إزاي توصلي من بيتك لأقرب محطة مواصلات أو محل مشهور.`,
    exampleDe: `Von meiner Wohnung gehe ich geradeaus. Dann gehe ich links. Die Haltestelle ist gegenüber der Schule.`
  }
},
{
  id: 9, titleDe: "Gesundheit & Körper", titleAr: "الصحة والجسم",
  icon: "Heart", color: "#1B4B8A",
  lesen: {
    textDe: `Was fehlt Ihnen? — Ich habe Kopfschmerzen und Fieber.
Mein Bauch tut weh. Meine Augen sind müde.
Ich gehe zum Arzt. Der Arzt sagt: Sie müssen viel Wasser trinken und sich ausruhen.
Nimm diese Tabletten dreimal täglich.`,
    explainAr: `عبارة "Was fehlt Ihnen?" (حرفيًا: إيه اللي ناقصك؟) هي الطريقة الرسمية اللي بيسأل بيها الدكتور عن الأعراض. "tut weh" معناها "بيوجع"، وبتستخدميها هكذا: "[العضو] tut weh".`,
    vocab: [
      ["der Kopf","الراس"], ["der Bauch","البطن"], ["das Auge","العين"],
      ["die Schmerzen","الألم"], ["das Fieber","الحمى"], ["der Arzt","الدكتور"],
      ["die Tablette","الحبة/الدواء"], ["sich ausruhen","يرتاح"]
    ]
  },
  hoeren: {
    scriptDe: `— Guten Tag, was fehlt Ihnen?
— Ich habe seit zwei Tagen Halsschmerzen und Husten.
— Haben Sie auch Fieber?
— Ja, ein bisschen. Neununddreißig Grad.
— Sie müssen sich ausruhen und viel Tee trinken. Ich gebe Ihnen ein Rezept.`,
    explainAr: `حوار في عيادة دكتور. "Halsschmerzen" = ألم في الحلق، "Husten" = كحة، "Rezept" = روشتة.`,
    questions: [
      {q:"المريض بيعاني من إيه؟", a:["صداع وحمى","ألم حلق وكحة","ألم بطن"], correct:1},
      {q:"درجة حرارته كام؟", a:["37 درجة","38 درجة","39 درجة"], correct:2}
    ]
  },
  sprechen: {
    promptAr: `اتخيلي إنك عند الدكتور واشرحي أعراض مرضية بسيطة (صداع، حمى، ألم بطن).`,
    dialogDe: [
      ["Arzt:","Was fehlt Ihnen?"], ["Patient:","Ich habe Kopfschmerzen und bin müde."],
      ["Arzt:","Seit wann haben Sie das?"], ["Patient:","Seit gestern."]
    ],
    explainAr: `"seit wann" = من امتى، "seit gestern" = من امبارح."`
  },
  schreiben: {
    taskAr: `اكتبي جملتين تشرحي فيهم عرض مرضي وإيه النصيحة اللي ممكن الدكتور يديهالك.`,
    exampleDe: `Ich habe Bauchschmerzen. Der Arzt sagt, ich muss viel Wasser trinken und mich ausruhen.`
  }
},
{
  id: 10, titleDe: "Wetter & Jahreszeiten", titleAr: "الطقس والفصول",
  icon: "CloudSun", color: "#2E7D4F",
  lesen: {
    textDe: `Es gibt vier Jahreszeiten: Frühling, Sommer, Herbst und Winter.
Im Sommer ist es warm und sonnig. Im Winter ist es kalt und es schneit oft.
Wie ist das Wetter heute? — Es regnet und es ist windig.
Im Frühling blühen die Blumen. Im Herbst fallen die Blätter.`,
    explainAr: `أفعال الطقس في الألماني بتيجي غالبًا مع "es" (هي/الأمر) لأن الطقس مالوش فاعل حقيقي: "es regnet" (بتمطر)، "es schneit" (بتتلج)، "es ist windig" (فيه هوا).`,
    vocab: [
      ["das Wetter","الطقس"], ["die Jahreszeit","الفصل"], ["der Sommer","الصيف"],
      ["der Winter","الشتاء"], ["regnen","يمطر"], ["schneien","تتلج"],
      ["sonnig","مشمس"], ["kalt","بارد"]
    ]
  },
  hoeren: {
    scriptDe: `— Wie ist das Wetter morgen?
— Morgen wird es sonnig und warm, ungefähr fünfundzwanzig Grad.
— Und am Wochenende?
— Am Samstag regnet es, aber am Sonntag wird es wieder besser.`,
    explainAr: `نشرة جوية مبسطة. "morgen" هنا معناها "بكرة" (مش الصباح، ده بيتكتب Morgen بحرف كبير للصباح).`,
    questions: [
      {q:"الجو بكرة هيكون إزاي؟", a:["ممطر وبارد","مشمس ودافي","تلج"], correct:1},
      {q:"يوم إمتى هيمطر؟", a:["السبت","الأحد","بكرة"], correct:0}
    ]
  },
  sprechen: {
    promptAr: `اوصفي الطقس النهارده وفصلك المفضل وليه.`,
    dialogDe: [
      ["A:","Welche Jahreszeit magst du am meisten?"], ["B:","Ich mag den Frühling, weil es nicht zu kalt und nicht zu heiß ist."],
      ["A:","Wie ist das Wetter heute bei dir?"], ["B:","Es ist bewölkt, aber warm."]
    ],
    explainAr: `"weil" معناها "لأن" وبتخلي الفعل يروح آخر الجملة."`
  },
  schreiben: {
    taskAr: `اكتبي فقرة قصيرة عن طقس بلدك في فصلين مختلفين.`,
    exampleDe: `Im Sommer ist es in Ägypten sehr heiß und sonnig. Im Winter ist es mild, aber manchmal windig.`
  }
},
{
  id: 11, titleDe: "Reisen & Urlaub", titleAr: "السفر والإجازة",
  icon: "Plane", color: "#B3311B",
  lesen: {
    textDe: `Nächsten Sommer fahre ich nach Deutschland. Ich fliege mit dem Flugzeug.
Ich brauche einen Reisepass und ein Visum. Ich buche ein Hotel in Berlin.
Wie lange bleibst du dort? — Ich bleibe zwei Wochen.
Ich packe meinen Koffer: Kleidung, Schuhe und eine Kamera.`,
    explainAr: `فعل "fahren" بيستخدم للسفر بالبر (عربية، قطر)، وفعل "fliegen" بيستخدم للسفر بالطيران تحديدًا. "nach" بتستخدم مع أسماء البلاد والمدن غالبًا (nach Deutschland، nach Berlin).`,
    vocab: [
      ["reisen","يسافر"], ["der Urlaub","الإجازة"], ["das Flugzeug","الطيارة"],
      ["der Reisepass","جواز السفر"], ["das Visum","الفيزا"], ["buchen","يحجز"],
      ["der Koffer","الشنطة/الفالصو"], ["bleiben","يبقى/يفضل"]
    ]
  },
  hoeren: {
    scriptDe: `— Wohin fährst du in den Ferien?
— Ich fliege nach Spanien, nach Barcelona.
— Wie lange bleibst du dort?
— Ich bleibe eine Woche. Ich wohne in einem Hostel in der Stadtmitte.
— Das klingt toll! Reist du allein?
— Nein, ich reise mit meiner Freundin.`,
    explainAr: `حوار عن رحلة لبرشلونة. "Ferien" = إجازة (غالبًا إجازة مدرسية/دراسية)، "allein" = لوحدك.`,
    questions: [
      {q:"هيسافر فين؟", a:["ألمانيا","إسبانيا","فرنسا"], correct:1},
      {q:"هيبقى قد إيه هناك؟", a:["أسبوعين","أسبوع","شهر"], correct:1}
    ]
  },
  sprechen: {
    promptAr: `اتكلمي عن رحلة أحلامك: هتروحي فين، ومعاكي مين، وهتفضلي قد إيه.`,
    dialogDe: [
      ["A:","Wohin möchtest du reisen?"], ["B:","Ich möchte nach Italien reisen."],
      ["A:","Warum?"], ["B:","Weil ich die italienische Kultur und das Essen liebe."]
    ],
    explainAr: `"möchte" صيغة مؤدبة من فعل "wollen" (يريد) وبتستخدم كتير للتعبير عن الرغبات."`
  },
  schreiben: {
    taskAr: `اكتبي خطة رحلة قصيرة: هتسافري فين، إمتى، ومعاكي إيه في الشنطة.`,
    exampleDe: `Im August fliege ich nach Deutschland. Ich bleibe drei Wochen. Ich packe Kleidung, einen Regenschirm und Bücher.`
  }
},
{
  id: 12, titleDe: "Wiederholung & Alltag", titleAr: "المراجعة الشاملة والحياة اليومية",
  icon: "GraduationCap", color: "#1B4B8A",
  lesen: {
    textDe: `Mein Alltag: Ich stehe um sieben Uhr auf. Ich frühstücke und trinke Kaffee.
Um acht Uhr fahre ich mit dem Bus zur Arbeit. Ich arbeite bis siebzehn Uhr.
Am Abend koche ich und esse mit meiner Familie. Am Wochenende treffe ich Freunde oder ich reise.
Deutsch lernen macht Spaß, aber es ist manchmal schwierig. Übung macht den Meister!`,
    explainAr: `الكابيتل ده بيجمع كل حاجة اتعلمناها: الأرقام، الوقت، العائلة، الأكل، المواصلات، والطقس، في وصف يوم كامل. لاحظي إزاي كل الأفعال اتنسقت مع بعضها في جمل عن الروتين اليومي. "Übung macht den Meister" مثل ألماني شهير معناه "التمرين يصنع المُعلّم" (زي "التكرار يعلّم الشُطّار").`,
    vocab: [
      ["der Alltag","الحياة اليومية"], ["aufstehen","يصحى"], ["die Arbeit","الشغل"],
      ["treffen","يقابل"], ["der Freund","الصديق"], ["schwierig","صعب"],
      ["die Übung","التمرين"], ["der Meister","المُعلّم/الخبير"]
    ]
  },
  hoeren: {
    scriptDe: `— Wie war dein Tag heute?
— Ganz normal. Ich bin um sieben aufgestanden, war bis fünf bei der Arbeit, und jetzt bin ich zu Hause.
— Was machst du heute Abend?
— Ich koche Abendessen und dann rufe ich meine Familie an.
— Und am Wochenende, hast du Pläne?
— Ja, ich treffe Freunde und wir gehen ins Kino.`,
    explainAr: `حوار شامل عن يوم عادي وخطط الويكند. ده تدريب مراجعة يجمع مفردات من كل الكباتل السابقة.`,
    questions: [
      {q:"هيعمل إيه بالليل؟", a:["هيخرج","هيطبخ ويكلم عيلته","هينام بدري"], correct:1},
      {q:"في الويكند هيروح فين؟", a:["السينما","المطعم","السفر"], correct:0}
    ]
  },
  sprechen: {
    promptAr: `اتكلمي عن يومك بالكامل من الصبح للمسا باستخدام كل المفردات اللي اتعلمتيها: الوقت، الأكل، الشغل، والمواصلات.`,
    dialogDe: [
      ["A:","Erzähl mir von deinem typischen Tag."], ["B:","Ich stehe früh auf, arbeite, und abends treffe ich manchmal Freunde."],
      ["A:","Was machst du gern in der Freizeit?"], ["B:","Ich lese gern und ich reise gern."]
    ],
    explainAr: `"Freizeit" = وقت الفراغ. ده تمرين مراجعة شامل — استخدمي أكتر مفردات ممكنة اتعلمتيها في الـ11 كابيتل اللي فاتوا."`
  },
  schreiben: {
    taskAr: `اكتبي فقرة كاملة (6-8 جمل) تصفي فيها يوم كامل في حياتك، من الصحيان للنوم، مستخدمة أكبر عدد من المفردات اللي اتعلمتيها في الكورس.`,
    exampleDe: `Ich stehe um sechs Uhr auf. Ich frühstücke mit meiner Familie. Um acht Uhr fahre ich mit dem Bus zur Arbeit. Mittags esse ich Reis mit Hähnchen. Am Abend koche ich und wir essen zusammen. Am Wochenende reise ich gern oder treffe Freunde. Deutsch lernen ist manchmal schwierig, aber es macht Spaß!`
  }
}
];
