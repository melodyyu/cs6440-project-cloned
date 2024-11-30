import datetime
import numpy as np
import pandas as pd
import os

df_patients = pd.read_csv(os.path.join(os.path.dirname(__file__),  './csv/patients.csv'))
# dead = (df_patients[df_patients['DEATHDATE'].notnull()])['Id'].unique()
# df_patients = df_patients[~df_patients['DEATHDATE'].notnull()]
df_patients['BIRTHDATE'] = pd.to_datetime(df_patients['BIRTHDATE'])

df_patients['AGE'] = abs((df_patients['BIRTHDATE'] - datetime.datetime.now()).dt.days)
df = df_patients[['Id','AGE', 'GENDER', ]]
df.rename(columns={'Id': 'PATIENT'}, inplace=True)

df_observations = pd.read_csv(os.path.join(os.path.dirname(__file__),  './csv/observations.csv'))
df_conditions = pd.read_csv(os.path.join(os.path.dirname(__file__),  './csv/conditions.csv'))
# print(df_observations.loc[(df_observations['PATIENT'] == '000254f8-e0db-e3ec-5850-c324022f568e') & df_observations['DESCRIPTION'] == 'Cholesterol [Mass/volume] in Serum or Plasma'])
# weights in kg
weights = df_observations.loc[df_observations['DESCRIPTION']=='Body Weight', ['PATIENT', 'VALUE', 'DATE']]
weights.rename(columns={'VALUE': 'WEIGHT'}, inplace=True)
weights['WEIGHT'] = weights['WEIGHT'].astype(float)
# heights in cm
heights = df_observations.loc[df_observations['DESCRIPTION']=='Body Height', ['PATIENT', 'VALUE', 'DATE']]
heights.rename(columns={'VALUE': 'HEIGHT'}, inplace=True)
heights['HEIGHT'] = heights['HEIGHT'].astype(float)

blood_pressures = df_observations.loc[df_observations['DESCRIPTION']=='Systolic Blood Pressure', ['PATIENT', 'VALUE', 'DATE']]
blood_pressures.rename(columns={'VALUE': 'AP_HI'}, inplace=True)
diastolic = df_observations.loc[df_observations['DESCRIPTION']=='Diastolic Blood Pressure', ['PATIENT', 'VALUE', 'DATE']]
diastolic.rename(columns={'VALUE': 'AP_LO'}, inplace=True)
blood_pressures = pd.merge(blood_pressures, diastolic, on=['PATIENT', 'DATE'])
blood_pressures['AP_HI'] = blood_pressures['AP_HI'].astype(float)
blood_pressures['AP_LO'] = blood_pressures['AP_LO'].astype(float)

# cholesterol as 1, 2, 3 (normal, above normal, well above normal)
cholesterol =  df_observations.loc[df_observations['DESCRIPTION']=='Cholesterol [Mass/volume] in Serum or Plasma', ['PATIENT', 'VALUE', 'DATE']]
cholesterol['VALUE'] = cholesterol['VALUE'].astype(float)
cholesterol.loc[cholesterol['VALUE'] < 200, 'VALUE'] = 1
cholesterol.loc[(cholesterol['VALUE'] >= 200) & (cholesterol['VALUE'] <= 239), 'VALUE'] = 2
cholesterol.loc[239 < cholesterol['VALUE'], 'VALUE'] = 3
cholesterol.rename(columns={'VALUE': 'CHOLESTEROL'}, inplace=True)

# glucose as 0, 1, 2, 3 (below normal, normal, above normal, well above normal)
glucose =  df_observations.loc[df_observations['DESCRIPTION']=='Glucose [Mass/volume] in Blood', ['PATIENT', 'VALUE', 'DATE']]
glucose['VALUE'] = glucose['VALUE'].astype(float)
glucose.loc[glucose['VALUE'] < 70, 'VALUE'] = 0
glucose.loc[(glucose['VALUE'] >= 70) & (glucose['VALUE'] <= 100), 'VALUE'] = 1
glucose.loc[(glucose['VALUE'] > 100) & (glucose['VALUE'] <= 125), 'VALUE'] = 2
glucose.loc[125 < glucose['VALUE'], 'VALUE'] = 3
glucose.rename(columns={'VALUE': 'GLUCOSE'}, inplace=True)

# smoking as binary (0 or 1)
smoking = (df_observations.loc[df_observations['VALUE']=='Smokes tobacco daily (finding)', ['PATIENT']])['PATIENT'].unique()

# drinking as binary (0 or 1)
drinking = (df_conditions.loc[df_conditions['DESCRIPTION']=='Unhealthy alcohol drinking behavior (finding)', ['PATIENT']])['PATIENT'].unique()

# heart condition as binary (0 or 1)
conditions = (df_conditions.loc[df_conditions['DESCRIPTION'].str.contains('infarction|heart'), ['PATIENT', 'DESCRIPTION']])['PATIENT'].unique()
# conditions = [x for x in conditions if x not in dead]

observations = pd.merge(weights, heights, on=['PATIENT', 'DATE'], how='left')
observations = pd.merge(observations, blood_pressures, on=['PATIENT', 'DATE'], how='left')
observations = pd.merge(observations, cholesterol, on=['PATIENT', 'DATE'], how='left')
observations = pd.merge(observations, glucose, on=['PATIENT', 'DATE'], how='left')
observations['SMOKE'] = np.where(observations["PATIENT"].isin(smoking), 1, 0)
observations['DRINK'] = np.where(observations["PATIENT"].isin(drinking), 1, 0)
observations['CARDIO'] = np.where(observations['PATIENT'].isin(conditions), 1, 0)
# observations['DEAD'] = np.where(observations['PATIENT'].isin(dead), 1, 0)

mean_values = observations[['WEIGHT', 'HEIGHT', 'CHOLESTEROL', 'GLUCOSE', 'AP_HI', 'AP_LO']].mean().round(1)
observations['WEIGHT'] = observations['WEIGHT'].fillna(mean_values['WEIGHT'])
observations['HEIGHT'] = observations['HEIGHT'].fillna(mean_values['HEIGHT'])
observations['CHOLESTEROL'] = observations['CHOLESTEROL'].fillna(mean_values['CHOLESTEROL'])
observations['GLUCOSE'] = observations['GLUCOSE'].fillna(mean_values['GLUCOSE'])
observations['AP_HI'] = observations['AP_HI'].fillna(mean_values['AP_HI'])
observations['AP_LO'] = observations['AP_LO'].fillna(mean_values['AP_LO'])

df = pd.merge(df, observations, on='PATIENT', how='left')
df = df.sort_values('DATE').groupby('PATIENT').last()
df = df.reset_index()
df = df.drop('DATE', axis=1)
# gender as 1 or 2, female or male
df['GENDER'] = np.where(df['GENDER'] == 'F', 1, 2)
df.rename(columns={'GLUCOSE': 'gluc'}, inplace=True)
df.rename(columns={'CARDIO': 'cardio'}, inplace=True)
df.rename(columns={'DRINK': 'alco'}, inplace=True)
df.rename(columns={'SMOKE': 'smoke'}, inplace=True)
df.rename(columns={'AGE': 'age'}, inplace=True)
df.rename(columns={'GENDER': 'gender'}, inplace=True)
df.rename(columns={'AP_HI': 'ap_hi'}, inplace=True)
df.rename(columns={'AP_LO': 'ap_lo'}, inplace=True)
df.rename(columns={'CHOLESTEROL': 'cholesterol'}, inplace=True)
# df.rename(columns={'DEAD': 'dead'}, inplace=True)
df.rename(columns={'WEIGHT': 'weight'}, inplace=True)
df.rename(columns={'HEIGHT': 'height'}, inplace=True)
df.rename(columns={'PATIENT': 'id'}, inplace=True)
# print(df.loc[df['PATIENT'] == 'adffe538-c4ec-d65d-d34d-3cdb2b3899f9'])
# print(df.index)
print(df)
 
df.to_csv('./synthea_etl_data.csv')
