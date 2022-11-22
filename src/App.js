import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      </header>
      <body className='App-header'>

        <br />
        <div style={{ marginTop: "5%" }}>
          <img src='Zak.JPG' className='profilePhoto' ></img>
          <h1>Zak Lipman</h1>
        </div>

        <div>
          <a href="tel:079 034 8738"><img className='contactIcon' src='phone.png'></img></a>
          <a href='mailto:zakjedd@gmail.com'><img className='contactIcon' src='mail.png'></img></a>
          <a href='http://www.linkedin.com/in/zak-lipman-056757234'><img className='contactIcon' src='linkedin.png'></img></a>
          <br />
          <br />
        </div>

        <div className='aboutMe'>
          <h2><u>About me</u></h2>
          <p style={{ marginLeft: "10%", marginRight: "10%" }}>
            I am a passionate Computer Science graduate who enjoys coding and problem solving.<br /> <br />
            I take interest in tech in other forms too, being a big apple fanboy and keeping up to date with the latest tech news. <br /><br />Other than tech, I enjoy my alone time where I can recharge being an introverted personality type however I still very much enjoy being with my friends and some good social interaction.</p>
        </div>
        <br />

        <div className='keySkills'>
          <h2><u>Key Skills</u></h2>
          <p>Java</p>
          <p>Python</p>
          <p>SQL</p>
          <p>Data Structures</p>
          <p>C#</p>
          <p>Theory of Algorithms and Algorithm Efficiency</p>
        </div>
        <br />

        <div className='dev'>
          <h2><u>Why Development</u></h2>
          <p style={{ marginLeft: "10%", marginRight: "10%" }}> I have always loved the idea of taking ideas in your head, be it big or small and being able to bring them into fruition, into reality through code, turning an idea into something tangible.
            <br /> <br />
            I would love to get the chance to further this passion and learn more from SovTech allowing me to take my passion to new heights and learn from both higher-ups as well as team members!</p>
        </div>

        <br />
      </body>
    </div>

  );
}

export default App;
