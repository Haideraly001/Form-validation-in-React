import React from 'react'
import { useParams } from 'react-router-dom'

const UserProfiles = () => {
  const { id } = useParams()

  console.log(id);

  return (
    <div>
      <h5>User Profiles</h5>
    </div>
  )
}

export default UserProfiles
