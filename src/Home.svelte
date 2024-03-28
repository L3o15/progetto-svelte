<script>
	import { tracks } from './store.js';
	import SongCard from './SongCard.svelte';
	let canzoni = $tracks;
</script>

<main>
	<!--h1>Home</h1-->
	<div class="tracks_container">
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