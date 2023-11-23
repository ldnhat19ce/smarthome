'use strict';

function chartViewMonth(data, title, id) {
  const ctx = document.getElementById(id);
  let date = new Date();

  let months = [];
  for (let i = 0; i < getDaysInMonth(date.getFullYear(), date.getMonth() + 1); i++) {
    months.push(
      moment()
        .year(date.getFullYear())
        .month(date.getMonth() + 1)
        .date(i)
        .startOf('month')
    );
  }

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: months,
      datasets: [
        {
          label: title,
          data: data,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'day',
            displayFormats: {
              quarter: 'dd',
            },
          },
          autoSkip: false,
        },
        y: {
          min: 0,
          max: 120,
        },
      },
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: 'xy',
          },
        },
      },
    },
  });
}

function chartViewDay(data, title, id) {
  const ctx = document.getElementById(id);
  let date = new Date();

  let hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(moment().year(date.getFullYear()).month(date.getMonth()).date(date.getDate()).hour(i).minute(0).second(0));
  }

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: hours,
      datasets: [
        {
          label: title,
          data: data,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'hour',
            displayFormats: {
              quarter: 'HH',
            },
          },
          autoSkip: false,
        },
        y: {
          min: 0,
          max: 120,
        },
      },
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: 'xy',
          },
        },
      },
    },
  });
}

function chartViewHour(data, title, id) {
  const ctx = document.getElementById(id);
  let date = new Date();

  let minutes = [];
  for (let i = 0; i < 60; i++) {
    minutes.push(moment().year(date.getFullYear()).month(date.getMonth()).date(date.getDate()).hour(date.getHours()).minute(i).second(0));
  }

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: minutes,
      datasets: [
        {
          label: title,
          data: data,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'minute',
            displayFormats: {
              quarter: 'MM',
            },
          },
          autoSkip: false,
        },
        y: {
          min: 0,
          max: 120,
        },
      },
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: 'xy',
          },
        },
      },
    },
  });
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function doughnutHomeChart(data) {
  let value = data.value;
  let ctx = document.getElementById('doughnutHomeChart').getContext('2d');
  let chart = new Chart(ctx, {
    type: 'doughnut',
    plugins: [DoughnutLabel],
    data: {
      label: [data.deviceDTO.name],
      datasets: [
        {
          data: [value, 100 - value],
          backgroundColor: ['#00baa6', '#ededed'],
          label: data.deviceDTO.name,
        },
      ],
      labels: [data.deviceDTO.name],
    },
    options: {
      cutout: 88,
      aspectRatio: 1.4,
      responsive: true,
      animation: {
        animateScale: true,
        animateRotate: true,
      },
      plugins: {
        legend: {
          display: false,
          position: 'top',
        },
        title: {
          display: true,
          fontSize: 20,
          text: data.deviceDTO.name,
        },
        doughnutlabel: {
          color: '#bc2c1a',
          labels: [
            {
              text: value + '°C',
              font: {
                size: '60',
                family: 'Arial, Helvetica, sans-serif',
                style: 'italic',
                weight: 'bold',
              },
            },
          ],
        },
      },
    },
  });
}
