"use client"

import { useState } from 'react';
import Head from 'next/head';
import Button from '../components/Button';
import StudentList from '../student/page';

const Home: React.FC = () => {
  const [showStudentList, setShowStudentList] = useState(false);

  const handleClick = () => {
    setShowStudentList(true);
  };

  const handleCancel = () => {
    setShowStudentList(false);
  };

  const handleSubmit = () => {
    // Add your submit logic here
    alert('Attendance submitted!');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12">
      <Head>
        <title>Student Attendance</title>
        <meta name="description" content="Student attendance tracking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Student Attendance</h1>
        {!showStudentList ? (
          <Button handleClick={handleClick} />
        ) : (
          <>
            <StudentList />
            <div className="mt-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 mr-2 rounded"
              >
                Submit
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Home;

