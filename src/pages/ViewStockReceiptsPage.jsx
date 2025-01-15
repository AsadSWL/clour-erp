import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ViewStockReceiptsLayer from "../components/ViewStockReceiptsLayer";

const ViewStockReceiptsPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Stock Receipts" />

        {/* OrderListLayer */}
        <ViewStockReceiptsLayer />

      </MasterLayout>

    </>
  );
};

export default ViewStockReceiptsPage;
