import { knowledgeData, ourHeritageData } from "@/lib/data";
import OurHeritage from "../components/OurHeritage";
import KnowledgeCard from "../components/KnowledgeCard";
import LibrarySection from "../components/LibrarySection";

const ServicesPage = () => {
  return (
    <div className="bg-green-50">
      <div className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">আমাদের ঐতিহ্য</h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
            আত-তাহফিজ ইন্টারন্যাশনাল মাদ্রাসা জ্ঞান ও বিশ্বাসের যাত্রা
              শতাব্দীর পরম্পরায় সমৃদ্ধ। এখানে ঐতিহ্য ও আধুনিকতার সমন্বয়ে
              ভবিষ্যৎ নেতাদের গড়ে তোলা হয়।
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {ourHeritageData.map((ourHeritage, index) => (
              <OurHeritage
                key={index}
                icon={ourHeritage.icon}
                title={ourHeritage.title}
                description={ourHeritage.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              জ্ঞানচর্চার পৃষ্ঠপোষকতা
            </h2>
            <p className="text-gray-600 mt-4">
              শিক্ষাগত ও আধ্যাত্মিক উন্নয়নের ভারসাম্যের মাধ্যমে আগামী দিনের
              জ্ঞানীদের গড়ে তোলা।
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {knowledgeData.map((knowledge, index) => (
              <KnowledgeCard
                key={index}
                icon={knowledge.icon}
                title={knowledge.title}
                description={knowledge.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">গ্রন্থাগার এবং অনলাইন শিক্ষা
            </h2>
            <p className="text-gray-600 leading-relaxed">
              আমাদের বিস্তৃত গ্রন্থাগার এবং অনলাইন শিক্ষা প্ল্যাটফর্ম আবিষ্কার
              করুন, যা শিক্ষার্থীদের ইসলামী এবং আধুনিক শিক্ষার জন্য প্রয়োজনীয়
              সরঞ্জাম সরবরাহ করে।
            </p>
          </div>
        <LibrarySection/>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
