import RoutesContainer from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
function App() {
  return (
    <>
      <Layout>
        <BrowserRouter>
          <RoutesContainer />
        </BrowserRouter>
      </Layout>
    </>
  );
}

export default App;
