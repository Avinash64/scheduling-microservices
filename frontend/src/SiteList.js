import React, {useEffect, useState} from 'react'
import "./PeopleList.css"

function SiteList() {
    const [people,setPeople] = useState([])

    const check = async () => {
        const response = await fetch('http://127.0.0.1:8001');

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

export default SiteList