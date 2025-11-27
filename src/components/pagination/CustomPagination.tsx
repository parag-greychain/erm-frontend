import { Pagination } from "antd";
import "./CustomPagination.scss";

interface ICustomPagination {
  currentPage: number;
  total: number;
  handlePagination: (page: number) => void;
  pageSize: number;
  isHidePagination?: boolean;
}

const CustomPagination = ({
  currentPage,
  total,
  handlePagination,
  pageSize,
  isHidePagination = false,
}: ICustomPagination) => {
  const getFinalEntries = () => {
    if (currentPage * pageSize < total) {
      return currentPage * pageSize;
    } else {
      return total;
    }
  };

  return (
    <div className="pagination-setion">
      <p className="table-entries">
        Showing <strong>{(currentPage - 1) * pageSize + 1}</strong> to{" "}
        <strong>{getFinalEntries()}</strong> of <strong>{total}</strong> entries
      </p>

      {!isHidePagination && (
        <Pagination
          current={currentPage}
          total={total}
          onChange={handlePagination}
          pageSize={pageSize}
          showSizeChanger={false}
        />
      )}
    </div>
  );
};

export default CustomPagination;
