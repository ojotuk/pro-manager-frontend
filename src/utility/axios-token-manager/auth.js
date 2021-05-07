import api, { setToken } from './init'
import { getDecodedToken } from './token'

// Sends a POST request to /auth/sign-up on the server, with first name, last name, email & password registering the user and returning the JWT
export async function signUpCompany(inputs) {
  const response = await api.post('/auth/signup', {...inputs});
  const token = response.data.token;
  // console.log(token)
  if(token){
    setToken(token)
      return getDecodedToken()
  }else{
    return null
  }
}

// Sends a POST request to /auth on the server, with the email & password returning the JWT
// Belonging to the user with supplied credentials
export async function signInCompany({ companyEmail, password }) {
  const data = {email:companyEmail,password:password}
  // console.log(data)
  return api.post('/auth/signin', data)
    .then(res => {
      const token = res.data.token
      // console.log(token)
      setToken(token)
      return getDecodedToken()
    })
    .catch(res => {
      if (res.response.status === 400 || res.response.status === 401) {
        // alert("There was an error with your email or password. Please try again.")
        return null
      }
    })
}
