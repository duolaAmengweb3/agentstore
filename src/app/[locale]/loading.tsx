export default function Loading() {
  return (
    <div className="min-h-screen">
      <div className="h-14 border-b border-border/60 bg-background/70 backdrop-blur sticky top-0 z-50">
        <div className="container h-full flex items-center">
          <div className="h-6 w-28 rounded-md bg-muted animate-pulse" />
        </div>
      </div>
      <div className="container py-10 md:py-14 space-y-10">
        <div className="space-y-3">
          <div className="h-4 w-32 rounded-md bg-muted animate-pulse" />
          <div className="h-10 md:h-14 w-3/4 rounded-md bg-muted animate-pulse" />
          <div className="h-4 w-1/2 rounded-md bg-muted animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl bg-card/40 border border-border/60 animate-pulse" />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-28 rounded-2xl bg-card/40 border border-border/60 animate-pulse"
              style={{ animationDelay: `${i * 80}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
