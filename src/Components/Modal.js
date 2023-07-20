import React, { useState } from 'react'
import './Modal.css'

function Modal({closeModal,onSubmit}) {

    const [addForm , setForm]= useState({
        number:'',
        id:'',
        itemNumber:'',
        materialId :'',
        materialDescription: '',
        currentQty:'',
        previousQty:'',
        qtyDifference:'',
        comment:''
        })

        const handleChange=(e)=>{
            setForm({
                ...addForm,
                [e.target.name]:e.target.value
            })

        }
        const handleSubmit=(e)=>{
            e.preventDefault()
            onSubmit(addForm)
        }
      return (
    <div>
        
        <div className='modal'  onClick={(e)=>{
        if(e.target.className === "modal") closeModal()
    }}>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='page'></label>
                    <input name='number' type='text' value={addForm.number}  onChange={handleChange}></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Orderlist itemUID</label>
                    <input name='id'type='number' value={addForm.id} onChange={handleChange}></input>
                </div>
               
                <div className='form-group'>
                    <label >ITEM NR</label>
                    <input type='number' name='itemNumber' value={addForm.itemNumber} onChange={handleChange}></input>
                </div>
                
                <div className='form-group'>
                    <label >METERIAL ID</label>
                    <input  type='number'name='materialId' value={addForm.materialId} onChange={handleChange}></input>
                </div>
                <div className='form-group'>
                    <label >MATERIAL DESCRIPTION</label>
                    <input  type='text' name='materialDescription'  value={addForm.materialDescription} onChange={handleChange}></input>
                </div>
                <div className='form-group'>
                    <label >CURRENT QTY</label>
                    <input  type='number' name='currentQty' value={addForm.currentQty} onChange={handleChange}></input>
                </div>
                <div className='form-group'>
                    <label >PREVIOUS QTY</label>
                    <input  type='number'name='previousQty' value={addForm.previousQty} onChange={handleChange} ></input>
                </div>
                <div className='form-group'>
                    <label >QTY DIFFERENCE</label>
                    <input  type='number'  name='qtyDifference' value={addForm.qtyDifference} onChange={handleChange}></input>
                </div>
                <div className='form-group'>
                    <label >ORDER COMMENT</label> 
                    <input  type='text' name='comment' value={addForm.comment} onChange={handleChange} ></input>
                </div>
                
                
                
                
                <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
                
            </form>
        </div>
    </div>
  )
}

export default Modal