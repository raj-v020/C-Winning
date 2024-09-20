document.addEventListener("DOMContentLoaded", function () {
  // Crop Growth Chart
  const ctxCropGrowth = document
    .getElementById("cropGrowthChart")
    .getContext("2d");
  const cropGrowthChart = new Chart(ctxCropGrowth, {
    type: "line",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Crop Growth",
          data: [20, 40, 60, 80],
          backgroundColor: "rgba(115, 149, 89, 0.2)", // #739559
          borderColor: "#739559", // #739559
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // Allow height to adjust based on width
      plugins: {
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (context) {
              return `${context.dataset.label}: ${context.raw}%`;
            },
          },
        },
      },
    },
  });

  // Soil Health Chart
  const ctxSoilHealth = document
    .getElementById("soilHealthChart")
    .getContext("2d");
  const soilHealthChart = new Chart(ctxSoilHealth, {
    type: "bar",
    data: {
      labels: ["Nitrogen", "Phosphorus", "Potassium"],
      datasets: [
        {
          label: "Soil Health",
          data: [70, 50, 60],
          backgroundColor: [
            "rgba(149, 191, 115, 0.2)", // #94bf73
            "rgba(83, 106, 64, 0.2)", // #526a40
            "rgba(49, 64, 38, 0.2)", // #314026
          ],
          borderColor: [
            "#94bf73", // #94bf73
            "#526a40", // #526a40
            "#314026", // #314026
          ],
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // Allow height to adjust based on width
      plugins: {
        tooltip: {
          enabled: true,
        },
      },
    },
  });

  // Environmental Data Chart
  const ctxEnvironmentalData = document
    .getElementById("environmentalDataChart")
    .getContext("2d");
  const environmentalDataChart = new Chart(ctxEnvironmentalData, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Temperature (°C)",
          data: [10, 15, 12, 18, 22, 20],
          backgroundColor: "rgba(181, 234, 140, 0.2)", // #b5ea8c
          borderColor: "#b5ea8c", // #b5ea8c
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // Allow height to adjust based on width
      plugins: {
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (context) {
              return `${context.dataset.label}: ${context.raw} °C`;
            },
          },
        },
      },
    },
  });
});
