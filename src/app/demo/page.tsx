import { Metadata } from 'next'
import { DemoBookingForm } from '@/components/demo/DemoBookingForm'

export const metadata: Metadata = {
  title: 'Book Demo - Learniva AI',
  description: 'Schedule a personalized demo of Learniva AI for your enterprise. Choose from Zoom, Google Meet, or other platforms.',
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black overflow-hidden">
      <div className="w-[80vw] max-w-5xl mx-auto pt-28 pb-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-3">
            Book Your Enterprise Demo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience how Learniva AI can transform your organization's learning and knowledge management. 
            Schedule a personalized demo tailored to your needs.
          </p>
        </div>

        {/* Demo Form */}
        <DemoBookingForm />
      </div>
    </div>
  )
}
