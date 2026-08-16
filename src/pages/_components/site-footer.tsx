export default function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Motashim Husain &amp; Company</p>
        <p className="font-mono text-xs uppercase tracking-[0.2em]">
          Serving clients across India, the US &amp; the Middle East
        </p>
      </div>
    </footer>
  );
}
