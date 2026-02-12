// SET NEXT INDIA MATCH DATE & TIME
// Format: YYYY-MM-DDTHH:MM:SS
const matchTime = "2026-02-15T19:19:00";

// Match live link (scorecard / live stream)
const matchLink = "https://www.icc-cricket.com/tournaments/mens-t20-world-cup-2026/matches/268086/india-vs-pakistan";

function startCountdown() {
  const target = new Date(matchTime).getTime();

  const timer = setInterval(() => {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      clearInterval(timer);

      document.getElementById("match-title").innerText =
        "INDIA MATCH IS STARTED";

      document.getElementById("countdown").classList.add("hidden");

      const btn = document.getElementById("live-btn");
      btn.classList.remove("hidden");
      btn.href = matchLink;

      const badge = document.getElementById("liveBadge");
      badge.classList.add("live");
      badge.innerHTML = `<span class="dot"></span> LIVE`;

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