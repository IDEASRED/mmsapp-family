/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Privacy.scss';

function Privacy() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" className="privacy-container">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        className="back-button"
        style={{ marginBottom: '2rem' }}
      >
        {t('Volver') || 'Volver'}
      </Button>

      <Typography variant="h3" component="h1" className="privacy-title">
        AVISO DE PRIVACIDAD INTEGRAL
      </Typography>

      <Typography variant="body2" color="textSecondary" className="privacy-date">
        Última actualización: 25 / 01 / 2026
      </Typography>

      <div className="privacy-content">
        <section className="privacy-section">
          <Typography variant="body1" className="section-text">
            Mexico Mortuary Services, con domicilio en Benito Juárez 1028, Esmeralda, 67140 Guadalupe, N.L.
            {' '}
            (en adelante, el &quot;Responsable&quot;), es responsable del tratamiento de los datos personales
            {' '}
            recabados a través de la aplicación móvil MMS App. Traslados USA – MX (en adelante, la &quot;Aplicación&quot;),
            {' '}
            de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (México),
            {' '}
            su Reglamento, y las leyes de privacidad aplicables en los Estados Unidos de América.
          </Typography>
          <Typography variant="body1" className="section-text">
            Este Aviso de Privacidad está dirigido exclusivamente a directores funerarios, casas funerarias y personal profesional autorizado que utilicen la Aplicación.
          </Typography>
        </section>

        <section className="privacy-section">
          <Typography variant="h5" component="h2" className="section-title">
            1. DATOS PERSONALES QUE SE RECABAN
          </Typography>
          <Typography variant="body1" className="section-text">
            La Aplicación móvil únicamente recopila los datos estrictamente necesarios para el registro,
            {' '}
            autenticación del Usuario Profesional y la carga de archivos relacionados con la prestación del servicio.
            {' '}
            Otros datos podrán ser gestionados fuera de la Aplicación por medios administrativos independientes.
          </Typography>
          <Typography variant="body1" className="section-text">
            El Responsable podrá recabar los siguientes datos personales del Usuario Profesional:
          </Typography>
          <div className="privacy-subsection">
            <Typography variant="h6" component="h3" className="subsection-title">
              a) Datos de identificación y contacto
            </Typography>
            <ul className="privacy-list">
              <li>Nombre completo</li>
              <li>Nombre de la funeraria o empresa</li>
              <li>Cargo o puesto</li>
              <li>Teléfono</li>
              <li>Correo electrónico</li>
              <li>Domicilio fiscal o comercial</li>
            </ul>
          </div>
          <div className="privacy-subsection">
            <Typography variant="h6" component="h3" className="subsection-title">
              b) Datos laborales y profesionales
            </Typography>
            <ul className="privacy-list">
              <li>Licencias o autorizaciones funerarias</li>
              <li>Documentos que acrediten la representación legal</li>
              <li>Información operativa de la funeraria</li>
            </ul>
          </div>
          <div className="privacy-subsection">
            <Typography variant="h6" component="h3" className="subsection-title">
              c) Datos de uso de la Aplicación
            </Typography>
            <ul className="privacy-list">
              <li>Usuario y credenciales de acceso</li>
              <li>Historial de cotizaciones y solicitudes</li>
              <li>Registros de actividad</li>
            </ul>
          </div>
          <div className="privacy-subsection">
            <Typography variant="h6" component="h3" className="subsection-title">
              d) Datos de localización
            </Typography>
            <Typography variant="body1" className="section-text">
              La Aplicación no realiza rastreo continuo ni en segundo plano de la ubicación del usuario.
            </Typography>
          </div>
          <div className="privacy-subsection">
            <Typography variant="h6" component="h3" className="subsection-title">
              e) Datos del fallecido (tratados como datos administrativos y sanitarios)
            </Typography>
            <ul className="privacy-list">
              <li>Nombre</li>
              <li>Fecha de defunción</li>
              <li>Lugar de fallecimiento</li>
              <li>Tipo de restos (cuerpo o cenizas)</li>
              <li>Información documental relacionada</li>
            </ul>
          </div>
          <Typography variant="body1" className="section-text">
            El Responsable no trata datos sensibles del fallecido con fines distintos a los estrictamente necesarios para la prestación del Transporte Funerario Internacional.
          </Typography>
        </section>

        <section className="privacy-section">
          <Typography variant="h5" component="h2" className="section-title">
            2. FINALIDADES DEL TRATAMIENTO
          </Typography>
          <Typography variant="body1" className="section-text">
            Los datos personales serán utilizados para las siguientes finalidades primarias y necesarias:
          </Typography>
          <ul className="privacy-list">
            <li>Verificar la identidad y carácter profesional del Usuario</li>
            <li>Proporcionar cotizaciones de Transporte Funerario Internacional</li>
            <li>Gestionar solicitudes de servicio</li>
            <li>Coordinar trámites sanitarios, consulares y aduanales</li>
            <li>Dar seguimiento y rastreo de servicios</li>
            <li>Enviar notificaciones operativas y administrativas</li>
            <li>Cumplir obligaciones legales y regulatorias</li>
          </ul>
          <Typography variant="h6" component="h3" className="subsection-title" style={{ marginTop: '1.5rem' }}>
            Finalidades secundarias
          </Typography>
          <ul className="privacy-list">
            <li>Mejora operativa del servicio</li>
            <li>Mejora de la Aplicación y experiencia del usuario</li>
          </ul>
          <Typography variant="body1" className="section-text">
            El Usuario puede negar el uso de sus datos para finalidades secundarias mediante solicitud expresa al correo indicado en este Aviso.
          </Typography>
        </section>

        <section className="privacy-section">
          <Typography variant="h5" component="h2" className="section-title">
            3. TRANSFERENCIA DE DATOS
          </Typography>
          <Typography variant="body1" className="section-text">
            Los datos personales podrán ser compartidos únicamente cuando sea necesario con:
          </Typography>
          <ul className="privacy-list">
            <li>Autoridades sanitarias, consulares y aduaneras de México y EUA</li>
            <li>Aerolíneas, transportistas y operadores logísticos</li>
            <li>Proveedores tecnológicos y plataformas de pago</li>
          </ul>
          <Typography variant="body1" className="section-text">
            Estas transferencias se realizan bajo estrictas medidas de confidencialidad y únicamente para cumplir las finalidades descritas.
          </Typography>
        </section>

        <section className="privacy-section">
          <Typography variant="h5" component="h2" className="section-title">
            4. MEDIDAS DE SEGURIDAD
          </Typography>
          <Typography variant="body1" className="section-text">
            El Responsable ha implementado medidas administrativas, técnicas y físicas para proteger los datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado.
          </Typography>
        </section>

        <section className="privacy-section">
          <Typography variant="h5" component="h2" className="section-title">
            5. DERECHOS ARCO
          </Typography>
          <Typography variant="body1" className="section-text">
            El Usuario tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales, así como a revocar el consentimiento otorgado.
          </Typography>
          <Typography variant="body1" className="section-text">
            Las solicitudes ARCO deberán enviarse a:
          </Typography>
          <ul className="privacy-list">
            <li>
              Correo electrónico:
              {' '}
              <a href="mailto:mexicomortuaryservices@gmail.com">
                mexicomortuaryservices@gmail.com
              </a>
            </li>
          </ul>
          <Typography variant="body1" className="section-text">
            La solicitud deberá incluir nombre, medio de contacto y descripción clara del derecho que se desea ejercer.
          </Typography>
        </section>

        <section className="privacy-section">
          <Typography variant="h5" component="h2" className="section-title">
            6. USO DE COOKIES Y TECNOLOGÍAS SIMILARES
          </Typography>
          <Typography variant="body1" className="section-text">
            La Aplicación puede utilizar tecnologías similares para fines de funcionamiento, seguridad y mejora del servicio.
            {' '}
            Estas tecnologías no recaban información personal distinta a la descrita en este Aviso.
          </Typography>
        </section>

        <section className="privacy-section">
          <Typography variant="h5" component="h2" className="section-title">
            7. CONSERVACIÓN DE LOS DATOS
          </Typography>
          <Typography variant="body1" className="section-text">
            Los datos personales serán conservados únicamente durante el tiempo necesario para cumplir las finalidades del tratamiento y las obligaciones legales aplicables.
          </Typography>
        </section>

        <section className="privacy-section">
          <Typography variant="h5" component="h2" className="section-title">
            8. MODIFICACIONES AL AVISO DE PRIVACIDAD
          </Typography>
          <Typography variant="body1" className="section-text">
            El Responsable se reserva el derecho de modificar este Aviso de Privacidad en cualquier momento.
            {' '}
            Las modificaciones estarán disponibles dentro de la Aplicación y surtirán efectos desde su publicación.
          </Typography>
        </section>

        <section className="privacy-section">
          <Typography variant="h5" component="h2" className="section-title">
            9. CONSENTIMIENTO
          </Typography>
          <Typography variant="body1" className="section-text">
            Al utilizar la Aplicación, el Usuario manifiesta su consentimiento para el tratamiento de sus datos personales conforme a este Aviso de Privacidad.
          </Typography>
        </section>

        <section className="privacy-section">
          <Typography variant="h5" component="h2" className="section-title">
            10. CONTACTO
          </Typography>
          <Typography variant="body1" className="section-text">
            Para cualquier duda relacionada con este Aviso de Privacidad:
          </Typography>
          <ul className="privacy-list">
            <li>Correo electrónico: [correo de contacto]</li>
            <li>Teléfono: 81 1934 0490</li>
          </ul>
        </section>
      </div>
    </Container>
  );
}

export default Privacy;
