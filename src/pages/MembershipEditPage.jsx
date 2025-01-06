import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import EditMembershipLayer from "../components/EditMembershipLayer";


const MembershipEditPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Edit Memebrship" />

        {/* EditMembershipLayer */}
        <EditMembershipLayer />


      </MasterLayout>
    </>
  );
};

export default MembershipEditPage;
