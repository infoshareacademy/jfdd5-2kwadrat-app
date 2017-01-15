import React from 'react'


export default (props) =>{
  const login = document.getElementById('loginField').value
  const password = document.getElementById('passwordField').value
  const password2 = document.getElementById('passwordCheck').value
  return(
    <div>
      {
        password === password2 ?
      console.log('zgodne hasła') : console.error('hasła róznia się')
      }
      {console.log('zupa',login + password + password2)}
    </div>
  )
}