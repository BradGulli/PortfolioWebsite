import { PropsWithChildren } from "react";

interface ProjectProps {
    projectUrl: string;
    projectTitle: string;
}
const Project = (props: PropsWithChildren<ProjectProps>) => {
    return (
        <div className="flex flex-col text-gray-300 font-noto pb-4">
            <h1 className="text-3xl font-semibold text-center border-b-2 w-3/4 self-center pb-1">{props.projectTitle}</h1>
            <p className="px-16 pt-4">
                {props.children}
            </p>
            <br/>
            <a href={props.projectUrl} target="_blank" className="text-blue-400 text-center">Check out the code here!</a>
        </div>
    );
};

export default Project;