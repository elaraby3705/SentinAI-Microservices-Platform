# app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # CORS so app can talk to front end

@app.route('/')
def home():
    """
    Health Check Route
    """
    return jsonify({
        "service": "Sentin-Eye (Python AI)",
        "status": "active",
        "version": "1.0.0"
    })

if __name__ == '__main__':
    # running server on port  5000
    app.run(host='0.0.0.0', port=5000, debug=True)