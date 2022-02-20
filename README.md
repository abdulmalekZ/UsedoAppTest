# UsedoApp Frontend Task

This is the solution to the UsedoApp Task

This contains two folders:

## server
Contains node.js Express server to serve the get list api

## application
Contains the React Native App using Redux and Redux-saga



## Installation

Run the following code at the root of the server and application folder

```bash
npm install
```


## Usage
### server
First you will have to run the server, go to the root of the server folder and run:
```bash
npm run dev
```
This will run the server on localhost:3003
### application

#### iOS
Open another console and go to the root of the application folder and run: 
```bash
npm run ios
```
This will install Pods and then run the app on an iOS simulator if you are running from a Mac device

#### Android
Open another console and go to the root of the application folder and run: 
```bash
npm run android
```
This will run the app on an Android simulator


### Notes
I have hosted the server portion of this submission on Render servers and the React Native App will use the remote url by default so there's no need to run the server application on your machine.

The remote URL being used : [https://usedotestserver.onrender.com/getList](https://usedotestserver.onrender.com/getList)
