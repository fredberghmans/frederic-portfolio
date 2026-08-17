"use client";
import { useEffect, useState } from "react";
type Theme = "system" | "light" | "dark";

function PreferenceIcon({ type, active = false }: { type: Theme | "sound" | "inspect"; active?: boolean }) {
  if (type === "system") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="M8.5 20h7M12 16.5V20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
  if (type === "light") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="M12 2.8v2M12 19.2v2M2.8 12h2M19.2 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M18.5 5.5l-1.4 1.4M6.9 17.1l-1.4 1.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
  if (type === "dark") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19.3 15.2A8 8 0 0 1 8.8 4.7a8 8 0 1 0 10.5 10.5Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>;
  if (type === "sound") return <svg className="sound-state-icon" data-active={active} viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5v5h3.5l4.5 3.7V5.8L7.5 9.5H4Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path className="sound-wave sound-wave-one" d="M15 9a4 4 0 0 1 0 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /><path className="sound-wave sound-wave-two" d="M17.8 6.5a7.5 7.5 0 0 1 0 11" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /><path className="sound-muted" d="m16 10 4 4M20 10l-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" /><path d="M12 3v4M12 17v4M3 12h4M17 12h4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>;
}

function playTone(enabled: boolean, frequency = 520) {
  if (!enabled || typeof window === "undefined") return;
  const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;
  const context = new AudioContextClass();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const now = context.currentTime;
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.025, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
  oscillator.connect(gain); gain.connect(context.destination); oscillator.start(now); oscillator.stop(now + 0.1);
  oscillator.addEventListener("ended", () => void context.close());
}

function applyTheme(nextTheme: Theme) {
  const root = document.documentElement;
  root.dataset.themePreference = nextTheme;
  if (nextTheme === "system") root.removeAttribute("data-theme");
  else root.dataset.theme = nextTheme;
}

export function PreferenceControls() {
  const [theme, setTheme] = useState<Theme>("system");
  const [sound, setSound] = useState(false);
  const [inspect, setInspect] = useState(false);
  useEffect(() => {
    queueMicrotask(() => {
      const storedTheme = localStorage.getItem("fred-theme") as Theme | null;
      if (storedTheme === "light" || storedTheme === "dark") setTheme(storedTheme);
      setSound(localStorage.getItem("fred-sound") === "on");
      const storedInspect = localStorage.getItem("fred-inspect") === "on";
      setInspect(storedInspect);
      document.documentElement.toggleAttribute("data-inspect", storedInspect);
    });

    function playInteractionSound(event: MouseEvent) {
      if (localStorage.getItem("fred-sound") !== "on" || !(event.target instanceof Element)) return;
      const control = event.target.closest("button, a[href], [role='button'], [role='link']");
      if (!control || control.getAttribute("aria-disabled") === "true" || (control instanceof HTMLButtonElement && control.disabled)) return;

      if (control instanceof HTMLAnchorElement) {
        const href = control.getAttribute("href") ?? "";
        if (href.startsWith("mailto:") || href.startsWith("tel:")) playTone(true, 680);
        else if (href.startsWith("#") || control.origin === window.location.origin) playTone(true, 600);
        else playTone(true, 630);
        return;
      }

      playTone(true, 520);
    }

    document.addEventListener("click", playInteractionSound, true);
    return () => document.removeEventListener("click", playInteractionSound, true);
  }, []);
  function chooseTheme(nextTheme: Theme) { setTheme(nextTheme); localStorage.setItem("fred-theme", nextTheme); applyTheme(nextTheme); }
  function toggleSound() { const nextSound = !sound; setSound(nextSound); localStorage.setItem("fred-sound", nextSound ? "on" : "off"); playTone(nextSound, 560); }
  function toggleInspect() { const nextInspect = !inspect; setInspect(nextInspect); localStorage.setItem("fred-inspect", nextInspect ? "on" : "off"); document.documentElement.toggleAttribute("data-inspect", nextInspect); }
  const themeTooltips: Record<Theme, string> = {
    system: "Let your device make the mood call.",
    light: "For bright ideas and brave retinas.",
    dark: "Easy on the eyes. Serious about pixels.",
  };

  return (
    <div className="preferences" aria-label="Interface preferences" data-theme-choice={theme}>
      <span className="theme-indicator" aria-hidden="true" />
      {(["system", "light", "dark"] as Theme[]).map((option) => (
        <button className="preference-button" type="button" key={option} aria-label={`Use ${option} theme`} aria-pressed={theme === option} data-tooltip={themeTooltips[option]} onClick={() => chooseTheme(option)}>
          <PreferenceIcon type={option} />
        </button>
      ))}
      <span className="preference-divider" aria-hidden="true" />
      <button className="preference-button sound-button" type="button" aria-pressed={sound} aria-label={sound ? "Turn interface sound off" : "Turn interface sound on"} data-tooltip={sound ? "Okay, enough tiny bleeps?" : "You don’t want these nifty sounds?"} onClick={toggleSound}>
        <PreferenceIcon type="sound" active={sound} />
      </button>
      <button className="preference-button inspect-button" type="button" aria-pressed={inspect} aria-label={inspect ? "Hide interface inspection notes" : "Show interface inspection notes"} data-tooltip={inspect ? "Hide the designer’s homework." : "Curious what’s holding this together?"} onClick={toggleInspect}>
        <PreferenceIcon type="inspect" active={inspect} />
      </button>
    </div>
  );
}
