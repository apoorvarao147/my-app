import { useEffect, useState } from "react";
import Description from "./Description";
function Project(props){
    const [projectId, setProjectId] = useState("");
    const [projectName, setProjectName] = useState("");
    const [url, setURL] = useState("");
    useEffect(()=>{
        setURL(props.data)
    },[props.data])

    const GetData = async() => {
        let apiData = await fetch(url)
        if(apiData.status != 200) return false
        apiData = await apiData.json();
        apiData = apiData[0]
        setProjectId(apiData.projectId)
        setProjectName(apiData.projectName)
        console.log(apiData.projectId,apiData.projectName)
    }

    return(
        <div>
            {projectId?<h1>Project Id: {projectId}</h1>:""}
            {url?<Description url={url}/>:""}
            {projectName?<h1>Project Name: {projectName}</h1>:""}
            <button onClick={GetData}>Get Data</button>
        </div>
    )
}

export default Project