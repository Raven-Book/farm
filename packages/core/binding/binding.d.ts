/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

/** Resolve hook filters, works as `||`. If any importers or sources matches any regex item in the Vec, we treat it as filtered. */
export interface JsPluginResolveHookFilters {
  importers: Array<string>
  sources: Array<string>
}
export interface JsPluginLoadHookFilters {
  resolvedPaths: Array<string>
}
export interface JsPluginTransformHookFilters {
  resolvedPaths: Array<string>
  moduleTypes: Array<string>
}
export interface WatchDiffResult {
  add: Array<string>
  remove: Array<string>
}
export interface JsUpdateResult {
  added: Array<string>
  changed: Array<string>
  removed: Array<string>
  immutableModules: string
  mutableModules: string
  boundaries: Record<string, Array<Array<string>>>
  dynamicResourcesMap?: Record<string, Array<Array<string>>>
  extraWatchResult: WatchDiffResult
}
export interface ResolveRecord {
  plugin: string
  hook: string
  source: string
  importer?: string
  kind: string
  isHmr: boolean
}
export interface TransformRecord {
  plugin: string
  hook: string
  content: string
  sourceMaps?: string
  moduleType: string
  isHmr: boolean
}
export interface ModuleRecord {
  name: string
}
export interface AnalyzeDep {
  source: string
  kind: string
}
export interface AnalyzeDepsRecord {
  name: string
  deps: Array<AnalyzeDep>
}
export interface Module {
  id: string
  moduleType: string
  sideEffects: boolean
  sourceMapChain: Array<string>
  external: boolean
  immutable: boolean
}
export interface ResourcePotRecord {
  name: string
  hook: string
  modules: Array<string>
  resources: Array<string>
}
export type JsCompiler = Compiler
export class Compiler {
  constructor(config: object)
  /**
   * async compile, return promise
   *
   * TODO: usage example
   */
  compile(): Promise<void>
  /** sync compile */
  compileSync(): void
  /** TODO: usage example */
  update(paths: Array<string>, callback: (...args: any[]) => any, sync: boolean): object
  addWatchFiles(root: string, paths: Array<string>): void
  hasModule(resolvedPath: string): boolean
  resources(): Record<string, Buffer>
  watchModules(): Array<string>
  relativeModulePaths(): Array<string>
  resource(name: string): Buffer | null
  modules(): Array<Module>
  getResolveRecordsById(id: string): Array<ResolveRecord>
  getTransformRecordsById(id: string): Array<TransformRecord>
  getProcessRecordsById(id: string): Array<ModuleRecord>
  getAnalyzeDepsRecordsById(id: string): Array<AnalyzeDepsRecord>
  getResourcePotRecordsById(id: string): Array<ResourcePotRecord>
}
export type FileWatcher = JsFileWatcher
export class JsFileWatcher {
  constructor(callback: (...args: any[]) => any)
  watch(paths: Array<string>): void
  unwatch(paths: Array<string>): void
}
