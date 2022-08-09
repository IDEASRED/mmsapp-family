/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
/* eslint-disable array-callback-return */
/* eslint-disable object-curly-newline */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useContext, useEffect } from 'react';
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  onSnapshot,
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { userDataContext } from '../context/userData-context.js';
import { db } from '../firebase.js';

export const userDataService = () => {
  const [userDataServObj, setUserData] = useState({});
  const [servicesArr, setServicesArr] = useState([]);
  const [service, setService] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const { addServicesArray } = useContext(userDataContext);

  const listServs = localStorage.getItem('servList');
  const servicesList = JSON.parse(listServs);
  const navigate = useNavigate();

  const getAllServicesAdmin = async () => {
    const servicesRef = collection(db, 'services');
    const q3 = query(servicesRef, orderBy('timestamp', 'desc'));
    const unsub = await onSnapshot(q3, (querySnapshot3) => {
      const servArr = [];
      querySnapshot3.forEach((docx) => {
        const userServices = {
          id: docx.id,
          ...docx.data(),
        };
        servArr.push(userServices);
        // addServicesArray(servArr);
        localStorage.setItem('servList', JSON.stringify(servArr));
        setServicesArr(servArr);
        // console.log('s get: ', servArr);
      });
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

  const searchFamilyTracking = (array, searchBy, data) => {
    // if (searchBy === 'phone') {
    //   const findServiceTracking = array.find((i) => (i.nip_rastreo === data.nip_rastreo));
    //   // console.log('find last:: ', findServiceTracking);
    //   setService(findServiceTracking);
    //   setLoading(true);
    //   if (findServiceTracking !== undefined) {
    //     const serviceObj = findServiceTracking.auth_list_phone.find((i) => (i === data.phone));
    //     // console.log('service last:: ', serviceObj);
    //     if (serviceObj !== undefined) {
    //       setService(findServiceTracking);
    //       setLoading(true);
    //     }
    //   }
    // }
    if (searchBy === 'email') {
      const findServiceTrackingEmail = array.find((i) => (i.nip_rastreo === data.nip_rastreo));
      // console.log('find last:: ', findServiceTrackingEmail);
      // setService(findServiceTrackingEmail);
      // setLoading(true);
      if (findServiceTrackingEmail !== undefined) {
        const serviceObjEmail = findServiceTrackingEmail.auth_list_email.find((i) => (i.email === data.email));
        // console.log('service last:: ', serviceObjEmail);
        setLoading(true);
        if (serviceObjEmail !== undefined) {
          setService(findServiceTrackingEmail);
          setLoading(true);
        }
      } else {
        setLoading(false);
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
