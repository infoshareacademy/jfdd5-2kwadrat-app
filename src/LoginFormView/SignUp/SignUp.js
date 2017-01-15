import React from 'react'


export default (props) => {
  const login = document.getElementById('loginField').value
  const password = document.getElementById('passwordField').value
  const password2 = document.getElementById('passwordCheck').value
  return (
    <div>
      {
        password === password2 ?(<div>
          {
          fetch('https://stormy-beyond-32730.herokuapp.com/api/ourPeople',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                login: login,
                password: password
              })
            })
        }
        </div>)

          :
          document.getElementById('signUpInfo').innerHTML =
            'Hasła są niezgodne.\n\n Spróbuj jeszcze raz.'

      }

      {console.log('zupa', login + password + password2)}
    </div>
  )
}