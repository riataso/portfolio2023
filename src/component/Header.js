import React from 'react'
import { Link }  from 'react-router-dom';

const Header = () => {
    return (
        <header classNale="conteiner">
            <div className="title">
                <h3>Portfolio</h3>
            </div>
            <nav>
                <ul>
                    <li>
                       <Link to = "/">home</Link>
                    </li>
                    <li>
                       <Link to = "/Skill">skill</Link>
                    </li>
                    <li>
                        <Link to = "/Profile">profile</Link>
                    </li>
                    <li>
                        <a href="https://github.com/riataso" target="_blank ">github</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header