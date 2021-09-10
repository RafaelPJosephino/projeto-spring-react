import Navbar from 'components/navbar/index';
import Footer from 'components/footer/index';
import DataTable from 'components/dataTable';
function App() {
  return (
    <>
    <Navbar/>
    <div className = 'container' >
      <h1 className= "text-primary">teste</h1>
      <DataTable/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
