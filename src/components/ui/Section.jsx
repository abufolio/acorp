import Container from "./Container";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-24">
      <Container>
        <div className="mb-12">
          <h2 className="text-4xl font-bold">{title}</h2>
        </div>

        {children}
      </Container>
    </section>
  );
}
