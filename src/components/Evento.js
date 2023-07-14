import Button from "./evento/Button"

function Evento(){

    function meuEvento(){
        console.log(`ativado`)
    }

    function segundoEvento(){
        console.log('Ativando segundo evento')
    }

    return (
        <div>
            <p>Clique para ativar evento!</p>
            <Button event={meuEvento} text="primeiro evento"/>
            <Button event={segundoEvento} text="segundo evento"/>
        </div>
    )
}

export default Evento