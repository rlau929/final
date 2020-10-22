################################################################
# Dependencies 
################################################################

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, request, render_template
from sqlalchemy.sql import text
import json
import numpy as np
import pickle
import pandas as pd
from sqlalchemy import JSON
from sqlalchemy import type_coerce
from sqlalchemy.dialects import mysql

import sys
# sys.path.insert(1, '..')

from config import username, password, port, db_name


################################################################
# Database Setup
################################################################

Base = automap_base()

engine = create_engine(f"postgresql://{username}:{password}@127.0.0.1:{port}/{db_name}")

Base.prepare(engine, reflect=True)

accident_db= Base.classes.accidents_CA_only_v2_tbl

session = Session(engine)

conn = engine.connect()

################################################################
# Flask Setup
################################################################

with open('model/dt_gini_1021_APPLY_THIS_MODEL.pkl', 'rb') as f:
     model = pickle.load(f)

app = Flask(__name__, template_folder='')

@app.route('/hello_world')
def test_hello():
    return "Hello_World!"

@app.route('/')
def main_page():

    return render_template('index.html') #index.html main page

# @app.route('/ctquery', methods=['GET', 'POST'])
# def county_query_sql():

#     county = text(f'SELECT "County" FROM  "accidents_usa_v2_db" GROUP BY "County";')

#     # s = text(f'SELECT * FROM accidents_usa_v2_db WHERE "Month" = {test_var_js};')

#     zip_fetch = conn.execute(county).fetchall()

#     # return jsonify(zip_fetch)

#     return jsonify({'result': [dict(row) for row in zip_fetch]})

@app.route('/ctsevquery', methods=['GET', 'POST'])
def zip_query_sql(): 

    test_var_js = request.args.get('get_sev')

    s = text(f'SELECT "Severity" , COUNT("Severity") FROM  "accidents_CA_only_v2_tbl" WHERE "County" = \'{test_var_js}\' GROUP BY "Severity";')

    zip_fetch = conn.execute(s).fetchall()

    return jsonify({'result': [dict(row) for row in zip_fetch]})

@app.route('/ctmonquery', methods=['GET', 'POST'])
def zip_count_sql():

    test_count_js = request.args.get('get_count')

    count = text(f'SELECT \"Month\", Count(\"Month\") FROM \"accidents_CA_only_v2_tbl\"  WHERE \"County\" = \'{test_count_js}\' GROUP BY \"Month\" ORDER BY CASE WHEN \"Month\" = \'January\' then 1 WHEN \"Month\" = \'February\' then 2 WHEN \"Month\" = \'March\' then 3 WHEN \"Month\" = \'April\' then 4 WHEN \"Month\" = \'May\' then 5 WHEN \"Month\" = \'June\' then 6 WHEN \"Month\" = \'July\' then 7 WHEN \"Month\" = \'August\' then 8 WHEN \"Month\" = \'September\' then 9 WHEN \"Month\" = \'October\' then 10 WHEN \"Month\" = \'November\' then 11 WHEN \"Month\" = \'December\' then 12 ELSE NULL END;')

    count_fetch = conn.execute(count).fetchall()

    return jsonify({'result': [dict(row) for row in count_fetch]})

@app.route('/cttimequery', methods=['GET', 'POST'])
def zip_all_sql(): 

    test_all_js = request.args.get('get_all')

    all = text(f'SELECT \"Time_of_Day\", COUNT(\"Time_of_Day\") FROM \"accidents_CA_only_v2_tbl\"  WHERE \"County\" = \'{test_all_js}\' GROUP BY \"Time_of_Day\" ORDER BY CASE WHEN \"Time_of_Day\" = \'Early Morning\' then 1 WHEN \"Time_of_Day\" = \'Morning\' then 2 WHEN \"Time_of_Day\" = \'Afteroon\' then 3 WHEN \"Time_of_Day\" = \'Late Afternoon\' then 4 WHEN \"Time_of_Day\" = \'Night\' then 5 WHEN \"Time_of_Day\" = \'Late Night\' then 6 ELSE NULL END;')

    all_fetch = conn.execute(all).fetchall()

    return jsonify({'result': [dict(row) for row in all_fetch]})

@app.route('/mapboxctquery', methods=['GET', 'POST'])
def map_sql(): 

    test_map_js = request.args.get('get_map')

    all = text(f'Select \"Latitude\", \"Longitude\", \"Severity\" From \"accidents_CA_only_v2_tbl\" Where \"County\" = \'{test_map_js}\' Group by \"Latitude\", \"Longitude\", \"Severity\" Order by \"Latitude\" ASC;')

    all_fetch = conn.execute(all).fetchall()

    return jsonify({'result': [dict(row) for row in all_fetch]})

# @app.route('/weather', methods=['POST'])
# def render_results():
#     zip_code = request.form['zipCode']
    
#     return "Zip Code: " + zip_code

@app.route('/predict', methods=['GET', 'POST'])  
def make_prediction():

    print(list(request.form.values()))

    features = [int(x) for x in request.form.values()]
    
    print(features)

    final_features = [np.array(features)]       
    
    prediction = model.predict(final_features)  

    # prediction = model.predict_on_batch(final_features)
    
    return render_template('prediction.html', prediction = prediction[0])

# @app.route('/ml_sev',methods=['POST'])
# def predict():
#     # Get the data from the POST request.
#     if request.method == "POST":
        
#         #data = request.get_json(force=True)
        
#         print(request.form['zipcode'])
        
#         data = float(request.form['zipcode'])
        
#         print("Data", model.predict([[data]]))
        
#         # Make prediction using model loaded from disk as per the data.
        
#         prediction = model.predict([[data]])

#         # Take the first value of prediction
        
#         output = prediction[0]

#         return render_template("static/results.html", output=output, exp=data)



# (f'Select \"Latitude\", \"Longitude\", \"City\", \"Month\", \"Year\" From \"accidents_CA_only_v2_tbl\" Where \"County\" = \'Kern\' Group by \"Latitude\", \"Longitude\", \"City\", \"Month\", \"Year\" Order by \"Latitude\" ASC;')















if __name__ == '__main__':
    app.run(debug=True)













































# ################################################################
# # Dependencies 
# ################################################################

# import sqlalchemy
# from sqlalchemy.ext.automap import automap_base
# from sqlalchemy.orm import Session
# from sqlalchemy import create_engine, func
# from sqlalchemy import *
# from flask import Flask, jsonify, request, render_template
# from sqlalchemy.sql import text
# import json
# import pickle
# import pandas as pd
# from sqlalchemy import JSON
# from sqlalchemy import type_coerce
# from sqlalchemy.dialects import mysql

# import sys
# # sys.path.insert(1, '..')

# from config import username, password, port, db_name

# ################################################################
# # Database Setup
# ################################################################

# Base = automap_base()

# engine = create_engine(f"postgresql://{username}:{password}@127.0.0.1:{port}/{db_name}")

# Base.prepare(engine, reflect=True)

# accident_db= Base.classes.accidents_CA_only_v2_tbl

# session = Session(engine)

# conn = engine.connect()


# ################################################################
# # Flask Setup
# ################################################################

# with open('model/machine_learning.pkl', 'rb') as f:
#      model = pickle.load(f)

# app = Flask(__name__, template_folder='')


# @app.route('/')
# def main_page():

#     return render_template('index.html') #index.html main page


# @app.route('/queryzip', methods=['GET', 'POST'])
# def zip_query_sql(): # pass js variable how?
#     # month_fetch = "March"
    
#     request_zipcode = request.args.get('get_zip')

#     sql_zip = text(f'SELECT "Severity" , COUNT("Severity") FROM  "accidents_usa_v2_db" WHERE "Zipcode" = {request_zipcode} GROUP BY "Severity";')

#     fetch_zip = conn.execute(sql_zip).fetchall()

#     return jsonify({'result': [dict(row) for row in fetch_zip]})

    

# @app.route('/monthquery', methods=['GET', 'POST'])
# def zip_count_sql():

#     request_month = request.args.get('get_month')

#     sql_month = text(f'SELECT \"Month\", Count(\"Month\") FROM accidents_usa_v2_db WHERE \"Zipcode\" = {request_month} GROUP BY \"Month\" ORDER BY CASE WHEN \"Month\" = \'January\' then 1 WHEN \"Month\" = \'February\' then 2 WHEN \"Month\" = \'March\' then 3 WHEN \"Month\" = \'April\' then 4 WHEN \"Month\" = \'May\' then 5 WHEN \"Month\" = \'June\' then 6 WHEN \"Month\" = \'July\' then 7 WHEN \"Month\" = \'August\' then 8 WHEN \"Month\" = \'September\' then 9 WHEN \"Month\" = \'October\' then 10 WHEN \"Month\" = \'November\' then 11 WHEN \"Month\" = \'December\' then 12 ELSE NULL END;')

#     fetch_month = conn.execute(sql_month).fetchall()

#     return jsonify({'result': [dict(row) for row in fetch_month]})


# @app.route('/timequery', methods=['GET', 'POST'])
# def zip_all_sql(): # pass js variable how?
#     # month_fetch = "March"

#     request_time  = request.args.get('get_time')

#     sql_time = text(f'SELECT \"Time_of_Day\", COUNT(\"Time_of_Day\") FROM accidents_usa_v2_db WHERE \"Zipcode\" = {request_time} GROUP BY \"Time_of_Day\" ORDER BY CASE WHEN \"Time_of_Day\" = \'Early Morning\' then 1 WHEN \"Time_of_Day\" = \'Morning\' then 2 WHEN \"Time_of_Day\" = \'Afteroon\' then 3 WHEN \"Time_of_Day\" = \'Late Afternoon\' then 4 WHEN \"Time_of_Day\" = \'Night\' then 5 WHEN \"Time_of_Day\" = \'Late Night\' then 6 ELSE NULL END;')

#     fetch_time = conn.execute(sql_time).fetchall()

#     return jsonify({'result': [dict(row) for row in fetch_time]})


# @app.route('/ml_sev',methods=['POST'])
# def predict():
#     # Get the data from the POST request.
#     if request.method == "POST":
#         #data = request.get_json(force=True)
#         print(request.form['zipcode'])
#         data = float(request.form['zipcode'])
#         print("Data", model.predict([[data]]))
#         # Make prediction using model loaded from disk as per the data.
#         prediction = model.predict([[data]])

#         # Take the first value of prediction
#         output = prediction[0]

#         return render_template("static/results.html", output=output, exp=data)





















# f'SELECT \"Time_of_Day\", COUNT(\"Time_of_Day\") FROM accidents_usa_v2_db WHERE \"Zipcode\" = {test_count_js} GROUP BY \"Time_of_Day\" ORDER BY CASE WHEN \"Time_of_Day\" = \'Early Morning\' then 1 WHEN \"Time_of_Day\" = \'Morning\' then 2 WHEN \"Time_of_Day\" = \'Afternoon\' then 3 WHEN \"Time_of_Day\" = \'Late Afternoon\' then 4 WHEN \"Time_of_Day\" = \'Night\' then 5 WHEN \"Time_of_Day\" = \'Late Night\' then 6 ELSE NULL END;'









# @app.route('/zip_ml', methods=['GET', 'POST'])
# def main():

#     return render_template('static/ml_sev.html')
    
#     if Flask.request.method == 'POST':
#         zipcode = Flask.request.form['Zipcode']
#         # humidity = Flask.request.form['humidity']
#         # windspeed = Flask.request.form['windspeed']
#         input_variables = pd.DataFrame([[zipcode]],
#                                        columns=['Zipcode'],
#                                        dtype=float)
#         prediction = model.predict([[input_variables]])[0]
#         return Flask.render_template('ml_sev.html', original_input={'Zipcode':zipcode}, result=prediction)            

# if __name__ == '__main__':
#     # app = Flask(__name__, template_folder='../')
#     app.run(debug=True)