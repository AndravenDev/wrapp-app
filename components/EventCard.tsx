export interface EventCardProps {
  title: string;
  description: string;
  people: { person: { name: string } }[];
  date: Date;
  location?: string;
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
  withPartner,
}: EventCardProps) {
  return (
    <div
      className={`block bg-white rounded-lg mb-4 p-3 border ${positive === null ? "border-blue-200" : positive ? "border-green-200" : "border-red-200"} md:flex md:justify-between`}
    >
      <div className="pr-3 flex flex-col flex-wrap justify-between">
        <p className="text-md font-bold pb-3">{title}</p>
        <p className="text-gray-600 pb-3">{description}</p>
        <div>
          {people.length === 0 && withPartner === false ? (
            <span>By yourself</span>
          ) : (
            <span>
              <span>With: </span>
              {people.map((person, index) => {
                return (
                  <span key={person.person.name} className="pr-1">
                    {person.person.name}
                    {index === (people ?? []).length - 1 ? "" : ","}
                  </span>
                );
              })}
              {withPartner ? <span>and Krisi </span> : null}
            </span>
          )}
        </div>
      </div>
      <div className="text-gray-600 flex flex-col flex-wrap justify-between items-end">
        <p className="pb-2">
          {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
        </p>
        <p className="pb-2 text-end">At: {location}</p>
        {amount > 0 ? <p className="font-bold pb-2">{amount} €</p> : null}

        {positive === null ? null : (
          <p
            className={`pt-1 pr-2 pb-1 pl-2 rounded-lg w-fit text-white text-extrabold ${positive ? "bg-green-400" : "bg-red-400"}`}
          >
            {positive ? "Good" : "Bad"}
          </p>
        )}
      </div>
    </div>
  );
}
