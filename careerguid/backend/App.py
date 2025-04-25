from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import os

app = Flask(__name__)
CORS(app)  # Allow frontend to connect from any origin

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/")
def home():
    return "CareerGuide Backend is running."

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_msg = data.get("message", "")

    if not user_msg:
        return jsonify({"reply": "No input received."})

    try:
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are an expert AI career guidance assistant who can talk in multiple languages. "
                        "Answer in the same language the user uses. Help users explore careers, give advice, and be friendly."
                    )
                },
                {"role": "user", "content": user_msg}
            ]
        )
        reply = response["choices"][0]["message"]["content"]
        return jsonify({"reply": reply})
    except Exception as e:
        return jsonify({"reply": f"Error: {str(e)}"}), 500
