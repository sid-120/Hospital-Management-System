import React from 'react'

const Card = ({name,age,city,disease,status}) => {
  return (
    <>
    <div className="card-container">
        <div className='profile-photo'>
        <img src="https://th.bing.com/th/id/OIP.JpSI8TwsuDohNcTUOY_NiAHaHa?w=184&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="profile photo" />
      </div>

      <div className="patientDetailsContainer">
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>City: {city}</p>
        <p>Disease: {disease}</p>
        <p>Status: {status}</p>
      </div>
    </div>
      
    </>
  )
}

export default Card;
