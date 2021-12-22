import './PageElement.scss'

const PageElement = ({pageNum , setPage =()=>{}, isCurrentPage = false})=>{
    return (
        <div className="page-element" onClick={()=>setPage()}>
            {
                isCurrentPage ? 
                (<div className='pokeball'></div>) 
                : <span>{pageNum}</span>
            }
           
        </div>
    )
}

export default PageElement;