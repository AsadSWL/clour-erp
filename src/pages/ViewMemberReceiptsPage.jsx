import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ViewMemberReceiptsLayer from "../components/ViewMemberReceiptsLayer";

const ViewMemberReceiptsPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Member Receipts" />

        {/* OrderListLayer */}
        <ViewMemberReceiptsLayer />

      </MasterLayout>

    </>
  );
};

export default ViewMemberReceiptsPage;
