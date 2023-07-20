import React from 'react'
import './Body.css'

function Body() {
  return (
    <div>
    <div className='form-contanier'>
        <form>
          <div className='remark-label'>
                <label>REMARKS</label><input type='text'></input>
          </div>
          <div className='main'>
          <div className='inputfield1'>
                    <label className='label-one'>PREF BY</label><input type='number' value={5} className='input-one'></input>
                    <label className='label-two'>DATE</label><input type='number' value={4} className='input-two'></input>
                   
                </div>
                  <div className='inputfield2'>
                  <label className='label-three'>APPROVED BY</label><input type='number'value={5} className='input-six'></input>
                    <label className='label-four'>DATE</label><input type='number'value={8} className='input-three'></input>
                
                    
               </div>
               <div className='inputfield3'>
              
               <label className='label-five'>CHECK BY</label><input type='number'value={8} className='input-fourth'></input>
               <label className='label-six'>DATE</label><input type='number'value={5} className='input-five'></input>
               </div>
           </div>
               <div className='buttons'>
                <button className='button1'>SEND FOR CHECK</button>
                <button className='button2'>SEND FOR APP</button>
                <button className='button3'>APPROVE</button>
                <button className='button4'>DELETE</button>
                <button className='button5'>CANCEL</button>
                <button className='button6'>SAVE</button>
           </div>
            
                
       </form>

    </div>
    </div>
  )
}

export default Body