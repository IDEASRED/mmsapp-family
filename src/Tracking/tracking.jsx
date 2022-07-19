/* eslint-disable object-curly-newline */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable operator-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable consistent-return */
import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { blueGrey, grey } from '@mui/material/colors';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import AirportShuttleRoundedIcon from '@mui/icons-material/AirportShuttleRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import Grid3x3RoundedIcon from '@mui/icons-material/Grid3x3Rounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import {
 Button,
 Avatar,
 Dialog,
 DialogTitle,
 DialogActions,
 DialogContent,
} from '@mui/material';
import { TailSpin } from 'react-loader-spinner';
import './tracking.scss';
import { userDataContext } from '../context/userData-context.js';

const Modal = ({ open, title, handleClose, btn }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Dialog open={open} onClose={handleClose} maxWidth="false">
      <DialogTitle>{t(`${title}`)}</DialogTitle>
        {btn === 'Call' ? (
          <DialogContent>
            <p style={{ marginTop: '0' }}>
              {t('ModalContent')}
            </p>
          </DialogContent>
        ) : ''}
      <DialogActions>
        <Button onClick={handleClose}>{t('Cancel')}</Button>
        {btn === 'Yes' ? (
          <Button form="form-family" type="submit" variant="contained" onClick={() => navigate('/')}>{t(`${btn}`)}</Button>
          ) : (
          <Button form="form-family" type="submit" variant="contained" href="tel:528341027851">{t(`${btn}`)}</Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

function Tracking() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { changeL } = useContext(userDataContext);

  const [translateEs, setTranslateEs] = useState(false);
  const [loading, setLoading] = useState(true);
  const [trackingInfo, setTrackingInfo] = useState({});
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [btn, setBtn] = useState('');

  useEffect(() => {
    setTrackingInfo(location.state.data);
    setList(location.state.data.rastreo);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const changeLanguage = (lng) => {
    setTranslateEs(!translateEs);
    changeL(lng);
    i18n.changeLanguage(lng);
  };

  const handleServiceToShow = (serviceValue) => {
    switch (serviceValue) {
      case 'e-ruta':
        return (
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <AirportShuttleRoundedIcon className="transitionIcon" />
            {t('MOption22')}
          </p>
        );
      case 'e-punta':
        return (
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <AirportShuttleRoundedIcon className="transitionIcon" />
            {t('MOption21')}
          </p>
        );
      case 't-tramites':
        return (
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <AirportShuttleRoundedIcon className="transitionIcon" />
            {t('MOption2')}
          </p>
        );
      case 't-translado':
        return (
          <p style={{ display: 'flex', alignItems: 'center' }}>
            <AirportShuttleRoundedIcon className="transitionIcon" />
            {t('MOption1')}
          </p>
        );

      default:
        break;
    }
  };

  const Label = (itemService) => {
    switch (itemService) {
      case 'pendiente_cotizar':
        return (
          <p className="labelNotification n-red">
            {t('EsperandoCotizacion')}
          </p>
        );
      case 'cotizado':
        return (
          <p className="labelNotification n-blue">
            {t('StatusLBLSolicitarTransporte')}
          </p>
        );
      case 'translado_solicitado':
        return (
          <p className="labelNotification n-orange">
            {t('LBLStatusTransladoSolicitado')}
          </p>
        );

      case 'pendiente_confirmar':
        return (
          <p className="labelNotification n-orange">
            {t('LBLStatusPendienteConfirmar')}
          </p>
        );
      case 'confirmado':
        return (
          <p className="labelNotification n-red-custom">
            {t('LBLStatusConfirmado')}
          </p>
        );
      case 'recoger_hoy':
        return (
          <p className="labelNotification n-yellow">
            {t('LBLStatusRecogerHoy')}
          </p>
        );
      case 'transito_usa':
        return (
          <p className="labelNotification n-green-light">
            {t('LBLStatusEnTransito')} USA
          </p>
        );
      case 'transito_mx':
        return (
          <p className="labelNotification n-green">
            {t('LBLStatusEnTransito')} MX
          </p>
        );
      case 'entregado':
        return (
          <p className="labelNotification n-purple">
            {t('LBLStatusEntregado')}
          </p>
        );

      default:
        break;
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (x, y) => {
    setTitle(x);
    setBtn(y);
    setOpen(true);
  };
  return (
    <div style={{ background: grey[300] }}>
      {!loading ? (
        <div className="mainContainer">
          <div className="flags">
            {!translateEs ? (
              <Button onClick={() => changeLanguage('en')}>
                <LanguageRoundedIcon /> USA
                {/* <img src={usaflag} alt="usa flag" style={{ width: '60%' }} /> */}
              </Button>
            ) : (
              <Button onClick={() => changeLanguage('es')}>
                <LanguageRoundedIcon /> MX
                {/* <img src={mxflag} alt="mx flag" style={{ width: '60%' }} /> */}
              </Button>
            )}
          </div>
          <h1
            style={{
              margin: '1rem 0',
              color: blueGrey[700],
              textTransform: 'uppercase',
              fontSize: '1.7rem',
            }}
          >
            {t('Tracking')}
          </h1>

          <div className="nipDetails">
            <div className="borderBottom">
              <Grid3x3RoundedIcon fontSize="large" />
              <span>{trackingInfo.nip_rastreo}</span>{' '}
            </div>
            <hr />
            <div className="tripTo">
              <p>
                <span>{t('from')}</span> {trackingInfo.origen}
              </p>
              <ArrowForwardRoundedIcon />
              <p>
                <span>{t('to')}</span> {trackingInfo.destino}
              </p>
            </div>
          </div>

          <div className="trackingDetails">
            <h3>{t('TrackingDetails')}</h3>
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                color: '#000',
              }}
            >
              <BusinessRoundedIcon
                style={{
                  marginRight: '0.3rem',
                }}
              />
              {trackingInfo.mortuary_name}
            </p>
            {handleServiceToShow(trackingInfo.service)}
            {trackingInfo.sucursal !== undefined ? (
              <>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                  {trackingInfo.sucursal.nombre_sucursal ? (
                    <div style={{ display: 'flex' }}>
                      <LocationOnRoundedIcon /> {t('NombreSucursal')}:{' '}
                      {trackingInfo.sucursal.nombre_sucursal}
                    </div>
                  ) : (
                    ''
                  )}
                </p>
                <p style={{ margin: '0.5rem 0 1rem 0' }}>
                  {trackingInfo.sucursal.direccion_sucursal ? (
                    <>
                      {t('Direccion')}: {trackingInfo.sucursal.direccion_sucursal}
                    </>
                  ) : (
                    ''
                  )}
                </p>
              </>
            ) : (
              <div style={{ display: 'flex' }}>
                <LocationOnRoundedIcon /> {t('DireccionAlterna')}:{' '}
                {trackingInfo.direccion_alterna}
              </div>
            )}
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <CalendarMonthRoundedIcon /> {t('FechaArrival')}: {trackingInfo.arrivalDate}
            </p>
          </div>
          <div className="trackingMainArea">
            <h3>{t('ServiceStatus')}</h3>
            {Label(trackingInfo.status)}
            <h3>{t('TrackingStatus')}</h3>
            {list.length !== 1
              ? list.map((item, i) => (
                  <div className={i === 0 ? 'dnone' : 'flex trackingDetail'} key={i}>
                    <span>
                      <Avatar>
                        <ArrowForwardRoundedIcon />
                      </Avatar>
                      <span className="poste" />
                    </span>
                    <p><span>{item.date}</span> {item.tracking_info}</p>
                  </div>
                ))
              : 'No recods yet'}
          </div>
          <div className="btnResponsive">
            <Button
              variant="contained"
              className="btnCall halfBtn right"
              onClick={() => handleOpen('CallTitle', 'Call')}
            >
              <PhoneInTalkRoundedIcon />
            </Button>
            <Button
              variant="contained"
              className="btnLogout halfBtn left"
              // onClick={() => navigate('/')}
              onClick={() => handleOpen('LogoutTitle', 'Yes')}
            >
              <LogoutRoundedIcon />
            </Button>
          </div>
        </div>
      ) : (
        <div className="loader">
          <TailSpin
            color="#8f0f1e"
            height={50}
            width={100}
            ariaLabel="loading"
          />
          <p>{t('LoadingLabel')}</p>
        </div>
      )}
      <Modal
        open={open}
        handleClose={handleClose}
        title={title}
        btn={btn}
      />
    </div>
  );
}
export default Tracking;
