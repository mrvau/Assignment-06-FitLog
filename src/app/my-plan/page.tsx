import PlanList from "@/components/my-plan/PlanList";
import Summary from "@/components/my-plan/Summary";

const MyPlanPage = () => {
	return (
		<section className="container py-4 md:py-10 space-y-6">
			<div>
				<h3 className="font-primary font-bold text-2xl mb-2">MY PLAN</h3>
				<p className="text-gray-400">
					Cap of five lifts for today. Finish them, then load more.
				</p>
			</div>
			<div>
				<Summary />
			</div>
			<div>
				<PlanList />
			</div>
		</section>
	);
};

export default MyPlanPage;
