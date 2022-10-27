import React from 'react'
import list1 from '../assets/list1.jpg'
import list2 from '../assets/list2.jpg'
import list3 from '../assets/list3.jpg'
import list4 from '../assets/list4.jpg'

const List = () => {
  return (
    <div className='List ' id='list'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-blue-300 rounded overflow-hidden">
              {/* <div className="w-24 h-full bg-indigo-500"></div> */}
            </div>
            <div className="flex flex-wrap items-center py-6 mb-12 justify-between">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-4xl sm:text-5xl mb-2 sm:mb-0 ">LIST OF HOSPITALS</h1>
              <form className="leading-relaxed text-base my-4 sm:pl-10 pl-0 flex ">
                <div className="searchBar__container bg-blue-100 rounded-3xl flex p-3 ">
                  <svg className='w-[1.2rem]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                  </svg>
                  <input className='input_search_bar border-0 outline-none mx-1 bg-transparent' placeholder='Search...' type="text" />
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img src={list1} alt="content" className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Govt Autonomous Ayurveda hospital</h2>
              <p className="text-base leading-relaxed mt-2">Open time: 9AM close time: 10PM.</p>
              <p className="text-base leading-relaxed mt-2">Contact Number: 07612970733.</p>
              <p className="text-base leading-relaxed mt-2">Address: Guarighat Jabalpur Madhaya Pradesh.</p>
              <a className="text-indigo-500 inline-flex items-center mt-3">View Location
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img src={list2}  alt="content" className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">PT. khushilal sharma ayurvedic hospital</h2>
              <p className="text-base leading-relaxed mt-2">Open time: 9AM close time: 10PM.</p>
              <p className="text-base leading-relaxed mt-2">Contact Number: 07552473767.</p>
              <p className="text-base leading-relaxed mt-2">Address: Lokmanya Nagar, Indore.</p>
              <a className="text-indigo-500 inline-flex items-center mt-3">View Location
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img src={list3}  alt="content" className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Govt Autonomous Ayurveda Mahavidyalaya and hospital</h2>
              <p className="text-base leading-relaxed mt-2">Opening Time: 24 hour.</p>
              <p className="text-base leading-relaxed mt-2">Contact Number: 9830003676.</p>
              <p className="text-base leading-relaxed mt-2">Address: Amkhoh, Gwalior, Madhya Pradesh.</p>
              <a className="text-indigo-500 inline-flex items-center mt-3">View Location
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img src={list4}  alt="content" className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Govt. Ashtang Ayurved Hospital</h2>
              <p className="text-base leading-relaxed mt-2">Open time: 8AM close time: 12PM.</p>
              <p className="text-base leading-relaxed mt-2">Contact Number: 07312473767.</p>
              <p className="text-base leading-relaxed mt-2">Address: Lokmanya Nagar, Indore.</p>
              <a className="text-indigo-500 inline-flex items-center mt-3">View Location
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img src="https://dummyimage.com/1204x504" alt="content" className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Govt Autonomous Ayurveda hospital</h2>
              <p className="text-base leading-relaxed mt-2">Open time: 9AM close time: 10PM.</p>
              <p className="text-base leading-relaxed mt-2">Contact Number: 07612970733.</p>
              <p className="text-base leading-relaxed mt-2">Address: Guarighat Jabalpur Madhaya Pradesh.</p>
              <a className="text-indigo-500 inline-flex items-center mt-3">View Location
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img src="https://dummyimage.com/1204x504" alt="content" className="object-cover object-center h-full w-full" />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Govt Autonomous Ayurveda hospital</h2>
              <p className="text-base leading-relaxed mt-2">Open time: 9AM close time: 10PM.</p>
              <p className="text-base leading-relaxed mt-2">Contact Number: 07612970733.</p>
              <p className="text-base leading-relaxed mt-2">Address: Guarighat Jabalpur Madhaya Pradesh.</p>
              <a className="text-indigo-500 inline-flex items-center mt-3">View Location
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default List