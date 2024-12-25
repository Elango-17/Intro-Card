import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillLists = [
  {
    skill: "HTML + CSS",
    level: "Advanced",
    color: "blue",
  },
  {
    skill: "JavaScript",
    level: "Advanced",
    color: "yellow",
  },
  {
    skill: "MySQL",
    level: "Intermediate",
    color: "Orange",
  },
  {
    skill: "Git and GitHub",
    level: "Advanced",
    color: "red",
  },
];

function App() {
  return (
    <div className="card">
      <h1 style={{ textAlign: "center" }}>Hello Broskies</h1>
      <Avator />
      <div className="data">
        <Info />
        <Skillset />
      </div>
    </div>
  );
}

function Avator() {
  return <img className="avatar" src="about.jpg" alt="Elangovan R" />;
}

function Info() {
  return (
    <div>
      <h1>Elangovan R</h1>
      <p>
        I’m a Front-End Web Developer pursuing my B.Tech degree in IT at SRM
        University. I am proficient in HTML, CSS, JavaScript, MySQL, Git, and
        GitHub. I have recently started learning React!
      </p>
    </div>
  );
}

function Skillset() {
  return (
    <div className="skill-list">
      {skillLists.map((skills) => (
        <Skills
          skill={skills.skill}
          color={skills.color}
          level={skills.level}
          key={skills.name}
        />
      ))}
    </div>
  );
}

function Skills({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "Advanced" && "💪🏼"}
        {level === "Intermediate" && "👨🏼‍🦲"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
