import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, f1_score, roc_auc_score

train_data = pd.read_csv('./combined_data.csv')

train_data = train_data[(train_data['ap_hi'] >= 0) & (train_data['ap_lo'] >= 0)]
train_data['age'] = train_data['age'].div(365).astype(int)

X = train_data[['age', 'gender', 'height', 'weight', 'ap_hi', 'ap_lo', 'cholesterol', 'gluc', 'smoke', 'alco']]
y = train_data['cardio']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=16)

model = LogisticRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

accuracy = accuracy_score(y_test, y_pred)
f1 = f1_score(y_test, y_pred)
roc_auc = roc_auc_score(y_test, y_pred)

print('Accuracy: ', accuracy)
print('F1 Score: ', f1)
print('ROC-AUC Score: ', roc_auc)

log_coeffs = model.coef_
log_intercept = model.intercept_
print(log_coeffs.tolist())
print(log_intercept)
