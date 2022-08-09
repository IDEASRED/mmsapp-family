/* eslint-disable react/jsx-filename-extension */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Grid,
  TextField,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  InputAdornment,
  Alert,
} from '@mui/material';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { userDataService } from '../service/userData.js';
import { userDataContext } from '../context/userData-context.js';
import './Welcome.scss';
import mxflag from '../img/mexico.png';
import usaflag from '../img/usa.png';
import imgBranding from '../img/landing-bottom-hero.svg';

function Welcome() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [translateEs, setTranslateEs] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [option, setOption] = useState('email');

  const { changeL, addServicesArray } = useContext(userDataContext);

  const { servicesArr, getAllServicesAdmin, loading, searchFamilyTracking, service } =
  userDataService();

  useEffect(() => {
    getAllServicesAdmin();
  }, []);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({});
  const [errorMessage, setErrorMessage] = useState('');

  const changeLanguage = (lng) => {
    setTranslateEs(!translateEs);
    changeL(lng);
    i18n.changeLanguage(lng);
  };

  const handleOption = (event) => {
    setOption(event.target.value);
  };

  const onSubmit = (data) => {
    if (servicesArr !== undefined) {
      addServicesArray(servicesArr);
      if (option === 'phone') {
        const obj = {
          phone: data.phone,
          nip_rastreo: data.nip_rastreo,
        };
        searchFamilyTracking(servicesArr, option, obj);
      } else {
        const obj2 = {
          email: data.email,
          nip_rastreo: data.nip_rastreo,
        };
        searchFamilyTracking(servicesArr, option, obj2);
      }
    }
  };

  useEffect(() => {
    if (loading) {
      // console.log('s: ', service);
      // console.log('n: ', notFound);
      // console.log('l: ', loading);
      if (service === undefined) {
        setNotFound(true);
        resetField('email');
        resetField('phone');
        resetField('nip_rastreo');
      } else if (!notFound && service !== undefined) {
        navigate(`/tracking/${service.id}`, { state: { data: service.id } });
        // navigate(`/tracking/${service.id}`);
      }
    }
  }, [loading, notFound]);

  useEffect(() => {
    // console.log('s2: ', service);
    if (service === undefined) {
      setTimeout(() => {
        setNotFound(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <Grid
      className="welcome lpage"
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {!loading ? (
        <Grid item xs={12} md={12} className="formLogin">
          <div className="flags">
            {!translateEs ? (
              <Button onClick={() => changeLanguage('en')}>
                <img src={usaflag} alt="usa flag" style={{ width: '60%' }} />
              </Button>
            ) : (
              <Button onClick={() => changeLanguage('es')}>
                <img src={mxflag} alt="mx flag" style={{ width: '60%' }} />
              </Button>
            )}
          </div>
          <div style={{ width: '100%', display: 'flex' }}>
            <img src={imgBranding} alt="Imagen representando acompañamiento" className="imgBranding" />
          </div>
          <h2
            style={{
              color: '#455a64',
              margin: '1rem 0 0 0',
            }}
          >
            {t('Welcome')}
          </h2>
          <p style={{ marginTop: '0' }}>{t('WelcomeDes')}</p>
          {(notFound) ? <Alert style={{ marginTop: '1rem' }} severity="error">{t('NotFound')}</Alert> : ''}
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ padding: '2rem 0', display: 'inline-grid', width: '100%' }}
          >
            <RadioGroup
              aria-labelledby="sucursales-radio"
              name="controlled-radio-buttons-group"
              value={option}
              onChange={handleOption}
            >
              <FormLabel id="sucursales-radio" style={{ marginTop: '0rem' }}>
                {t('FormDesc')}
              </FormLabel>
              <div className="flex">
                <FormControlLabel
                  value="email"
                  control={<Radio />}
                  label={t('Email')}
                />
                <FormControlLabel
                  value="phone"
                  disabled
                  control={<Radio />}
                  label={t('Telefono')}
                />
              </div>
            </RadioGroup>
            {option === 'email' ? (
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label={t('Email')}
                type="email"
                fullWidth
                variant="standard"
                {...register('email', { required: true })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            ) : (
              <TextField
                autoFocus
                margin="dense"
                id="phone"
                label={t('Telefono')}
                type="number"
                fullWidth
                variant="standard"
                {...register('phone', { required: true })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalPhoneRoundedIcon />
                    </InputAdornment>
                  ),
                }}
              />
            )}
            {errors.email && <span>{t('RequiredField')}</span>}
            <br />
            <TextField
              {...register('nip_rastreo', { required: true })}
              label="NIP"
              variant="standard"
              type="text"
            />
            {errors.password && <span>{t('RequiredField')}</span>}
            {errorMessage !== '' ? (
              <p className="errorM">{errorMessage}</p>
            ) : (
              ''
            )}
            <Button
              variant="contained"
              type="submit"
              className="btnLogin fullw lpage"
            >
              {t('VerAhora')}
            </Button>
          </form>
        </Grid>
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
    </Grid>
  );
}

export default Welcome;
