export interface DatabaseInterface {
  getById<T>(collection_name: string, id: string): Promise<any>
  getAll<T>(collection_name: string, filter: {}, options: {}): Promise<any>
  insert<T>(collection_name: string, document: {}): Promise<any>
  update<T>(collection_name: string, doc_id: string, document: {}): Promise<any>
  updateMany<T>(collection_name: string, filter: {}, document: {}): Promise<any>
  delete<T>(collection_name: string, doc_id: string): Promise<any>
  aggregate<T>(collection_name: string, pipeline: Array<any>): Promise<Array<any>>
}
