from flask import Flask, request, jsonify, make_response 
from flask_cors import CORS
import numpy as np
import os
import time 
from tensorflow.keras.models import load_model

# Disable GPU usage for tensorflow to prevent CUDA-related warnings
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "https://cs6440-cardiovascular-risk-detection.onrender.com"}})
CORS(app, resources={r"/*": {"origins": "*", "allow_headers": "*", "methods": "*"}})
app.config['DEBUG'] = True

print("Starting server..")
start_time = time.time() 

# Load the nn model
model_path = os.path.join(os.path.dirname(__file__), 'cvd_nn.h5')
print(f"Model path: {model_path}")
model = load_model(model_path)
print(f"Model loaded in {time.time() - start_time} seconds")

# Log all incoming requests 
@app.before_request
def log_request_info():
    request.start_time = time.time()
    print(f"Received request: {request.method} {request.path}")
    print(f"Headers: {request.headers}")
    print(f"Body: {request.data}")
  
# Add a default route 
@app.route('/')
def home():
    return "Welcome to the Cardiovascular Risk API!"

# Logistic Regression endpoint
@app.route('/api/probability', methods=['POST'])
def probability():
    user_input = request.json['userInput']
    # print(type(user_input))
    if user_input is None:
        return jsonify({"error": "Invalid payload"}), 400
    values = list(user_input.values())
    values = np.array(values)
    
    log_coefs = [0.0651878226157208, 0.1648002474308188, -0.04777409004745705, 0.022028564609318957, 0.023782642417697328, 0.0006369741459840404, 0.22968621725386149, 0.07996337437453571, 0.4311251711401683, -0.945424867233727]
    log_intercept = [-1.10602989]

    log_odds = np.dot(values, log_coefs) + log_intercept
    odds = np.exp(log_odds)
    probability = 1/(1 + odds)
    probability = list(probability)

    print(f"User Input was: {values}")
    print(f"Probability is: {probability}")
    print(f"Response being sent: {jsonify({'result': probability[0]})}")
    return jsonify({"result": probability[0]})

# Neural network endpoint
@app.route('/api/classification', methods=['OPTIONS','POST'])
def classification():
    print ("Doing classification stuff now")
    user_input = request.json['userInput']
    if user_input is None:
        return jsonify({"error": "Invalid payload"}), 400
    
    # preprocessed_input = np.array(list(user_input.values()))
    preprocessed_input = list(user_input.values())
    preprocessed_input = np.array(preprocessed_input)
    print(f"User Input was: {preprocessed_input}")
    print(f"Preprocessed input shape: {preprocessed_input.shape}, dtype: {preprocessed_input.dtype}")

    print(f"Starting prediction...")
    model_start = time.time() 
    prediction = model.predict(preprocessed_input.reshape(1, -1))[0][0]  
    model_end = time.time() 
    classification_result = 1 if prediction > 0.5 else 0  # Classification based on threshold

    end_time = time.time()
    print(f"Total time: {end_time - start_time} seconds")
    print(f"Model inference time: {model_end - model_start} seconds")
  
    print(f"Classification is: {classification_result}")
    print(f"Response being sent: {jsonify({'result': classification_result})}")
    return jsonify({"result": classification_result})

# @app.route('/api/classification', methods=['OPTIONS'])
# def handle_preflight():
#     print ("PREFLIGHT")
#     response = make_response()
#     response.headers['Access-Control-Allow-Origin'] = '*'
#     response.headers['Access-Control-Allow-Methods'] = '*'
#     response.headers['Access-Control-Allow-Headers'] = '*'
#     print("GOT TO THE END OF PREFLIGHT", response)
#     return response

@app.after_request
def add_cors_headers(response):
    print ("AFTER REQUEST")
    duration = time.time() - getattr(request, "start_time", time.time())
    print(f"Request processed in {duration:.2f} seconds")
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = '*'
    response.headers['Access-Control-Allow-Headers'] = '*'
    print("THE RESPONSE AFTER REQUEST WAS THIS", response)
    return response

# Run the app
# app.run(debug=True)
if __name__ == "__main__":
  # Ensures Flask respects Render's PORT env variable 
  port = int(os.environ.get("PORT", 5000))
  app.run(host="0.0.0.0", port=port)

