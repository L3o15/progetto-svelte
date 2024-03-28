<script>
	import { myTracks } from './store.js';
	import SongCard from './SongCard.svelte';
	let canzoni = $myTracks;
</script>

<main>
	<div class="tracks_container">
		{#if canzoni.length === 0}
			<h1 class="popularity"> Non hai ancora aggiunto canzoni alle tue canzoni preferite</h1>
		{/if}
		{#each canzoni as track}
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
	.tracks_container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>