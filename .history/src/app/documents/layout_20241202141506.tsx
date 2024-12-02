interface DocumentsLayoutPageProps {
	children: React.ReactNode;
}

const DocumentsLayoutPage = ({ children }: DocumentsLayoutPageProps) => {
	return (
		<div>
			<p>Docs Navbar</p>
			{children}
		</div>
	);
};

export default DocumentsLayoutPage;
