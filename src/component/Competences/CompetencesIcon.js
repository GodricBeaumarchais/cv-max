import { FaGit, FaPython, FaJava, FaDocker, FaHtml5, FaCss3, FaNodeJs, FaReact } from "react-icons/fa"
import { SiKubernetes, SiArgo, SiOcaml, SiGnubash, SiMysql, SiTypescript, SiNestjs, SiMongodb,SiCsharp,SiPostgresql  , SiNextdotjs,SiCoursera , SiExpress, SiPrisma } from "react-icons/si"
import { IoLogoJavascript } from "react-icons/io"
import { TbBrandCpp } from "react-icons/tb"
import { FaLinux } from "react-icons/fa";
import { SiGraphql } from "react-icons/si";
import { FaAngular } from "react-icons/fa";


export default function CompetenceIcon({ name }) {

    var icon
    switch (name) {
        case "Git":
            icon = <FaGit className="icon" />
            break;
        case "Ocaml":
            icon = <SiOcaml className="icon" />
            break;
        case "Python":
            icon = <FaPython className="icon" />
            break;
        case "Java":
            icon = <FaJava className="icon" />
            break;
        case "Javascript":
            icon = <IoLogoJavascript className="icon" />
            break;
        case "Docker":
            icon = <FaDocker className="icon" />
            break;
        case "Html":
            icon = <FaHtml5 className="icon" />
            break;
        case "Css":
            icon = <FaCss3 className="icon" />
            break;
        case "NodeJs":
            icon = <FaNodeJs className="icon" />
            break;
        case "React":
            icon = <FaReact className="icon" />
            break;
        case "Bash":
            icon = <SiGnubash className="icon" />
            break;
        case "C++":
            icon = <TbBrandCpp className="icon" />
            break;
        case "SQL":
            icon = <SiMysql className="icon" />
            break;
        case "NestJs":
            icon = <SiNestjs className="icon" />
            break;
        case "TypeScript":
            icon =  <SiTypescript className="icon" />
            break;
        case "MongoDB":
            icon = <SiMongodb className="icon" />
            break;
        case "PostgreSQL":
            icon = <SiPostgresql className="icon" />
            break;
        case "C":
            icon = <SiCoursera  className="icon" />
                break;
        case "C#":
            icon = <SiCsharp  className="icon" />
            break;
        case "NextJs":
            icon = <SiNextdotjs className="icon" />
            break;
        case "ExpressJs":
            icon = <SiExpress className="icon" />
            break;
        case "Prisma":
            icon = <SiPrisma className="icon" />
            break;
        case "ArgoCD":
            icon = <SiArgo className="icon" />
            break;
        case "Kubernetes":
            icon = <SiKubernetes className="icon" />
            break;
        case "SystemUnix":
            icon = <FaLinux  className="icon" />
            break; 
        case"GraphQL":
            icon = <SiGraphql className="icon" />
            break;
        case"Angular":
            icon = <FaAngular className="icon" />
            break;
        default:
            icon = null;
    }
    return (
        icon
    )
}