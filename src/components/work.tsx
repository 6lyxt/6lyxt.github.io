import React, {useEffect, useState} from "react";
import LoadingSpinner from "./loading";

const WorkComponent = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // timeout to show off my cool self written loading spinner
        setTimeout(() => {
            fetch("https://api.github.com/users/6lyxt/repos?sort=updated&direction=desc&per_page=4").then(res => {
                return res.json();
            }).then(data => {
                setProjects(data);
            })
        }, 300)
    }, [])

    return (
        <>
            <h1 className={'mb-2'}>recent work (latest github projects)</h1>
            <ul>
                {projects.length === 0 ? <LoadingSpinner /> :
                projects.map((project: any) => {
                    return (
                        <li key={project.id} className={'mb-3'}>
                            <a href={project.html_url}><b>{project.name}</b></a><br/>
                            <span>{project.description}</span><br/>
                            <span className={'border-bottom'}>{project.language}</span>
                        </li>
                    )
                })}
            </ul>
            <p>you can checkout all my projects <u><a href={'https://github.com/6lyxt'}
                                                      target={'_blank'}>here</a></u>
            </p>
        </>
    )
}
export default WorkComponent;
