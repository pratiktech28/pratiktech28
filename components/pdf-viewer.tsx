'use client'

import { Download, FileText } from 'lucide-react'
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

      {/* GSoC '26 Official Proposal Section */}
      <div className="mt-16 space-y-6">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            GSoC &apos;26 official proposal for gprMax
          </h3>
          <p className="text-gray-400 text-sm">Interactive proposal document with full details</p>
        </div>

        {/* Proposal CTA Button */}
        <div className="flex justify-center">
          <Button
            onClick={() => {
              window.open(
                'https://drive.google.com/file/d/1vodPBpHGcMlfoetJjca5clxAB5sShX27/view?usp=sharing',
                '_blank'
              )
            }}
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
            <FileText className="size-6 transition-transform group-hover:translate-y-1" />
            <span>View Full Proposal</span>
          </Button>
        </div>

        {/* Proposal PDF Viewer Container */}
        <div className="relative w-full rounded-[12px] border border-[#1f2937] bg-slate-900/40 p-1 shadow-[0_0_30px_rgba(59,130,246,0.15),0_0_60px_rgba(139,92,246,0.1)]">
          {/* Desktop View - 600px */}
          <div className="hidden h-[600px] w-full overflow-hidden rounded-[10px] bg-slate-950 md:block">
            <iframe
              src="https://drive.google.com/file/d/1vodPBpHGcMlfoetJjca5clxAB5sShX27/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              className="border-none"
              title="GSoC 26 Proposal Viewer"
            />
          </div>

          {/* Mobile View - 400px */}
          <div className="h-[400px] w-full overflow-hidden rounded-[10px] bg-slate-950 md:hidden">
            <iframe
              src="https://drive.google.com/file/d/1vodPBpHGcMlfoetJjca5clxAB5sShX27/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              className="border-none"
              title="GSoC 26 Proposal Viewer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
