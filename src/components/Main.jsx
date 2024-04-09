import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Red from './Red'
import Blue from './Blue'
import Mountain from './Mountain'
import Ocean from './Ocean'

export default function Main () {
    return (
        <>
            <div id="main-section">
                <Routes>
                    <Route path='/blue' element={<Blue />}/>
                    <Route path='/red' element={<Red />}/>
                    <Route path='/' element={<Home />}/>
                    <Route path='/mountain' element={<Mountain />} />
                    <Route path='/ocean' element={<Ocean />} />
                </Routes>
            </div>
        </>
    )
}