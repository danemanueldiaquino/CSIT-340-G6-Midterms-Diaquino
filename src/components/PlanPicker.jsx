export default function PlanPicker({ seats, months, handleAddSeat, handleAddMonth, handleReset }) {
  return (
    <div className="flex items-end justify-between bg-[#000000] px-20 py-12 text-[#EEEEEE]">
      <header>
        <h2 className="text-6xl font-bold">Build your plan</h2>
        <p className="mt-4 text-3xl text-[#CB2957]">
          Seats: {seats} | Months: {months}
        </p>
        <p className="mt-2 text-xl">Quote for YOUR NAME</p>
      </header>

      <div className="flex gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#CB2957] px-8 py-3 text-xl font-bold text-[#EEEEEE]"
          onClick={handleAddSeat}
        >
          Add seat
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#EEEEEE] px-8 py-3 text-xl font-bold text-[#000000]"
          onClick={handleAddMonth}
        >
          Add month
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#EEEEEE] px-8 py-3 text-xl font-bold"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}