export const templates = [
	{
		id: "blank",
		label: "Blank Document",
		imageUrl: "/blank-document.svg",
		initialContent: ``,
	},
	{
		id: "software-proposal",
		label: "Software Development Proposal",
		imageUrl: "/software-proposal.svg",
		initialContent: `
			<h1>Software Development Proposal</h1>
			<h2>Project Overview</h2>
			<p>Provide a brief description of the software development project.</p>
			
			<h2>Objectives</h2>
			<p>List the primary goals of the project.</p>
			
			<h2>Timeline</h2>
			<p>Outline the expected timeline for the project phases.</p>
			
			<h2>Budget</h2>
			<p>Include a summary of the estimated budget.</p>
		`,
	},
	{
		id: "project-proposal",
		label: "Project Proposal",
		imageUrl: "/project-proposal.svg",
		initialContent: `
			<h1>Project Proposal</h1>
			<h2>Executive Summary</h2>
			<p>Summarize the key points of the project proposal.</p>
			
			<h2>Problem Statement</h2>
			<p>Identify the issue the project aims to address.</p>
			
			<h2>Proposed Solution</h2>
			<p>Describe the solution and how it will resolve the problem.</p>
			
			<h2>Implementation Plan</h2>
			<p>Provide a step-by-step plan for project execution.</p>
		`,
	},
	{
		id: "business-letter",
		label: "Business Letter",
		imageUrl: "/business-letter.svg",
		initialContent: `
			<p>[Your Name]</p>
			<p>[Your Address]</p>
			<p>[City, State, ZIP Code]</p>
			<p>[Date]</p>
			
			<p>[Recipient Name]</p>
			<p>[Recipient Address]</p>
			<p>[City, State, ZIP Code]</p>
			
			<p>Dear [Recipient Name],</p>
			
			<p>Introduce the purpose of your letter in the first paragraph.</p>
			
			<p>Provide details and context in the subsequent paragraphs.</p>
			
			<p>Thank you for your time and consideration.</p>
			
			<p>Sincerely,</p>
			<p>[Your Name]</p>
		`,
	},
	{
		id: "resume",
		label: "Resume",
		imageUrl: "/resume.svg",
		initialContent: `
			<h1>[Your Name]</h1>
			<h2>Professional Summary</h2>
			<p>Briefly summarize your professional background and key skills.</p>
			
			<h2>Experience</h2>
			<h3>[Job Title] - [Company Name]</h3>
			<p>[Start Date] - [End Date]</p>
			<ul>
				<li>Describe your accomplishments and responsibilities.</li>
			</ul>
			
			<h2>Education</h2>
			<h3>[Degree] - [University Name]</h3>
			<p>[Graduation Date]</p>
			
			<h2>Skills</h2>
			<ul>
				<li>List your relevant skills.</li>
			</ul>
		`,
	},
	{
		id: "cover-letter",
		label: "Cover Letter",
		imageUrl: "/cover-letter.svg",
		initialContent: `
			<p>[Your Name]</p>
			<p>[Your Address]</p>
			<p>[City, State, ZIP Code]</p>
			<p>[Date]</p>
			
			<p>[Hiring Manager Name]</p>
			<p>[Company Name]</p>
			<p>[Company Address]</p>
			
			<p>Dear [Hiring Manager Name],</p>
			
			<p>Begin by expressing your interest in the position.</p>
			
			<p>Discuss your relevant skills and accomplishments.</p>
			
			<p>Thank the hiring manager for their time and mention your desire for an interview.</p>
			
			<p>Sincerely,</p>
			<p>[Your Name]</p>
		`,
	},
	{
		id: "letter",
		label: "Letter",
		imageUrl: "/letter.svg",
		initialContent: `
			<p>[Your Name]</p>
			<p>[Your Address]</p>
			<p>[City, State, ZIP Code]</p>
			<p>[Date]</p>
			
			<p>[Recipient Name]</p>
			<p>[Recipient Address]</p>
			<p>[City, State, ZIP Code]</p>
			
			<p>Dear [Recipient Name],</p>
			
			<p>Write the body of your letter here.</p>
			
			<p>Sincerely,</p>
			<p>[Your Name]</p>
		`,
	},
];
