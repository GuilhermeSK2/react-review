const TemplateExpression = () => {

    const name = "Guilherme";

    // Object Literal (Parecido com array chave e valor de outras linguagens)
    const data = {
        age: 20,
        job: "Programador",
    };

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>Você tem {data.age} anos</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
};

export default TemplateExpression;