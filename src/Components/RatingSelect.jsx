import React, { useState } from 'react'

const RatingSelect = ({select}) => {
    const [selected, SetSelected] = useState(10)
    const handleChange = (event) => {
        SetSelected(+event.currentTarget.value)
        select(+event.currentTarget.value)
    }
  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect