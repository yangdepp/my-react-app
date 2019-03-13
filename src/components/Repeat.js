import React from 'react'

export default function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div className='aaa'>{items}</div>
}


//  (index) => <div key={index}>This is item {index} in the list</div>