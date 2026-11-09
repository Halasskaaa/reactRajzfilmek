type StatisztikaProps = {
    db: number;
    earliest: number;
    latest: number;
}

export default function Statisztika(props: StatisztikaProps) {
    return <>
    <div>
        <h1>Rajzfilmek</h1>
        <h2>Rajzfilmek száma: {props.db}</h2>
        <h2>Legkorábbi megjelenési év: {props.earliest}</h2>
        <h2>Legkésőbbi megjelenési év: {props.latest}</h2>
    </div>
    </>
}