import {http} from './config'

export default{
    listarPeople:() =>{
        return   http.get('ext');
    }
}