import { departmentsCardData } from "@/lib/data";

const DepartmentsPage = () => {
  return (
    <div className="bg-green-50">
      <div className="container bg-green-50 mx-auto py-10 px-3">
        <div className="w-full h-[100px] md:h-[150px] shadow-md flex justify-center items-center bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-lg">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            role="img"
            viewBox="0 0 24 24"
            className="text-2xl animate-bounce"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C5.37 0 0 5.372 0 12s5.371 12 12 12c6.628 0 12-5.372 12-12S18.627 0 12 0zm-.273 3.789v1.71h.545v-1.71a9.055 9.055 0 015.961 2.468l-1.277 1.278.386.386 1.277-1.278a9.057 9.057 0 012.469 5.96h-1.71v.546h1.717v2.001H2.905v-2H4.62v-.546h-1.71a9.058 9.058 0 012.469-5.96L6.658 7.92l.386-.386-1.278-1.278a9.056 9.056 0 015.96-2.468zM12 6.965a5.912 5.912 0 00-5.913 5.912h11.824A5.91 5.91 0 0012 6.965z"></path>
          </svg>
          <h1 className="ml-4 text-lg md:text-2xl font-bold">বিভাগসমূহ</h1>
        </div>
        <div className=" py-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {departmentsCardData.map((items, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105"
                >
                  <div className="mb-4">
                    {items.icon}
                    <h2 className="text-xl font-bold text-gray-700 mb-2">
                      {items.title}
                    </h2>
                    <p className="text-gray-600">{items.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" mx-auto ">
          <div className="bg-white p-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              আলিয়া শিক্ষা ব্যবস্থার মূলধারা
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              আলিয়া শিক্ষা ব্যবস্থা হল বাংলাদেশের মাদ্রাসা শিক্ষার একটি অনন্য
              অংশ। এই ব্যবস্থায় ধর্মীয় শিক্ষার পাশাপাশি সাধারণ বিষয়ও পড়ানো
              হয়। এটি ইসলামের মৌলিক জ্ঞান এবং আধুনিক বিজ্ঞান, সাহিত্য ও কলার
              সমন্বয় ঘটায়। শিক্ষার্থীরা কুরআন, হাদিস, ফিকহ, এবং অন্যান্য
              ইসলামী বিষয়ের পাশাপাশি গণিত, বিজ্ঞান, ইংরেজি ও সামাজিক বিজ্ঞানেও
              দক্ষতা অর্জন করে।
            </p>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              শিক্ষার স্তরসমূহ
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
              <li>
                ইবতেদায়ী (প্রাথমিক স্তর): ধর্মীয় এবং প্রাথমিক বিষয়ের শিক্ষা।
              </li>
              <li>
                দাখিল (মাধ্যমিক স্তর): কুরআন ও হাদিসের সঙ্গে সাধারণ বিষয়ের
                সমন্বয়।
              </li>
              <li>
                আলিম (উচ্চ মাধ্যমিক স্তর): ধর্মীয় ও আধুনিক শিক্ষার গভীরতার সাথে
                উন্নত পাঠ্যক্রম।
              </li>
              <li>
                ফাজিল ও কামিল (উচ্চতর স্তর): ইসলামী আইন, ধর্মতত্ত্ব এবং
                গবেষণাভিত্তিক শিক্ষা।
              </li>
            </ul>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              আলিয়া শিক্ষার বিশেষত্ব
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              আলিয়া শিক্ষা ব্যবস্থা মুসলিম সম্প্রদায়ের মধ্যে জ্ঞান, নৈতিকতা
              এবং নেতৃত্ব গড়ে তোলার একটি আদর্শ মাধ্যম। এর মাধ্যমে শিক্ষার্থীরা
              একদিকে আল্লাহর প্রতি আনুগত্যশীল থাকে এবং অন্যদিকে আধুনিক বিশ্বের
              চ্যালেঞ্জ মোকাবিলায় সক্ষম হয়। এই ব্যবস্থার মাধ্যমে একজন
              শিক্ষার্থী ইসলামী জীবনধারা এবং সমাজে উন্নত ভূমিকা পালন করতে পারে।
            </p>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              আলিয়া শিক্ষার উপকারিতা
            </h2>
            <p className="text-gray-700 leading-relaxed">
              এই শিক্ষা ব্যবস্থা শিক্ষার্থীদের জীবনের প্রতিটি ক্ষেত্রে ভারসাম্য
              ও সফলতা অর্জনে সহায়ক। এটি সমাজে নৈতিকতা এবং নেতৃত্বের গুণাবলী
              বিকাশ করে। এছাড়া, এটি ধর্মীয় ও আধুনিক শিক্ষার মধ্যে একটি
              সেতুবন্ধন তৈরি করে যা শিক্ষার্থীদের পেশাগত এবং আধ্যাত্মিক উন্নতিতে
              সহায়তা করে।
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <div className="bg-white  p-8 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-green-800 mb-4">
              হিফজ কী এবং এর গুরুত্ব
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              হিফজ হল পবিত্র কুরআন মুখস্থ করার একটি বিশেষ প্রক্রিয়া, যা মুসলিম
              উম্মাহর মাঝে অত্যন্ত সম্মানের স্থান দখল করে। হাফেজ হওয়ার মাধ্যমে
              একজন ব্যক্তি আল্লাহর কিতাবকে হৃদয়ে ধারণ করেন এবং জীবনের সর্বত্র
              তা বাস্তবায়িত করেন। এই শিক্ষা ব্যবস্থার মূল উদ্দেশ্য হল আল্লাহর
              কালামের সংরক্ষণ এবং ভবিষ্যৎ প্রজন্মের মধ্যে এর সঠিক প্রচার।
            </p>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              হিফজ শিক্ষার পদ্ধতি
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
              <li>প্রতিদিন নির্দিষ্ট পরিমাণ আয়াত মুখস্থ করা।</li>
              <li>মুখস্থ অংশের নিয়মিত পুনরাবৃত্তি।</li>
              <li>বিশেষ শিক্ষকের তত্ত্বাবধানে শেখা।</li>
              <li>মাস বা বছর শেষে পুরো কুরআন পুনঃপাঠ করা।</li>
            </ul>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              হিফজ শিক্ষার উপকারিতা
            </h2>
            <p className="text-gray-700 leading-relaxed">
              হিফজ শিক্ষার মাধ্যমে একজন ব্যক্তি কুরআনের গভীর অর্থ ও শিক্ষাকে
              উপলব্ধি করতে পারে। এটি মনোযোগ ও স্মৃতিশক্তি বাড়াতে সাহায্য করে।
              তাছাড়া, এটি আখিরাতের জন্যও বিশেষ পুরস্কারের দ্বার উন্মুক্ত করে।
              হাফেজ হওয়া মানে একজন মুসলিমের জীবনের প্রতিটি ক্ষেত্রে কুরআনের আলো
              ছড়িয়ে দেয়া।
            </p>
          </div>
        </div>
        <div className=" mx-auto ">
          <div className="bg-white p-8 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              তাকসিসি শিক্ষা কী?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              তাকসিসি শিক্ষা ব্যবস্থা হল এমন একটি বিশেষ শিক্ষাপ্রণালী যা মুসলিম
              শিক্ষার্থীদের ইসলামি জ্ঞান এবং আধুনিক বিদ্যার উপর প্রশিক্ষিত করার
              জন্য তৈরি। এটি প্রাথমিকভাবে ইসলামের মূল শিক্ষাসমূহ, যেমন কুরআন,
              হাদিস, এবং ফিকহের সাথে সাধারণ বিষয়গুলোর সমন্বয়ে গঠিত। এর লক্ষ্য
              হল একজন শিক্ষার্থীকে ধর্মীয় এবং সামাজিক উভয় ক্ষেত্রে দক্ষ করে
              তোলা।
            </p>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              শিক্ষার লক্ষ্য
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6">
              <li>
                শিক্ষার্থীদের কুরআন, হাদিস, এবং ইসলামী আইন সম্পর্কে গভীর জ্ঞান
                দান।
              </li>
              <li>
                সাধারণ শিক্ষার বিষয় যেমন গণিত, বিজ্ঞান, এবং ভাষার দক্ষতা উন্নত
                করা।
              </li>
              <li>
                নৈতিক ও আধ্যাত্মিক মান উন্নত করে সমাজে ইতিবাচক ভূমিকা পালন করা।
              </li>
            </ul>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              তাকসিসি শিক্ষার স্তরসমূহ
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              তাকসিসি শিক্ষা বিভিন্ন স্তরের মধ্যে বিভক্ত, যার প্রতিটি স্তরে
              নির্দিষ্ট লক্ষ্য রয়েছে:
            </p>
            <ul className="list-decimal list-inside text-gray-700 leading-relaxed mb-6">
              <li>
                **প্রাথমিক স্তর**: এখানে শিক্ষার্থীরা ইসলামের মৌলিক শিক্ষা এবং
                প্রাথমিক বিষয়গুলি শেখে।
              </li>
              <li>
                **মাধ্যমিক স্তর**: উন্নত কুরআন, হাদিস এবং সাধারণ শিক্ষার
                সংমিশ্রণ।
              </li>
              <li>
                **উচ্চতর স্তর**: ইসলামী গবেষণা, আইন এবং আধুনিক জ্ঞানের ক্ষেত্রে
                গভীরতা।
              </li>
            </ul>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              তাকসিসি শিক্ষার বৈশিষ্ট্য
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              তাকসিসি শিক্ষা ব্যবস্থার মাধ্যমে শিক্ষার্থীরা ইসলামি মূল্যবোধের
              উপর দৃঢ় থেকে আধুনিক শিক্ষার মাধ্যমে বিশ্বের প্রতিযোগিতায় এগিয়ে
              যেতে পারে। এটি মুসলিম সম্প্রদায়ের সামাজিক, অর্থনৈতিক, এবং
              আধ্যাত্মিক উন্নয়নে সহায়ক।
            </p>
            <h2 className="text-xl font-bold text-gray-800 mb-4">উপকারিতা</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>
                ধর্মীয় ও সাধারণ শিক্ষার সমন্বয়ে একজন শিক্ষার্থী জীবনে ভারসাম্য
                বজায় রাখতে পারে।
              </li>
              <li>
                শিক্ষার্থীদের সমাজে নৈতিকতা এবং নেতৃত্বের গুণাবলী বিকাশে সহায়ক।
              </li>
              <li>
                সমাজের উন্নয়নে একটি প্রগতিশীল ভূমিকা পালন করতে সক্ষম করে।
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentsPage;
