import etl
import pandas as pd

df = etl.filter_by_column('./synthea/output/csv/observations.csv', 'CODE', '75325-1')
df.to_csv('observations_symptoms.csv')