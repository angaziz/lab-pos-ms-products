module.exports = (data, totalData, first, offset) => {
  return {
    nodes: data,
    totalCount: totalData,
    pageInfo: {
      hasNextPage: (
        (totalData - (first + offset)) > 0
      ),
      hasPreviousPage: (
        offset > 0
      ),
      startCursor: offset,
    },
  };
};
