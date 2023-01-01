import { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Pie } from 'react-chartjs-2';


function ReasonPieChart(props) {
    const [reasons, setReasons] = useState([])

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: Object.keys(reasons),
        datasets: [
            {
                label: '# of times',
                data: Object.values(reasons),
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
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "right"
            },
            title: {
                display: true,
                text: 'Reasons Why Song Ended',
            },
        },
    };


    const getReasons = (musicdata) => {
        var res = musicdata.reduce(function (obj, v) {
            if (props.year === v.year && v.reason_ended != '')
                obj[v.reason_ended] = (obj[v.reason_ended] || 0) + 1;
            return obj;
        }, {})

        return res
    }

    useEffect(() => {
        const reasons_count = getReasons(props.data)
        setReasons(reasons_count)
    }, []);

    useEffect(() => {
        const reasons_count = getReasons(props.data)
        setReasons(reasons_count)

    }, [props.year]);

    return (
        <>
            <Pie data={data} options={options} />
        </>

    );

}

export default ReasonPieChart;
