import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {useAction} from "../hooks/useAction";

const UserList: FC = () => {
    const {error, loading, users} = useTypedSelector(state => state.user);
    // const dispatch=useDispatch();
    const {fetchUsers} = useAction();

    useEffect(() => {
        // dispatch(fetchUsers())
        fetchUsers();

    }, []);

    if (loading) {
        return <h1>...going loading</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }


    return (
        <div>
            {users.map(user => (
                <div style={{textAlign: "center"}}
                     key={user.id}>{user.name} -- {user.email}</div>
            ))}
        </div>
    );
};

export default UserList;