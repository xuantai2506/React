const Navbar = () => {
    return (
        <nav className="nav-bar">
            <div className="nav-logo">
                {/* <img src="{images}" alt="" /> */}
            </div>
            <div className="navbar-collapse">
                <ul className="nav">
                    <li className="nav-item">
                        <a href="" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">News</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar