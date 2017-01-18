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
                                            email: "'" + login + '@wp.pl',
                                            password: password

                                        })
                                    }).then(
                                    response => {
                                        if (response.status == '422') {
                                            document.getElementById('passwordCheck').value = '',
                                                document.getElementById('passwordCheck').style.border = "red solid 2px"
                                            document.getElementById('passwordField').value = '',
                                                document.getElementById('passwordField').style.border = "red solid 2px"
                                            document.getElementById('signUpFail').innerHTML =
                                                ('<p>Spróbuj Ponownie. Coś poszło nie tak</p>')
                                            console.log("nie udalo sie zarejestrowac uzytkownika")
                                        }
                                        else {
                                            console.log('udalo sie')
                                            document.getElementById('passwordCheck').value = ''
                                            document.getElementById('passwordField').value = ''
                                            document.getElementById('loginField').value = ''
                                            document.getElementById('signUpFail').innerHTML = ''
                                            document.getElementById('signUpOk').innerHTML =
                                                '<p>Logowanie przebiegło pomyślnie. Mżesz się zalogować</p>'
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