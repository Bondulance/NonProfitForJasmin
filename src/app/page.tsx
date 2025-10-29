

export default function Home() {
  return (
    <section className="mt-20 mx-10 max-w-[1240px] w-full flex flex-col items-center justify-center">
      
      <h2 className="text-4xl font-semibold text-[var(--accent)] max-md:text-xl">Inclusive Movement for Every Child</h2>
      <p className="mt-5 text-2xl text-left max-md:text-lg">At <span className="text-[var(--blue)] font-bold">Everyone Can Move, Inc.</span>, every child deserves the chance to move, 
        express themselves, and feel proud of who they are. Our inclusive dance 
        and movement programs welcome children of all abilities, creating a space 
        where <span className="text-[var(--blue)] font-semibold">creativity, confidence,</span> and <span className="text-[var(--blue)] font-semibold">community</span> come together.
      </p>
      <div className="mt-20 border-black border-2 px-5 py-6 bg-[var(--base)]">
        <h2 className=" text-4xl font-semibold text-[var(--accent)] max-md:text-2xl">About Us</h2>
        <div className="border-[var(--blue)] border-b-2 mt-1 w-[50%]"></div>
        <h3 className="mt-4 text-2xl max-md:text-lg font-bold text-[var(--blue)]">Our Mission</h3>
        <p className="mt-5 text-2xl text-left max-md:text-lg">To make dance and movement accessible for every child, regardless of ability, 
          background, or experience. We create inclusive spaces that <span className="text-[var(--blue)] font-semibold">
            build confidence,
            encourage self-expression, and foster community
          </span> through movement.
        </p>
        <h3 className="mt-4 text-2xl max-md:text-lg font-bold text-[var(--blue)]">Our Vision</h3>
        <p className="mt-5 text-2xl text-left max-md:text-lg">A world where all children feel seen, supported, and free to express themselves through movement and creativity.

        </p>
      </div>
      
    </section>
  );
}
