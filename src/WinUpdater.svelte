<script>
    import GuessTheSong from "./GuessTheSong.svelte";
    import { winCount } from './store.js';
    let wins = $winCount;

    function updateWinCount(event) {
        wins += 1;
        winCount.update(n => wins);
    }
</script>

<main>
    <p>Wins: {wins}</p>
</main>
  
<GuessTheSong on:win={updateWinCount}/>