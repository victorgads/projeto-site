function mostrarDados() {
    fetch("/avisos/listar").then(function (resposta) {
        if (resposta.ok) {


            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));


                for (let i = 0; i < resposta.length; i++) {
                    lugar.innerHTML = resposta[i].l;
                    gastronomia.innerHTML = resposta[i].g;
                    praia.innerHTML = resposta[i].p;
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
}

function obterDadosGraficoLugares() {

    fetch(`/medidas/lugaresPreferidos/`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGraficoLugares(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

// Esta função *plotarGrafico* usa os dados capturados na função anterior para criar o gráfico
// Configura o gráfico (cores, tipo, etc), materializa-o na página e, 
// A função *plotarGrafico* também invoca a função *atualizarGrafico*
function plotarGraficoLugares(resposta) {
    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = ['Lugares Mais Visitados'];

    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: 'Marco Zero',
            data: [],
            fill: false,
            borderColor: '#ea422c',
            backgroundColor: '#ea422c',
            tension: 0.1
        },
        {
            label: 'Cais do Sertão',
            data: [],
            fill: false,
            borderColor: '#db4ce4',
            backgroundColor: '#db4ce4',
            tension: 0.1
        },
        {
            label: 'Sítio da Trindade',
            data: [],
            fill: false,
            borderColor: '#e47c2c',
            backgroundColor: '#e47c2c',
            
            tension: 0.1
        },
        {
            label: 'Coroa do Avião',
            data: [],
            fill: false,
            borderColor: '#7cbc44',
            backgroundColor: '#7cbc44',
            tension: 0.1
        },
        {
            label: 'Capela Dourada',
            data: [],
            fill: false,
            borderColor: '#fcec7c',
            backgroundColor: '#fcec7c',
            tension: 0.1
        }
        ,
        {
            label: 'Museu da Cidade de Recife',
            data: [],
            fill: false,
            borderColor: '#fcec7c',
            backgroundColor: '#fcec7c',
            tension: 0.1
        }
        ,
        {
            label: 'Praia de boa Viagem',
            data: [],
            fill: false,
            borderColor: '#fcec7c',
            backgroundColor: '#fcec7c',
            tension: 0.1
        }
        ,
        {
            label: 'Passeio de Catamarã',
            data: [],
            fill: false,
            borderColor: '#fcec7c',
            backgroundColor: '#fcec7c',
            tension: 0.1
        }
        ,
        {
            label: 'Centro Histórico',
            data: [],
            fill: false,
            borderColor: '#fcec7c',
            backgroundColor: '#fcec7c',
            tension: 0.1
        }
        ,
        {
            label: 'Piscinas Naturais',
            data: [],
            fill: false,
            borderColor: '#fcec7c',
            backgroundColor: '#fcec7c',
            tension: 0.1
        }]
    };


    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)

    // Inserindo valores recebidos em estrutura para plotar o gráfico
    for (i = 0; i < resposta.length; i++) {
        var nome = resposta[i];
        dados.datasets[0].data.push(nome.caisDoSertao);
        dados.datasets[1].data.push(nome.sitioTrindade);
        dados.datasets[2].data.push(nome.coroaDoAviao);
        dados.datasets[3].data.push(nome.capelaDourada);
        dados.datasets[4].data.push(nome.museuDoRecife);
        dados.datasets[5].data.push(nome.capelaDourada);
        dados.datasets[6].data.push(nome.praiaBoaViagem);
        dados.datasets[7].data.push(nome.passeioCatamara);
        dados.datasets[8].data.push(nome.centroHistorico);
        dados.datasets[9].data.push(nome.piscinasNaturais);

    }

    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados.datasets)
    console.log('----------------------------------------------')
  

    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'bar',
        data: dados,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };
    // Adicionando gráfico criado em div na tela
    const myChart = new Chart(
        document.getElementById('lugarPreferido'),
        config
    );

}
