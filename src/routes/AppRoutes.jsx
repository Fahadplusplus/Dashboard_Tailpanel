import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layouts/main/Layout";
import Login from "../layouts/auth/Login";
import Signup from "../layouts/auth/Signup";
import ProcetedRoutes from "../layouts/auth/ProcetedRoutes"

import Dashboard from "../pages/Dashboard";
import Analytic from "../pages/Analytic";
import ResetPassword from "../layouts/auth/ResetPassword";
import Usermanagement from "../pages/Usermanagement";
import ShowUiComponents from "../pages/ShowUiComponents";
import ShowForms from "../pages/ShowForms";
import ShowTables from "../pages/ShowTables";
import Eproduct from "../pages/Eproduct";
import EaddProducts from "../pages/EaddProducts";
import Einvoice from "../pages/Einvoice";
import EcreateInvoice from "../pages/EcreateInvoice";
import Etransaction from "../pages/Etransaction";
import Product from "../pages/Product";
import Calander from "../pages/Calander";
import Pages from "../pages/FileManager";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";
import Tables from "../pages/Tables";
import Forms from "../pages/Forms";
import Faqs from "../pages/Faqs";
import PricingTable from "../pages/PricingTable";
import FileManager from "../pages/FileManager";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route element={<ProcetedRoutes />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytic />} />
            <Route path="/usermanagemennt" element={<Usermanagement />} />
            <Route path="/showUiComponents" element={<ShowUiComponents />} />
            <Route path="/showForms" element={<ShowForms />} />
            <Route path="/showTables" element={<ShowTables />} />
            <Route path="/eproduct" element={<Eproduct />} />
            <Route path="/eaddProducts" element={<EaddProducts />} />
            <Route path="/einvoice" element={<Einvoice />} />
            <Route path="/ecreateInvoice" element={<EcreateInvoice />} />
            <Route path="/etransaction" element={<Etransaction />} />
            <Route path="/product" element={<Product />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/calander" element={<Calander />} />
            <Route path="/filemanager" element={<FileManager />} />
            <Route path="/pricingtable" element={<PricingTable />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}