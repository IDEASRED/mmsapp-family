/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Typography,
  Container,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Terms.scss';

function Terms() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" className="terms-container">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        className="back-button"
        style={{ marginBottom: '2rem' }}
      >
        {t('Volver') || 'Volver'}
      </Button>

      <Typography variant="h3" component="h1" className="terms-title">
        TÉRMINOS Y CONDICIONES DE USO
      </Typography>

      <Typography variant="body2" color="textSecondary" className="terms-date">
        Última actualización: 25 / 01 / 2026
      </Typography>

      <div className="terms-content">
        <section className="terms-section">
          <Typography variant="body1" className="section-text">
            Bienvenido(a) a la Aplicación Móvil MMS App. Traslados USA – MX (en adelante, la &quot;Aplicación&quot;),
            {' '}
            disponible para sistemas operativos iOS y Android. La Aplicación es operada por Mexico Mortuary Services,
            {' '}
            con domicilio en Benito Juárez 1028, Esmeralda, 67140 Guadalupe, N.L. (en adelante, el &quot;Proveedor&quot;).
          </Typography>
          <Typography variant="body1" className="section-text">
            La Aplicación está dirigida exclusivamente a profesionales del sector funerario,
            {' '}
            incluyendo, de manera enunciativa más no limitativa, directores de funerarias,
            {' '}
            casas funerarias, agencias funerarias, operadores funerarios y personal autorizado
            {' '}
            (en adelante, el &quot;Usuario Profesional&quot;).
          </Typography>
          <Typography variant="body1" className="section-text">
            La finalidad de la Aplicación es permitir al Usuario Profesional cotizar, solicitar,
            {' '}
            coordinar, gestionar, rastrear y recibir notificaciones relacionadas con el Transporte Funerario
            {' '}
            Internacional desde los Estados Unidos de América hacia los Estados Unidos Mexicanos,
            {' '}
            tanto de cuerpos humanos como de cenizas humanas, conforme a la legislación aplicable en ambos países.
          </Typography>
          <Typography variant="body1" className="section-text">
            El uso de la Aplicación se encuentra sujeto además a las políticas de Apple App Store y Google Play Store.
          </Typography>
          <Typography variant="body1" className="section-text">
            La Aplicación no está destinada al público en general ni a consumidores finales.
          </Typography>
          <Typography variant="body1" className="section-text">
            Al descargar, acceder o utilizar la Aplicación, el Usuario Profesional reconoce y acepta
            {' '}
            quedar legalmente obligado por los presentes Términos y Condiciones. En caso de no estar de acuerdo,
            {' '}
            deberá abstenerse de utilizar la Aplicación.
          </Typography>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            1. DEFINICIONES
          </Typography>
          <Typography variant="body1" className="section-text">
            Para efectos de estos Términos y Condiciones, se entenderá por:
          </Typography>
          <ul className="terms-list">
            <li>
              <strong>Aplicación:</strong>
              {' '}
              Software móvil MMS App. Traslados USA – MX.
            </li>
            <li>
              <strong>Usuario:</strong>
              {' '}
              Persona física o moral que accede y utiliza la Aplicación.
            </li>
            <li>
              <strong>Servicios:</strong>
              {' '}
              Cotización, solicitud, gestión, seguimiento y notificación del transporte funerario internacional.
            </li>
            <li>
              <strong>Transporte Funerario Internacional:</strong>
              {' '}
              Traslado legal de restos humanos o cenizas humanas entre EUA y México.
            </li>
            <li>
              <strong>Autoridades Competentes:</strong>
              {' '}
              Entidades gubernamentales de salud, migración, aduanas y relaciones exteriores de EUA y México.
            </li>
          </ul>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            2. ALCANCE DEL SERVICIO
          </Typography>
          <Typography variant="body1" className="section-text">
            La Aplicación funciona como una herramienta digital de gestión y comunicación, que facilita el proceso administrativo y operativo del Transporte Funerario Internacional.
          </Typography>
          <Typography variant="body1" className="section-text">
            El Proveedor no garantiza que los tiempos de traslado, autorizaciones o liberaciones
            {' '}
            dependientes de Autoridades Competentes se realicen dentro de plazos específicos,
            {' '}
            ya que estos procesos están fuera de su control.
          </Typography>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            3. NO RELACIÓN CONSUMIDOR-PROVEEDOR
          </Typography>
          <Typography variant="body1" className="section-text">
            El Usuario reconoce y acepta expresamente que la Aplicación está dirigida exclusivamente a profesionales del sector funerario y no al público en general ni a consumidores finales.
          </Typography>
          <Typography variant="body1" className="section-text">
            El uso de la Aplicación no crea ni implica relación de consumo, relación cliente– proveedor,
            {' '}
            ni relación contractual directa entre el Proveedor y los familiares, deudos o terceros
            {' '}
            relacionados con el fallecido.
          </Typography>
          <Typography variant="body1" className="section-text">
            El Usuario actúa en todo momento como intermediario profesional independiente, siendo el único responsable frente a sus propios clientes finales.
          </Typography>
          <Typography variant="body1" className="section-text">
            Cualquier reclamación, queja, inconformidad o acción legal iniciada por familiares o terceros
            {' '}
            deberá ser atendida exclusivamente por el Usuario Profesional, quien libera y mantiene indemne
            {' '}
            al Proveedor frente a cualquier responsabilidad, daño, reclamación o gasto derivado.
          </Typography>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            4. REQUISITOS DE USO
          </Typography>
          <Typography variant="body1" className="section-text">
            Para utilizar la Aplicación, el Usuario declara y garantiza que:
          </Typography>
          <ul className="terms-list">
            <li>Es director funerario, representante legal o personal autorizado de una empresa funeraria legalmente constituida.</li>
            <li>Cuenta con las licencias, permisos y autorizaciones necesarias para operar servicios funerarios en su jurisdicción.</li>
            <li>Tiene capacidad legal para obligar a la persona moral que representa.</li>
            <li>Proporciona información veraz, completa, exacta y actualizada.</li>
            <li>Utiliza la Aplicación exclusivamente para fines profesionales, lícitos y funerarios.</li>
            <li>Cumple con la legislación sanitaria, consular, migratoria, aduanera y civil aplicable en Estados Unidos y México.</li>
          </ul>
          <Typography variant="body1" className="section-text">
            El Proveedor se reserva el derecho de verificar la calidad profesional del Usuario,
            {' '}
            así como de rechazar, suspender o cancelar el acceso a la Aplicación cuando el Usuario
            {' '}
            no acredite su carácter profesional o incurra en uso indebido.
          </Typography>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            5. REGISTRO Y CUENTA
          </Typography>
          <Typography variant="body1" className="section-text">
            Algunas funciones requieren la creación de una cuenta. El Usuario es responsable de:
          </Typography>
          <ul className="terms-list">
            <li>Mantener la confidencialidad de sus credenciales.</li>
            <li>Toda actividad realizada desde su cuenta.</li>
          </ul>
          <Typography variant="body1" className="section-text">
            El Proveedor no será responsable por accesos no autorizados derivados de negligencia del Usuario.
          </Typography>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            6. COTIZACIONES
          </Typography>
          <Typography variant="body1" className="section-text">
            Las cotizaciones mostradas en la Aplicación:
          </Typography>
          <ul className="terms-list">
            <li>Son estimaciones basadas en la información proporcionada por el Usuario.</li>
            <li>Pueden variar según documentación, ubicación, peso, tipo de servicio, regulaciones y tarifas oficiales.</li>
            <li>No constituyen un contrato definitivo hasta su aceptación formal y confirmación por el Proveedor.</li>
          </ul>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            7. DOCUMENTACIÓN Y RESPONSABILIDAD DEL USUARIO
          </Typography>
          <Typography variant="body1" className="section-text">
            El Usuario es responsable de proporcionar, cuando sea requerido:
          </Typography>
          <ul className="terms-list">
            <li>Certificados de defunción.</li>
            <li>Permisos sanitarios y consulares.</li>
            <li>Identificación y datos del fallecido y del solicitante.</li>
          </ul>
          <Typography variant="body1" className="section-text">
            La falta o error en la documentación puede generar retrasos, costos adicionales o la imposibilidad del servicio, sin responsabilidad para el Proveedor.
          </Typography>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            8. PAGOS
          </Typography>
          <Typography variant="body1" className="section-text">
            Cuando la Aplicación permita pagos:
          </Typography>
          <ul className="terms-list">
            <li>Los precios se mostrarán en la moneda aplicable.</li>
            <li>Los métodos de pago podrán incluir tarjetas, transferencias u otros medios habilitados.</li>
            <li>El Proveedor no almacena datos bancarios sensibles, los cuales son procesados por plataformas de pago externas.</li>
          </ul>
          <Typography variant="body1" className="section-text">
            Los pagos no son reembolsables una vez iniciado el proceso, salvo disposición expresa en un contrato específico.
          </Typography>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            9. RASTREO Y NOTIFICACIONES
          </Typography>
          <Typography variant="body1" className="section-text">
            La Aplicación puede ofrecer:
          </Typography>
          <ul className="terms-list">
            <li>Actualizaciones de estatus del servicio.</li>
            <li>Notificaciones push, correos electrónicos o mensajes.</li>
          </ul>
          <Typography variant="body1" className="section-text">
            Estas notificaciones son informativas y pueden estar sujetas a retrasos técnicos o administrativos.
          </Typography>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            10. LIMITACIÓN DE RESPONSABILIDAD
          </Typography>
          <Typography variant="body1" className="section-text">
            El Usuario reconoce que el Transporte Funerario Internacional está sujeto a procesos
            {' '}
            administrativos, sanitarios y consulares que dependen de Autoridades Competentes
            {' '}
            ajenas al control del Proveedor.
          </Typography>
          <Typography variant="body1" className="section-text">
            El Proveedor no será responsable, de manera enunciativa más no limitativa, por:
          </Typography>
          <ul className="terms-list">
            <li>Retrasos, retenciones o rechazos derivados de Autoridades Competentes.</li>
            <li>Errores u omisiones en la información o documentación proporcionada por el Usuario.</li>
            <li>Actos u omisiones de aerolíneas, transportistas, autoridades o terceros.</li>
            <li>Casos fortuitos o de fuerza mayor.</li>
          </ul>
          <Typography variant="body1" className="section-text">
            En la máxima medida permitida por la ley, la responsabilidad total del Proveedor
            {' '}
            se limitará exclusivamente al monto efectivamente pagado por el Usuario por el servicio
            {' '}
            específico que haya dado origen a la reclamación.
          </Typography>
          <Typography variant="body1" className="section-text">
            El Usuario libera y mantiene indemne al Proveedor frente a cualquier reclamación,
            {' '}
            daño, sanción, multa o responsabilidad derivada del incumplimiento legal o documental
            {' '}
            imputable al Usuario.
          </Typography>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            11. PROPIEDAD INTELECTUAL
          </Typography>
          <Typography variant="body1" className="section-text">
            Todos los derechos sobre la Aplicación, su diseño, código, logotipos y contenido son propiedad del Proveedor.
          </Typography>
          <Typography variant="body1" className="section-text">
            Queda prohibida su reproducción, distribución o modificación sin autorización expresa y por escrito.
          </Typography>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            12. PROTECCIÓN DE DATOS PERSONALES
          </Typography>
          <Typography variant="body1" className="section-text">
            El tratamiento de los datos personales se regirá por el Aviso de Privacidad disponible
            {' '}
            dentro de la Aplicación y en el sitio web oficial del Proveedor, en cumplimiento con
            {' '}
            la legislación aplicable en México y Estados Unidos.
          </Typography>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            13. SUSPENSIÓN Y TERMINACIÓN
          </Typography>
          <Typography variant="body1" className="section-text">
            El Proveedor podrá suspender o terminar el acceso a la Aplicación sin previo aviso cuando:
          </Typography>
          <ul className="terms-list">
            <li>Se detecte uso indebido.</li>
            <li>Exista incumplimiento de estos Términos.</li>
            <li>Sea requerido por autoridad legal.</li>
          </ul>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            14. MODIFICACIONES
          </Typography>
          <Typography variant="body1" className="section-text">
            El Proveedor podrá modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán publicadas en la Aplicación y entrarán en vigor a partir de su publicación.
          </Typography>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            15. LEGISLACIÓN APLICABLE Y JURISDICCIÓN
          </Typography>
          <Typography variant="body1" className="section-text">
            Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia,
            {' '}
            las partes se someten a los tribunales competentes de Guadalupe, Nuevo León, México,
            {' '}
            renunciando a cualquier otro fuero.
          </Typography>
        </section>

        <section className="terms-section">
          <Typography variant="h5" component="h2" className="section-title">
            16. CONTACTO
          </Typography>
          <Typography variant="body1" className="section-text">
            Para dudas o aclaraciones, el Usuario puede contactar al Proveedor en:
          </Typography>
          <ul className="terms-list">
            <li>
              Correo electrónico:
              {' '}
              <a href="mailto:mexicomortuaryservices@gmail.com">
                mexicomortuaryservices@gmail.com
              </a>
            </li>
            <li>Teléfono: 81 1934 0490</li>
          </ul>
          <Typography variant="body1" className="section-text" style={{ marginTop: '1.5rem', fontWeight: 'bold' }}>
            Al utilizar la Aplicación, el Usuario declara haber leído, entendido y aceptado los presentes Términos y Condiciones.
          </Typography>
        </section>
      </div>
    </Container>
  );
}

export default Terms;
