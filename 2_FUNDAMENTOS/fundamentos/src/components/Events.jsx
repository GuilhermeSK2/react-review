const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento!");
    };

    const notExist = true;

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>;
        } else {
            return <h1>Também posso renderizar isso!</h1>;
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou!")}>
                    Clique aquo também!
                </button>
                <button 
                onClick={() => {
                    if (notExist) {
                        console.log("Isso não deveria existir!");
                    }
                }}>Clica aqui, por favor.</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;