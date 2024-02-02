import React, { useState } from 'react'

export default function HomePage() {
     const props = ["name", "email", "tel", "address", "icon"];
     const opts = { multiple: true };
     const [contact, setContact] = useState([])
     let contactStr = '' 

     async function getContacts() {
          console.log('clicked');
          contactStr = ''
          setMultipleContact('')
          try {
               const contacts = await navigator.contacts.select(props, opts);
               setContact(contacts);
          } catch (ex) {
               // Handle any errors here.
          }
     }

     return (
     <div>
          <h3>Click below to refer </h3>
          <button onClick={getContacts} style={{'padding':'5px 15px', 'borderRadius':'5px', 'fontSize':'16px', 'color':'white', 'backgroundColor':'blue', 'border':'none'}}>Click</button>
          <table style={{'border':'1 px solid black'}}>
          {
                 
               contact.map((ele,index)=>{
                    if(index === 0){
                         contactStr+=ele.tel
                    }
                    else{
                         contactStr+=','
                         contactStr+=ele.tel
                    }
                    return <tr>
                              <td style={{'border':'1px solid black', 'padding':'5px 12px'}}>{ele.name}</td> 
                              <td style={{'border':'1px solid black', 'padding':'5px 12px'}}>{ele.tel}</td>
                              <td style={{'border':'1px solid black', 'padding':'5px 12px'}}>
                                   <a href={`sms:${ele.tel}?body=Hey!%20This%20message%20is%20to%20tell%20you%20about%20TrueCoverage`}>Send SMS</a>
                              </td>
                         </tr>
               })
          }
          </table>
          <br/>
          { 
               contactStr?
               <a href={`sms:${contactStr}?body=Hey!%20This%20message%20is%20to%20tell%20you%20about%20TrueCoverage`}>Send SMS to All</a>
               :<></>
          }

     </div>
     )
}
