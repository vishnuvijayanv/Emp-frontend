import React from 'react'
import { Link } from 'react-router-dom'
function ListEmployee() {
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
                        <tr>
                            <td>1</td>
                            <td>Sample Caption</td>
                            <td>http://example.com</td>
                            <td>2023-11-25 12:34:56</td>
                            <td>2023-11-25 12:34:56</td>
                            <td>2023-11-25 12:34:56</td>
                            <td>
                                <button class="btn btn-danger">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    
                    </tbody>
                </table>
                </div>
            </>

            )
}

            export default ListEmployee