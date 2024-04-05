import { app, Menu, shell } from 'electron';
import { is, openUrlMenuItem } from 'electron-util';
import { aboutMenuItem, appMenu } from 'electron-util/main';

import { showAppSettingsDialog } from './dispatcher.mjs';

const helpSubmenu = [
  openUrlMenuItem({
    label: 'Website',
    url: 'https://bramer.in',
  }),
];

const preferencesItem = {
  label: 'Preferences…',
  accelerator: 'Command+,',
  click: () => showAppSettingsDialog(),
};

const macOsMenuTemplate = [
  appMenu([preferencesItem]),
  {
    role: 'editMenu',
  },
  {
    role: 'windowMenu',
  },
  {
    role: 'help',
    submenu: helpSubmenu,
  },
];

const linuxWindowsMenuTemplate = [
  {
    label: 'File',
    submenu: [preferencesItem, { type: 'separator' }, { role: 'quit' }],
  },
  {
    role: 'editMenu',
  },
  {
    role: 'windowMenu',
  },
  {
    role: 'help',
    submenu: helpSubmenu,
  },
];

if (!is.macos) {
  helpSubmenu.push(
    { type: 'separator' },
    aboutMenuItem({
      copyright: 'Copyright © Bramer PVT LTD',
    })
  );
}

const template = is.macos ? macOsMenuTemplate : linuxWindowsMenuTemplate;

if (!app.isPackaged) {
  template.push({
    label: 'Debug',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      {
        label: 'Show App Data',
        async click() {
          await shell.openPath(app.getPath('userData'));
        },
      },
      {
        label: 'Delete App Data',
        async click() {
          await shell.trashItem(app.getPath('userData'));
          app.relaunch();
          app.quit();
        },
      },
    ],
  });
}

const createAppMenu = () => Menu.buildFromTemplate(template);

export default createAppMenu;
