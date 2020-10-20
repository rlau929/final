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

accident_db= Base.classes.accidents_usa_v2_db

session = Session(engine)

conn = engine.connect()

################################################################
# Flask Setup
################################################################

with open('model/machine_learning.pkl', 'rb') as f:
     model = pickle.load(f)

app = Flask(__name__, template_folder='')

@app.route('/hello_world')
def test_hello():
    return "Hello_World!"

@app.route('/')
def main_page():

    return render_template('index.html') #index.html main page

@app.route('/zipquery', methods=['GET', 'POST'])
def zip_query_sql(): # pass js variable how?
    # month_fetch = "March"

    test_var_js = request.args.get('get_zip')

    s = text(f'SELECT "Severity" , COUNT("Severity") FROM  "accidents_usa_v2_db" WHERE "Zipcode" = {test_var_js} GROUP BY "Severity";')

    # s = text(f'SELECT * FROM accidents_usa_v2_db WHERE "Month" = {test_var_js};')

    zip_fetch = conn.execute(s).fetchall()

    # return jsonify(zip_fetch)

    return jsonify({'result': [dict(row) for row in zip_fetch]})

@app.route('/zipcount', methods=['GET', 'POST'])
def zip_count_sql(): # pass js variable how?
    # month_fetch = "March"

    test_count_js = request.args.get('get_count')

    count = text(f'SELECT "Month", Count("Month") FROM accidents_usa_v2_db WHERE "Zipcode" = {test_count_js} GROUP BY "Month";')

    count_fetch = conn.execute(count).fetchall()

    return jsonify({'result': [dict(row) for row in count_fetch]})

@app.route('/zipall', methods=['GET', 'POST'])
def zip_all_sql(): # pass js variable how?
    # month_fetch = "March"

    test_all_js = request.args.get('get_all')

    all = text(f'SELECT \"Time_of_Day\", COUNT(\"Time_of_Day\") FROM accidents_usa_v2_db WHERE \"Zipcode\" = {test_all_js} GROUP BY \"Time_of_Day\" ORDER BY CASE WHEN \"Time_of_Day\" = \'Early Morning\' then 1 WHEN \"Time_of_Day\" = \'Morning\' then 2 WHEN \"Time_of_Day\" = \'Afternoon\' then 3 WHEN \"Time_of_Day\" = \'Late Afternoon\' then 4 WHEN \"Time_of_Day\" = \'Night\' then 5 WHEN \"Time_of_Day\" = \'Late Night\' then 6 ELSE NULL END;')

    all_fetch = conn.execute(all).fetchall()

    return jsonify({'result': [dict(row) for row in all_fetch]})

#@app.route('/submit', methods=['GET', 'POST'])  
#def make_prediction():
  #features = [int(x) for x in request.form.values()]
  #final_features = [np.array(features)]       
  #prediction = model.predict(final_features)  
  #prediction = prediction[0]    
  #return render_template('prediction.html', prediction = prediction)