
import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { Base_Url } from 'utils/requests';

type ChartData = {
    labels: string[];
    series:number[];
}

function Donutchart() {

    const [chartData,setChartData ] = useState<ChartData>({labels:[], series:[]});
    useEffect(()=>{
        axios.get(`${Base_Url}/Sales/amount-by-seller`).then(res => { 
            const data = res.data as SaleSum[];
            const mylabels = data.map(x=> x.sallerName);
            const myseries = data.map(x=> x.sum);
            setChartData({labels:mylabels, series:myseries});
        }) ;
    },[]);   
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
        
        <div> 
           <Chart 
            options= {{...options, labels : chartData.labels} } 
            series= {chartData.series}
            type= "donut"
            height="240"
           />
            
        </div>
    );
}

export default Donutchart;