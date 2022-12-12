function About() {
    
    return(
        <>
            <h1 className="my-4 grow-in">About Me</h1>
            <hr/>
            <div className="container my-5">
                <div className="row justify-content-around justify-content-lg-between bg-c-light-brown pt-4 about-me-container">
                    <img src={require("../src/assets/FC-Main-Logo.jpg")} alt="Max Lanfear" className="drop-shadow img-fluid col-8 col-lg-4 portrait mb-4 grow-in"></img>
                    <p className="col-12 col-lg-7 grow-in text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="row mt-5">
                    <h2 className="col-12">Skills</h2>
                </div>
                <hr></hr>
                <div className="row mt-5 justify-content-between">
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt=""/>
                    <img className="col-4 col-lg-1 drop-shadow" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt=""/>
                </div>  
            </div>
        </>
    );
}

export default About;