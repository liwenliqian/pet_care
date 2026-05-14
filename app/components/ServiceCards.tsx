import { services } from "@/app/data/site";

export function ServiceCards() {
  return (
    <div className="cards">
      {services.map((service) => (
        <article className="card" key={service.title}>
          <div className="icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.body}</p>
        </article>
      ))}
    </div>
  );
}
