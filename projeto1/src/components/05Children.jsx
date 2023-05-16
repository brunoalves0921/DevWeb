import {Children, cloneElement} from 'react';

//v0
// const Supermercado = ({children, nome}) => {
//     return (
//         <div>
//             <h1>Supermercado {nome}</h1>
//             {children}
//         </div>
        
//     )
// }

//v1
// const Supermercado = ({children, nome}) => {
//     return (
//         <div>
//             <h1>Supermercado {nome}</h1>{
//                 Children.map(children, 
//                     (filho) => {
//                         return (
//                             <div style={{backgroundColor: "red"}}>
//                                 {filho}
//                             </div>
//                         )
//                     }
//                 )
//             }
//         </div>  
//     )
// }

//v2
const Supermercado = ({children, nome}) => {
    return (
        <div>
            <h1>Supermercado {nome}</h1>{
                Children.map(children, 
                    (filho) => {
                        return cloneElement(filho, {Supermercado: nome})
                    }
                )
            }
        </div>  
    )
}

const Legume = ({nome, Supermercado}) => {
    return (
        <div>
            <h1>Legume: {nome} do Supermercado {Supermercado}</h1>
        </div>
    )
}

const Bebiba = ({nome, Supermercado}) => {
    return (
        <div>
            <h1>Bebida: {nome} do Supermercado {Supermercado}</h1>
        </div>
    )
}

export {Supermercado, Legume, Bebiba};