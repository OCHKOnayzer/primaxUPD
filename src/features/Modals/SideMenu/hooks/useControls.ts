import { useAnimationControls } from "framer-motion";
import { useModal } from "@/shared";

export function useControls() {
  const controls = useAnimationControls();
  const closeModal = useModal((state) => state.closeModalWindow);

  const start = () =>
    controls.start({
      x: 0,
      backdropFilter: "blur(6px)",
      transition: { type: "spring", stiffness: 100, damping: 18 },
    });

  const close = () =>
    controls.start({
      x: "-150%",
      backdropFilter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeInOut" },
    });

  const handleClose = async () => {
    await close();
    closeModal();
  };

  return {
    start,
    controls,
    handleClose,
  };
}
