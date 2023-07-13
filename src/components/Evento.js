function Evento({numero}){

    function meuEvento(){
        console.log(`ativado numero = ${numero}`)
    }

    return (
        <div>
            <p>Clique para ativar evento!</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento