from pydantic import BaseModel
from typing import Optional


class DebateRequest(BaseModel):
    topic: str
    rounds: Optional[int] = 2
    mode: Optional[str] = "Academic"
    tone: Optional[str] = "Balanced"