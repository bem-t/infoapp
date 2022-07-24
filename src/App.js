import { NavBar } from "./components/NavBar";
import MainRoutes from "./routes/MainRoutes";


function App() {
 return (
  <div>
      <nav>
        <NavBar />
      </nav>
    <main>
      <article>
        <MainRoutes />
      </article>
    </main>
  </div>
 )
}

export default App;
