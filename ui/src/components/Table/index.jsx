import { useState } from 'react';
import './Table.scss';
import { usePagedPokemon } from '../../hooks/use-paged-pokemon';
import PageLoader from '../PageLoader';
import TableRow from './TableRow';
import { CgPokemon } from 'react-icons/cg';
import {GrPrevious ,GrNext} from 'react-icons/gr';
import PageElement from './PageElement';

const ValuesPerPage = [10,20,30];


const Table = ()=>{


    const [page , setPage] = useState(0);
    const [tableElements , setTableElements] = useState(ValuesPerPage[0]);

    const {isLoading , pokeList} = usePagedPokemon(page , tableElements);


    return (
        <div className="tbl-wrapper">
            <h1>Poke Show</h1>
            <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                            <th><CgPokemon/></th>
                            <th>Name</th>
                            <th>Generation</th>
                            <th>Pokedex Number</th>
                            <th>Base Stats</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                        {!isLoading 
                        && 
                        pokeList
                            .content
                            .map( 
                                pokemon => <TableRow key={pokemon.pokedexNumber} pokemon={pokemon} /> 
                            )
                        }
                    </tbody>
                </table>
                {isLoading && <PageLoader/>}
            </div>

            <div className="tbl-footer">

                <div className="pagination">
                    {!pokeList?.first  && <span onClick={()=>setPage(0)}><GrPrevious/></span>}
                    {!pokeList?.first  && <PageElement pageNum={page} setPage={()=>setPage(prev=>prev-1)} />}
                    <PageElement pageNum={page +1} isCurrentPage={true}/>
                    {!pokeList?.last && <PageElement pageNum={page +2} setPage={()=>setPage(prev=>prev+1)} />}
                    {!pokeList?.last && <span onClick={()=>setPage(pokeList.totalPages -1)}><GrNext/></span>}
                </div>

                <div className="selectdiv">
                    <label>
                        <select 
                            value={tableElements}
                            onChange={(e)=>{
                                setPage(0);
                                setTableElements(e.target.value);
                            }}
                        >
                            {ValuesPerPage.map(records =><option key={records} value={records} >◓ {records}</option>)}
                        </select>
                    </label>
                </div>

            </div>


        </div>


    )
}

export default Table;