// SET NEXT INDIA MATCH DATE & TIME
// Format: YYYY-MM-DDTHH:MM:SS
const matchTime = "2026-02-11T19:00:00";

function startCountdown() {
  const target = new Date(matchTime).getTime();

  setInterval(() => {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      document.getElementById("countdown").innerText = "MATCH STARTED";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerText =
      `${d}D : ${h}H : ${m}M : ${s}S`;

  }, 1000);
}

startCountdown();