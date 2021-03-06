# Northcoders-News-FrontEnd

### Overview

Northcoders News is designed to be a news commentary site and a cross between reddit www.reddit.com and medium https://medium.com/ with users being able to comment on short informative articles covering a variaty of topics. This is the front end interface of the project and is coupled with the API which can be found here https://github.com/d-king27/Northcoders-News-API


### Prerequisites

link to hosted site https://nc-news-app.herokuapp.com/

or 
can be run locally which requires Node.js and npm (minmum version v8.3.0),installation instructions can be found here:

```
https://nodejs.org/en/download/package-manager/
https://www.npmjs.com/get-npm
```

### Installing
using the terminal:

clone the repo to your local machine
```
git clone https://github.com/d-king27/Northcoders-News-FrontEnd.git
```
run npm install
run npm start 

```
npm install
npm start
```

The Website will now be running on localhost:3000 on whatever default broswer you have on your machine

### Testing
this project comes with a fullset of tests for the redux actions and reducers which can be run by using the command:
```
npm test
```
example test:
```
 ARTICLE reducer
    default behaviour
      ✓ returns the passed previous state if an unrecognised action is passed
      ✓ uses the initial state if no previous state is passed
```

## Site features
The site consists of:

1.  A homepage which makes up the most popular articles on the site ranked by votes
2.  A navigation bar which loads the current topics that are avaliable on the site
3.  A series of topic pages which display articles of that specific topic
4.  An article page itself which displays the articles and all the comments associated with it, the article and the comments can be rated by the user
5.  A user page which displays all the content added by that user




## Acknowledgments

Northcoders Organisation and all affiliated tutors

This Project was created using create-react-app https://github.com/facebookincubator/create-react-app
