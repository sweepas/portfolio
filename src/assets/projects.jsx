import ncNewsApi from "./api-img.webp";
import ncNewsFe from "./nc-news-img.webp";
import darkDecent from "./dark-decent.webp";
import weatherApp from "./weatherApp.webp";

const projects = [
  {
    id: "nc-news",
    name: "NC news",
    imgSrc: ncNewsFe,
    description:
      "This project is a web App that allows us to access and manipulate data stored in an SQL database served utilising a custom API. User can create an account, add or remove new articles, comments, topics. Vote for favorite comments and topics if signed in. Sort articles by topic, date added or by other users interactions with an article(most voted, comment count).",
    stack: ["React", "JavaScript", "vite", "axios", "CSS", "netlify"],
    link: "https://beautiful-mandazi-c4e8c2.netlify.app/articles",
  },
  {
    id: "nc-news-api",
    name: "News API",
    imgSrc: ncNewsApi,
    description:
      "This project involves building a robust RESTful API to provide application data programmatically, resembling real-world backend services like Reddit. The database is PostgreSQL, and interactions with it are facilitated using node-postgres.",
    stack: ["JavaScript", "node.js", "express", "ElephantSQL"],
    link: "https://nc-news-be-project-lndv.onrender.com/api/",
  },
  {
    id: "dark",
    name: "Dark Decent",
    imgSrc: darkDecent,
    description:
      "Game project for Software Engineering bootcamp. Dungeon crawler style game built using Phaser, MongoDB, Bcrypt, Express, and Node.JS, the game leverages Phaser's versatility and MongoDB's database capabilities. Express and Node.JS handle APIs seamlessly, while Bcrypt ensures simple encryption. Despite challenges posed by Phaser's versioning and unique syntax, our team successfully crafted a compelling single-level dungeon crawler featuring a boss encounter. The project showcases our proficiency in game development and innovative use of technology.",
    stack: ["phas3r", "node.js", "express", "mongoDB", "netlify"],
    link: "https://northcoders.com/project-phase/dark-descent",
  },
  {
    id: "weather",
    name: "Weather App",
    imgSrc: weatherApp,
    description:
      "Simple Weather app built with NextJS using TypeScript and Tailwind for stylyng. Data use is from OpenWeather API",
    stack: ["next.js", "React", "TypeScript", "axios", "Tailwind"],
    link: "https://silver-cajeta-92ef7b.netlify.app/",
  },
];

const buttons = [
  {
    id: "abaut",
    name: "about me",
  },
  {
    id: "nc-news",
    name: "NC news",
  },
  {
    id: "nc-news-api",
    name: "News API",
  },
  {
    id: "dark",
    name: "Dark Decent",
  },
];

export default projects;
