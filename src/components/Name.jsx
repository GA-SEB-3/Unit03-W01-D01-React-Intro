import "../Name.css"
function Name(){
    let myName = "Omar"

    const clickAlert = ()=>{
        alert("ALERT CLICKED")
    }


    // function clickAlert(){
      
    // }

    let student = {
        name: "Sayed",
        course:"SEB",
        city: "Manama"
    }

    let {name,city} = student

    console.log(`Hello my Name is ${name} and I live in ${city
    }`)

    console.log(myName.toUpperCase())
    return(
        <div>
            <h2 id="my-name">{myName.toUpperCase()}</h2>
            <button onClick={clickAlert}>Click For Alert</button>
        </div>
    )
}

export default Name