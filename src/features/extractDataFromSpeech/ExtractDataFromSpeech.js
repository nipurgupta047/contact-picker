import React, { useState } from 'react'
import './ExtractDataFromSpeech.css'
import { FaCaretRight, FaFileMedical, FaPlusCircle, FaRegPlusSquare } from 'react-icons/fa'
import Template from './template/Template'

export default function ExtractDataFromSpeech() {

  const [templates, setTemplates] = useState([
  //   {
  //   title:'',
  //   description:'',
  //   promptArray:[{
  //     promptToUser:'',
  //     promptToAi:'',
  //     dataType:'',
  //     businessLogic:'',
  //   }]
  // }
])

function addNewTemplate() {
  setTemplates((prev) => [...prev, {
    title:'',
    description:'',
    promptArray:[],
  }])
}

  return (
    <div>
      <div id='addNewTemplateButton'
      style={{ }}
        onClick={addNewTemplate}>
        <FaPlusCircle style={{'fontSize':'24px', 'color':'black'}}/>
        <span style={{'fontSize':'16px', 'marginLeft':'15px', 'color':'white'}}>Add New Template</span>
      </div>
      {
        templates.map((ele, idx)=>{
          return <Template idx={idx} key={idx} ele={ele} />
        })
      }
    </div>





    // <div id='extractDataFromSpeechMainDiv'>

    //   <div className='uploadFileDiv'>
    //     <FaCaretRight />
    //     <span className='uploadHeadingTitle'>Upload Audio Speech File</span>
    //     <input type='file' style={{'paddingRight':'0px'}}/>
    //     <button id='analysisByDateRangeFilterSubmit'>Upload</button>
    //   </div>
    //   <div className='newPrompt'>
        
    //     <div className='data'>
    //       {/* <FaCaretRight /> */}
    //       <span className='headingTitle'>Prompt to User - </span>
    //       <input type='text' style={{'borderRadius':'5px', 'borderBottom':'2px solid black', 'marginLeft':'30px', 'width':'500px'}}/>
    //     </div>

    //     <div className='data'>
    //       {/* <FaCaretRight /> */}
    //       <span className='headingTitle'>Prompt to AI</span>
    //     </div>

    //     <div className='data'>
    //       {/* <FaCaretRight /> */}
    //       <span className='headingTitle'>Extracted Data</span>
    //       <div className='subData'>
    //         <span className='subHeadingTitle'>Start Date  </span>
    //         <input type='date' className='analysisByDateRangeFilter' id='endDateFilter' value='2024-01-01' />
    //       </div>
    //       <div className='subData'>
    //         <span className='subHeadingTitle'>End Date  </span>
    //         <input type='date' className='analysisByDateRangeFilter' id='endDateFilter' value='2024-01-05' />
    //       </div>
    //       <div className='subData'>
    //         <span className='subHeadingTitle'>First Name  </span>
    //         <input type='text' className='analysisByDateRangeFilter' id='endDateFilter' value='John' />
    //       </div>
    //       <div className='subData'>
    //         <span className='subHeadingTitle'>Last Name  </span>
    //         <input type='type' className='analysisByDateRangeFilter' id='endDateFilter' value='Cena' />
    //       </div>
    //     </div>

    //     <div className='data'>
    //       <FaCaretRight />
    //       <span className='headingTitle'>Methods</span>
    //     </div>
    //   </div>
    // </div>
  )
}
