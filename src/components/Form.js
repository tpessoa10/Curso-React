function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Cadastrou usuário`)
    }

    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input placeholder="Digite seu nome" type="text"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form