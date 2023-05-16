import { useState } from 'react'

const MyRefs = () => {

    let x = 0
    const [stateX, setStateX] = useState(0)

    return (
        <>
            <h1>X: {x}</h1>
            <h1>stateX: {stateX}</h1>
            <button
                onClick={() => x += 1}
            >
                x + 1
            </button>
            <button
                onClick={() => setStateX((prev)=> prev + 1)}
            >
                x + 1
            </button>
        </>
    )
}

export default MyRefs