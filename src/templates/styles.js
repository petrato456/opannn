import styled from "styled-components";

export const Tudo = styled.div`
  width: 100%;
  height:auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #202020;

  .div-titulo{
    display:flex;
    align-items:center;
  }

  .tudo1{
    display: flex;
    flex-direction:column;
    justify-items:center;
    align-items:center;
    height: 100%;
    position: relative;
    z-index:1;
  }
  h1{
    color:#fff;
  }
  .opan{
    width: 200px;
    display: flex;
    align-items:center;
    justify-content:center;
    height: 150px;
    margin:5px;
  }
  .board{
    width: 200px;
    display: flex;
    align-items:center;
    justify-content:center;
    background: #fff;
    height: 150px;
    margin:5px;
  }
  p{
    cursor:pointer;
    width: 98px;
    height: 50px;
    background: #fff;
    color:black;
    border:1px solid #202020;
  }
  img{
    width: 150px;
    border: 1px solid #202020;
    cursor: pointer;
    height: 150px;
  }
  .div-recebe-imgs{
    display: flex;
    width: 80%;
    height: 100%;
    background:rgba(255, 255, 255, 0.05);;
    flex-wrap:wrap;
    padding:10px;
    padding-left:80px;
    margin:10px;
    box-sizing: border-box;
  }

  .titulo-card{
    display: flex;
    flex-direction:column;
    align-items:center;
  }
  img{
    margin: 5px;
  }
  .board-2{
    display: flex;
    flex-wrap:wrap;
    width: auto;
    height: 150px;
    padding: 5px;
  }
  .div-local-imgs{
    width: 80%;
    display: flex;
    align-items:center;
    justify-content:center;
    position: relative;
    top: 20px;
  }
  .cosmos{
    margin-left:400px;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width: 50%;
    height: 50vh;
    background: black;
    position:absolute;
    color: red;
    z-index:2;
    transform:translateY(-500px);
    /* transition:2s ease; */
    animation:chama 2s ease;
    backdrop-filter:blur(10px);
  }
  @keyframes chama {
   from{
     transform: translateY(0);
     
   }
   to{
    transform:translateY(-650px)

   }
  }
  h2{
    color: #ffff00;
  }
  button{
    width: 240px;
    height: 41px;
    border-radius:20px;
    background: #ffff00;
    font-weight:550;
    border: none;
    margin-top:20px;
    margin-left:600px;
    cursor: pointer;
  }
`
