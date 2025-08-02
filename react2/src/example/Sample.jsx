import React from 'react'

const Mango = () => {
    return (
        <div className="fruit-card mango-card">
            <h2 className="fruit-title">🥭 Mangoes are sweet</h2>
        </div>
    )
}

const Grapes = () => {
    return (
        <div className="fruit-card grapes-card">
            <h2 className="fruit-title">🍇 Grapes are juicy</h2>
        </div>
    )
}

function Sample() {
  return (
    <div className="sample-container">
        <h1 className="sample-title">🍓 Fruit Collection</h1>
        <div className="fruits-grid">
            <Grapes />
            <Mango />
        </div>
    </div>
  )
}

export default Sample;
