"use client";

import Image from "next/image";
import hamburger from "@/assets/hamburger.png";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import NavLogo from "./NavLogo";
import NavItems from "./NavItems";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	useEffect(() => {
		const handleMobileMenu = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleMobileMenu);

		return () => document.removeEventListener("mousedown", handleMobileMenu);
	});

	const closeMobileMenu = () => {
		setIsOpen(false);
	};

	return (
		<nav className="border-b border-slate-800 py-2 md:py-4 lg:py-6">
			<div className="container flex items-center justify-between">
				<div className="block md:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
					<Image src={hamburger} alt={"Hamburger Icon"} width={30} height={30} />
				</div>
				<NavLogo position="center" logoParentStyle="md:flex-1 justify-items-start" />
				<NavItems
					className={{
						parentStyle: "hidden md:block md:text-sm lg:text-base",
						unorderedListStyle: "center gap-2",
					}}
					pathname={pathname}
				/>
				<NavItems
					menuRef={menuRef}
					isOpen={isOpen}
					onClose={closeMobileMenu}
					className={{
						parentStyle: `absolute md:hidden top-0 h-screen w-3xs bg-gray-950 ${isOpen ? "left-0" : "-left-full"}`,
						unorderedListStyle: "flex flex-col gap-4 px-2 py-4",
					}}
					pathname={pathname}
				/>
				<div className="flex md:flex-1 flex-col md:flex-row items-end md:items-center justify-end gap-1 md:gap-6 text-xs md:text-sm lg:text-base">
					<div className="text-gray-300 center gap-2">
						Plan <div className="circle bg-foreground text-background">{0}</div>
					</div>
					<div className="text-gray-600 center gap-2">
						Saved <div className="circle border border-gray-700 text-gray-300">{0}</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
