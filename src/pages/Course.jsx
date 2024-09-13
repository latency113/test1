import React from 'react';
import CourseCard from '../components/CourseCard';
import Layout from '../components/Layout';

const Course = () => {
  const course = [
    {
      image: "basic-react-native.png",
      name: "Basic React Native",
      time: "ระยะเวลา (วัน): 5",
      price: "ราคา 7,500 บาท",
    },
    {
      image: "powerbi-dashboard.png",
      name: "Power BI Dashboard",
      time: "ระยะเวลา (วัน): 4",
      price: "ราคา 5,500 บาท",
    },
    {
      image: "ui-design-with-figma.png",
      name: "UI Design with Figma",
      time: "ระยะเวลา (วัน): 3",
      price: "ราคา 5,000 บาท",
    },
    {
      image: "cross-platform-with-flutter.png",
      name: "Cross Platfrom with Flutter",
      time: "ระยะเวลา (วัน): 5",
      price: "ราคา 6,500 บาท",
    },
  ];

  return (
    <>
      <Layout>
        <div className="p-4 text-center font-bold text-2xl">หลักสูตรที่เปิดสอน</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 py-2">
          {course.map((f) => (
            <CourseCard key={f.name} {...f} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Course;
