def final_report_node(state):
    return {
        "final_report": {
            "topic": state["topic"],
            "debate_style": state["debate_style"],
            "moderator_plan": state["moderator_plan"],
            "pro_arguments": state["pro_arguments"],
            "con_arguments": state["con_arguments"],
            "rebuttals": state["rebuttals"],
            "judge_feedback": state["judge_feedback"],
            "scores": state["scores"]
        }
    }