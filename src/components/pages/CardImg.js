import style from './CardImg.module.css'

export default function CardImg({ titulo, paragrafo, imagemSource, tipo }) {
    return (

        <div className={style.cardContainer}>
            <div className={style.esq}>
                {tipo === "normal" ?
                    <div className={style.textosContainer}>
                        <h2>{titulo}</h2>
                        <p>{paragrafo}</p>
                    </div> 
                    :
                    <div className={style.imgContainer}>
                        <img className={style.imgCard} src={imagemSource} alt="" />
                    </div>
                }
            </div>

            <div className={style.dir}>
                {tipo === "normal" ?
                    <div className={style.imgContainer}>
                        <img className={style.imgCard} src={imagemSource} alt="" />
                    </div> 
                    :
                    <div className={style.textosContainer}>
                        <h2>{titulo}</h2>
                        <p>{paragrafo}</p>
                    </div>
                }

            </div>
        </div>
    )
}