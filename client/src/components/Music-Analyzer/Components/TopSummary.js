import React from "react";

function TopSummary(props) {
    //CONSTANTS
    const MS_TO_MINUTES = 60000
    const MINUTES_TO_DAYS = 1440

    //Count Artists
    const countArtists = (musicdata) => {
        const artists = new Set()
        musicdata.forEach(item => {
            if (item.year === props.year)
                artists.add(item.artist)
        })
        return artists.size
    };

    //Count Songs
    const countSongs = (musicdata) => {
        let songs = []
        musicdata.forEach(item => {
            let song_name = item.artist + ' - ' + item.song
            songs.push(song_name)
        })
        //var songMap = songs.reduce((cnt, cur) => (cnt[cur] = cnt[cur] + 1 || 1, cnt), {});
        var map = songs.reduce(function (p, c) {
            p[c] = (p[c] || 0) + 1;
            return p;
        }, {});

        var newTypesArray = Object.keys(map).sort(function (a, b) {
            return map[b] - map[a];
        });

        return newTypesArray
    };

    //Count plays in minutes
    const countPlays = (musicdata) => {
        let total = 0
        musicdata.forEach(item => {
            if (item.year === props.year) {
                let play_duration = 0
                play_duration = Number(item.play_duration)
                total += play_duration
            }

        })
        return total / MS_TO_MINUTES
    };

    //Count of unique songs played
    const uniqueSongs = (musicdata) => {
        const uniqueSongs = new Set()

        musicdata.forEach(item => {
            if (item.year === props.year) {
                uniqueSongs.add(item.track)
            }
        })

        return uniqueSongs.size
    }

    return (
        <>
            <div>
                <p className="font-light pl-5">You spent <span className="font-bold text-lg">{ Math.round((countPlays(props.data) / MINUTES_TO_DAYS) * 100) / 100 }</span> days listening to music (<span className="font-bold text-lg">{ Math.round(countPlays(props.data) * 100) / 100 }</span> minutes). </p>
                <p className="font-light pl-5">You listened to <span className="font-bold text-lg">{countArtists(props.data)}</span> artists.</p>
                <p className="font-light pl-5">You listened to <span className="font-bold text-lg">{uniqueSongs(props.data)}</span> songs.</p>
            </div>
        </>
    );
}

export default TopSummary;







