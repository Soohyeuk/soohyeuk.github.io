import Header from '../components/header';
import Landing from '../components/Landing';
import Skill from '../components/Skill';
import Project from '../components/Project';
import Contact from '../components/Contact';
// import Experience from '../components/Experience';

export default function App() {
  return (
      <div className="min-h-screen w-full relative dark:bg-gray-950">
        {/* Background gradients */}
        <div className="bg-gradient-to-r from-teal-400/70 via-cyan-500/40 to-indigo-500/40 z-[1] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-gradient-to-r dark:from-indigo-500/30 dark:via-purple-500/30 dark:to-teal-400/30"></div>
        <div className="bg-gradient-to-r from-cyan-500/70 via-indigo-500/40 to-teal-400/40 z-[1] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:from-purple-500/30 dark:via-indigo-500/30 dark:to-cyan-400/30"></div>
        {/* Content */}
        <div className="relative z-[2]">
          <Header />
          
          <main className="flex flex-col items-center px-4 min-h-screen justify-between pt-40 sm:pt-48 pb-28 text-white">
            <section id="home" className="scroll-mt-28 w-full max-w-[50rem] text-center mb-60 sm:mb-72">
              <Landing />
            </section>

            <section id="skills" className="scroll-mt-28 w-full max-w-[50rem] text-center mb-60 sm:mb-72">
              <h2 className="text-3xl font-medium capitalize mb-16 text-black dark:text-white">Skills</h2>
              <Skill />
            </section>

            <section id="projects" className="scroll-mt-28 w-full text-center mb-60 sm:mb-72">
              <h2 className="text-3xl font-medium capitalize mb-16 text-black dark:text-white">Projects</h2>
              <Project />
            </section>

            {/* <section id="experience" className="scroll-mt-28 w-full max-w-[50rem] text-center mb-60 sm:mb-72">
              <h2 className="text-3xl font-medium capitalize mb-16 text-black dark:text-white">Experience</h2>
              <Experience />
            </section> */}

            <section id="contact" className="scroll-mt-28 w-full max-w-[50rem] text-center">
              <Contact />
            </section>
          </main>
        </div>
      </div>
  );
}
