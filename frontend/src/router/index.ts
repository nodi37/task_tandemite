import { createWebHistory, createRouter } from "vue-router";
import NotFoundView from "@/views/NotFoundView.vue";
import { TempView } from "@/views/TempView";
import { MagazinesView } from "@/views/MagazinesView";
import { ProductView } from "@/views/ProductView";
import { CartView } from "@/views/CartView";

export const headerNavRoutes = [
  {
    label: "O Kazusie",
    name: "about-kazus",
    path: "/o-kazusie",
    component: TempView,
  },
  {
    label: "O firmie",
    name: "about-company",
    path: "/o-firmie",
    component: TempView,
  },
  {
    label: "Czasopisma",
    name: "magazines-view",
    path: "/czasopisma",
    component: MagazinesView,
  },
  {
    label: "Szkolenia",
    name: "trainings-view",
    path: "/szkolenia",
    component: TempView,
  },
  {
    label: "Baza wiedzy",
    name: "knowledge-base",
    path: "/baza-wiedzy",
    component: TempView,
  },
  {
    label: "Kazus TV",
    name: "kazus-tv",
    path: "/kazus-tv",
    component: TempView,
  },
  {
    label: "Kontakt",
    name: "contact-view",
    path: "/kontakt",
    component: TempView,
  },
];

const routes = [
  { name: "main", path: "/", component: TempView },
  { name: "product-view", path: "/produkt/:id", component: ProductView },
  { name: "cart-view", path: "/koszyk", component: CartView },
  ...headerNavRoutes.map(({ label: _, ...route }) => ({ ...route })),

  // Fallback
  { name: "not-found-view", path: "/404", component: NotFoundView },
  { path: "/:pathMatch(.*)*", redirect: "/404" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
