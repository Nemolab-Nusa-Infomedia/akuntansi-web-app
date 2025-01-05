import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import BlogView from "../views/BlogView.vue";
import HargaView from "@/views/HargaView.vue";
import FeatureView from "@/views/feature/akuntansi/InvoiceView.vue";
import SolutionView from "@/views/SolutionView.vue";
import InvoiceView from "@/views/feature/akuntansi/InvoiceView.vue";
import BiayaView from "@/views/feature/akuntansi/BiayaView.vue";
import LaporanView from "@/views/feature/akuntansi/LaporanView.vue";
import AssetView from "@/views/feature/akuntansi/AssetView.vue";
import AkuntansiView from "@/views/feature/akuntansi/AkuntansiView.vue";
import InventoryView from "@/views/feature/supply-chain-management/InventoryView.vue";
import ManufakturView from "@/views/feature/supply-chain-management/ManufakturView.vue";
import MonthlyProfitView from "@/views/feature/perencanaan-dan-analisa-keuangan/MonthlyProfitView.vue";
import ManagementAnggaranView from "@/views/feature/perencanaan-dan-analisa-keuangan/ManagementAnggaranView.vue";
import CustomAnalyctycsView from "@/views/feature/perencanaan-dan-analisa-keuangan/CustomAnalyctycsView.vue";
import LaporanProfitabilitasView from "@/views/feature/perencanaan-dan-analisa-keuangan/LaporanProfitabilitasView.vue";
import IntegrationView from "@/views/feature/integrasi-dan-platform/IntegrationView.vue";
import HRISView from "@/views/feature/integrasi-dan-platform/HRISView.vue";
import POSSystemView from "@/views/feature/integrasi-dan-platform/POSSystemView.vue";
import PayrollView from "@/views/feature/integrasi-dan-platform/PayrollView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { noNavbarFooter: true },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
      meta: { noNavbarFooter: true },
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/harga",
      name: "harga",
      component: HargaView,
    },
    {
      path: "/feature/akuntansi/invoice",
      name: "invoice",
      component: InvoiceView,
    },
    {
      path: "/feature/akuntansi/biaya",
      name: "biaya",
      component: BiayaView,
    },
    {
      path: "/feature/akuntansi/laporan",
      name: "laporan",
      component: LaporanView,
    },
    {
      path: "/feature/akuntansi/asset",
      name: "asset",
      component: AssetView,
    },
    {
      path: "/feature/akuntansi/akuntansi",
      name: "akuntansi",
      component: AkuntansiView,
    },
    {
      path: "/feature/supply-chain-management/inventory",
      name: "inventory",
      component: InventoryView,
    },
    {
      path: "/feature/supply-chain-management/manufaktur",
      name: "manufaktur",
      component: ManufakturView,
    },
    {
      path: "/feature/perencanaan-dan-analisa-keuangan/monthly-profit",
      name: "monthly-profit",
      component: MonthlyProfitView,
    },
    {
      path: "/feature/perencanaan-dan-analisa-keuangan/management-anggaran",
      name: "management-anggaran",
      component: ManagementAnggaranView,
    },
    {
      path: "/feature/perencanaan-dan-analisa-keuangan/custom-analyctycs",
      name: "custom-analyctycs",
      component: CustomAnalyctycsView,
    },
    {
      path: "/feature/perencanaan-dan-analisa-keuangan/laporan-profitabilitas",
      name: "laporan-profitabilitas",
      component: LaporanProfitabilitasView,
    },
    {
      path: "/feature/integrasi-dan-platform/integrasi",
      name: "integrasi",
      component: IntegrationView,
    },
    {
      path: "/feature/integrasi-dan-platform/HRIS",
      name: "HRIS",
      component: HRISView,
    },
    {
      path: "/feature/integrasi-dan-platform/POS-system",
      name: "POS-system",
      component: POSSystemView,
    },
    {
      path: "/feature/integrasi-dan-platform/payroll",
      name: "payroll",
      component: PayrollView,
    },
    {
      path: "/solution",
      name: "solution",
      component: SolutionView,
    },
  ],
});

export default router;
