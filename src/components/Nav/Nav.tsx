import classNames from 'classnames';
import { Link } from "react-router-dom";

import gmail from 'assets/gmail.svg';
import linkedin from 'assets/linkedin.svg';
import github from 'assets/github.svg';
import curriculo from 'assets/curriculo.svg';

export function Nav() {
    let texto = "text-white text-1v"
    let img = "w-2v h-4v mr-05v"
    let a = "flex items-center mb-5v"

    return (
    <nav className="flex justify-evenly m-full items-center">
        <a className={classNames(a)} href="http://" target="_blank" rel="noopener noreferrer">
            <img className={classNames(img)} src={gmail} alt="envelope" />
            <span className={classNames(texto)} >marcaumdev@gmail.com</span>
        </a>
        <a className={classNames(a)} href="https://www.linkedin.com/in/marcaumdev/" target="_blank" rel="noopener noreferrer">
            <img className={classNames(img)} src={linkedin} alt="logo do linkedin" />
            <span className={classNames(texto)} >/marcaumdev</span>
        </a>
        <a className={classNames(a)} href="https://github.com/Marcaum04" target="_blank" rel="noopener noreferrer">
            <img className={classNames(img)} src={github} alt="logo do github" />
            <span className={classNames(texto)} >/marcaum04</span>
        </a>
        <Link className={classNames(a)} to={"/curriculo"} target="_blank" rel="noopener noreferrer">
            <img className={classNames(img)} src={curriculo} alt="folha" />
            <span className={classNames(texto)} >Currículo</span>
        </Link>
    </nav>
    );
}