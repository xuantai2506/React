import CompanyList from '../../components/CompanyList/CompanyList'
import useToken from '../../utils/userToken';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../actions/index'
import { useEffect,useState } from 'react';
import CompanyItem from '../../components/CompanyItem/CompanyItem'


function SearchPage(props) {

    const { token, setToken } = useToken();
    const [search, setSearch] = useState();
    
    let history = useHistory();
    if(!token) {
        history.push('/login')
    }

    useEffect(() => {
        props.getAllCompany()
        console.log(props.companies);
    },[])

    function showCompanyList(){
        let companies = props.companies
        let result = null
        result = companies.map((company, index) => {
            return <CompanyItem 
                key={index}
                company={company}
                index={index}
                markCompany={markCompany}
                unMarkCompany={unMarkCompany}
            />
        })
        return result
    }

    function markCompany(id){
        props.markCompany(id)
    }

    function unMarkCompany(id){
        props.unMarkCompany(id)
    }

    function handleSubmit(e){
        e.preventDefault();
        props.getAllCompany(search)
    }

    return (
        <div>
            <form className="mb-4" onSubmit={handleSubmit}>
                <div class="form-group">
                    <label htmlFor="searchInput">Nhập từ khóa<i class="bi bi-alarm"></i></label>
                    <input type="text" class="form-control" id="searchInput" onChange={e => setSearch(e.target.value)}/>
                </div>
                <button type="submit" class="btn btn-primary">Tìm kiếm</button>
            </form>
            <CompanyList>
                {showCompanyList()}
            </CompanyList>
        </div>
        
    );
}

let mapStateToProps = (state) => {
    return {
      companies : state.companies
    }
  }
  
let mapDispatchToProps = (dispatch, props) => {
    return {
        getAllCompany : (search='') => {
            dispatch(actions.getAllCompany(search))
        },
        markCompany : (id) => {
            dispatch(actions.markCompany(id))
        },
        unMarkCompany : (id) => {
            dispatch(actions.unMarkCompany(id))
        }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(SearchPage);
