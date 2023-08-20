import React,{useState} from 'react'
import {ComButton} from '../utils/ComButton'
import {LOGIN_URL,SIGNUP_URL} from '../config/Config'

//나중에 login 데이터로 들어가는 거 처리 필요
export const LoginForm = ({data}:any)=>{
    const {title, text, url} = data;
    
    const [signUp,setSignUp] = useState({
        email : '',
        pw : '',
        name : ''
    });

    const [login, setLogin] = useState({
        email:'',
        pw:''
    });

    const onChangeHandler = (event : React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target;
        if(title === "회원가입"){
            setSignUp({
                ...signUp,
                [name]:value
            })
        }
        else{
            setLogin({
                ...login,
                [name]:value
            })
        }   
    }
    
    return(
        <div className="User">
            <h1 className = "logo">MecenatPolis</h1>
            <p className="title">{title}</p>
            <form> 
                <p> 이메일 <input type="text" name="email" placeholder="이메일" onChange={onChangeHandler}/></p>
                <p> 암호 <input type="text" name="pw" placeholder="암호" onChange={onChangeHandler}/></p>
                {title==="회원가입" && <p> 이름 <input type="text" name="name" placeholder="이름" onChange={onChangeHandler}/></p>}
                {title==="회원가입" && <ComButton data={signUp} url={SIGNUP_URL} name = "회원가입"/>}
                {title==="로그인" && <ComButton data={login} url={LOGIN_URL} name="로그인"/>}
            </form>
        </div>
    );
};
