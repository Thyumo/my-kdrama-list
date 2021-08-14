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

const findDefaultDisplayed = (kDramas: KDrama[]) => {
  return kDramas.find(({ status }) => status === STATUSES.WATCHING) ||
  kDramas.find(({ status }) => status === STATUSES.PLANNED)
}

const computePageAfterRemove = (nbKDramas: number, currentPage: number) => {
  return nbKDramas % PAGE_SIZE === 1
    ? currentPage - 1
    : currentPage;
}

const throwError = (err: unknown, message: string) => {
  if (err instanceof Error) {
    throw new Error(`${message}: ${err.message}`);
  }
  throw err;
}

export {
  computePageAfterRemove,
  findDefaultDisplayed,
  replaceKDrama,
  throwError,
};
