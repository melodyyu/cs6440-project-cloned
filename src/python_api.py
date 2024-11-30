from flask import Flask, request, jsonify
import numpy as np
from tensorflow.keras.models import load_model

app = Flask(__name__)
app.config['DEBUG'] = True

model = load_model('cvd_nn.h5')

@app.route('/api/probability', methods=['POST'])
def probability():
    user_input = request.json['userInput']
    print(type(user_input))
    values = list(user_input.values())
    values = np.array(values)
    
    log_coefs = [0.0651878226157208, 0.1648002474308188, -0.04777409004745705, 0.022028564609318957, 0.023782642417697328, 0.0006369741459840404, 0.22968621725386149, 0.07996337437453571, 0.4311251711401683, -0.945424867233727]
    log_intercept = [-1.10602989]

    log_odds = np.dot(values, log_coefs) + log_intercept
    odds = np.exp(log_odds)
    probability = 1/(1 + odds)
    probability = list(probability)

    return jsonify({"result": probability[0]})

@app.route('/api/classification', methods=['POST'])
def classification():
    user_input = request.json['userInput']
    preprocessed_input = np.array(list(user_input.values()))
    # print(preprocessed_input)
    prediction = model.predict(preprocessed_input.reshape(1, -1))[0][0]  
    classification_result = 1 if prediction > 0.5 else 0  # Classification based on threshold

    return jsonify({"result": classification_result})

app.run(debug=True)