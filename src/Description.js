import { useEffect, useState } from "react"

function Description(props){
    console.log(props)
    const [data, setData] = useState();
    useEffect(() => {
        setData(props.url)
    },[props.url])
    return(
        <div id="desc">
            {data? <p>{data}</p>: ""}
        </div>
    )
}

export default Description