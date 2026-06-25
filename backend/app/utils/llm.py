import os
import time
from dotenv import load_dotenv
from google import genai
from google.genai import errors

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env")

client = genai.Client(api_key=api_key)

MODELS = [
    "gemini-2.0-flash",
    "gemini-2.5-flash",
    "gemini-3.5-flash",
]

def ask_gemini(prompt: str):
    last_error = None

    for model in MODELS:
        for attempt in range(2):
            try:
                response = client.models.generate_content(
                    model=model,
                    contents=prompt,
                )

                if response.text:
                    print(f"[OK] Using model: {model}")
                    return response.text

            except errors.APIError as e:
                last_error = e
                print(f"[API ERROR] {model}: {e}")
                break

            except Exception as e:
                last_error = e
                print(f"[ERROR] {model}: {e}")
                time.sleep(2)

    return f"Unable to generate response. Last error: {last_error}"