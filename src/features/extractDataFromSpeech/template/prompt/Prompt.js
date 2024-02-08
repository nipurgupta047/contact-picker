import React, { useState } from 'react'
import './Prompt.css'
import { FaMicrophone, FaSearch } from 'react-icons/fa'

export default function Prompt({idx}) {

     const [promtToUser, setPromptToUser] = useState('What is your Date of Birth?')
     const [promptToAi, setPromptToAi] = useState('Get the Date of Birth of Customer')

  return (
     <div className='promptDiv'>
          {/* Template */}
          <h6>#{idx+1}</h6>
          <div style={{'marginBottom':'20px'}}>
               <span style={{'fontSize':'14px', 'fontWeight':'bold'}}>Prompt to User</span>
               <input type='text' onChange={(e)=>setPromptToUser(e.target.value)} className='inputForPrompt' value={promtToUser} placeholder='enter prompt here' style={{'marginLeft':'25px', 'width':'400px', 'borderRadius':'3px', 'border':'1px solid grey'}}/>
               <FaMicrophone style={{'border':'2px solid black', 'padding':'5px', 'fontSize':'30px', 'borderRadius':'50px', 'marginLeft':'10px'}} />
          </div>

          <div style={{'marginBottom':'20px'}}>
               <span style={{'fontSize':'14px', 'fontWeight':'bold'}}>Prompt to AI</span>
               <input type='text' onChange={(e)=>setPromptToAi(e.target.value)} className='inputForPrompt' value={promptToAi} placeholder='enter prompt here' style={{'marginLeft':'43px', 'width':'400px', 'borderRadius':'3px', 'border':'1px solid grey'}}/>
          </div>

          <div style={{'marginBottom':'20px'}}>
               <span style={{'fontSize':'14px', 'fontWeight':'bold'}}>Data Type</span>
               <input type='text' className='inputForPrompt' value={'Date'} placeholder='' style={{'marginLeft':'61px', 'width':'400px', 'borderRadius':'3px', 'border':'1px solid grey'}}/>
          </div>

          <div style={{'marginBottom':'20px'}}>
               <span style={{'fontSize':'14px', 'fontWeight':'bold'}}>Business Logic</span>
               <input type='text' className='inputForPrompt' value={'Date Should be less than Current Date'} placeholder='' style={{'marginLeft':'28px', 'width':'400px', 'borderRadius':'3px', 'border':'1px solid grey'}}/>
               <FaSearch style={{'fontSize':'18px', 'marginLeft':'10px'}} />
          </div>
          
     </div>
  )
}
