import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import DealerReceiptLayer from "../components/DealerReceiptLayer";

const DealerReceiptPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Dealer Receipt" />

        {/* OrderListLayer */}
        <DealerReceiptLayer />

      </MasterLayout>

    </>
  );
};

export default DealerReceiptPage;
