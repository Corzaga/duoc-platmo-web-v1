// Datos de ejemplo para el gráfico
const ctx = document.getElementById('graficoTemp').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['08:00', '10:00', '12:00', '14:00', '16:00'],
    datasets: [{
      label: 'Temperatura °C',
      data: [18, 20, 23, 25, 22],
      borderColor: '#0077cc',
      backgroundColor: 'rgba(0,119,204,0.2)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  }
});
