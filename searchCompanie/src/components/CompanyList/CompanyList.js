import CompanyItem from '../CompanyItem/CompanyItem'

function CompanyList(props){
    return (
        <div className="card-deck mb-3 text-center">
            {props.children }
            
        </div>
    )
}

export default CompanyList