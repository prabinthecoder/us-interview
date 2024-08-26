"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBack}
      className="bg-gray-100 text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 mb-8"
    >
      <span className="text-lg">←</span> {/* Arrow icon */}
    </button>
  );
};

export default BackButton;
