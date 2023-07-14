import { useState } from "react"

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Cadastrou usuário ${name} Senha:${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input placeholder="Digite seu nome" id="name" name="name" type="text" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input placeholder="Digite sua senha" id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form