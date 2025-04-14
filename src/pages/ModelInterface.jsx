import React from "react";
import ModelNavbar from "../components/ui/ModelNavbar";
import ModelCanvas from "../components/ui/ModelCanvas";
import ResultPanel from "../components/ui/ResultPanel";
import ImageSelector from "../components/ui/ImageSelector";

const ModelInterface = () => {
  return (
    <div
      className="min-h-screen w-screen bg-cover  bg-center overflow-h fixed "
      style={{ backgroundImage: "url('/Model_Interf_bg.png')" }}
    >
      {/* Fixed Navbar */}
      <header className="w-full fixed top-0 left-0 z-20">
        <ModelNavbar />
      </header>

      {/* Main Content Area (with extra top padding to offset the fixed navbar) */}
      <main className="pt-24 pb-14 justify-center  z-10">
        <div className="w-full px-8">
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* ModelCanvas occupies 60% width on md+ screens */}
            <div className="md:w-3/5 w-full">
              <ModelCanvas />
            </div>
            {/* ResultPanel occupies 40% width on md+ screens */}
            <div className="md:w-1/5 w-full">
              <div className="bg-gray-50/20 backdrop-blur-lg shadow-lg p-8 rounded-2xl min-h-[700px] ring-2 ring-blue-300  bg-gradient-to-r from-grey-100 to-blue-50">
                <ResultPanel />
              </div>
            </div>
          </div>
          {/* ImageSelector placed below the panels */}
          <div className="mt-8">
            <ImageSelector />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModelInterface;
