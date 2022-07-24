import 'bootstrap/dist/css/bootstrap.css';
import MainRoutes from "./routes/MainRoutes";
import NavBar from "./components/NavBar";
import Container from 'react-bootstrap/Container';

function App() {
 return (
    <>
    <NavBar />
        <main >
            <Container className='mt-5'>
                <MainRoutes />
            </Container>
        </main>
    </>
 )
}

export default App;
