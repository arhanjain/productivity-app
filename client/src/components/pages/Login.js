import React from 'react'

function Login({onLoggedIn}) {
  return (
    <div>
      <button onClick={() => {
        console.log(onLoggedIn)
        onLoggedIn(true)
      }}> Click </button>
    </div>
  )
}

export default Login