"use client";
import React, { ReactNode } from "react";

const Button = ({ className, children }: { className: string; children: ReactNode }) => {
	console.log(children);
	return (
		<button
			className={`${className} font-bold px-4 py-1 md:py-2 text-sm lg:text-base cursor-pointer`}>
			{children}
		</button>
	);
};

export default Button;
