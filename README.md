# Breakout

This project is personal practice with React to create a little breakout game. Sounds like a fun challenge for a budding developer. I do a lot of explaining how I did stuff in this readme. Like it's a blog, which I know isn't what a readme is for, but, well it's a Break Out game there isn't much else to say about it in a readme. This entire project is a practice exercise and explaining what I'm doing helps me learn. Plus who knows maybe someone reading this wants to follow along.

### Planned Features:

- The game of course
- A score tracker

### Possible features

- Multiple levels
- Power ups

### Project Plan

I'm breaking this down into phases, I'll leave notes in each one as I work through it.

1. First create component structure. So this would likely be, "Game/App", "Paddle", "Ball", and "Brick" components

     >  I started with what I thought would be the hardest, the bricks. It was simplier than a thought however. Just two components, one to render the brick (Brick.js) and another to  create the brick grid (BrickGrid.js). Keeping them seperate should help with adding future functionality. In the BrickGrid I've added difficulty objects, for use in possibly different difficulty levels, for now it just uses 'easy'.
     >
     >  We have a paddle! it can move left and right with arrow keys. I used the useState for the position, and useEffect for handling key presses. It works well but the animation is a little choppy, I tried to fix this with the transition css property I was reading up on. It's better than it was but there is some lag when changing directions. I'm going to mess with this more at a later time, for now it works.

2. Rendering and styling components

     > I've added begun importing components into App.js so that they render. I wrote test to make sure they render as well.

3. Game Logic

4. Handle Events

5. Polish and optimize

6. Begin plans for possible addtional features


#### I'm going to leave the React boilerplate in this readme, mostly for my own refernece.


***

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
