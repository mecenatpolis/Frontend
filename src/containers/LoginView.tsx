import {LoginForm} from '../components/LoginForm';
import { propView } from "../utils/Interfaces";

export const LoginView = ({view}:propView)=>{
    const LOGIN_DATA = {
        title : '로그인',
        text : '계정이 없으신가요? 가입하기',
        url : '/sign-up'
    }
    
    const SIGNUP_DATA={
        title : '회원가입',
        text : '계정이 이미 있으신가요? 로그인하기',
        url : '/login'
    }

    let page = <LoginForm data = {LOGIN_DATA}/>;
    if(view === "회원가입"){
        page = <LoginForm data = {SIGNUP_DATA}/>
    }   
    return (
        <div>
            {page}
        </div>
    );
}

export default LoginView;






