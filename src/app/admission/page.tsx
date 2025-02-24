import React from "react";

const Page = () => {
  return (
    <div className="w-full relative bg-green-100 py-10 ">
      <div className="container mx-auto px-3">
        <form
          action=""
          className="w-full  mx-auto bg-white p-8 rounded-md shadow-lg border"
        >
          <div
            style={{
              position: "fixed",
              zIndex: 9999,
              inset: "16px",
              pointerEvents: "none",
            }}
          ></div>
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
            Add Student Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="w-full">
              <label className="block font-medium text-green-700 mb-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  className="inline mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
                Student Name (English)
              </label>
              <input
                placeholder="Enter student name in English"
                className="w-full p-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                name="studentNameEnglish"
              ></input>
            </div>

            <div className="w-full">
              <label className="block font-medium text-green-700 mb-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  className="inline mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                </svg>
                ছাত্র/ছাত্রীর নাম (বাংলা)
              </label>
              <input
                placeholder="বাংলা নাম লিখুন"
                className="w-full p-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                name="studentNameEnglish"
              ></input>
            </div>
            <div className="w-full">
              <label className="block font-medium text-green-700 mb-2">
                Father`s Name
              </label>
              <input
                placeholder="Enter father's name"
                className="w-full p-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                name="studentNameEnglish"
              ></input>
            </div>
            <div className="w-full">
              <label className="block font-medium text-green-700 mb-2">
                Mother`s Name
              </label>
              <input
                placeholder="Enter mother's name"
                className="w-full p-2 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                type="text"
                name="studentNameEnglish"
              ></input>
            </div>

            <div className="w-full">
              <label className="block font-medium text-green-700 mb-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  className="inline mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                </svg>
                Date of Birth
              </label>
              <input
                className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                type="date"
                name="dateOfBirth"
              ></input>
            </div>

            <div className="w-full">
              <label className="block font-medium text-green-700 mb-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 352 512"
                  className="inline mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
                </svg>
                Blood Group
              </label>
              <select
                name="bloodGroup"
                className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block font-medium text-green-700 mb-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 640 512"
                  className="inline mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 224v272c0 8.84 7.16 16 16 16h80V192H32c-17.67 0-32 14.33-32 32zm360-48h-24v-40c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v64c0 4.42 3.58 8 8 8h48c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zm137.75-63.96l-160-106.67a32.02 32.02 0 0 0-35.5 0l-160 106.67A32.002 32.002 0 0 0 128 138.66V512h128V368c0-8.84 7.16-16 16-16h96c8.84 0 16 7.16 16 16v144h128V138.67c0-10.7-5.35-20.7-14.25-26.63zM320 256c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm288-64h-64v320h80c8.84 0 16-7.16 16-16V224c0-17.67-14.33-32-32-32z"></path>
                </svg>
                Section
              </label>
              <select
                name="section"
                className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select section</option>
                <option value="alia">Alia</option>
                <option value="hifz">Hifz</option>
                <option value="thaksisi">Thaksisi</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block font-medium text-green-700 mb-2">
                Class
              </label>
              <select
                name="class"
                className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="" disabled>
                  Select a class
                </option>
                <option value="nursery">Nursery</option>
                <option value="kg">KG</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="four">Four</option>
                <option value="five">Five</option>
                <option value="six">Six</option>
                <option value="seven">Seven</option>
                <option value="eight">Eight</option>
                <option value="nine">Nine</option>
                <option value="ten">Ten</option>
                <option value="eleven">Eleven</option>
                <option value="twelve">Twelve</option>
                <option value="hifz">Hifz</option>
                <option value="norani">Norani</option>
                <option value="fazil">Fazil</option>
                <option value="Thaksisi">Thaksisi</option>
                <option value="kamil">Kamil</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block font-medium text-green-700 mb-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 192 512"
                  className="inline mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"></path>
                </svg>
                Gender
              </label>
              <select
                name="gender"
                className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="w-full">
              <label className="block font-medium text-green-700 mb-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 576 512"
                  className="inline mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                </svg>
                Residential Status
              </label>
              <select
                name="residentialStatus"
                className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select status</option>
                <option value="abashik">Abashik</option>
                <option value="onabashik">Onabashik</option>
                <option value="daycare">Daycare</option>
              </select>
            </div>
            <div className="w-full col-span-1 md:col-span-2">
              <label className="block font-medium text-green-700 mb-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 384 512"
                  className="inline mr-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                </svg>
                Address
              </label>
              <textarea
                name="address"
                placeholder="Enter address"
                className="w-full p-1 px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>
          </div>
          <div className="my-4 max-w-sm">
            <div className="w-full flex flex-col gap-3">
              <label className="block text-sm text-green-600 mb-2">
                Upload Image
              </label>
              <div className="w-full relative flex-col cursor-pointer h-auto min-h-[150px] rounded-md overflow-hidden border flex justify-center items-center">
                <div className="w-full max-h-[100px] min-h-[150px] flex flex-col justify-center items-center h-full">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    className="text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56"
                    ></path>
                    <path
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="m320 255.79-64-64-64 64m64 192.42V207.79"
                    ></path>
                  </svg>
                  <small>Upload Student Image</small>
                </div>
                <div className="flex flex-col gap-2">
                  <input
                    accept=".jpg, .jpeg, .png, .webp, .svg"
                    className="absolute top-0 left-0 cursor-pointer z-[99999] w-full h-full opacity-0"
                    type="file"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full flex justify-center items-center gap-3 bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 transition duration-300">Submit</button>
        </form>
        {/* <StudentList/> */}
      </div>
    </div>
  );
};

export default Page;
