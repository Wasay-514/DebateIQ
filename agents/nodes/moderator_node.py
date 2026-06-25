from agents.llm import llm
from agents.utils import parse_json

def moderator_node(state):
    prompt = f"""
You are the Moderator Agent for DebateIQ.

Topic: {state["topic"]}
Debate Style: {state["debate_style"]}

Create a structured debate plan.

Return ONLY valid JSON:
{{
  "topic_summary": "",
  "debate_rules": [],
  "key_questions": [],
  "pro_focus": "",
  "con_focus": ""
}}
"""

    response = llm.invoke(prompt)
    return {"moderator_plan": parse_json(response.content)}