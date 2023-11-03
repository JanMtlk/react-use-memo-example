# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## UseMemo
### why use useMemo?
- useMemo is a hook that is used to optimize the performance by caching return value of a function.
- useMemo is used to avoid expensive calculations on every render.

### when to use useMemo?
- only use useMemo when you have a function that is computationally expensive.
- do not put it inside basic ternary operator like functions(because it clogs the memory more than it helps)
- do not put it in components that are not re-rendered often, because it will not be used often.