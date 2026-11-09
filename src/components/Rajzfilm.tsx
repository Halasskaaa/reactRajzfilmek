

type KartyaProps = {
    cim: string;
    studio: string;
    megjelenes: number;
}

export function Kartya(props: KartyaProps) {
    return <>
        <div className="card">
            <h2>{props.cim}</h2>
            <p>{props.studio}</p>
            <p>{props.megjelenes}</p>
        </div>
    </>
}