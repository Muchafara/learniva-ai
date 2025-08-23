import { Suspense } from 'react'


import { ApplyForm } from './ApplyForm'

export default function ApplyPage() {
  return (
    <>

      <main className="bg-white dark:bg-black overflow-hidden">
        <section className="pt-28 pb-16">
          <div className="w-[95vw] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-2">
                Job Application
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Apply to join Learniva AI. We review every application carefully.
              </p>
            </div>

            <Suspense fallback={<div className="text-center text-gray-600 dark:text-gray-300">Loading application form…</div>}>
              <ApplyForm />
            </Suspense>
          </div>
        </section>
      </main>

    </>
  )
}


