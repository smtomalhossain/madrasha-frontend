import { curriculumData, hifzCurriculumData, qaumiMadrasaCurriculumData } from "@/lib/data";
import AliyahCurriculumCard from "../components/AliyahCurriculumCard";
import HifzCurriculumCard from "../components/HifzCurriculumCard";

const CurriculumPage = () => {
  return (
    <div className="bg-green-50">
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-600">
              আলিয়া কারিকুলাম
            </h1>
            <p className="text-gray-600 mt-2">
              মাদ্রাসা শিক্ষার বিভিন্ন স্তরসমূহ এবং তাদের বিস্তারিত বিবরণ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumData.map((aliyah, index) => (
              <AliyahCurriculumCard
                key={index}
                title={aliyah.title}
                description={aliyah.description}
                time={aliyah.time}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-600">
              হিফজ কারিকুলাম
            </h1>
            <p className="text-gray-600 mt-2">
              কুরআন হিফজের ধাপসমূহ এবং তাদের বিস্তারিত ব্যাখ্যা
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hifzCurriculumData.map((hifz, index) => (
              <HifzCurriculumCard
                key={index}
                title={hifz.title}
                description={hifz.description}
                time={hifz.time}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-green-700">
              কওমি মাদ্রাসা কারিকুলাম
            </h1>
            <p className="text-gray-600 mt-2">
              কওমি মাদ্রাসার শিক্ষার স্তরসমূহ এবং তাদের সময়কাল
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qaumiMadrasaCurriculumData.map((qaumi, index) => (
              <HifzCurriculumCard
                key={index}
                title={qaumi.title}
                description={qaumi.description}
                time={qaumi.time}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;
