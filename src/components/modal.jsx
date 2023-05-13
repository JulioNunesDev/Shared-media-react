
import styled, { keyframes } from "styled-components"

const animaModal = keyframes`
from{
opacity: 0;
}
to{
opacity: 1;
}
`
export const ModalDivs = styled.div`

width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.5) ;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
animation: 0.5s ${animaModal} ease-in-out;

div{
    background-color: #f0f3f6 ;
    width: 500px;
    height: 500px;
    border-radius: 25px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span{
        position: absolute;
        right: 25px;
        top: 15px;
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
    }

    h1{
        font-style: italic;
      
    }
    h2{
        font-style: italic;
    }
    .skills{
        text-align: left;
        width: 90%;
        line-height: 55px;
        color: #007AFF;
    }
    .Node{
        color: #0cbd74;
    }
    .React{
        color: #076dda;
    }
    .Banco{
        color: #0720da;
    }
}



` 

const Modal = ({ShowModal}) =>{
   
    return(
        <ModalDivs>
            <div>
                <span onClick={ShowModal}>X</span>
                <h1>Meu nome é Julio Nunes!</h1>
                <h1>FullStack Jr.</h1>
                <h2 className="skills">Skills: </h2 >
                <h2 className="Node">NodeJs</h2>
                <h2 className="React">ReactJs</h2>
                <h2 className="Sol">Solidity</h2>
                <h2 className="Banco">Bancos de Dados</h2>
            </div>
        </ModalDivs>
    )
}

export default Modal