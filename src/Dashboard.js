import React from 'react';

export default function Dashboard() {

    const filler = () => "foo";

    return (
        <section className="buttons">
        <div className="dashboardButtons">
          <button className="button" onClick={filler}>
            Add Strike
          </button>
          <button className="button" onClick={filler}>
              Add Ball
          </button>
          <button className="button" onClick={filler}>
              Add Hit
          </button>
          <button className="button" onClick={filler}>
              Add Foul
          </button>
        </div>
      </section>
    );
}