# final

## Machine Learning
Final group project
Before starting on machine learning, we performed ETL to clean and transform the data. We transformed the data to provide additional analysis such as adding part of the week and time of day columns. We cleaned the datetime column so that year and month will have it's own column.

In processing the data, we used "Severity" as our target value and the rest of the columns such as latitude, longitude, zipcpde, and etc. will be our features. In order to use "Severity" as our target, we will use the code below:

# Define target vector
X = filtered_cleaned_df.copy()
X = filtered_cleaned_df.drop('Severity', axis=1)
y = filtered_cleaned_df['Severity']
All of our data consists of accidents with different severity levels. Therefore, we chose severity as our target because we can perform a prediction on the severity level of a car accident.

After choosing our target variable, we had to use pd.get_dummies to convert our columns from object to float or integer. The values will be separated into new columns with a value of 0 and 1.

To split the data, the y value will be our target and our x value will be our features. We will use the code below and use StandardScaler to scale the data:

# Splitting into Train and Test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=78, train_size=0.80)

# Creating a StandardScaler instance.
scaler = StandardScaler()

# Fitting the Standard Scaler with the training data.
X_scaler = scaler.fit(X_train)

# Scaling the data.
X_train_scaled = X_scaler.transform(X_train)
X_test_scaled = X_scaler.transform(X_test)
We've tested three models: random forest classifier, logistic regression classifier, and K-Nearest Neighbors. KNN prsesented improved results at 72% testing accuracy compared to random forest and logistic regression at 68% testing accuracy for each model. Although KNN showed increased testing accuracy, it's less efficient. The KNN model was running for 8 hours compared to 1 hour of random forest and 1 hour of logistic regression. Additionally, logistic regression's training accuracy is at 31%. KNN is more robust, but it lacks in efficiency. Overall, the best machine learning model is random forest.

In the future of machine learning, we can reduce the number of features be removing or transforming other attributes such as wind direction, wind speed, and weather conditions. Wind speed and direction might not play a huge role in accident severity. Weather conditions can be transformed and simplified. For example, if we have light rain and heavy rain, we can transform and combine into one rain category. Similar situation for cloudy and partly cloudy. We can combine into one cloudy category. By reducing or removing some features, we can improve our accuracy percentage.
