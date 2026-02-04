# app.py
from flask import Flask, jsonify, request
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


@app.route('/analyze', methods=['POST'])
def analyze():
    """
    Main Analysis Endpoint
    Input: {"image_url": "http://..."}
    Output: {"threat": "high/low", "objects": [...]}
    """
    data = request.get_json()

    # 1. Validation: making sure existence of link
    if not data or 'image_url' not in data:
        return jsonify({"error": "Missing 'image_url' in payload"}), 400

    image_url = data['image_url']

    # 2. Mock Logic: simulating AI temporary
    # next stage will replace this part with  OpenCV
    print(f"Processing image: {image_url}")

    # a test respond
    mock_response = {
        "analysis_id": "scan_12345",
        "image_processed": image_url,
        "threat_level": "LOW ",  # try to change it to low
        "detected_objects": ["unauthorized_person", "suspicious_bag"],
        "confidence_score": 0.98
    }

    return jsonify(mock_response), 200

if __name__ == '__main__':
    # running server on port  5000
    app.run(host='0.0.0.0', port=5000, debug=True)