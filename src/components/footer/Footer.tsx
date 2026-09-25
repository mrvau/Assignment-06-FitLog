import Image from "next/image";
import logo from "@/assets/footerLogo.png";

const Footer = () => {
	return (
		<footer className="py-6 border border-slate-800">
			<div className="container flex flex-col text-center md:flex-row items-center md:justify-between gap-4">
				<div className="flex items-center gap-2">
					<Image
						src={logo}
						alt="FITLOG footer logo"
						width={35}
						height={35}
						quality={100}
					/>
					<span className="font-primary font-bold inline-block text-xl">FITLOG</span>
				</div>
				<div>
					<span className="text-gray-600 text-xs md:text-sm lg:text-base">
						&copy; 2026 FitLog — Workout Library. Train hard, log honest.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
