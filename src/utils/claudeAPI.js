export async function analyzeMind(answers, language) {
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
    throw error;
  }
}

export async function buildSystem(answers, mindType, language) {
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
    throw error;
  }
}
