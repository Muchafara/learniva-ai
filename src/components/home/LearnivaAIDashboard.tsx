"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { motion } from 'framer-motion';
import { 
  ChevronLeft, 
  MoreHorizontal, 
  FileText, 
  Settings,
  Sun,
  HelpCircle,
  Users,
  Calendar,
  MessageSquare,
  BookOpen,
  LayoutGrid,
  CheckCircle2,
  XCircle,
  Trophy,
  ArrowRight
} from 'lucide-react';

const LearnivaAIDashboard = () => {
  const [activeTab, setActiveTab] = useState('Flash Cards');

  // Auto-cycle tabs every 5 seconds
  useEffect(() => {
    const tabOrder = ['Summary', 'Flash Cards', 'Exercises', 'Grades'];
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIdx = tabOrder.indexOf(prev);
        return tabOrder[(currentIdx + 1) % tabOrder.length];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const sidebarItems = [
    { icon: LayoutGrid, label: 'Overview', active: false },
    { icon: BookOpen, label: 'Courses', active: false },
    { icon: Users, label: 'Groups', active: false },
    { icon: Calendar, label: 'Calendar', active: false },
    { icon: MessageSquare, label: 'Announcements', active: false },
    { icon: Settings, label: 'Ask eva', active: true },
    { icon: HelpCircle, label: 'Help', active: false }
  ];

  const tabs = ['Summary', 'Flash Cards', 'Exercises', 'Grades'];

  return (
  <div className="hidden md:flex bg-gray-50 dark:bg-black w-[95vw] max-w-6xl mx-auto my-12 rounded-md shadow-lg min-h-[600px] border border-gray-200 dark:border-white/20">
      {/* Sidebar */}
      <motion.div 
        className="bg-white dark:bg-black border-r border-gray-200 dark:border-white/10"
        animate={{ width: sidebarCollapsed ? 60 : 240 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
  <div className="p-4 border-b border-gray-200 dark:border-white/10 bg-white dark:bg-black">
          <div className="flex items-center space-x-2">
            <div className="w-32 h-8 flex items-center justify-center">
              <Image
                src="/Logo/LearnivaAI Logo - Black.svg"
                alt="Learniva Logo"
                width={128}
                height={32}
                className="dark:hidden"
                priority
              />
              <Image
                src="/Logo/LearnivaAI Logo - White.svg"
                alt="Learniva Logo"
                width={128}
                height={32}
                className="hidden dark:block"
                priority
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
  <nav className="p-2 space-y-1">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.label}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.active 
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {!sidebarCollapsed && <span>{item.label}</span>}
              </motion.button>
            );
          })}
        </nav>
      </motion.div>

      {/* Main Content */}
  <div className="flex-1 flex flex-col">
        {/* Header */}
  <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-white/10 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-3 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </motion.button>
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-900 dark:text-white">
                  Pancreatic Tumours: Comprehensive Overview.Docx
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Ask eva / Flash Cards</span>
              <ThemeToggle />
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
            </div>
          </div>
        </div>

  <div className="flex-1 flex">
          {/* Document Content */}
          <div className="flex-1 p-6">
            <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-white/10 h-full">
              {/* Document Header */}
              <div className="border-b border-gray-200 dark:border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Uploaded: Jan 6, 2025</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        Biology Research Paper.Docx
                      </span>
                    </div>
                  </div>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Document Content */}
              <div className="p-6 space-y-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Pancreatic Tumours: Comprehensive Overview
                </h2>
                
                <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    This document offers a comprehensive summary of pancreatic tumours, including their classification, prevalence, and recent research developments. It highlights the most common types, such as adenocarcinoma and neuroendocrine tumours, and discusses their respective risk factors and diagnostic approaches.
                  </p>
                  <p>
                    Key findings from recent studies are presented, emphasizing advances in early detection and treatment strategies. The document also reviews current therapeutic options, including surgery, chemotherapy, and targeted therapies, and compares their effectiveness based on patient outcomes.
                  </p>
                  <p>
                    In addition, the summary addresses ongoing challenges in the management of pancreatic tumours, such as late-stage diagnosis and limited treatment responses. Recommendations for future research and clinical practice are provided to support improved patient care and outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-80 bg-white dark:bg-black border-l border-gray-200 dark:border-white/10">
            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-white/20">
              <nav className="flex overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-xs font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                    title={tab}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Contents */}
            {activeTab === 'Flash Cards' && (
              <div className="p-6">
                {/* Completion Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-blue-500 to-green-500 rounded-xl p-6 text-white mb-6 border border-gray-200 dark:bg-gradient-to-br dark:from-blue-500 dark:to-green-500 dark:bg-black dark:border-white/20"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 dark:bg-white/10 rounded-full mb-4 mx-auto">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-center mb-2">
                    Nice effort, keep improving! 💪
                  </h3>
                  <p className="text-sm text-center opacity-90 mb-4">
                    You've completed this round of flashcards. Here's how you did:
                  </p>
                  {/* Accuracy */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Accuracy</span>
                      <span className="text-sm font-semibold">70%</span>
                    </div>
                    <div className="w-full bg-white bg-opacity-20 dark:bg-white/10 rounded-full h-2">
                      <motion.div
                        className="bg-white h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: '70%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  {/* Results */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <CheckCircle2 className="w-5 h-5 mr-1" />
                        <span className="text-2xl font-bold">7</span>
                      </div>
                      <p className="text-xs opacity-75">Correct</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <XCircle className="w-5 h-5 mr-1" />
                        <span className="text-2xl font-bold">7</span>
                      </div>
                      <p className="text-xs opacity-75">Wrong</p>
                    </div>
                  </div>
                  {/* Continue Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 border border-transparent dark:border-white/20"
                  >
                    <span>Continue Learning</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            )}
            {activeTab === 'Summary' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Document Summary</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">This section provides a concise summary of the uploaded document, highlighting the main points and key takeaways for quick review.</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>Overview of pancreatic tumours and their classifications</li>
                  <li>Key statistics and recent research findings</li>
                  <li>Summary of treatment options and outcomes</li>
                  <li>Important references and further reading</li>
                </ul>
              </div>
            )}
            {activeTab === 'Exercises' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Practice Exercises</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">Test your understanding with these exercises based on the document content.</p>
                <ol className="list-decimal pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>List three types of pancreatic tumours discussed in the document.</li>
                  <li>Describe one recent research finding mentioned.</li>
                  <li>What are the main treatment options for pancreatic tumours?</li>
                  <li>Summarize the key takeaway from the document.</li>
                </ol>
              </div>
            )}
            {activeTab === 'Grades' && (
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Your Grades</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">See your performance and progress for this topic.</p>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">85%</span>
                    <span className="text-sm text-gray-500">Overall Score</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }} />
                  </div>
                  <div className="flex justify-between w-full text-xs text-gray-500 mt-2">
                    <span>Correct: 17</span>
                    <span>Wrong: 3</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnivaAIDashboard;