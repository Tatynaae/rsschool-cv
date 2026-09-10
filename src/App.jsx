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

        <main></main>

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
