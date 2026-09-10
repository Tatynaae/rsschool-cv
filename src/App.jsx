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
            <section id="about" className="card">
                <h2>About Me</h2>
                <p>..</p>
            </section>

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

            <section id="code" className="card">
                <h2>Code Example</h2>
            </section>

            <section id="experience" className="card">
                <h2>Experience</h2>
                <div className="timeline-item">
                    <h3>
                        Fullstack Developer |{' '}
                        <a href="https://axelhub.com/" target="_blank" rel="noopener noreferrer">
                            Axelhub
                        </a>
                    </h3>
                    <p className="date">2024 Jan. | Present</p>
                </div>
                <div className="timeline-item">
                    <h3>
                        Junior Developer |{' '}
                        <a href="https://mdigital.kg/" target="_blank" rel="noopener noreferrer">
                            MDigital
                        </a>
                    </h3>
                    <p className="date">2022 | 2023</p>
                </div>
            </section>

            <section id="education" className="card">
                <h2>Education</h2>
                <div className="timeline-item">
                    <h3>Computer Science | International Meta-Science University</h3>
                    <p className="date">2022 | 2025</p>
                </div>
                <div className="timeline-item">
                    <h3>Motion Web | Frontend Development Course</h3>
                    <p className="date">2022 | 2023</p>
                </div>
            </section>

            <section id="english" className="card">
                <h2>English Proficiency: B2</h2>
                <h3>Kyrgyz/Russian: Native</h3>
                <h3>Korean: A2</h3>
                <h3>Japanese: A1</h3>
                <h3>Genrman: A1</h3>
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
