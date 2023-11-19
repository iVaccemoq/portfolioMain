import './aboutMe.scss'


const AboutMe = () => {
    return (
        <div className="aboutme">
            <div className="aboutme__hi">Hi all. I am</div>
            <div className="aboutme__name">Vasilivanov Konstantin</div>
            <div className="aboutme__offer">Front-end developer</div>
            <div className="aboutme__comment">// complete the game to continue</div>
            <div className="aboutme__comment aboutme__comment_mt">// you can also see it on my Github page</div>
            <div className="aboutme__github">const <span>githubLink</span> <span>=</span> <a className='aboutme__ref' href="/">"https://github.com/iVaccemoq"</a></div>
        </div>
    )
}

export default AboutMe;