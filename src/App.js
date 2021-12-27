import Content from "./components/Content";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <div className="flex contain ">
        <Sidebar />

        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
