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
		label: "Survival Limit Reached!",
		inProgressLabel: "Reaching Absolute Survival Limit...",
		startWeek: 1,
		endWeek: 23
	},
	{
		label: "Implantation Complete!",
		inProgressLabel: "Embryo Seeking Nest...",
		startWeek: 1,
		endWeek: 3
	},
	{
		label: "Heart Compiled!",
		inProgressLabel: "Heart Under Construction...",
		startWeek: 1,
		endWeek: 5
	},
	{
		label: "Neural-Tube Closed!",
		inProgressLabel: "Neural-Tube Formation In Progress...",
		startWeek: 1,
		endWeek: 6
	},
	{
		label: "Movement Acquired!",
		inProgressLabel: "Uploading Movement Protocols...",
		startWeek: 1,
		endWeek: 11
	},
	{
		label: "Fingerprints Set!",
		inProgressLabel: "Fingerprint Patterns Developing...",
		startWeek: 1,
		endWeek: 7
	},
	{
		label: "Organogenesis Complete!",
		inProgressLabel: "Organogenesis Underway...",
		startWeek: 1,
		endWeek: 13
	},
	{
		label: "Teeth Set!",
		inProgressLabel: "Dental Records Being Established...",
		startWeek: 9,
		endWeek: 20
	},
	{
		label: "Genitalia Set!",
		inProgressLabel: "Genitalia Forming...",
		startWeek: 10,
		endWeek: 14
	},
	{
		label: "Vocal Cords Set!",
		inProgressLabel: "Vocal Cords Developing...",
		startWeek: 13,
		endWeek: 14
	},
	{
		label: "Toenails Complete!",
		inProgressLabel: "Toenails Growing...",
		startWeek: 10,
		endWeek: 14
	},
	{
		label: "Fingers Set!",
		inProgressLabel: "Finger Formation In Progress...",
		startWeek: 14,
		endWeek: 20
	},
	{
		label: "Auditory System Activated!",
		inProgressLabel: "Hearing Abilities Developing...",
		startWeek: 15,
		endWeek: 16
	},
	{
		label: "Ears Formed!",
		inProgressLabel: "Ear Construction In Progress...",
		startWeek: 16,
		endWeek: 19
	},
	{
		label: "Nose Formed!",
		inProgressLabel: "Nose Taking Shape...",
		startWeek: 16,
		endWeek: 19
	},
	{
		label: "Lips Formed!",
		inProgressLabel: "Lips Developing...",
		startWeek: 17,
		endWeek: 19
	},
	{
		label: "Hair Growth Initiated!",
		inProgressLabel: "Hair Sprouting...",
		startWeek: 14,
		endWeek: 20
	},
	{
		label: "Immune System Activated!",
		inProgressLabel: "Immune Defense System Loading...",
		startWeek: 18,
		endWeek: 20
	},
	{
		label: "Kick Detected!",
		inProgressLabel: "Kicking Abilities Booting Up...",
		startWeek: 18,
		endWeek: 20
	},
	{
		label: "Dreams Detected (REM Active)!",
		inProgressLabel: "Dream System Activating...",
		startWeek: 18,
		endWeek: 20
	},
	{
		label: "Lung Development Complete!",
		inProgressLabel: "Lung Formation Underway...",
		startWeek: 15,
		endWeek: 25
	},
	{
		label: "Eyelashes Formed!",
		inProgressLabel: "Eyelash Growth In Progress...",
		startWeek: 20,
		endWeek: 28
	},
	{
		label: "Bone Marrow Formed!",
		inProgressLabel: "Bone Marrow Production...",
		startWeek: 9,
		endWeek: 21
	},
	{
		label: "Muscles Developed!",
		inProgressLabel: "Muscle Mass Building...",
		startWeek: 9,
		endWeek: 33
	},
	{
		label: "Body Fat Accumulated!",
		inProgressLabel: "Body Fat Deposits Growing...",
		startWeek: 17,
		endWeek: 33
	},
	{
		label: "Heating System Online!",
		inProgressLabel: "Thermoregulation System Activating...",
		startWeek: 28,
		endWeek: 30
	},
	{
		label: "Bones Strengthened!",
		inProgressLabel: "Bone Hardening...",
		startWeek: 1,
		endWeek: 39
	},
	{
		label: "Ready for Launch!",
		inProgressLabel: "Preparing for Birth...",
		startWeek: 38,
		endWeek: 40
	},
	{
		label: "Brain Nearly Complete!",
		inProgressLabel: "Brain Development In Progress...",
		startWeek: 6,
		endWeek: 39
	}
] as ProgressType[]

export const progressesFR = [
	{
		label: "Limite de survie atteinte !",
		inProgressLabel: "Atteinte de la limite de survie absolue en cours...",
		startWeek: 1,
		endWeek: 23
	},
	{
		label: "Implantation terminée !",
		inProgressLabel: "L'embryon cherche un nid...",
		startWeek: 1,
		endWeek: 3
	},
	{
		label: "Cœur compilé !",
		inProgressLabel: "Construction du cœur en cours...",
		startWeek: 1,
		endWeek: 5
	},
	{
		label: "Tube neural fermé !",
		inProgressLabel: "Formation du tube neural en cours...",
		startWeek: 1,
		endWeek: 6
	},
	{
		label: "Mouvement acquis !",
		inProgressLabel: "Téléchargement des protocoles de mouvement...",
		startWeek: 1,
		endWeek: 11
	},
	{
		label: "Empreintes digitales établies !",
		inProgressLabel: "Développement des motifs d'empreintes digitales...",
		startWeek: 1,
		endWeek: 7
	},
	{
		label: "Organogenèse terminée !",
		inProgressLabel: "Organogenèse en cours...",
		startWeek: 1,
		endWeek: 13
	},
	{
		label: "Dents formées !",
		inProgressLabel: "Établissement des dossiers dentaires...",
		startWeek: 9,
		endWeek: 20
	},
	{
		label: "Appareil génital formé !",
		inProgressLabel: "Formation de l'appareil génital en cours...",
		startWeek: 10,
		endWeek: 14
	},
	{
		label: "Cordes vocales formées !",
		inProgressLabel: "Développement des cordes vocales...",
		startWeek: 13,
		endWeek: 14
	},
	{
		label: "Ongles des orteils terminés !",
		inProgressLabel: "Croissance des ongles des orteils en cours...",
		startWeek: 10,
		endWeek: 14
	},
	{
		label: "Doigts formés !",
		inProgressLabel: "Formation des doigts en cours...",
		startWeek: 14,
		endWeek: 20
	},
	{
		label: "Système auditif activé !",
		inProgressLabel: "Développement des capacités auditives...",
		startWeek: 15,
		endWeek: 16
	},
	{
		label: "Oreilles formées !",
		inProgressLabel: "Construction des oreilles en cours...",
		startWeek: 16,
		endWeek: 19
	},
	{
		label: "Nez formé !",
		inProgressLabel: "Formation du nez en cours...",
		startWeek: 16,
		endWeek: 19
	},
	{
		label: "Lèvres formées !",
		inProgressLabel: "Développement des lèvres en cours...",
		startWeek: 17,
		endWeek: 19
	},
	{
		label: "Croissance des cheveux initiée !",
		inProgressLabel: "Poussée des cheveux en cours...",
		startWeek: 14,
		endWeek: 20
	},
	{
		label: "Système immunitaire activé !",
		inProgressLabel: "Système de défense immunitaire en ligne...",
		startWeek: 18,
		endWeek: 20
	},
	{
		label: "Coup de pied détecté !",
		inProgressLabel: "Initialisation des capacités de coup de pied...",
		startWeek: 18,
		endWeek: 20
	},
	{
		label: "Rêves détectés (REM actifs) !",
		inProgressLabel: "Activation du système de rêves...",
		startWeek: 18,
		endWeek: 20
	},
	{
		label: "Développement des poumons terminé !",
		inProgressLabel: "Formation des poumons en cours...",
		startWeek: 15,
		endWeek: 25
	},
	{
		label: "Cils formés !",
		inProgressLabel: "Croissance des cils en cours...",
		startWeek: 20,
		endWeek: 28
	},
	{
		label: "Moelle osseuse formée !",
		inProgressLabel: "Production de moelle osseuse en cours...",
		startWeek: 9,
		endWeek: 21
	},
	{
		label: "Muscles développés !",
		inProgressLabel: "Construction de la masse musculaire...",
		startWeek: 9,
		endWeek: 33
	},
	{
		label: "Accumulation de graisse corporelle !",
		inProgressLabel: "Croissance des dépôts de graisse corporelle...",
		startWeek: 17,
		endWeek: 33
	},
	{
		label: "Système de chauffage en ligne !",
		inProgressLabel: "Activation du système de thermorégulation...",
		startWeek: 28,
		endWeek: 30
	},
	{
		label: "Renforcement des os !",
		inProgressLabel: "Durcissement des os en cours...",
		startWeek: 1,
		endWeek: 39
	},
	{
		label: "Prêt pour le lancement !",
		inProgressLabel: "Préparation pour la naissance...",
		startWeek: 38,
		endWeek: 40
	},
	{
		label: "Cerveau presque complet !",
		inProgressLabel: "Développement du cerveau en cours...",
		startWeek: 6,
		endWeek: 39
	}
] as ProgressType[]
