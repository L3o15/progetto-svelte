import { writable } from 'svelte/store';
import json_data from './data/top_10000_songs_spotify.json';

function confronto(a, b) {
    if (a['Album Release Date'] > b['Album Release Date']) {
        return -1;
    }
    if (a['Album Release Date'] < b['Album Release Date']) {
        return 1;
    }
    return 0;
}

json_data.sort(confronto);

const storedWinCount = JSON.parse(localStorage.getItem('winCount'));
const storedTracks = JSON.parse(localStorage.getItem('myTracks'));
const storedWinStreak = JSON.parse(localStorage.getItem('winStreak'));

export let tracks = writable(json_data);
export let myTracks = writable(storedTracks || []);

export let winCount = writable(storedWinCount || 0);
export let winStreak = writable(storedWinStreak || 0);

winCount.subscribe(value => {
    localStorage.setItem('winCount', JSON.stringify(value));
});

winStreak.subscribe(value => {
    localStorage.setItem('winStreak', JSON.stringify(value));
});

myTracks.subscribe(value => {
    localStorage.setItem('myTracks', JSON.stringify(value));
});