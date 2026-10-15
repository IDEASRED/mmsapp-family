/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
/* eslint-disable array-callback-return */
/* eslint-disable object-curly-newline */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useContext } from 'react';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { userDataContext } from '../context/userData-context.js';
import { db } from '../firebase.js';
import { lookupFamilyService } from './familyAuth.js';

export const userDataService = () => {
  const [userDataServObj] = useState({});
  const [servicesArr, setServicesArr] = useState([]);
  const [service, setService] = useState(undefined);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { addServicesArray } = useContext(userDataContext);

  const getAllServicesAdmin = () => {
    const servicesRef = collection(db, 'services');
    const q3 = query(servicesRef, orderBy('timestamp', 'desc'));
    return onSnapshot(q3, (querySnapshot3) => {
      const servArr = [];
      querySnapshot3.forEach((docx) => {
        servArr.push({
          id: docx.id,
          ...docx.data(),
        });
      });
      localStorage.setItem('servList', JSON.stringify(servArr));
      setServicesArr(servArr);
    }, (error) => {
      // eslint-disable-next-line no-console
      console.error('Error loading services: ', error);
    });
  };

  // useEffect(() => {
  //   setLoading(true);
  // }, [servicesList]);

  const getServiceDetail = (array, id) => {
    const findService = array.find((i) => i.id === id);
    setService(findService);
  };

  const getServiceTracking = (array, serviceType, params) => {
    switch (serviceType) {
      case 'nip_rastreo':
        const findServiceTrack = array.find((i) => (i.nip_rastreo === params.search));
        return (setService(findServiceTrack), setLoading(true));
      case 'nombre_finado':
        const findServiceTrack2 = array.find((i) => (i.nombre_finado === params.search));
        return (setService(findServiceTrack2), setLoading(true));
      case 'nombre_contacto':
        const findServiceTrack3 = array.find((i) => (i.nombre_contacto === params.search));
        return (setService(findServiceTrack3), setLoading(true));
      case 'origen_destino':
        const findServiceTrack4 = array.find((i) => {
          const origen = i.origen === params.search_origen;
          const destino = i.destino === params.search_destino;
          if (origen && destino) {
            return i;
          }
        });
        return (setService(findServiceTrack4), setLoading(true));

      default:
        break;
    }
  };

  const searchFamilyTracking = async (searchBy, data) => {
    setLoading(true);
    const result = await lookupFamilyService(searchBy, data);
    setService(result.service);
    setLoading(false);
    return result;
  };

  return {
    userDataServObj,
    servicesArr,
    getAllServicesAdmin,
    getServiceDetail,
    service,
    setServicesArr,
    getServiceTracking,
    searchFamilyTracking,
    loading,
    setLoading,
  };
};
