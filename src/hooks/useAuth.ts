import {useSelector} from 'react-redux'
import { TypeRootState } from 'store/store';

export function useAuth(){
    const {email, token, id} = useSelector((state:TypeRootState) => state.user);

    return{
        isAuth:!!email,
        email,  
        token,
        id
    }
}