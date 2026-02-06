import EventCard from "@/components/EventCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <EventCard
        title="Some title"
        description="Some longer description that I wrote here"
        people={[{ personId: 1, name: "Jack" }]}
        date={new Date()}
        location="Kaufland"
        amount={30}
        positive={true}
        withPartner={true}
      />
    </div>
  );
}
