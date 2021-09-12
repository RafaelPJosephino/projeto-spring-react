import axios from "axios";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { Base_Url } from "utils/requests";

function DataTable() {
    const [activePage,setActivePage] = useState(0);
    const [page, setPage] = useState<SalePage>({
        first: true,
        last: true,
        number: 0,
        totalElements: 0,
        totalPages: 0,

    });

    useEffect(() => {
        axios.get(`${Base_Url}/Sales?page=${activePage}&size=20&sort=date,desc`)
            .then(res => { setPage(res.data) })
        },[activePage]);

    const changePage = (index :number) => {
        setActivePage(index);
        
    } 

    return (
        <>
                <Pagination onPageChange = {changePage} page = {page}  />
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Vendedor</th>
                                <th>Clientes visitados</th>
                                <th>Negócios fechados</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {page.content?.map(x => (
                                <tr key={x.id}>

                                    <td>{formatLocalDate(x.date, "dd/MM//yyyy")}</td>
                                    <td>{x.seller.name}</td>
                                    <td>{x.visited}</td>
                                    <td>{x.deals}</td>
                                    <td>{x.amount.toFixed(2)}</td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
        </>
    );
}

export default DataTable;