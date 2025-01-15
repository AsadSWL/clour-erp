import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import MemebrReceiptLayer from "../components/MemebrReceiptLayer";

const MemebrReceiptPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Member Receipt" />

        {/* OrderListLayer */}
        <MemebrReceiptLayer />

      </MasterLayout>

    </>
  );
};

export default MemebrReceiptPage;
