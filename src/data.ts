export const portfolioData = {
    personal: {
        name: "Pratyasha Kalita",
        role: "Software Engineer III",
        company: "Google",
        location: "Dublin, Ireland",
        about: "I am a Software Engineer III at Google working in the Rollouts service, for Google’s global software deployments. We build the automated guardrails that ensure new code reaches billions of users without service interruption.",
        social: {
            linkedin: "https://www.linkedin.com/in/pratyasha-kalita-2b915b170/",
            email: "mailto:pratyasha.k2000@gmail.com"
        },
        images: [
            "/profile.jpg", // Using local image placed in public folder
            "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=320&h=320&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=320&h=320&auto=format&fit=crop"
        ],
        education: [
            {
                degree: "Bachelor of Technology (B.Tech) in Mechanical Engineering",
                institution: "Indian Institute of Technology, Kharagpur",
                date: "August 2018 - May 2022",
                grade: "CGPA: 9.02/10"
            }
        ],
        achievements: [
            "Secured Rank 39 in Google CodeJam to I/O for Women, 2022",
            "Positioned Top 15 in Amazon Women's Coding Challenge, 2021",
            "Secured Rank 14 in GeeksforGeeks Coderita, 2021",
            "Achieved 99.6 Percentile score amongst 1.15 Million candidates in IIT JEE, 2018",
            "Secured Rank 1 in Regional Mathematics Olympiad (RMO), 2017 (Assam state)",
            "Selected for a fully sponsored PROMYS Fellowship to Boston University in 2017"
        ],
        skills: {
            languages: ["Python", "C++", "Java", "Javascript", "SQL"],
            databases: ["AWS DynamoDB", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
            cloud: ["AWS (Lambda, ECS-Fargate, EC2, Kinesis, SQS, SNS, RDS, S3, CloudFormation, VPC, IAM, Bedrock)"],
            frameworks: ["Spring", "Flask", "ReactJS", "Tensorflow", "Pandas", "Numpy"],
            general: ["Git", "CI/CD Pipelines", "Docker", "Kubernetes", "Bash"]
        }
    },
    projects: [
        {
            id: 1,
            title: "OtakuOrbit",
            url: "#",
            description: "Hybrid Anime recommendation system using Neural Collaborative Filtering and Content-based Filtering. Used ChromaDB for vector retrieval and displayed results on a responsive React App.",
            tags: ["React", "ChromaDB", "Neural Collaborative Filtering", "TF-IDF"]
        }
    ],
    experience: [
        {
            id: 1,
            role: "Software Engineer III",
            company: "Google",
            location: "Dublin, Ireland",
            date: "June 2025 - Present",
            description: "Working on the Rollouts service, ensuring global deployment safety and scale. Defending SLOs by building automated guardrails that ensure new code reaches billions of users without service interruption."
        },
        {
            id: 2,
            role: "Software Development Engineer",
            company: "Amazon",
            location: "Dublin, Ireland",
            date: "Sept 2022 - May 2025",
            description: "Delivering secure containerized infrastructure using IaC. Developed Java-based AWS application on ECS. Designed scalable DynamoDB schema. Created ReactJS UI with OpenID Connect. Leveraged AWS Lambda, SQS, SNS for automation (saving 2500 hours/year). Implemented Batch Processing via API Gateway. Developed knowledge-sharing platform using AWS Bedrock (Hackathon Winner)."
        },
        {
            id: 3,
            role: "Investment Banking Analyst Intern",
            company: "JP Morgan Chase & Co.",
            location: "Mumbai, India",
            date: "May 2021 - July 2021",
            description: "Improved term-sheet generation 30X via Python jinja templates. Marshalled docx modules into templates. Developed GUI using ipywidgets. Automated monthly report generation reducing effort by 90%."
        }
    ]
};
