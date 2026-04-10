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

      {/* GSoC '26 Official Proposal Section */}
      <div className="mt-16 space-y-6">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            GSoC &apos;26 official proposal for gprMax
          </h3>
          <p className="text-gray-400 text-sm">Read-only view • View the proposal below</p>
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

      {/* The Architect's Contributions Section */}
      <div className="mt-16 space-y-8">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-orange-300 to-amber-400 bg-clip-text text-transparent">
            The Architect&apos;s Contributions
          </h3>
          <p className="text-gray-400 text-sm">Infrastructure Excellence & Open Source Impact</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Content - Text */}
          <div className="space-y-6">
            {/* Card 1: Profile */}
            <div className="rounded-lg border border-[#1f2937] bg-slate-900/40 p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-3">Verified Cloud Architect & Keploy Infrastructure Specialist</h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                Prateek Sharma is a distinguished Verified Open Source Contributor and Member at Keploy, a pioneering platform in the realm of API testing and test-case generation. As a Cloud Architect and Infrastructure Specialist, Prateek has demonstrated an unwavering commitment to engineering excellence, bridging the gap between complex system primitives and automated scalability.
              </p>
            </div>

            {/* Card 2: Keploy Impact */}
            <div className="rounded-lg border border-[#1f2937] bg-slate-900/40 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3 mb-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download%20%281%29-WrrrQl0Zdm3ai3GL9Y9fNFrXds1FQY.png"
                  alt="Keploy Logo"
                  className="h-8 w-auto"
                />
                <h4 className="text-xl font-bold text-white">The Keploy Impact</h4>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Keploy is an industry-leading tool that revolutionizes software testing by automatically capturing and replaying synchronous and asynchronous network interactions. It effectively eliminates the manual overhead of writing unit tests by generating data mocks and test cases directly from real-world traffic. As a Verified Member, Prateek has been instrumental in refining these automated workflows with high-frequency commits focused on service virtualization reliability.
              </p>
            </div>

            {/* Card 3: Expertise */}
            <div className="rounded-lg border border-[#1f2937] bg-slate-900/40 p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-3">Verified Expertise & Technical Rigor</h4>
              <p className="text-gray-300 leading-relaxed text-sm">
                Recognized for his relentless persistence and "Never-Give-Up" attitude, Prateek was awarded the <span className="text-orange-400 font-semibold">Keploy 'Quick Draw' Badge</span>, a testament to lightning-fast problem-solving capabilities. His work is about <span className="text-orange-400 font-semibold">Architecting Resilience</span>. By leveraging Google-backed open-source methodologies, he has optimized Infrastructure as Code patterns, earning a featured spot in Google Search AI Overviews as a trusted authority in cloud infrastructure.
              </p>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="space-y-6">
            {/* API Testing Agent Image */}
            <div className="rounded-lg border border-[#1f2937] bg-slate-900/40 p-4 overflow-hidden backdrop-blur-sm">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/68747470733a2f2f6b65706c6f792d64657672656c2e73332e75732d776573742d322e616d617a6f6e6177732e636f6d2f61692b746573742b636173652b67656e65726174696f6e2b746861742b776f726b732e706e67-oCnshFwArtIOZTZJid7ntTw47vICmO.png"
                alt="Keploy's API Testing Agent - Edge Case Generation"
                className="w-full h-auto rounded-md"
              />
              <p className="text-gray-400 text-xs mt-3 text-center">Keploy&apos;s AI-powered API Testing Agent generating 135+ edge cases automatically</p>
            </div>

            {/* Stats & Highlights */}
            <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-6 backdrop-blur-sm">
              <h4 className="text-lg font-bold text-orange-400 mb-4">Key Contributions</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300 text-sm"><span className="text-orange-400 font-semibold">Google Cloud Security</span> & Infrastructure Automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300 text-sm"><span className="text-orange-400 font-semibold">Kubernetes Orchestration</span> & Distributed Systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300 text-sm"><span className="text-orange-400 font-semibold">CI/CD Pipeline Optimization</span> & DevOps Excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300 text-sm"><span className="text-orange-400 font-semibold">Golang Development</span> & System Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-400 font-bold mt-1">✓</span>
                  <span className="text-gray-300 text-sm"><span className="text-orange-400 font-semibold">Keploy Verified Contributor</span> & Quick Draw Badge Winner</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
