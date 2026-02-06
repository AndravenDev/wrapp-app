interface EventCardProps {
  title: string;
  description: string;
  people: Person[];
  date: Date;
  location: string;
  amount: number;
  positive?: boolean;
  withPartner: boolean;
}

export default function EventCard({
  title,
  description,
  people,
  date,
  location,
  amount,
  positive,
}: EventCardProps) {
  return (
    <div className="block bg-white rounded-lg mb-4 p-3 border border-blue-200 md:flex md:justify-between">
      <div className="pr-3 flex flex-col flex-wrap justify-between">
        <p className="text-md font-bold pb-3">{title}</p>
        <p className="text-gray-600 pb-3">{description}</p>
        <div>
          {people.map((person) => {
            return <span className="pr-1">{person.name}</span>;
          })}
        </div>
      </div>
      <div className="text-gray-600 flex flex-col flex-wrap justify-between">
        <p className="pb-2">
          {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
        </p>
        <p className="pb-2">At: {location}</p>
        <p className="font-bold pb-2">{amount} €</p>
        {positive === undefined ? null : (
          <p
            className={`pt-1 pr-2 pb-1 pl-2 rounded-lg w-fit text-white text-extrabold ${positive ? "bg-green-400" : "bg-red-400"}`}
          >
            Good
          </p>
        )}
      </div>
    </div>
  );
}
