import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import IconPack from './IconPack'


const AccordionList = ({children , title ,defaultActive}) => {
    const [show , setShow] = useState(false)
    const handleAccording = ()=>{
        setShow(!show)
    }
  return (
    <>
         <Accordion defaultActiveKey={defaultActive && "0"} style={{padding : "10px"}} className='gclass-accoring'>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div className="accordion-button p-0 border-0 fs-5 gclass-text">{title}</div>
              <div>
               <IconPack icon={show ? "toparrow" : "downarrow"}/>
              </div>
            </Accordion.Header>
            <Accordion.Body onEnter={()=>{handleAccording()}} onExit={()=>{handleAccording()}}>
             {children}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </>
  )
}

export default AccordionList