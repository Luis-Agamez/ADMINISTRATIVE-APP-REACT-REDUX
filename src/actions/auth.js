import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { facebookAuthProvider, githubAuthProvider, googleAuthProvider } from "../firebase/firabaseConfig";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('auth', { email, password }, 'POST');


        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({ uid: body.uid, name: body.name }));
        } else {

            Swal.alert('Error', body.msg, 'error')
        }



    }
}


export const startRegister = (email, password, name) => {

    return async (dispatch) => {
        const resp = await fetchSinToken('auth/new', { email, password, name }, 'POST');

        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({ uid: body.uid, name: body.name }))
        }
        else {
            Swal.fire('Error', body.msg, 'error')
        }


    };



}


export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                console.log(user);
            })
    }
}

export const startFacebookLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, facebookAuthProvider)
            .then(({ user }) => {
                console.log(user);
            })
    }
}

export const startGithubLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, githubAuthProvider)
            .then(({ user }) => {
                console.log(user);
            })
    }
}




export const startCheking = () => {
    return async (dispatch) => {
        const resp = await fetchConToken('auth/renew');


        const body = await resp.json();

        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(login({ uid: body.id, name: body.name }));
        } else {
            dispatch(chekingFinish());
        }

    }
}


const chekingFinish = () => ({
    type: types.authCheckingFinish
})

export const login = (user) => ({
    type: types.authLogin,
    payload: user
});

export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch(logout());
    }
}

export const startLogoutFirabase = () => {
    return async (dispatch) => {
        const auth = getAuth();
        await signOut(auth);
        dispatch(logout());
    }
}



const logout = () => ({
    type: types.authLogout
})