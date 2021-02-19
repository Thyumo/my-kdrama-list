import { KDrama } from "./types";

const replaceKDrama = (newKDrama: KDrama, kDramas: KDrama[]) => {
  const updatedKDramas = [...kDramas];
  for (let i = 0; i < kDramas.length; i++) {
    const currentId = kDramas[i]._id;
    if (currentId === newKDrama._id) {
      updatedKDramas[i] = newKDrama;
      break;
    }
  }
  return updatedKDramas;
};

export { replaceKDrama };
