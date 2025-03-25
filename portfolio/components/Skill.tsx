const Skill = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 md:gap-6 place-items-center">
      {/* Frontend */}
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/React.svg" alt="React" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">React</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/TypeScript.svg" alt="TypeScript" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">TypeScript</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/Sass.svg" alt="Sass" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Sass</span>
      </div>

      {/* Backend */}
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/Python.svg" alt="Python" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Python</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform dark:invert' src="../assets/Django.svg" alt="Django" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Django</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/FastAPI.svg" alt="FastAPI" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">FastAPI</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/C++ (CPlusPlus).svg" alt="C++" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">C++</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/MySQL.svg" alt="MySQL" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">MySQL</span>
      </div>

      {/* Developer Tools */}
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/Git.svg" alt="Git" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Git</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/Docker.svg" alt="Docker" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Docker</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform dark:invert' src="../assets/CircleCI.svg" alt="CircleCI" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">CircleCI</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/Google Cloud.svg" alt="Google Cloud" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Google Cloud</span>
      </div>

      {/* Data Related */}
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/Pandas.svg" alt="Pandas" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Pandas</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/NumPy.svg" alt="NumPy" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">NumPy</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/Matplotlib.svg" alt="Matplotlib" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Matplotlib</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src="../assets/pytest.svg" alt="pytest" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">pytest</span>
      </div>
    </div>
  )
}

export default Skill
