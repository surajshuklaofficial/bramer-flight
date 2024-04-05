/**
 * @file
 * Default values for the configuration options of the application.
 */

import { type Config } from 'config';

// const skybrushIcon =
//   'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iNi4wMjUiIHkxPSIxMi4xNjkiIHgyPSI1LjU2MyIgeTI9IjI2LjQ5NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzA1NmVkZSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwN2JmZiIvPjwvbGluZWFyR3JhZGllbnQ+PGNsaXBQYXRoIGlkPSJhIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHg9IjQuOTcxIiB5PSItMTIiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDQ1KSIvPjwvY2xpcFBhdGg+PC9kZWZzPjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcnk9IjQuMiIgZmlsbD0iIzAwN2JmZiIvPjxwYXRoIGQ9Ik0yLjI1NyAxMC41MTZ2MTUuNjkybDYuNjEyLjU3M1YxMi4xNjlIMy4xODFsLS45MjQtMS42NTNtOC4wODggMS43NjVoMTEuMzcxdjE2LjY5SDEwLjM0NXoiIGNsaXAtcGF0aD0idXJsKCNhKSIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDEyIDEyKSIgZmlsbD0idXJsKCNiKSIvPjxwYXRoIGQ9Ik04LjIyMSAxMy42ODFhMi40OTMgMi40OTMgMCAwIDAtMi40OTYgMi40OTZjMCAxLjA5LS45NjUgMS42NjQtMS42NjQgMS42NjQuNzY1IDEuMDE1IDIuMDcxIDEuNjY0IDMuMzI4IDEuNjY0YTMuMzI3IDMuMzI3IDAgMCAwIDMuMzI4LTMuMzI4IDIuNDkzIDIuNDkzIDAgMCAwLTIuNDk2LTIuNDk2em0xMS40MDUtNy43OTUtMS4xMTUtMS4xMTVhLjgzLjgzIDAgMCAwLTEuMTczIDBsLTcuNDU0IDcuNDU0IDIuMjg4IDIuMjg4IDcuNDU0LTcuNDU0YS44My44MyAwIDAgMCAwLTEuMTczeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPgo=';

const BramerFlightIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGFBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAACrC2ehAAAAB3RSTlMAlLQ4F2Xcjc10fwAAAAlwSFlzAAAD6AAAA+gBtXtSawAAAldJREFUeJztmOsSoyAMhQ0k4f3feAdUCIiXCu7szJ7vT1shEA9JoCwLAAAAAAAAAAAAAAAAgH8eCkH9K0uvIdDPVuyF3AqReE8hIkS0P04NfDSUqgeRJEvyPjfEAfnGaRce4hrL54ZXctLTUUII9Tj+B8uLZXGPB1FpTEXDW/EscuaCUzOBkvRsyXbR05F6thZmH2Fm3iJ5V41TU3p8xtaDy3qmDIqDbaMuPyMhuBdmcVoXwt3rPoDfJPMKhfDO9TYqlN6MwzEmblf8jrWaBO16wOJU1Um/cQvJQQ/cFrv+smr01sg/SLofHEjFtcYmvh6bs+UyYwkGGFwCDqOM5oEcRtTI3xJgiUVecyFK65p+dAqtxHon+VssRHrYMsbwOah6K7OW69zlC1xOyN7uqyU3352gHgvgyXVjgMhblT4TQC5CzrGRaTa8vtv6IdI/PdGHElAR4DQOYo58JQFvb0bXDvj1+dsd/II9vNMnnS1B7FGqxXQB9P7kvCfCdAkojiqNAyq8cH0ejqujH0jAuwDWgf0tqXFAPpCAdgHMbCXXzM6Q4nO+BJwFMA6UVDMJkR7Ol0CyAMYB0944MF8CzQIUB7bfZULjwGwJpAjwTIHV43kSqBnuSQzULo8j/Zw7z4J60cZRG1Im6eWkDsyWQKqIkva2o75V6STuMFrnVDVfe0CWTukaRZqUiv+6zzATzpNAawHSTVqk2hZlvX+wvWZJwI0AzQyHN68NJ5zN+CBAZt+ITy4yadLhUC7+38RLzXgY78L69o4VAAAAAAAAAAAAAAAA/iv+ACZ4KpTwPYHRAAAAAElFTkSuQmCC";

const defaults: Config = {
  branding: {
    splashIcon: {
      srcSet: {
        default: BramerFlightIcon,
        twoX: BramerFlightIcon,
      },
      width: 96,
      height: 96,
    },
    splashTitle: 'Bramer Flight',
  },

  ephemeral: false,

  examples: {
    shows: [],
  },

  features: {
    loadShowFromCloud: false,
    missionEditor: false,
  },

  headerComponents: [
    ['uav-status-summary'],
    [
      'distance-summary-header-button',
      'altitude-summary-header-button',
      'velocity-summary-header-button',
      'battery-status-header-button',
      'rtk-status-header-button',
    ],
    ['weather-header-button'],
    ['connection-status-button'],
    [
      'server-connection-settings-button',
      'safety-button',
      'authentication-button',
    ],
    [
      'broadcast-button',
      'toolbox-button',
      'app-settings-button',
      'alert-button',
      'help-button',
      'full-screen-button',
      'session-expiry-box',
    ],
  ],

  map: {
    drawingTools: [
      ['select', 'zoom'],
      [
        'add-marker',
        'draw-path',
        'draw-circle',
        'draw-rectangle',
        'draw-polygon',
        'cut-hole',
        'edit-feature',
      ],
    ],

    features: {
      onCreate() {
        /* do nothing */
      },
    },
  },

  optimizeForSingleUAV: {
    default: false,
    force: false,
  },

  optimizeUIForTouch: {
    default: null,
    force: false,
  },

  perspectives: ['default'],

  ribbon: {
    label: null,
    position: 'bottomRight',
  },

  server: {
    connectAutomatically: true,
    preventAutodetection: false,
    preventManualSetup: false,
    hostName: 'localhost',
    port: null,
    isSecure: null,
    warnClockSkew: true,
  },

  session: {
    maxLengthInSeconds: null,
  },

  toastPlacement: 'top-center',
  tour: null,

  urls: {
    help: 'https://doc.collmot.com/public/skybrush-live-doc/latest',
    exit: null,
  },
};

export default defaults;
