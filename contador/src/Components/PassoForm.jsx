import React from 'react'

export default props => {
    return(
        <h2>
            <label htmlFor="passoImput">Passo: </label>
            <imput
                id="passoImput"
                type="number"
                value={props.passo}
                onChange={event => props.setPasso(+event.target.value)}
            />
        </h2>
    )
}