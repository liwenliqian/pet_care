type SectionHeadingProps = {
  title: string;
  description: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="section-head">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
