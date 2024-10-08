import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface iSubmitButtonProps {
  disabled: boolean;
  text: string;
}

export default function SubmitButton({ disabled, text }: iSubmitButtonProps) {
  return (
    <button
      type="submit"
      className="group flex items-center w-full justify-center gap-2 h-[3rem] bg-gray-900 text-white rounded-lg outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={disabled}
    >
      {disabled ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
      ) : (
        <>
          {text}{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
