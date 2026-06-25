from langgraph.graph import StateGraph, START, END

from agents.state import DebateState
from agents.nodes.moderator_node import moderator_node
from agents.nodes.pro_node import pro_node
from agents.nodes.con_node import con_node
from agents.nodes.rebuttal_node import rebuttal_node
from agents.nodes.judge_node import judge_node
from agents.nodes.scoring_node import scoring_node
from agents.nodes.final_report_node import final_report_node

builder = StateGraph(DebateState)

builder.add_node("moderator", moderator_node)
builder.add_node("pro", pro_node)
builder.add_node("con", con_node)
builder.add_node("rebuttal", rebuttal_node)
builder.add_node("judge", judge_node)
builder.add_node("scoring", scoring_node)
builder.add_node("final_report", final_report_node)

builder.add_edge(START, "moderator")
builder.add_edge("moderator", "pro")
builder.add_edge("moderator", "con")
builder.add_edge("pro", "rebuttal")
builder.add_edge("con", "rebuttal")
builder.add_edge("rebuttal", "judge")
builder.add_edge("judge", "scoring")
builder.add_edge("scoring", "final_report")
builder.add_edge("final_report", END)

debate_graph = builder.compile()

def run_debate_graph(topic: str, debate_style: str = "balanced"):
    result = debate_graph.invoke({
        "topic": topic,
        "debate_style": debate_style,
        "moderator_plan": {},
        "pro_arguments": [],
        "con_arguments": [],
        "rebuttals": {},
        "judge_feedback": {},
        "scores": {},
        "final_report": {}
    })

    return result["final_report"]