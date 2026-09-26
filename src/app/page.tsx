import Image from "next/image";
import Link from "next/link";
import hero from "@/assets/banner.png";
import WorkoutList from "@/components/workout/WorkoutList";
import { Suspense } from "react";
import Loading from "@/components/workout/Loading";

const Home = () => {
	return (
		<>
			<section className="container pt-4 md:pt-10">
				<div className="bg-accent flex flex-col md:flex-row items-center md:justify-between gap-6 text-center md:text-left px-6 py-4 md:py-16 md:px-10 rounded-2xl border border-gray-800">
					<div className="space-y-4 md:space-y-6 lg:space-y-8 flex-7/12">
						<span className="text-foreground text-xs md:text-sm lg:text-base font-bold inline-block">
							WORKOUT LIBRARY
						</span>
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-primary font-bold">
							TRAIN WITH INTENT.
							<br className="block md:hidden" /> LOG
							<br className="hidden md:block" /> EVERY SET.
						</h1>
						<p className="text-gray-400 text-xs lg:text-base">
							FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
							<br /> into today&apos;s plan, and watch the week&apos;s work add up.
						</p>
						<Link href="#workouts" className="btn btn-filled rounded-md">
							BROWSE WORKOUTS
						</Link>
					</div>
					<div className="flex-5/12 lg:flex-3/12 justify-items-end">
						<Image
							src={hero}
							alt="FITLOG Hero Image"
							width={1200}
							height={1500}
							quality={100}
							className="w-full h-auto"
						/>
					</div>
				</div>
			</section>
			<section id="workouts" className="container pt-10 pb-16 text-center md:text-left">
				<div className="space-y-2 mb-6">
					<h2 className="font-primary font-bold text-2xl md:text-3xl">THE LIBRARY</h2>
					<p className="text-sm text-gray-500">
						Twelve lifts covering every major muscle group.
					</p>
				</div>
				<Suspense fallback={<Loading />}>
					<WorkoutList />
				</Suspense>
			</section>
		</>
	);
};

export default Home;
