# Advice-generator-app
This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![desktop](https://user-images.githubusercontent.com/85825544/224795844-9eecb646-9e3f-4069-b30d-d9af793d48f4.png)
![mobile](https://user-images.githubusercontent.com/85825544/224795858-94f11c59-d1cf-4197-ab60-693005cbf107.png)

### Links

- Solution URL: [https://github.com/hxshan/Advice-generator-app]
- Live Site URL: [https://advice-giver-app.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
-JavaScript
- Mobile-first workflow


### What I learned

I learned about using Asynchronous functions for calling and API and how to format and display the recieved data
and also utilised Arrow functions instead of the traditional function


```js

const Get_advice = async () =>{
    const response = await fetch(Api_url);
    const data = await response.json();
    const Advice = data.slip.advice
    const qoute_Id = data.slip.id
    qoute.textContent=Advice
    qoute_id.textContent=qoute_Id

}
```

### Continued development
I would further like to work with more advance API and dive into the ES6 and newer syntax for Javascript which would be helpful to start working with a framwork like REACT
