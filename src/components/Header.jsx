import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/users'}>User</Link>
                <Link to={'/form'}>Form</Link>
            </nav>
        </div>
    );
};

export default Header;