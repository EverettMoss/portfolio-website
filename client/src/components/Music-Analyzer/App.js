import './App.css'
import { parse } from "papaparse"
import { useState } from "react"
import moment from "moment"
import TopSummary from './Components/TopSummary'
import WeeklyPlayCharts from './Components/WeeklyPlayCharts'

function App() {

  //Clean CSV
  const cleanData = (musicdata) => {
    let cleanedArray = []
    musicdata.forEach(item => {
      let play_duration = 0
      play_duration = Number(item['Play Duration Milliseconds'])

      if (!isNaN(play_duration) && play_duration >= 30000 && item["Item Type"] === "ITUNES_STORE_CONTENT") { //&& item['Event End Timestamp'].includes('2018')
        const item_year = item['Event End Timestamp'].substring(0, 4)
        cleanedArray.push({
          artist: item['Artist Name'],
          song: item['Song Name'],
          year: item_year,
          reason_ended: item['End Reason Type'].toLowerCase(),
          play_duration: play_duration,
          day_of_week: moment(item['Event Start Timestamp']).format('dddd'),
          track: item['Artist Name'] + ' - ' + item['Song Name']
        })
      }
    })
    return cleanedArray;
  };

  //get years where there is data
  const findYears = (musicdata) => {
    const uniqueYears = new Set()

    musicdata.forEach(item => {
      uniqueYears.add(item.year)
    })

    setYearRange(Array.from(uniqueYears).sort())
  }


  const getTrackTotals = (musicdata) => {
    var tracks = []

    musicdata.forEach(item => {
      if (tracks[item.track] == null) {
        tracks[item.track] = {
          plays: 0,
          time: 0
        }
      } else {
        tracks[item.track].plays += 1
        tracks[item.track].time += item.play_duration
      }
    })

    setTracks(tracks)
  }

  const [data, setData] = useState([])
  const [isCsvDropped, setCsvDrop] = useState(false)
  const [yearRange, setYearRange] = useState([])
  const [currentYear, setCurrentyear] = useState('2018')
  const [tracks, setTracks] = useState({})

  return (
    <>
      {!isCsvDropped &&
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
                  const cleaned = cleanData(results.data)
                  setData(cleaned)
                  findYears(cleaned)
                  //getTrackTotals(cleaned)
                  setCsvDrop(!isCsvDropped)
                }
              })
            })
          }
          }>
          drop here
        </div>
      }

      {isCsvDropped &&
        <>
          <div className='w-full h-full'>
            <div>
              <p className='text-center font-semibold'>Apple Music Recap {currentYear}</p>
            </div>

            <div class="absolute top-30 right-5">
              <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex">

                <li class="w-full">
                  <div class="flex items-center pl-3">
                    {
                      yearRange.map((year) => {
                        return (
                          <>
                            <input type='radio' name='yr' value={year} id={year} onChange={e => setCurrentyear(e.target.value)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-700 focus:ring-blue-500 focus:ring-2" />
                            <label for={year} class="py-3 ml-2 w-full text-sm font-medium text-gray-900">{year}</label>
                          </>
                        );
                      })
                    }
                  </div>
                </li>

              </ul>
            </div>

            <TopSummary data={data} year={currentYear} />
            <WeeklyPlayCharts data={data} year={currentYear} />
          </div>
        </>
      }
    </>

  );
}

export default App;