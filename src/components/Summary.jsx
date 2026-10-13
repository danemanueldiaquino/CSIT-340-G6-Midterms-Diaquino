export default function Summary({ seats, months }) {
  return (
    <div className="px-20 pt-10">
      <div className="rounded-xl border-2 border-[#000000] bg-[#000000] px-8 py-6 text-[#EEEEEE] flex items-center justify-between">
        <h3 className="text-2xl font-bold">Summary</h3>
        <p className="text-xl text-[#CB2957]">
          Total Duration: {seats * months} seat-months
        </p>
      </div>
    </div>
  );
}