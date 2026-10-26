import { useNavigate } from "react-router-dom";

const Header = () => {
    const isLogin = localStorage.getItem("isLogin") === "true";
    const navigate = useNavigate();
    const handlelogout = () => {
        localStorage.removeItem("isLogin");
        navigate("/");
    }    

    return(
        <header>
        <h1>GYM</h1>
        <nav>
            <a href="/">Home</a>
            {
                isLogin ? (
                    <button onClick={handlelogout}>Cerrar Sesion</button>
                ) : (
                    <a href="/login">Login</a>
                )
            }
            <a href="/activities">Actividades</a>
        </nav>
        </header>
    )
}

export default Header;