import React from 'react'
import AddEmploye from '../components/AddEmploye'
import ListEmployee from '../components/ListEmployee'

function Employee() {
    return (
        <>
         <div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4 d-flex justify-content-center flex-column" >
                        <h1 className='title ' style={{ fontWeight: 'bold' }}>The only way to do great work is to love what you do.</h1>  
                        <AddEmploye/> 
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6">
                        <img className='w-100' src='https://t3.ftcdn.net/jpg/03/64/90/68/240_F_364906832_3CWsp5oXzh8oauRKz7SYtPfCZ57JfESZ.jpg' />
                    </div>

                </div>
            </div>
           

           <div className='mt-5'>
            <ListEmployee/>
           </div>

        </>
    )
}

export default Employee