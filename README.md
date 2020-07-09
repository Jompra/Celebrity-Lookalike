# Celebrity Lookalike Generator

## Introduction

This react app was created for my second General Assembly project. This project was completed hackathon style in 48 hours with [Eleanor Byass](https://github.com/ebyass "Eleanor's Github"). The project is deployed with Netlify. This app was great fun so please feel free to have a go [here](https://find-your-celebrity-lookalike.netlify.app "Celebrity Lookalike Generator")

* [Introduction](#Introduction)
* [Contents](#Contents)
* [Project Brief](#Brief)
* [The APIs](#The-APIs)
  * [Luxand Cloud](#Luxand-Cloud-Celebrity-Recognition)
  * [Microsoft Azure](#Microsoft-Azure-Cloud-Bing-Image-Search-API)
* [Wins and Blockers](#Wins-and-Blockers)
  * [Wins](#Wins)
  * [Challenges](#Challenges)
* [Future Features](#Future-Features)
* [Conclusion](#Conclusion)

## Brief
Consume at least one public API into a React application to create a fun or useful product.

## How it Works
The basic function of the app is that a user provides us with a URL of their photograph, we then determine which celebrity that they look like and then we display a picture of that celebrity next to the user's image.

## Using it Yourself
To run this app on your local machine you will need to download or clone the files and then sign up for two APIs, The first is [Luxand Cloud](https://rapidapi.com/aboykov/api/luxand-cloud-face-recognitionendpoint=apiendpoint_188c3cc8-6f87-4558-a9c7-be772a5a7ccf) and the second is [Microsoft Azure](https://azure.microsoft.com/en-gb/free/).

I assume that you have an up to date version of Yarn or NPM installed

* Fork and Clone the Repository
* `$ cd` into the project directory
* `$ yarn` or `$ npm install` to install dependencies
* `$ echo REACT_APP_RAPID_KEY=[YOUR LUXAND CLOUD RAPID API KEY] >> .env` to create and add first API key
* `$ echo REACT_APP_AZURE_KEY=[YOUR MICROSOFT AZURE API KEY] >> .env` to add second key
* `$ yarn start` or `$ npm run start`to start react server

## The APIs
### Luxand Cloud Celebrity Recognition API
We used this API to generate the name of a celebrity that the user looks most like. This API is designed to pick out actual known celebrities in an image, however a quirk of it is that even if the tested image is not that of a celebrity, it will usually return the closest match.

### Microsoft Azure Cloud Bing Image Search API
We decided to use the Bing image search API to go and fetch an image of the lookalike celebrity. Although other search engines offer similar APIs, our testing showed that Bing was the most reliable when searching for less well-known celebrities using only their name as a search term.

## Planning and Process
The first API that we liked the look of and decided to use was the Luxand Cloud Celebrity Recognition API. Having the ability to find the name of the closest looking celebrity is fine but it doesn't really 

## Wins and Blockers

#### Wins
A real win here was finding and using the Bing Search API, although the app could have functioned by simply telling the user the name of their celebrity lookalike, having the photograph for comparison makes this an app that a user would enjoy using with their friends.

#### Challenges
We had some trouble getting the timing of everything to work. As we needed to take the data from an initial response and then pass this to another API getting the asynchronous functions to work as required was a challenge. Initially we set a timeout on searching for an image however we found that this was unnecessary in the end.

## Future Features
Ideally, we would have the user upload an image of themselves instead of providing a URL, however as this was simply a novelty web app, we decided a URL would be sufficient enough.

## In Conclusion
This was great fun to create and I think that we have a fun and useable app.