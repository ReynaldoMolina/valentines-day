import React from "react";

function Timer() {
  const startDate = new Date("07/24/2023");
  let endDate = new Date ();
  let timeDiff = Math.abs(startDate.getTime() - endDate.getTime());
  let seconds = Math.ceil(timeDiff / 1000);
  let minutes = Math.round(seconds / 60);
  let hours = Math.round(minutes / 60);
  let days = Math.round(hours / 24);
  let weeks = Math.round(days / 7);
  let months = Math.round(weeks / 4);
  let years = Math.round(months / 12);

  return (
    <div>
      <h1>Has estado enamorada por:</h1>
      <h2>{years} años</h2>
      <h2>{months} meses</h2>
      <h2>{weeks} semanas</h2>
      <h2>{days} días</h2>
      <h2>{hours} horas</h2>
      <h2>{minutes} minutos</h2>
      <h2>{seconds} segundos</h2>
      <h1>Tu amor hace a mi corazón sonreír</h1>
    </div>
  );
}

export { Timer };