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
  const [stage, setStage] = useState<'uploading' | 'processing' | 'complete'>('uploading');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [processingStep, setProcessingStep] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Handle the animation sequence
  useEffect(() => {
    if (stage === 'uploading') {
      // Upload progress animation
      const uploadInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(uploadInterval);
            setStage('processing');
            return 100;
          }
          return prev + 2;
        });
      }, 50);
      return () => clearInterval(uploadInterval);
    } 
    else if (stage === 'processing') {
      // Processing steps animation
      const processingInterval = setTimeout(() => {
        setProcessingStep(prev => {
          if (prev >= 2) {
            setStage('complete');
            return 0;
          }
          return prev + 1;
        });
      }, 1500);
      return () => clearTimeout(processingInterval);
    }
  }, [stage, processingStep]);

  const flashCards = [
    {
      front: "What are the two main types of pancreatic tumors discussed?",
      back: "1. Adenocarcinoma\n2. Neuroendocrine tumors"
    },
    {
      front: "What are the key challenges in pancreatic tumor management?",
      back: "1. Late-stage diagnosis\n2. Limited treatment responses"
    },
    {
      front: "Name three main treatment options for pancreatic tumors",
      back: "1. Surgery\n2. Chemotherapy\n3. Targeted therapies"
    }
  ];
  


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

  const tabs = ['Summary', 'Flash Cards', 'Exercises'];

  return (
  <div className="hidden md:flex bg-gray-50 dark:bg-black w-[80vw] max-w-5xl mx-auto my-12 rounded-md shadow-lg min-h-[600px] border border-gray-200 dark:border-white/20">
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
                className="flex items-center justify-center w-8 h-8 bg-black text-white dark:bg-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-900 dark:text-white">
                  Pancreatic Tumours: Comprehensive Overview.Docx
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
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
                {stage !== 'complete' ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center space-y-6 py-12"
                  >
                    {stage === 'uploading' ? (
                      <>
                        <motion.h2 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-lg font-semibold text-gray-900 dark:text-white"
                        >
                          Uploading Document...
                        </motion.h2>
                        <div className="w-full max-w-md">
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-blue-500"
                              initial={{ width: 0 }}
                              animate={{ width: `${uploadProgress}%` }}
                              transition={{ duration: 0.1 }}
                            />
                          </div>
                          <div className="mt-2 text-sm text-gray-500 text-center">
                            {uploadProgress}% Complete
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <motion.h2 
                          key={processingStep}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-lg font-semibold text-gray-900 dark:text-white"
                        >
                          {processingStep === 0 && "Analyzing Document..."}
                          {processingStep === 1 && "Generating Study Materials..."}
                          {processingStep === 2 && "Preparing Interactive Content..."}
                        </motion.h2>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
                        />
                      </>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
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
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel - Interactive Flash Cards */}
          <div className="w-80 bg-white dark:bg-black border-l border-gray-200 dark:border-white/10">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Flash Cards</h3>
              
              {stage === 'complete' && (
                <div className="space-y-6">
                  <motion.div
                    key={currentCard}
                    className="relative cursor-pointer"
                    onClick={() => setIsFlipped(prev => !prev)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="p-6 rounded-xl border border-gray-200 dark:border-white/10 transition-all duration-300 transform-gpu min-h-[250px] bg-gradient-to-br from-blue-500 to-green-500 dark:from-blue-600 dark:to-green-600"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex flex-col items-center justify-center h-full space-y-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 dark:bg-white/10 rounded-full mb-4">
                          {isFlipped ? (
                            <CheckCircle2 className="w-6 h-6 text-white" />
                          ) : (
                            <HelpCircle className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div className="text-center">
                          <p className="text-lg text-white font-medium whitespace-pre-line">
                            {isFlipped ? flashCards[currentCard].back : flashCards[currentCard].front}
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <motion.div
                          animate={{ rotate: isFlipped ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setIsFlipped(false);
                        setCurrentCard(prev => (prev > 0 ? prev - 1 : flashCards.length - 1));
                      }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous</span>
                    </motion.button>
                    <span className="text-sm text-gray-500">
                      {currentCard + 1} of {flashCards.length}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setIsFlipped(false);
                        setCurrentCard(prev => (prev < flashCards.length - 1 ? prev + 1 : 0));
                      }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnivaAIDashboard;