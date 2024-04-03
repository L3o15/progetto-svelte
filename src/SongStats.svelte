<script>
  import { tracks } from './store.js';
  import { onMount } from 'svelte';
  import { Chart } from 'chart.js/auto';
  import 'chartjs-adapter-date-fns';
  export let id;

  let canzone;
  let scaleGraph = 1.0; // Valore iniziale di scala

  // Trova la canzone corrispondente all'id
  const canzoni = $tracks;
  canzone = canzoni.find(track => track['Track URI'] === id.id);


  // Modifica il valore di scala in base al tempo della canzone
  setInterval(() => {
    scaleGraph = scaleGraph === 1.0 ? 0.99 : 1.0; // Alterna tra due valori di scala
  }, (60000 /canzone['Tempo']));

  onMount(() => {
    let loudness = ((-1) * (canzone['Loudness'] - 2769)) / 293.68;
    let danceability = (canzone['Danceability'] / 9.88) * 100;
    let energy = (canzone['Energy'] / 9.97) * 100;
    let speechiness = (canzone['Speechiness'] / 7.11) * 100;
    let acousticness = (canzone['Acousticness'] / 9.91) * 100;
    let instrumentalness = (canzone['Instrumentalness'] / 9.85) * 100;
    let liveness = (canzone['Liveness'] / 9.89) * 100;

    // Crea il grafico
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Danceability', 'Energy', 'Loudness', 'Speechiness', 'Acousticness', 'Instrumentalness', 'Liveness'],
        datasets: [{
          label: 'Statistiche',
          data: [loudness, danceability, energy, speechiness, acousticness, instrumentalness, liveness],
          backgroundColor: 'rgb(217, 255, 249, 0.5)',
          borderColor: 'rgb(217, 255, 249, 1)',
          borderWidth: 2
        }]
      },
      options: {
        color: 'rgb(112, 255, 234, 1)',
        responsive: true,
        scales: {
          r: {
            color: 'rgb(57, 79, 106)', 
            min: 0,
            max: 10,
            ticks: {
              stepSize: 1,
              color: 'rgb(12, 20, 45)',
            },

            grid: {
              color: 'rgb(112, 255, 234, 0.3)',
              lineWidth: 4,
            },

            pointLabels: {
              color: 'rgb(112, 255, 234, 1)',
            },

            angleLines: {
              color: 'rgb(112, 255, 234, 0.3)',
              lineWidth: 4,
            }
          }
        },
      }
    });
  });
</script>

<main>
  <div class = "infos">
    <img class = "imgStats" src={canzone['Album Image URL']} alt="">
    <h2 class = "popularity">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
      {canzone['Popularity']}
    </h2>
    <div class = "divisor">
      <div class = "part">
        <h1 class = "popularity">{canzone['Track Name']} </h1>
      </div>
      
      <div class = "part">
        <h2> By {canzone['Artist Name(s)']}</h2>
      </div>
      <div class = "part">
        <h3>Released in {canzone['Album Name']} on {canzone['Album Release Date']}</h3>
      </div>
      <div class = "part">
        {#if canzone['Artist Genres']}
          <h4>Genres: {canzone['Artist Genres']}</h4>
        {/if}
        
      </div>
    </div>
    <audio controls id="audioPlayer">
      <source src={canzone['Track Preview URL']} type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    
    
  </div>
  <div class="grafico" style="transform: scale({scaleGraph}); opacity: 1;">
    <canvas id="myChart"></canvas>
  </div>
  
</main>


<style>

  main{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  

  svg{
    margin-right: 5px;
    height: 30px;
    width: 30px;
  }

  @media only screen and (max-width: 600px){
    h1 {
      font-size: 24px; /* Esempio di dimensione del testo per h1 */
    }

    h2 {
      font-size: 18px; /* Esempio di dimensione del testo per h2 */
    }

    h3 {
      font-size: 14px; /* Esempio di dimensione del testo per h3 */
    }

    h4 {
      font-size: 12px; /* Esempio di dimensione del testo per h4 */
    }
  }

  


</style>

