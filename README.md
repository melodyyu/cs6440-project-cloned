# cs6440-project

#### Notes: 
- Site is deployed via Render, accessible at https://cs6440-project-cloned-1.onrender.com/cvd.
- Flask backend is deployed separately on Render (https://cs6440-project-cloned.onrender.com).
- Using the logistic regression model returns results very quickly; the classification model has a significantly longer runtime. It's suggested to run this locally (steps below)
- Because an older version of Bootstrap is being used, dependencies do not match normally. Ensure the .npmrc file is included when deploying on Render (Render's services will not allow commands like `npm install --legacy-peer-deps`, so the command must be passed in through a file instead). 
- Dataset used to train models: Kaggle Cardiovascular Disease (https://www.kaggle.com/datasets/sulianova/cardiovascular-disease-dataset/data) and generated Synthea-data of patients with CVD

#### To run application locally:
1. Clone the repo and go to the project-ui folder in the terminal.
2. Create a virtual environment in your IDE. This will generate a venv_name directory in the project-ui folder. ```python3 -m venv venv_name```
3. Activate the virtual environment ```source venv_name/bin/activate```
4. Install the requirements. ```pip install -r requirements.txt```
5. Navigate to src folder and run the python_api script. ```python3 python_api.py```
6. In a terminal tab, navigate again to the project-ui folder and start the local Angular development server ```ng serve --proxy-config proxy.conf.json```
7. Open your browswer and go to the localhost that the Angular application has opened on (likely 4200, but check the logs of the terminal where your Angular server is; it will tell you in the bottom-most line). 

