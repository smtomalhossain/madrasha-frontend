import { contactUsData } from "@/lib/data";
import ContactForm from "../components/ContactForm";
import SocialIcons from "../components/SocialIcons";

interface ContactPageProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ContactPage:React.FC<ContactPageProps> = () => {
  return (
    <div className="bg-green-100  pt-14">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-10">
          <h1 className="text--3xl font-bold text-green-700">যোগাযোগ করুন</h1>
          <p className="text-gray-600 mt-2">
            আপনার যেকোনো প্রশ্ন বা সাহায্যের জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactUsData.map((items, index) =>(
                <div key={index} className="flex flex-col items-center text-center bg-green-100 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                {items.icon}
                 <h2 className="text-xl font-semibold text-green-700">{items.title}</h2>
                 <p className="text-gray-600 mt-2">{items.description}</p>
               </div>
            ))}
        </div>
      </div>
      <div className="w-full py-16 px-4 bg-green-100 flex justify-center items-center">

        <div className="flex flex-col justify-center items-center max-w-2xl w-full">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-green-700 mb-2">আমাদের সাথে যোগাযোগ করুন</h1>
                <p className="text-gray-600">আপনার যেকোনো প্রশ্ন বা মতামত জানাতে নিচের ফর্মটি পূরণ করুন।</p>
            </div>
            <ContactForm/>
        </div>
      </div>
      <SocialIcons/>
    </div>
  );
};

export default ContactPage;
