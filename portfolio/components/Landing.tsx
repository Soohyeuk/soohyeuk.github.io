const Landing = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = './assets/Resume_Soohyeuk_Choi.pdf'; 
    link.download = 'Resume_Soohyeuk_Choi.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-[50rem] mx-auto px-4 -mt-10">
      <div className='flex flex-row items-center justify-center gap-10'>
        <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-full p-[0.3rem] bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-500 dark:from-indigo-500 dark:via-purple-500 dark:to-teal-400 shadow-xl">
          <img src={"../assets/head.jpg"} alt="profile" className="rounded-full object-cover w-full h-full" />
        </div>
      </div>
      <div className='mt-5'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl leading-normal text-gray-900 dark:text-gray-50'>
          Hi, I am <span className='text-teal-500 dark:text-teal-400 font-bold'>Soohyeuk</span>. 
          I am a 3rd year <span className='text-teal-500 dark:text-teal-400 font-bold'>CS</span> student at NYU. 
          I have a passion for <span className='text-teal-500 dark:text-teal-400 font-bold'>programming</span> and building products. 
          I also like to create graphs and analyze data.
        </h1>
      </div>
      <div className='flex flex-row items-center justify-center gap-3 mt-10'>
            <button 
              onClick={handleDownloadResume}
              className='bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white px-4 sm:px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105'
            >
              <img src={"../assets/pdf.svg"} alt="resume" className='w-5 h-5 sm:w-6 sm:h-6' />
              <span className="sm:hidden">Resume</span>
              <span className="hidden sm:inline">Download Resume</span>
            </button>

            <button 
              onClick={() => window.open("https://www.linkedin.com/in/soohyeuk-choi-78a956246/", "_blank")}
              className='bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white p-3 sm:px-6 sm:py-3 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105'
              aria-label="LinkedIn Profile"
            >
              <img src={"../assets/linkedin-logo.svg"} alt="linkedin" className='w-5 h-5 sm:w-6 sm:h-6' />
              <span className='hidden sm:inline'>LinkedIn</span>
            </button>

            <button 
              onClick={() => window.open("https://github.com/soohyeuk", "_blank")}
              className='bg-gradient-to-r from-teal-400 via-cyan-500 to-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 text-white p-3 sm:px-6 sm:py-3 rounded-full transition-all duration-300 flex items-center gap-2 hover:scale-105'
              aria-label="GitHub Profile"
            >
              <img src={"../assets/github-logo.svg"} alt="github" className='w-5 h-5 sm:w-6 sm:h-6' />
              <span className='hidden sm:inline'>GitHub</span>
            </button>
        </div>
    </div>
  )
}

export default Landing
