import './PageLoader.scss'

const PageLoader = ()=>{
    return (
        <div
        className="loader"
        role="progressbar"
        aria-label="loading pokethings"
      >
        <div className="pokeball-container">
          <div className="pokeball"></div>
        </div>
      </div>
    )
}

export default PageLoader;