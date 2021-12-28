import './NavBar.scss';
import { GiPokecog } from 'react-icons/gi';
import { SearchBar } from '../SearchBar';
import { useHistory } from 'react-router-dom';

export const NavBar = ()=>{

    let history = useHistory();

    return(
        <div className='nav'>
            <div className='nav-logo' onClick={()=>history.push('/')}>
                <GiPokecog/> 
                <span className='app-name'>PokeShow</span>
            </div>
            <SearchBar/>
        </div>
    )
}