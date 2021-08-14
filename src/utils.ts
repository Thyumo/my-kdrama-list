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

const throwError = (err: unknown, message: string) => {
  if (err instanceof Error) {
    throw new Error(`${message}: ${err.message}`);
  }
  throw err;
}

export {
  replaceKDrama,
  throwError,
};
