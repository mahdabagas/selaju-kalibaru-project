import React from "react";
import { Separator } from "@/components/ui/separator";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-emerald-800 px-6 py-8 text-white md:px-12 lg:px-20">
      <div className="text-secondary-sea space-y-6 md:flex md:items-start md:gap-6 md:space-y-0">
        <div className="space-y-1 md:w-64">
          <h3 className="text-lg font-medium">Contact Us</h3>
          <p className="text-sm">08123456789 - Rizky</p>
          <p className="text-sm">08164829372 - Afarandi</p>
        </div>
        <div className="md:w-64">
          <h3 className="mb-1 text-lg font-medium">Visit Us</h3>
          <p className="text-sm">
            Kecamatan Kalibaru, Kabupaten Banyuwangi, Provinsi Jawa Timur
          </p>
        </div>
        <div className="md:w-64">
          <h3 className="mb-1 text-lg font-medium">Follow Us</h3>
          <Link
            href={"https://www.instagram.com/kalibarucoffeefestival/"}
            target="_blank"
          >
            <div className="flex items-center gap-2">
              <FiInstagram className="size-5" />
              <p>@kalibarucoffeefestival</p>
            </div>
          </Link>
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
