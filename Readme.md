###

First i have installed express and dotnet
Then have  created the folder report-card-api
Inside the report-card-api folder created four subfolders [routes,controllers,utils,_test_]
Routes->reportcard.js
        this files helps in  navigate to the another file 
        imported the express and axios library for the serer
        converted the express in json format
        called the reportCardController function through router that will get all academic data
        then created POST and GET operations to create and get the data

controllers -> reportCardControllers.js
        this files handles the changes or data
        first route the gradeCalculator 
        get all the exports through async function which is a promise value
        Inside the try block await function is called 

utils -> gradeCalculator.js
        Created three function named gradeCalculator,calculate average,get trend
        calculateaverage function divide the total score by 2 
        also the grade is descided by the using if condition

        Validation.js:
server.js:
        post get api are called in this file
        this happens the port to run
