import React from "react";
import { Button } from "@/components/ui/button";

const DownloadApp = () => {
  return (
    <section className="text-center p-10 bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-900">Manage Diabetes with Ease</h1>
      <p className="text-gray-600 mt-3">Track your glucose levels, diet, and medications with MyBete.</p>
      <Button className="mt-5 bg-blue-500 text-white px-6 py-3 rounded-full">Download Now</Button>
    </section>
  );
};

export default DownloadApp;
