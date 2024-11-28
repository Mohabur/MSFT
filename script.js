// Include Chart.js library
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
document.head.appendChild(script);

// Wait for the library to load
script.onload = async function() {
  async function fetchData() {
    // Simulating live API data
    return { intrinsicValue: 300, currentSharePrice: 320 };
  }

  const data = await fetchData();

  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Intrinsic Value', 'Current Share Price'],
      datasets: [{
        label: 'MSFT Share Price Comparison',
        data: [data.intrinsicValue, data.currentSharePrice],
        backgroundColor: ['#4CAF50', '#FF6384'],
      }],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'MSFT Intrinsic Value vs Current Share Price',
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};