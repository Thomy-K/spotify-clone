"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
// import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";

interface ModalProviderProps {
  // products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Trick to prevent modals (client components) from seeing/opening during server-side rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  };
    

  return (
    <>
      <AuthModal />
      {/* <SubscribeModal products={products} /> */}
      <UploadModal />
    </>
  );
};

export default ModalProvider;
