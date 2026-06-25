def scoring_node(state):
    winner = state.get("judge_feedback", {}).get("winner", "").lower()

    pro_score = 78
    con_score = 78

    if "pro" in winner:
        pro_score += 10
    elif "con" in winner:
        con_score += 10

    return {
        "scores": {
            "pro_score": min(pro_score, 100),
            "con_score": min(con_score, 100),
            "criteria": {
                "logic": "Argument reasoning quality",
                "clarity": "Clear explanation",
                "relevance": "Topic alignment",
                "rebuttal_strength": "Ability to counter opposing points"
            }
        }
    }