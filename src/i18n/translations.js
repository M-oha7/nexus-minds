export const translations = {
  ar: {
    home: {
      quote: "أنت لست المشكلة — المشكلة كيف تدير عقلك",
      startTest: "ابدأ الاختبار الذهني",
    },
    test: {
      progress: (step, total) => `سؤال ${step} من ${total}`,
      next: "السؤال التالي",
      showResults: "عرض النتيجة",
      home: "الصفحة الرئيسية",
      homeBack: "← الصفحة الرئيسية",
      resultsTitle: "هذا ما يعكسه ما شاركته",
      startBuilding: "ابدأ بناء نظامك",
      closingLine:
        "النظام الذي تحتاجه ليس لإنجاز أكثر — هو لمنع عقلك من الانقلاب ضدك",
      questions: [
        {
          text: "عندما تكون وحدك في هدوء تام، ماذا يحدث داخلك؟",
          options: [
            {
              label: "عقلي لا يتوقف",
              feedback: "عقلك يعمل بطاقة عالية — يحتاج نظاماً يعطيه الأولوية",
              summaryPoint:
                "عقلك لا يتوقف في الهدوء — يحتاج نظام أولويات لا مزيد من الضجيج",
            },
            {
              label: "أشعر بهشاشة",
              feedback: "عقلك يبحث عن أمان — يحتاج بيئة داخلية ثابتة",
              summaryPoint: "الهشاشة إشارة — عقلك يبحث عن أمان داخلي ثابت",
            },
            {
              label: "تأتيني أسئلة كبيرة",
              feedback: "عقل يبحث عن معنى — نادر لكن يحتاج توجيهاً",
              summaryPoint: "أسئلتك الكبيرة دليل عمق — عقلك يحتاج توجيهاً لا قمعاً",
            },
            {
              label: "أشعر بفراغ",
              feedback: "عقلك يبحث عن هدف — الفراغ إشارة وليس عيباً",
              summaryPoint: "الفراغ ليس عيباً — عقلك ينتظر هدفاً يملأ المساحة",
            },
          ],
        },
        {
          text: "ما الذي يستنزفك في المواقف الاجتماعية؟",
          options: [
            {
              label: "الحديث السطحي",
              feedback: "تحتاج عمقاً حقيقياً — البيئات السطحية تستنزفك",
              summaryPoint: "السطحية تستنزفك — تحتاج عمقاً حقيقياً في تواصلك",
            },
            {
              label: "توقعات الآخرين",
              feedback: "تحمل قناعاً اجتماعياً — وهذا مرهق جداً",
              summaryPoint: "القناع الاجتماعي ثقيل — تحمل توقعات قبل أن تُسأل",
            },
            {
              label: "تحليل ردود أفعالهم",
              feedback: "عقلك لا يستريح حتى اجتماعياً",
              summaryPoint: "عقلك يعمل حتى في التواصل — لا يستريح من التحليل",
            },
            {
              label: "استنزاف الطاقة",
              feedback: "طاقتك الاجتماعية محدودة وهذا طبيعي — ليس خللاً",
              summaryPoint: "طاقتك الاجتماعية محدودة — وهذا طبيعي وليس خللاً",
            },
          ],
        },
        {
          text: "عندما تفشل، ماذا يقول عقلك؟",
          options: [
            {
              label: "كنت أتوقع هذا",
              feedback: "عقلك بنى درعاً وقائياً — لكنه يمنعك من المحاولة الكاملة",
              summaryPoint: "الدرع الوقائي يحميك — لكنه يمنع المحاولة الكاملة أحياناً",
            },
            {
              label: "لماذا لست مثل غيري",
              feedback: "عقلك يقيس نفسه بمسطرة الآخرين — يحتاج معياره الخاص",
              summaryPoint: "المقارنة سريعة — عقلك يحتاج معياره الخاص لا مسطرة الآخرين",
            },
            {
              label: "ما الخطأ الذي ارتكبته",
              feedback: "عقلك يعاقب نفسه بدلاً من أن يتعلم",
              summaryPoint: "العقاب يأتي قبل التعلم — عقلك يحتاج درساً لا لوماً",
            },
            {
              label: "لا يهم (لكنه يهم)",
              feedback: "تحمي نفسك بالصمت — لكن الألم لا يتحول لدرس",
              summaryPoint: "الصمت يحمي — لكن الألم لا يتحول لدرس ما دمت تكتمه",
            },
          ],
        },
        {
          text: "كيف تشعر تجاه مستقبلك؟",
          options: [
            {
              label: "ضبابي لكن عندي طاقة",
              feedback: "طاقتك حقيقية — تحتاج قناة واحدة لا عشر",
              summaryPoint: "طاقتك حقيقية رغم الضباب — تحتاج قناة واحدة لا عشر",
            },
            {
              label: "خوف هادئ",
              feedback: "الخوف الهادئ يهمس ويشكك — أخطر من الخوف الصاخب",
              summaryPoint: "الخوف الهادئ يهمس — أخطر مما يبدو لأنه لا يصرخ",
            },
            {
              label: "أفكار كثيرة بلا اتجاه",
              feedback: "عقلك يحتاج نظاماً يرتب أفكاره لا يقمعها",
              summaryPoint: "أفكارك كثيرة — عقلك يحتاج نظام ترتيب لا قمع",
            },
            {
              label: "فضول أكثر من خوف",
              feedback: "الفضول يفتح أبواباً — لكن بدون نظام قد يتحول لتوتر خفي",
              summaryPoint: "الفضول يقودك — لكن بدون نظام قد يتحول لتوتر خفي",
            },
          ],
        },
      ],
    },
    system: {
      pageTitle: "نظامك",
      pageSubtitle: "أربع أنماط من إجاباتك — وأدوات عملية لإدارتها",
      patternsLabel: "أنماط عقلك",
      whatItMeans: "ماذا يعني",
      toolsLabel: "أدوات عملية",
      routineTitle: "روتينك اليومي",
      routine: [
        {
          when: "الصباح (5 دقائق)",
          habit: "سؤال نية واحد: «ما الشيء الوحيد الذي يستحق اهتمامي اليوم؟»",
        },
        {
          when: "خلال اليوم",
          habit: "مقبرة الأفكار — اكتب كل فكرة فوراً بلا تنفيذ",
        },
        {
          when: "المساء (5 دقائق)",
          habit: "جملة تعلّم واحدة: «اليوم تعلّمت أن ___»",
        },
        {
          when: "أسبوعياً",
          habit: "مراجعة النظام: ما الذي عمل؟ ما الذي أوقفه؟ ماذا أعدّل؟",
        },
      ],
      shareButton: "شارك نظامك",
      shareCopied: "تم نسخ نظامك — الصقه حيث تريد",
      shareDone: "تمت المشاركة",
      shareTitle: "نظامي — Nexus Minds",
      retakeTest: "إعادة الاختبار",
      home: "الصفحة الرئيسية",
    },
    langToggle: { label: "Language", switchTo: "English" },
  },
  en: {
    home: {
      quote: "You are not the problem — the problem is how you manage your mind",
      startTest: "Start the mental test",
    },
    test: {
      progress: (step, total) => `Question ${step} of ${total}`,
      next: "Next question",
      showResults: "See results",
      home: "Home",
      homeBack: "← Home",
      resultsTitle: "This is what your answers reflect",
      startBuilding: "Start building your system",
      closingLine:
        "The system you need is not to achieve more — it is to stop your mind from turning against you",
      questions: [
        {
          text: "When you are alone in complete silence, what happens inside you?",
          options: [
            {
              label: "My mind won't stop",
              feedback:
                "Your mind runs on high energy — it needs a system that gives it priority",
              summaryPoint:
                "Your mind doesn't stop in silence — it needs priorities, not more noise",
            },
            {
              label: "I feel scattered",
              feedback: "Your mind is looking for safety — it needs a steady inner environment",
              summaryPoint: "Scattered feeling is a signal — your mind seeks inner stability",
            },
            {
              label: "Big questions come to me",
              feedback: "A mind searching for meaning — rare, but it needs direction",
              summaryPoint: "Big questions show depth — your mind needs direction, not suppression",
            },
            {
              label: "I feel empty",
              feedback: "Your mind is looking for purpose — emptiness is a signal, not a flaw",
              summaryPoint: "Emptiness isn't a flaw — your mind is waiting for a purpose to fill the space",
            },
          ],
        },
        {
          text: "What drains you in social situations?",
          options: [
            {
              label: "Small talk",
              feedback: "You need real depth — shallow environments drain you",
              summaryPoint: "Small talk drains you — you need depth in how you connect",
            },
            {
              label: "Others' expectations",
              feedback: "You wear a social mask — and that is exhausting",
              summaryPoint: "The social mask is heavy — you carry expectations before being asked",
            },
            {
              label: "Analyzing their reactions",
              feedback: "Your mind doesn't rest even socially",
              summaryPoint: "Your mind works in conversation too — it won't stop analyzing",
            },
            {
              label: "Energy drain",
              feedback: "Your social energy is limited and that's natural — not a defect",
              summaryPoint: "Your social energy is limited — and that's natural, not a defect",
            },
          ],
        },
        {
          text: "When you fail, what does your mind say?",
          options: [
            {
              label: "I expected this",
              feedback: "Your mind built a shield — but it stops you from trying fully",
              summaryPoint: "The shield protects you — but sometimes it blocks a full attempt",
            },
            {
              label: "Why am I not like others",
              feedback: "Your mind measures itself by others' ruler — it needs its own standard",
              summaryPoint: "Comparison comes fast — your mind needs its own measure, not others'",
            },
            {
              label: "What mistake did I make",
              feedback: "Your mind punishes itself instead of learning",
              summaryPoint: "Punishment comes before learning — your mind needs a lesson, not blame",
            },
            {
              label: "It doesn't matter (but it does)",
              feedback: "You protect yourself with silence — but pain doesn't become a lesson",
              summaryPoint: "Silence protects — but pain won't become a lesson while you hide it",
            },
          ],
        },
        {
          text: "How do you feel about your future?",
          options: [
            {
              label: "Foggy but I have energy",
              feedback: "Your energy is real — you need one channel, not ten",
              summaryPoint: "Your energy is real despite the fog — you need one channel, not ten",
            },
            {
              label: "Quiet fear",
              feedback: "Quiet fear whispers and doubts — more dangerous than loud fear",
              summaryPoint: "Quiet fear whispers — more dangerous than it seems because it doesn't shout",
            },
            {
              label: "Many thoughts, no direction",
              feedback: "Your mind needs a system to organize thoughts, not suppress them",
              summaryPoint: "Many thoughts — your mind needs order, not suppression",
            },
            {
              label: "Curiosity more than fear",
              feedback: "Curiosity opens doors — but without a system it can become hidden tension",
              summaryPoint: "Curiosity leads you — but without a system it can turn into quiet tension",
            },
          ],
        },
      ],
    },
    system: {
      pageTitle: "Your System",
      pageSubtitle: "Four patterns from your answers — and practical tools to manage them",
      patternsLabel: "Your mind patterns",
      whatItMeans: "What it means",
      toolsLabel: "Practical tools",
      routineTitle: "Your daily routine",
      routine: [
        {
          when: "Morning (5 min)",
          habit: "One intention question: \"What is the one thing that deserves my attention today?\"",
        },
        {
          when: "During the day",
          habit: "Idea graveyard — write every thought immediately, don't act on it",
        },
        {
          when: "Evening (5 min)",
          habit: "One learning sentence: \"Today I learned that ___\"",
        },
        {
          when: "Weekly",
          habit: "System review: What worked? What blocked me? What do I adjust?",
        },
      ],
      shareButton: "Share your system",
      shareCopied: "Your system was copied — paste it anywhere",
      shareDone: "Shared",
      shareTitle: "My System — Nexus Minds",
      retakeTest: "Retake the test",
      home: "Home",
    },
    langToggle: { label: "اللغة", switchTo: "العربية" },
  },
};

export function getCopy(lang) {
  return translations[lang] ?? translations.ar;
}
