import { useState } from "react";

type KartyaProps = {
  cim: string;
  studio: string;
  megjelenes: number;
};

export function Kartya(props: KartyaProps) {
  const [megjelenes, setMegjelenes] = useState(false);

  return (
    <>
      <div className="card">
        <h2>{props.cim}</h2>
        <p>{props.studio}</p>
        <p>{props.megjelenes}</p>

        <p
          className={`badge position-absolute ${props.megjelenes < 2000 ? "bg-warning" : props.megjelenes >= 2000 && props.megjelenes < 2010 ? "bg-success" : "bg-primary"}`}
        >
          {props.megjelenes < 2000
            ? "Classic Cartoon"
            : props.megjelenes >= 2000 && props.megjelenes < 2010
              ? "Older Cartoon"
              : "Modern Cartoon"}
        </p>

        <button onClick={() => setMegjelenes(!megjelenes)}>
          {megjelenes ? "Elrejtés" : "Megjelenítés"}
        </button>
      </div>
    </>
  );
}
