import { HomeDiv } from "./styHome"
import { Social } from "../../media-social"
import Julio from '../assets/julio.jpg'
import Modal from "./modal"
import { useState } from "react"

const Home = ()=>{
    const [modal, setModal]=useState(false)

    function ShowModal(){
        setModal(!modal)
    }
   
    return(
        <HomeDiv>
            {!modal ? <Modal ShowModal={ShowModal} /> : null}
            <div className="content">
            <div className="infors">
                <img src={Julio} alt="Logo Julio"
                onClick={ShowModal}
                />
                <h1>Follow Me</h1>
                <h3>for more freebies & inspirations  </h3>
            </div>
            <div className="infors-social">
                {Social.map((social, index)=>(
                    <a href={social.link} target="_blank">
 
                    
                    <article key={index}>
                        <div className="sociais">
                       <img src={social.logo} alt="logo midia social" />

                        <div>
                            <h4>{social.subTitle}</h4>
                            <h3>{social.title}</h3> 
                        </div>

                       </div>
                    </article  >
                    </a>
                ))}
            </div>
            </div>
        </HomeDiv>
        
    )
}

export default Home