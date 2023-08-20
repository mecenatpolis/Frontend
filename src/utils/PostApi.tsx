import {reqApi} from './Interfaces';
import axios from 'axios';

export const PostApi = (prop:reqApi)=>{
    const {url, data} = prop;
    axios({
        method:"post",
        url: url,
        data: data,
        headers:{
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(function(response){
        console.log(response);
    })
}