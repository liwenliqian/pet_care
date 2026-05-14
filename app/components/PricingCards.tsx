import { pricingPlans } from "@/app/data/site";

export function PricingCards() {
  return (
    <div className="pricing">
      {pricingPlans.map((plan) => (
        <article
          className={plan.featured ? "price-card featured" : "price-card"}
          key={plan.title}
        >
          <span className="tag">{plan.tag}</span>
          <div className="price">
            {plan.price} <small>起</small>
          </div>
          <h3>{plan.title}</h3>
          <p>{plan.body}</p>
          <ul>
            {plan.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
