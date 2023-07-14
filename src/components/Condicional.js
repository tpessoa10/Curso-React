import {useState} from 'react'

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log('testando')
    }

    function limparEmail(){
        setUserEmail('')
    }

    return (
        <div>
            <h1>Cadastre seu email: </h1>
            <input type='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)}></input>
            <button type='submit' onClick={enviarEmail}>Enviar e-mail</button>
            {userEmail && (<div>
                <p>Email do usuário é:{userEmail}</p>
                <button onClick={limparEmail}>Limpar e-mail</button>
                </div>)}
        </div>
    )
}

export default Condicional