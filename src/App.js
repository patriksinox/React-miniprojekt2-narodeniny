import React, { createElement } from "react";
import { useState } from "react";
import data from "./data.js";

function App() {
  const [ludia, setLudia] = useState(data);
  return (
    <React.Fragment>
      <section className="container">
        <h1>{ludia.length} narodenín dnes.</h1>
        {ludia.map((osoba) => {
          const { id, meno, vek, fotka } = osoba;
          return (
            <article className="ramik" key={id}>
              <img className="fotka" src={fotka} alt="osoba" />
              <div>
                <h5>{meno}</h5>
                <h6>{vek} rokov.</h6>
              </div>
            </article>
          );
        })}
        <div className="text-center">
          <button className="btn btn-primary" onClick={() => setLudia([])}>
            Vymaž narodeniny
          </button>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
