function App() {

  return (
    <>
        <header className="header">
            <div className="header-inner">
                <div className="avatar">
                    <img src={`${import.meta.env.BASE_URL}image.jpg`} alt="avatar" />
                </div>
                <div className="intro">
                    <h1>Absatarova Tatyna</h1>
                    <p className="role">Fullstack Developer</p>
                    <ul className="contacts">
                        <li><a href="mailto:tatynaerkinbek@gmail.com">tatynaerkinbek@gmail.com</a></li>
                        <li><a href="https://github.com/Tatynaae" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/tatyna-a-31a144252/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://t.me/Tatynaae" target="_blank" rel="noopener noreferrer">Telegram</a></li>
                        <li>Discord: Tatyna (@Tatynaae)</li>
                        <li>Bishkek, Kyrgyzstan</li>
                    </ul>
                </div>
            </div>
        </header>

        <main className="container">
            <section id="skills" className="card">
                <h2>Skills</h2>
                <p className="card_t">Frontend</p>
                <ul className="skills-list">
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>React.js</li>
                    <li>React Native</li>
                    <li>Vue.js</li>
                    <li>Next.js</li>
                    <li>Electron.js</li>
                    <li>HTML &amp; CSS</li>
                    <li>Responsive Design</li>
                    <li>Tanstack Query</li>
                    <li>Bootstrap</li>
                    <li>Bootstrap</li>
                    <li>Bootstrap &amp; Tailwind CSS</li>
                    <li>Ant Design &amp; ShadCN</li>
                </ul>

                <p className="card_t">Backend</p>
                <ul className="skills-list">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>Filament</li>
                    <li>Go</li>
                    <li>REST APIs</li>
                    <li>MySql</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                </ul>

                <p className="card_t">Other</p>
                <ul className="skills-list">
                    <li>Git &amp; GitHub</li>
                    <li>Docker</li>
                    <li>NGINX</li>
                    <li>CI/CD</li>
                </ul>
            </section>
        </main>

        <footer className="footer">
            <a href="https://github.com/Tatynaae" target="_blank" rel="noopener noreferrer">
                github.com/Tatynaae
            </a>
            <span>&copy; {new Date().getFullYear()}</span>
            <a href="https://rs.school/courses/short-track" target="_blank" rel="noopener noreferrer" className="footer-logo">
                <img src={`${import.meta.env.BASE_URL}rs-school-logo.svg`} alt="RS School" />
            </a>
        </footer>
    </>
  )
}

export default App
