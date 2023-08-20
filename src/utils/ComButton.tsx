import {PostApi} from './PostApi'
import { btnPostData } from './Interfaces'

export const ComButton=(prop:btnPostData)=>{
    const {url, data, name} = prop;
    const onClickHandler=(event:React.MouseEvent)=>{
        event.preventDefault();
        PostApi({
            url:url,
            data:data
        });
    }
    
    return(
        <div>
            <button type="submit" onClick={onClickHandler}>{name}</button>
        </div>
    );
} 