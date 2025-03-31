import Image from "next/image";

const LearningStyle = () => {
  return (
    <div className="flex flex-col p-2 gap-4">
      <div className="flex gap-2 items-center">
        <Image
          src="/LearningStyle/Ears.svg"
          alt="Ears"
          width={40}
          height={40}
        />
        <h1 className="text-red-600 text-xl">Kinesthetic</h1>
      </div>
      <p className="text-md sm:text-lg leading-relaxed text-gray-700 p-2 sm:px-4">
        Congratulations on taking the first step for personalized Career
        Planning & Assessment! We understand the significance of making informed
        decisions as you navigate your academic journey and future career. We
        are committed to empowering individuals with the tools and insights
        needed to confidently navigate the world of careers and education.
      </p>
    </div>
  );
};

export default LearningStyle;
