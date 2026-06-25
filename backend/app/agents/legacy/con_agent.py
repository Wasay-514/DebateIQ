from app.utils.llm import ask_gemini

def con_agent(topic, round_no, mode, tone, context):
    prompt = f"""
You are the CON debater.

Topic: {topic}
Round: {round_no}
Mode: {mode}
Tone: {tone}

Previous context:
{context}

Give a strong counter-argument against the topic.
Respond logically to the PRO side.
Keep it clear, logical, and concise.
"""
    return ask_gemini(prompt)