import FlipCards from "@/components/report/learning-style/FlipCards";
import Purpose from "@/components/report/personality-explore/Purpose";
import {
  LearningStylesUnderstanding_1,
  LearningStylesUnderstanding_2,
} from "@/lib/data";

export default function Page() {
  return (
    <div className="flex justify-center p-2">
      <div className="flex flex-col gap-4 w-full sm:p-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          Understanding Learning Styles
        </h2>
        {/* Introduction Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-extrabold">Introduction</h3>
          <p className="text-md sm:text-lg leading-relaxed text-gray-700">
            Congratulations on taking the first step for personalized Career
            Planning & Assessment! We understand the significance of making
            informed decisions as you navigate your academic journey and future
            career. We are committed to empowering individuals with the tools
            and insights needed to confidently navigate the world of careers and
            education.
          </p>
          <FlipCards />
        </div>

        <div className="p-2">
          <Purpose
            title="The purposes and applications of learning styles in career development include"
            applications={LearningStylesUnderstanding_1}
          />
        </div>
        <div className="p-2">
          <Purpose
            title="The purposes and applications of learning styles in career development include"
            applications={LearningStylesUnderstanding_2}
          />
        </div>
      </div>
    </div>
  );
}
