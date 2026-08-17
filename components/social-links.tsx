function XIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.27-8.31L3 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.73L8.46 4.05H6.61L17.8 19.84Z" fill="currentColor" /></svg>;
}

function GitHubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.91-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.35 4.8-4.58 5.06.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" fill="currentColor" clipRule="evenodd" /></svg>;
}

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.37 7.62A2.18 2.18 0 1 0 5.36 3.25a2.18 2.18 0 0 0 .01 4.37ZM3.48 20.75h3.77V9.46H3.48v11.29ZM9.5 9.46h3.61V11h.05c.5-.95 1.73-1.95 3.56-1.95 3.81 0 4.51 2.51 4.51 5.77v5.93h-3.76V15.5c0-1.25-.02-2.87-1.75-2.87-1.75 0-2.02 1.37-2.02 2.78v5.34H9.5V9.46Z" fill="currentColor" /></svg>;
}

export function SocialLinks() {
  return <div className="social-links" aria-label="Social links">
    <a href="https://x.com/freberghmans" target="_blank" rel="noreferrer" aria-label="Frederic on X"><XIcon /></a>
    <span className="social-pending" aria-label="GitHub profile coming soon" title="GitHub profile coming soon"><GitHubIcon /></span>
    <a href="https://www.linkedin.com/in/fredericberghmans/" target="_blank" rel="noreferrer" aria-label="Frederic on LinkedIn"><LinkedInIcon /></a>
  </div>;
}
