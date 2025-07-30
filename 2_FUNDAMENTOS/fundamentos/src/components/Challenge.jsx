const Challenge = () => {
    let valor1 = 2;
    let valor2 = 3;

    const handleSum = () => {
        let soma;
        soma = valor1 + valor2
        return console.log("O resultado da soma é " + soma)
    };

    return (
        <div>
            <h1>Para realizar a soma dos dois valores clique em "Somar"</h1>
            <p>O primeiro valor é {valor1} e o segundo valor é {valor2}</p>
            <button onClick={handleSum}>Somar</button>
        </div>
    )
}

export default Challenge