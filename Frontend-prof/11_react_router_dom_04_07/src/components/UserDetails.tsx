import React, { FC } from 'react'
import { IUserDetails } from './UserList'

const UserDetails: FC<IUserDetails> = ({
  name: userName,
  company: { name: companyName },
  username,
  phone,
  email,
  address: {
    street,
    suite,
    city,
    zipcode,
  },
  website,

}) => {





  return (
    <div className="mt-4">
      <h1>{userName}</h1>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <ul>
        <li>Address:</li>
        <li><strong>City</strong>{city}</li>
        <li><strong>Street</strong>{street}</li>
        <li><strong>Suite</strong>{suite}</li>
        <li><strong>Zipcode</strong>{zipcode}</li>

      </ul>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> {website}</p>
      <p><strong>Company:</strong> {companyName}</p>
      <button>Close</button>
    </div>


  )
}

export default UserDetails;