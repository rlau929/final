# Dependencies

from flask import request, Flask, render_template\

import datetime as dt
import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

import sys
sys.path.insert(1, '..')

from config import username, password, port, db_name

# Database

Base = automap_base()

engine = create_engine(f"postgresql://{username}:{password}@127.0.0.1:{port}/{db_name}")

Base.prepare(engine, reflect=True)

accident_db= Base.classes.accidents_usa_v2_db

session = Session(engine)


# postgresaccess
engine = create_engine("sqlite:///hawaii.sqlite")

Base = automap_base()

# reflecting, mirroring, tables
Base.prepare(engine, reflect=True)

Measurement = Base.classes.measurement
Station = Base.classes.station

# session line from python to sqlite
session = Session(engine)

# new flask instance (singular version)
# using double underscores as magic methods


# @app.route('/data')
# def data():
#     # here we want to get the value of user (i.e. ?user=some-value)
#     user = request.args.get('user')

app = Flask(__name__, template_folder='../')


@app.route('/hello_world')
def test_hello():
    return "Hello_World!"



@app.route('/')
def main_page():

    return render_template('index.html') #index.html main page

if __name__ == '__main__':
    # app = Flask(__name__, template_folder='../')
    app.run()   


@app.route('/zip_query')

