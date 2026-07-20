import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      landing: {
        title: "You're not the problem.",
        subtitle: "The problem is how you manage your mind — and that can be learned.",
        description: "Not a personality test. Not a label. Just a mirror that reflects how your mind works — and builds a system around it.",
        button: "Start the Test",
        mission: "Our Mission",
        missionText: "To help individuals understand and manage their minds through personalized psychological insights and practical systems.",
        vision: "Our Vision",
        visionText: "A world where everyone has access to tools that help them understand their unique mind and live more intentionally.",
        problem: "The Problem",
        problemText: "Most people don't understand how their minds work. They struggle with focus, decisions, and productivity because they use generic solutions that don't fit their unique psychology.",
        principles: "Our Principles",
        principlesList: [
          "Every mind is unique and deserves personalized understanding",
          "Psychological insights should be practical and actionable",
          "Self-awareness is the foundation of growth",
          "Small, consistent changes lead to transformation"
        ],
        coreIdea: "Core Idea",
        coreIdeaText: "Your mind has patterns. When you understand them, you can work with your nature instead of against it."
      },
      test: {
        q1: {
          question: "When you're completely alone in silence, what happens inside you?",
          options: [
            { text: "My mind won't stop", tag: "overflow" },
            { text: "I feel a strange fragility", tag: "fragile" },
            { text: "Big questions about life come to me", tag: "depth" },
            { text: "I feel empty even without pressure", tag: "void" }
          ]
        },
        q2: {
          question: "What drains you most in social situations?",
          options: [
            { text: "Surface talk that goes nowhere", tag: "depth_seeker" },
            { text: "Playing a role that doesn't feel like me", tag: "mask" },
            { text: "Constantly analyzing people's reactions", tag: "analyzer" },
            { text: "I need long recovery time after", tag: "introvert" }
          ]
        },
        q3: {
          question: "When you fail at something important, what does your mind say immediately?",
          options: [
            { text: "I knew I would fail", tag: "shield" },
            { text: "Why can't I be like others?", tag: "compare" },
            { text: "What exactly did I do wrong?", tag: "self_punish" },
            { text: "It doesn't matter — but it really does inside", tag: "denial" }
          ]
        },
        q4: {
          question: "How do you usually feel about your future?",
          options: [
            { text: "Foggy — I have energy but no direction", tag: "fog" },
            { text: "A quiet fear that whispers and doubts", tag: "quiet_fear" },
            { text: "Too many thoughts, I don't know which are really me", tag: "chaos" },
            { text: "Curiosity more than anything else", tag: "curious" }
          ]
        },
        q5: {
          question: "Which sentence best describes your relationship with your thoughts?",
          options: [
            { text: "My thoughts race ahead and sometimes exhaust me", tag: "racing" },
            { text: "I need a long time to reach a clear thought", tag: "slow_process" },
            { text: "My thoughts are deep but hard to explain to others", tag: "deep_unexpressed" },
            { text: "My thoughts are clear but I don't act on them", tag: "procrastinator" }
          ]
        },
        q6: {
          question: "What makes you feel real rather than playing a role?",
          options: [
            { text: "When I'm completely alone", tag: "solitude" },
            { text: "When talking to someone who truly understands", tag: "connection" },
            { text: "When I write or create something", tag: "creator" },
            { text: "When I'm in a state of complete flow and focus", tag: "flow" }
          ]
        },
        q7: {
          question: "How do you deal with the many thoughts in your head?",
          options: [
            { text: "I let them spin until they calm down", tag: "passive" },
            { text: "I try to write them but never finish", tag: "incomplete" },
            { text: "I talk about them with someone", tag: "verbal" },
            { text: "I look for a project to channel them into", tag: "channeler" }
          ]
        },
        q8: {
          question: "What stops you from starting what you want to do?",
          options: [
            { text: "Fear of failure before even trying", tag: "fear_start" },
            { text: "I don't know where to start", tag: "no_start" },
            { text: "I start but stop when it gets hard", tag: "quit_hard" },
            { text: "I think too much and execute too little", tag: "overthink_act" }
          ]
        },
        q9: {
          question: "What do you need most in your life right now?",
          options: [
            { text: "A system to organize my life and thoughts", tag: "needs_system" },
            { text: "A person or community that understands me", tag: "needs_connection" },
            { text: "Clarity in direction and purpose", tag: "needs_clarity" },
            { text: "Confidence in myself and my abilities", tag: "needs_confidence" }
          ]
        },
        q10: {
          question: "If you described yourself in one sentence to someone who doesn't know you...",
          options: [
            { text: "Someone searching for meaning in everything", tag: "meaning_seeker" },
            { text: "I see what others don't but struggle to explain it", tag: "visionary" },
            { text: "Big energy with no clear channel", tag: "unchanneled" },
            { text: "A restless mind searching for its place", tag: "restless" }
          ]
        },
        next: "Next",
        reflection: "Reflection"
      },
      results: {
        loading: "Analyzing your mind patterns...",
        pattern: "My Mind Pattern",
        basedOn: "Based on your answers, you tend toward",
        percentage: "match",
        strengths: "Strengths",
        challenges: "Challenges",
        button: "Build Your System",
        share: "Share Result",
        observable: "Observable behaviors that match this pattern:",
        behaviors: {
          b1: "When facing a problem, do you start by gathering a lot of information before deciding?",
          b2: "Do you prefer working alone for long periods to complete a task?",
          b3: "Do you lose enthusiasm when tasks become repetitive?",
          b4: "Do you need complete silence to think clearly?",
          b5: "Do you analyze conversations even after they end?"
        }
      },
      system: {
        loading: "Building your personalized system...",
        morning: "Morning",
        duringDay: "During the day",
        evening: "Evening",
        weekly: "Weekly",
        firstStep: "First Step",
        warning: "What to avoid",
        coreRule: "Core Rule",
        share: "Share",
        decisionMaking: "Decision Making Framework",
        learning: "Learning Method",
        distraction: "Managing Distraction",
        decisionFramework: {
          step1: "Pause for 30 seconds before deciding",
          step2: "Write down 3 options",
          step3: "Rate each option 1-10",
          step4: "Choose and commit"
        },
        learningMethod: {
          principle: "Learn in focused 25-minute sessions",
          technique: "Teach what you learn to someone else",
          review: "Review notes after 24 hours"
        },
        distractionManagement: {
          identify: "Identify your main distraction triggers",
          environment: "Create a distraction-free environment",
          technique: "Use the 2-minute rule for quick tasks"
        },
        challenge: {
          title: "7-Day Mind Challenge",
          subtitle: "Transform your mind in one week",
          day1: "Day 1: Awareness",
          day2: "Day 2: Focus",
          day3: "Day 3: Decision",
          day4: "Day 4: Learning",
          day5: "Day 5: Environment",
          day6: "Day 6: Reflection",
          day7: "Day 7: Integration",
          start: "Start Challenge",
          progress: "Day {day} of 7",
          complete: "Challenge Complete!",
          task1: "Observe your thoughts for 10 minutes without judgment",
          task2: "Work on one task for 25 minutes without distractions",
          task3: "Practice your decision-making framework on a real decision",
          task4: "Learn something new using your learning method",
          task5: "Optimize your environment for your mind type",
          task6: "Write down 3 insights about your mind this week",
          task7: "Combine all practices into your daily routine"
        },
        dailyTip: {
          title: "Daily Tip",
          refresh: "New Tip",
          tips: {
            t1: "Before starting any task, take 30 seconds to clarify what 'done' looks like.",
            t2: "Your mind works best when you honor its natural rhythm. Don't force focus when you need rest.",
            t3: "Write down thoughts that loop in your mind. Externalizing them frees mental space.",
            t4: "The best decision is often the one you can commit to fully. Indecision drains energy.",
            t5: "Protect your peak energy hours for your most important work.",
            t6: "When overwhelmed, reduce to ONE thing. Everything else can wait.",
            t7: "Your environment shapes your mind more than you think. Design it intentionally."
          }
        },
        dashboard: {
          title: "Your Progress",
          testDate: "Test completed on",
          daysSince: "Days since first test",
          challengeProgress: "Challenge progress",
          challengeNotStarted: "Not started",
          challengeCompleted: "Completed",
          challengeInProgress: "In progress",
          tipsViewed: "Tips viewed",
          systemsBuilt: "Systems built",
          mindType: "Your mind type",
          streak: "Day streak",
          viewChallenge: "View Challenge",
          viewSystem: "View System"
        }
      },
      reflections: {
        overflow: "Your mind runs at high capacity — it hasn't learned to prioritize yet",
        fragile: "Your mind seeks safety — it needs a stable inner environment",
        depth: "A mind seeking meaning — rare but needs direction",
        void: "The void is a signal, not a flaw — your mind seeks purpose",
        depth_seeker: "You need real depth — surface environments drain you",
        mask: "You wear a social mask — that's exhausting",
        analyzer: "Your mind doesn't rest even socially",
        introvert: "Your social energy is limited — that's natural, not a flaw",
        shield: "Your mind built a protective shield — but it stops you from fully trying",
        compare: "Your mind measures itself by others' ruler — it needs its own standard",
        self_punish: "Your mind punishes itself instead of learning",
        denial: "You protect yourself with silence — but pain can't become a lesson that way",
        fog: "Your energy is real — you need one channel, not ten",
        quiet_fear: "Quiet fear is more dangerous — it whispers and doubts",
        chaos: "Your mind needs a system to organize thoughts, not suppress them",
        curious: "Curiosity is a weapon — but it needs direction so it doesn't scatter"
      }
    }
  },
  ar: {
    translation: {
      landing: {
        title: "أنت لست المشكلة",
        subtitle: "المشكلة كيف تدير عقلك — وهذا شيء يمكن تعلمه",
        description: "ليس اختبار شخصية. ليس تصنيفاً. مجرد مرآة تعكس لك طريقة عقلك — وتبني لك نظاماً يعمل معك.",
        button: "ابدأ الاختبار",
        mission: "مهمتنا",
        missionText: "مساعدة الأفراد على فهم وإدارة عقولهم من خلال رؤى نفسية شخصية وأنظمة عملية.",
        vision: "رؤيتنا",
        visionText: "عالم يمتلك فيه الجميع أدوات تساعدهم على فهم عقلهم الفريد والعيش بقصد أكبر.",
        problem: "المشكلة",
        problemText: "معظم الناس لا يفهمون كيف تعمل عقولهم. يعانون من التركيز والقرارات والإنتاجية لأنهم يستخدمون حلولاً عامة لا تناسب نفسيتهم الفريدة.",
        principles: "مبادئنا",
        principlesList: [
          "كل عقل فريد ويستحق فهماً شخصياً",
          "الرؤى النفسية يجب أن تكون عملية وقابلة للتطبيق",
          "الوعي الذاتي هو أساس النمو",
          "التغييرات الصغيرة والمتسقة تؤدي إلى التحول"
        ],
        coreIdea: "الفكرة الأساسية",
        coreIdeaText: "عقلك له أنماط. عندما تفهمها، يمكنك العمل مع طبيعتك بدلاً من ضدها."
      },
      test: {
        q1: {
          question: "عندما تكون وحدك في هدوء تام، ماذا يحدث داخلك؟",
          options: [
            { text: "عقلي لا يتوقف", tag: "overflow" },
            { text: "أشعر بهشاشة غريبة", tag: "fragile" },
            { text: "تأتيني أسئلة كبيرة عن الحياة", tag: "depth" },
            { text: "أشعر بفراغ حتى بدون ضغط", tag: "void" }
          ]
        },
        q2: {
          question: "ما الذي يستنزفك أكثر في المواقف الاجتماعية؟",
          options: [
            { text: "الحديث السطحي الذي لا يصل لمكان", tag: "depth_seeker" },
            { text: "أداء دور لا أشعر أنه أنا", tag: "mask" },
            { text: "تحليل ردود أفعال الناس باستمرار", tag: "analyzer" },
            { text: "أحتاج وقتاً طويلاً لاستعادة طاقتي بعدها", tag: "introvert" }
          ]
        },
        q3: {
          question: "عندما تفشل في شيء مهم، ماذا يقول عقلك فوراً؟",
          options: [
            { text: "كنت أعرف أنني سأفشل", tag: "shield" },
            { text: "لماذا لا أستطيع أن أكون مثل غيري؟", tag: "compare" },
            { text: "ما الخطأ الذي ارتكبته بالضبط؟", tag: "self_punish" },
            { text: "لا يهم — لكنه يهم كثيراً في الداخل", tag: "denial" }
          ]
        },
        q4: {
          question: "كيف تشعر تجاه مستقبلك في أغلب الأوقات؟",
          options: [
            { text: "ضبابي — عندي طاقة لكن لا أعرف أين أوجهها", tag: "fog" },
            { text: "خوف هادئ يهمس ويشكك", tag: "quiet_fear" },
            { text: "أفكار كثيرة جداً لا أعرف أيها أنا", tag: "chaos" },
            { text: "فضول أكثر من أي شيء آخر", tag: "curious" }
          ]
        },
        q5: {
          question: "ما الجملة التي تصف علاقتك بأفكارك؟",
          options: [
            { text: "أفكاري تسبقني وأحياناً تتعبني", tag: "racing" },
            { text: "أحتاج وقتاً طويلاً لأصل لفكرة واضحة", tag: "slow_process" },
            { text: "أفكاري عميقة لكن يصعب أشرحها للآخرين", tag: "deep_unexpressed" },
            { text: "أفكاري واضحة لكنني لا أنفذها", tag: "procrastinator" }
          ]
        },
        q6: {
          question: "ما الذي يجعلك تشعر أنك حقيقي وليس تؤدي دوراً؟",
          options: [
            { text: "حين أكون وحدي تماماً", tag: "solitude" },
            { text: "حين أتحدث مع شخص يفهمني فعلاً", tag: "connection" },
            { text: "حين أكتب أو أخلق شيئاً", tag: "creator" },
            { text: "حين أكون في حالة تدفق وتركيز كامل", tag: "flow" }
          ]
        },
        q7: {
          question: "كيف تتعامل مع الأفكار الكثيرة في رأسك؟",
          options: [
            { text: "أتركها تدور حتى تهدأ", tag: "passive" },
            { text: "أحاول أكتبها لكنني لا أكمل", tag: "incomplete" },
            { text: "أتحدث عنها مع أحد", tag: "verbal" },
            { text: "أبحث عن مشروع أفرغها فيه", tag: "channeler" }
          ]
        },
        q8: {
          question: "ما الذي يمنعك من البدء بما تريد فعله؟",
          options: [
            { text: "الخوف من الفشل قبل المحاولة", tag: "fear_start" },
            { text: "لا أعرف من أين أبدأ", tag: "no_start" },
            { text: "أبدأ ثم أتوقف حين يصعب", tag: "quit_hard" },
            { text: "أفكر كثيراً وأنفذ قليلاً", tag: "overthink_act" }
          ]
        },
        q9: {
          question: "ما الذي تحتاجه أكثر الآن في حياتك؟",
          options: [
            { text: "نظام يرتب حياتي وأفكاري", tag: "needs_system" },
            { text: "شخص أو مجتمع يفهمني", tag: "needs_connection" },
            { text: "وضوح في الاتجاه والهدف", tag: "needs_clarity" },
            { text: "ثقة في نفسي وقدراتي", tag: "needs_confidence" }
          ]
        },
        q10: {
          question: "لو وصفت نفسك بجملة واحدة لشخص لا يعرفك...",
          options: [
            { text: "باحث عن معنى في كل شيء", tag: "meaning_seeker" },
            { text: "أرى ما لا يراه الآخرون لكن يصعب أشرحه", tag: "visionary" },
            { text: "طاقة كبيرة بلا قناة واضحة", tag: "unchanneled" },
            { text: "عقل لا يهدأ يبحث عن مكانه", tag: "restless" }
          ]
        },
        next: "التالي",
        reflection: "تأمل"
      },
      results: {
        loading: "جارٍ تحليل طريقة تفكيرك...",
        pattern: "نمط عقلي",
        basedOn: "بناءً على إجاباتك، تميل نحو",
        percentage: "تطابق",
        strengths: "نقاط القوة",
        challenges: "التحديات",
        button: "ابدأ بناء نظامك",
        share: "مشاركة النتيجة",
        observable: "سلوكيات قابلة للملاحظة تطابق هذا النمط:",
        behaviors: {
          b1: "عند مواجهة مشكلة، هل تبدأ بجمع معلومات كثيرة قبل اتخاذ قرار؟",
          b2: "هل تفضل العمل وحدك لفترات طويلة لإنهاء مهمة؟",
          b3: "هل تفقد الحماس عندما تكون المهام متكررة؟",
          b4: "هل تحتاج صمتاً تاماً للتفكير بوضوح؟",
          b5: "هل تحلل المحادثات حتى بعد انتهائها؟"
        }
      },
      system: {
        loading: "جارٍ بناء نظامك الشخصي...",
        morning: "الصباح",
        duringDay: "خلال اليوم",
        evening: "المساء",
        weekly: "أسبوعياً",
        firstStep: "الخطوة الأولى",
        warning: "ما يجب تجنبه",
        coreRule: "القاعدة الأساسية",
        share: "مشاركة",
        decisionMaking: "إطار اتخاذ القرار",
        learning: "طريقة التعلم",
        distraction: "إدارة التشتت",
        decisionFramework: {
          step1: "توقف 30 ثانية قبل اتخاذ القرار",
          step2: "اكتب 3 خيارات",
          step3: "قيم كل خيار من 1-10",
          step4: "اختر والتزم"
        },
        learningMethod: {
          principle: "تعلم في جلسات مركزة 25 دقيقة",
          technique: "علّم ما تعلمته لشخص آخر",
          review: "راجع ملاحظاتك بعد 24 ساعة"
        },
        distractionManagement: {
          identify: "حدد محفزات التشتت الرئيسية",
          environment: "أنشئ بيئة خالية من التشتت",
          technique: "استخدم قاعدة الدقيقتين للمهام السريعة"
        },
        challenge: {
          title: "تحدي العقل 7 أيام",
          subtitle: "حوّل عقلك في أسبوع واحد",
          day1: "اليوم 1: الوعي",
          day2: "اليوم 2: التركيز",
          day3: "اليوم 3: القرار",
          day4: "اليوم 4: التعلم",
          day5: "اليوم 5: البيئة",
          day6: "اليوم 6: التأمل",
          day7: "اليوم 7: التكامل",
          start: "ابدأ التحدي",
          progress: "اليوم {day} من 7",
          complete: "اكتمل التحدي!",
          task1: "راقب أفكارك لمدة 10 دقائق بدون حكم",
          task2: "اعمل على مهمة واحدة لمدة 25 دقيقة بدون تشتت",
          task3: "تدرب على إطار اتخاذ القرار على قرار حقيقي",
          task4: "تعلم شيئاً جديداً باستخدام طريقة تعلمك",
          task5: "حسّن بيئتك حسب نوع عقلك",
          task6: "اكتب 3 رؤى عن عقلك هذا الأسبوع",
          task7: "ادمج جميع الممارسات في روتينك اليومي"
        },
        dailyTip: {
          title: "نصيحة يومية",
          refresh: "نصيحة جديدة",
          tips: {
            t1: "قبل البدء في أي مهمة، خذ 30 ثانية لتوضيح شكل 'الإنجاز'.",
            t2: "يعمل عقلك بشكل أفضل عندما تحترم إيقاعه الطبيعي. لا تفرض التركيز عندما تحتاج للراحة.",
            t3: "اكتب الأفكار التي تدور في عقلك. إخراجها يوفر مساحة ذهنية.",
            t4: "أفضل قرار غالباً هو الذي يمكنك الالتزام به تماماً. التردد يستنزف الطاقة.",
            t5: "احمِ ساعات طاقتك القصوى لأهم أعمالك.",
            t6: "عند الشعور بالإرهاق، قلل إلى شيء واحد. الباقي يمكن أن ينتظر.",
            t7: "بيئتك تشكل عقلك أكثر مما تظن. صممها بعناية."
          }
        },
        dashboard: {
          title: "تقدمك",
          testDate: "اكتمل الاختبار في",
          daysSince: "أيام منذ أول اختبار",
          challengeProgress: "تقدم التحدي",
          challengeNotStarted: "لم يبدأ",
          challengeCompleted: "مكتمل",
          challengeInProgress: "قيد التقدم",
          tipsViewed: "النصائح المشاهدة",
          systemsBuilt: "الأنظمة المبنية",
          mindType: "نوع عقلك",
          streak: "أيام متتالية",
          viewChallenge: "عرض التحدي",
          viewSystem: "عرض النظام"
        }
      },
      reflections: {
        overflow: "عقلك يعمل بطاقة عالية — لم يتعلم بعد كيف يُعطى الأولوية",
        fragile: "عقلك يبحث عن أمان — يحتاج بيئة داخلية ثابتة",
        depth: "عقل يبحث عن معنى — نادر لكن يحتاج توجيهاً",
        void: "الفراغ إشارة وليس عيباً — عقلك يبحث عن هدف",
        depth_seeker: "تحتاج عمقاً حقيقياً — البيئات السطحية تستنزفك",
        mask: "تحمل قناعاً اجتماعياً — وهذا مرهق جداً",
        analyzer: "عقلك لا يستريح حتى اجتماعياً",
        introvert: "طاقتك الاجتماعية محدودة وهذا طبيعي — ليس خللاً",
        shield: "عقلك بنى درعاً وقائياً — لكنه يمنعك من المحاولة الكاملة",
        compare: "عقلك يقيس نفسه بمسطرة الآخرين — يحتاج معياره الخاص",
        self_punish: "عقلك يعاقب نفسه بدلاً من أن يتعلم",
        denial: "تحمي نفسك بالصمت — لكن الألم لا يتحول لدرس",
        fog: "طاقتك حقيقية — تحتاج قناة واحدة لا عشر",
        quiet_fear: "الخوف الهادئ أخطر من الصاخب — يهمس ويشكك",
        chaos: "عقلك يحتاج نظاماً يرتب أفكاره لا يقمعها",
        curious: "الفضول سلاح — لكنه يحتاج توجيهاً حتى لا يتشتت"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
