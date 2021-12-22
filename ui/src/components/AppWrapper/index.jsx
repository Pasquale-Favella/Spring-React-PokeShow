import './AppWrapper.scss';


export const AppWrapper = ({children})=>{


    return (
        <div className="wrapper-container">
            {children}
        </div>
    )
}