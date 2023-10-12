const User = ({user}) => {
    const  {
        name,
        phone,
        address,
        email
    } = user;
    return (
        <div>
            <h1>{name}</h1>
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
        </div>
    );
};

export default User;