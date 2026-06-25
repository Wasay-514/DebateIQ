from app.utils.llm import ask_gemini

def pro_agent(topic, round_no, mode, tone, context):
    prompt = f"""
You are the PRO debater.

Topic: {topic}
Round: {round_no}
Mode: {mode}
Tone: {tone}

Previous context:
{context}

Give a strong argument in favor of the topic.
Keep it clear, logical, and concise.
"""
    return ask_gemini(prompt)