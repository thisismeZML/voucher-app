import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import ProductPage from "./pages/ProductPage";
import SalePage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProduct from "./pages/EditProduct";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<DashboardPage/>}/>
        <Route path="product" element={<ProductPage/>}/>
        <Route path="product/:id" element={<EditProduct/>}/>
        <Route path="product/create" element={<CreateProductPage/>}/>
        <Route path="sale" element={<SalePage/>}/>
        <Route path="voucher" element={<VoucherPage/>}/>
        <Route path="*" element={<ProductPage/>}/>
    </Route>
))