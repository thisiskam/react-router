import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <>
            <div className="navbar">
                <div className="nav-img"></div>
                <div className="links">
                    <Link to='/' className='button'>Home</Link>
                    <Link to='/blue' className='button'>Blue</Link>
                    <Link to='/red' className='button'>Red</Link>
                    <Link to='/mountain' className='button'>Mountain</Link>
                    <Link to='/ocean' className='button'>Ocean</Link>
                </div>
            </div>
        </>
    )
}