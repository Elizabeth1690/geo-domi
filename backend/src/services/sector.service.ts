import { db } from "@backend/config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Sector } from "@backend/types/Sector";

const sectorCollection = collection(db, "sectores");

export const createSector = async (data: Omit<Sector, "id">) => {
  return await addDoc(sectorCollection, data);
};

export const getAllSectors = async (): Promise<Sector[]> => {
  const snapshot = await getDocs(sectorCollection);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Sector[];
};
