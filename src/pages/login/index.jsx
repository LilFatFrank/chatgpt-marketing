import { useNavigate } from 'react-router-dom'
import { Sprite } from '../../components'
import './login.scss'

const Login = () => {

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user
              console.log(user);
              auth.currentUser.getIdToken().then(token=>{
                  console.log("Token ",token)
                  axios.post("http://localhost:9000/api/v1/auth/signup",{"name":email.split("@")[0],"loginWithGoogle":false},{
                      headers:{
                          authorization :`Bearer ${token}`
                      }
                  }).then(res=>{
                      console.log(res.data)
                      navigate('/profile')
                  }).catch(err=>{
                      console.log("err ",err)
                  })
              }).catch(err=>{
                  console.log("error ",err)
              })
              // navigate("/login")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });
   
    }

    const handleSignInWithGoogle = async ()=>{
        const auth = getAuth();
       
        signInWithPopup(auth, provider)
          .then((result) => {
            
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log("USER ",user)
            console.log(user);
            auth.currentUser.getIdToken().then(token=>{
                console.log("Token ",token)
                axios.post("http://localhost:9000/api/v1/auth/login",{loginWithGoogle:true},{
                    headers:{
                        authorization :`Bearer ${token}`
                    }
                }).then(res=>{
                    console.log(res.data)
                    navigate('/profile')
                }).catch(err=>{
                    console.log("err ",err)
                })
            }).catch(err=>{
                console.log("error ",err)
            })
            navigate("/home")
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log("ERROR ",errorMessage)
            // ...
          });
        
    }

  return (
    <div className="page">
      <div className="login">
        <div className="top">
          <Sprite id={'close-overlay-icon'} width={40} height={40} />
          <div className="pill">
            <Sprite id={'login-pill-icon'} width={56} height={56} />
          </div>
        </div>
        <div className="login-form-area">
          <label className="title-label">Login or Signup</label>
          <button className="google-login" onClick={handleSignInWithGoogle}>
            <Sprite id={'google-icon'} width={24} height={24} />
            Continue with Google
          </button>
          <Sprite id="passthrough-login-divider-icon" width={370} height={14} />
          <form className="form" onSubmit={onSubmit}>
            <input
              placeholder="Enter your email"
              type={'email'}
              className="input"
            />
            <input
              placeholder="Enter your password"
              type={'password'}
              className="input"
            />
            <button className="submit-button" type='submit'>continue</button>
            <label className="label">
              by continuing, you agree to our{' '}
              <a
                style={{
                  color: 'var(--primary)',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                }}
              >
                terms of use
              </a>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
