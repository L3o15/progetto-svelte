<script>
  import { tracks, myTracks } from './store.js';
  import { onMount, afterUpdate, createEventDispatcher } from 'svelte';
  let mySongs = $myTracks;
  export let year;
  export let onlyFavourite;

  let canzone_da_indovinare = null;
  let alternatives = [];
  const disp = createEventDispatcher();

  const selectSongAndAlternatives = () => {
    let filteredSongs = [];
    if (onlyFavourite) {
      filteredSongs = mySongs.filter(track => track['Track Preview URL'] !== "");
    } else {
      if (!year || year === "all") {
        filteredSongs = $tracks.filter(track => track['Track Preview URL'] !== "");
      } else {
        filteredSongs = $tracks.filter(track => track['Album Release Date'].includes(year.toString()) && track['Track Preview URL'] !== "");
      }
    }
    

    if (filteredSongs.length === 0 || filteredSongs.length < 4) {
      alert('Non ci sono abbastanza canzoni.');
      return
    }; // Esci se non ci sono canzoni filtrate
    
    // Mescola la lista delle canzoni filtrate
    for (let i = filteredSongs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredSongs[i], filteredSongs[j]] = [filteredSongs[j], filteredSongs[i]];
    }
    
    // Seleziona la prima canzone filtrata come canzone da indovinare e le successive 3 come alternative
    canzone_da_indovinare = filteredSongs[0];
    alternatives = filteredSongs.slice(0, 4);
    for (let i = alternatives.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [alternatives[i], alternatives[j]] = [alternatives[j], alternatives[i]];
    }
  };

  // Chiamata quando il componente viene montato
  onMount(() => {
    selectSongAndAlternatives();
  });

  // Chiamata quando year cambia
  afterUpdate(() => {
    selectSongAndAlternatives();
    let audio = document.getElementById('audioPlayer');
    if (audio) {
      audio.src = canzone_da_indovinare['Track Preview URL'];
      audio.load();
    }
  });

</script>
  
<main>
    <h1>Guess the song</h1>
    {#if canzone_da_indovinare}
      <h2>Which song is this?</h2>
      <!--p>{canzone_da_indovinare['Track Name']} - {canzone_da_indovinare['Artist Name(s)']}</p>
      <p>{canzone_da_indovinare['Track Preview URL']}</p-->
      <audio controls id="audioPlayer">
        <source src={canzone_da_indovinare['Track Preview URL']} type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
      <div class="alternative">
          {#each alternatives as track}
              <button on:click={() => {
                  if (track['Track URI'] === canzone_da_indovinare['Track URI']) {
                      alert('Correct!');
                      disp('win', "win");
                  } else {
                      alert('Wrong!');
                      disp('lose', "lose");
                  }
                  selectSongAndAlternatives();
                  let audio = document.getElementById('audioPlayer');
                  if (audio) {
                    audio.src = canzone_da_indovinare['Track Preview URL'];
                    audio.load();
                  }
              }}>
                  {track['Track Name']} - {track['Artist Name(s)']}
              </button>
          {/each}
      </div>
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    audio {
        margin: 20px;
    }

    @media only screen and (max-width: 600px){
      button {
        font-size: 10px; 
      }
    }
    
</style>