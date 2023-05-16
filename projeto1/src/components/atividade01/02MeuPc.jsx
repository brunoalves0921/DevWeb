const PlacaMae = ({nome, preco,}) => {
    return (
        <div>
            <h1>Placa Mae: {nome}</h1>
            <h1>Preco: {preco}</h1>
        </div>
    );
}

const Memorias = ({nome, preco,}) => {
    return (
        <div>
            <h1>Memorias: {nome}</h1>
            <h1>Preco: {preco}</h1>
        </div>
    );
}

const PlacaDeVideo = ({nome, preco,}) => {
    return (
        <div>
            <h1>Placa de Video: {nome}</h1>
            <h1>Preco: {preco}</h1>
        </div>
    );
}

export {PlacaMae, Memorias, PlacaDeVideo}