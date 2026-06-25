from backend.app.agents.legacy.moderator_agent import moderator_agent
from backend.app.agents.legacy.pro_agent import pro_agent
from backend.app.agents.legacy.con_agent import con_agent
from backend.app.agents.legacy.judge_agent import judge_agent
from backend.app.agents.legacy.summary_agent import summary_agent

def run_debate(topic, rounds=2, mode="Academic", tone="Balanced"):
    debate = {
        "topic": topic,
        "mode": mode,
        "tone": tone,
        "rounds": [],
        "moderator": "",
        "judge": "",
        "summary": ""
    }

    context = ""

    moderator = moderator_agent(topic, mode, tone)
    debate["moderator"] = moderator
    context += f"Moderator Opening:\n{moderator}\n"

    for round_no in range(1, rounds + 1):
        pro = pro_agent(topic, round_no, mode, tone, context)
        context += f"\nRound {round_no} PRO:\n{pro}\n"

        con = con_agent(topic, round_no, mode, tone, context)
        context += f"\nRound {round_no} CON:\n{con}\n"

        debate["rounds"].append({
            "round": round_no,
            "pro": pro,
            "con": con
        })

    judge = judge_agent(topic, context)
    debate["judge"] = judge

    summary = summary_agent(topic, context, judge)
    debate["summary"] = summary

    return debate