const anual = document.querySelector('#anual');
const mensual = document.querySelector('#mensual');
const gastosTitle = document.querySelector('.gastosTitle');
const ingresosTitle = document.querySelector('.ingresosTitle');


var ctx = document.getElementById('ingresosChart').getContext('2d');
var ingresosChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Ingresos',
            backgroundColor: 'rgb(0, 99, 132)',
            borderColor: 'rgb(0, 99, 132)',
            data: [70, 45, 100, 80, 40, 95]
        }]
    },
    
    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('gastosChart').getContext('2d');
var gastosChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    
    // The data for our dataset
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Gastos',
            backgroundColor: 'rgb(150, 99, 132)',
            borderColor: 'rgb(150, 99, 132)',
            data: [50, 35, 75, 65, 80, 90]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('versusChart').getContext('2d');
var versusChart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Ingresos',
            borderColor: 'rgb(0, 99, 132)',
            data: [70, 45, 100, 80, 40, 95]
        },{
            label: 'Gastos',
            borderColor: 'rgb(150, 99, 132)',
            data: [50, 35, 75, 65, 80, 90]
        }]
    },
    
    // Configuration options go here
    options: {}
});

mensual.addEventListener('click', () => {
    ingresosChart.data.labels = ['Enero', 'Marzo', 'Mayo', 'Julio', 'Septiembe', 'Noviembre'];
    ingresosChart.data.datasets[0].data = [75, 60, 15, 55, 65, 100];
    ingresosChart.update();
    
    gastosChart.data.labels = ['Enero', 'Marzo', 'Mayo', 'Julio', 'Septiembe', 'Noviembre'];
    gastosChart.data.datasets[0].data = [35, 40, 70, 40, 75, 90];
    gastosChart.update();

    versusChart.data.labels = ['Enero', 'Marzo', 'Mayo', 'Julio', 'Septiembe', 'Noviembre'];
    versusChart.data.datasets[0].data = [75, 60, 15, 55, 65, 100];
    versusChart.data.datasets[1].data = [35, 40, 70, 40, 75, 90];
    versusChart.update();

    ingresosTitle.textContent = "Ingresos Mensuales" 
    gastosTitle.textContent = "Gastos Mensuales" 
    
})

anual.addEventListener('click', () => {
    ingresosChart.data.labels = ['2015', '2016', '2017', '2018', '2019', '2020'];
    ingresosChart.data.datasets[0].data = [70, 45, 100, 80, 40, 95];
    ingresosChart.update();
    
    gastosChart.data.labels = ['2015', '2016', '2017', '2018', '2019', '2020'];
    gastosChart.data.datasets[0].data = [50, 35, 75, 65, 80, 90];
    gastosChart.update();
    
    versusChart.data.labels = ['2015', '2016', '2017', '2018', '2019', '2020'];
    versusChart.data.datasets[0].data = [70, 45, 100, 80, 40, 95];
    versusChart.data.datasets[1].data = [50, 35, 75, 65, 80, 90];
    versusChart.update();

    ingresosTitle.textContent = "Ingresos Anuales" 
    gastosTitle.textContent = "Gastos Anuales" 
})