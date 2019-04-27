import React from 'react'

export default function List(props){
  return(
    <div>
      <ul className="holder">
        {/* {console.log(props)} */}
        <li 
          className="title"
          onClick={() => props.handleChange(props.index, props.currentIndex)}>
          {props.title}
        </li>
        {
          props.currentIndex === props.index &&
          props.lastOpen !== props.currentIndex && 
          <li className="content">{props.content}</li>
        }
      </ul>
    </div>
  )
}
