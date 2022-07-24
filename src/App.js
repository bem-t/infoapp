import 'bootstrap/dist/css/bootstrap.css';
import MainRoutes from "./routes/MainRoutes";
import { NavBar } from "./components/NavBar";

function App() {
 return (
  <>
      <div>
          <NavBar />
      </div>
    <main >
        <MainRoutes />
    </main>
  </>
 )
}

export default App;
