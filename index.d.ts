
interface DbSaveDoc {
  _id: string;
  [key: string]: any;
}

interface DbRet {
  id: string;
  ok: boolean;
  _rev: string;
}

interface DbGetDoc {
  _id: string;
  _rev: string;
  [key: string]: any;
}
interface onPluginEnterFuncCallbackParam {
  code: string;
  type: string;
  payload: any;
}

declare interface UTools {
  db: {
    put: (doc: DbSaveDoc) => DbRet;
    get: (id: string) => DbGetDoc;
    remove: (id: string) => DbRet;
    bulkDocs: (docs: DbSaveDoc[]) => DbRet[];
    allDocs: (prevKey: string[]) => DbGetDoc[];
  };

  // event
  onPluginEnter: (callback: (param: onPluginEnterFuncCallbackParam) => void) => void;
  onPluginOut: (callback: Function) => void;
  onPluginDetach: (callback: Function) => void;
  onDbPull: (callback: Function) => void;

  // others
  isHadPrivilege: () => boolean;
  getPath: (name: string) => string;
  requestPrivilege: () => boolean;
}

declare const utools: UTools;