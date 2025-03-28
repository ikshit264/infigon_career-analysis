import FourDichotomies from "@/components/report/personality-explore/Dichotomies";
import Purpose from "@/components/report/personality-explore/Purpose";

export default function UnderstandingPersonalityPage() {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col gap-4 w-full max-w-screen-lg p-4 sm:p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Understanding Personality Explorer</h2>

        {/* Introduction Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-extrabold">Introduction</h3>
          <p className="text-sm sm:text-md leading-relaxed text-gray-700">
            Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the
            significance of making informed decisions as you navigate your academic journey and future career. We are
            committed to empowering individuals with the tools and insights needed to confidently navigate the world
            of careers and education.
          </p>
        </div>

        {/* MBTI Explanation */}
        <div className="flex flex-col gap-4 mt-4">
          <h3 className="text-md font-medium text-gray-800">
            We understand your personality through the <strong>Myers-Briggs Type Indicator (MBTI)</strong>, a personality
            explorer that helps identify your preferences, strengths, and areas for growth. Developed by Isabel Briggs
            Myers and Katharine Cook Briggs, the MBTI categorizes personality based on four dichotomies. The goal is to
            gain deeper self-awareness, improve personal development, and enhance career planning.
          </h3>
        </div>

        {/* Components */}
        <div className="">
          <FourDichotomies />
        </div>

        <div className="">
          <Purpose />
        </div>
      </div>
    </div>
  );
}
