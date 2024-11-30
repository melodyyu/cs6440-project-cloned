import numpy as np
import pandas as pd
import os

kaggle = pd.read_csv(os.path.join(os.path.dirname(__file__),  './cardio_train.csv'), sep=';')
synthea = pd.read_csv(os.path.join(os.path.dirname(__file__),  './synthea_etl_data.csv'))

combined_df = pd.concat([kaggle, synthea], ignore_index=True)

combined_df = combined_df.sample(frac=1).reset_index(drop=True)

combined_df.to_csv('./combined_data.csv')