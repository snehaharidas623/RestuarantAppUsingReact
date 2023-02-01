import React from 'react'
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';


function Review({reviewData}) {
    const [open, setOpen] = useState(false);

  return (
   <>
   <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {
            reviewData.map(data=>(
                <>
                    <h3>{data.name} {data.date}</h3>
                    <h6>{data.rating}</h6>
                    <h6>{data.comments}</h6>
                    </>
            ))
          }
        </div>
      </Collapse>
    </>
    
  )
}

export default Review