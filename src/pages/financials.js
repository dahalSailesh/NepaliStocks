import React from "react";

// the state is empty right now because it's static; f(null) = UI
const Financials = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <h4>Kumari Bank 2019 Financial Report</h4>
      {/* <img src="../images/2019_BalanceSheet.png" height="200" width="200" /> */}
    </div>
  );
};

export default Financials;
