export default function Footer() {
  return (
    <footer className="py-20 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

          <div className="space-y-6">
          </div>

          <div className="text-left md:text-right space-y-4">
            <p className="font-mono text-[10px] text-accent/40 tracking-[0.3em] uppercase">Photographer & media Creator</p>
            <p className="font-mono text-[10px] text-light/10">
              © 2026 · ALL RIGHTS RESERVED
            </p>
          </div>

        </div>
        
        <div className="mt-20 flex justify-center">
          <div className="w-1 h-1 rounded-full bg-accent/20" />
        </div>
      </div>
    </footer>
  )
}
