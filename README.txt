Predict Spotify Streams
=======================

This project aims to predict the number of total streams a song will receive on Spotify and Apple Music based on various song attributes.

Table of Contents:
------------------
1. Introduction
2. Prerequisites
3. Dataset
4. How to Use
5. Model Training
6. Model Deployment
7. Predicting Streams for a New Song
8. Future Enhancements
9. Acknowledgments

1. Introduction:
----------------
The main objective of this project is to create a machine learning model using the XGBoost algorithm to predict the number of total streams a song might receive on Spotify and Apple Music.

2. Prerequisites:
-----------------
- AWS S3 Bucket
- AWS SageMaker
- Python 3.x
- Required Libraries: Pandas, NumPy, matplotlib, sklearn, boto3, sagemaker

3. Dataset:
-----------
The dataset used in this project is `spotify-2023.csv`, which contains various attributes of songs such as:
- Track name
- Artist(s) name
- Release date
- Inclusion in Spotify playlists and charts
- Song characteristics: BPM, key, mode, danceability, valence, etc.

Link: https://www.kaggle.com/datasets/nelgiriyewithana/top-spotify-songs-2023

4. How to Use:
--------------
1. Log in to your IAM user in AWS using the credentials provided to you, and make sure you are on the 'us-west-1' server.
	AWS - https://aws.amazon.com

2a. In case you have a link to the notebook:
	1. Press the link and the notebook should open.

2b. In case the link doesn't work, or the notebook doesn't show up:
	1. Go to the "SageMaker" service.
	2. On the left side menu, choose "Studio".
	3. Open your designated studio.
	4. Go to folder and choose the model "Predict_Streams.ipynb".

3. Scroll down and run the final segment of the code called "Model Prediction"
4. If the model is not trained, or you get an error on the "Model Prediction" segment:
	1. Run the code by choosing  "Run" at the top menu, and then "Run all..."

5. Model Training:
------------------
The model is trained using the XGBoost algorithm in AWS SageMaker. The data is split into training, validation, and test sets. Hyperparameters are set, and the model is trained using the training and validation sets.

6. Model Deployment:
---------------------
After training, the model is deployed as a SageMaker endpoint. This endpoint can be used to make real-time predictions.

7. Predicting Streams for a New Song:
-------------------------------------
A function named `collectSongDetails` is provided to interactively collect song attributes from the user. These details are then passed to the deployed model to get the predicted number of streams.

8. Future Enhancements:
------------------------
- Incorporate additional song attributes or external factors (like marketing efforts) to improve prediction accuracy.
- Explore other machine learning algorithms or deep learning models for better performance.
- Implement a web-based user interface for easier data collection and prediction visualization.

9. Acknowledgments:
-------------------
Special thanks to everyone who contributed to this project and provided valuable feedback.