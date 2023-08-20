import axios from 'axios';
import React,{Component} from 'react';


//예시
interface ApiProps{
    url:string,
    data:string
}

class PostForm extends Component{
    //연습
    constructor(props:ApiProps){
        super(props)
        this.state={
            data:''
        }
    }


    changeHandler = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        this.setState({data : event.target.value});
    }

    submitTCodeHandler = (event:React.MouseEvent)=>{
        event.preventDefault();
        axios({
            method:"post",
            url:'http://localhost:8080/mecenatpolis/form',
            data:this.state,
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
                'Accept': '*/*',
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin':'http://localhost:8080',
                'Access-Control-Allow-Credentials':'true'
            }
        }).then(function(response){
            console.log(response);
        })
    }

    render(){
        return (
            <form>
                <div>
                    <textarea name="code" defaultValue="write Terraform Code" cols={200} rows={50}  onChange={this.changeHandler}/>
                </div>
                <div>
                    <button onClick={this.submitTCodeHandler}>제출</button>
                </div>
            </form>
        )
    }

}

export default PostForm;