from typing import TypedDict, List, Dict, Any

class DebateState(TypedDict):
    topic: str
    debate_style: str

    moderator_plan: Dict[str, Any]
    pro_arguments: List[str]
    con_arguments: List[str]
    rebuttals: Dict[str, Any]
    judge_feedback: Dict[str, Any]
    scores: Dict[str, Any]
    final_report: Dict[str, Any]