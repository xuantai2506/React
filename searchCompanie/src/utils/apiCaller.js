import axios from 'axios'
import * as Config from '../constants/Config'
import {getToken} from './utils'

export default function callAPI(endpoint, method='GET', body){
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
        headers: {
            Authorization: 'Bearer ' + getToken()
        }
    })
}