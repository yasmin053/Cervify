import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion, AnimatePresence } from "framer-motion";
import modelOutput from "/model_output.png";
import generatedImage from "/Load_page.png";

const ModelCanvas = () => {
  // When false: display the "before" image; when true: display the generated image.
  const [compareMode, setCompareMode] = useState(false);
  const toggleCompare = () => setCompareMode((prev) => !prev);

  // Variant for a fast, smooth fade transition.
  const imageVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-300 to-white-300 ring-2 ring-blue-300">
      <div className="rounded-2xl bg-gray-50/10 backdrop-blur-md p-4 min-h-[600px] flex flex-col">
        <TransformWrapper initialScale={1}>
          {({ zoomIn, zoomOut }) => (
            <>
              {/* Control Bar */}
              <div className="flex justify-between w-full mb-2 px-2">
                <div className="flex space-x-2">
                  <button
                    onClick={() => zoomOut()}
                    className="bg-purple-500 text-white px-3 py-2 rounded-md shadow hover:bg-purple-600 transition duration-200"
                  >
                    −
                  </button>
                  <button
                    onClick={() => zoomIn()}
                    className="bg-purple-500 text-white px-3 py-2 rounded-md shadow hover:bg-purple-600 transition duration-200"
                  >
                    +
                  </button>
                  <button
                    onClick={toggleCompare}
                    className="bg-purple-500 text-white px-3 py-2 rounded-md shadow hover:bg-purple-600 transition duration-200"
                  >
                    {compareMode ? "Before" : "Compare"}
                  </button>
                </div>
                <button className="bg-blue-500 text-white px-3 py-2 rounded-xl shadow hover:bg-blue-600 transition duration-200">
                  Download
                </button>
              </div>

              {/* Image Area with fixed dimensions (900px x 600px) */}
              <div className="relative mx-auto w-[900px] h-[600px] overflow-hidden flex items-center justify-center">
                <AnimatePresence exitBeforeEnter>
                  {compareMode ? (
                    <motion.div
                      key="generated"
                      variants={imageVariant}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <TransformComponent>
                        <img
                          src={generatedImage}
                          alt="Generated Output"
                          className="w-full h-full object-contain rounded-xl"
                        />
                      </TransformComponent>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="before"
                      variants={imageVariant}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <TransformComponent>
                        <img
                          src={modelOutput}
                          alt="Before (Model Output)"
                          className="w-full h-full object-contain rounded-xl"
                        />
                      </TransformComponent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
};

export default ModelCanvas;
