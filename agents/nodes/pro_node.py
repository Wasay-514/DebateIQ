from agents.llm import llm
from agents.utils import parse_json

def pro_node(state):
    prompt = f"""
You are the PRO Agent.

Topic: {state["topic"]}
Moderator Plan: {state["moderator_plan"]}

Create strong arguments IN FAVOR of the topic.

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
    return {"pro_arguments": data.get("arguments", [])}