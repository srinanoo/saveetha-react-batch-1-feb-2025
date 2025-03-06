function Child1(props) {
    console.log(props);
    // props.age =1000;
    return (
        <>
            <h2>Child 1 Component</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Obj: {props.obj.id}</p>
        </>
    )
}

function Child2({name, age, obj}) {
    return (
        <>
            <h2>Child 2 Component</h2>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Obj: {obj.id}</p>
        </>
    )
}

// export default Child1;
export { Child1, Child2 };