import { useEffect, useState } from "react"

function SongsTable(props) {
    const MS_TO_MIN = 60000
    const [data, setData] = useState([props.data])

    const sorting = (col) => {

        const sortedData = {};

        Object.keys(data)
            .sort((a, b) => (data[a][col] > data[b][col]) ? -1 : 1)
            .forEach(key => {
                sortedData[key] = data[key];
            });

            //console.log(JSON.stringify(props.data, null /*replacer function */, 4 /* space */))
            setData(sortedData)

    }

    useEffect(() => {
        console.log('data updated')
        setData(props.data)
    }, [props.data]);

    return (
        <>
            <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100 overflow-scroll">
                <thead className="text-xs text-white uppercase bg-cyan-700 dark:text-white">
                    <tr>
                        <th scope="col" className="w-2/12 py-3 px-6">
                            Track
                        </th>
                        <th scope="col" className="w-2/12 py-3 px-6 cursor-pointer" onClick={() => sorting('count')}>
                            Plays
                        </th>
                        <th scope="col" className="w-2/12 py-3 px-6 cursor-pointer" onClick={() => sorting('time')}>
                            Duration (min)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(data).map(([key, val]) => {
                            return (
                                <>
                                    <tr className="bg-cyan-100 border-b border-cyan-400 text-cyan-500" key={key}>
                                        <td className="py-4 px-6">
                                            {key}
                                        </td>

                                        <td className="py-4 px-6">
                                            {val.count}
                                        </td>

                                        <td className="py-4 px-6">
                                            {Math.round((val.time / MS_TO_MIN) * 100) / 100}
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>

    );

}

export default SongsTable;
