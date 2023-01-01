import { useState, useEffect } from 'react';


function SongsTable(props) {
    //CONSTANTS
    const MS_TO_MINUTES = 60000

    const [tracks, setTracks] = useState([])
    const [totals, setTotals] = useState([])


    const getTrackTotals = (musicdata) => {
        var tracks = []

        musicdata.forEach(item => {
            if (props.year === item.year) {
                if (tracks[item.track] == null) {
                    tracks[item.track] = {
                        plays: 1,
                        time: item.play_duration / MS_TO_MINUTES
                    }
                } else {
                    tracks[item.track].plays += 1
                    tracks[item.track].time += item.play_duration / MS_TO_MINUTES
                }
            }
        })
        setTotals(tracks)
    }

    //list of tracks
    const getTracklist = (musicdata) => {
        const tracklist = new Set()

        var res = musicdata.reduce(function (obj, v) {
            if (props.year === v.year)
                tracklist.add(v.track)
            return obj;
        }, {})

        const tracksArray = Array.from(tracklist);
        setTracks(tracksArray)
    }

    useEffect(() => {
        getTrackTotals(props.data)
        getTracklist(props.data)

    }, []);

    useEffect(() => {
        getTrackTotals(props.data)
        getTracklist(props.data)


    }, [props.year]);

    return (
        <>
            <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100 overflow-scroll">
                <thead className="text-xs text-white uppercase bg-cyan-700 dark:text-white">
                    <tr>
                        <th scope="col" className="w-2/12 py-3 px-6">
                            Track
                        </th>
                        <th scope="col" className="w-2/12 py-3 px-6">
                            Plays
                        </th>
                        <th scope="col" className="w-2/12 py-3 px-6">
                            Duration (min)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {

                        tracks.map((track) => {
                            return (
                                <>
                                    <tr className="bg-cyan-100 border-b border-cyan-400 text-cyan-500">
                                        <td className="py-4 px-6">
                                            {track}
                                        </td>

                                        <td className="py-4 px-6">
                                            {totals[track].plays}
                                        </td>

                                        <td className="py-4 px-6">
                                            {  Math.round(totals[track].time * 100) / 100 }
                                        </td>

                                    </tr>
                                </>
                            );
                        })


                    }
                </tbody>
            </table>
        </>

    );

}

export default SongsTable;
