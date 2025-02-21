import Image from "next/image";

const LibrarySection = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="p-6 gap-8 grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <Image
          className="w-full object-cover rounded-lg mb-4"
          src="/library.webp"
          alt=""
          width={600}
          height={400}
        />
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              className="text-green-500"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>
            </svg>
            মাদ্রাসা গ্রন্থাগার
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            আমাদের মাদ্রাসা গ্রন্থাগারে ইসলামিক সাহিত্য, পাঠ্যপুস্তক, রেফারেন্স
            বই এবং জার্নালের বিশাল সংগ্রহের পরিকল্পনা রয়েছে। শিক্ষার্থীরা
            ধর্মীয় এবং একাডেমিক ক্ষেত্রে তাদের জ্ঞান বাড়াতে এগুলি ব্যবহার করতে
            পারে।
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>৫,০০০-এরও বেশি ইসলামিক বই এবং সম্পদ।</li>
            <li>ডিজিটাল জার্নাল এবং গবেষণা সামগ্রীতে অ্যাক্সেস।</li>
            <li>মনোযোগ সহকারে পড়াশোনার জন্য নীরব কক্ষ।</li>
            <li>সাপ্তাহিক বই আলোচনা এবং অধ্যয়ন চক্র।</li>
          </ul>
        </div>
      </div>

      <div className="p-6 gap-8 grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="w-full">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              className="text-blue-500"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
            </svg>
            অনলাইন শিক্ষা প্ল্যাটফর্ম
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            আমাদের অনলাইন শিক্ষা প্ল্যাটফর্মে ইসলামিক স্টাডিজ, কোরআন মুখস্থকরণ
            এবং একাডেমিক বিষয়গুলির উপর বিভিন্ন কোর্সর পরিকল্পনা রয়েছে। এটি
            শিক্ষার্থীদের অভিজ্ঞ শিক্ষকদের সমর্থনে তাদের নিজস্ব গতিতে শিখতে
            সক্ষম করে।
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>ইন্টারেক্টিভ কোরআন আবৃত্তি এবং মুখস্থকরণ সেশন।</li>
            <li>প্রখ্যাত স্কলারদের লাইভ এবং রেকর্ড করা ভিডিও লেকচার।</li>
            <li>অনলাইন মূল্যায়ন এবং কুইজ।</li>
            <li>ডাউনলোডযোগ্য শিক্ষামূলক উপকরণ।</li>
          </ul>
          <div className="flex items-center gap-4 mt-4 text-gray-600">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              className="text-gray-600"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"></path>
            </svg>
            <span>লাইভ ইন্টারেক্টিভ ক্লাস</span>
          </div>
          <div className="flex items-center gap-4 mt-2 text-gray-600">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 640 512"
              className="text-gray-600"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path>
            </svg>
            <span>পাঠ্য উপকরণ ডাউনলোড করুন</span>
          </div>
        </div>
        <Image
          className="w-full object-cover rounded-lg mb-4"
          src="/online-class.webp"
          alt=""
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default LibrarySection;
