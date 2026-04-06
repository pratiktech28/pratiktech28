'use client'

import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function PDFViewer() {
  const handleDownloadResume = () => {
    window.open(
      'https://drive.google.com/file/d/1NtK1bvGuTKjbf2Pq_UUzSlxwf0-An9o-/view?usp=drive_link',
      '_blank'
    )
  }

  return (
    <div className="w-full space-y-6">
      {/* Special CTA Button - Top Position */}
      <div className="flex justify-center">
        <Button
          onClick={handleDownloadResume}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg px-8 py-4 font-bold text-lg text-white shadow-xl transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
            boxShadow:
              '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              '0 0 50px rgba(59, 130, 246, 0.7), 0 0 100px rgba(139, 92, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(139, 92, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
        >
          <Download className="size-6 transition-transform group-hover:translate-y-1" />
          <span>Download Full Resume</span>
        </Button>
      </div>

      {/* PDF Viewer Container */}
      <div className="relative w-full rounded-[12px] border border-[#1f2937] bg-slate-900/40 p-1 shadow-[0_0_30px_rgba(59,130,246,0.15),0_0_60px_rgba(139,92,246,0.1)]">
        <div className="hidden h-[800px] w-full overflow-hidden rounded-[10px] bg-slate-950 md:block">
          <iframe
            src="https://drive.google.com/file/d/1NtK1bvGuTKjbf2Pq_UUzSlxwf0-An9o-/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            className="border-none"
            title="PDF Resume Viewer"
          />
        </div>

        {/* Mobile View - 500px */}
        <div className="h-[500px] w-full overflow-hidden rounded-[10px] bg-slate-950 md:hidden">
          <iframe
            src="https://drive.google.com/file/d/1NtK1bvGuTKjbf2Pq_UUzSlxwf0-An9o-/preview"
            width="100%"
            height="100%"
            allow="autoplay"
            className="border-none"
            title="PDF Resume Viewer"
          />
        </div>
      </div>
    </div>
  )
}
