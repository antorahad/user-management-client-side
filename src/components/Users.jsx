import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const allUsers = useLoaderData();
    return (
        <div>
            <h1>Total Users: {allUsers.length}</h1>
            {
                allUsers.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;