"use client";
import { useEffect, useRef, useState } from 'react';
import ResumeCard from './ResumeCard';
import ResumeTag from './ResumeTag';
import { motion, useInView } from "framer-motion";

const experienceData = [
	{
		id: 1,
		title: "Fullstack Developer",
		company: "Creative E-commerce",
		tag: ["All", "Web developer"],
		location: "London, England",
		start: "05/2024",
		end: "Present",
		description: "In Frontend Development, created a React form stepper UI using hooks and Redux, added a selfie upload feature for skincare analysis via Haut.ai, optimized performance reducing load times by 20%, and deployed with Netlify and Render, including comprehensive testing with Jest and React Testing Library. In Backend API Development, developed APIs for image processing and skin metrics from Haut.ai, implemented product recommendations based on analysis, and fixed critical data processing and API bugs for reliable service.",
		techniques: [
			"React", "Redux", "Node.js", "Express", "MongoDB", "Figma", "AI", "API integration", "Performance Optimization", "Pixel Perfect", "Render", "Vercel"
		]
	},
	{
		id: 2,
		title: "Website Developer",
		company: "iPromise",
		tag: ["All", "Web developer"],
		location: "Dandong, Liaoning",
		start: "02/2024",
		end: "04/2024",
		description: "Collaborated with clients to design responsive websites using Next.js, increasing client satisfaction by 20%. Implemented pixel-perfect designs from Figma, enhancing user experience and improving page load times by 30%. Fixed an average of 15 frontend bugs per sprint. Improved mobile engagement by 40% and achieved full WCAG compliance, reducing usability-related support tickets by 25%.",
		techniques: [
			"Next.js", "CSS", "Figma", "Performance Optimization", "Responsive Design Implementation", "Pixel Perfect", "Render", "Vercel"
		]
	},
	{
		id: 3,
		title: "Fullstack Developer",
		company: "Next Level Media ",
		tag: ["All", "Web developer"],
		location: "New York, NY",
		start: "09/2023",
		end: "02/2024",
		description: "Led backend API development with Express.js and Node.js, ensuring security and scalability. Optimized system performance, reducing loading times by 30% and improving user retention. Developed user interfaces with React.js and TypeScript, increasing productivity by 25%. Designed efficient GraphQL queries, boosting system responsiveness by 40%. Managed AWS deployment pipelines for CI/CD, enhancing deployment efficiency and reliability.",
		techniques: [
			"React", "Redux", "Node.js", "Express", "MongoDB", "Figma", "GraphQL", "API integration", "Performance Optimization", "Orchestration", "AWS", "UI/UX"
		]
	},
	{
		id: 4,
		title: "Frontend Developer",
		company: "Torontovka",
		tag: ["All", "Web developer"],
		location: "Toronto, ON",
		start: "04/2021",
		end: "06/2023",
		description: "Collaborated on the Torontovka development team, focusing on frontend development with Angular. Optimized pages on torontovka.com for seamless user experiences and design adherence. Implemented bug fixes, reducing reported issues by 20%. Maintained Node modules for compatibility and security, enhancing system stability. Participated in team meetings and code reviews to deliver high-quality, scalable solutions.",
		techniques: [
			"Angular", "Jira", "security patches", "Code review", "C#", "Figma", "pm2", "API integration", "Performance Optimization", "Pixel Perfect"
		]
	},
	{
		id: 5,
		title: "Software Engineer",
		company: "iZooto",
		tag: ["All", "Software Engineer"],
		location: "Seattle, WA",
		start: "11/2017",
		end: "03/2021",
		description: "Enhanced a web push notification platform by developing campaign management, audience segmentation, and analytics features, boosting user engagement. Designed backend services with Node.js and Python for managing subscriptions and notifications, ensuring performance and scalability. Created intuitive admin panel interfaces using HTML, CSS, and JavaScript for streamlined campaign management and analytics. Implemented optimizations and caching, improving response times by 40%.",
		techniques: [
			"Node.js", "Python", "Agile", "HTML", "CSS", "JavaScript", "Figma", "Docker", "API integration", "Performance Optimization", "Pixel Perfect"
		]
	},
	{
		id: 6,
		title: "Backend Engineer",
		company: "Novogene",
		tag: ["All", "Software Engineer"],
		location: "Shenzhen, Guangdong",
		start: "09/2014",
		end: "06/2017",
		description: "Designed and developed backend systems for bioinformatics and genomic data analysis, integrating third-party services and utilizing Azure App Service for efficient deployment. Contributed to project success through strong teamwork, gaining valuable experience in backend development and system integration.",
		techniques: [
			"Angular", "Jira", "security patches", "Code review", "C#", "Figma", "pm2", "API integration", "Performance Optimization", "Pixel Perfect"
		]
	},
];

const Resume = () => {
	const [tag, setTag] = useState("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = experienceData.filter((experience) =>
		experience.tag.includes(tag)
	);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id="resume" className="text-white">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Résumé
			</h2>
			<div className="flex flex-col md:flex-row gap-8 md:gap-12">
				<div className="flex flex-col">
					<ResumeTag
						onClick={handleTagChange}
						name="All"
						isSelected={tag === "All"}
					/>
					<ResumeTag
						onClick={handleTagChange}
						name="Web developer"
						isSelected={tag === "Web developer"}
					/>
					<ResumeTag
						onClick={handleTagChange}
						name="Software Engineer"
						isSelected={tag === "Software Engineer"}
					/>
				</div>
				<ul
					ref={ref}
					className="flex-1 grid gap-8 md:gap-12"
				>
					{filteredProjects.map((experience) => (
						<li key={experience.id}>
							<motion.div
								className="bg-gray-800 p-4 rounded-md"
								variants={cardVariants}
								initial="initial"
								animate={isInView ? "animate" : ""}
							>
								<ResumeCard
									title={experience.title}
									company={experience.company}
									start={experience.start}
									location={experience.location}
									end={experience.end}
									description={experience.description}
									techniques={experience.techniques} />
							</motion.div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Resume