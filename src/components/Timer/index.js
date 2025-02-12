import React from "react";
import "./Timer.css";

function Timer() {
  const calculateTimeDifference = () => {
    const now = new Date();
    const start = new Date("2023-07-24T21:30:00");

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();

    // Adjust for negative values
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += previousMonth.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    return { years, months, days, hours, minutes, seconds };
  };

  const [time, setTime] = React.useState(calculateTimeDifference());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeDifference());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flx flx-col flx-center timer-container">
      <h1 className="timer-heart">❤️</h1>
      <h1 className="timer-title">Hemos estado juntos por:</h1>
      
      <div className="flx flx-center timer-box">
        <div className="flx flx-col flx-center timer-unit">
          <span className="timer-number">{time.years}</span>
          <span className="timer-label">{time.years === 1 ? "Año" : "Años"}</span>
        </div>

        <span className="flx flx-col flx-center timer-number">:</span>

        <div className="flx flx-col flx-center timer-unit">
          <span className="timer-number">{time.months}</span>
          <span className="timer-label">{time.months === 1 ? "Mes" : "Meses"}</span>
        </div>

        <span className="flx flx-col flx-center timer-number">:</span>

        <div className="flx flx-col flx-center timer-unit">
          <span className="timer-number">{time.days}</span>
          <span className="timer-label">{time.days === 1 ? "Día" : "Días"}</span>
        </div>

        <span className="flx flx-col flx-center timer-number">:</span>

        <div className="flx flx-col flx-center timer-unit">
          <span className="timer-number">{time.minutes}</span>
          <span className="timer-label">{time.minutes === 1 ? "Minuto" : "Minutos"}</span>
        </div>

        <span className="flx flx-col flx-center timer-number">:</span>

        <div className="flx flx-col flx-center timer-unit">
          <span className="timer-number">{time.seconds}</span>
          <span className="timer-label">{time.seconds === 1 ? "Segundo" : "Segundos"}</span>
        </div>
      </div>

      <p className="timer-p">Tu amor hace a mi corazón sonreír</p>
      <p className="timer-face">🥰</p>
    </div>
  );
}

export { Timer };