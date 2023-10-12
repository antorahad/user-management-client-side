const Form = () => {
    const handleAddUser = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email};
        console.log(user);
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'content-type'  : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data));
        form.reset()
    }
    return (
        <div>
            <form onSubmit={handleAddUser}>
            <input type="text" name="name" placeholder="User Name"/>
            <br />
            <input type="email" name="email" placeholder="User Email"/>
            <br />
            <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default Form;