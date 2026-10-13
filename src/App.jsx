import { useState } from "react";
import Navbar from "./components/Navbar";
import PlanPicker from "./components/PlanPicker";
import Summary from "./components/Summary";
import PlanCard from "./components/PlanCard";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

export default function App() {
  const [seats, setSeats] = useState(1);
  const [months, setMonths] = useState(1);

  function handleAddSeat() {
    setSeats(seats + 1);
  }

  function handleAddMonth() {
    setMonths(months + 1);
  }

  function handleReset() {
    setSeats(1);
    setMonths(1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      <Navbar />

      <PlanPicker
        seats={seats}
        months={months}
        onAddSeat={handleAddSeat}
        onAddMonth={handleAddMonth}
        onReset={handleReset}
      />

      <div className="px-20 pt-10">
        <Summary seats={seats} months={months} />
      </div>

      <main className="grid grid-cols-3 gap-8 px-20 pt-10">
        <PlanCard
          name="Starter"
          pricePerSeat={199}
          storage="10 GB storage"
          support="Email support"
          seats={seats}
          months={months}
        />
        <PlanCard
          name="Team"
          pricePerSeat={499}
          storage="100 GB storage"
          support="Chat support"
          seats={seats}
          months={months}
        />
        <PlanCard
          name="Business"
          pricePerSeat={999}
          storage="1000 GB storage"
          support="Phone support"
          seats={seats}
          months={months}
        />
      </main>

      <div className="px-20 pt-10">
        <Feature />
      </div>

      <Footer />
    </div>
  );
}

