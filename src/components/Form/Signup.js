import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import Form from './Form';
import {setUser} from '../../ducks/user';

const SignUp = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth)
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                push('/');
            })
            .catch(console.error)
    }

    return (
        <Form
            title="register"
            handleClick={handleRegister}
        />
    )
}

export default SignUp;