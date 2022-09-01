import { useState } from 'react'
import './Expander.css'

const Expander = () => {
    const [expand, setExpand] = useState('false')

    const goBig = () => {
        setExpand(!expand)
    }

    /* const goBigger = () => {
        setExpand(!expand){
            
    } */


    return (
        <div className='flexContainer'>

            <div className='headingButton'>
                <h3>Why ist React great?</h3>
                <button onClick={goBig}>+</button>
            </div>

            <div className='goBigger' style={!expand ? { display: 'none' } : { display: 'block' }}>
                <p>Fast Learning Curve</p>
            </div>

        </div>
    )
}
export default Expander;