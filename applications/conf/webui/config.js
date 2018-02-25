const CONFIG = process.env.CONFIG || 'default';
const API_URL = process.env.API_URL || 'https://api.rutas.mapanica.net/';
const MAP_URL = process.env.MAP_URL || 'https://tile.memomaps.de/';
const APP_PATH = process.env.APP_CONTEXT || '';
const { PIWIK_ADDRESS, PIWIK_ID, SENTRY_DSN } = process.env;
const PORT = process.env.PORT || 3000;
const APP_DESCRIPTION = 'Digitransit journey planning UI';
const OTP_TIMEOUT = process.env.OTP_TIMEOUT || 10000; // 10k is the current server default
const YEAR = 1900 + new Date().getYear();

export default {
  PIWIK_ADDRESS,
  PIWIK_ID,
  SENTRY_DSN,
  PORT,
  CONFIG,
  OTPTimeout: OTP_TIMEOUT,
  URL: {
    API_URL,
    MAP_URL,
    OTP: `${API_URL}/otp/routers/managua`,
    MAP: {
      default: `${MAP_URL}tilegen/{z}/{x}/{y}.png`,
      sv: `${MAP_URL}tilegen/{z}/{x}/{y}.png`,
    },
    // STOP_MAP: `${MAP_URL}/map/v1/finland-stop-map/`,
    // CITYBIKE_MAP: `${MAP_URL}/map/v1/hsl-citybike-map/`,
    // MQTT: 'wss://mqtt.hsl.fi',
    // ALERTS: `${API_URL}/realtime/service-alerts/v1`,
    FONT:
      'https://fonts.googleapis.com/css?family=Lato:300,400,900%7CPT+Sans+Narrow:400,700',
    REALTIME: `${API_URL}/realtime/vehicle-positions/v1`,
    PELIAS: `${API_URL}/geocoding/v1/search`,
    PELIAS_REVERSE_GEOCODER: `${API_URL}/geocoding/v1/reverse`,
  },

  APP_PATH: `${APP_PATH}`,
  title: 'Reittihaku',

  contactName: {
    sv: 'Digitransit',
    fi: 'Digitransit',
    default: "Digitransit's",
  },

  // Default labels for manifest creation
  name: 'Digitransit beta',
  shortName: 'Digitransit',

  searchParams: {},
  feedIds: [],

  /*
 * by default search endpoints from all but gtfs sources, correct gtfs source
 * figured based on feedIds config variable
 */
  searchSources: ['oa', 'osm', 'nlsfi'],

  search: {
    suggestions: {
      useTransportIcons: false,
    },
    usePeliasStops: false,
    mapPeliasModality: false,
    peliasMapping: {},
    peliasLayer: null,
    peliasLocalization: null,
    minimalRegexp: new RegExp('.{3,}'),
  },

  nearbyRoutes: {
    radius: 10000,
    bucketSize: 1000,
  },

  maxWalkDistance: 10000,
  maxBikingDistance: 100000,
  availableLanguages: ['fi', 'sv', 'en', 'fr', 'nb', 'de'],
  defaultLanguage: 'en',
  // This timezone data will expire on 31.12.2020
  timezoneData:
    'Europe/Helsinki|EET EEST|-20 -30|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 ' +
    'WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5',

  mainMenu: {
    // Whether to show the left menu toggle button at all
    show: true,
    showDisruptions: true,
    showLoginCreateAccount: true,
    showOffCanvasList: true,
  },

  itinerary: {
    // How long vehicle should be late in order to mark it delayed. Measured in seconds.
    delayThreshold: 180,
    // Wait time to show "wait leg"? e.g. 180 means over 3 minutes are shown as wait time.
    // Measured in seconds.
    waitThreshold: 180,
    enableFeedback: false,

    timeNavigation: {
      enableButtonArrows: false,
    },
  },

  nearestStopDistance: {
    maxShownDistance: 5000,
  },

  map: {
    useRetinaTiles: true,
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 1,
    maxZoom: 18,
    controls: {
      zoom: {
        // available controls positions: 'topleft', 'topright', 'bottomleft, 'bottomright'
        position: 'bottomleft',
      },
      scale: {
        position: 'bottomright',
      },
    },
    genericMarker: {
      // Do not render name markers at zoom levels below this value
      nameMarkerMinZoom: 18,

      popup: {
        offset: [106, 16],
        maxWidth: 250,
        minWidth: 250,
      },
    },

    line: {
      halo: {
        weight: 7,
        thinWeight: 4,
      },

      leg: {
        weight: 5,
        thinWeight: 2,
      },

      passiveColor: '#758993',
    },

    useModeIconsInNonTileLayer: false,
  },

  stopCard: {
    header: {
      showDescription: true,
      showStopCode: true,
      showDistance: true,
    },
  },

  autoSuggest: {
    // Let Pelias suggest based on current user location
    locationAware: true,
  },

  // TODO: Switch back in april
  cityBike: {
    showCityBikes: false,

    useUrl: {
      fi: 'https://www.hsl.fi/citybike',
      sv: 'https://www.hsl.fi/sv/citybike',
      en: 'https://www.hsl.fi/en/citybike',
    },

    infoUrl: {
      fi: 'https://www.hsl.fi/kaupunkipyörät',
      sv: 'https://www.hsl.fi/sv/stadscyklar',
      en: 'https://www.hsl.fi/en/citybikes',
    },

    cityBikeMinZoom: 14,
    cityBikeSmallIconZoom: 14,
    // When should bikeshare availability be rendered in orange rather than green
    fewAvailableCount: 3,
  },
  // Lowest level for stops and terminals are rendered
  stopsMinZoom: 13,
  // Highest level when stops and terminals are still rendered as small markers
  stopsSmallMaxZoom: 14,
  // Highest level when terminals are still rendered instead of individual stops
  terminalStopsMaxZoom: 17,
  terminalStopsMinZoom: 12,
  terminalNamesZoom: 16,
  stopsIconSize: {
    small: 8,
    selected: 28,
    default: 18,
  },

  appBarLink: { name: 'Digitransit', href: 'https://www.digitransit.fi/' },

  colors: {
    primary: '#00AFFF',
  },

  sprites: 'svg-sprite.default.svg',

  disruption: {
    showInfoButton: true,
  },

  agency: {
    show: true,
  },

  socialMedia: {
    title: 'Digitransit',
    description: APP_DESCRIPTION,
    locale: 'en_US',

    image: {
      url: '/img/default-social-share.png',
      width: 2400,
      height: 1260,
    },

    twitter: {
      card: 'summary_large_image',
      site: '@hsldevcom',
    },
  },

  meta: {
    description: APP_DESCRIPTION,
    keywords: 'digitransit',
  },
  // Ticket information feature toggle
  showTicketInformation: false,
  showRouteInformation: false,

  modeToOTP: {
    bus: 'BUS',
    tram: 'TRAM',
    rail: 'RAIL',
    subway: 'SUBWAY',
    citybike: 'BICYCLE_RENT',
    airplane: 'AIRPLANE',
    ferry: 'FERRY',
    walk: 'WALK',
    bicycle: 'BICYCLE',
    car: 'CAR',
    car_park: 'CAR_PARK',
  },
  // Control what transport modes that should be possible to select in the UI
  // and whether the transport mode is used in trip planning by default.
  transportModes: {
    bus: {
      availableForSelection: true,
      defaultValue: true,
    },

    tram: {
      availableForSelection: true,
      defaultValue: true,
    },

    rail: {
      availableForSelection: true,
      defaultValue: true,
    },

    subway: {
      availableForSelection: true,
      defaultValue: true,
    },

    // TODO: Switch back in april
    citybike: {
      availableForSelection: false,
      defaultValue: false,
    },

    airplane: {
      availableForSelection: true,
      defaultValue: true,
    },

    ferry: {
      availableForSelection: true,
      defaultValue: true,
    },
  },

  streetModes: {
    walk: {
      availableForSelection: true,
      defaultValue: true,
      icon: 'walk',
    },

    bicycle: {
      availableForSelection: true,
      defaultValue: false,
      icon: 'bicycle-withoutBox',
    },

    car: {
      availableForSelection: true,
      defaultValue: false,
      icon: 'car-withoutBox',
    },

    car_park: {
      availableForSelection: false,
      defaultValue: false,
      icon: 'car_park-withoutBox',
    },
  },

  ticketOptions: [
    {
      displayName: 'Ei lippuvyöhykerajoitusta',
      value: '0',
    },
  ],

  accessibilityOptions: [
    {
      displayName: 'Ei rajoitusta',
      value: '0',
    },
    {
      displayName: 'Liikun pyörätuolilla',
      value: '1',
    },
  ],

  moment: {
    relativeTimeThreshold: {
      seconds: 55,
      minutes: 59,
      hours: 23,
      days: 26,
      months: 11,
    },
  },

  customizeSearch: {
    walkReluctance: {
      available: true,
    },

    walkBoardCost: {
      available: true,
    },

    transferMargin: {
      available: true,
    },

    walkingSpeed: {
      available: true,
    },

    ticketOptions: {
      available: true,
    },

    accessibility: {
      available: true,
    },
  },

  areaPolygon: [
    [-83.9444417, 10.554445300000001],
    [-84.1180664, 10.587785700000001],
    [-84.5499386, 10.6975698],
    [-85.7196237, 11.018949800000001],
    [-86.514432, 11.776288500000001],
    [-87.5844467, 12.836345900000001],
    [-87.67741000000001, 12.9314418],
    [-87.6768184, 12.933731900000002],
    [-87.59051190000001, 13.047430400000001],
    [-86.5702443, 14.029183100000001],
    [-84.990266, 14.7301356],
    [-83.2719115, 15.0388721],
    [-83.21495390000001, 15.0246858],
    [-83.1851221, 15.014600300000001],
    [-83.0325272, 12.174686000000001],
    [-83.6894408, 10.792780800000001],
    [-83.8836605, 10.5717794],
    [-83.9444417, 10.554445300000001],
  ],

  footer: {
    content: [
      { label: `© HSL, Liikennevirasto ${YEAR}` },
      {},
      {
        name: 'footer-feedback',
        nameEn: 'Submit feedback',
        href: 'https://github.com/HSLdevcom/digitransit-ui/issues',
        icon: 'icon-icon_speech-bubble',
      },
      {
        name: 'about-this-service',
        nameEn: 'About this service',
        route: '/tietoja-palvelusta',
        icon: 'icon-icon_info',
      },
    ],
  },

  // Default origin endpoint to use when user is outside of area
  defaultEndpoint: {
    address: 'Helsinki-Vantaan Lentoasema',
    lat: 60.317429,
    lon: 24.9690395,
  },
  defaultOrigins: [
    {
      icon: 'icon-icon_airplane',
      label: 'Helsinki-Vantaan lentoasema',
      lat: 60.317429,
      lon: 24.9690395,
    },
    {
      icon: 'icon-icon_ferry',
      label: 'Turun satama',
      lat: 60.436363,
      lon: 22.220002,
    },
    {
      icon: 'icon-icon_airplane',
      label: 'Rovaniemen lentoasema',
      lat: 66.557326,
      lon: 25.828135,
    },
  ],

  aboutThisService: {
    fi: [
      {
        header: 'Tietoja palvelusta',
        paragraphs: [
          'Palvelu kattaa joukkoliikenteen, kävelyn, pyöräilyn ja yksityisautoilun rajatuilta osin. Palvelu perustuu Digitransit palvelualustaan.',
        ],
      },
      {
        header: 'Digitransit palvelualusta',
        paragraphs: [
          'Digitransit-palvelualusta on HSL:n ja Liikenneviraston kehittämä avoimen lähdekoodin reititystuote.',
        ],
      },
      {
        header: 'Tietolähteet',
        paragraphs: [
          'Kartat, tiedot kaduista, rakennuksista, pysäkkien sijainnista ynnä muusta tarjoaa © OpenStreetMap contributors. Osoitetiedot tuodaan Väestörekisterikeskuksen rakennustietorekisteristä. Joukkoliikenteen reitit ja aikataulut ladataan Liikenneviraston valtakunnallisesta joukkoliikenteen tietokannasta.',
        ],
      },
    ],

    sv: [
      {
        header: 'Om tjänsten',
        paragraphs: [
          'Reseplaneraren täcker med vissa begränsningar kollektivtrafik, promenad, cykling samt privatbilism. Tjänsten baserar sig på Digitransit-plattformen.',
        ],
      },
      {
        header: 'Digitransit-plattformen',
        paragraphs: [
          'Digitransit-plattformen är en öppen programvara utvecklad av HRT och Trafikverket.',
        ],
      },
      {
        header: 'Datakällor',
        paragraphs: [
          'Kartor, gator, byggnader, hållplatser och dylik information erbjuds av © OpenStreetMap contributors. Addressinformation hämtas från BRC:s byggnadsinformationsregister. Kollektivtrafikens rutter och tidtabeller hämtas från Trafikverkets landsomfattande kollektivtrafiksdatabas.',
        ],
      },
    ],

    en: [
      {
        header: 'About this service',
        paragraphs: [
          'The service covers public transport, walking, cycling, and some private car use. Service is built on Digitransit platform.',
        ],
      },
      {
        header: 'Digitransit platform',
        paragraphs: [
          'The Digitransit service platform is an open source routing platform developed by HSL and The Finnish Transport Agency.',
        ],
      },
      {
        header: 'Data sources',
        paragraphs: [
          "Maps, streets, buildings, stop locations etc. are provided by © OpenStreetMap contributors. Address data is retrieved from the Building and Dwelling Register of the Finnish Population Register Center. Public transport routes and timetables are downloaded from Finnish Transport Agency's national public transit database.",
        ],
      },
    ],
    nb: {},
    fr: {},
    de: {},
  },

  staticMessages: [],

  themeMap: {
    hsl: 'reittiopas',
    turku: '(turku|foli)',
    lappeenranta: 'lappeenranta',
    joensuu: 'joensuu',
    oulu: 'oulu',
    hameenlinna: 'hameenlinna',
    matka: 'matka',
    mikkeli: 'mikkeli',
    kotka: 'kotka',
    jyvaskyla: 'jyvaskyla',
    lahti: 'lahti',
    kuopio: 'kuopio',
  },

  piwikMap: [
    // in priority order. 1st match stops
    { id: '10', expr: 'dev-joensuu' },
    { id: '11', expr: 'joensuu' },
    { id: '12', expr: 'dev-turku' },
    { id: '13', expr: '(turku|foli)' },
    { id: '14', expr: 'hameenlinna' },
    { id: '15', expr: 'jyvaskyla' },
    { id: '16', expr: 'kuopio' },
    { id: '21', expr: 'oulu' },
    // put generic expressions last so that they do not match waltti cities
    // e.g. reittiopas.hameenlinna.fi or turku.digitransit.fi
    { id: '5', expr: 'dev.reittiopas' },
    { id: '4', expr: 'reittiopas' },
    { id: '7', expr: 'dev.matka' },
    { id: '6', expr: 'matka' },
    { id: '7', expr: 'dev.digitransit' },
    { id: '6', expr: 'digitransit' },
  ],

  minutesToDepartureLimit: 9,

  imperialEnabled: false,
  // this flag when true enables imperial measurements  'feet/miles system'
};
