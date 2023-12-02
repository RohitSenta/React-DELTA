function Title() {
    let name = "Rohit";
    return ( 
        <div>
            <h1>I am the Title!</h1>
            <h3>I am the Description!</h3>

            <div>
                <p>Hi, I am {name.toUpperCase()} </p>
                <p>2 * 2  = {2 * 2}</p>
            </div>
        </div>
    )
  }

// export - default export - for single item
export default Title;

// export - named export - for multiple item
// export { Title };