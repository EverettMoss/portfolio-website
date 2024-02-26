import './App.css'
import { parse } from "papaparse"
import { useState } from "react"
import moment from "moment"
import TopSummary from './Components/TopSummary'
import WeeklyPlayCharts from './Components/WeeklyPlayCharts'
import ReasonPieChart from './Components/ReasonPieChart'
import SongsTable from './Components/SongsTable'

function App() {

  //Clean CSV
  const cleanData = (musicdata) => {
    //create year and song data
    const YEARS = {}

    let cleanedArray = []
    musicdata.forEach(item => {
      let play_duration = 0
      play_duration = Number(item['Play Duration Milliseconds'])

      if (!isNaN(play_duration) && play_duration >= 30000 && item["Item Type"] === "ITUNES_STORE_CONTENT") {
        //get year
        const item_year = item['Event End Timestamp'].substring(0, 4)

        //check if year is already defined 
        if (!YEARS[item_year]) {
          YEARS[item_year] = {}
          YEARS[item_year]['songs'] = {} // track data goes here
          YEARS[item_year]['reasons'] = {} // reasons piechart data goes here
          YEARS[item_year]['totals'] = {
            artists: new Set(),
            songs: 0,
            time: 0
          } // year totals goes here
          YEARS[item_year]['weekdays'] = {
            Sunday: 0,
            Monday: 0,
            Tuesday: 0,
            Wednesday: 0,
            Thursday: 0,
            Friday: 0,
            Saturday: 0
          } // weekday barchart data goes here
        }

        //create song title
        const track_title = item['Artist Name'] + ' - ' + item['Song Name']

        //create song object
        const song_obj = {
          artist: item['Artist Name'],
          song: item['Song Name'],
          track: track_title,
          week: moment(item['Event Start Timestamp']).format('w')
        }

        //add song to dictionary / update info
        if (YEARS[item_year]['songs'][track_title]) {
          YEARS[item_year]['songs'][track_title]['count'] += 1
          YEARS[item_year]['songs'][track_title]['time'] += play_duration
        }
        else {
          YEARS[item_year]['songs'][track_title] = song_obj //add track info in dict

          YEARS[item_year]['songs'][track_title]['count'] = 1
          YEARS[item_year]['songs'][track_title]['time'] = play_duration

          YEARS[item_year]['totals']['songs'] += 1 //add song to total count
        }

        //reasons
        const reason_track_ended = item['End Reason Type'].toLowerCase()

        //add / update reason ended
        if (YEARS[item_year]['reasons'][reason_track_ended]) {
          YEARS[item_year]['reasons'][reason_track_ended] += 1
        }
        else {
          YEARS[item_year]['reasons'][reason_track_ended] = reason_track_ended //add reason to dict
          YEARS[item_year]['reasons'][reason_track_ended] = 1
        }

        //days of week
        const day_of_week = moment(item['Event Start Timestamp']).format('dddd')

        //add / update reason ended
        YEARS[item_year]['weekdays'][day_of_week] += 1

        //totals
        YEARS[item_year]['totals']['time'] += play_duration
        YEARS[item_year]['totals']['artists'].add(item['Artist Name'])

      }
    })

    setData(YEARS)
    return cleanedArray;
  };


  const [data, setData] = useState([])
  const [isCsvDropped, setCsvDrop] = useState(false)
  const [currentYear, setCurrentyear] = useState('2021')

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
                  cleanData(results.data)
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

            <div className="absolute top-30 right-5 w-1/4">
              <ul className=" w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex">

                <li className="w-full flex items-center">
                
                    {
                      Object.entries(data).map(([key, val]) => {
                        return (
                          <div key={key} className="flex items-center pl-3">
                            <input type='radio' name='yr' value={key} id={key} onChange={e => setCurrentyear(e.target.value)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-700 focus:ring-blue-500 focus:ring-2" />
                            <label htmlFor={key} className="py-3 ml-2 w-full text-sm font-medium text-gray-900">{key}</label>
                          </div>
                        )
                      })
                    }
         
                </li>

              </ul>
            </div>

            <TopSummary data={data[currentYear]['totals']} />
            {console.log(data)}
            <div className='w-full h-1/6'>
              <div className='grid grid-cols-4 gap-2 m-5'>
                <div className='h-80 col-span-2'>
                  <WeeklyPlayCharts data={data[currentYear]['weekdays']} />
                </div>
                <div className='h-80 col-span-2'>
                  <ReasonPieChart data={data[currentYear]['reasons']} />
                </div>

                <div className='h-80 bg-sky-100 col-span-4 overflow-y-auto rounded-lg'>
                  <SongsTable data={data[currentYear]['songs']} />
                </div>

              </div>
            </div>
          </div>
        </>
      }
    </>

  );
}

export default App;