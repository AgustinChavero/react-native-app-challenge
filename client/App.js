import React from "react";
import { AuthProvider } from "./src/middlewares/auth-context/auth-context";
import AppNavigation from "./src/navigation/app-navigation";

export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
