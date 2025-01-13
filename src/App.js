import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePageThree from "./pages/HomePageThree";
import CompanyPage from "./pages/CompanyPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ErrorPage from "./pages/ErrorPage";
import MembershipPage from "./pages/MembershipPage";
import { AuthProvider } from "./context/AuthContext";
import CreateMembershipPage from "./pages/CreateMembershipPage";
import MembershipEditPage from "./pages/MembershipEditPage";
import InstallmentsPage from "./pages/InstallmentsPage";
import InstallmentViewPage from "./pages/InstallmentViewPage";
import InventoryPage from "./pages/InventoryPage";
import InventoryAddPage from "./pages/InventoryAddPage";
import StockPage from "./pages/StockPage";
import StockAddPage from "./pages/StockAddPage";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter basename="/">
                <Routes>
                    <Route exact path="/" element={<SignInPage />} />
                    <Route exact path="/signup" element={<SignUpPage />} />
                    <Route exact path="/dashboard" element={<HomePageThree />} />
                    <Route exact path="/membership" element={<MembershipPage />} />
                    <Route exact path="/membership-form" element={<CreateMembershipPage />} />
                    <Route exact path="/membership-edit" element={<MembershipEditPage />} />
                    <Route exact path="/installments" element={<InstallmentsPage />} />
                    <Route exact path="/installment/view" element={<InstallmentViewPage />} />
                    <Route exact path="/inventory" element={<InventoryPage />} />
                    <Route exact path="/inventory/add" element={<InventoryAddPage />} />
                    <Route exact path="/stock" element={<StockPage />} />
                    <Route exact path="/stock/add" element={<StockAddPage />} />
                    <Route exact path="/settings" element={<CompanyPage />} />
                    
                    <Route exact path="*" element={<ErrorPage />} />


                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;