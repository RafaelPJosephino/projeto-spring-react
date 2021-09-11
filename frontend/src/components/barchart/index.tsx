import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { round } from 'utils/format';
import { Base_Url } from 'utils/requests';

type SeriesData = {
    name: String;
    data: number[];
}

type ChartData = {
    labels: {
        categories: String[];
    },
    series: SeriesData[];

};

function Barchart() {

    const [chartData, setChartData] = useState<ChartData>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });

    useEffect(() => {
        axios.get(`${Base_Url}/Sales/success-by-seller`).then(res => {
            const data = res.data as SaleSuccess[];
            const myLabels = data.map(x => x.sallerName);
            const mySeries = data.map(x => round(x.deals / x.visited * 100, 1));
            setChartData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "% Sucesso",
                        data: mySeries
                    }
                ]
            });
        });
    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
  
    return (

        <div>
            <Chart
                options={{ ...options, xaxis: chartData.labels }}
                series={chartData.series}
                type="bar"
                height="240"
            />

        </div>
    );
}

export default Barchart;