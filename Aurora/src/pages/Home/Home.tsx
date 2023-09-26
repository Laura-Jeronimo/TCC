import * as Styled from './Home.styled'
import Grama from '../../assets/img/Background.svg'
import Seta from '../../assets/seta.png'

export function Home() {
    return (
        <Styled.GridContainer container>
            <Styled.Seta src={Seta}/>
            <Styled.Texto>Boas vindas ao Aurora!</Styled.Texto>
            <Styled.Grama src={Grama}/>
        </Styled.GridContainer>
    )
}