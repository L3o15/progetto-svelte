<script>
    import { Link } from 'svelte-routing';
    import { onMount, afterUpdate } from 'svelte';
    import { myTracks } from './store.js';
    export let titolo
    export let artisti
    export let image
    export let preview
    export let release_date
    export let id
    let my_songs = $myTracks
    let state = false
    
    function modifyState(){
        if(!my_songs.some((song) => song['Track URI'] == id)){
            state = true
            my_songs.push({
                "Track URI": id,
                "Track Name": titolo,
                "Artist Name(s)": artisti,
                "Album Image URL": image,
                "Track Preview URL": preview,
                "Album Release Date": release_date
            })
        } else {
            state = false
            my_songs = my_songs.filter((song) => song['Track URI'] != id)
        }
        myTracks.update(() => my_songs)
    }
    onMount(() => {
        if(my_songs.some((song) => song['Track URI'] === id)){
            state = true
        } else {
            state = false
        }
    });
    afterUpdate(() => {
        if(my_songs.some((song) => song['Track URI'] === id)){
            state = true
        } else {
            state = false
        }
    });
</script>


<div class="track-card">
    <div class = "icon">

        <button class="add_track" on:click={modifyState}>
            {#if state}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                </svg>
            {/if}

        </button>
        {#key image}
        <img src="{image}" alt="{titolo}">
        {/key}
    </div>

    <div class="track-info">
        <div>
            <h2>{titolo}</h2>
            <h4>{artisti}</h4>
        </div>
    </div>

    <div class="track-extras">
        <div class = "upperPart">
            {#if preview}
                <a href="{preview}" class="preview_link" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                    </svg>
                </a>
            {/if}
            <Link to={`/song_stats/${id}`} target="_blank" class="preview_link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
            </Link>
        </div>
        <h5>{release_date}</h5>

    </div>
</div>

<style>
    @media only screen and (max-width: 600px) {
        img {
            position: 0,0;
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 5%;
            margin-right: 5px;
        }

        .track-card {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 5px;
            margin-top: 10px;
            margin-bottom: 10px;
            padding: 5px;
            padding-left: 10px;
            padding-right: 10px;
            border: 1px solid #000000;
            border-radius: 5px;
            background-color: #3a506b;
            width: 85%;
            border: none;
            position: relative;
        }

        .track-info h2 {
            font-size: 16px; /* Riduci la dimensione del testo per il titolo */
        }

        .track-info h4 {
            font-size: 12px; /* Riduci la dimensione del testo per gli artisti */
        }

        .track-extras h5 {
            font-size: 12px; /* Riduci la dimensione del testo per la data di rilascio */
        }
    }

    @media only screen and (min-width: 600px) {
        img {
            position: 0,0;
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 5%;
            margin-right: 20px;
        }

        .track-card {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 10px;
            padding: 10px;
            padding-left: 20px;
            padding-right: 20px;
            border: 1px solid #000000;
            border-radius: 5px;
            background-color: #3a506b;
            width: 70%;
            border: none;
        }
    }
    
    
    .track-extras {
        margin-left: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-end, center;
    }
    .add_track{
        padding: 0;
        background: rgba(red, green, blue , 0.0);
        position: absolute;
        position: 0, 0;
        height: 30px;
        width: 30px;
    }
</style>