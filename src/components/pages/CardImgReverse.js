import style from './CardImgReverse.module.css'

export default function CardImgReverse({ titulo, paragrafo, imagemSource }) {
    return (
        <div className={style.cardContainer}>
            <div className={style.esq}>
                <div className={style.imgContainer}>
                    <img className={style.imgCard} src={imagemSource} />
                </div>
            </div>
            <div className={style.dir}>
                <div className={style.textosContainer}>
                    <h2>{titulo}</h2>
                    <p>{paragrafo}</p>
                </div>

            </div>
        </div>
    )
}