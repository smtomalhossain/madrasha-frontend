import {
  campusData,
  dailyLifeData,
  islamicVideoData,
  servicesData,
  studentLifeData,
} from "@/lib/data";
import ImageSlider from "./components/ImageSlider";
import LocationCard from "./components/LocationCard";
import NoticeBoard from "./components/NoticeBoard";
import ServicesCard from "./components/ServicesCard";
import StudentLifeCard from "./components/StudentLifeCard";
import DailyLifeCard from "./components/DailyLifeCard";
import AdmissionProcessCard from "./components/AdmissionProcessCard";
import IslamicVideoCard from "./components/IslamicVideoCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-50 ">
      <div>
        <ImageSlider />
        <NoticeBoard />
        <section className="py-10 px-5">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            মাদরাসা ক্যাম্পাস পরিচিতি
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {campusData.map((campus, index) => (
              <LocationCard
                key={index}
                title={campus.title}
                address={campus.address}
                phone={campus.phone}
              />
            ))}
          </div>
        </section>
        <section className="container mx-auto py-10 px-2">
          <h1 className="text-4xl font-bold text-center mb-6">
            আমাদের সেবাসমূহ
          </h1>
          <p className="text-center mb-10 text-lg">
            আমাদের মাদরাসার বিভিন্ন শিক্ষা সেবা সম্পর্কে জানুন।
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {servicesData.map((service, index) => (
              <ServicesCard
                key={index}
                icon={service.icon}
                title={service.title}
                subTitle={service.subTitle}
              />
            ))}
          </div>
        </section>
        <section className=" w-full py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ছাত্রজীবন
              </h2>
              <p className="text-gray-600 leading-relaxed">
                আমাদের মাদরাসার শিক্ষার্থীদের গতিশীল ও আধ্যাত্মিক জীবন আবিষ্কার
                করুন। পড়াশোনা, অতিরিক্ত কার্যক্রম এবং আধ্যাত্মিক উন্নয়নের
                মধ্যে সামঞ্জস্য বজায় রেখে এগিয়ে চলা।
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studentLifeData.map((studentLife, index) => (
                <StudentLifeCard
                  key={index}
                  icon={studentLife.icon}
                  title={studentLife.title}
                  description={studentLife.description}
                  image={studentLife.image}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="w-full mt-10">
          {dailyLifeData.map((dailyLife, index) => (
            <DailyLifeCard 
            key={index}
            icon={dailyLife.icon}
            title={dailyLife.title}
            description={dailyLife.description}
            image={dailyLife.image}
            />
          ))}
        </section>
        <section className="w-full py-12 bg-gray-50">
          <AdmissionProcessCard/>
        </section>
        <section className="w-full py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">ইসলামিক ভিডিও গ্যালারি</h2>
                    <p className="text-gray-600 leading-relaxed">
                    আমাদের সংগ্রহ থেকে শিক্ষণীয় ইসলামিক লেকচার এবং ইভেন্টগুলি দেখুন। জ্ঞানী স্পিকারদের থেকে শিখুন।
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {islamicVideoData.map ((video, index) => (
                    <IslamicVideoCard
                    key={index}
                    link={video.link}
                    icon={video.icon}
                    title={video.title}
                    boldTitle={video.boldTitle}
                    description={video.description}
                    />

                  ))}
                </div>
            </div>
        </section>
      </div>
    </main>
  );
}
