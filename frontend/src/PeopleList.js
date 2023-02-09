import React, {useEffect, useState} from 'react'
import "./PeopleList.css"

function PeopleList() {
    const [people,setPeople] = useState([])

    const check = async () => {
        const response = await fetch('http://127.0.0.1:8000');

        setPeople(await response.json())

    }

    useEffect(() => {
        check()
    },  [])

  return (
    <div className='peopleList'>
        {people.map((data) => {
            return (
                <div>{JSON.stringify(data)}</div>
            )
        })}
        
    </div>
  )
}

export default PeopleList