import React from "react";

function Pagination({
  totalUsers,
  postsPerPage,
  setPostsPerPage,
  currentPage,
  setCurrentPage,
}) {
  const totalPages = Math.ceil(totalUsers / postsPerPage);

  const start = (currentPage - 1) * postsPerPage + 1;
  const end = Math.min(currentPage * postsPerPage, totalUsers);

  return (
    <div className="pagination-container">
      
     
      <div className="pagination-left">
        <span>Items per page</span>

        <select
          value={postsPerPage}
          onChange={(e) => {
            setPostsPerPage(Number(e.target.value));
            setCurrentPage(1); 
          }}
        >
             <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>

        <span>
          {start}–{end} of {totalUsers} items
        </span>
      </div>

    
      <div className="pagination-right">
        
       
        <button
          className="nav-btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
        >
          ⏮
        </button>

       
        <button
          className="nav-btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          ◀
        </button>

     
        <input
          className="page-input"
          type="number"
          min={1}
          max={totalPages}
          value={currentPage}
          onChange={(e) => {
            let page = Number(e.target.value);
            if (page >= 1 && page <= totalPages) {
              setCurrentPage(page);
            }
          }}
        />

        <div><span className="me-2">of </span>{totalPages}</div>

        {/* Next */}
        <button
          className="nav-btn"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          ▶
        </button>

        {/* Last */}
        <button
          className="nav-btn"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
        >
          ⏭
        </button>
      </div>
    </div>
  );
}

export default Pagination;