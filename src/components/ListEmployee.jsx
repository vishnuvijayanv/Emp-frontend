import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllEmpDetails } from '../services/allApi'
function ListEmployee() {
    const [allDetails,setAllDetails] = useState([])
    const getEmpDetails = async()=>{
        const response = await getAllEmpDetails()
        const {data} = response
        console.log(data);
        setAllDetails(data)

    }

    useEffect(()=>{
        getEmpDetails()
    })

    return (
        <>
        <div className='text-center'>
            <h1 className='fw-bolder'>Employee Details</h1>
            </div> 
            <div class="container mt-5  ">
                <table class="table table-bordered table-dark">
                    <thead class="thead-dark">
                        <tr>
                            <th>#</th>

                            <th>Employee Image</th>
                            <th>Employee Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Desgination</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                           {
                            allDetails?.length>0?
                            allDetails?.map((item,index)=>(<tr>
                                 <td>{index+1}</td>
                            <td className='d-flex justify-content-center align-items-center'><img src={item.PhotoUrl} width={'100px'} height={'100px'} alt="" /></td>
                            <td>{item.Name}</td>
                            <td>{item.Email}</td>
                            <td>{item.Gender}</td>

                            <td>{item.Designation}</td>
                            <td className='' >
                                <button  className=" m-2 btn btn-danger ">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </td>
                            </tr>)):
                            <p>nothing to display</p>
                           }
                    
                    </tbody>
                </table>
                </div>
            </>

            )
}

            export default ListEmployee