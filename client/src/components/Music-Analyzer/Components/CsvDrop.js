import '../App.css'
import { useState } from "react"
import { parse } from "papaparse"

function CsvDrop() {

    //Clean CSV
    const cleanData = (musicdata) => {
        let cleanedArray = []
        musicdata.forEach(item => {
            let play_duration = 0
            play_duration = Number(item['Play Duration Milliseconds'])

            if (!isNaN(play_duration) && item['Event End Timestamp'].includes("2021") && play_duration >= 30000 && item["Item Type"] === "ITUNES_STORE_CONTENT")
                cleanedArray.push(item)
        })

        return cleanedArray;
    };

    const [data, setData] = useState([])
    const [isCsvDropped, setCsvDrop] = useState(false)

    return (
        <div className='dropzone'
            onDragOver={(e) => {
                e.preventDefault()
            }}
            onDrop={(e) => {
                e.preventDefault()
                Array.from(e.dataTransfer.files).map(async file => {
                    parse(file, {
                        header: true,
                        complete: function (results) {
                            setData(cleanData(results.data))
                            setCsvDrop(!isCsvDropped)
                        }
                    })
                })
            }
            }>
            drop here
        </div>
    );
}

export default CsvDrop;







