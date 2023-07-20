import React from 'react'
import './Input.css'

function Input() {
  return (
    <div>
        <div className='form-contanier'>
            <form>
                <div className='inputfields'>
                    <label className='label-first'>ORDER LIST ID</label><input type='number' className='input-first'></input>
                    <label className='label-second'>BUILDING ID</label><input type='number' className='input-second'></input>
                    <label className='label-third'>BUILDING NAME</label><input type='number' className='input-third'></input>
                    <label className='label-fourth'>BUILDING ADDRESS</label><input type='number' className='input-fourth'></input>
                </div>
                <div className='description-label'>
                    <label>ORDER DESCRIPTION</label><input type='text'></input>
                 </div>
             </form>

        </div>
    </div>
  )
}

export default Input