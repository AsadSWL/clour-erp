import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import MemberReceiptViewLayer from "../components/MemberReceiptViewLayer";

const MemberReceiptViewPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Member Receipt" />

        {/* OrderListLayer */}
        <MemberReceiptViewLayer />

      </MasterLayout>

    </>
  );
};

export default MemberReceiptViewPage;
