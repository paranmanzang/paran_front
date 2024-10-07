import { current } from '@reduxjs/toolkit';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

const Pagination = ({ 
  currentPage, 
  pageSize, 
  totalItems, 
  onPageChange, 
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  const handleLast = () => {
      onPageChange(totalPages);
  }

  const handleFront = () => {
    if (totalPages) {
      onPageChange(currentPage + 1);
    }
  }
  
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handleFront} disabled={currentPage === 1} className='p-3 border-1'>
        맨앞으로
      </button>
      <button onClick={handlePrevious} disabled={currentPage === 1} className='p-3 border-1'>
        이전
      </button>
      <span>
        {currentPage} 
        <span>원</span>
        <span>원</span>
        <span>원</span>
        <span>원</span>
         {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages} className='p-3 border-1'>
        다음
      </button>
      <button onClick={handleLast} className='p-3 border-1'>
        맨 뒤로
      </button>
    </div>
  );
};

export default Pagination;