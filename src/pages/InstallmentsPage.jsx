import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import InstallmentsLayer from "../components/InstallmentsLayer";

const InstallmentsPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Installments" />

        {/* OrderListLayer */}
        <InstallmentsLayer />

      </MasterLayout>

    </>
  );
};

export default InstallmentsPage;
