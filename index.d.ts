
export declare interface DbSaveDoc {
  _id: string;
  [key: string]: any;
}

export declare interface DbRet {
  id: string;
  ok: boolean;
  _rev: string;
}

export declare interface DbGetDoc {
  _id: string;
  _rev: string;
  [key: string]: any;
}

export enum Path {
  HOME = 'home',
  APP_DATA = 'appData',
  USER_DATA = 'userData',
  TEMP = 'temp',
  EXE = 'exe',
  DESKTOP = 'desktop',
  DOCUMENTS =  'documents',
  DOWNLOADS = 'downloads',
  MUSIC = 'music',
  PICTURES = 'pictures',
  VIDEOS = 'videos',
  LOGS = 'logs',
}

declare namespace utools {
  // 事件
  export function onPluginEnter(callback: ({ code: string, type: string, payload: any }) => void): void;
  export function onPluginOut(callback: Function): void;
  export function onPluginDetach(callback: Function): void;
  export function onDbPull(callback: Function): void;

  // 数据库（db)
  export namespace db {
    export function put(doc: DbSaveDoc): DbRet;
    export function get(id: string): DbGetDoc;
    export function remove(id: string): DbRet;
    export function bulkDocs(docs: DbSaveDoc[]): DbRet[];
    export function allDocs(prevKey: string[]): DbGetDoc[];
  }

  // 窗口管理
  export function hideMainWindow(): boolean;
  export function showMainWindow(): boolean;
  export function setExpendHeight(height: number): boolean;
  export function setSubInput(onChange: ({ text: string }) => void, placeholder?: string): boolean;
  export function removeSubInput(): boolean;
  export function setSubInputValue(value: string): boolean;
  export function outPlugin(): boolean;

  // 其他
  export function isHadPrivilege(): boolean;
  export function requestPrivilege(): boolean;
  export function getPath(name: Path | string): string;
}