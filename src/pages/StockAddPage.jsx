import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import StockAddLayer from "../components/StockAddLayer";

const StockAddPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Add Stock" />

        {/* OrderListLayer */}
        <StockAddLayer />

      </MasterLayout>

    </>
  );
};

export default StockAddPage;
