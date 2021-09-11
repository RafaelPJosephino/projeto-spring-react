
import axios from 'axios';
import { basename } from 'path';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { Base_Url } from 'utils/requests';

type ChartData = {
    labels: string[];
    series:number[];
}

function Donutchart() {
    
   let ChartData : ChartData= {labels:[], series:[]};

   axios.get(`${Base_Url}/Sales/amount-by-seller`).then(res => { 
        const data = res.data as SaleSum[];
        const mylabels = data.map(x=> x.sallerName);
        const myseries = data.map(x=> x.sum);
        ChartData = {labels:mylabels, series:myseries};
    console.log(ChartData);
    }) ;

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    return (
        
        <div> 
           <Chart 
            options= {{...options, labels : ChartData.labels} } 
            series= {ChartData.series}
            type= "donut"
            height="240"
           />
            
        </div>
    );
}

export default Donutchart;