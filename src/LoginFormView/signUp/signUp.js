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
                            document.getElementById('signUpFail').innerHTML = ''}
                          { document.getElementById('my-loader').style.display = "block"
                          }
                            {
                                fetch('https://salty-plateau-32425.herokuapp.com/api/users',
                                    {
                                        method: 'POST',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            username: login,
                                            email: "'" + login + '@wp.pl',
                                            password: password

                                        })
                                    }).then(
                                    response => {
                                        if (response.status === '422') {
                                            document.getElementById('passwordCheck').value = ''
                                                document.getElementById('passwordCheck').style.border = "red solid 2px"
                                            document.getElementById('passwordField').value = ''
                                                document.getElementById('passwordField').style.border = "red solid 2px"
                                            document.getElementById('signUpFail').innerHTML =
                                                ('<p>Login jest już zajęty. Może coś bardziej kreatywnego?</p>')
                                        }
                                        else {
                                            document.getElementById('passwordField').style.border = ""
                                            document.getElementById('passwordCheck').style.border = ""
                                            document.getElementById('passwordCheck').value = ''
                                            document.getElementById('passwordField').value = ''
                                            document.getElementById('loginField').value = ''
                                            document.getElementById('signUpFail').innerHTML = ''
                                          document.getElementById('my-loader').style.display = "none"
                                            document.getElementById('signUpOk').innerHTML =
                                                '<p>Super! Wszystko poszło okay! Teraz możesz się zalogować i cieszyć się funkcjonalnością!</p>'
                                            return response.json()
                                        }
                                    }
                                ).catch(
                                    error => console.log(error)
                                )
                            }
                        </div>
                    )
                    : <div>
                    {
                        function(){
                    document.getElementById('passwordCheck').value = ''
                    document.getElementById('passwordCheck').style.border = "red solid 2px"
                    document.getElementById('passwordField').value = ''
                    document.getElementById('passwordField').style.border = "red solid 2px"
                    document.getElementById('signUpFail').innerHTML =
                    ('<p>Hasła są niezgodne<br/>Spróbuj jeszcze raz UWAŻNIE.</p>')
                }()

                }</div>


            }
        </div>
    )
}