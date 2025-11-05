import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, MousePointer2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DragHintCarousel() {
  const containerRef = useRef();
  const [showHint, setShowHint] = useState(true);

  return (
    <div className="relative w-full">
      {/* Animated swipe hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 flex flex-row gap-25 items-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
                animate={{ x: [0, 30, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <MousePointer2 size={22} strokeWidth={1.5} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
