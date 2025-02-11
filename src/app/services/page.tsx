import { ourHeritageData } from "@/lib/data";
import OurHeritage from "../components/OurHeritage";

const ServicesPage = () => {
  return (
    <div className="bg-green-50">
      <div className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">আমাদের ঐতিহ্য</h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed max-w-3xl mx-auto">
            আত-তাফিজ ইন্টারন্যাশনাল মাদরাসা মাদ্রাসার জ্ঞান ও বিশ্বাসের যাত্রা
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
    </div>
  );
};

export default ServicesPage;
