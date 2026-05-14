import { processSteps } from "@/app/data/site";

export function ProcessSteps() {
  return (
    <div className="process">
      {processSteps.map((step) => (
        <article className="step" key={step.title}>
          <div className="step-top" aria-hidden="true">
            <span className="step-icon">{step.icon}</span>
          </div>
          <h3>{step.title}</h3>
          <p>{step.body}</p>
        </article>
      ))}
    </div>
  );
}
