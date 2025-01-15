import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ViewDealerReceiptsLayer from "../components/ViewDealerReceiptsLayer";

const VIewDealerReceiptsPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Dealer Receipts" />

        {/* OrderListLayer */}
        <ViewDealerReceiptsLayer />

      </MasterLayout>

    </>
  );
};

export default VIewDealerReceiptsPage;
