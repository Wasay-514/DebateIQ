from agents.llm import llm
from agents.utils import parse_json

def judge_node(state):
    prompt = f"""
You are the Judge Agent.

Evaluate the debate fairly.

Topic: {state["topic"]}

PRO Arguments:
{state["pro_arguments"]}

CON Arguments:
{state["con_arguments"]}

Rebuttals:
{state["rebuttals"]}

Return ONLY valid JSON:
{{
  "pro_feedback": "",
  "con_feedback": "",
  "winner": "",
  "reason": "",
  "overall_summary": ""
}}
"""

    response = llm.invoke(prompt)
    return {"judge_feedback": parse_json(response.content)}