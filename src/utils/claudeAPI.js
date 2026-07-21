export async function analyzeMind(answers, language) {
  // Check if API key is available
  if (!import.meta.env.VITE_ANTHROPIC_API_KEY) {
    console.warn('No Anthropic API key found. Using fallback data.');
    return getFallbackData(language);
  }

  const systemPrompt = `You are a deep mind analyst for Nexus Minds app. You receive 10 answer tags from a user's mental test. Your job is to:
1. Identify their mind type from these categories: المعالج العميق (Deep Processor) / الباحث عن المعنى (Meaning Seeker) / العقل المحمي (Protected Mind) / الطاقة غير الموجهة (Unguided Energy) / المحلل الاجتماعي (Social Analyst)
2. Write a personalized 3-sentence description of their mind pattern in the user's language
3. List their top 3 strengths
4. List their top 3 challenges
5. Give one powerful insight sentence that feels like you truly understand them

Respond ONLY in JSON format:
{
  mindType: string,
  mindTypeAR: string,
  description: string,
  strengths: [string, string, string],
  challenges: [string, string, string],
  insight: string
}`;

  const userPrompt = `Answer tags: ${JSON.stringify(answers)}. User language: ${language}. Respond in ${language}.`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }]
      })
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    const content = data.content[0].text;
    return JSON.parse(content);
  } catch (error) {
    console.error('Claude API error:', error);
    return getFallbackData(language);
  }
}

function getFallbackData(language) {
  if (language === 'ar') {
    return {
      mindType: 'المعالج العميق',
      mindTypeAR: 'المعالج العميق',
      description: 'عقلك يعمل بعمق ويحتاج وقتاً للمعالجة. هذا ليس عيباً بل قوة عندما تُستخدم بشكل صحيح.',
      strengths: ['تفكير عميق', 'دقة في التحليل', 'قدرة على الفهم الشامل'],
      challenges: ['يحتاج وقتاً للقرار', 'الإرهاق من المحفزات الكثيرة', 'صعوبة في الشرح السريع'],
      insight: 'عقلك مثل مكتبة ضخمة — تحتاج نظاماً للوصول للكتب المهمة بسرعة.'
    };
  }
  return {
    mindType: 'Deep Processor',
    mindTypeAR: 'المعالج العميق',
    description: 'Your mind works deeply and needs time to process. This is not a flaw but a strength when used correctly.',
    strengths: ['Deep thinking', 'Precise analysis', 'Comprehensive understanding'],
    challenges: ['Needs time to decide', 'Exhausted by many stimuli', 'Difficulty explaining quickly'],
    insight: 'Your mind is like a vast library — it needs a system to access important books quickly.'
  };
}

export async function buildSystem(answers, mindType, language) {
  // Check if API key is available
  if (!import.meta.env.VITE_ANTHROPIC_API_KEY) {
    console.warn('No Anthropic API key found. Using fallback data.');
    return getFallbackSystemData(language);
  }

  const systemPrompt = `You are a personal mind management coach for Nexus Minds. Based on the user's mind type and answer tags, build a completely personalized system. 

Respond ONLY in JSON:
{
  systemTitle: string,
  coreRule: string,
  patterns: [
    {
      title: string,
      meaning: string,
      tools: [string, string, string]
    }
  ],
  dailyRoutine: {
    morning: string,
    duringDay: string,
    evening: string,
    weekly: string
  },
  firstStep: string,
  warningToAvoid: string
}`;

  const userPrompt = `Answer tags: ${JSON.stringify(answers)}. Mind type: ${mindType}. User language: ${language}. Respond in ${language}.`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: "user", content: userPrompt }]
      })
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    const content = data.content[0].text;
    return JSON.parse(content);
  } catch (error) {
    console.error('Claude API error:', error);
    return getFallbackSystemData(language);
  }
}

function getFallbackSystemData(language) {
  if (language === 'ar') {
    return {
      systemTitle: 'نظام المعالج العميق',
      coreRule: 'أعطِ عقلك الوقت الذي يحتاجه - لا تسرع العمليات.',
      patterns: [
        {
          title: 'العمق قبل السرعة',
          meaning: 'عقلك يعمل بشكل أفضل عندما يأخذ وقته في المعالجة.',
          tools: ['خصص وقتاً للتفكير قبل القرارات', 'تجنب تعدد المهام', 'استخدم المذكرات لتخفيف الضغط']
        },
        {
          title: 'الطاقة المحدودة',
          meaning: 'طاقتك العقلية محدودة - استثمرها بحكمة.',
          tools: ['حدد أولوياتك بوضوح', 'خذ فترات راحة منتظمة', 'تجنب المحفزات غير الضرورية']
        }
      ],
      dailyRoutine: {
        morning: 'ابدأ يومك بـ 10 دقائق من التفكير الهادئ بدون أي تشتت.',
        duringDay: 'اعمل على مهمة واحدة في كل مرة لمدة 25 دقيقة.',
        evening: 'أنهِ يومك بكتابة 3 أشياء تعلمتها أو أنجزتها.',
        weekly: 'خصص وقتاً أسبوعياً لمراجعة تقدمك وتعديل نظامك.'
      },
      firstStep: 'ابدأ بتحديد مهمة واحدة مهمة غداً وركز عليها بالكامل.',
      warningToAvoid: 'لا تحاول إجبار عقلك على العمل بسرعة - هذا سيؤدي إلى نتائج سيئة.'
    };
  }
  return {
    systemTitle: 'Deep Processor System',
    coreRule: 'Give your mind the time it needs - don\'t rush the process.',
    patterns: [
      {
        title: 'Depth Before Speed',
        meaning: 'Your mind works best when it takes time to process.',
        tools: ['Allocate thinking time before decisions', 'Avoid multitasking', 'Use notes to reduce mental load']
      },
      {
        title: 'Limited Energy',
        meaning: 'Your mental energy is limited - invest it wisely.',
        tools: ['Prioritize clearly', 'Take regular breaks', 'Avoid unnecessary stimuli']
      }
    ],
    dailyRoutine: {
      morning: 'Start your day with 10 minutes of quiet thinking without any distractions.',
      duringDay: 'Work on one task at a time for 25 minutes.',
      evening: 'End your day by writing 3 things you learned or accomplished.',
      weekly: 'Set aside weekly time to review progress and adjust your system.'
    },
    firstStep: 'Start by identifying one important task tomorrow and focus on it completely.',
    warningToAvoid: 'Don\'t try to force your mind to work fast - this will lead to poor results.'
  };
}
