//Importando componentes
import MyComponent from "./MyComponent";

// Arquivo de estilo

const FirstComponent = () => {
    // Essa função faz isso

    /* 
    Comentario multiline
    */

    return (
        <div className="first-component">
            {/* Algum Comentário */}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu Texto</p>
            <MyComponent/>
        </div>
    );

};

export default FirstComponent;