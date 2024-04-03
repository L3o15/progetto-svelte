<script>
  import GuessTheSong from "./GuessTheSong.svelte";
  import { draw } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { createEventDispatcher } from 'svelte';
  import { winCount, winStreak} from './store.js';
  let wins = $winCount;
  let streak = $winStreak;

    
  let year = "";
  let onlyFavourite = false;
  const dispatch = createEventDispatcher();

  function updateWinCount(event) {
      streak += 1;
      if (streak > wins) {
        wins = streak;
        winCount.update(n => wins);
      }
      winStreak.update(n => streak);
  }

  function resetWinStreak(event) {
      if (streak > wins) {
        wins = streak;
      }
      streak = 0;
      winStreak.update(n => streak);
      winCount.update(n => wins);
  }

  function onlyFavSongs() {
      onlyFavourite = true;
  }

  function handleSubmit(event) {
    event.preventDefault(); // Evita il comportamento predefinito del modulo

    // Ottieni il valore inserito dall'utente
    const inputYear = document.getElementById('year').value;

    if (inputYear === '') {
      year = "all";
    } else if (isNaN(inputYear)) {
      alert('Inserisci un numero');
      return;
    } else if (inputYear < 1960 || inputYear > 2023) {
      alert('Inserisci un anno compreso tra il 1960 e il 2023');
      return;
    } else {
      year = inputYear;
    }
    onlyFavourite = false;

    // Invia l'anno al componente GuessTheSong
    dispatch('updateYear', { year });
  }
</script>

<main>
  <div class="options">
    <h3 class="winsStats">
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke-width="1.5" 
      stroke="currentColor" 
      class="w-6 h-6">
        <path 
        transition:draw={{ duration: 5000, delay: 500, easing: quintOut }}
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
      </svg>      
      {wins}
    </h3>
    <h3 class="winsStats">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
        <path 
        transition:draw={{ duration: 5000, delay: 500, easing: quintOut }}
        fill-rule="evenodd" 
        d="M13.5 4.938a7 7 0 1 1-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 0 1 .572-2.759 6.026 6.026 0 0 1 2.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0 0 13.5 4.938ZM14 12a4 4 0 0 1-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 0 0 1.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 0 1 1.315-4.192.447.447 0 0 1 .431-.16A4.001 4.001 0 0 1 14 12Z" clip-rule="evenodd" />
      </svg>
    {streak}</h3>
    <form on:submit|preventDefault={handleSubmit}>
      <label for="year">Anno:</label>
      <input type="text" name="year" id="year">
      <button type="submit" class="submitButton">Invia</button>
    </form>
    <button on:click={onlyFavSongs}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <br>
  <GuessTheSong year={year} on:updateYear={e => year = e.detail.year} on:win={updateWinCount} on:lose={resetWinStreak} onlyFavourite = {onlyFavourite}/>
</main>

<style>
  svg {
    width: auto;
    height: 20px;
  }

  @media only screen and (max-width: 600px){
    h3 {
      font-size: 14px; /* Esempio di dimensione del testo per h3 */
    }

    button{
      font-size: 10px;
    }

    .options {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .winsStats{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 20px;
    }

    input{
      font-size: 12px;
      border-radius: 5px;
      width: 50px;
    }
  }

</style>