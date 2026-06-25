from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from backend.app.services.debate_service import start_debate

router = APIRouter(prefix="/api/debate", tags=["DebateIQ"])


class DebateRequest(BaseModel):
    topic: str
    debate_style: str = "balanced"


@router.post("/start")
def start_debate_endpoint(request: DebateRequest):
    try:
        result = start_debate(request.topic, request.debate_style)
        return {
            "success": True,
            "data": result
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))