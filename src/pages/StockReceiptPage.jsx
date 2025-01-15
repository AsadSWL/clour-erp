import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import StockReceiptLayer from "../components/StockReceiptLayer";

const StockReceiptPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Stock Receipt" />

        {/* OrderListLayer */}
        <StockReceiptLayer />

      </MasterLayout>

    </>
  );
};

export default StockReceiptPage;