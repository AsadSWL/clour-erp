import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import MembershipLayer from "../components/MembershipLayer";

const MembershipPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Membership" />

        {/* OrderListLayer */}
        <MembershipLayer />

      </MasterLayout>

    </>
  );
};

export default MembershipPage;
