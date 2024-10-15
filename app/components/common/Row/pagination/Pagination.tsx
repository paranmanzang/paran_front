import React from 'react';

interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalItems: any;
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

  const handleFirst = () => {
    onPageChange(0);
  }

  const handleLast = () => {
    onPageChange(totalPages);
  }

  const handlePrevious = () => {
    if (currentPage > -1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
 
  return ( 
    <div className="pagination flex justify-center items-center">
      <button onClick={handleFirst} disabled={currentPage === 0} className='p-3 border-1'>
        맨앞으로
      </button>
      <button onClick={handlePrevious} disabled={currentPage === 0} className='p-3 border-1'>
        이전
      </button>
      <span>
        {currentPage} 
        <span> / </span>
        {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages} className='p-3 border-1'>
        다음
      </button>
      <button onClick={handleLast} disabled={currentPage === totalPages} className='p-3 border-1'>
        맨 뒤로
      </button>
    </div>
  );
};

export default Pagination;