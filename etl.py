import pandas as pd
import os

def filter_by_column(file_path, column_name, column_value):
    df = pd.read_csv(os.path.join(os.path.dirname(__file__),  file_path))
    filtered_df = df[df[column_name] == column_value]

    return filtered_df