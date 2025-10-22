import React, { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    document.title = "Portfolio"

    const faders = document.querySelectorAll('.fade-in');

    const appearOnScroll = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // trigger when 10% visible
    );

    faders.forEach(fader => appearOnScroll.observe(fader));
  }, [])

  return(
    <div className="App">

      <section className="hero fade-in">
        <h1>Hi, I'm <span className="gradient-text fade-in">Smaran Gore</span></h1>
        <p className="hero-subtitle">Full-Stack Developer | React, Node.js, Firebase, MongoDB, Python, and more</p>
        <p>I can build scalable, fast, and beautiful web apps, AI projects, and automation tools with React, Node, Firebase, MongoDB, and more!</p>
      </section>

      <section className="about fade-in">
        <h1>About me</h1>
        <p>I am a professional web developer and app developer experienced in a wide variety of languages and topics such as machine learning, python, web development and more.
          <br/><br/>
          &bull; I have made multiple neural networks (AI) in the past in python such as a shape classifier and one that plays Pong. <br/>
          &bull; I have made multiple projects in python ranging from games to machine learning to automation. <br/>
          &bull; In web development, I know HTML, XML, CSS, tailwind CSS, Javascript, Typescript, React.js, Node.js, Express.js, Firebase, MongoDB, and much more. <br/>
          <br/><br/>
          I am happy to help with all of your needs, whether it may be bug bounties, debugging, adding features to your project/app/website, or just making a whole website or app from scratch.</p>
      </section>

      <section className="projects fade-in">
        <h1>Some Of My Projects</h1>
        <div className="project-list fade-in">
          <ol>
            <div className="project-card fade-in">
              <h2><li>Live Chat App</li></h2>
              <p>&bull; This was a solo project, made entirely by myself. It is a very simple, chat app with minimalist design. The stack is react+firebase with hosting on vercel. This shows my knowledge in web development.</p>
              <p className="btn"><a href="https://github.com/goresantosh188-ctrl/Chat-app-React" target="_blank" rel="noreferrer">Click here for the github repo</a></p>
              <p className="btn"><a href="https://chat-app-react-seven-jet.vercel.app" target="_blank" rel="noreferrer">Click here for the actual website of the project</a></p>
              <h3>Live demo:</h3>
              <iframe width="560" height="315" src="https://youtube.com/embed/6Tfu-tLAk7Y" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="project-card fade-in">
              <h2><li>Clock App</li></h2>
              <p>&bull; This is a self made clock app, with a fully functioning time, stopwatch and timer. It was made with a completely self handled json file with no external databases like mongoDB, Firebase or SQL. This proves i know backend.</p>
              <p className="btn"><a href="https://github.com/goresantosh188-ctrl/Clock-App" target="_blank" rel="noreferrer">Click here for the github repo</a></p>
              <h3>Live demo:</h3>
              <iframe width="560" height="315" src="https://youtube.com/embed/O_vH5VC2z3M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            
            <div className="project-card fade-in">
              <h2><li>Shape Classifer Neural Network</li></h2>
              <p>&bull; This was another solo project, made entirely by myself. It is a neural network created in python that can identify shapes based on what you have drawn. It was made from scratch using only numpy, showing my knowledge in maths and the comprehension of neural networks and AI as a whole.</p>
              <p className="btn"><a href="https://github.com/goresantosh188-ctrl/Shape-Classifier-Neural-Network" target="_blank" rel="noreferrer">Click here for the github repo</a></p>
              <h3>Live demo:</h3>
              <iframe width="560" height="315" src="https://youtube.com/embed/PZOz_luDChE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="project-card fade-in">
              <h2><li>Calculator App</li></h2>
              <p>&bull; This is a simple plain HTML/CSS/JS only project. It is of a functioning calculator, which was created a very long time ago by me on my mobile back when i used to be a mobile coder.</p>
              <p className="btn"><a href="https://github.com/goresantosh188-ctrl/Calculator-App" target="_blank" rel="noreferrer">Click here for the github repo</a></p>
              <h3>Live demo:</h3>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/KJh_8HkvXT8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div className="project-card fade-in">
              <h2><li>Tic Tac Toe App</li></h2>
              <p>&bull; This is the simplest project yet. It is a tic tac toe app made by me a long time ago using just plain HTML/CSS/JS.</p>
              <p className="btn"><a href="https://github.com/goresantosh188-ctrl/Tic-Tac-Toe-Game" target="_blank" rel="noreferrer">Click here for the github repo</a></p>
              <h3>Live demo:</h3>
              <iframe width="560" height="315" src="https://youtube.com/embed/crXSkxO3LUo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </ol>
        </div>
      </section>

      <section className="contact fade-in">
        <h1>Contact Me</h1>
        <p>Email: goresantosh188@gmail.com</p>
        <p>Discord: finnify2 or finnify5</p>
        <p>GitHub: <a href="https://github.com/goresantosh188-ctrl" target="_blank" rel="noreferrer">github.com/goresantosh188-ctrl</a></p> 
      </section>
    </div>
  )
}

export default App
