import style from './Projetos.module.css'

import CardProjeto from '../pages/CardProjeto'

import getApetImg from '../../utils/img/getapet.png'
import toughtsImg from '../../utils/img/tougths.png'
import podcasterImg from '../../utils/img/podcastr.jpg'
import portifolioImg from '../../utils/img/portifolio.png'
import cpaImg from '../../utils/img/cpa.png'
import gestFatImg from '../../utils/img/gestaoFat.jpg'
import gestUsuImg from '../../utils/img/gestUsua.jpg'
import cotEleImg from '../../utils/img/cotacaoEletronica.jpg'
import prescImg from '../../utils/img/prescricaoMedica.png'

export default function Projetos() {
    return (
        <div className={style.projetosContainer}>
            <h1 className={style.projetosTitulo}>Principais projetos:</h1>

            <div className={style.projetos}>

            <CardProjeto titulo="Prescrição Médica" tipo="Pessoal" paragrafo="O projeto de prescrição médica tem como objetivo de ser um sistema completo de prescrição de medicamento a pacientes. O sistema foi desenvolvido inteiro do zero, desde a modelagem do banco,  até as telas no front-end utilizando Angular. Nele é possível cadastrar os pacientes e os médicos, os médicos tem a possibilidade de cadastrar medicamentos, prescrever receitas médicas e visualizar o histórico de prescrições dos usuários." imagem={prescImg} tecnologias={[{
                    TITULO: "Angular",
                    DESCRICAO: "Foi utilizado no front-end do projeto."
                }, {
                    TITULO: "Angular Material",
                    DESCRICAO: "Utilizado como biblioteca de estilização para o projeto."
                }, {
                    TITULO: "PostgreSQL",
                    DESCRICAO: "Foi utilizado PostgreSQL como banco de dados."
                }, {
                    TITULO: "NodeJs",
                    DESCRICAO: "Foi utilizado o NodeJs para desenvolvimento do back-end do projeto."
                }, {
                    TITULO: "Express",
                    DESCRICAO: "Foi utilizado o express para facilitar a criação das rotas e de outras funcionalidades do sistema."
                }, {
                    TITULO: "Swagger",
                    DESCRICAO: "Foi utilizado o Swagger para documentar as rotas da aplicação."
                }, {
                    TITULO: "Jest",
                    DESCRICAO: "Utilizado para testes automatizados."
                }]} />

                <CardProjeto titulo="Produto Acabado" tipo="Crown Cork" paragrafo="O sistema de cadastro de produtos acabados foi elaborado na plataforma fluig, visando estabelecer um controle mais efetivo sobre os produtos finais da Crown. Esse sistema permite uma gestão mais precisa do processo de cadastramento dos itens destinados à produção da empresa. Através da automatização desse procedimento, tornou-se possível a análise dos indicadores que identificam eventuais pontos críticos e métricas relevantes. Esse enfoque possibilitou um gerenciamento mais eficiente e abrangente do projeto em pauta." imagem={cpaImg} tecnologias={[{
                    TITULO: "Fluig",
                    DESCRICAO: "Foi utilizado como plataforma para digitalização do processo."
                }, {
                    TITULO: "JQuery",
                    DESCRICAO: "Utilizado para o front-end, onde desenvolvi o formulário principal e as telas auxiliares do projeto."
                }, {
                    TITULO: "MySql",
                    DESCRICAO: "Foi utilizado MySql para gravação das informações e consultas para as telas auxiliares do projeto."
                }, {
                    TITULO: "Protheus",
                    DESCRICAO: "Foi utilizado o Protheus como ERP para a gravação do produto acabado que é utilizado para a fabricação do item."
                }]} />


                <CardProjeto titulo="Get A Pet" tipo="Pessoal" paragrafo="O Get A Pet é uma rede social onde consiste em ser uma plataforma onde usuários possam adotar pets de outras pessoas, foi realizado através do curso do Mateus Battisti da Hora de Codar de NodeJs, esse projeto é bem completo com funcionalidades de criar usuário, incluir um pet no sistema, realizar um agendamento para visita do pet e concluir a adoção. Foi bem divertido faze-lo e consegui aprender muito com ele." imagem={getApetImg} linkGh="https://github.com/oguilima/getAPet" tecnologias={[{
                    TITULO: "NodeJs",
                    DESCRICAO: "NodeJs foi utilizado para desenvolver o back-End da aplicação."
                }, {
                    TITULO: "Express",
                    DESCRICAO: "Foi utilizado o express para facilitar a criação das rotas e de outras funcionalidades do sistema."
                }, {
                    TITULO: "ReactJs",
                    DESCRICAO: "Foi utilizado ReactJs para desenvolver o front-end da aplicação."
                }, {
                    TITULO: "MongoDB",
                    DESCRICAO: "Foi utilizado o MongoDB como base de dados para toda aplicação."
                }]} />

                <CardProjeto titulo="Gestão de Faturamento" tipo="Zaraplast S.a" paragrafo="O sistema de gestão de faturamento da Zaraplast foi realizado através da plataforma Fluig, alcançando assim a total digitalização do processo. Este sistema inovador desempenha um papel crucial na solução das questões enfrentadas pelas equipes de vendas, faturamento e logística. Através de um portal unificado, todas as informações são disponibilizadas de forma ágil e eficaz, promovendo uma abordagem centralizada que otimiza a experiência." imagem={gestFatImg} tecnologias={[{
                    TITULO: "Fluig",
                    DESCRICAO: "Foi utilizado como plataforma para digitalização do processo."
                }, {
                    TITULO: "JQuery",
                    DESCRICAO: "Utilizado para o front-end, onde desenvolvi o formulário principal e as telas auxiliares do projeto."
                }, {
                    TITULO: "MySql",
                    DESCRICAO: "Foi utilizado MySql para gravação das informações e consultas para as telas auxiliares do projeto."
                }, {
                    TITULO: "Protheus",
                    DESCRICAO: "Foi utilizado o Protheus como ERP para a emissão de notas fiscais."
                }, {
                    TITULO: "PC Factory - PPI",
                    DESCRICAO: "Foi utilizado o SmartSolution como ERP para a fabricação dos produtos da empresa."
                }]} />

                <CardProjeto titulo="Thoughts" tipo="Pessoal" paragrafo="O Thoughts é mais um projeto desenvolvido no curso do Mateus Battisti da Hora de Codar de NodeJs, o projeto consiste em ser uma rede social para compartilhar diversos tipos de pensamentos, o projeto é bem legal e é possível cadastrar usuários novos, publicar pensamentos e verificar os pensamentos de outros usuários." imagem={toughtsImg} linkGh="https://github.com/oguilima/Toughts" tecnologias={[{
                    TITULO: "NodeJs",
                    DESCRICAO: "Foi utilizado para desenvolver o Back-End da aplicação."
                }, {
                    TITULO: "Express",
                    DESCRICAO: "Foi utilizado o express para facilitar a criação das rotas e de outras funcionalidades do sistema."
                }, {
                    TITULO: "ReactJs",
                    DESCRICAO: "Foi utilizado ReactJs para desenvolver o front-end da aplicação."
                }, {
                    TITULO: "MySql",
                    DESCRICAO: "Foi utilizado o MySql como base de dados para toda aplicação."
                }]} />


                <CardProjeto titulo="Gestão de Usuários" tipo="Rede Oba" paragrafo="O sistema de administração de usuários foi concebido para permitir a extração simplificada de relatórios relacionados aos utilizadores da plataforma Fluig. Através desse sistema, é possível obter informações abrangentes sobre diversos aspectos, incluindo os usuários com privilégios administrativos, aqueles que aceitaram as políticas de utilização da plataforma, bem como os grupos e funções atribuídas a cada usuário. Todas essas informações são prontamente acessíveis ao administrador do sistema, proporcionando uma gestão eficaz e conveniente." imagem={gestUsuImg} tecnologias={[{
                    TITULO: "Fluig",
                    DESCRICAO: "Foi utilizado como plataforma para digitalização do processo."
                }, {
                    TITULO: "JQuery",
                    DESCRICAO: "Utilizado para o front-end, onde desenvolvi as telas do projeto."
                }, {
                    TITULO: "MySql",
                    DESCRICAO: "Foi utilizado MySql para consulta das informações relacionadas aos usuários."
                }]} />


                <CardProjeto titulo="Podcastr" tipo="Pessoal" paragrafo="O Podcastr é um projeto desenvolvido através da Next-Level-Week, semana de desenvolvimento realizado pela Rocketseat. O sistema foi desenvolvido em uma semana e consiste em ser um player de áudio com foco em podcasts, onde após o cadastro do podcast, o mesmo fica disponível para ser escutado na plataforma. O mesmo tem funções completas de controle de reprodução do podcast." imagem={podcasterImg} linkGh="https://github.com/oguilima/Podcastr-NLW" tecnologias={[{
                    TITULO: "ReactJs",
                    DESCRICAO: "Foi utilizado ReactJs para desenvolver o front-end da aplicação."
                }, {
                    TITULO: "NextJs",
                    DESCRICAO: "Foi utilizado para desenvolver o front-end da aplicação."
                }, {
                    TITULO: "Axios",
                    DESCRICAO: "Foi utilizado para fazer conexões de API para aplicação."
                }]} />

                <CardProjeto titulo="Políticas de Acesso" tipo="Vaccinar" paragrafo='O "Sistema de Políticas de Acesso" opera como um mecanismo através do qual os documentos fornecidos pelo setor de Recursos Humanos são disseminados para todos os usuários da plataforma. O objetivo central é garantir que cada usuário seja informado e possa aceitar as políticas estabelecidas pela empresa. Esse projeto reveste-se de uma complexidade significativa, pois abrange todos os utilizadores da plataforma. Foram implementadas estratégias para assegurar a escalabilidade, e o resultado foi uma realização bem-sucedida desse empreendimento desafiador.' imagem={gestUsuImg} tecnologias={[{
                    TITULO: "Fluig",
                    DESCRICAO: "Foi utilizado como plataforma para digitalização do processo."
                }, {
                    TITULO: "JQuery",
                    DESCRICAO: "Utilizado para o front-end, onde desenvolvi as telas do projeto."
                }, {
                    TITULO: "MySql",
                    DESCRICAO: "Foi utilizado MySql para consulta das informações relacionadas aos usuários."
                }]} />

                <CardProjeto titulo="Portifólio" tipo="Pessoal" paragrafo="Meu portfólio tem como propósito compartilhar um pouco sobre mim, minha trajetória profissional, os projetos que desenvolvi e o conhecimento que adquiri ao longo do tempo. Nele, você encontrará insights sobre meu percurso e o progresso da minha carreira, evidenciando meu constante aprendizado e aprimoramento à medida que avanço." linkGh="https://github.com/oguilima/portifolio" imagem={portifolioImg} tecnologias={[{
                    TITULO: "ReactJs",
                    DESCRICAO: "Foi utilizado ReactJs para desenvolver o front-end da aplicação."
                }, {
                    TITULO: "MaterialUi",
                    DESCRICAO: "Foi utilizado para aproveitamento de componentes e ícones."
                }]} />

                <CardProjeto titulo="Cotação Eletrônica" tipo="Lifemed" paragrafo='O projeto de "Cotação Eletrônica" visa a digitalização de um processo que previamente era conduzido de forma manual pelos compradores. A partir da geração de uma solicitação de compra de um produto no sistema Protheus, o comprador assume a responsabilidade de identificar as empresas cadastradas para fornecer esse produto. Em seguida, é feita a requisição de cotações, permitindo que as empresas forneçam orçamentos diretamente. Após essa etapa, o comprador avalia as cotações e seleciona o fornecedor vencedor. Nesse momento, o sistema automaticamente emite um pedido de compra com base nas informações pertinentes. Esse projeto representa uma melhoria substancial na eficiência do processo, eliminando a intervenção manual e agilizando a obtenção dos produtos necessários.' imagem={cotEleImg} tecnologias={[{
                    TITULO: "Fluig",
                    DESCRICAO: "Foi utilizado como plataforma para digitalização do processo."
                }, {
                    TITULO: "JQuery",
                    DESCRICAO: "Utilizado para o front-end, onde desenvolvi o formulário principal e as telas auxiliares do projeto."
                }, {
                    TITULO: "MySql",
                    DESCRICAO: "Foi utilizado MySql para gravação das informações e consultas para as telas auxiliares do projeto."
                }, {
                    TITULO: "Protheus",
                    DESCRICAO: "Foi utilizado o Protheus como ERP para a gravação do cotação do produto."
                }]} />
            </div>

        </div>
    )
} 