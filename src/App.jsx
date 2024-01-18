import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";
import StudentTable from "./component/student-table/StudentTable";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <StudentTable />
      <Footer />
    </div>
  );
}
