import React from 'react'
import UserCard from '../components/UserCard';
import data from '../utils/data';

function UserList() {
    
  return (
    <div>
        {data.map(({name , email , rollNo})=> 
            (
                <UserCard name = {name} email = {email} rollNo = {rollNo} />
                // <div>
                //     <h1>{name}</h1>
                //     <p>{email}</p>
                //     <p>{rollNo}</p>
                // </div>
            )
        )}
    </div>
  );
}

export default UserList;