<script>
    import { Router, Route, Link } from 'svelte-routing'
    import Home from './Home.svelte'
    import SearchArtist from './SearchArtist.svelte'
    import Search from './Search.svelte';
    import SearchYear from './SearchYear.svelte';
    import SongStats from './SongStats.svelte';
    import Play from './Play.svelte';
    import MyTracks from './MyTracks.svelte';
    let basePath = "/"
</script>

<div>
    <Router {basePath}>
        <div class="container">
            <nav>
                <div class="section">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                        </svg>
                    </Link>
                </div>
                <div class="section">
                    <Link to="/new_game">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                        </svg>
                          
                    </Link>
                </div>
                <div class="section">
                    <Link to="/search">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </Link>
                </div>
                <div class="section">
                    <Link to="/search_artist">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>                          
                    </Link>
                </div>
                <div class="section">
                    <Link to="/search_year">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                        </svg>                          
                    </Link>
                </div>
                <div class="section">
                    <Link to="/my_tracks">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>                          
                    </Link>
                </div>
            </nav>
        </div>
        
        <br>
        <Route path="/">
            <br>
            <br>
            <br>
            <Home/>
        </Route>
        <Route path="/search_artist">
            <br>
            <SearchArtist/>
        </Route>
        <Route path="/search">
            <br>
            <Search/>
        </Route>
        <Route path="/search_year">
            <br>
            <SearchYear/>
        </Route>
        <Route path="/song_stats/:id" let:params>
            <br>
            <br>
            <SongStats id = {params} />
        </Route>
        <Route path="/new_game">
            <br>
            <Play/>
        </Route>
        <Route path="/my_tracks">
            <br>
            <br>
            <br>
            <MyTracks/>
        </Route>
      </Router>
</div>

<style>
    nav {
        position: fixed; /* Rende la navbar fissa */
        width: 90%;
        height: 40px;
        border-radius: 10px;
        margin: 10px;
        margin-top: 70px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: #1c2541;
        padding: 10px;
        z-index: 200000000; 
    } 
    
    @media only screen and (max-width: 600px){
        nav {
            width: 100%;
            height: 50px;
            margin-top: 50px;
        }
    }

    svg {
        color: #5bc0be;
    }
</style>