'use client'

import { FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PDFViewer() {
  const handleViewFullProposal = () => {
    window.open(
      'https://drive.google.com/file/d/1vodPBpHGcMlfoetJjca5clxAB5sShX27/view?usp=sharing',
      '_blank'
    )
  }

  return (
    <div className="w-full space-y-6">
      {/* PDF Viewer Container */}
      <div className="relative w-full rounded-[12px] border border-slate-700 bg-slate-900/40 p-1 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
        <div className="aspect-video w-full overflow-hidden rounded-[10px] bg-slate-950">
          <iframe
            src="https://drive.google.com/file/d/1vodPBpHGcMlfoetJjca5clxAB5sShX27/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            className="border-none"
            title="PDF Proposal Viewer"
          />
        </div>
      </div>

      {/* CTA Button with Gradient */}
      <div className="flex justify-center">
        <Button
          onClick={handleViewFullProposal}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              '0 10px 25px rgba(0, 0, 0, 0.3)'
          }}
        >
          <FileText className="size-5" />
          <span>View Full Proposal</span>
        </Button>
      </div>
    </div>
  )
}
