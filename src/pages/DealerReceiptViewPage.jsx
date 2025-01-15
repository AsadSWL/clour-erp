import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import DealerReceiptsViewLayer from "../components/DealerReceiptsViewLayer";

const DealerReceiptViewPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Dealer Receipt" />

        {/* OrderListLayer */}
        <DealerReceiptsViewLayer />

      </MasterLayout>

    </>
  );
};

export default DealerReceiptViewPage;
