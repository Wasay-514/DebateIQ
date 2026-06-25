from app.utils.llm import ask_gemini

def judge_agent(topic, debate_history):
    prompt = f"""
You are a fair debate judge.

Topic:
{topic}

Debate History:
{debate_history}

Give final judgement in this format:

Winner:
PRO or CON

PRO Score:
/10

CON Score:
/10

Best Argument:

Weakest Argument:

Reasoning:
Short explanation.
"""
    return ask_gemini(prompt)