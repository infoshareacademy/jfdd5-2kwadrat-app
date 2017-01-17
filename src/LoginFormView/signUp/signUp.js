import React from 'react'


export default (props) => {
  const login = document.getElementById('loginField').value
  const password = document.getElementById('passwordField').value
  const password2 = document.getElementById('passwordCheck').value
  return (
    <div>
      {
        password === password2 ?
          (
            <div>
              {
                fetch('http://localhost:3001/api/users',
                  {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      username: login,
                      password: password,
                      emailVerified: true,
                      email: login+ '@.pl'
                    })
                  }).then(
                  document.getElementById('passwordCheck').value = '',
                  document.getElementById('passwordField').value = '',
                  document.getElementById('loginField').value = '',
                  document.getElementById('signUpInfo').innerHTML =
                    '<p>Logowanie przebiegło pomyślnie.<br/> Mżesz się zalogować</p>'
                )
              }
            </div>
          )
          : (
            document.getElementById('passwordCheck').value = '',
            document.getElementById('passwordCheck').style.border = "red solid 2px",
            document.getElementById('passwordField').value = '',
            document.getElementById('passwordField').style.border = "red solid 2px",
            document.getElementById('signUpInfo').innerHTML =
              ('<p>Hasła są niezgodne<br/>Spróbuj jeszcze raz UWAŻNIE.</p>')
        )
      }
    </div>
  )
}