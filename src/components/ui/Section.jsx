import Container from "./Container";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="py-24">
      <Container>
        <div className="mb-14">
          <h2 className="text-4xl font-bold md:text-5xl">{title}</h2>

          <div className="mt-4 h-1 w-20 rounded-full bg-sky-500" />
        </div>

        {children}
      </Container>
    </section>
  );
}
