export function LiveNotification({ text }: { text: string }) {
  return (
    <div className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
      </span>
      <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-green-400">Live</span>
      <span className="text-xs text-foreground/90">{text}</span>
    </div>
  );
}