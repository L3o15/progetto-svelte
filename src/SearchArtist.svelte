<script>
    import { tracks } from './store.js';
	import SongCard from './SongCard.svelte';
	let canzoni = $tracks;
    let inputValue = '';

    let results = [];

    function handleSubmit(event) {
        event.preventDefault();
        
        // Filtra le canzoni in base all'inputValue
        results = canzoni.filter(track => track['Artist Name(s)'].toLowerCase().includes(inputValue.toLowerCase()));

        console.log(results.length);
    }
</script>

<main>
    <h1>Cerca per artista</h1>
    <form on:keyup={handleSubmit} on:submit={handleSubmit}>
        <label for="textInput">Inserisci il nome:</label>
        <input type="text" id="textInput" bind:value={inputValue}>
    </form>
    <div class="songs_container">
        {#each results as track}
            <SongCard
                id={track['Track URI']}
                titolo={track['Track Name']}
                artisti={track['Artist Name(s)']}
                image={track['Album Image URL']}
                preview={track['Track Preview URL']}
                release_date={track['Album Release Date']}></SongCard>
	    {/each}
    </div>
    
</main>

<style>
</style>