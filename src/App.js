import React from 'react'
import Header from './Components/Header'
import Input from './Components/Input'
import Footer from './Components/Footer'
import Modal from './Components/Modal'
import Table from './Components/Table'
import Body from './Components/Body'
import { useState } from 'react'
function App() {
  const [modal, setModal] = useState(false)

  const [rows, setRows] = useState([
    {number:'1',id:'1', itemNumber:'1', meterialId:'1',materialDescription:'Fuse',currentQty:'10',previousQty:'12',qtyDifference:'2',comment:'fuse'},
    {number:'2',id:'2', itemNumber:'2', meterialId:'2',materialDescription:'Bulb',currentQty:'12',previousQty:'15',qtyDifference:'3',comment:'fuse'},

    {number:'3',id:'3', itemNumber:'3', meterialId:'3',materialDescription:'Switch',currentQty:'4',previousQty:'14',qtyDifference:'10',comment:'fuse'},
    {number:'4',id:'4', itemNumber:'4', meterialId:'4',materialDescription:'Fan',currentQty:'15',previousQty:'20',qtyDifference:'5',comment:'fuse'},
  ])

  const handleSubmit=(newRow)=>{
    setRows([...rows,newRow])
  }


  const handleDeleteRow=(targetIndex)=>{
    setRows(rows.filter((_ ,idx) => idx !==targetIndex))
  }
  return (
    <div className='App'> 
      <Header/>
      
      <Input/>
      
      <Table rows={rows} deleteRow={handleDeleteRow}/>
      <button className='btn' style={{marginLeft:'30px'}} onClick={()=>setModal(true)}>ADD</button>
          { modal &&< Modal onSubmit={handleSubmit}/>}
         <button className='btn' onClick={()=>setModal(false)} style={{marginLeft:'30px'}}>ClOSE</button>

      <Body/>
      <Footer/>
    </div>
  )
}

export default App