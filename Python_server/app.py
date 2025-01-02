from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Load the trained model
model = joblib.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json  # Expecting JSON input
    categories = data.get('categories')  # Input feature(s)
    
    # Ensure input is formatted properly
    if not categories:
        return jsonify({'error': 'No input provided'}), 400
    
    prediction = model.predict([categories])  # Predict based on input
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(port=5000)


