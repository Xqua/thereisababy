"use client" // Add this line at the top
import { ProgressBar } from "@/components/progressbar"
import { StatCard } from "@/components/statcard"
import { Progress } from "@/components/ui/progress"
import { type ProgressType, progresses, progressesFR, statsTable } from "@/data/data"
import { useTranslations } from "next-intl"
import { useCallback, useEffect, useState } from "react"

function interpolate(week: number, value1: number, value2: number): number {
	const value = value1 + (week - Math.round(week)) * ((value2 - value1) / (Math.round(week) + 1 - Math.round(week)))
	return value
}

export default function Home() {
	const conceptionDate = new Date("June 30, 2025 21:15:30").getTime()
	const [daysElapsed, setDaysElapsed] = useState(0)
	const [currentWeek, setCurrentWeek] = useState(0)
	const [currentWeight, setCurrentWeight] = useState(0)
	const [currentHeight, setCurrentHeight] = useState(0)
	const [progressesData, setProgressesData] = useState(progresses)
	const t = useTranslations("Home")

	const getCellCount = useCallback(() => {
		let cellCount = currentWeight / 0.00000001
		if (cellCount > 1000000000) {
			cellCount = cellCount / 1000000000
			return `${cellCount.toFixed(2)}G`
		}
		if (cellCount > 1000000) {
			cellCount = cellCount / 1000000
			return `${cellCount.toFixed(2)}M`
		}
		if (cellCount > 1000) {
			cellCount = cellCount / 1000
			return `${cellCount.toFixed(2)}K`
		}
		return Math.round(cellCount)
	}, [currentWeight])

	useEffect(() => {
		// Update the document title using the browser API
		const interval = setInterval(() => {
			const now = Date.now()
			const timeElapsed = now - conceptionDate
			const daysElapsed = timeElapsed / (1000 * 3600 * 24)
			setDaysElapsed(daysElapsed)
			const weeksElasped = daysElapsed / 7
			setCurrentWeek(weeksElasped)
			setCurrentWeight(interpolate(weeksElasped, statsTable[Math.round(weeksElasped)].weight, statsTable[Math.round(weeksElasped + 1)].weight))
			setCurrentHeight(interpolate(weeksElasped, statsTable[Math.round(weeksElasped)].height, statsTable[Math.round(weeksElasped + 1)].height))
		}, 1000)
		return () => clearInterval(interval)
	}, [conceptionDate])

	const sortProgresses = useCallback(
		(a: ProgressType, b: ProgressType) => {
			const percentA = Math.min(Math.max(0, ((currentWeek - a.startWeek) / (a.endWeek - a.startWeek)) * 100), 100)
			const percentB = Math.min(Math.max(0, ((currentWeek - b.startWeek) / (b.endWeek - b.startWeek)) * 100), 100)

			if (percentA < percentB) {
				return 1
			}
			if (percentA > percentB) {
				return -1
			}
			return 0
		},
		[currentWeek]
	)

	useEffect(() => {
		const userLocale = navigator.language
		const data = userLocale.includes("fr") ? progressesFR : progresses
		const sortedData = data.sort(sortProgresses)
		setProgressesData(sortedData)
	}, [sortProgresses])

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-12 gap-4 bg-slate-200">
			<div className="border-2 border-gray-300 shadow-md bg-white p-4 rounded-2xl">
				<div className="flex flex-col items-center gap-4 w-full pb-12">
					<h1 className="text-4xl font-bold text-center">{t("title")}</h1>
					<div className="relative items-center w-full">
						<Progress value={(currentWeek / 40) * 100} className="h-8" />
						<span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-center text-white">
							{((currentWeek / 40) * 100).toFixed(2)}%
						</span>
					</div>
					<h2 className="text-2xl font-bold text-center">{t("subtitle")}</h2>
					<img src="/baby.jpeg" alt="Baby" className="w-1/2" />
				</div>
				<div className="flex flex-col items-center gap-4 w-full">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-center items-center gap-2 w-full flex-wrap">
						<StatCard metric={Math.round(daysElapsed)} label={t("mixing")} />
						<StatCard metric={Math.round(currentWeek)} label={t("curweek")} />
						<StatCard metric={currentWeight.toFixed(2)} label={t("estweight")} unit="g" />
						<StatCard metric={currentHeight.toFixed(2)} label={t("estsize")} unit="cm" />
						<StatCard metric={getCellCount()} label={t("estcells")} />
					</div>
					<div className="flex flex-col gap-4 w-full">
						{progressesData.map((progress, index) => (
							<ProgressBar key={index} currentWeek={currentWeek} progress={progress} />
						))}
					</div>
				</div>
			</div>
		</main>
	)
}
