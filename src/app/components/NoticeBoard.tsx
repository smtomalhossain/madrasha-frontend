"use client"
const NoticeBoard = () => {
  return (
    <div className="w-full mx-auto py-10 bg-green-50 px-4">
      <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Left Section - Madrasa Info */}
        <div className="md:col-span-1 lg:col-span-2">
          <div className="h-full p-4 rounded-md border border-green-400 bg-white shadow-lg">
            <h2 className="font-semibold text-xl mb-3 text-green-600">
              আত-তাহফিজ ইন্টারন্যাশনাল মাদ্রাসা
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
            আত-তাহফিজ ইন্টারন্যাশনাল মাদ্রাসা একটি স্বতন্ত্র শিক্ষাপ্রতিষ্ঠান, যেখানে ইসলামি জ্ঞানের গভীরতা এবং আধুনিক শিক্ষার যুগোপযোগীতা একসঙ্গে শিক্ষার্থীদের কাছে পৌঁছে দেওয়া হয়। এখানে শিক্ষার্থীদের কুরআন ও হাদিসের সঙ্গে আধুনিক বিজ্ঞান ও প্রযুক্তি বিষয়ক জ্ঞান অর্জনের সুযোগ রয়েছে। আত-তাহফিজ ইন্টারন্যাশনাল মাদ্রাসা শিক্ষার্থীদের নৈতিকতা, আদর্শ এবং মানবিক গুণাবলির বিকাশে গুরুত্ব দেয়। এটি এমন একটি প্রতিষ্ঠান যা শিক্ষার্থীদের জীবনে দীন ও দুনিয়ার ভারসাম্য বজায় রেখে সাফল্যের পথে এগিয়ে যেতে সহায়তা করে।...
            </p>
            <div className="w-full mt-4">
              <a
                href="/our-achievement/"
                className="inline-flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition duration-300"
              >
                আরও
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="ml-2 text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M13 7h9v2h-9zM13 15h9v2h-9zM16 11h6v2h-6zM13 12 8 7v4H2v2h6v4z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Notice Box */}
        <div className="md:col-span-1">
          <div className="h-full border border-green-400 rounded-md shadow-lg">
            <div className="w-full bg-green-500 text-xl text-white font-semibold border-b p-3 text-center">
              নোটিশ বক্স
            </div>
            <div className="w-full max-h-[300px] overflow-y-auto p-3">
              {/* Notice Items */}
              <div className="w-full cursor-pointer flex p-2 shadow-sm hover:shadow-md rounded-md transition-shadow duration-300">
                <div className="flex min-w-[40px] justify-center items-center p-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-green-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="m17.58 6.25 1.77 1.77L14.37 13H12.6v-1.77l4.98-4.98zm3.27-.44-1.06-1.06c-.2-.2-.51-.2-.71 0l-.85.85L20 7.37l.85-.85c.2-.2.2-.52 0-.71zM18 12.2V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.82.21 1.57.59 2.21 1.09L10.6 10.4V15h4.6l2.8-2.8zM10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2z"></path>
                  </svg>
                </div>
                <div className="w-full flex flex-col justify-start items-start">
                  <p className="text-sm md:text-base">📢 বার্ষিক শিক্ষা সফর সংক্রান্ত নোটিশ</p>
                  <small className="text-xs text-gray-500">2/2/2025, 10:21:23 PM</small>
                </div>
              </div>
              <div className="w-full cursor-pointer flex p-2 shadow-sm hover:shadow-md rounded-md transition-shadow duration-300 mt-2">
                <div className="flex min-w-[40px] justify-center items-center p-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-xl text-green-500"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="m17.58 6.25 1.77 1.77L14.37 13H12.6v-1.77l4.98-4.98zm3.27-.44-1.06-1.06c-.2-.2-.51-.2-.71 0l-.85.85L20 7.37l.85-.85c.2-.2.2-.52 0-.71zM18 12.2V17h2v2H4v-2h2v-7c0-2.79 1.91-5.14 4.5-5.8v-.7c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.7c.82.21 1.57.59 2.21 1.09L10.6 10.4V15h4.6l2.8-2.8zM10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2z"></path>
                  </svg>
                </div>
                <div className="w-full flex flex-col justify-start items-start">
                  <p className="text-sm md:text-base">মাদ্রাসার অফিসিয়াল ওয়েবসাইট উদ্বোধন</p>
                  <small className="text-xs text-gray-500">1/24/2025, 9:54:56 PM</small>
                </div>
              </div>
            </div>
            <div className="w-full bg-green-500 cursor-pointer text-white font-semibold p-2 text-center hover:bg-green-600 transition duration-300">
              সব নোটিশ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;