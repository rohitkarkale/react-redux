import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from '../redux/actions/authAction'

function AuthComponent(props) {
    const auth = useSelector(state => state.auth)
    const dispatch=useDispatch()

  return (
    <div>
      <button className="btn btn-dark mt-3" onClick={()=> dispatch(login())}>Login</button>
      <br></br>
      <button className="btn btn-danger mt-3" onClick={()=> dispatch(logout())}>Logout</button>
      <hr></hr>
      <p style={{fontFamily : "Cursive"}}>Login To see the special Benifits and Discounts...!</p>
      {/* <footer class="blockquote-footer" ><cite title="Source Title" style={{fontFamily : "Cursive"}}>Click on Login button</cite></footer> */}
      <hr></hr>
      {auth ? (
                <p style={{fontFamily : "Cursive"}}>Congratulations ...! you got 50% discount .. use 67UIPT to apply for</p>
            ) : (
              <img src="https://icons8.com/preloaders/preloaders/1484/Circles-menu-3.gif" alt="loading" className='text-center'/>
            )}
    </div>
   
  );
}

export default AuthComponent

