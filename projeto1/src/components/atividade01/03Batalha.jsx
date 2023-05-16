
const Heroi = ({nome}) => {
    return (
        <div>
            <h1>Heroi: {nome}</h1>
            <img 
                src="http://www.pintarcolorear.org/wp-content/uploads/2015/09/bob-esponja.png" alt="Bob Esponja"
                style={{width: "200px", height: "200px"}}
            />
        </div>
    );
}

const Vilao = ({nome}) => {
    return (
        <div>
            <h1>Vilao: {nome}</h1>
        </div>
    );
}

const Arena = () => {
    return (
        <div>
            <Heroi nome="Bob Sponja"/>
            <Vilao nome="Rochele Rock"/>
        </div>
    );
}

const World = ({children}) => {
    return (
        <>
            {children}
        </>
    );
}

export {Heroi, Vilao, Arena, World};