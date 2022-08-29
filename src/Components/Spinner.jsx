import React, { useContext } from 'react'
import Context from '../Context/Context';
const Spinner = () => {
    const context = useContext(Context);
    const {load} = context
    return (
        <>
        {load && <div>
         <div className="spinner-border text-dark container d-flex justify-content-center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>}
        </>
    )
}

export default Spinner
