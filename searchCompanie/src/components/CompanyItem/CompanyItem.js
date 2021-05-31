

function CompanyItem(props){

    let {company} = props
    let isMark = (company.is_fav == 'True') || typeof company.is_fav === 'undefined'
    let markClass =  isMark ? 'fas' : 'far'
    // console.log(company);
    return (
        <div className="card mb-4 shadow-sm">
            <div className="card-header d-flex justify-content-between">
                <h4 className="my-0 font-weight-normal">{company.name}</h4>
                <i class={markClass + " fa-heart"}></i>
            </div>
            <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{company.email}</li>
                    <li>{company.address}</li>
                    <li>{company.phone}</li>
                    <li>{company.website}</li>
                </ul>
                {
                    isMark
                    ? <button type="button" className="btn btn-lg btn-block btn-outline-primary" onClick={() => props.unMarkCompany(company.id)}>Remove from Favorite</button>
                    : <button type="button" className="btn btn-lg btn-block btn-outline-primary" onClick={() => props.markCompany(company.id)}>Add to Favorite</button>
                }
                
            </div>
        </div>
    )
}

export default CompanyItem