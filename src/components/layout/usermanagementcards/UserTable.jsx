import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserTableItem from './UserTableItem';

function UserTable() {
    const [cards, setCards] = useState([])
    useEffect(() => {
        const fetchCards = async () => {
            try {
                const res = await axios.get("http://localhost:8000/employs");
                setCards(res.data)
                console.log(res.data.length);



            }
            catch (e) {
                console.error(e)
            }
        };
        fetchCards()
    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th className='thead'>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {cards.map((item) => (

                            <UserTableItem  key={item.id}
                                item={item}
                            />

                        ))}

                    
                </tbody>



            </table>


        </>


    )
}

export default UserTable