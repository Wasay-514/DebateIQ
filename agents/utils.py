import json

def parse_json(text: str):
    try:
        cleaned = text.strip()
        cleaned = cleaned.replace("```json", "")
        cleaned = cleaned.replace("```", "")
        return json.loads(cleaned)
    except Exception:
        return {"raw_response": text}