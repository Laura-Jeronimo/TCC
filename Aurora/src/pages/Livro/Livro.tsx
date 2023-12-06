import * as Styled from './Livro.styled'
import { useState } from 'react'
import { Popover } from '@mui/material'
import Image1 from '../../assets/livro/1.png'
import Image2 from '../../assets/livro/2.png'
import Image3 from '../../assets/livro/3.png'
import Image4 from '../../assets/livro/4.png'
import Image5 from '../../assets/livro/5.png'
import Image6 from '../../assets/livro/6.png'
import Image7 from '../../assets/livro/7.png'
import Image8 from '../../assets/livro/8.png'
import Caldeirao from '../../assets/livro/caldeirão.png'
import Padeiro from '../../assets/livro/padeiro.jpg'
import { ModalResumoExplicativo } from './ModalResumoExplicativo'
import { useNavigate } from 'react-router-dom'

export const Livro = () => {

    const navigate = useNavigate()

    const [isCheckedCover, setIsCheckedCover] = useState(false)
    const [isCheckedPage1, setIsCheckedPage1] = useState(false)
    const [isCheckedPage2, setIsCheckedPage2] = useState(false)
    const [isCheckedPage3, setIsCheckedPage3] = useState(false)
    const [isCheckedPage4, setIsCheckedPage4] = useState(false)
    const [isCheckedPage5, setIsCheckedPage5] = useState(false)
    const [isCheckedPage6, setIsCheckedPage6] = useState(false)
    const [isCheckedPage7, setIsCheckedPage7] = useState(false)
    const [isCheckedPage8, setIsCheckedPage8] = useState(false)
    const [isCheckedPage9, setIsCheckedPage9] = useState(false)

    const handleCheckBoxChangeCover = (e: any) => {
        setIsCheckedCover(e.target.checked);
    }
    const handleCheckBoxChangePage1 = (e: any) => {
        setIsCheckedPage1(e.target.checked);
    }
    const handleCheckBoxChangePage2 = (e: any) => {
        setIsCheckedPage2(e.target.checked);
    }
    const handleCheckBoxChangePage3 = (e: any) => {
        setIsCheckedPage3(e.target.checked);
    }
    const handleCheckBoxChangePage4 = (e: any) => {
        setIsCheckedPage4(e.target.checked);
    }
    const handleCheckBoxChangePage5 = (e: any) => {
        setIsCheckedPage5(e.target.checked);
    }
    const handleCheckBoxChangePage6 = (e: any) => {
        setIsCheckedPage6(e.target.checked);
    }
    const handleCheckBoxChangePage7 = (e: any) => {
        setIsCheckedPage7(e.target.checked);
    }
    const handleCheckBoxChangePage8 = (e: any) => {
        setIsCheckedPage8(e.target.checked);
    }
    const handleCheckBoxChangePage9 = (e: any) => {
        setIsCheckedPage9(e.target.checked);
    }

    const [imagem, setImagem] = useState(false);
    const [color, setColor] = useState('black');
    const [imagemPadeiro, setImagemPadeiro] = useState(false);

    const handleClick = () => {
        setImagem(true);
        setColor('#bf1304')
    };

    const handleClickPadeiro = () => {
        setImagemPadeiro(true);
        setColor('#bf1304')
    };

    const handleClose = () => {
        setImagem(false);
        setImagemPadeiro(false);
        setColor('black');
    }

    const [textoSelecionado, setTextoSelecionado] = useState('')

    const openMarcacao = Boolean(textoSelecionado);
    const handleClickMarcacao = (e: any) => {
        e.preventDefault();
    }
    const handleCloseMarcacao = () => {
        setTextoSelecionado('');
    }

    function getSelectedText() {
        let selection = window.getSelection();
        let text = selection?.toString();

        setTextoSelecionado(text || "");
    }

    const [openModalResumo, setOpenModalResumo] = useState(false)

    return (
        <>
            <Styled.GridContainer>
                <Styled.GridVoltar>
                    <Styled.Seta onClick={() => navigate('/biblioteca/infantil/iniciante')}/>
                </Styled.GridVoltar>
                <Styled.Input onChange={handleCheckBoxChangeCover} checked={isCheckedCover} type='checkbox' id='checkboxCover' />
                <Styled.Input onChange={handleCheckBoxChangePage1} checked={isCheckedPage1} type='checkbox' id='checkboxPage1' />
                <Styled.Input onChange={handleCheckBoxChangePage2} checked={isCheckedPage2} type='checkbox' id='checkboxPage2' />
                <Styled.Input onChange={handleCheckBoxChangePage3} checked={isCheckedPage3} type='checkbox' id='checkboxPage3' />
                <Styled.Input onChange={handleCheckBoxChangePage4} checked={isCheckedPage4} type='checkbox' id='checkboxPage4' />
                <Styled.Input onChange={handleCheckBoxChangePage5} checked={isCheckedPage5} type='checkbox' id='checkboxPage5' />
                <Styled.Input onChange={handleCheckBoxChangePage6} checked={isCheckedPage6} type='checkbox' id='checkboxPage6' />
                <Styled.Input onChange={handleCheckBoxChangePage7} checked={isCheckedPage7} type='checkbox' id='checkboxPage7' />
                <Styled.Input onChange={handleCheckBoxChangePage8} checked={isCheckedPage8} type='checkbox' id='checkboxPage8' />
                <Styled.Input onChange={handleCheckBoxChangePage9} checked={isCheckedPage9} type='checkbox' id='checkboxPage9' />
                <Styled.DivLivro style={{ transform: (isCheckedCover ? 'translateX(200px)' : 'none') }}>
                    <Styled.Cover style={{ transform: isCheckedCover ? 'rotateY(-180deg)' : 'none', zIndex: isCheckedCover ? 1 : 12 }}>
                        <Styled.LabelCover htmlFor='checkboxCover' />
                    </Styled.Cover>
                    <Styled.DivPag style={{ boxShadow: '0 0 3px rgb(99, 98, 98)', transform: isCheckedPage1 ? 'rotateY(-180deg)' : 'none', zIndex: isCheckedPage1 ? 2 : 11 }} id='page1'>
                        <Styled.FrontPage>
                            <Styled.Titulo>A Bruxa e o Caldeirão</Styled.Titulo>
                            <Styled.Text>Autor: José Leon Machado</Styled.Text>
                            <Styled.Text>Ilustrações: Alexandre Bandeira Rodrigues</Styled.Text>
                            <Styled.LabelNext htmlFor='checkboxPage1'> <Styled.NextIcon /> </Styled.LabelNext>
                        </Styled.FrontPage>
                        <Styled.BackPage>
                            <Styled.Image src={Image1} />
                            <Styled.LabelPrev htmlFor='checkboxPage1'> <Styled.PrevIcon /> </Styled.LabelPrev>
                        </Styled.BackPage>
                    </Styled.DivPag>
                    <Styled.DivPag style={{ boxShadow: '0 0 3px rgb(99, 98, 98)', transform: isCheckedPage2 ? 'rotateY(-180deg)' : 'none', zIndex: isCheckedPage2 ? 3 : 10 }} id='page2'>
                        <Styled.FrontPage>
                            <Styled.Paragrafo>Quando preparava uma sopa com uns olhinhos de couve para o jantar, a bruxa constatou que o <span onClick={handleClick} style={{ color: color }}>Caldeirão </span>
                                estava furado. Não era muito, não senhor. Um furo
                                pequeníssimo, quase invisível. Mas era o suficiente para, pinga que pinga, ir vertendo os líquidos e
                                ir apagando o fogo. Nunca tal lhe tinha sucedido.</Styled.Paragrafo>
                            <Styled.LabelNext htmlFor='checkboxPage2'> <Styled.NextIcon /> </Styled.LabelNext>
                            {imagem &&
                                <Styled.DivImagem>
                                    <Styled.ImgTexto src={Caldeirao} />
                                    <Styled.ButtonFechar onClick={handleClose}>fechar</Styled.ButtonFechar>
                                </Styled.DivImagem>
                            }
                        </Styled.FrontPage>
                        <Styled.BackPage>
                            <Styled.Image src={Image2} />
                            <Styled.LabelPrev htmlFor='checkboxPage2'> <Styled.PrevIcon /> </Styled.LabelPrev>
                        </Styled.BackPage>
                    </Styled.DivPag>
                    <Styled.DivPag style={{ boxShadow: '0 0 3px rgb(99, 98, 98)', transform: isCheckedPage3 ? 'rotateY(-180deg)' : 'none', zIndex: isCheckedPage3 ? 4 : 9 }} id='page3'>
                        <Styled.FrontPage>
                            <Styled.Paragrafo>Foi consultar o livro de feitiços, adquirido no tempo em que andara a tirar o curso superior de
                                bruxaria por correspondência, folheou-o de ponta a ponta, confirmou no índice e nada encontrou sobre
                                a forma de resolver o caso. Que haveria de fazer? Uma bruxa sem caldeirão era como <span onClick={handleClickPadeiro} style={{ color }}>padeiro </span> sem
                                forno. De que forma poderia ela agora preparar as horríveis poções?</Styled.Paragrafo>
                            <Styled.LabelNext htmlFor='checkboxPage3'> <Styled.NextIcon /> </Styled.LabelNext>
                            {imagemPadeiro &&
                                <Styled.DivImagemPadeiro>
                                    <Styled.ImgTexto src={Padeiro} />
                                    <Styled.ButtonFechar onClick={handleClose}>fechar</Styled.ButtonFechar>
                                </Styled.DivImagemPadeiro>
                            }
                        </Styled.FrontPage>
                        <Styled.BackPage>
                            <Styled.Image src={Image3} />
                            <Styled.LabelPrev htmlFor='checkboxPage3'> <Styled.PrevIcon /> </Styled.LabelPrev>
                        </Styled.BackPage>
                    </Styled.DivPag>
                    <Styled.DivPag onContextMenu={handleClickMarcacao} style={{ boxShadow: '0 0 3px rgb(99, 98, 98)', transform: isCheckedPage4 ? 'rotateY(-180deg)' : 'none', zIndex: isCheckedPage4 ? 5 : 8 }} id='page4'>
                        <Styled.FrontPage onMouseUp={() => getSelectedText()}>
                            <Styled.Paragrafo>Para as coisas mais corriqueiras tinha a reserva dos frascos. Mas se lhe aparecia um daqueles casos
                                em que era necessário preparar na hora uma mistela? Como o da filha de um aldeão que engolira uma
                                nuvem e foi preciso fazer um vomitório especial com trovisco, rosmaninho, três dentes de alho, uma
                                semente de abóbora seca, uma asa de morcego e cinco aparas de unhas de gato. Se a moça vomitou a
                                nuvem? Pois não haveria de vomitar? Com a potência do remédio, além da nuvem, vomitou uma grande
                                chuvada de granizo que furou os telhados das casas em redor.</Styled.Paragrafo>
                            <Styled.LabelNext htmlFor='checkboxPage4'> <Styled.NextIcon /> </Styled.LabelNext>
                        </Styled.FrontPage>
                        <Styled.BackPage>
                            <Styled.Image src={Image4} />
                            <Styled.LabelPrev htmlFor='checkboxPage4'> <Styled.PrevIcon /> </Styled.LabelPrev>
                        </Styled.BackPage>
                    </Styled.DivPag>
                    <Styled.DivPag style={{ boxShadow: '0 0 3px rgb(99, 98, 98)', transform: isCheckedPage5 ? 'rotateY(-180deg)' : 'none', zIndex: isCheckedPage5 ? 6 : 7 }} id='page5'>
                        <Styled.FrontPage>
                            <Styled.Paragrafo>Era muito aborrecido aquele furo no caldeirão. Nem a sopa do dia-a-dia podia cozinhar.
                                Mantinha-se a
                                pão e água, que remédio, enquanto não encontrasse uma forma de resolver o caso. Matutou dias
                                seguidos no assunto e começou a desconfiar se o mercador que lhe vendera o caldeirão na feira há
                                muitos anos atrás a não teria enganado com material de segunda categoria. A ela, bruxa
                                inexperiente
                                e a dar os primeiros passos nas artes mágicas, podia facilmente ter-lhe dado um caldeirão com
                                defeito.</Styled.Paragrafo>
                            <Styled.LabelNext htmlFor='checkboxPage5'> <Styled.NextIcon /> </Styled.LabelNext>
                        </Styled.FrontPage>
                        <Styled.BackPage>
                            <Styled.Image src={Image5} />
                            <Styled.LabelPrev htmlFor='checkboxPage5'> <Styled.PrevIcon /> </Styled.LabelPrev>
                        </Styled.BackPage>
                    </Styled.DivPag>
                    <Styled.DivPag style={{ boxShadow: '0 0 3px rgb(99, 98, 98)', transform: isCheckedPage6 ? 'rotateY(-180deg)' : 'none', zIndex: isCheckedPage6 ? 7 : 6 }} id='page6'>
                        <Styled.FrontPage>
                            <Styled.Paragrafo>Decidiu então ir à próxima feira e levar o caldeirão ao mercador. Procurando na secção das vendas de
                                apetrechos de cozinha, a bruxa verificou que o mercador já não era o mesmo. Era neto do outro e,
                                claro, não se lembrava – nem podia – das tropelias comerciais do seu falecido avô. Ficou
                                desapontada. Perguntou-lhe, todavia, o que podia fazer com o caldeirão furado. O mercador mirou-o,
                                remirou-o, sopesou-o com ambas as mãos e disse:</Styled.Paragrafo>
                            <Styled.LabelNext htmlFor='checkboxPage6'> <Styled.NextIcon /> </Styled.LabelNext>
                        </Styled.FrontPage>
                        <Styled.BackPage>
                            <Styled.Image src={Image6} />
                            <Styled.LabelPrev htmlFor='checkboxPage6'> <Styled.PrevIcon /> </Styled.LabelPrev>
                        </Styled.BackPage>
                    </Styled.DivPag>
                    <Styled.DivPag style={{ boxShadow: '0 0 3px rgb(99, 98, 98)', transform: isCheckedPage7 ? 'rotateY(-180deg)' : 'none', zIndex: isCheckedPage7 ? 8 : 5 }} id='page7'>
                        <Styled.FrontPage>
                            <Styled.Paragrafo>
                                – Este está bom é para você pôr ao pé da porta a fazer de vaso. Com uns pés de sardinheiras ficava
                                bem bonito.<br /> A bruxa irritou-se com a sugestão e, não fosse a gente toda ali na feira a comprar e
                                a vender, transformava-o em onagro. Acabou por dizer:<br /> – A solução parece boa, sim senhor. Mas
                                diga-me cá: Se ponho o caldeirão a fazer de vaso, onde cozinho eu depois? <br /> – Neste novo que aqui
                                tenho e com um preço muito em conta...<br /> A bruxa olhou para o caldeirão que o mercador lhe
                                apontava, sobressaindo num monte de muitos outros, de um brilhante avermelhado, mesmo a pedir que o
                                levassem. A bruxa, que tinha os seus brios de mulher, ficou encantada.
                            </Styled.Paragrafo>
                            <Styled.LabelNext htmlFor='checkboxPage7'> <Styled.NextIcon /> </Styled.LabelNext>
                        </Styled.FrontPage>
                        <Styled.BackPage>
                            <Styled.Image src={Image7} />
                            <Styled.LabelPrev htmlFor='checkboxPage7'> <Styled.PrevIcon /> </Styled.LabelPrev>
                        </Styled.BackPage>
                    </Styled.DivPag>
                    <Styled.DivPag style={{ boxShadow: '0 0 3px rgb(99, 98, 98)', transform: isCheckedPage8 ? 'rotateY(-180deg)' : 'none', zIndex: isCheckedPage8 ? 9 : 4 }} id='page8'>
                        <Styled.FrontPage>
                            <Styled.Paragrafo>O mercador aproveitou a ocasião para tecer os maiores elogios ao artigo, gabando a dureza e a
                                grossura do cobre, os rendilhados da barriga, o feitio da asa em meia lua, a capacidade e o peso,
                                tão leve como um bom caldeirão podia ser, fácil de carregar para qualquer lado.<br /> – Pois bem,
                                levo-o. O mercador esfregou as mãos de contente.<br /> – Mas aviso-o – acrescentou a bruxa. – Se lhe
                                acontecer o mesmo que ao outro, pode ter a certeza de que o transformarei em sapo. <br />O mercador
                                riu-se do disparate enquanto embrulhava o artigo.</Styled.Paragrafo>
                            <Styled.LabelNext htmlFor='checkboxPage8'> <Styled.NextIcon /> </Styled.LabelNext>
                        </Styled.FrontPage>
                        <Styled.BackPage>
                            <Styled.Image src={Image8} />
                            <Styled.LabelPrev htmlFor='checkboxPage8'> <Styled.PrevIcon /> </Styled.LabelPrev>
                        </Styled.BackPage>
                    </Styled.DivPag>
                    <Styled.DivPag style={{ boxShadow: '0 0 3px rgb(99, 98, 98)', transform: isCheckedPage9 ? 'rotateY(-180deg)' : 'none', zIndex: isCheckedPage9 ? 10 : 3 }} id='page9'>
                        <Styled.FrontPage>
                            <Styled.Paragrafo>Os anos foram passando e a bruxa continuou no seu labor. Até que um dia deu por um furo no novo e
                                agora velho caldeirão. Rogou uma praga tamanha que o neto do segundo mercador que lho vendera, a
                                essa hora, em vez de estar a comer o caldo na mesa com a família, estava num charco a apanhar
                                moscas.</Styled.Paragrafo>
                            <Styled.LabelNext htmlFor='checkboxPage9'> <Styled.NextIcon /> </Styled.LabelNext>
                        </Styled.FrontPage>
                        <Styled.BackPage>
                            <Styled.Titulo>FIM</Styled.Titulo>
                            <Styled.LabelPrev htmlFor='checkboxPage9'> <Styled.PrevIcon /> </Styled.LabelPrev>
                        </Styled.BackPage>
                    </Styled.DivPag>
                    <Styled.BackCover />
                </Styled.DivLivro>
            </Styled.GridContainer>

            <ModalResumoExplicativo open={openModalResumo} handleClose={() => setOpenModalResumo(false)} />
            <Popover open={openMarcacao} onClose={handleCloseMarcacao} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} anchorReference="anchorPosition" anchorPosition={{ top: 450, left: 900 }}>
                <Styled.OpcoesDiv>
                    <Styled.Opcoes type="normal" onClick={() => { setOpenModalResumo(true), setTextoSelecionado('') }}>Explicar parágrafo</Styled.Opcoes>
                </Styled.OpcoesDiv>
            </Popover>
        </>

    )
}