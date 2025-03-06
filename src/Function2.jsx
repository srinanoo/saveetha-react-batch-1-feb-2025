export function Nest1() {
    return (
        <>
            <h2>Nest Child 1</h2>

            <Nest2 />
        </>
    )
}

function Nest2() {
    return (
        <>
            <h2>Nest Child 2</h2>
        </>
    )
}