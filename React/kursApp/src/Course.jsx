
function Course({image, title, description}) {
    console.log(title);
    console.log(description);
    return ( 
        <>
            <img src={image}></img>
            <p>{title}</p>
            <p>{description}</p>
        </>
     );
}
export default Course;


