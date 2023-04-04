import { useEffect, useState } from 'react';
import axios from 'axios';
import UsersItem from '../UserItem/UserItem';
import UsersDetail from '../UserDetail/UserDetail';


    
const useFetch = () => {
    const [data, updateData] = useState(null);
    const requestUrl = 'https://reqres.in/api/users?page=2';
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(requestUrl);
            updateData(response.data)
        }
        fetchData();
    }, []);
    return data;
}

const UsersList = () => {
    const result = useFetch();
    const [user, changeUser] = useState(null);
    const showFullInfo = (id) => {
        const currentUser = result.data.filter(item => {
            return item.id == id
        }) 
        changeUser(currentUser[0])
    }
    return (
        <div className='usersList'>
            <ul>
                {
                    result && result.data.map(({first_name, last_name, id},index) => {
                        return (
                            <UsersItem 
                                key={index}
                                firstName={first_name}
                                lastName={last_name}
                                prepareData={()=>{showFullInfo(id)}}
                            />
                        )
                    })
                }
            </ul>
            {result && user ? <UsersDetail userInfo={user}/> : null}
        </div>
    )
}

export default UsersList;