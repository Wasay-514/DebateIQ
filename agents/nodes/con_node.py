from agents.llm import llm
from agents.utils import parse_json

def con_node(state):
    prompt = f"""
You are the CON Agent.

Topic: {state["topic"]}
Moderator Plan: {state["moderator_plan"]}

Create strong arguments AGAINST the topic.

Return ONLY valid JSON:
{{
  "arguments": [
    "argument 1",
    "argument 2",
    "argument 3"
  ]
}}
"""

    response = llm.invoke(prompt)
    data = parse_json(response.content)
    return {"con_arguments": data.get("arguments", [])}