let keyframes = [
  {opacity: 0},
  {opacity: 1},
  {opacity: 0},
];

let options = {
  duration: 3000,
  easing: "ease-in",
  fill: "forwards"
};

let chick = 0;
async function ryoten() {
  ++chick 
  chick%2 == 1 ? statusTrue() : stausFalse()
  makeCanvas();
  document.querySelector(".text").animate(keyframes, options);
  document.body.style.pointerEvents = "none";
  await sleep(3000);
  document.body.style.pointerEvents = "auto";
}
const b_target = document.querySelector(".b_target");
const g = document.querySelector("#germany");
const c = document.querySelector("#canada");
const v = document.querySelector("#vietnam");
const i = document.querySelector("#india");

// sleep 함수를 만들어주기
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function statusTrue(){
    b_target.classList.add("sT");
    b_target.classList.remove("sF");
    b_target.innerHTML = '<span class="zen-old-mincho-regular">領域展開: ON</span>'
    g.onclick = function() {germany2()}
    c.onclick = function() {canada2()}
    v.onclick = function() {vietnam2()}
    i.onclick = function() {india2()}
}

function stausFalse() {
    b_target.classList.add("sF");
    b_target.classList.remove("sT");
    b_target.innerHTML = '<span class="zen-old-mincho-regular">領域展開: OFF</span>'
    g.onclick = function() {germany()}
    c.onclick = function() {canada()}
    v.onclick = function() {vietnam()}
    i.onclick = function() {india()}
} 

function germany2() {
  makeCanvas();

  d3.csv("csv/germany_pre.csv").then(data => {

      const points = data.map(d => ({
          x: +d["Unemployment Rate"],
          y: +d["kNN (1)"]/1000
      }));

      new Chart(document.getElementById('myChart1'), {
          type: 'scatter',
          data: {
              datasets: [{
                  pointRadius: 7,
                  label: '독일 예측 by kNN',
                  data: points,
                  pointHoverRadius: 12,
                  backgroundColor: '#333333',
                  showLine: false,
              }]
          },
          options: {
              pointRadius: 5,
              scales: {
                  x: {
                      type: 'linear',
                      title: {
                          display: true,
                          text: "Unemployment Rate (%)"
                      }
                  },
                  y: {
                      type: 'linear',
                      title: {
                          display: true,
                          text: "GDP (1T USD)"
                      }
                  }
              }
          }
      });
  });
}

function canada2() {
  makeCanvas();

  d3.csv("csv/canada_pre.csv").then(data => {

      const points = data.map(d => ({
          x: +d["Unemployment Rate"],
          y: +d["kNN (1)"]/1000
      }));

      new Chart(document.getElementById('myChart1'), {
          type: 'scatter',
          data: {
              datasets: [{
                  pointRadius: 7,
                  label: '캐나다 예측 by kNN',
                  data: points,
                  pointHoverRadius: 12,
                  backgroundColor: '#EA2439',
                  showLine: false,
              }]
          },
          options: {
              pointRadius: 5,
              scales: {
                  x: {
                      type: 'linear',
                      title: {
                          display: true,
                          text: "Unemployment Rate (%)"
                      }
                  },
                  y: {
                      type: 'linear',
                      title: {
                          display: true,
                          text: "GDP (1T USD)"
                      }
                  }
              }
          }
      });
  });
}

function vietnam2() {
  makeCanvas();

  d3.csv("csv/vietnam_pre.csv").then(data => {

      const points = data.map(d => ({
          x: +d["Unemployment Rate"],
          y: +d["kNN (1)"]/1000
      }));

      new Chart(document.getElementById('myChart1'), {
          type: 'scatter',
          data: {
              datasets: [{
                  pointRadius: 7,
                  label: '베트남 예측 by kNN',
                  data: points,
                  pointHoverRadius: 12,
                  backgroundColor: '#ffcd00',
                  showLine: false,
              }]
          },
          options: {
              pointRadius: 5,
              scales: {
                  x: {
                      type: 'linear',
                      title: {
                          display: true,
                          text: "Unemployment Rate (%)"
                      }
                  },
                  y: {
                      type: 'linear',
                      title: {
                          display: true,
                          text: "GDP (1T USD)"
                      }
                  }
              }
          }
      });
  });
}

function india2() {
  makeCanvas();

  d3.csv("csv/india_pre.csv").then(data => {

      const points = data.map(d => ({
          x: +d["Unemployment Rate"],
          y: +d["kNN (1)"]/1000
      }));

      new Chart(document.getElementById('myChart1'), {
          type: 'scatter',
          data: {
              datasets: [{
                  pointRadius: 7,
                  label: '인도 예측 by kNN',
                  data: points,
                  pointHoverRadius: 12,
                  backgroundColor: '#046a38',
                  showLine: false,
              }]
          },
          options: {
              pointRadius: 5,
              scales: {
                  x: {
                      type: 'linear',
                      title: {
                          display: true,
                          text: "Unemployment Rate (%)"
                      }
                  },
                  y: {
                      type: 'linear',
                      title: {
                          display: true,
                          text: "GDP (1T USD)"
                      }
                  }
              }
          }
      });
  });
}