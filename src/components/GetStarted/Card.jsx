import { User, Box, Rocket } from "lucide-react";
import { cards } from "../../../public/card";
const iconMap = {
  user: User,
  box: Box,
  rocket: Rocket,
};

const Cards = () => {
  return (
    <section className="max-w-6xl mx-auto px-5 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
     
      {cards.map((card) => {
        const Icon = iconMap[card.icon];

        return (
          <div
            key={card.id}
            className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
          >
            <div className="card-body items-center text-center">
              <div className="badge badge-primary absolute top-4 right-4">
                {card.id}
              </div>

              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Icon size={40} />
              </div>

              <h2 className="card-title">{card.title}</h2>

              <p className="text-sm opacity-70">{card.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Cards;
