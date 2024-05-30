"use client"
import type { ProgressType } from "@/data/data"
import { Card } from "./ui/card"
import { Progress } from "./ui/progress"

export type ProgressBarProps = {
	currentWeek: number
	progress: ProgressType
}

export function ProgressBar({ currentWeek, progress }: ProgressBarProps) {
	const percent = Math.min(Math.max(0, ((currentWeek - progress.startWeek) / (progress.endWeek - progress.startWeek)) * 100), 100)
	const label = percent >= 100 ? progress.label : progress.inProgressLabel
	return (
		<Card className="relative p-4">
			<div className="relative">
				<Progress value={percent} className="h-6" />
				<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-center text-white">
					{Math.round(percent)}%
				</span>
			</div>
			<h4 className="text-xl font-bold text-center pt-2">{label}</h4>
		</Card>
	)
}
