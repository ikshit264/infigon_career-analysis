import FourDichotomies from "@/components/report/personality-explore/Dichotomies";
import Purpose from "@/components/report/personality-explore/Purpose";
// import Link from "next/link";

export default function UnderstandingPersonalityExplorerPage() {



  return (
    <div className="flex flex-1">
      <div className="flex flex-col">
        <div className="p-6 flex flex-col gap-4">
          <h2 className=" text-2xl font-bold text-blue-700">
            Understanding Personality Explorer
          </h2>

          <div className="flex flex-col gap-4 ml-2">
            <h3 className=" text-xl font-extrabold ">Introduction</h3>
            <p className=" text-md ml-4 px-2 font-medium">
              Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the
              significance of making informed decisions as you navigate your academic journey and future career. We are
              committed to empowering individuals with the tools and insights needed to confidently navigate the world
              of careers and education.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className=" text-md ml-4 px-2 font-medium ">
              We understand your personality through Myers-Brigg Type Indicator (MBTI) test which is a personality
              explorer (information assessment tool) that helps identify your personality preferences, strengths, and
              areas for growth. Developed by Isabel Briggs Myers and Katharine Cook Briggs, the MBTI categorizes your
              personality type based on four dichotomies. The goal is to gain deeper self-awareness, improve personal
              development, and enhance career planning.
            </h3>
          </div>

          <FourDichotomies/>

          <Purpose/>
          
        </div>

        
      </div>
    </div>
  );
}