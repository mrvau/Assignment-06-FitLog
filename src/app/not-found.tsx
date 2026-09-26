import Link from "next/link";

const NotFound = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-10 h-screen">
			<h1 className="font-primary font-bold text-5xl">
				<span className="text-foreground">404</span> URL not found!
			</h1>
			<Link href={"/"} className="btn btn-filled rounded-full text-2xl px-6">
				Return to Homepage
			</Link>
		</div>
	);
};

export default NotFound;
