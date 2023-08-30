import style from './Contato.module.css'

export default function Contato() {
    return (
        <div className={style.contatoContainer}>
            <div className={style.contatoInfos}>
                <div className={style.contatosTitulo}>
                    <div className={style.contatoInfos}>
                        <h2>Quer falar comigo?</h2>
                    </div>
                    <h4>Aqui estão os meus contatos:</h4>

                    <div className={style.contatos}>
                        <ul>
                            <li>Email: oficialguilima@gmail.com</li>
                            <li>Celular: +55 011 972285197</li>
                            <li><a target="_blank" href="https://linkedin.com/in/oguilima">Linkedin</a></li>
                            <li><a target='_blank' href='https://github.com/oguilima'>GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
} 