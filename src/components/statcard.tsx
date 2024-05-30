"use client"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"

export type StatCardProps = {
	metric: number | string
	label: string
}

export function StatCard({ metric, label }: StatCardProps) {
	return (
		<Card>
			<CardContent className="text-center pt-4">
				<CardTitle className="text-4xl">{metric}</CardTitle>
				<CardDescription className="text-nowrap">{label}</CardDescription>
			</CardContent>
		</Card>
	)
}
