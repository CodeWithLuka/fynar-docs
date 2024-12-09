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
			<hr />
			
			<h2>Project Overview</h2>
			<p>Provide a detailed description of the software project, its purpose, and its goals.</p>
			
			<h2>Objectives</h2>
			<ul>
				<li>Objective 1: Describe the specific goal.</li>
				<li>Objective 2: Explain the expected outcome.</li>
			</ul>
			
			<h2>Timeline</h2>
			<table>
				<tr>
					<th>Phase</th>
					<th>Timeline</th>
				</tr>
				<tr>
					<td>Phase 1: Planning</td>
					<td>January 2024 - February 2024</td>
				</tr>
				<tr>
					<td>Phase 2: Development</td>
					<td>March 2024 - June 2024</td>
				</tr>
			</table>
			
			<h2>Budget</h2>
			<p>A detailed breakdown of estimated costs for each phase.</p>
		`,
	},
	{
		id: "project-proposal",
		label: "Project Proposal",
		imageUrl: "/project-proposal.svg",
		initialContent: `
			<h1>Project Proposal</h1>
			<hr />
			
			<h2>Executive Summary</h2>
			<p>Summarize the project's purpose, objectives, and expected outcomes.</p>
			
			<h2>Problem Statement</h2>
			<p>Describe the issue the project aims to address, supported by relevant data.</p>
			
			<h2>Proposed Solution</h2>
			<p>Provide a comprehensive explanation of the solution and its impact.</p>
			
			<h2>Implementation Plan</h2>
			<ol>
				<li>Step 1: Detail the initial actions.</li>
				<li>Step 2: Outline the next stages of execution.</li>
			</ol>
		`,
	},
	{
		id: "business-letter",
		label: "Business Letter",
		imageUrl: "/business-letter.svg",
		initialContent: `
			<p><strong>[Your Name]</strong><br />
			[Your Address]<br />
			[City, State, ZIP Code]</p>
			
			<p><strong>Date:</strong> [Insert Date]</p>
			
			<p><strong>[Recipient Name]</strong><br />
			[Recipient's Title]<br />
			[Company Name]<br />
			[Company Address]<br />
			[City, State, ZIP Code]</p>
			
			<p>Dear [Recipient's Name],</p>
			
			<p><strong>Introduction:</strong> Briefly state the purpose of your letter.</p>
			
			<p><strong>Details:</strong> Provide all necessary context and explanations.</p>
			
			<p><strong>Conclusion:</strong> Close with a thank-you and any call to action.</p>
			
			<p>Sincerely,<br />
			[Your Name]</p>
		`,
	},
	{
		id: "resume",
		label: "Resume",
		imageUrl: "/resume.svg",
		initialContent: `
			<h1>[Your Name]</h1>
			<p><strong>Contact Information:</strong><br />
			[Your Address] | [Your Email] | [Your Phone Number]</p>
			
			<h2>Professional Summary</h2>
			<p>A concise summary of your skills, experience, and career goals.</p>
			
			<h2>Work Experience</h2>
			<h3>[Job Title] - [Company Name]</h3>
			<p>[Start Date] - [End Date]</p>
			<ul>
				<li>Key responsibility 1</li>
				<li>Key responsibility 2</li>
			</ul>
			
			<h2>Education</h2>
			<h3>[Degree] - [University Name]</h3>
			<p>[Graduation Date]</p>
			
			<h2>Skills</h2>
			<ul>
				<li>Skill 1</li>
				<li>Skill 2</li>
			</ul>
		`,
	},
	{
		id: "cover-letter",
		label: "Cover Letter",
		imageUrl: "/cover-letter.svg",
		initialContent: `
			<p><strong>[Your Name]</strong><br />
			[Your Address]<br />
			[City, State, ZIP Code]</p>
			
			<p><strong>Date:</strong> [Insert Date]</p>
			
			<p><strong>[Hiring Manager's Name]</strong><br />
			[Company Name]<br />
			[Company Address]</p>
			
			<p>Dear [Hiring Manager's Name],</p>
			
			<p>I am writing to express my interest in the [Job Title] position. [Include a brief introduction about your background and enthusiasm for the role.]</p>
			
			<p>[Discuss your relevant skills, achievements, and experience that make you a strong candidate.]</p>
			
			<p>Thank you for considering my application. I look forward to the opportunity to discuss how I can contribute to your team.</p>
			
			<p>Sincerely,<br />
			[Your Name]</p>
		`,
	},
	{
		id: "letter",
		label: "Letter",
		imageUrl: "/letter.svg",
		initialContent: `
			<p><strong>[Your Name]</strong><br />
			[Your Address]<br />
			[City, State, ZIP Code]</p>
			
			<p><strong>Date:</strong> [Insert Date]</p>
			
			<p><strong>[Recipient Name]</strong><br />
			[Recipient's Title]<br />
			[Recipient's Address]<br />
			[City, State, ZIP Code]</p>
			
			<p>Dear [Recipient Name],</p>
			
			<p>[Write the body of your letter. Clearly articulate the message and ensure proper formatting.]</p>
			
			<p>Sincerely,<br />
			[Your Name]</p>
		`,
	},
];
