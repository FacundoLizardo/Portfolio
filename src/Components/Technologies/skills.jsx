import { IconBrandHtml5 } from "@tabler/icons-react";
import { IconBrandCss3 } from "@tabler/icons-react";
import { IconBrandJavascript } from "@tabler/icons-react";
import { IconBrandReact } from "@tabler/icons-react";
import { IconBrandRedux } from "@tabler/icons-react";
import { IconBrandNodejs } from "@tabler/icons-react";
import { SiSequelize } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";

export const skills = [
	{
		icon: <IconBrandHtml5 />,
		category: "Front End",
		name: "HTML",
	},
	{
		icon: <IconBrandCss3 />,
		category: "Front End",
		name: "CSS",
	},
	{
		icon: <IconBrandJavascript />,
		category: "Front End",
		name: "JavaScript",
	},
	{
		icon: <IconBrandReact />,
		category: "Front End",
		name: "React",
	},
	{
		icon: <IconBrandRedux />,
		category: "Front End",
		name: "Redux",
	},
	{
		icon: <IconBrandNodejs />,
		category: "Back End",
		name: "Node.js",
	},
	{
		icon: "EX",
		category: "Back End",
		name: "Express",
	},

	{
		icon: <SiPostgresql />,
		category: "Back End",
		name: "PostgreSQL",
	},
	{
		icon: <SiSequelize />,
		category: "Back End",
		name: "Sequelize",
	},
	{
		icon: <SiAdobephotoshop />,
		category: "Design",
		name: "Adobe Photoshop",
	},

	// {
	// 	icon: "Jest",
	// 	category: "Testing",
	// 	name: "Jest",
	// },
];
