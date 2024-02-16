const songs = [
    {
        title: "Bohemian Rhapsody",
        artist: "Queen",
        duration: { minutes: 10, seconds: 55 },
        genre: "Rock"
    },
    {
        title: "Imagine",
        artist: "John Lennon",
        duration: { minutes: 20, seconds: 3 },
        genre: "Pop, Rock"
    },
    {
        title: "Hey Jude",
        artist: "The Beatles",
        duration: { minutes: 7, seconds: 11 },
        genre: "Pop, Rock"
    },
    {
        title: "Let it Be",
        artist: "The Beatles",
        duration: { minutes: 6, seconds: 30 },
        genre: "Rock, Pop"
    },
    {
        title: "Yesterday",
        artist: "The Beatles",
        duration: { minutes: 2, seconds: 5 },
        genre: "Rock, Pop"
    },
    {
        title: "Billie Jean",
        artist: "Michael Jackson",
        duration: { minutes: 4, seconds: 54 },
        genre: "Pop, Funk"
    },
    {
        title: "I Will Always Love You",
        artist: "Whitney Houston",
        duration: { minutes: 4, seconds: 30 },
        genre: "Pop, R&B"
    },
    {
        title: "Like a Prayer",
        artist: "Madonna",
        duration: { minutes: 5, seconds: 39 },
        genre: "Pop, Dance"
    },
    {
        title: "Sweet Child o' Mine",
        artist: "Guns N' Roses",
        duration: { minutes: 5, seconds: 34 },
        genre: "Rock, Hard Rock"
    },
    {
        title: "November Rain",
        artist: "Guns N' Roses",
        duration: { minutes: 8, seconds: 56 },
        genre: "Rock, Hard Rock"
    },
    {
        title: "Bohemian Like You",
        artist: "Dandy Warhols",
        duration: { minutes: 4, seconds: 3 },
        genre: "Rock, Alternative Rock"
    },
    {
        title: "Don't Stop Believin'",
        artist: "Journey",
        duration: { minutes: 4, seconds: 50 },
        genre: "Rock, Arena Rock"
    },
    {
        title: "Carry On Wayward Son",
        artist: "Kansas",
        duration: { minutes: 5, seconds: 13 },
        genre: "Rock, Progressive Rock"
    },
    {
        title: "Hotel California (Live)",
        artist: "Eagles",
        duration: { minutes: 6, seconds: 10 },
        genre: "Rock, Country Rock"
    },
    {
        title: "Free Fallin'",
        artist: "Tom Petty and the Heartbreakers",
        duration: { minutes: 4, seconds: 1 },
        genre: "Rock, Heartland Rock"
    },
    {
        title: "Paradise City",
        artist: "Guns N' Roses",
        duration: { minutes: 6, seconds: 5 },
        genre: "Rock, Hard Rock"
    },
    {
        title: "Wish You Were Here",
        artist: "Pink Floyd",
        duration: { minutes: 5, seconds: 35 },
        genre: "Rock, Progressive Rock"
    },
    {
        title: "Comfortably Numb",
        artist: "Pink Floyd",
        duration: { minutes: 6, seconds: 24 },
        genre: "Rock, Progressive Rock"
    },
    {
        title: "Another Brick in the Wall (Part II)",
        artist: "Pink Floyd",
        duration: { minutes: 4, seconds: 31 },
        genre: "Rock, Progressive Rock"
    },
    {
        title: "Time",
        artist: "Pink Floyd",
        duration: { minutes: 7, seconds: 4 },
        genre: "Rock, Progressive Rock"
    }
];



function filterByArtist(songs, searchQuery) {
    const artistSongs = songs.filter((song) =>
        song.artist.toLowerCase().replace(/\s+/g, '').includes(searchQuery.toLowerCase().replace(/\s+/g, ''))
    );
    return artistSongs;
}

function filterByGenre(songs, searchQuery) {
    const escapedSearchQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    const regexPattern = new RegExp(escapedSearchQuery.replace(/\s+/g,''), 'i');
    //const regexPattern = new RegExp(escapedSearchQuery.split(/\s+/).join('|'), 'i');

    const filteredSongs = songs.filter(song => {
        return song.genre.match(regexPattern);
    });

    return filteredSongs;
}

function createRandomPlaylistLessThanOneHour(songs) {
    const maxDuration = 60;
    let currentDuration = 0;
    const playlist = [];
    const availableSongs = [...songs];

    availableSongs.sort(() => Math.random() - 0.5);

    while (currentDuration < maxDuration && availableSongs.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableSongs.length); // random index yang dibulatkan kemudian dikali panjang index available
        const randomSong = availableSongs[randomIndex];
        const duration = randomSong.duration.minutes + (randomSong.duration.seconds / 60)

        if (currentDuration + duration <= maxDuration) {
            playlist.push(randomSong);
            currentDuration += duration;
        }

        availableSongs.splice(randomIndex, 1);
    }

    return { playlist, duration: currentDuration.toFixed(2) }

}

//console.log(createRandomPlaylistLessThanOneHour(songs));
//console.log(filterByArtist(songs, "K f"))
//console.log(filterByGenre(songs, ""))
