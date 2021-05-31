import CompanyList from '../../components/CompanyList/CompanyList'
import useToken from '../../utils/userToken';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../../actions/index'
import { useEffect,useState } from 'react';
import CompanyItem from '../../components/CompanyItem/CompanyItem'
import callAPI from '../../utils/apiCaller'


function FavoriteCompanyPage(props) {

    const { token, setToken } = useToken();
    const [search, setSearch] = useState();
    
    let history = useHistory();
    if(!token) {
        history.push('/login')
    }

    useEffect(() => {
        props.getFavoriteCompany()
    },[])

    function showCompanyList(){
        let companies = props.companies
        let result = null
        // console.log(companies);
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
        props.getFavoriteCompany()
    }

    function unMarkCompany(id){
        callAPI('favorite-companies/'+id+'/','DELETE',null).then(res => {
            props.getFavoriteCompany()
        }).catch(err => { console.log(err); })
    }


    return (
        <div>
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
        getFavoriteCompany : () => {
            dispatch(actions.getFavoriteCompany())
        },
        markCompany : (id) => {
            dispatch(actions.markCompany(id))
        },
        unMarkCompany : (id) => {
            dispatch(actions.unMarkCompany(id))
        }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(FavoriteCompanyPage);
