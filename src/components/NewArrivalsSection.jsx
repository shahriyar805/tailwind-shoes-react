import Card from "./Card";

function NewArrivalsSection({ items }) {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url('./assets/lines.png')] bg-center text-4xl font-extrabold dark:text-white">
          NEW ARRIVALS
        </div>
      </div>
      <div className="xl:grid-cols-[repeat(3, 25%)] mt-10 grid grid-cols-1 justify-between gap-x-10 gap-y-24 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivalsSection;
