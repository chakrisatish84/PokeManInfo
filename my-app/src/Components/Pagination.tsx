import React from "react";

interface IPaginationProps {
  nextLink: () => void | null;
  previousLink: () => void | null;
  previousURL: string,
  nextPageURL:string
}

const Pagination: React.FC<IPaginationProps> = (props:IPaginationProps) => {
    const {nextLink, previousLink,previousURL,nextPageURL} = props;
  return <div>
      {previousURL && <button onClick={previousLink}>Back</button>}
      {nextPageURL && <button onClick={nextLink}>Next</button>}
  </div>;
};

export default Pagination;
