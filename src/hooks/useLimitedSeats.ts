import { useEffect, useState } from "react";

const SEATS_KEY = "maestra-seats-remaining";
const TICK_KEY = "maestra-seats-last-tick";
const MIN_SEATS = 5;
const MIN_INTERVAL_MS = 9 * 60 * 1000;
const MAX_INTERVAL_MS = 14 * 60 * 1000;

function randomInterval() {
  return MIN_INTERVAL_MS + Math.random() * (MAX_INTERVAL_MS - MIN_INTERVAL_MS);
}

function readState(): { seats: number; lastTick: number } {
  if (typeof window === "undefined") return { seats: 8, lastTick: Date.now() };
  const seatsRaw = localStorage.getItem(SEATS_KEY);
  const tickRaw = localStorage.getItem(TICK_KEY);
  if (seatsRaw && tickRaw) {
    const seats = parseInt(seatsRaw, 10);
    const lastTick = parseInt(tickRaw, 10);
    if (!Number.isNaN(seats) && !Number.isNaN(lastTick) && seats >= MIN_SEATS) {
      return { seats, lastTick };
    }
  }
  const seats = 7 + Math.floor(Math.random() * 3); // 7–9
  const lastTick = Date.now();
  localStorage.setItem(SEATS_KEY, seats.toString());
  localStorage.setItem(TICK_KEY, lastTick.toString());
  return { seats, lastTick };
}

export function useLimitedSeats() {
  const [seats, setSeats] = useState<number>(() => readState().seats);

  useEffect(() => {
    let nextInterval = randomInterval();

    const tick = () => {
      const { seats: current, lastTick } = readState();
      if (current <= MIN_SEATS) {
        setSeats(current);
        return;
      }
      if (Date.now() - lastTick >= nextInterval) {
        const updated = Math.max(MIN_SEATS, current - 1);
        const now = Date.now();
        localStorage.setItem(SEATS_KEY, updated.toString());
        localStorage.setItem(TICK_KEY, now.toString());
        setSeats(updated);
        nextInterval = randomInterval();
      } else {
        setSeats(current);
      }
    };

    tick();
    const id = setInterval(tick, 60 * 1000);
    return () => clearInterval(id);
  }, []);

  return seats;
}
