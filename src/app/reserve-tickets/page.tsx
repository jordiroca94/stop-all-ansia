import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ReserveTickets from "@/components/ReserveTickets";

export default function page() {
  return (
    <main>
      <Header />
      <div className="h-screen flex flex-col justify-between">
        <ReserveTickets />
        <Footer />
      </div>
    </main>
  );
}