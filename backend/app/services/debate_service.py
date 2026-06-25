from agents.graph import run_debate_graph

def start_debate(topic: str, debate_style: str = "balanced"):
    return run_debate_graph(topic, debate_style)