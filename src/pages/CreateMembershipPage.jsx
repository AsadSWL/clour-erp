import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import CreateMembershipLayer from "../components/CreateMembershipLayer";


const CreateMembershipPage = () => {
  return (
    <>
      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Memebrship Form" />

        {/* AddProductLayer */}
        <CreateMembershipLayer />


      </MasterLayout>
    </>
  );
};

export default CreateMembershipPage;
