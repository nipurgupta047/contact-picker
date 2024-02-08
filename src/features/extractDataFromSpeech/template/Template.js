import React, { useState } from 'react'
import './Template.css'
import { FaPlusCircle, FaSearch } from 'react-icons/fa'
import Prompt from './prompt/Prompt'

export default function Template({idx}) {
     const[promptArray, setPromptArray] = useState([])

     function addNewPrompt(params) {
          setPromptArray((prev)=> [...prev, {
               promptToUser:'',
               promptToAi:'',
               dataType:'',
               businessLogic:'',
          }])
     }

  return (
    <div className='templateDiv'>
          {/* Template */}
          <h6 style={{'color':'black', 'marginBottom':'20px'}}><ul><li>Template - {idx+1}</li></ul></h6>
          <div style={{'marginBottom':'20px'}}>
               <span style={{'fontSize':'16px', 'fontWeight':'bold'}}>Title</span>
               <input type='text' className='inputForTemplate' placeholder='enter title here' style={{'marginLeft':'76px', 'width':'400px', 'borderRadius':'3px', 'border':'1px solid grey'}}/>
               <FaSearch style={{'fontSize':'18px', 'marginLeft':'10px'}} />
          </div>

          <div style={{'display':'flex'}}>
               <span style={{'fontSize':'16px', 'fontWeight':'bold'}}>Desctiption</span>
               <textarea type='text' className='inputForTemplate' placeholder='enter description here' style={{'marginLeft':'20px', 'width':'400px', 'borderRadius':'3px'}}/>
          </div>

          {
               promptArray.map((ele1, idx)=>{
                    return <Prompt idx={idx}/>
               })
          }

          <button className='addPromptButton' onClick={addNewPrompt}>
               <FaPlusCircle style={{'fontSize':'15px', 'color':'rgb(240, 240, 240'}}/>
               <span style={{'color':'white', 'fontSize':'13px', 'marginLeft':'5px'}}>Add Prompt</span>
          </button>

    </div>
  )
}
