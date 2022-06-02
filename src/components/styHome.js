import styled from "styled-components";


export const HomeDiv = styled.main`
width: auto;
height: 100vh;

display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;

.content{
    width: 965px;
  
    height: auto;
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;

    .infors{
        margin-bottom: 25px;
        img{
            width: 120px;
            border-radius: 50%;
            height: 120px;
            object-fit: cover;
            transition: .2s ease-out;
            margin-bottom: 15px;
            
        }
        img:hover{
                box-shadow: 2px 2px 10px rgba(0,0,0,0.5);
                cursor: pointer;
            }
        h1{
            font-size: 40px;
            font-family: Arial, Helvetica, sans-serif;
        }
        h3{
            font-size: 20px;
            color: #000;
            font-weight: 400;
        }

    }

    .infors-social{
        width: 100%;
        height: auto;
        
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        a{
            text-decoration: none;
        }
        article{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: auto;
            height: 100px;
            
            
            
            .sociais{
                display: flex;
                align-items: center;
                width: auto;
                height: auto;
                gap: 10px;
                box-shadow: 2px 2px 7px rgba(0,0,0,0.5);
                padding: 10px;
                transition: .3s ease-out;

                &:hover{
                    border: 2px solid #528BFA;
                   transform: translateY(-20px);
                  
                }
    
            
            img{
            width: 60px;
          }
          div{
            text-align: left;
            line-height: 25px;
              h4{
                  font-size: 18px;
                  font-family: Arial, Helvetica, sans-serif;
                  font-weight: 200;
                  color: #ccc;  
                }
                h3{
                    font-size: 20px;
                  font-family: Arial, Helvetica, sans-serif;
                  font-weight: 700;
                  color: #000;  
                }
            }
        }

        }
        
    }
}




`