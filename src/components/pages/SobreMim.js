import style from './SobreMim.module.css'

import CardImg from './CardImg'
import CardImgReverse from './CardImgReverse'

import imgPerfil from '../../utils/img/perfil.jpg'
import imagemSaoPaulo from '../../utils/img/saopaulo.jpg'
import imgCasal from '../../utils/img/casal.jpeg'
import imgLuna from '../../utils/img/luna.jpeg'
import imgUsjt from '../../utils/img/usjt.png'

export default function SobreMim(){
    return(
        <div className={style.container}>
            <CardImg titulo="Este sou eu." paragrafo="Tenho 22 anos, moro na zona leste de São Paulo e nasci em São Bernardo do Campo, na região do grande ABC." imagemSource={imgPerfil}/>
            <CardImgReverse titulo="Formação." paragrafo="Sou um Cientista da Computação quase formado pela USJT." imagemSource={imgUsjt} />
            <CardImg titulo="Meu par." paragrafo="Essa é a Mayanne, nós namoramos cerca de um ano e pretendo passar minha vida ao lado dela. :) " imagemSource={imgCasal} />
            <CardImgReverse titulo="Minha filha." paragrafo="Essa é a Luna, sim kkkk eu sou pai de pet e ela me morde muito..." imagemSource={imgLuna}/>
            <CardImg titulo="Time do coração." paragrafo="Sou são paulino desde que me conheço por gente e vou acompanhar esse time até o resto da minha vida." imagemSource={imagemSaoPaulo} />
        
            
        </div>
    )
};