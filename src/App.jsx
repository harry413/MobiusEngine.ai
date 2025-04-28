
import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar'
import About from "./components/About"
import WhyUs from './components/whyUs';
import Client from './components/Client';
import Service from "./components/ServicePlan"
import Resume from "./components/Resume"
import Footer from "./components/Footer"
const list = [
  {
    id:1,
    text:"Submit intake form",
  },
  {
    id:2,
    text:"We do the search and curation for list of jobs"
  },
  {
    id:3,
    text:"You approve, we do the tedious part (applying)"
  },
  {
    id:4,
    text:"You get the interviews"
  }
]

function App() {
  

  return (
    <>
      <div className="h-screen w-full flex flex-col items-between px-6 py-4 bg-radial-[at_-15%_-15%] from-pink-100 via-blue-400 to-navy-900 to-[at_180%_180%]">
        <Navbar />
        <Header/>
      </div>
      <div className="flex flex-col items-start justify-center w-full py-20 bg-[#FEFEFE] px-30">
        <h2 className="font-sans font-semibold text-[#0649E7] text-3xl mt-10 ">How we work?</h2>
        <div className='flex items-start justify-between w-full mt-10'>
          {list.map((list) => (
              <div className="flex flex-col items-start gap-4 w-50">
                  <p className="text-3xl text-black rounded-full border border-[#022183] p-2 px-4 font-semibold">{list.id}</p>
                  <hr className="border-t-2 border-[#0649E7] rounded w-full animate-pulse pp=2" />
                  <p className="text-md text-[#0649E7] font-semibold">{list.text}</p>
              </div>
          ))}
        </div>
      </div>
      <About/>
      <div className="bg-[#fefefe] w-full">
        <Client/>
         <WhyUs/>
         <Service/>
         <Resume/>
      </div>
      <Footer/>
      <div className=" flex items-center justify-between inset-x-0 bottom-0 h-12 bg-[#0649E7] text-[12px] px-20">
          <p>© 2023 Mobiusservices LLC</p>
          <div className="flex gap-6 "> 
               <a>Term & Condition</a>
               <a>Privacy Policy</a>
          </div>
     </div>
    </>
  );
}

export default App
