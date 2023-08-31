import style from './Contato.module.css'

import emailjs from '@emailjs/browser'

import { useState } from 'react'

export default function Contato() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();

        if(!name || !email || !message){
            alert("PREENCHA TUDO")

            return
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send("service_7owajaf", "template_uslql0l", templateParams, "FXKmNPCF-pinmyaGD").then((response) => {
            setName("")
            setEmail("")
            setMessage("")

            alert("Email enviado com sucesso!")
        },(err) => {
            console.log("ERRO: " + err)
        })
    }

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
                            <li><a rel="noreferrer" target="_blank" href="https://linkedin.com/in/oguilima">Linkedin</a></li>
                            <li><a rel="noreferrer" target='_blank' href='https://github.com/oguilima'>GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={style.container}>
                <form className={style.form} onSubmit={sendEmail}>
                    <input
                        className={style.input}
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />

                    <input
                        className={style.input}
                        type="text"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />

                    <textarea
                        className={style.textarea}
                        placeholder="Digite sua mensagem..."
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />

                    <input className={style.button} type="submit" value="Enviar" />
                </form>

            </div>
        </div>
    )
} 