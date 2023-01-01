import { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


function WeeklyPlayCharts(props) {
    //CONSTANTS
    const MS_TO_MINUTES = 60000
    const [weekMinutes, setWeekMinutes] = useState([])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Play Distributions by Day',
            },
        },
    };

    const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Minutes',
                data: [weekMinutes.Sunday, weekMinutes.Monday, weekMinutes.Tuesday, weekMinutes.Wednesday, weekMinutes.Thursday, weekMinutes.Friday, weekMinutes.Saturday],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            },
        ],
    };

    //weekdays  
    const getWeekdays = (musicdata) => {
        let plays = {
            Monday: 0,
            Tuesday: 0,
            Wednesday: 0,
            Thursday: 0,
            Friday: 0,
            Saturday: 0,
            Sunday: 0
        }
        musicdata.forEach(item => {
            if (item.year == props.year)
                plays[item.day_of_week] += item.play_duration / MS_TO_MINUTES
        })

        return (plays)
    }

    useEffect(() => {
        const plays = getWeekdays(props.data)
        setWeekMinutes(plays)

    }, []);

    useEffect(() => {
        const plays = getWeekdays(props.data)
        setWeekMinutes(plays)

    }, [props.year]);

    return (
        <>
            <Bar options={options} data={data} />
        </>

    );

}

export default WeeklyPlayCharts;