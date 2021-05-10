import './App.css';

import React from 'react'

import Contador from './Components/Contador'
import Card from './Components/layout/Card'

export default () => (

    <div className="App">
        <h1>Contador</h1>

        <div className="Cards">

            <Card titulo="Contador componentizado" color="#111">
                <Contador numeroInicial={10} />
            </Card>
        </div> 
    </div>
);
