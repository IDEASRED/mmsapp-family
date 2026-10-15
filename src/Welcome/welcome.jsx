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
import { isValidPhone } from '../service/familyAuth.js';
import { userDataContext } from '../context/userData-context.js';
import './Welcome.scss';
import mxflag from '../img/mexico.png';
import usaflag from '../img/usa.png';
import imgBranding from '../img/landing-bottom-hero.svg';

function Welcome() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [translateEs, setTranslateEs] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [option, setOption] = useState('email');

  const { changeL } = useContext(userDataContext);

  const { loading, searchFamilyTracking } = userDataService();

  useEffect(() => {
    // Older versions cached every service here; it must not stay in the browser.
    localStorage.removeItem('servList');
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ shouldUnregister: true });

  const changeLanguage = (lng) => {
    setTranslateEs(!translateEs);
    changeL(lng);
    i18n.changeLanguage(lng);
  };

  const handleOption = (event) => {
    setOption(event.target.value);
    setSearchError(null);
  };

  const onSubmit = async (data) => {
    setSearchError(null);
    const credentials = option === 'phone'
      ? { phone: data.phone, nip_rastreo: data.nip_rastreo }
      : { email: data.email, nip_rastreo: data.nip_rastreo };
    const { service, error } = await searchFamilyTracking(option, credentials);

    if (service !== undefined) {
      navigate(`/tracking/${service.id}`, { state: { service } });
      return;
    }

    setSearchError(error);
  };

  return (
    <Grid
      className="welcome lpage"
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
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
        {searchError ? <Alert style={{ marginTop: '1rem' }} severity="error" role="alert">{t(searchError)}</Alert> : ''}
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
              error={!!errors.email}
              helperText={errors.email ? t(errors.email.message) : ''}
              {...register('email', {
                required: 'RequiredField',
                pattern: { value: /^\S+@\S+\.\S+$/, message: 'InvalidEmail' },
              })}
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
              type="tel"
              fullWidth
              variant="standard"
              error={!!errors.phone}
              helperText={errors.phone ? t(errors.phone.message) : t('PhoneHelper')}
              {...register('phone', {
                required: 'RequiredField',
                validate: (value) => isValidPhone(value) || 'InvalidPhone',
              })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneRoundedIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
          <br />
          <TextField
            {...register('nip_rastreo', { required: 'RequiredField' })}
            id="nip_rastreo"
            label="NIP"
            variant="standard"
            type="text"
            error={!!errors.nip_rastreo}
            helperText={errors.nip_rastreo ? t(errors.nip_rastreo.message) : ''}
          />
          <Button
            variant="contained"
            type="submit"
            className="btnLogin fullw lpage"
            disabled={loading}
          >
            {loading ? (
              <TailSpin color="#fff" height={24} width={24} ariaLabel={t('LoadingLabel')} />
            ) : t('VerAhora')}
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}

export default Welcome;
