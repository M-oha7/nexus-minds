import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      landing: {
        title: "You're not the problem.",
        subtitle: "The problem is how you manage your mind — and that can be learned.",
        description: "Not a personality test. Not a label. Just a mirror that reflects how your mind works — and builds a system around it.",
        button: "Start the Test"
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
        strengths: "Strengths",
        challenges: "Challenges",
        button: "Build Your System"
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
        share: "Share"
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
        button: "ابدأ الاختبار"
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
        strengths: "نقاط القوة",
        challenges: "التحديات",
        button: "ابدأ بناء نظامك"
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
        share: "مشاركة"
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
