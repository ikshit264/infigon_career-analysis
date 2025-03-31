import { ThumbsUp } from "lucide-react";
import { Book, Brain, Compass, Heart, Lightbulb } from "lucide-react";

export const sidebarItems = [
  {
    id: "test1",
    title: "TEST 1",
    path: "/report/personality-explorer",
    icon: "🧠",
    subItems: [
      {
        id: "understanding",
        title: "Understanding Personality Explorer",
        path: "/report/personality-explorer/understanding",
        subSubItems: [],
      },
      {
        id: "types",
        title: "Personality Types",
        path: "/report/personality-explorer/types",
        subSubItems: [],
      },
      {
        id: "result",
        title: "Your Result",
        path: "/report/personality-explorer/result",
        subSubItems: [],
      },
    ],
  },
  {
    id: "test2",
    title: "TEST 2",
    path: "/report/interest-explorer",
    icon: "🔍",
    subItems: [
      {
        id: "understanding-interest",
        title: "Understanding Interest Explorer",
        path: "/report/interest-explorer/understanding",
        subSubItems: [],
      },
      {
        id: "interest-areas",
        title: "Interest Areas",
        path: "/report/interest-explorer/areas",
        subSubItems: [],
      },
      {
        id: "interest-result",
        title: "Your Result",
        path: "/report/interest-explorer/result",
        subSubItems: [],
      },
    ],
  },
  {
    id: "test3",
    title: "TEST 3",
    path: "/report/career-motivators",
    icon: "🚀",
    subItems: [
      {
        id: "understanding-motivators",
        title: "Understanding Career Motivators",
        path: "/report/career-motivators/understanding",
        subSubItems: [],
      },
      {
        id: "motivator-types",
        title: "Motivator Types",
        path: "/report/career-motivators/types",
        subSubItems: [],
      },
      {
        id: "motivator-result",
        title: "Your Result",
        path: "/report/career-motivators/result",
        subSubItems: [],
      },
    ],
  },
  {
    id: "test4",
    title: "TEST 4",
    path: "/report/emotional-intelligence",
    icon: "❤️",
    subItems: [
      {
        id: "understanding-eq",
        title: "Understanding Emotional Intelligence",
        path: "/report/emotional-intelligence/understanding",
        subSubItems: [],
      },
      {
        id: "eq-components",
        title: "EQ Components",
        path: "/report/emotional-intelligence/components",
        subSubItems: [],
      },
      {
        id: "eq-result",
        title: "Your Result",
        path: "/report/emotional-intelligence/result",
        subSubItems: [],
      },
    ],
  },
  {
    id: "test5",
    title: "TEST 5",
    path: "/report/learning-styles",
    icon: "📚",
    subItems: [
      {
        id: "understanding-learning",
        title: "Understanding Learning Styles",
        path: "/report/learning-styles/understanding",
        subSubItems: [],
      },
      {
        id: "style-types",
        title: "Learning Style Types",
        path: "/report/learning-styles/types",
        subSubItems: [],
      },
      {
        id: "learning-result",
        title: "Your Result",
        path: "/report/learning-styles/result",
        subSubItems: [],
      },
    ],
  },
];

export const testSidebarItems = [
  {
    id: 1,
    title: "Personality Explorer",
    icon: <Compass size={32} />,
    path: "/report/personality-explore",
    subItems: [
      {
        id: "understanding",
        title: "Understanding Personality Explorer",
        path: "/report/personality-explore/understanding",
      },
      {
        id: "types",
        title: "Personality Types",
        path: "/report/personality-explore/types",
      },
      {
        id: "result",
        title: "Your Result",
        path: "/report/personality-explore/results",
      },
    ],
  },
  {
    id: 2,
    title: "Interest Explorer",
    icon: <Book size={32} />,
    path: "/report/interest-explore",
    subItems: [
      {
        id: "understanding-interest",
        title: "Understanding Interest Explorer",
        path: "/report/interest-explore/understanding",
      },
      {
        id: "interest-areas",
        title: "RIASEC Model",
        path: "/report/interest-explore/riasec",
      },
      {
        id: "interest-result",
        title: "Your Result",
        path: "/report/interest-explore/results",
      },
    ],
  },
  {
    id: 3,
    title: "Career Motivators",
    icon: <Brain size={32} />,
    path: "/report/career-motivator",
    subItems: [
      {
        id: "understanding-motivators",
        title: "Understanding Career Motivators",
        path: "/report/career-motivator/understanding",
      },
      {
        id: "motivator-types",
        title: "Motivator Types",
        path: "/report/career-motivator/types",
      },
      {
        id: "motivator-result",
        title: "Your Result",
        path: "/report/career-motivator/results",
      },
    ],
  },
  {
    id: 4,
    title: "Emotional Intelligence",
    icon: <Heart size={32} />,
    path: "/report/emotional-intelligence",
    subItems: [
      {
        id: "understanding-eq",
        title: "Understanding Emotional Intelligence",
        path: "/report/emotional-intelligence/understanding",
      },
      {
        id: "eq-components",
        title: "EQ Components",
        path: "/report/emotional-intelligence/test",
      },
      {
        id: "eq-result",
        title: "Your Result",
        path: "/report/emotional-intelligence/results",
      },
    ],
  },
  {
    id: 5,
    title: "Learning Styles",
    icon: <Lightbulb size={32} />,
    path: "/report/learning-style",
    subItems: [
      {
        id: "style-types",
        title: "Learning Style Types",
        path: "/report/learning-style/understanding",
      },
      {
        id: "learning-result",
        title: "Your Result",
        path: "/report/learning-style/results",
      },
    ],
  },
];

export const personalityTabs = [
  { id: "Personality", label: "Personality" },
  { id: "Characteristics", label: "Characteristics" },
  { id: "StrengthWeaknes", label: "Strengths/ Weaknesses" },
  { id: "WorkStyle", label: "WorkStyle" },
  { id: "Preferences", label: "Preferences" },
  { id: "InterPersonalInteraction", label: "Interpersonal Interaction" },
  { id: "WorkCulture", label: "Work Culture" },
  { id: "Roles", label: "Roles" },
  { id: "CaseStudies", label: "Case Studies" },
  // { id: "FamousPersonalities", label: "FamousPersonalities" },
  // { id: "Recomendation", label: "Recomendation" },
  { id: "Conclusion", label: "Conclusion" },
];

export const careerOptions = [
  { id: 1, title: "Engineer" },
  { id: 2, title: "Doctor" },
  { id: 3, title: "Teacher" },
];

export const personalityTraits = [
  { id: "intj", label: "INTJ Personality" },
  { id: "strategic", label: "STRATEGIC" },
  { id: "analytical", label: "ANALYTICAL" },
  { id: "independent", label: "INDEPENDENT" },
];

export const userReport = {
  title: "Your Career Analysis Report",
  description:
    "Your Report ensures a complete understanding of your strengths, areas for growth, and ideal career fit.",
  topCareerOptions: [
    { id: 1, title: "Engineer" },
    { id: 2, title: "Doctor" },
    { id: 3, title: "Teacher" },
  ],
  image : '/Logos/logo1.png',
  personalityType: {
    title: "Architect",
    traits: ["INTJ Personality", "STRATEGIC", "ANALYTICAL", "INDEPENDENT"],
    description:
      "Congratulations on taking the first step for personalized Career Planning & Assessment! We understand the significance of making informed decisions as you navigate your academic journey and future career. We are committed to empowering individuals with the tools and insights needed to confidently navigate the world of careers and education.",
  },
};

export const counsellors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Career Counsellor",
    rating: 4.9,
    image: "/placeholder.svg?height=48&width=48",
    location: "New York, NY",
    distance: "5 miles away",
  },
  {
    id: 2,
    name: "Michael Chen, PhD",
    specialty: "Education Specialist",
    rating: 4.8,
    image: "/placeholder.svg?height=48&width=48",
    location: "Boston, MA",
    distance: "Online only",
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Career Development",
    rating: 4.7,
    image: "/placeholder.svg?height=48&width=48",
    location: "Chicago, IL",
    distance: "12 miles away",
  },
  {
    id: 4,
    name: "James Wilson, MA",
    specialty: "Career Transition",
    rating: 4.9,
    image: "/placeholder.svg?height=48&width=48",
    location: "San Francisco, CA",
    distance: "Online only",
  },
];

export const testsList = [
  {
    id: 1,
    title: "Personality Assessment",
    description:
      "Discover your personality type and how it influences your career choices",
    duration: "15 minutes",
    questions: 45,
    completed: true,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    title: "Interest Explorer",
    description: "Identify your key interests and matching career paths",
    duration: "10 minutes",
    questions: 30,
    completed: true,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    title: "Career Motivators",
    description: "Understand what drives your career decisions",
    duration: "12 minutes",
    questions: 35,
    completed: true,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    title: "Emotional Intelligence",
    description:
      "Assess your emotional intelligence and its impact on your career",
    duration: "15 minutes",
    questions: 40,
    completed: true,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    title: "Learning Styles",
    description: "Discover how you learn best and optimal work environments",
    duration: "8 minutes",
    questions: 25,
    completed: true,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    title: "Work Values Assessment",
    description: "Identify your core work values and ideal workplace culture",
    duration: "10 minutes",
    questions: 30,
    completed: false,
    image: "/placeholder.svg?height=80&width=80",
  },
];

export const sessionsList = [
  {
    id: 1,
    counsellorName: "Dr. Sarah Johnson",
    counsellorImage: "/placeholder.svg?height=48&width=48",
    date: "March 15, 2024",
    time: "2:00 PM - 3:00 PM",
    topic: "Career Path Planning",
    status: "completed",
    notes:
      "Discussed potential career paths in engineering and next steps for education",
  },
  {
    id: 2,
    counsellorName: "Michael Chen, PhD",
    counsellorImage: "/placeholder.svg?height=48&width=48",
    date: "March 28, 2024",
    time: "10:00 AM - 11:00 AM",
    topic: "Education Planning",
    status: "upcoming",
    notes: "Discussed potential career paths in engineering and next steps for education",
  },
  {
    id: 3,
    counsellorName: "Dr. Emily Rodriguez",
    counsellorImage: "/placeholder.svg?height=48&width=48",
    date: "February 20, 2024",
    time: "1:00 PM - 2:00 PM",
    topic: "Resume Review",
    status: "completed",
    notes:
      "Reviewed resume and suggested improvements for engineering positions",
  },
];

export const careerLibraryItems = [
  {
    id: 1,
    title: "Software Engineer",
    description:
      "Design, develop, and maintain software systems and applications",
    salary: "$70,000 - $150,000",
    education: "Bachelor's degree in Computer Science or related field",
    outlook: "Excellent",
    category: "Technology",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 2,
    title: "Data Scientist",
    description:
      "Analyze and interpret complex data to help organizations make better decisions",
    salary: "$80,000 - $160,000",
    education:
      "Master's or PhD in Statistics, Computer Science, or related field",
    outlook: "Excellent",
    category: "Technology",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 3,
    title: "Physician",
    description: "Diagnose and treat injuries and illnesses in patients",
    salary: "$150,000 - $300,000",
    education: "Medical degree (MD or DO) and residency",
    outlook: "Good",
    category: "Technology",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 4,
    title: "High School Teacher",
    description:
      "Educate students in specific subject areas and prepare them for future education",
    salary: "$45,000 - $85,000",
    education: "Bachelor's degree and teaching certification",
    outlook: "Stable",
    category: "Education",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 5,
    title: "Mechanical Engineer",
    description:
      "Design, develop, build, and test mechanical devices and systems",
    salary: "$65,000 - $120,000",
    education: "Bachelor's degree in Mechanical Engineering",
    outlook: "Good",
    category: "Engineering",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 6,
    title: "UX Designer",
    description:
      "Create meaningful and relevant experiences for users of products and services",
    salary: "$60,000 - $130,000",
    education: "Bachelor's degree in Design, HCI, or related field",
    outlook: "Excellent",
    category: "Design",
    image: "/placeholder.svg?height=120&width=120",
  },
];

export const personalityTypes = [
  {
    id: "inspector",
    name: "Inspector",
    code: "ISTJ",
    image: "/inspector.svg",
    description:
      "Logical, responsible, and detail-oriented, Inspectors excel at organization and uphold traditions with a strong sense of duty.",
  },
  {
    id: "protector",
    name: "Protector",
    code: "ISFJ",
    image: "/protector.svg",
    description:
      "Kind-hearted and dedicated, Protectors prioritize harmony, supporting others with a deep sense of loyalty and responsibility.",
  },
  {
    id: "artist",
    name: "Artist",
    code: "ISFP",
    image: "/artist.svg",
    description:
      "Creative and free-spirited, Artists embrace new experiences and express themselves through art, music, or unconventional thinking.",
  },
  {
    id: "consul",
    name: "Consul",
    code: "ESFJ",
    image: "/consul.svg",
    description:
      "Warm and sociable, Consuls thrive in social settings, fostering connections and ensuring that everyone feels valued.",
  },
  {
    id: "virtuoso",
    name: "Virtuoso",
    code: "ISTP",
    image: "/virtuoso.svg",
    description:
      "Practical and hands-on, Virtuosos enjoy solving problems through direct action, excelling in mechanics, engineering, and crafts.",
  },
  {
    id: "entrepreneur",
    name: "Entrepreneur",
    code: "ESTP",
    image: "/entrepreneur.svg",
    description:
      "Energetic and adventurous, Entrepreneurs thrive in fast-paced environments, using quick thinking to seize opportunities.",
  },
  {
    id: "entertainer",
    name: "Entertainer",
    code: "ESFP",
    image: "/entertainer.svg",
    description:
      "Lively and charismatic, Entertainers bring joy to those around them, living in the moment and embracing life's excitement.",
  },
  {
    id: "executive",
    name: "Executive",
    code: "ESTJ",
    image: "/executive.svg",
    description:
      "Strong-willed and organized, Executives excel at leadership, enforcing rules, and ensuring efficiency in structured environments.",
  },
  {
    id: "advocate",
    name: "Advocate",
    code: "INFJ",
    image: "/advocate.svg",
    description:
      "Deeply intuitive and idealistic, Advocates strive to make a positive impact on the world through thoughtful insight and empathy.",
  },
  {
    id: "mediator",
    name: "Mediator",
    code: "INFP",
    image: "/mediator.svg",
    description:
      "Compassionate and imaginative, Mediators seek deeper meaning in life, valuing creativity, personal growth, and harmony.",
  },
  {
    id: "campaigner",
    name: "Campaigner",
    code: "ENFP",
    image: "/campaigner.svg",
    description:
      "Enthusiastic and optimistic, Campaigners inspire others with their energy, curiosity, and passion for exploring possibilities.",
  },
  {
    id: "protagonist",
    name: "Protagonist",
    code: "ENFJ",
    image: "/protagonist.svg",
    description:
      "Inspiring and charismatic, Protagonists lead with vision, motivating others to reach their potential and create meaningful change.",
  },
  {
    id: "architect",
    name: "Architect",
    code: "INTJ",
    image: "/architect.svg",
    description:
      "Strategic and independent, Architects excel at long-term planning, constantly seeking innovative ways to improve systems.",
  },
  {
    id: "thinker",
    name: "Thinker",
    code: "INTP",
    image: "/thinker.svg",
    description:
      "Curious and analytical, Thinkers love to explore abstract ideas, challenging conventional wisdom to seek deeper understanding.",
  },
  {
    id: "debater",
    name: "Debater",
    code: "ENTP",
    image: "/debater.svg",
    description:
      "Witty and bold, Debaters enjoy intellectual challenges, engaging in lively discussions to refine ideas and push boundaries.",
  },
  {
    id: "commander",
    name: "Commander",
    code: "ENTJ",
    image: "/commander.svg",
    description:
      "Determined and strategic, Commanders are natural leaders who confidently drive projects forward with efficiency and vision.",
  },
];

export const personality_characteristics = [
  {
    id: 1,
    title: "Strategic and Analytical",
    content:
      "They are deep thinkers who excel at analyzing complex problems and devising effective solutions. With a keen eye for patterns and trends, they make well-informed decisions based on logic and data. Their ability to strategize helps them succeed in leadership roles, research, and problem-solving tasks. They often enjoy intellectual debates and are constantly seeking ways to improve efficiency and effectiveness in various aspects of life.",
  },
  {
    id: 2,
    title: "Independent and Visionary",
    content:
      "These individuals are forward-thinkers who march to the beat of their own drum. They value their freedom and prefer to carve their own paths rather than follow conventional norms. With a strong sense of creativity and innovation, they often pioneer new ideas and projects. Their visionary mindset allows them to see the bigger picture, making them excellent entrepreneurs, inventors, and thought leaders. They thrive in environments that encourage originality and self-expression.",
  },
  {
    id: 3,
    title: "Logical and Rational",
    content:
      "Highly objective and practical, they prioritize facts and reason over emotions when making decisions. They have a methodical approach to problem-solving and rely on evidence-based thinking. Their ability to remain composed under pressure makes them excellent in technical fields, law, and strategic planning. They are natural skeptics who prefer to question assumptions and base their beliefs on solid proof rather than intuition or emotions.",
  },
  {
    id: 4,
    title: "Goal-Oriented and Determined",
    content:
      "They are highly motivated individuals who set ambitious goals and pursue them with unwavering determination. Their strong work ethic and perseverance make them successful in achieving what they set their minds to. They are disciplined, focused, and often inspire others with their drive. Whether in personal growth, academics, or career pursuits, they excel in structured environments where their efforts lead to tangible results. Obstacles and setbacks do not deter them; instead, they see challenges as opportunities to grow stronger.",
  },
  {
    id: 5,
    title: "Confident and Assertive",
    content:
      "They possess a strong sense of self-assurance and are not afraid to express their opinions or stand up for their beliefs. Their natural confidence allows them to take charge in leadership roles, influence others, and navigate social situations with ease. They are excellent communicators who can inspire and motivate those around them. Their assertiveness helps them set clear boundaries and advocate for their needs while also respecting the perspectives of others. They thrive in roles that require negotiation, public speaking, or management.",
  },
];

export const StrengthWeaknessData = [
  {
    id: 1,
    title: "Strategic Thinking",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    id: 2,
    title: "Problem Solving",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    id: 3,
    title: "Independence",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    id: 4,
    title: "Visionary Leadership",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    id: 5,
    title: "Efficiency",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
];

export const WorkStyleData = [
  {
    id: 1,
    title: "Strategic",
    content:
      "They have a big-picture mindset and excel at planning and executing long-term goals. These individuals are forward-thinking and thrive in environments where they can anticipate challenges and devise innovative solutions. They are excellent at setting priorities, managing resources effectively, and making calculated decisions that align with their vision. Their ability to connect ideas and foresee potential outcomes makes them strong leaders, planners, and problem-solvers in any organization.",
  },
  {
    id: 2,
    title: "Analytical",
    content:
      "They approach problems methodically, breaking down complex issues into manageable parts to find logical and data-driven solutions. These individuals are detail-oriented, highly observant, and enjoy diving deep into facts and figures. They excel in roles that require critical thinking, research, and precision. Their ability to remain objective and consider multiple perspectives helps them make well-informed decisions. They are invaluable in areas such as data analysis, research, engineering, and finance.",
  },
  {
    id: 3,
    title: "Independent",
    content:
      "They prefer working autonomously and take ownership of their responsibilities without constant supervision. These individuals are self-motivated, resourceful, and thrive in environments that allow them the freedom to explore their own methods. They are highly disciplined and value efficiency, often seeking innovative ways to complete tasks. Their ability to manage their workload and think outside the box makes them ideal for entrepreneurship, freelancing, and leadership roles where initiative is crucial.",
  },
  {
    id: 4,
    title: "Results-Driven",
    content:
      "They are highly focused on achieving goals and delivering measurable outcomes. These individuals are motivated by success and take a proactive approach to their work, ensuring efficiency and high performance. They thrive in fast-paced environments where productivity and achievement are valued. Their ability to set clear objectives, track progress, and stay committed to deadlines makes them excellent in sales, project management, business development, and competitive fields where tangible results matter.",
  },
];

export const PreferencesData = {
  Title: "Intellectual Stimulation",
  Data:[
    "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  ],
  icon: <ThumbsUp />,
}

export const PreferencesData_1 = [
  {
    title: "Intellectual Stimulation",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    icon: <ThumbsUp />,
  },
  { title: "TEST 2", content: "Interest Explorer", icon: <ThumbsUp /> },
  {
    title: "Autonomy",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    icon: <ThumbsUp />,
  },
  { title: "Innovation", content: "TEST 3", icon: <ThumbsUp /> },
  {
    title: "Career Motivators",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    icon: <ThumbsUp />,
  },
  {
    title: "Efficiency",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    icon: <ThumbsUp />,
  },
];


export const InterPersonalInteraction = [
  {
    title: "Direct",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    title: "Assertive",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    title: "Reserved",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    title: "Objective",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    title: "Visionary",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
];

export const WorkCultureData = [
  {
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
];

export const RoleData = [
  {
    id: 1,
    title: "Strategic Planning and Management",
    content:
      "Individuals in this role excel at setting long-term goals, creating structured plans, and ensuring that resources are effectively allocated to achieve success. They have a keen ability to anticipate future trends, analyze risks, and develop contingency plans. These professionals thrive in decision-making positions, helping organizations navigate uncertainty while maintaining efficiency and profitability. Their strong leadership, organizational, and problem-solving skills make them crucial for executive roles, operations management, and corporate strategy development.",
  },
  {
    id: 2,
    title: "Research and Analysis",
    content:
      "This role requires a deep curiosity for uncovering insights, analyzing data, and making informed decisions based on evidence. Individuals in this category have strong problem-solving skills and an analytical mindset, allowing them to break down complex information into actionable strategies. They are detail-oriented and thrive in roles that involve conducting experiments, interpreting trends, and making data-driven recommendations. Their expertise is valuable in fields such as market research, scientific research, business intelligence, and financial analysis.",
  },
  {
    id: 3,
    title: "Innovation and Technology",
    content:
      "Individuals in this role are forward-thinkers who drive change through new ideas and technological advancements. They thrive in dynamic environments where creativity, experimentation, and continuous improvement are encouraged. Whether developing cutting-edge software, designing innovative products, or optimizing systems for efficiency, they have a passion for problem-solving and innovation. Their adaptability and technical expertise make them ideal for roles in software development, artificial intelligence, engineering, and product design.",
  },
  {
    id: 4,
    title: "Leadership and Entrepreneurship",
    content:
      "This role is suited for individuals who take initiative, inspire others, and are driven to create and lead successful ventures. They possess strong decision-making abilities, resilience, and a vision for growth. Whether leading a team, managing a business, or launching a startup, they are adept at taking calculated risks and adapting to challenges. Their skills in communication, strategic thinking, and resource management make them valuable in executive leadership, business ownership, and organizational development.",
  },
];

export const CaseStudiesData = [
  {
    title: "Entrepreneurship",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    title: "Strategic Planing",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
];

export const FamousPersonalitiesData = [
  {
    title: "Famous Personalities",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    title: "Fitcional Characters",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
];

export const RecomendationData = [
  {
    title: "Flexibility",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    title: "Emotional Intelligence",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    title: "Collabaration",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
  {
    title: "Patience",
    content:
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
  },
];

export const ConclussionData =
  "You thrive in structured, people-oriented roles where your strengths in organization, empathy, and teamwork can shine. By embracing personal growth strategies, you can mitigate weaknesses and enhance your career success, as demonstrated by real-world examples and case studies. Understanding and developing your MBTI type can lead to fulfilling and impactful career paths.";

export const originalChartData = {
  A: 60,
  B: 60,
  C: 60,
  D: 60,
  E: 60,
  F: 60,
};

export const convertedChartData = Object.entries(originalChartData).map(
  ([name, value]) => ({
    name,
    value,
  })
);

export const PersonalityExploreUnderstanding = [
  {
    id: "self-assessment",
    title: "Self Assessment",
    description:
      "Focuses on concrete, tangible information and present realities.",
  },
  {
    id: "leadership-development",
    title: "Leadership Development",
    description:
      "Develop leadership skills with practical insights and strategies.",
  },
  {
    id: "career-alignment",
    title: "Career Alignment",
    description:
      "Discover career paths that align with your strengths and interests.",
  },
  {
    id: "career-planning",
    title: "Career Planning",
    description:
      "Strategically plan your career growth based on MBTI insights.",
  },
  {
    id: "team-building",
    title: "Team Building",
    description:
      "Improve collaboration and teamwork through personality insights.",
  },
  {
    id: "conflict-resolution",
    title: "Conflict Resolution",
    description:
      "Enhance conflict resolution skills using personality-based strategies.",
  },
  {
    id: "improved-communication",
    title: "Improved Communication",
    description:
      "Understand different communication styles for better interactions.",
  },
  {
    id: "strength-identification",
    title: "Strength Identification",
    description:
      "Recognize and utilize your strengths effectively in professional settings.",
  },
  {
    id: "personal-growth",
    title: "Personal Growth",
    description:
      "Use MBTI insights for continuous self-improvement and development.",
  },
];

export const IntrestExplorerTabs = [
  { id: "Personality", label: "Personality" },
  { id: "Prefrences", label: "Prefrences" },
  { id: "SkillsAndStrength", label: "Skills And Strength" },
  { id: "PreforedWorkEnviornment", label: "Prefored Work Enviornment" },
  { id: "InteractionStyle", label: "Interaction Style" },
  { id: "Conclusion", label: "Conclusion" },
];

export const IntrestExploreRIASECModel_1 = [
  {
    id: "self-assessment",
    title: "Self Assessment",
    description:
      "Focuses on concrete, tangible information and present realities.",
  },
  {
    id: "leadership-development",
    title: "Leadership Development",
    description:
      "Develop leadership skills with practical insights and strategies.",
  },
  {
    id: "career-alignment",
    title: "Career Alignment",
    description:
      "Discover career paths that align with your strengths and interests.",
  },
];

export const IntrestExploreRIASECModel_2 = [
  {
    id: "leadership-development",
    title: "Leadership Development",
    description:
      "Develop leadership skills with practical insights and strategies.",
  },
  {
    id: "career-alignment",
    title: "Career Alignment",
    description:
      "Discover career paths that align with your strengths and interests.",
  },
  {
    id: "career-planning",
    title: "Career Planning",
    description:
      "Strategically plan your career growth based on MBTI insights.",
  },
  {
    id: "team-building",
    title: "Team Building",
    description:
      "Improve collaboration and teamwork through personality insights.",
  },
  {
    id: "conflict-resolution",
    title: "Conflict Resolution",
    description:
      "Enhance conflict resolution skills using personality-based strategies.",
  },
];

export const IntrestExplorerRealisticTraits = [
  "Practical and Hands-On",
  "Problem-solvers who prefer tangible results",
  "Enjoying work with tools and machinery",
  "Value efficiency and effectiveness in tasks",
];

export const IntrestExplorePrefrences = [
  "Prefer tasks that involve physical work and create outcomes.",
  "Prefer tasks that involve physical work and create outcomes.",
  "Prefer tasks that involve physical work and create outcomes.",
  "Prefer tasks that involve physical work and create outcomes.",
];

export const IntrestExploreSkillsAndStrength = [
  "Manual dexterity and technical profiency.",
  "Manual dexterity and technical profiency.",
  "Manual dexterity and technical profiency.",
  "Manual dexterity and technical profiency.",
];

export const IntrestExplorePreforedWorkEnviornment = [
  "Construction sites, manufacturing plants or workshops.",
  "Construction sites, manufacturing plants or workshops.",
  "Construction sites, manufacturing plants or workshops.",
  "Construction sites, manufacturing plants or workshops.",
];

export const IntrestExploreeInteractionStyle = [
  "Direct and straight forward communication",
  "Direct and straight forward communication",
  "Direct and straight forward communication",
  "Direct and straight forward communication",
];

export const CareerMotivatorsTOP10 = [
  { id: 1, name: "Achievement and Results", color: "#19A7CE" },
  { id: 2, name: "Helping Others", color: "#A76D19" },
  { id: 3, name: "Financial Rewards", color: "#3CCF91" },
  { id: 4, name: "Creativity and Innovation", color: "#FFD700" },
  { id: 5, name: "Security and Stability", color: "#7D35E3" },
  { id: 6, name: "Leadership and Influence", color: "#2892F9" },
  { id: 7, name: "Continuous Learning", color: "#0D2E63" },
  { id: 8, name: "Independence", color: "#E974D2" },
  { id: 9, name: "Teamwork and Collaboration", color: "#9B6C61" },
  { id: 10, name: "Flexibility and Work-Life Balance", color: "#E78C3C" },
];

export const CareerMotivatorsYourScore = [
  {
    id: 1,
    title: "Achievement and Results",
    score: 28,
    pros: [
      "Highly driven to meet and exceed goals.",
      "Enjoys measurable success and recognition.",
    ],
    cons: [
      "May experience stress from high expectations.",
      "Can be overly competitive at times.",
    ],
    color: "#DBEAFE",
    scoreColor: "#EF4444",
  },
  {
    id: 2,
    title: "Helping Others",
    score: 22,
    pros: [
      "Finds fulfillment in making a difference.",
      "Strong sense of empathy and compassion.",
    ],
    cons: [
      "Can become emotionally invested in others' issues.",
      "Might struggle to set personal boundaries.",
    ],
    color: "#DCFCE7",
    scoreColor: "#22C55E",
  },
  {
    id: 3,
    title: "Financial Rewards",
    score: 30,
    pros: [
      "Highly motivated by financial incentives.",
      "Values financial security and wealth accumulation.",
    ],
    cons: [
      "May prioritize money over work satisfaction.",
      "Risk of burnout due to financial pressure.",
    ],
    color: "#FEF9C3",
    scoreColor: "#EAB308",
  },
  {
    id: 4,
    title: "Security and Stability",
    score: 25,
    pros: [
      "Prefers structured and predictable environments.",
      "Thrives in long-term, stable roles.",
    ],
    cons: [
      "Can be resistant to change or new challenges.",
      "May avoid risks that could lead to growth.",
    ],
    color: "#F3F4F6",
    scoreColor: "#22C55E",
  },
  {
    id: 5,
    title: "Continuous Learning",
    score: 27,
    pros: [
      "Enjoys acquiring new knowledge and skills.",
      "Thrives in dynamic and evolving environments.",
    ],
    cons: [
      "Might struggle with routine or repetitive work.",
      "Can become impatient with slow learners.",
    ],
    color: "#DBEAFE",
    scoreColor: "#EF4444",
  },
  {
    id: 6,
    title: "Independence",
    score: 21,
    pros: [
      "Prefers autonomy in work and decision-making.",
      "Self-motivated and takes initiative.",
    ],
    cons: [
      "May struggle in highly collaborative settings.",
      "Can resist authority or structured environments.",
    ],
    color: "#CCFBF1",
    scoreColor: "#EAB308",
  },
  {
    id: 7,
    title: "Flexibility and Work-Life Balance",
    score: 26,
    pros: [
      "Values a job that allows for personal time.",
      "Works best with adaptable schedules.",
    ],
    cons: [
      "Might find rigid structures challenging.",
      "Can struggle with time management if too flexible.",
    ],
    color: "#CCFBF1",
    scoreColor: "#22C55E",
  },
  {
    id: 8,
    title: "Creativity and Innovation",
    score: 24,
    pros: [
      "Excels in thinking outside the box.",
      "Enjoys problem-solving and ideation.",
    ],
    cons: [
      "May struggle with strict guidelines and protocols.",
      "Can find repetitive tasks uninspiring.",
    ],
    color: "#FCE7F3",
    scoreColor: "#EF4444",
  },
  {
    id: 9,
    title: "Leadership and Influence",
    score: 23,
    pros: [
      "Naturally takes charge and leads teams.",
      "Good at motivating and inspiring others.",
    ],
    cons: [
      "May struggle with delegation.",
      "Can sometimes appear authoritative or controlling.",
    ],
    color: "#FEE2E2",
    scoreColor: "#EAB308",
  },
  {
    id: 10,
    title: "Variety and Excitement",
    score: 29,
    pros: [
      "Thrives in dynamic and ever-changing environments.",
      "Enjoys taking on new challenges and experiences.",
    ],
    cons: [
      "Can struggle with consistency and routine work.",
      "Might get bored quickly if not engaged.",
    ],
    color: "#CFFAFE",
    scoreColor: "#22C55E",
  },
];

export const CareerMotivatorsTabs = [
  { id: "YourScore", label: "Your Score" },
  { id: "Conclusion", label: "Conclusion" },
];

export const EmotionalIntelligenceTest = [
  { id: 1, title: "Self-Awareness", color: "#F97316" }, // orange-500
  { id: 2, title: "Self-Regulation", color: "#3B82F6" }, // blue-500
  { id: 3, title: "Empathy", color: "#A855F7" }, // purple-500
  { id: 4, title: "Social Skills", color: "#A52A2A" }, // brown-500 (Custom, as Tailwind doesn't have it)
  { id: 5, title: "Motivation", color: "#22C55E" }, // green-500
];

export const EmotionalIntelligenceTest_Application = [
  {
    id: "Enhanced Leadership and Communication Skills",
    title: "Enhanced Leadership and Communication Skills",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
  {
    id: "Imporved Decision Making and Problem Solving",
    title: "Imporved Decision Making and Problem Solving",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
  {
    id: "Career Planning and Development",
    title: "Career Planning and Development",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
  {
    id: "Emotional Intelligence in the Workplace",
    title: "Emotional Intelligence in the Workplace",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
  {
    id: "Leadership Development",
    title: "Leadership Development",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
];

export const EmotionalIntelligenceTest_Benifits = [
  {
    id: "Improved Interpersonal Relationships",
    title: "Improved Interpersonal Relationships",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
  {
    id: "Enhanced Job Performance",
    title: "Enhanced Job Performance",
    description:
      "Focuses on concrete, tangible information and present realities tangible information and present realities Focuses on concrete, tangible information and present realities tangible information and present realities.",
  },
];

export const EmotionalIntelligenceYourScore = [
  {
    id: 1,
    title: "Self Awareness",
    color: "#F97316",
    score: 45,
    scoreColor: "#27AE60",
    description:
      "Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
    strength: [
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    ],
  },
  {
    id: 2,
    title: "Self-Regulation",
    color: "#3B82F6",
    score: 45,
    scoreColor: "#27AE60",
    description:
      "Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
    strength: [
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    ],
  },
  {
    id: 3,
    title: "Empathy",
    color: "#A855F7",
    score: 45,
    scoreColor: "#27AE60",
    description:
      "Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
    strength: [
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    ],
  },
  {
    id: 4,
    title: "Social Skills",
    color: "#A52A2A",
    score: 45,
    scoreColor: "#27AE60",
    description:
      "Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
    strength: [
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    ],
  },
  {
    id: 5,
    title: "Motivation",
    color: "#22C55E",
    score: 45,
    scoreColor: "#27AE60",
    description:
      "Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.Prefer tasks that involve physical work and create outcomes.",
    strength: [
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
      "They are friendly, approachable, & enjoy being around people. They are often seen as the 'hosts' of their social circles.",
    ],
  },
];

export const EmotionalIntelligenceTabs = [
  { id: "YourScore", label: "Your Score" },
  { id: "Conclusion", label: "Conclusion" },
];

export const LearningStylesUnderstanding_1 = [
  {
    id: "Talored Learning Strategies",
    title: "Self Assessment",
    description:
      "Focuses on concrete, tangible information and present realities.Focuses on concrete, tangible information and present realities.Focuses on concrete, tangible information and present realities.",
  },
  {
    id: "Optimised Traning Program",
    title: "Leadership Development",
    description:
      "Develop leadership skills with practical insights and strategies.Focuses on concrete, tangible information and present realities.Focuses on concrete, tangible information and present realities.",
  },
  {
    id: "Improved Communication And Collaboration",
    title: "Career Alignment",
    description:
      "Discover career paths that align with your strengths and interests.Focuses on concrete, tangible information and present realities.Focuses on concrete, tangible information and present realities.",
  },
  {
    id: "Enhanced Job Performance",
    title: "Career Alignment",
    description:
      "Discover career paths that align with your strengths and interests.Focuses on concrete, tangible information and present realities.Focuses on concrete, tangible information and present realities.",
  },
];

export const LearningStylesUnderstanding_2 = [
  {
    id: "Talored Learning Strategies",
    title: "Self Assessment",
    description:
      "Focuses on concrete, tangible information and present realities.Focuses on concrete, tangible information and present realities.Focuses on concrete, tangible information and present realities.",
  },
  {
    id: "Optimised Traning Program",
    title: "Leadership Development",
    description:
      "Develop leadership skills with practical insights and strategies.Focuses on concrete, tangible information and present realities.Focuses on concrete, tangible information and present realities.",
  },
  {
    id: "Improved Communication And Collaboration",
    title: "Career Alignment",
    description:
      "Discover career paths that align with your strengths and interests.Focuses on concrete, tangible information and present realities.Focuses on concrete, tangible information and present realities.",
  },
];

export const LearningStyleTabs = [
  { id: "LearningStyle", label: "Learning Style" },
  { id: "Characteristics", label: "Characteristics" },
  { id: "Preferences", label: "Preferences" },
  { id: "Strengths", label: "Strengths" },
  { id: "Enviornment", label: "Learning Environment" },
  { id: "WorkPlaceManifestation", label: "Workplace Manifestation" },
  { id: "Influence", label: "Influence on Job Performance" },
  { id: "Suggestion", label: "Suggestions" },
  { id: "AdviceStatergies", label: "Advice & Strategies" },
  { id: "Conclusion", label: "Conclusion" },
];

export const LearningStyleCharacterstics = [
  "Manual dexterity and technical profiency. Manual dexterity and technical profiency. Manual dexterity and technical profiency.",
  "Manual dexterity and technical profiency. Manual dexterity and technical profiency. Manual dexterity and technical profiency.",
  "Manual dexterity and technical profiency. Manual dexterity and technical profiency. Manual dexterity and technical profiency.",
  "Manual dexterity and technical profiency. Manual dexterity and technical profiency. Manual dexterity and technical profiency.",
];
