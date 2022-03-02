import React, { useState } from "react";

import Loading from '../components/Loading'
import Board from '../components/Board'
import Card from '../components/Card'
import { Tudo } from './styles'
import eu from '../images/eu.png'
import paula from '../images/paula.png'
import Luis from '../images/luis.png'
import Rafael from '../images/rafael.png'
import jux from '../images/jux.png'
import igor from '../images/igor.png'
import cayo from '../images/cayo.png'
import wendel from '../images/wendel.png'
import felipe from '../images/felipe.png'


function PageConquer() {
  const [luis, setLuis] = useState(false)


  const codigoSecreto = 'luis';

  let sequenciaDeCaracteres = [];

  let peguei = document.querySelector('.card');

  console.log(peguei)

  let peguei2 = document.querySelector('#board-1')
  console.log(peguei2)


  window.addEventListener('keydown', function (e) {
    const teclaPressionada = e.key;

    const fecha = e.key;
    if (fecha === 'Escape') {
      setLuis(!luis)
      sequenciaDeCaracteres = []
    }

    console.log(fecha)

    sequenciaDeCaracteres.push(teclaPressionada);

    const fraseComCaracteres = sequenciaDeCaracteres.join('');

    if (fraseComCaracteres.includes(codigoSecreto)) {
      console.log('acertou');
      setLuis(!luis)

      sequenciaDeCaracteres = [];
    }
    console.log(sequenciaDeCaracteres)
    // temporizador = setTimeout(function () {
    //   sequenciaDeCaracteres = [];
    // }, 1000)
  })
 
  return (
    <Tudo>
      <div className="tudo">
        <main className="tudo1">
          <div className="div-titulo">
            <Loading />
            <h1>COSMOS LAND</h1>
          </div>
          <div className="div-recebe-imgs">

            <div className="titulo-card">
              <h2>Meu parça</h2>
              <Board id="board-1" className="board">
                <Card id="card-1" className="card" draggable="true">
                </Card>
              </Board>
            </div>
            <div className="titulo-card">
              <h2>Brabo da galera</h2>
              <Board id="board-1" className="board">
                <Card id="card-1" className="card" draggable="true">
                </Card>
              </Board>
            </div>
            <div className="titulo-card">
              <h2>Mais engraçado(a)</h2>
              <Board id="board-1" className="board">
                <Card id="card-1" className="card" draggable="true">
                </Card>
              </Board>
            </div>
            <div className="titulo-card">
              <h2>Mais louco(a)</h2>
              <Board id="board-1" className="board">
                <Card id="card-1" className="card" draggable="true">
                </Card>
              </Board>
            </div>
            <div className="titulo-card">
              <h2>Mais polêmico</h2>
              <Board id="board-1" className="board">
                <Card id="card-1" className="card" draggable="true">
                </Card>
              </Board>
            </div>
            <div className="titulo-card">
              <h2>Gamer</h2>
              <Board id="board-1" className="board">
                <Card id="card-1" className="card" draggable="true">
                </Card>
              </Board>
            </div>
            <div className="titulo-card">
              <h2>Atleta</h2>
              <Board id="board-1" className="board">
                <Card id="card-1" className="card" draggable="true">
                </Card>
              </Board>
            </div>
            <div className="titulo-card"> 
              <h2 >M ais dedicado</h2>
              <Board id="board-1" className='board'>
                <Card id="card-1"  className='card' draggable="true" >
                </Card>
              </Board>
            </div>
            <div className="titulo-card"> 
              <h2 >Mais curioso</h2>
              <Board id="board-1" className='board'>
                <Card id="card-1"  className='card' draggable="true" >
                </Card>
              </Board>
            </div>
          </div>

            <div className="div-local-imgs">
              <Board id="board-2" className="board-2" >
                <Card id="card-2" className="card" draggable="true" >
                  <img id="opa" src={Rafael} alt='img-rafael'></img>
                </Card>
                <Card id="card-2" className="card" draggable="true">
                  <img id="opa1" src={eu} alt='img-matheus'></img>
                </Card>
                <Card id="card-2" className="card" draggable="true">
                  <img id="opa2" src={Luis} alt='img-luis'></img>
                </Card>
                <Card id="card-2" className="card" draggable="true">
                  <img id="opa3" src={paula} alt='img-paula'></img>
                </Card>
                <Card id="card-2" className="card" draggable="true">
                  <img id="opa4" src={wendel} alt='img-wendel'></img>
                </Card>
                <Card id="card-2" className="card" draggable="true">
                  <img id="opa5" src={jux} alt='img-jux'></img>
                </Card>
                <Card id="card-2" className="card" draggable="true">
                  <img id="opa6" src={igor} alt='img-igor'></img>
                </Card>
                <Card id="card-2" className="card" draggable="true">
                  <img id="opa7" src={cayo} alt='img-cayo'></img>
                </Card>
                <Card id="card-2" className="card" draggable="true">
                  <img id="opa8" src={felipe}></img>
                </Card>
              </Board>
            </div>
          

        </main>
        {/* {luis === true &&
          <div className="cosmos">
            <img id="opa2" src={Luis}></img>
            <h1>OLAAAAAAAAAAAAAAA</h1>
          </div>
        } */}
      </div>
    </Tudo>
  )
}

export default PageConquer