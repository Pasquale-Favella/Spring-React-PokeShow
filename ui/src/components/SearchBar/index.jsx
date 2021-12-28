import { useRef, useState } from 'react';
import './SearchBar.scss';

import { FiSearch } from 'react-icons/fi';
import { GiPokecog } from 'react-icons/gi';
import { usePokemonSuggest } from '../../hooks/use-pokemon-suggest';
import { Suggestion } from './Suggestions';
import { useClickOutside } from '../../hooks/use-click-outside';
import { useHistory } from 'react-router-dom';


export const SearchBar = ()=>{

    const [term , setTerm] = useState('');
    const [showSuggestions,setShowSuggestions] = useState(false);
    const searchRef = useRef();
    useClickOutside(searchRef, () => setShowSuggestions(false));

    const { isLoading, suggestions } = usePokemonSuggest(term);

    let history = useHistory();

    const handleChange = ({target : {value}})=>{
        setTerm(value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log('term submitted',term);
        history.push(`/pokemon/${encodeURIComponent(term)}`);
    }

   
    return(
        <div className="searchbox" ref={searchRef}>
            <div className="container">
                <span className="icon" style={isLoading ? { animation :`imgLoading 1s ease-in-out infinite`  } : {}}>
                    {isLoading ? <GiPokecog/> : <FiSearch/>}
                </span>
                <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search Pokemon"
                    autoComplete="off"
                    value={term}
                    onChange={handleChange}
                    onClick={()=>setShowSuggestions(true)}
                    style={suggestions && showSuggestions ? { borderRadius :`5px 5px 0 0`  } : {}}
                />
                <button hidden type='submit'></button>
                </form>
            </div>
            {
                showSuggestions 
                && suggestions 
                && (
                    <ul className="search-suggestions">
                        {suggestions.map(pokemon => 
                                            <Suggestion
                                             key={pokemon.pokedexNumber}
                                             pokemon={pokemon}
                                             onSuggestClick={()=>setShowSuggestions(false)}
                                             />
                                        )
                        }
                    </ul>
                )
            }
            
        </div>
    )
}