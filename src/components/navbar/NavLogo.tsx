import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const NavLogo = ({
	position,
	logoParentStyle,
	onClose,
}: {
	position: string;
	logoParentStyle?: string;
	onClose?: () => void;
}) => {
	return (
		<div className={`${logoParentStyle ? logoParentStyle : ""} text-xl md:text-2xl`}>
			<Link
				href={"/"}
				onNavigate={onClose}
				className={`flex items-center justify-${position} gap-2`}>
				<Image src={logo} alt={"FITLOG Logo"} width={30} height={30} className="mt-2" />
				<span className="font-primary font-bold">FITLOG</span>
			</Link>
		</div>
	);
};

export default NavLogo;
