from app.utils.llm import ask_gemini

def summary_agent(topic, debate_history, judgement):
    prompt = f"""
Create a short professional summary of this debate.

Topic:
{topic}

Debate History:
{debate_history}

Final Judgement:
{judgement}

Include:
- Debate summary
- Key takeaways
- Final conclusion
"""
    return ask_gemini(prompt)