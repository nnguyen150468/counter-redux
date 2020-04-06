import React from 'react'


export default function Box() {
    return (
        <div className="flex-column bg-warning" style={{width: "20%", height:"6.5em", border: "1px solid", textAlign:"center"}}>
            <h2 className="form-label">Colorfull Box</h2>
            <input className="form-control col-8 mx-auto" type="input"/>
        </div>
    )
}
