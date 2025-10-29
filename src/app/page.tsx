import MeetTheTeamCarousel from "@/components/MeetTheTeamCarousel";





export default function Home() {
  return (
    <>
    
    <section className="mt-20 mx-10 max-w-[1240px] w-full flex flex-col items-center justify-center max-sm:mb-30">
      
      <h2 className="text-4xl font-semibold text-[var(--accent)] max-md:text-xl">Inclusive Movement for Every Child</h2>
      <p className="min-md:mt-8 mt-5 text-2xl text-left max-md:text-lg">At <span className="text-[var(--blue)] font-bold">Everyone Can Move, Inc.</span>, every child deserves the chance to move, 
        express themselves, and feel proud of who they are. Our inclusive dance 
        and movement programs welcome children of all abilities, creating a space 
        where <span className="text-[var(--blue)] font-semibold">creativity, confidence,</span> and <span className="text-[var(--blue)] font-semibold">community</span> come together.
      </p>
      <div className="mt-20 border-black border-2 px-5 py-6 bg-[var(--base)] relative z-1"
      >
        <div className="absolute inset-0" style={{backgroundImage: `url("/assets/gray_logo.png")`, backgroundRepeat: "no-repeat", backgroundPosition: "right", opacity: 0.2}}>

        </div>
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

      <div className="w-full flex justify-between max-h-[550px] max-md:grid grid-rows-1 grid-cols-2 gap-3 max-sm:flex max-sm:flex-col relative z-2">
        <div className="mt-6 bg-[var(--base)] max-md:min-h-[350px] max-sm:min-h-[400px] min-h-[250px] border-2 border-black text-black px-5 py-6 w-[58%] max-md:w-full">
          <h1 className="text-4xl font-bold text-[var(--blue)] max-md:text-2xl">Our Story</h1>
          <div className="border-[var(--blue)] border-b-2 mt-1 w-[50%]"></div>
          <p className="mt-2 text-lg max-md:text-base "><span className="text-[var(--accent)] font-semibold">Everyone Can Move,</span> <span className="text-[var(--blue)] font-semibold">Inc.</span> was founded on the belief that movement is for everyone. Too often, children with disabilities or mental health challenges are left out of dance spaces that should welcome them. We set out to change that by creating inclusive programs where every child can move at their own pace, explore their creativity, and feel a sense of belonging.
            </p>
          <p className="mt-4 text-lg max-md:text-base">What started as a small idea to bring movement to all has grown into a nonprofit dedicated to accessibility, acceptance, and joy.
          </p>
        </div>
        {/*add carousel component here*/}
        <MeetTheTeamCarousel />
      </div>
        
      
    </section>
     </>
  );
}
