fetch("http://localhost:3000/filmes")
    .then(response => response.json())
    .then(filmes => {

        const contagem = {};

        filmes.forEach(filme => {

            if (!contagem[filme.genero]) {

                contagem[filme.genero] = 0;
            }

            contagem[filme.genero]++;
        });

        const labels = Object.keys(contagem);

        const dados = Object.values(contagem);

        new Chart(
            document.getElementById("grafico"),
            {
                type: "pie",

                data: {

                    labels: labels,

                    datasets: [
                        {
                            data: dados
                        }
                    ]
                }
            }
        );
    });