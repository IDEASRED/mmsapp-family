import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      es: {
        translations: {
          Inicio: 'Inicio',
          Historial: 'Historial',
          Sucursales: 'Sucursales',
          Notificaciones: 'Notificaciones',
          Rastreo: 'Rastreo',
          LlamarACoordinador: 'Llamar al coordinador',
          Traductor: 'Traductor',
          ServiciosRecientes: 'Servicios Recientes',
          PapeleriaPendiente: 'Papeleria pendiente',
          EnTranscurso: 'En transcurso',
          BLUserHome: 'Da clic para revisar más opciones en tus servicios',
          StatusLBLSolicitarTransporte: 'Solicita tu traslado',
          TTLAddService: 'Agregue un servicio',
          BLAddService:
            'Complete la información necesaria para cotizar su servicio.',
          Service: 'Servicio',
          LBLChooseService: 'Elija un servicio',
          MTOptions: 'Traslado de restos humanos internacional',
          MOption1: 'Solo traslado',
          MOption2: 'Con trámites y preparación',
          MTOptions2: 'Envío de cenizas internacional',
          MOption21: 'De punta A a punta B',
          MOption22: 'En ruta',
          Origen: 'Origen',
          Destino: 'Destino',
          FechaRecoleccion: 'Fecha de recoleccion',
          Cotizacion: 'Cotizacion',
          LBLCotizacion: 'Pendiente de confirmar por el coordinador.',
          LBLPteConfirmar: 'Pendiente de confirmar',
          SolicitarCotizacion: 'Solicitar cotización',
          BtnEnviarCotizacion: 'Enviar cotización',
          SolicitarTransporte: 'Solicitar transporte',
          BLSolicitarTransporte:
            'Favor de llenar los últimos datos para su translado.',
          SitioRecoleccion: 'Sitio de recolección',
          SucursalFuneraria: 'En sucursal funeraria',
          AnotherAddress: 'Otro sitio de recolección',
          NombreFinado: 'Nombre del finado',
          NombreContacto: 'Nombre del contacto autorizado',
          TelefonoCAutorizado: 'Teléfono del contacto autorizado',
          Parentesco: 'Parentesco',
          NombreFamiliarRecibe: 'Nombre del familiar que lo recibe',
          DirectorFunerario: 'Director funerario',
          FunerariaRecibe: 'Funeraria que recibe',
          Telefono: 'Teléfono',
          TelefonoDeLaFuneraria: 'Teléfono de la funeraria',
          CorreoDeLaFuneraria: 'Correo de la funeraria',
          DireccionEntrega: 'Dirección de entrega',
          DireccionAlterna: 'Dirección alterna',
          Municipio: 'Municipio',
          Estado: 'Estado',
          TamanoAtaud: 'Tamaño del ataud',
          TamanoAtaud1: 'Americano',
          TamanoAtaud2: 'Optima o Medida Estandar Mexicano',
          DatoSensible: 'Dato sensible',
          Notas: 'Notas',
          Documents: 'Documentos',
          DocumentacionTranslado: 'Documentación para translado',
          EntregaPapeleriaChofer: 'Entregar papelería al chofer',
          SubirPapeleria: 'Subir papelería',
          LBLSubirPapeleria:
            'En todos los traslados es necesario entregar la papelería al chofer.',
          LBLSubirPapeleria2:
            'Cargar la papelería te ayuda a organizar la información en un solo lugar.',
          ActaDefuncion: 'Acta de defunción',
          PermisoTransito: 'Permiso de tránsito',
          ConstanciaCuerpo: 'Constancia de cuerpo preparado',
          VisadoConsular: 'Visado consular',
          FinishedDocument: 'Carta de finalización de servicios',
          Perfil: 'Mi perfil',
          LBLPerfil:
            'En esta sección podrá editar algunos datos, asi como agregar sus sucursales.',
          DatosPersonales: 'Datos personales',
          Nombre: 'Nombre',
          Correo: 'Correo',
          Puesto: 'Puesto',
          Actualizar: 'Actualizar',
          ActualizarFecha: 'Actualizar fecha',
          Fecha: 'Fecha',
          FechaArrival: 'Fecha estimada de llegada',
          AgregarSucursales: 'Agregar mis sucursales',
          LBLAgregarSucursales:
            'En la sección de Sucursales podrá editar los datos necesarios.',
          RevisarSucursales: 'Revisar mis sucursales',
          LBLNotificaciones:
            'En esta sección podrá revisar el listado de sus notificaciones.',
          LBLHistorial:
            'En esta sección podrá revisar el historial de sus servicios concluidos.',
          LBLStatusEntregado: 'Entregado',
          LBLSucursales:
            'En esta sección podrá revisar el listado de sus sucursales.',
          EditarSucursal: 'Editar sucursal',
          Direccion: 'Direccion',
          NombreSucursal: 'Nombre de sucursal',
          DetallesServicio: 'Detalles del servicio',
          LBLDetallesServicio:
            'En esta sección podrá revisar el detalle de su servicio.',
          LBLServicioDesc:
            'Bajo los siguientes detalles, favor de agregar costo de sercivio',
          LBLStatus: 'Estatus',
          LBLStatusPendienteCotizar: 'Pendiente de cotizar',
          LBLStatusCotizado: 'Cotizado',
          LBLStatusTransladoSolicitado: 'Traslado solicitado',
          LBLStatusPendienteConfirmar: 'Esperando confirmación',
          LBLStatusConfirmado: 'Confirmado',
          LBLStatusRecogerHoy: 'Recoger hoy',
          LBLStatusEnTransito: 'En tránsito',
          LBLStatusEnTransitoUSA: 'En tránsito USA',
          LBLStatusEnTransitoMX: 'En tránsito MX',
          CambiarStatus: 'Cambiar estatus',
          ElegirStatus: 'Elegir nuevo estatus',
          StatusOpt1: 'Pendiente de revisar papelería',
          StatusOpt2: 'Confirmado',
          StatusOpt3: 'Recoger hoy',
          StatusOpt4: 'En tránsito USA',
          StatusOpt44: 'En tránsito MX',
          StatusOpt5: 'Entregado',
          ActualizarStatus: 'Actualizar estatus',
          GuardarStatus: 'Guardar estatus',
          Costo: 'Costo:',
          Precio: 'Precio:',
          Confirmado: 'Confirmar',
          Llamar: 'Llamar',
          Oficinas: 'Oficinas',
          Oficinas1: 'Oficina de Dallas, TX',
          Oficinas2: 'Oficina de Houston, TX',
          Oficinas3: 'Oficina de San Antonio, TX',
          DestinoRutaUSA:
            '(Se envian por correo ordinario con acuse de recibo)',
          EsperandoCotizacion: 'Esperando cotización',
          SolicitaTuTranslado: 'Solicita tu traslado',
          EsperandoConfirmacion: 'Esperando confirmación',
          EnTransitoMX: 'En tránsito MX',
          EnTransitoUSA: 'En tránsito USA',
          IniciarSesion: 'Inicia sesión',
          CrearCuenta: 'Crear cuenta',
          OlvidasteContrasena: '¿Olvidaste la contraseña?',
          LBLCuentaHeader: 'Inicia sesión en tu cuenta',
          LBLCuentaSubH: 'Ingresa el correo con el que te registraste',
          Contrasena: 'Contraseña',
          Email: 'Correo',
          NombreFuneraria: 'Nombre de la funeraria',
          Colonia: 'Colonia',
          Address2: 'Calle y número',
          CP: 'C.P.',
          Welcome: 'Acompaña a tu ser querido en todo momento',
          WelcomeDes:
            'Conoce en donde se encuentra el transporte funerario de tu ser querido ahora.',
          WelcomeDes2:
            'Cotiza y solicita en línea fácilmente el traslado de restos humanos y envío de cenizas que tus clientes necesitan.',
          HoraDesde: 'Hora desde',
          HoraHasta: 'Hora hasta',
          LBLRangoHoras: 'Recoger el servicio entre',
          LBLRangoHorasDesc: 'Rango de horario disponible para la entrega',
          Hasta: 'hasta',
          EditarInfo: 'Editar datos',
          Registro: 'Registro',
          RegistroDesc: 'Complete los datos de su registro.',
          Continuar: 'Continuar',
          GoHome: 'Ir a inicio',
          RegStep1: 'Email & Contraseña',
          RegStepDesc1:
            'Ingrese un correo y contraseña para poder acceder a los servicios que MMS le ofrecerá en esta nueva plataforma.',
          RegStep2: 'Datos de la funeraria',
          RegStepDesc2: 'Ingrese los datos necesarios sobre la funeraria.',
          RegStep3: 'Ingresa a tu cuenta',
          RegStepDesc3: 'Listo, ya puedes ingresar a tu nueva cuenta.',
          RequiredFilds: '* Campos requeridos',
          ErrorPass: 'La contraseña debe tener minimo 7 caracteres',
          Tracking: 'Rastreo',
          Logout: 'Cerrar sesión',
          from: 'de',
          to: 'a',
          TrackingDetails: 'Detalles del servicio',
          TrackingStatus: 'Rastreo a detalle',
          TrackingAdd: 'Agregar rastreo',
          TrackingUpdate: 'Actualizar rastreo',
          Guardar: 'Guardar',
          NotFound: 'No se encontró ningun resultado',
          FormDesc: 'Entrar con...',
          RequiredField: 'Campo obligatorio',
          VerAhora: 'Ver ahora',
          LoadingLabel: 'Cargando...',
          Salir: 'Salir',
          ServiceStatus: 'Estatus del servicio',
          ModalContent: 'Para mas detalles puede llamar al coordinador',
          Call: 'Llamar',
          CallTitle: 'Necesita ayuda?',
          LogoutTitle: 'Desea cerrar sesion?',
          Cancel: 'Cancelar',
          Yes: 'Salir',
        },
      },
      en: {
        translations: {
          Inicio: 'Home',
          Historial: 'Record',
          Sucursales: 'Locations',
          Notificaciones: 'Notifications',
          Rastreo: 'Tracking',
          LlamarACoordinador: 'Call coordinator',
          Traductor: 'Translate',
          ServiciosRecientes: 'Recent Services',
          PapeleriaPendiente: 'Pending papers',
          EnTranscurso: 'In Progress',
          BLUserHome: 'Click to review more options in your services',
          StatusLBLSolicitarTransporte: 'Request your transfer',
          TTLAddService: 'Request Service',
          BLAddService:
            'Complete the necessary information to quote your service.',
          Service: 'Service',
          LBLChooseService: 'Choose a service',
          MTOptions: 'Transportation of international human remains',
          MOption1: 'Transportation only',
          MOption2: 'Complete ship-out',
          MTOptions2: 'International ashes shipping',
          MOption21: 'From point A to point B',
          MOption22: 'On Route',
          Origen: 'Origin',
          Destino: 'Destination',
          FechaRecoleccion: 'Date of removal',
          Cotizacion: 'Price',
          LBLCotizacion: 'Pending confirmation by funeral director',
          LBLPteConfirmar: 'Pending to confirm',
          SolicitarCotizacion: 'Request quote',
          BtnEnviarCotizacion: 'Send quote',
          SolicitarTransporte: 'Request your transportation',
          BLSolicitarTransporte: 'Please fill in the blank.',
          SitioRecoleccion: 'Location site',
          SucursalFuneraria: 'At funeral home location',
          AnotherAddress: 'Other location',
          NombreFinado: 'Name of the deceased',
          NombreContacto: 'Authorized contact name',
          TelefonoCAutorizado: 'Authorized contact phone',
          Parentesco: 'Relationship',
          NombreFamiliarRecibe: 'Receiving family member',
          DirectorFunerario: 'Funeral director',
          FunerariaRecibe: 'Receiving funeral home',
          Telefono: 'Phone',
          TelefonoDeLaFuneraria: 'Funeral home phone',
          CorreoDeLaFuneraria: 'Funeral home email',
          DireccionEntrega: 'Delivery address',
          DireccionAlterna: 'Alternate address',
          Municipio: 'Municipality',
          Estado: 'State',
          TamanoAtaud: 'Casket size',
          TamanoAtaud1: 'American',
          TamanoAtaud2: 'Optima or Mexican Standard Measure',
          DatoSensible: 'Sensitive data',
          Notas: 'Notes',
          Documents: 'Documents',
          DocumentacionTranslado: 'Documents for international shipping',
          EntregaPapeleriaChofer: 'Deliver paperwork to the driver',
          SubirPapeleria: 'Upload stationery',
          LBLSubirPapeleria:
            'In all the transportations is necessary to give the documents to our drivers.',
          LBLSubirPapeleria2:
            'Submit the documents it will help organize the information in one place.',
          ActaDefuncion: 'Death certificate',
          PermisoTransito: 'Transit permit',
          ConstanciaCuerpo: 'Embalmer’s Affidavit',
          VisadoConsular: 'Consulate documents',
          FinishedDocument: 'Service Termination Letter',
          Perfil: 'My profile',
          LBLPerfil:
            'In this section you can edit some data, as well as add your locations.',
          DatosPersonales: 'Personal information',
          Nombre: 'Name',
          Correo: 'Email',
          Puesto: 'Position',
          Actualizar: 'Update',
          ActualizarFecha: 'Update date',
          Fecha: 'Date',
          FechaArrival: 'Estimated date of arriving',
          AgregarSucursales: 'Add my funeral home locations',
          LBLAgregarSucursales: 'In this section you can edit',
          RevisarSucursales: 'Check my locations',
          LBLNotificaciones:
            'In this section you can review the list of your notifications.',
          LBLHistorial:
            'In this section you can review the history of your completed services.',
          LBLStatusEntregado: 'Delivered',
          LBLSucursales:
            'In this section you can review the list of your locations.',
          EditarSucursal: 'Edit location',
          Direccion: 'Address',
          NombreSucursal: 'Location Name',
          DetallesServicio: 'Service details',
          LBLDetallesServicio:
            'In this section you can review the details of your service.',
          LBLServicioDesc:
            'Under the following details, please add service cost',
          LBLStatus: 'Status',
          LBLStatusPendienteCotizar: 'Pending listing',
          LBLStatusCotizado: 'Valued',
          LBLStatusTransladoSolicitado: 'Requested transfer',
          LBLStatusPendienteConfirmar: 'Waiting confirmation',
          LBLStatusConfirmado: 'Confirmed',
          LBLStatusRecogerHoy: 'Removal today',
          LBLStatusEnTransito: 'In transit',
          LBLStatusEnTransitoUSA: 'In transit USA',
          LBLStatusEnTransitoMX: 'In transit MX',
          CambiarStatus: 'Change status',
          ElegirStatus: 'Choose new status',
          StatusOpt1: 'Pending review stationery',
          StatusOpt2: 'Confirmed',
          StatusOpt3: 'Removal today',
          StatusOpt4: 'In transit USA',
          StatusOpt44: 'In transit MX',
          StatusOpt5: 'Delivered',
          ActualizarStatus: 'Update status',
          GuardarStatus: 'Save status',
          Costo: 'Price:',
          Confirmado: 'Confirm',
          Llamar: 'Call',
          Oficinas: 'Offices',
          Oficinas1: 'Dallas, TX Office',
          Oficinas2: 'Houston, TX Office',
          Oficinas3: 'San Antonio, TX Office',
          DestinoRutaUSA:
            '(They are sent by regular mail with acknowledgment of receipt)',
          EsperandoCotizacion: 'Waiting for quote',
          SolicitaTuTranslado: 'Request your transportation',
          EsperandoConfirmacion: 'Waiting confirmation',
          EnTransitoMX: 'In transit MX',
          EnTransitoUSA: 'In transit USA',
          IniciarSesion: 'Sign in',
          CrearCuenta: 'Create account',
          OlvidasteContrasena: 'Forgot password?',
          LBLCuentaHeader: 'Sign in to your account',
          LBLCuentaSubH: 'Enter the email with which you registered',
          Contrasena: 'Password',
          Email: 'Email',
          NombreFuneraria: 'Funeral home name',
          Colonia: 'Address',
          Address2: 'Address 2',
          CP: 'Postal code',
          Welcome: 'Accompany your loved one at all times',
          WelcomeDes: 'Find out where your loved one´s funeral transport is now.',
          WelcomeDes2:
            'Request a quote online for the transfer of human remains and shipping of ashes for your clients.',
          HoraDesde: 'Time from',
          HoraHasta: 'Until',
          LBLRangoHoras: 'Collect the service between',
          LBLRangoHorasDesc: 'Schedule range available for delivery',
          Hasta: 'to',
          EditarInfo: 'Edit info',
          Registro: 'Register',
          RegistroDesc: 'Fill in your registration details.',
          Continuar: 'Continue',
          GoHome: 'Return to home',
          RegStep1: 'Email & Password',
          RegStepDesc1:
            'Enter an email and password to be able to access the services that MMS will offer you on this new platform.',
          RegStep2: 'Funeral home details',
          RegStepDesc2:
            'Enter the necessary information about the funeral home.',
          RegStep3: 'Log in to your account',
          RegStepDesc3: 'Done, you can now enter your new account.',
          RequiredFilds: '* Required filds',
          ErrorPass: 'Password must have at least 7 characteres',
          Tracking: 'Tracking',
          Logout: 'Logout',
          from: 'from',
          to: 'to',
          TrackingDetails: 'Service Details',
          TrackingStatus: 'Tracking status',
          TrackingAdd: 'Add tracking',
          TrackingUpdate: 'Update tracking',
          Guardar: 'Save',
          NotFound: 'No matches found',
          FormDesc: 'Enter with...',
          RequiredField: 'This field is required',
          VerAhora: 'Search result',
          LoadingLabel: 'Loading...',
          Salir: 'Exit',
          ServiceStatus: 'Service status',
          ModalContent: 'For more details you can call the coordinator',
          Call: 'Call',
          CallTitle: 'Do you need more help?',
          LogoutTitle: 'Do you want to logout?',
          Cancel: 'Cancel',
          Yes: 'Yes',
        },
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
