import Link from "next/link";
import NavLogo from "./NavLogo";

interface NavItemsProps {
	menuRef?: React.RefObject<HTMLDivElement | null>;
	isOpen?: boolean;
	className?: {
		parentStyle?: string;
		unorderedListStyle?: string;
	};
	onClose?: () => void;
	pathname: string;
}

const NavItems = ({ menuRef, isOpen, className, onClose, pathname }: NavItemsProps) => {
	const isMobile = isOpen !== undefined;
	return (
		<div ref={menuRef} className={className?.parentStyle}>
			{isMobile && (
				<NavLogo
					position="start"
					logoParentStyle="px-2 py-4 shadow-sm border-b border-foreground"
					onClose={onClose}
				/>
			)}
			<ul className={className?.unorderedListStyle}>
				<li
					className={`${pathname === "/" && "active"} w-full md:w-fit py-2 px-4 rounded-lg md:rounded-full`}>
					<Link href={"/"} onNavigate={onClose}>
						Workouts
					</Link>
				</li>
				<li
					className={`${pathname === "/my-plan" && "active"} w-full md:w-fit py-1 px-4 rounded-lg md:rounded-full`}>
					<Link href={"/my-plan/today"} onNavigate={onClose}>
						My Plan
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default NavItems;
