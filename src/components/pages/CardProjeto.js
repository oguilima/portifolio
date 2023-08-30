import style from './CardProjeto.module.css'

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function CardProjeto({ titulo, paragrafo, imagem, linkGh, tipo, tecnologias }) {

    return (
        <div className={style.cardProjeto}>
            <div className={style.projetoImg}>
                <img className={style.imagemProjeto} src={imagem} />
            </div>
            <div>
                <div className={style.containerTituloProjeto}>
                    <h2>{titulo}</h2>
                    <h4>{tipo}</h4>
                </div>
                <div className={style.maisInfosProjeto}>
                    <p>{paragrafo}</p>
                </div>


                <div className={style.listaTecDiv}>
                    <h5>Tecnologias utilizadas:</h5>

                    {tecnologias.map((item) => (
                        <Accordion className={style.accordion}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                            >

                                <Typography>{item.TITULO}</Typography>

                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {item.DESCRICAO}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>


                {linkGh ? <p><a target='_blank' rel="noreferrer" href={linkGh} className={style.linkProjeto}>Repositório GitHub</a></p> : ""}

            </div>
        </div>
    )
}