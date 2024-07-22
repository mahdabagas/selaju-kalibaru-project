import React from "react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="mt-10 w-full bg-primary px-6 py-8 text-white md:px-12 lg:px-20">
      <div className="text-secondary-sea space-y-6 md:flex md:items-start md:gap-6 md:space-y-0">
        <div className="space-y-1 md:w-64">
          <h3 className="text-lg font-medium">Contact Us</h3>
          <p className="text-sm">08123456789 - Rizky</p>
          <p className="text-sm">08164829372 - Afarandi</p>
        </div>
        <div className="md:w-64">
          <h3 className="mb-1 text-lg font-medium">Visit Us</h3>
          <p className="text-sm">Kecamatan Kalibaru, Bayuwangi, Jawa Timur</p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex justify-end gap-2">
        <p className="text-sm">KKN UGM SELAJU KALIBARU © 2024</p>
      </div>
    </div>
  );
};

export default Footer;
