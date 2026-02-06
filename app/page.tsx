import EventCard, { EventCardProps } from "@/components/EventCard";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const supabase = await createClient(cookieStore);

  const { data: events } = await supabase.from("event")
    .select(`*, category:categories!inner(*),location:locations!left(*), people:event_people!left(
        person:people!left(name)
      )`).eq('categories.hidden', false)
      .order("date", { ascending: false });

  console.log("Data ", events);

  return (
    <div className="pt-6">
      {events?.map((event) => {
        return (
          <EventCard
            key={event.eventId}
            title={event.title}
            description={event.description}
            people={event.people}
            date={new Date(event.date)}
            location={event.location?.name}
            amount={event.ammount}
            positive={event.positive}
            withPartner={event.withPartner}
          />
        );
      })}
    </div>
  );
}
