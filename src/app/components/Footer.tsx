import Image from "next/image";

const Footer = () => {
  return (
  <>
    <div className="flex flex-col items-center justify-center bg-green-50 pt-10 -mb-40 px-5">
      <div className="w-full sm:min-w-[640px] md:min-w-[768px] lg:w-[1000px] rounded-lg overflow-hidden border border-green-500 mx-auto">
        <div className="bg-green-100 shadow-lg rounded-t-lg p-6 w-full  border-b border-green-500 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4 flex items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 384 512"
              className="mr-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
            </svg>
            মেইন ক্যাম্পাস
          </h2>
          <p className="text-gray-700 text-lg mb-2 font-medium">
            কাশিয়ানি বাজার, কাশিয়ানি
          </p>
          <p className="text-gray-700 text-lg flex items-center justify-center font-medium">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="mr-2 text-green-600"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
            </svg>
            +880 1716453952
          </p>
        </div>
        <div className="w-full">
          <div className="relative overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.13768120137388!2d89.71861388314797!3d23.23570255854783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffc9003355034d%3A0xf13ee2c0ef10b2f5!2zQXQgdGFoZml6IGludGVybmF0aW9uYWwgbWFkcmFzaGEga2FzaGlhbmkgR29wYWxnb25qLuCmhuCmpCDgpqTgpr7gprngpqvgpr_gppwg4KaH4Kao4KeN4Kaf4Ka-4Kaw4Kao4KeN4Kav4Ka-4Ka24Kao4Ka-4KayIOCmruCmvuCmpuCnjeCmsOCmvuCmuOCmviwg4KaV4Ka-4Ka24Ka_4Kef4Ka-4Kao4KeALCDgppfgp4vgpqrgpr7gprLgppfgpp7gp43gppzgpaQ!5e0!3m2!1sen!2sbd!4v1739128595186!5m2!1sen!2sbd"
              width="600"
              height="450"
            //   style="border:0"
              loading="lazy"
            //   referrerpolicy="no-referrer-when-downgrade"
              className="w-full h-96 md:h-[450px] border-4 border-green-200 "
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <footer className="bg-green-700 text-white pt-48 py-12">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1">
                    <h2 className="text-2xl font-bold mb-2">আত-তাফিজ ইন্টারন্যাশনাল মাদরাসা</h2>
                    <p className="text-gray-200 text-sm">
                    এক প্রখ্যাত ইসলামিক প্রতিষ্ঠান যা একাডেমিক এবং ধর্মীয় উৎকর্ষতার উপর গুরুত্ব দেয়।
                    </p>
                    <Image className="w-32 mt-4 rounded-full bg-green-300" src="/logo.webp" alt=""  width={100} height={100}/>
                </div>
            </div>
        </div>
        </footer>
        </>
  );
};

export default Footer;
