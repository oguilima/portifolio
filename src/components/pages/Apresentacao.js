import style from './Apresentacao.module.css'

import { PiArrowCircleDownDuotone } from "react-icons/pi";

function Apresentacao() {
    return (
        <div>
            <div>
                <h1>Olá, seja bem vindo ao meu portifólio.</h1>
                <h3>Meu nome é Guilherme Lima e sou um:</h3>
                <h5>Desenvolvedor Full Stack.</h5>
            </div>
            <div className={style.stacks}>
                <div className={style.stackBox}>
                    <h2 className={style.tituloTech}>Principais Tecnologias:</h2>
                    <div className={style.listaTech}>
                        <ul>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>Angular</li>
                        </ul>
                        <ul>
                            <li>NodeJs</li>
                            <li>NestJs</li>
                            <li>Python</li>
                        </ul>
                        <ul>
                            <li>MySql</li>
                            <li>SqlServer</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.maisInfo}>
                <p>Saiba mais sobre mim</p>
                <PiArrowCircleDownDuotone className={style.icone}/>
            </div>
        </div>
    )
}

export default Apresentacao