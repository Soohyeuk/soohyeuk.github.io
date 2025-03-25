import reactIcon from '../assets/React.svg'
import typescriptIcon from '../assets/TypeScript.svg'
import sassIcon from '../assets/Sass.svg'
import pythonIcon from '../assets/Python.svg'
import djangoIcon from '../assets/Django.svg'
import fastAPIIcon from '../assets/FastAPI.svg'
import cppIcon from '../assets/C++ (CPlusPlus).svg'
import mysqlIcon from '../assets/MySQL.svg'
import gitIcon from '../assets/Git.svg'
import dockerIcon from '../assets/Docker.svg'
import circleCIIcon from '../assets/CircleCI.svg'
import gcloudIcon from '../assets/Google Cloud.svg'
import pandasIcon from '../assets/Pandas.svg'
import numpyIcon from '../assets/NumPy.svg'
import matplotlibIcon from '../assets/Matplotlib.svg'
import pytestIcon from '../assets/pytest.svg'

const Skill = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 md:gap-6 place-items-center">
      {/* Frontend */}
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={reactIcon} alt="React" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">React</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={typescriptIcon} alt="TypeScript" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">TypeScript</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={sassIcon} alt="Sass" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Sass</span>
      </div>

      {/* Backend */}
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={pythonIcon} alt="Python" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Python</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform dark:invert' src={djangoIcon} alt="Django" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Django</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={fastAPIIcon} alt="FastAPI" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">FastAPI</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={cppIcon} alt="C++" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">C++</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={mysqlIcon} alt="MySQL" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">MySQL</span>
      </div>

      {/* Developer Tools */}
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={gitIcon} alt="Git" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Git</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={dockerIcon} alt="Docker" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Docker</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform dark:invert' src={circleCIIcon} alt="CircleCI" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">CircleCI</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={gcloudIcon} alt="Google Cloud" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Google Cloud</span>
      </div>

      {/* Data Related */}
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={pandasIcon} alt="Pandas" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Pandas</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={numpyIcon} alt="NumPy" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">NumPy</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={matplotlibIcon} alt="Matplotlib" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">Matplotlib</span>
      </div>
      <div className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl bg-gray-100/80 hover:bg-gray-200/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 shadow-lg backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 transition-all w-24 sm:w-28 h-24 sm:h-28">
        <img className='w-8 sm:w-10 h-8 sm:h-10 hover:scale-125 transition-transform' src={pytestIcon} alt="pytest" />
        <span className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">pytest</span>
      </div>
    </div>
  )
}

export default Skill
