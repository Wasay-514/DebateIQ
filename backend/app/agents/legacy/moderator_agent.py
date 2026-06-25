from app.utils.llm import ask_gemini

def moderator_agent(topic, mode, tone):
    prompt = f"""
You are a professional debate moderator.

Topic: {topic}
Debate Mode: {mode}
Tone: {tone}

Write a short opening statement.
Explain the debate clearly in 3-4 lines.
"""
    return ask_gemini(prompt)