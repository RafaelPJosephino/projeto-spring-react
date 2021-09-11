import Barchart from "components/barchart";
import DataTable from "components/dataTable";
import Donutchart from "components/donutchart";
import Footer from "components/footer";
import Navbar from "components/navbar";

function Dashboard() {
    return (
        <>
            <Navbar />
            <div className='container' >
                <h1 className="text-primary py-3">Dashboard Vendas</h1>
                <div className="row px-3" >
                    <div className="col -sm-6" >
                        <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
                        <Barchart />
                    </div>
                    <div className="col -sm-6" >
                        <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
                        <Donutchart />
                    </div>
                </div>
                <div>
                    <h2 className="text-primary py-3">Todas Vendas</h2>
                </div>
                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;