import './NavBar.scss';
import { GiPokecog } from 'react-icons/gi';

export const NavBar = ()=>{
    return(
        <div className='nav'>
            <div className='nav-logo'>
                <GiPokecog/> 
                <span className='app-name'>PokeShow</span>
            </div>
        </div>
    )
}