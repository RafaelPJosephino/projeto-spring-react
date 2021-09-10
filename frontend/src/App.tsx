import Navbar from 'components/navbar/index';
import Footer from 'components/footer/index';
import Barchart from 'components/barchart/index';
import Donutchart from 'components/donutchart/index';
import DataTable from 'components/dataTable';

function App() {
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

export default App;
