import style from './CardEmpresa.module.css'

export default function CardEmpresa({nome, img, paragrafo1, paragrafo2}){
    return(
        <div className={style.containerCardEmpresa}>
            <h2 className={style.tituloEmpresa}>{nome}</h2>

            <div className={style.imagemEmpresa}>
                <img src={img} className={style.imgEmpresa}/>
            </div>

            <div className={style.infoCardEmpresa}>
                <p>{paragrafo1}</p>
                <p>{paragrafo2}</p>
            </div>
        </div>
    )
}