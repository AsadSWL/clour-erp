import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import StockReceiptViewLayer from "../components/StockReceiptViewLayer";

const StockReceiptViewPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Stock Receipt" />

        {/* OrderListLayer */}
        <StockReceiptViewLayer />

      </MasterLayout>

    </>
  );
};

export default StockReceiptViewPage;
