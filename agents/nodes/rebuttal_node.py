from agents.llm import llm
from agents.utils import parse_json

def rebuttal_node(state):
    prompt = f"""
You are the Rebuttal Agent.

Topic: {state["topic"]}

PRO Arguments:
{state["pro_arguments"]}

CON Arguments:
{state["con_arguments"]}

Create rebuttals for both sides.

Return ONLY valid JSON:
{{
  "pro_rebuttal_to_con": [],
  "con_rebuttal_to_pro": []
}}
"""

    response = llm.invoke(prompt)
    return {"rebuttals": parse_json(response.content)}