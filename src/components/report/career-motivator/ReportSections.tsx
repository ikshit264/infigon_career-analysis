import { JSX } from "react";
import Conclusion from "../Conclusion";
import YourScore from "./YourScore";

export const reportSections: Record<string, JSX.Element> = {
  YourScore: <YourScore/>,
  Conclusion : <Conclusion color="#FF4040" content={"You thrive in structured, people-oriented roles where your strengths in organization, empathy, and teamwork can shine. By embracing personal growth strategies, you can mitigate weaknesses and enhance your career success, as demonstrated by real world examples and case studies. Understanding and developing your MBTI type can lead to fulfilling and impactful career paths."}/>
};
