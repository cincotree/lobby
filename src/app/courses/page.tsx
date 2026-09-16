import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Redirect from "../../components/Redirect";

export const metadata = {
  title: "Moved",
  robots: { index: false, follow: true },
};

export default function Moved() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Redirect to="/workshops/" label="workshops" />
      </main>
      <Footer />
    </div>
  );
}
