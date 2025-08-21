'use client'

import { useEffect, useMemo, useState, useCallback } from 'react'

type FeatureItem = {
  id: string
  title: string
  description: string
}

const FEATURE_ITEMS: FeatureItem[] = [
  {
    id: 'note-to-animation-technology',
    title: 'Note-to-Animation Technology',
    description:
      'Turn static notes into dynamic, animated explanations. Learniva AI interprets your text, images, and markup to generate motion visuals that illustrate concepts, processes, and relationships—helping learners grasp ideas faster.'
  },
  {
    id: 'personalized-flashcards',
    title: 'Personalized Flashcards',
    description:
      'Automatically generate smart flashcards from your content. Spaced repetition, difficulty tagging, and adaptive sequencing ensure each review session targets the right topics at the right time.'
  },
  {
    id: 'learning-analytics',
    title: 'Learning Analytics',
    description:
      'Track progress with actionable insights. View mastery by topic, time-on-task, recall strength, and engagement trends to optimize outcomes for individuals, classrooms, or entire institutions.'
  },
  {
    id: 'multimodal-input-support',
    title: 'Multimodal Input Support',
    description:
      'Ingest PDFs, images, slides, handwriting, and plain text. Learniva AI unifies multiple formats into consistent, structured study materials and interactive content.'
  },
  {
    id: 'cross-platform-access',
    title: 'Cross-Platform Access',
    description:
      'Start on desktop, continue on mobile, and present on tablet. Your content and progress sync across devices so learning fits your day—anywhere, anytime.'
  },
  {
    id: 'ai-grading-assessment',
    title: 'AI Grading & Assessment',
    description:
      'Generate quizzes and assignments aligned to your learning goals, then receive instant, rubric-aligned grading and constructive feedback to close knowledge gaps quickly.'
  }
]

export function FeaturesSidebar() {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | null>(null)

  const featureById = useMemo(() => {
    const map: Record<string, FeatureItem> = {}
    for (const item of FEATURE_ITEMS) {
      map[item.id] = item
    }
    return map
  }, [])

  const selectByHash = useCallback(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : ''
    if (hash && featureById[hash]) {
      setSelectedFeatureId(hash)
    } else {
      setSelectedFeatureId(FEATURE_ITEMS[0].id)
    }
  }, [featureById])

  useEffect(() => {
    selectByHash()
    const onHashChange = () => selectByHash()
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [selectByHash])

  const handleSelect = (id: string) => {
    setSelectedFeatureId(id)
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `#${id}`)
    }
  }

  const selected = selectedFeatureId ? featureById[selectedFeatureId] : null

  return (
    <section className="pt-28 pb-20 bg-white dark:bg-black">
      <div className="w-[80vw] max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold font-poppins text-gray-900 dark:text-white mb-3">
            Explore Learniva AI Features
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A focused look at the capabilities powering engaging, personalized learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <aside className="md:sticky md:top-24">
            <nav aria-label="Features" className="space-y-2">
              {FEATURE_ITEMS.map((item) => {
                const isActive = item.id === selectedFeatureId
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors border ${
                      isActive
                        ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                        : 'bg-white/10 dark:bg-white/5 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800 hover:bg-black/5 dark:hover:bg-white/10'
                    }`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className="font-medium text-sm">{item.title}</span>
                  </button>
                )
              })}
            </nav>
          </aside>

          <div className="md:col-span-2">
            {selected && (
              <article
                id={selected.id}
                className="simple-card simple-glow rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {selected.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selected.description}
                </p>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


