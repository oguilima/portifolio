import style from './Carreira.module.css'
import CustomizedTimeline from '../pages/CustomizedTimeline'
import CardEmpresa from '../pages/CardEmpresa'

import imgHa from '../../utils/img/ha.jpeg'
import imgZara from '../../utils/img/zara.jpeg'
import imgMfx from '../../utils/img/mfx.jpeg'

export default function Carreira(){
    return (
        <div className={style.containerCarreira}>
            <div className={style.tituloLinhaTempo}>
                <h2 className={style.tituloLinha}>Linha do tempo:</h2>
            </div>
            <CustomizedTimeline />

            <div className={style.resumoCarreira}>
                <CardEmpresa nome="Hospital América" img={imgHa} paragrafo1="No Hospital América, dei início à minha jornada de trabalho como aprendiz de Tecnologia da Informação. Naquela época, conciliava minhas responsabilidades diárias no hospital com as aulas noturnas na faculdade. Essa experiência se revelou extremamente enriquecedora, pois me possibilitou aplicar os conceitos que estava aprendendo nos primeiros semestres diretamente na prática profissional."
                paragrafo2="Fui agraciado com um suporte excepcional por parte da equipe, a qual me proporcionou total liberdade para sanar minhas dúvidas e observar profissionais mais experientes em plena ação. Minha função envolvia o atendimento primário aos usuários, sendo responsável por solucionar questões relativas a problemas de hardware e software mais simples. Essa etapa fundamental me proporcionou uma sólida base para a construção da minha carreira profissional."/>

                <CardEmpresa nome="Zaraplast S.a" img={imgZara} paragrafo1="Na Zaraplast, ocorreu meu segundo envolvimento com o mercado de trabalho, onde assumi o papel de estagiário de Tecnologia da Informação. No entanto, fui incumbido de muito mais responsabilidades em comparação à minha posição anterior como aprendiz. Além das interações com o suporte, também me foram confiadas tarefas relacionadas à infraestrutura. Essas atribuições adicionais refletiram a confiança depositada em mim e na minha capacidade de lidar com desafios complexos."
                 paragrafo2="Apesar de ter vivenciado e aprendido com as experiências ligadas a suporte e infraestrutura, eu sempre soube que minha verdadeira paixão era a programação. Com o apoio dos meus gestores, pude finalmente concretizar esse desejo ao implementar minha primeira página web que não se tratava de um projeto pessoal. Especificamente, desenvolvi a lista de ramais da empresa, que atendia aos mais de 1000 funcionários. Apesar da aparente simplicidade, esse projeto trouxe-me grande satisfação, uma vez que a nova funcionalidade da intranet da empresa foi amplamente aprovada por todos os colaboradores." />
                
                <CardEmpresa nome="Grupo MFX" img={imgMfx} paragrafo1="No Grupo MFX, vivenciei a minha terceira incursão no mercado de trabalho, onde atualmente estou empregado. Minha trajetória teve início como desenvolvedor front-end, uma oportunidade que surgiu graças ao reconhecimento do meu trabalho por um prestador de serviços da Zaraplast. Esse reconhecimento abriu as portas para que eu me unisse à equipe."
                paragrafo2="No decorrer do meu tempo aqui, evolui para a função de consultor Fluig, atendendo a uma variada gama de clientes, tanto a nível nacional quanto internacional. No entanto, minha busca constante pelo aprendizado me levou a explorar outras tecnologias. Enquanto já trabalhava com JavaScript no front-end, aprofundei meus conhecimentos em Node.js. Esse mergulho me permitiu aprimorar minhas habilidades e desenvolver projetos mais complexos, que não só abrangiam a interface do usuário, mas também exigiam a implementação de soluções no back-end para funcionar de maneira integral. Realizei a entrega de projetos altamente escaláveis, capazes de atender a uma grande quantidade de usuários, a uma variedade de clientes distintos." />
            </div>
        </div>
    )
} 