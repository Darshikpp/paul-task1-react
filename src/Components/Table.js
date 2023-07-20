import React from 'react'
import './Table.css'

function Table({rows,deleteRow}) {
  return (
    <div>
        <div>
            <table className='table-container'>
                <thead>
                    <tr className='table-headings'>
                        <th style={{marginLeft:'10px'}}></th>
                        <th>orderlist itemID</th>
                        <th>ITEM NR</th>
                        <th>MATERIAL ID</th>
                        <th>MAT DESCRIPTION</th>
                        <th>CURRENT QTY</th>
                      
                        <th>PREVIOUS QTY</th>
                        <th>QTY DIFF</th>
                        <th>order comment</th>
                        <div className='btn-container'>
                            <button className='btnbtn'>+</button>
                            <button className='btnbtn'>-</button>
                        </div>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row,idx)=>{
                        return<tr key={idx}>

                        <td>{row.number}</td>
                        <td style={{marginLeft:'10px'}}>{row.id}</td>
                        <td>{row.itemNumber}</td>
                        <td>{row.meterialId}</td>
                        <td>{row.materialDescription}</td>
                        <td>{row.currentQty}</td>
                        <td>{row.previousQty}</td>
                        <td>{row.qtyDifference}</td>
                        
                        <td>{row.comment}</td>
                        <td><button onClick={()=>deleteRow(idx)}>Delete</button></td>
                        
                        

                    </tr>
                    })
                    
                    }
                 </tbody>
             </table>
        </div>
    </div>
  )
}

export default Table