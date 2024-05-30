export const statsTable = {
	10: { weight: 35, height: 3.2 },
	11: { weight: 45, height: 4.2 },
	12: { weight: 58, height: 5.3 },
	13: { weight: 73, height: 6.5 },
	14: { weight: 93, height: 7.9 },
	15: { weight: 117, height: 16.4 },
	16: { weight: 146, height: 18.3 },
	17: { weight: 181, height: 20.1 },
	18: { weight: 223, height: 22 },
	19: { weight: 273, height: 23.7 },
	20: { weight: 331, height: 25.5 },
	21: { weight: 399, height: 27.2 },
	22: { weight: 478, height: 28.8 },
	23: { weight: 568, height: 30.4 },
	24: { weight: 670, height: 32 },
	25: { weight: 785, height: 33.6 },
	26: { weight: 913, height: 35.1 },
	27: { weight: 1055, height: 36.5 },
	28: { weight: 1210, height: 37.9 },
	29: { weight: 1379, height: 39.3 },
	30: { weight: 1559, height: 40.6 },
	31: { weight: 1751, height: 41.9 },
	32: { weight: 1953, height: 43.2 },
	33: { weight: 2162, height: 44.4 },
	34: { weight: 2377, height: 45.6 },
	35: { weight: 2595, height: 46.7 },
	36: { weight: 2813, height: 47.8 },
	37: { weight: 3028, height: 48.9 },
	38: { weight: 3236, height: 49.9 },
	39: { weight: 3435, height: 50.9 },
	40: { weight: 3619, height: 52 },
	41: { weight: 3787, height: 52.7 }
} as Record<number, { weight: number; height: number }>

export type ProgressType = {
	label: string
	inProgressLabel: string
	startWeek: number
	endWeek: number
}

export const progresses = [
	{
		label: "Survival limit reached!",
		inProgressLabel: "Absolute survival limit in progress ...",
		startWeek: 1,
		endWeek: 23
	},
	{
		label: "Implantation Complete!",
		inProgressLabel: "Embryo looking for a nest ...",
		startWeek: 1,
		endWeek: 3
	},
	{
		label: "Heart Complete!",
		inProgressLabel: "Heart Compiling!",
		startWeek: 1,
		endWeek: 5
	},
	{
		label: "Neural-tube closed!",
		inProgressLabel: "Neural-tube Compiling!",
		startWeek: 1,
		endWeek: 6
	},
	{
		label: "Movement aquired!",
		inProgressLabel: "Movement compiling ...",
		startWeek: 1,
		endWeek: 11
	},
	{
		label: "Fingerprints set!",
		inProgressLabel: "Fingerprints compiling ...",
		startWeek: 1,
		endWeek: 7
	},
	{
		label: "Organogenesis Complete!",
		inProgressLabel: "Organogenesis compiling ...",
		startWeek: 1,
		endWeek: 13
	},
	{
		label: "Teeth set!",
		inProgressLabel: "Teeth compiling ...",
		startWeek: 9,
		endWeek: 20
	},
	{
		label: "Genitalia set!",
		inProgressLabel: "Genitalia compiling ...",
		startWeek: 10,
		endWeek: 14
	},
	{
		label: "Vocal cords set!",
		inProgressLabel: "Vocal cords compiling ...",
		startWeek: 13,
		endWeek: 14
	},
	{
		label: "Toenails Complete!",
		inProgressLabel: "Toenails compiling ...",
		startWeek: 10,
		endWeek: 14
	},
	{
		label: "Fingers set!",
		inProgressLabel: "Finger compiling ...",
		startWeek: 14,
		endWeek: 20
	},
	{
		label: "It can ear!",
		inProgressLabel: "Audition compiling ...",
		startWeek: 15,
		endWeek: 16
	},
	{
		label: "It has ears!",
		inProgressLabel: "Ears compiling ...",
		startWeek: 16,
		endWeek: 19
	},
	{
		label: "It has a nose!",
		inProgressLabel: "Nose compiling ...",
		startWeek: 16,
		endWeek: 19
	},
	{
		label: "It has lips!",
		inProgressLabel: "Lips compiling ...",
		startWeek: 17,
		endWeek: 19
	},
	{
		label: "It has hairs (Weird)!",
		inProgressLabel: "Hairs compiling ...",
		startWeek: 14,
		endWeek: 20
	},
	{
		label: "It makes its own antibodies!",
		inProgressLabel: "Immune system compiling ...",
		startWeek: 18,
		endWeek: 20
	},
	{
		label: "It Kicks!",
		inProgressLabel: "Kicking system compiling ...",
		startWeek: 18,
		endWeek: 20
	},
	{
		label: "It dreams of electric sheeps (REM detectable)!",
		inProgressLabel: "Dream system compiling ...",
		startWeek: 18,
		endWeek: 20
	},
	{
		label: "Lung Complete!",
		inProgressLabel: "Lung compiling ...",
		startWeek: 15,
		endWeek: 25
	},
	{
		label: "It has eyelashes!",
		inProgressLabel: "Eyelashes compiling ...",
		startWeek: 20,
		endWeek: 28
	},
	{
		label: "It has bone marrow!",
		inProgressLabel: "Bone marrow compiling ...",
		startWeek: 9,
		endWeek: 21
	},
	{
		label: "It has big muscle!",
		inProgressLabel: "Muscles compiling ...",
		startWeek: 9,
		endWeek: 33
	},
	{
		label: "It has some fat!",
		inProgressLabel: "Bodyfat compiling ...",
		startWeek: 17,
		endWeek: 33
	},
	{
		label: "Heating system aquired!",
		inProgressLabel: "Heating system compiling ...",
		startWeek: 28,
		endWeek: 30
	},
	{
		label: "It has some shaky bones!",
		inProgressLabel: "Bones compiling ...",
		startWeek: 1,
		endWeek: 39
	},
	{
		label: "Ready for birth!",
		inProgressLabel: "Getting ready for launch ...",
		startWeek: 38,
		endWeek: 40
	},
	{
		label: "Brain kinda formed!",
		inProgressLabel: "Brain compiling ...",
		startWeek: 6,
		endWeek: 39
	}
] as ProgressType[]
