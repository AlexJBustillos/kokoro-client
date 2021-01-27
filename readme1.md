Everyone has days where they need to unwind and/or relax and thats why we've created kokoro for because it can be a baseline guide for everyone who wants to start meditation as well as be a great way for for people who have been meditating to keep track of their progress while offering helpful pointers on the different forms of meditation and the best ways to do them 

#prepearations


### Follow these steps to get Kokoro working on your computer locally
0. Make a folder on your dektop or location you prefer.
1. Go to [Frontend Repo](https://github.com/anonyymous1/irezumi-client).
2. `Fork` page.
3. `Clone` code.
4. Open iTerm2 .
5. Type - `git clone https://github.com/anonyymous1/my-closet.git` into iTerm2.
6. Follow the same steps for [Backend Repo](https://github.com/anonyymous1/irezumi-backend).
7. Using your terminal, navigate to you main app folder and type `npm install`. This will download all the node_modules you need to run. This will have to be done for both repo files.
8. Next using the terminal open the front end app using `code .` in the terminal. Create a file in the main directory called `.env` inside you will type `REACT_APP_SERVER_URL=http://localhost:8000`.
9. Next using the terminal open the backend app using `code .` in the terminal. Create a file in the main directory called `.env` inside you will type `JWT_SECRET="irezumiproject3"` &
`MONGO_URI=mongodb://127.0.0.1:27017/Irezumi`.
10. Finally, open two windows in your terminal and open both frontend and backend and type `npm start` to start the site.

### Challenges
majority of the challenges with this project was with avoiding merge conflicts and setting up the routes

### Peak at my Code
heres a peek at the welcome page code 
```js
const Welcome = () => {
    return (
        <div>
            <h1>Welcome to Kokoro your personal meditation tracker</h1>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/pictures/meditations.png" className="d-block w-100" alt="cannot show"/>
    </div>
    <div className="carousel-item">
      <img src="/pictures/hill.png" className="d-block w-100" alt="cannot show"/>
    </div>
    <div className="carousel-item">
      <img src="/pictures/sun" className="d-block w-100" alt="cannot show"/>
    </div>
  </div>
</div>